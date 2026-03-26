import { SignJWT, jwtVerify } from "jose";
import type { ActorRole } from "@agentx/schema";

const issuer = "agentx-api";
const audience = "agentx-clients";
const secret = new TextEncoder().encode(process.env.AGENTX_JWT_SECRET ?? "agentx-dev-secret-change-me");
const expiresIn = process.env.AGENTX_JWT_EXPIRES_IN ?? "12h";

export interface AccessTokenPayload {
  email: string;
  team: string;
  roles: ActorRole[];
}

export async function signAccessToken(payload: AccessTokenPayload): Promise<{ token: string; expiresAt: string }> {
  const expirationDate = new Date(Date.now() + 12 * 60 * 60 * 1000);
  const token = await new SignJWT({
    email: payload.email,
    team: payload.team,
    roles: payload.roles,
    type: "access"
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuer(issuer)
    .setAudience(audience)
    .setSubject(payload.email)
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);

  return {
    token,
    expiresAt: expirationDate.toISOString()
  };
}

export async function verifyAccessToken(token: string): Promise<AccessTokenPayload | undefined> {
  try {
    const result = await jwtVerify(token, secret, {
      issuer,
      audience
    });

    if (
      typeof result.payload.email !== "string" ||
      typeof result.payload.team !== "string" ||
      !Array.isArray(result.payload.roles)
    ) {
      return undefined;
    }

    return {
      email: result.payload.email,
      team: result.payload.team,
      roles: result.payload.roles.filter((role): role is ActorRole => typeof role === "string")
    };
  } catch {
    return undefined;
  }
}
