import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import type { ArtifactManifest, ArtifactPackageBundle } from "@agentx/schema";

function resolvePackagePath(manifestPath: string, packageUri: string): string {
  if (isAbsolute(packageUri)) {
    return packageUri;
  }

  return resolve(dirname(manifestPath), packageUri);
}

export async function loadArtifactPackageBundle(
  manifest: ArtifactManifest,
  manifestPath: string
): Promise<ArtifactPackageBundle | undefined> {
  const packageUri = manifest.distribution.packageUri;
  if (!packageUri || /^https?:\/\//.test(packageUri) || packageUri.startsWith("agentx://")) {
    return undefined;
  }

  const packageRoot = resolvePackagePath(manifestPath, packageUri);
  const packageStat = await stat(packageRoot);

  if (packageStat.isFile()) {
    const content = await readFile(packageRoot);
    return {
      files: [
        {
          path: relative(dirname(packageRoot), packageRoot),
          contentBase64: content.toString("base64")
        }
      ]
    };
  }

  const files: ArtifactPackageBundle["files"] = [];

  async function walk(currentDir: string) {
    const entries = await readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else {
        const content = await readFile(fullPath);
        files.push({
          path: relative(packageRoot, fullPath).replace(/\\/g, "/"),
          contentBase64: content.toString("base64")
        });
      }
    }
  }

  await walk(packageRoot);

  return { files: files.sort((left, right) => left.path.localeCompare(right.path)) };
}

export async function materializeArtifactPackageBundle(
  targetDir: string,
  slug: string,
  version: string,
  bundle: ArtifactPackageBundle
): Promise<string> {
  const { mkdir, writeFile } = await import("node:fs/promises");

  const rootDir = join(targetDir, ".agentx", "packages", slug, version);
  await mkdir(rootDir, { recursive: true });

  for (const file of bundle.files) {
    const normalizedPath = file.path.replace(/\\/g, "/");
    if (!normalizedPath || normalizedPath.startsWith("/") || normalizedPath.includes("..")) {
      throw new Error(`Unsafe package path: ${file.path}`);
    }
    const outputPath = join(rootDir, normalizedPath);
    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, Buffer.from(file.contentBase64, "base64"));
  }

  return rootDir;
}
