import { spawn, type ChildProcess } from "node:child_process";
import { access, mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import net from "node:net";

export const repoRoot = fileURLToPath(new URL("../../", import.meta.url));

export interface StartedServer {
  baseUrl: string;
  stop: () => Promise<void>;
}

function npmCommand(): string {
  return process.platform === "win32" ? "npm.cmd" : "npm";
}

export async function getFreePort(): Promise<number> {
  return await new Promise((resolve, reject) => {
    const server = net.createServer();
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        reject(new Error("Failed to allocate test port"));
        return;
      }

      const { port } = address;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(port);
      });
    });
    server.on("error", reject);
  });
}

export async function createTempDir(prefix: string): Promise<string> {
  return await mkdtemp(join(tmpdir(), prefix));
}

export async function startApiServer(): Promise<StartedServer> {
  const port = await getFreePort();
  const tempDir = await createTempDir("agentx-api-test-");
  const dataFile = join(tempDir, "agentx.json");
  const child = spawn(
    "node",
    ["--import", "tsx", join(repoRoot, "apps/api/src/server.ts")],
    {
      cwd: repoRoot,
      env: {
        ...process.env,
        PORT: String(port),
        AGENTX_DATA_FILE: dataFile,
        AGENTX_JWT_SECRET: "agentx-test-secret",
        AGENTX_DEMO_PASSWORD: "agentx123"
      },
      stdio: "pipe"
    }
  );

  await waitForUrl(`http://127.0.0.1:${port}/health`, child);

  return {
    baseUrl: `http://127.0.0.1:${port}`,
    stop: async () => {
      await stopChild(child);
      await rm(tempDir, { force: true, recursive: true });
    }
  };
}

export async function runCommand(
  args: string[],
  options: {
    cwd?: string;
    env?: Record<string, string>;
  } = {}
): Promise<{ stdout: string; stderr: string; exitCode: number }> {
  return await new Promise((resolve, reject) => {
    const child = spawn(npmCommand(), args, {
      cwd: options.cwd ?? repoRoot,
      env: {
        ...process.env,
        ...options.env
      },
      stdio: "pipe"
    });

    let stdout = "";
    let stderr = "";

    child.stdout?.on("data", (chunk) => {
      stdout += String(chunk);
    });
    child.stderr?.on("data", (chunk) => {
      stderr += String(chunk);
    });
    child.on("error", reject);
    child.on("close", (exitCode) => {
      resolve({
        stdout,
        stderr,
        exitCode: exitCode ?? 1
      });
    });
  });
}

export async function waitForUrl(url: string, child?: ChildProcess, timeoutMs = 30_000): Promise<void> {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    if (child?.exitCode !== null) {
      throw new Error(`Process exited before ${url} became ready`);
    }

    try {
      const response = await fetch(url);
      if (response.ok) {
        return;
      }
    } catch {}

    await sleep(500);
  }

  throw new Error(`Timed out waiting for ${url}`);
}

export async function ensureFileExists(path: string): Promise<void> {
  await access(path);
}

async function stopChild(child: ChildProcess): Promise<void> {
  if (child.exitCode !== null) {
    return;
  }

  child.kill("SIGTERM");
  for (let index = 0; index < 20; index += 1) {
    if (child.exitCode !== null) {
      return;
    }
    await sleep(250);
  }

  child.kill("SIGKILL");
}

export async function ensureParentDir(path: string): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
}
