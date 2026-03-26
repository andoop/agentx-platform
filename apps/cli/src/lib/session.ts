import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

export interface AgentXSession {
  apiBaseUrl: string;
  token?: string;
}

const configDir = join(homedir(), ".agentx");
const sessionPath = join(configDir, "session.json");

export async function saveSession(session: AgentXSession): Promise<void> {
  await mkdir(configDir, { recursive: true });
  await writeFile(sessionPath, JSON.stringify(session, null, 2), "utf8");
}

export async function loadSession(): Promise<AgentXSession> {
  try {
    const raw = await readFile(sessionPath, "utf8");
    return JSON.parse(raw) as AgentXSession;
  } catch {
    return {
      apiBaseUrl: process.env.AGENTX_API_URL ?? "http://localhost:4000"
    };
  }
}

export async function clearSession(): Promise<void> {
  await rm(sessionPath, { force: true });
}
