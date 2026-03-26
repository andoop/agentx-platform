import type { FastifyReply, FastifyRequest } from "fastify";
import type { ActorRole } from "@agentx/schema";

import { artifactRepository, hasRole } from "../data/repository.js";
import { verifyAccessToken } from "./token.js";

export interface RequestActor {
  email: string;
  roles: ActorRole[];
  team: string;
}

async function resolveActorFromToken(token: string): Promise<RequestActor | undefined> {
  const verified = await verifyAccessToken(token);
  if (verified) {
    const member = await artifactRepository.getMemberByEmail(verified.email);
    if (!member || member.disabledAt) {
      return undefined;
    }

    return {
      email: member.email,
      roles: member.roles,
      team: member.team
    };
  }

  const legacyMember = await artifactRepository.getMemberByEmail(token);
  if (!legacyMember || legacyMember.disabledAt) {
    return undefined;
  }

  return {
    email: legacyMember.email,
    roles: legacyMember.roles,
    team: legacyMember.team
  };
}

function extractBearerToken(request: FastifyRequest): string | undefined {
  const authorization = request.headers.authorization;
  if (!authorization) {
    return undefined;
  }

  const [scheme, token] = authorization.split(" ");
  if (scheme?.toLowerCase() !== "bearer" || !token) {
    return undefined;
  }

  return token.trim();
}

export async function getRequestActor(request: FastifyRequest): Promise<RequestActor | undefined> {
  const actorToken =
    extractBearerToken(request) ??
    (typeof request.headers["x-agentx-actor"] === "string" ? request.headers["x-agentx-actor"] : undefined);

  if (!actorToken) {
    return undefined;
  }

  return resolveActorFromToken(actorToken);
}

export async function requireActor(request: FastifyRequest, reply: FastifyReply): Promise<RequestActor | undefined> {
  const actor = await getRequestActor(request);

  if (!actor) {
    await reply.code(401).send({
      message: "Authentication required. Login via /auth/login or use a valid Bearer token."
    });
    return undefined;
  }

  return actor;
}

export async function requireRole(
  request: FastifyRequest,
  reply: FastifyReply,
  role: ActorRole
): Promise<RequestActor | undefined> {
  const actor = await requireActor(request, reply);
  if (!actor) {
    return undefined;
  }

  if (!hasRole(actor, role)) {
    await reply.code(403).send({
      message: `Forbidden. ${role} role required.`
    });
    return undefined;
  }

  return actor;
}
