import { access } from "node:fs/promises";

import { loadSession } from "../lib/session.js";

export async function doctorCommand() {
  const session = await loadSession();
  console.log(`API base URL: ${session.apiBaseUrl}`);
  console.log(`Token configured: ${session.token ? "yes" : "no"}`);

  try {
    await access(process.cwd());
    console.log("Workspace access: ok");
  } catch {
    console.log("Workspace access: failed");
  }
}
