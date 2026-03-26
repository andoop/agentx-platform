import { AgentXClient } from "@agentx/sdk";

import { loadSession } from "../lib/session.js";

export async function searchCommand(query: string) {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const results = await client.listArtifacts(query);

  for (const result of results) {
    console.log(`${result.slug} (${result.type})`);
    console.log(`  ${result.summary}`);
    console.log(`  version=${result.currentVersion} status=${result.status}`);
  }
}
