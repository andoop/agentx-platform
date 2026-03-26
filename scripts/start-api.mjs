import { mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawn } from "node:child_process";

const repoRoot = resolve(import.meta.dirname, "..");
const port = process.argv[2] ?? "4120";
const dataFile = resolve(repoRoot, process.argv[3] ?? ".tmp/playwright/agentx.json");

rmSync(dataFile, { force: true });
mkdirSync(dirname(dataFile), { recursive: true });

const child = spawn("node", ["--import", "tsx", resolve(repoRoot, "apps/api/src/server.ts")], {
  cwd: repoRoot,
  env: {
    ...process.env,
    PORT: port,
    AGENTX_DATA_FILE: dataFile,
    AGENTX_JWT_SECRET: "agentx-playwright-secret",
    AGENTX_DEMO_PASSWORD: "agentx123"
  },
  stdio: "inherit"
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
