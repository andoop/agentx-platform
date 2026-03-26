import { AgentXClient } from "@agentx/sdk";

import { saveSession } from "../lib/session.js";

export async function loginCommand(options: { apiUrl: string; token?: string; email?: string; password?: string }) {
  let token = options.token;

  if (!token) {
    const email = options.email ?? process.env.AGENTX_ACTOR_EMAIL ?? "alice@internal";
    const password = options.password ?? process.env.AGENTX_ACTOR_PASSWORD ?? "agentx123";
    const client = new AgentXClient(options.apiUrl);
    const session = await client.login(email, password);
    token = session.token;

    console.log(`Logged in as ${session.actor.email}`);
    console.log(`Roles: ${session.actor.roles.join(", ")}`);
    console.log(`Expires at: ${session.expiresAt}`);
  }

  await saveSession({
    apiBaseUrl: options.apiUrl,
    token
  });

  console.log(`Saved AgentX session for ${options.apiUrl}`);
  console.log("Token stored in ~/.agentx/session.json");
}
