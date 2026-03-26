import { spawn } from "node:child_process";
import { resolve } from "node:path";

const repoRoot = resolve(import.meta.dirname, "..");
const port = process.argv[2] ?? "3004";
const apiUrl = process.argv[3] ?? "http://127.0.0.1:4120";

const child = spawn(
  "node",
  [resolve(repoRoot, "node_modules/next/dist/bin/next"), "start", "--hostname", "0.0.0.0", "--port", port],
  {
    cwd: resolve(repoRoot, "apps/web"),
    env: {
      ...process.env,
      AGENTX_API_URL: apiUrl,
      NEXT_TELEMETRY_DISABLED: "1"
    },
    stdio: "inherit"
  }
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
