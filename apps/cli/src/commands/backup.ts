import { AgentXClient } from "@agentx/sdk";

import { loadSession } from "../lib/session.js";

export async function backupCommand(label?: string) {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const result = await client.createPersistenceBackup(label);

  console.log(`Created backup: ${result.fileName}`);
  console.log(`Backup path: ${result.backupPath}`);
}
