import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

import { createTempDir, ensureFileExists, runCommand, startApiServer } from "./helpers/process.js";

test("CLI smoke: login, search, publish, install", async (t) => {
  const server = await startApiServer();
  const homeDir = await createTempDir("agentx-cli-home-");
  const workspaceDir = await createTempDir("agentx-cli-workspace-");
  const installDir = await createTempDir("agentx-cli-install-");

  t.after(server.stop);

  const commandEnv = {
    HOME: homeDir
  };

  const login = await runCommand(
    ["--workspace", "agentc", "run", "dev", "--", "login", "--api-url", server.baseUrl, "--email", "alice@internal", "--password", "agentx123"],
    {
      env: commandEnv
    }
  );
  assert.equal(login.exitCode, 0, login.stderr);
  assert.match(login.stdout, /Logged in as alice@internal/);

  const search = await runCommand(["--workspace", "agentc", "run", "dev", "--", "search", "review"], {
    env: commandEnv
  });
  assert.equal(search.exitCode, 0, search.stderr);
  assert.match(search.stdout, /review-skill/);

  const slug = `cli-smoke-${Date.now()}`;
  const manifestPath = join(workspaceDir, "artifact.yaml");
  await writeFile(
    manifestPath,
    `apiVersion: agentx/v1
kind: command
type: command
version: 0.1.0
metadata:
  name: CLI Smoke Command
  slug: ${slug}
  summary: Smoke command published from the CLI test
  description: Verifies the CLI publish and install workflow.
  ownerTeam: platform
  tags:
    - smoke
  labels: {}
  visibility: workspace
  status: draft
compatibility:
  agents:
    - cursor
  os:
    - darwin
    - linux
  arch:
    - arm64
    - x64
dependencies: []
security:
  riskLevel: low
  requiresReview: true
  requiresApprovalToRun: false
  allowedHosts: []
  requiredSecrets: []
distribution:
  checksums: {}
spec:
  commandType: slash
  entrypoint: command.md
  runtime: none
  argumentsSchema: {}
  executionMode: readonly
`,
    "utf8"
  );

  const publish = await runCommand(["--workspace", "agentc", "run", "dev", "--", "publish", manifestPath], {
    env: commandEnv
  });
  assert.equal(publish.exitCode, 0, publish.stderr);
  assert.match(publish.stdout, new RegExp(`Submitted ${slug}@0\\.1\\.0`));

  const install = await runCommand(
    ["--workspace", "agentc", "run", "dev", "--", "install", slug, "--agent", "cursor", "--dir", installDir],
    {
      env: commandEnv
    }
  );
  assert.equal(install.exitCode, 0, install.stderr);
  assert.match(install.stdout, new RegExp(`Installed ${slug}@0\\.1\\.0 for cursor`));

  const commandFile = join(installDir, ".cursor", "commands", `${slug}.md`);
  await ensureFileExists(commandFile);
  const installedContent = await readFile(commandFile, "utf8");
  assert.match(installedContent, /CLI Smoke Command/);
  assert.match(installedContent, /Installed from AgentX artifact/);
});
