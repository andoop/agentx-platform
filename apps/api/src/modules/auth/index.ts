import type { FastifyInstance } from "fastify";
import type { ActorRole } from "@agentx/schema";
import { z } from "zod";

import { requireActor } from "../../auth/actor.js";
import { signAccessToken } from "../../auth/token.js";
import { hasRole } from "../../data/repository.js";
import { artifactRepository } from "../../data/repository.js";

const loginSchema = z.object({
  email: z.string().min(1),
  password: z.string().min(1)
});

const changePasswordSchema = z.object({
  currentPassword: z.string().min(1),
  newPassword: z.string().min(8)
});

function permissionsFor(actor: { roles: ActorRole[] }) {
  return {
    canView: true,
    canPublish: hasRole(actor, "publisher"),
    canReview: hasRole(actor, "reviewer"),
    canAdmin: hasRole(actor, "admin")
  };
}

export async function registerAuthRoutes(app: FastifyInstance): Promise<void> {
  app.post("/auth/login", async (request, reply) => {
    const input = loginSchema.parse(request.body);
    const member = await artifactRepository.getMemberByEmail(input.email);
    if (member?.disabledAt) {
      await artifactRepository.writeAudit({
        action: "auth.login.failed",
        actor: input.email,
        resourceType: "auth_session",
        resourceId: input.email,
        metadata: { reason: "member_disabled" }
      });
      return reply.code(403).send({ message: "Member is disabled" });
    }

    const actor = await artifactRepository.verifyMemberCredentials(input.email, input.password);

    if (!actor) {
      await artifactRepository.writeAudit({
        action: "auth.login.failed",
        actor: input.email,
        resourceType: "auth_session",
        resourceId: input.email,
        metadata: { reason: "invalid_credentials" }
      });
      return reply.code(401).send({ message: "Invalid email or password" });
    }

    const session = await signAccessToken(actor);
    await artifactRepository.writeAudit({
      action: "auth.login.succeeded",
      actor: actor.email,
      resourceType: "auth_session",
      resourceId: actor.email
    });

    return {
      token: session.token,
      tokenType: "Bearer",
      expiresAt: session.expiresAt,
      actor,
      permissions: permissionsFor(actor)
    };
  });

  app.get("/auth/me", async (request, reply) => {
    const actor = await requireActor(request, reply);
    if (!actor) {
      return;
    }

    return {
      actor,
      permissions: permissionsFor(actor)
    };
  });

  app.post("/auth/logout", async () => ({
    ok: true
  }));

  app.post("/auth/change-password", async (request, reply) => {
    const actor = await requireActor(request, reply);
    if (!actor) {
      return;
    }

    try {
      const input = changePasswordSchema.parse(request.body);
      const member = await artifactRepository.changeOwnPassword({
        email: actor.email,
        currentPassword: input.currentPassword,
        newPassword: input.newPassword,
        performedBy: actor.email
      });
      return {
        ok: true,
        member
      };
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Failed to change password" });
    }
  });
}
