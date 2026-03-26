import type { FastifyInstance } from "fastify";
import { actorRoleSchema } from "@agentx/schema";
import { z } from "zod";

import { getRequestActor, requireRole } from "../../auth/actor.js";
import { artifactRepository, hasRole } from "../../data/repository.js";

const memberInputSchema = z.object({
  email: z.string().min(1),
  team: z.string().min(1),
  roles: z.array(actorRoleSchema).min(1)
});

const createMemberSchema = memberInputSchema.extend({
  password: z.string().min(8)
});

const resetPasswordSchema = z.object({
  password: z.string().min(8)
});

const memberStatusSchema = z.object({
  disabled: z.boolean()
});

export async function registerAuthzRoutes(app: FastifyInstance): Promise<void> {
  app.get("/authz/members", async (request, reply) => {
    const actor = await requireRole(request, reply, "admin");
    if (!actor) {
      return;
    }

    return await artifactRepository.listMembers();
  });

  app.get("/authz/permissions/:email", async (request, reply) => {
    const actor = await getRequestActor(request);
    const { email } = request.params as { email: string };

    if (!actor) {
      return reply.code(401).send({
        message: "Authentication required. Login via /auth/login or use a valid Bearer token."
      });
    }

    if (actor.email !== email && !hasRole(actor, "admin")) {
      return reply.code(403).send({
        message: "Forbidden. You can only view your own permissions unless you are an admin."
      });
    }

    const member = await artifactRepository.getMemberByEmail(email);

    if (!member) {
      return reply.code(404).send({ message: `Member ${email} not found` });
    }

    const permissions = {
      canView: true,
      canPublish: hasRole(member, "publisher"),
      canReview: hasRole(member, "reviewer"),
      canAdmin: hasRole(member, "admin")
    };

    return {
      member,
      permissions
    };
  });

  app.post("/authz/members", async (request, reply) => {
    const actor = await requireRole(request, reply, "admin");
    if (!actor) {
      return;
    }

    try {
      const input = createMemberSchema.parse(request.body);
      const member = await artifactRepository.createMember({
        ...input,
        performedBy: actor.email
      });
      return reply.code(201).send({ member });
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Failed to create member" });
    }
  });

  app.patch("/authz/members/:email", async (request, reply) => {
    const actor = await requireRole(request, reply, "admin");
    if (!actor) {
      return;
    }

    try {
      const { email } = request.params as { email: string };
      const input = memberInputSchema.parse({
        email,
        ...(request.body as object)
      });
      const member = await artifactRepository.updateMember({
        ...input,
        performedBy: actor.email
      });
      return { member };
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Failed to update member" });
    }
  });

  app.post("/authz/members/:email/reset-password", async (request, reply) => {
    const actor = await requireRole(request, reply, "admin");
    if (!actor) {
      return;
    }

    try {
      const { email } = request.params as { email: string };
      const { password } = resetPasswordSchema.parse(request.body);
      const member = await artifactRepository.resetMemberPassword({
        email,
        password,
        performedBy: actor.email
      });
      return { ok: true, member };
    } catch (error) {
      return reply
        .code(400)
        .send({ message: error instanceof Error ? error.message : "Failed to reset member password" });
    }
  });

  app.post("/authz/members/:email/status", async (request, reply) => {
    const actor = await requireRole(request, reply, "admin");
    if (!actor) {
      return;
    }

    try {
      const { email } = request.params as { email: string };
      const { disabled } = memberStatusSchema.parse(request.body);
      const member = await artifactRepository.setMemberDisabled({
        email,
        disabled,
        performedBy: actor.email
      });
      return { ok: true, member };
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Failed to update member status" });
    }
  });
}
