import { clearSession } from "../lib/session.js";

export async function logoutCommand() {
  await clearSession();
  console.log("Cleared AgentX session");
}
