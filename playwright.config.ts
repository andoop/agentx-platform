import { defineConfig } from "@playwright/test";
import { resolve } from "node:path";

const apiPort = 4120;
const webPort = 3004;
const dataFile = ".tmp/playwright/agentx.json";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  fullyParallel: false,
  retries: process.env.CI ? 2 : 0,
  use: {
    baseURL: `http://127.0.0.1:${webPort}`,
    trace: "on-first-retry"
  },
  webServer: [
    {
      command: `node ${resolve("scripts/start-api.mjs")} ${apiPort} ${dataFile}`,
      url: `http://127.0.0.1:${apiPort}/health`,
      reuseExistingServer: false,
      timeout: 60_000
    },
    {
      command: `node ${resolve("scripts/start-web.mjs")} ${webPort} http://127.0.0.1:${apiPort}`,
      url: `http://127.0.0.1:${webPort}/login`,
      reuseExistingServer: false,
      timeout: 60_000
    }
  ]
});
