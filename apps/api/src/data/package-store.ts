import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { artifactPackageBundleSchema, type ArtifactPackageBundle } from "@agentx/schema";

import { getDataFilePath } from "./repository.js";

function resolvePackageDirectory(): string {
  return process.env.AGENTX_PACKAGE_DIR
    ? resolve(process.env.AGENTX_PACKAGE_DIR)
    : join(dirname(getDataFilePath()), "packages");
}

function sanitizeSegment(value: string): string {
  return value.replace(/[^a-zA-Z0-9._-]/g, "-");
}

function bundlePath(slug: string, version: string): string {
  return join(resolvePackageDirectory(), sanitizeSegment(slug), sanitizeSegment(version), "bundle.json");
}

function assertSafeRelativePath(path: string): string {
  const normalized = path.replace(/\\/g, "/");
  if (!normalized || normalized.startsWith("/") || normalized.includes("..")) {
    throw new Error(`Unsafe package path: ${path}`);
  }

  return normalized;
}

export class ArtifactPackageStore {
  async saveBundle(slug: string, version: string, bundle: ArtifactPackageBundle): Promise<void> {
    const parsed = artifactPackageBundleSchema.parse(bundle);
    const outputPath = bundlePath(slug, version);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
  }

  async readBundle(slug: string, version: string): Promise<ArtifactPackageBundle | undefined> {
    try {
      const raw = await readFile(bundlePath(slug, version), "utf8");
      return artifactPackageBundleSchema.parse(JSON.parse(raw));
    } catch {
      return undefined;
    }
  }

  async extractBundle(slug: string, version: string, targetDir: string): Promise<string[]> {
    const bundle = await this.readBundle(slug, version);
    if (!bundle) {
      return [];
    }

    const written: string[] = [];
    for (const file of bundle.files) {
      const safePath = assertSafeRelativePath(file.path);
      const outputPath = join(targetDir, safePath);
      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, Buffer.from(file.contentBase64, "base64"));
      written.push(outputPath);
    }

    return written;
  }

  async listExtractedFiles(rootDir: string): Promise<string[]> {
    const results: string[] = [];

    async function walk(currentDir: string) {
      const entries = await readdir(currentDir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = join(currentDir, entry.name);
        if (entry.isDirectory()) {
          await walk(fullPath);
        } else {
          results.push(relative(rootDir, fullPath));
        }
      }
    }

    try {
      const rootStat = await stat(rootDir);
      if (rootStat.isDirectory()) {
        await walk(rootDir);
      }
    } catch {}

    return results.sort();
  }
}
