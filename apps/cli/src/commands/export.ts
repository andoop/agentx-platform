import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import { AgentXClient } from "@agentx/sdk";

import { loadSession } from "../lib/session.js";

export async function exportCommand(outputPath: string) {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const state = await client.exportPersistence();
  const resolvedPath = resolve(process.env.INIT_CWD ?? process.cwd(), outputPath);

  await mkdir(dirname(resolvedPath), { recursive: true });
  await writeFile(resolvedPath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
  console.log(`Exported persistence state to ${resolvedPath}`);
}
