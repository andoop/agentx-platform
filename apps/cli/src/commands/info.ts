import { AgentXClient } from "@agentx/sdk";

import { loadSession } from "../lib/session.js";

export async function infoCommand(slug: string) {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const manifest = await client.getArtifact(slug);

  console.log(JSON.stringify(manifest, null, 2));
}
