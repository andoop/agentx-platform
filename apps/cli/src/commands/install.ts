import { mkdir } from "node:fs/promises";
import { resolve } from "node:path";

import { AgentXClient } from "@agentx/sdk";

import { syncClaudeArtifact } from "../adapters/claude.js";
import { syncCursorArtifact } from "../adapters/cursor.js";
import { materializeArtifactPackageBundle } from "../lib/package-bundle.js";
import { loadSession } from "../lib/session.js";

export async function installCommand(
  slug: string,
  options: { agent: "cursor" | "claude"; dir?: string }
) {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const manifest = await client.getArtifact(slug);
  const targetDir = resolve(options.dir ?? process.cwd());
  let packageRoot: string | undefined;

  await mkdir(targetDir, { recursive: true });
  if (manifest.distribution.packageUri) {
    const bundle = await client.downloadArtifactPackage(manifest.metadata.slug, manifest.version);
    packageRoot = await materializeArtifactPackageBundle(targetDir, manifest.metadata.slug, manifest.version, bundle);
  }

  const adapterOutput =
    options.agent === "cursor"
      ? await syncCursorArtifact(targetDir, manifest, { packageRoot })
      : await syncClaudeArtifact(targetDir, manifest, { packageRoot });

  console.log(`Installed ${manifest.metadata.slug}@${manifest.version} for ${options.agent}`);
  if (packageRoot) {
    console.log(`Package extracted: ${packageRoot}`);
  }
  for (const file of adapterOutput.files) {
    console.log(`Adapter file: ${file}`);
  }
  for (const note of adapterOutput.notes) {
    console.log(`Note: ${note}`);
  }
}
