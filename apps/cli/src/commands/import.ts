import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

import { AgentXClient } from "@agentx/sdk";

import { loadSession } from "../lib/session.js";

export async function importCommand(inputPath: string) {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const resolvedPath = resolve(process.env.INIT_CWD ?? process.cwd(), inputPath);
  const raw = await readFile(resolvedPath, "utf8");
  const payload = JSON.parse(raw) as unknown;
  const result = await client.importPersistence(payload);

  console.log(`Imported persistence state from ${resolvedPath}`);
  console.log(
    `artifacts=${result.counts.artifacts} reviews=${result.counts.reviews} installs=${result.counts.installs} auditLogs=${result.counts.auditLogs} members=${result.counts.members}`
  );
}
