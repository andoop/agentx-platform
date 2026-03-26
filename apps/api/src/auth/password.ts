import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const defaultDemoPassword = process.env.AGENTX_DEMO_PASSWORD ?? "agentx123";

const demoPasswords: Record<string, string> = {
  "alice@internal": process.env.AGENTX_ALICE_PASSWORD ?? defaultDemoPassword,
  "bob@internal": process.env.AGENTX_BOB_PASSWORD ?? defaultDemoPassword
};

export function getSeedPassword(email: string): string {
  return demoPasswords[email] ?? defaultDemoPassword;
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = scryptSync(password, salt, 64).toString("hex");
  return `scrypt:${salt}:${derivedKey}`;
}

export function verifyPassword(password: string, hash: string): boolean {
  const [algorithm, salt, stored] = hash.split(":");
  if (algorithm !== "scrypt" || !salt || !stored) {
    return false;
  }

  const derivedKey = scryptSync(password, salt, 64);
  const storedBuffer = Buffer.from(stored, "hex");

  if (storedBuffer.length !== derivedKey.length) {
    return false;
  }

  return timingSafeEqual(storedBuffer, derivedKey);
}
