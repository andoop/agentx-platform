import { resolve } from "node:path";

import { AgentXClient } from "@agentx/sdk";

import { syncClaudeArtifact } from "../adapters/claude.js";
import { syncCursorArtifact } from "../adapters/cursor.js";
import { materializeArtifactPackageBundle } from "../lib/package-bundle.js";
import { loadSession } from "../lib/session.js";

export async function syncCommand(slug: string, options: { agent: "cursor" | "claude"; dir?: string }) {
  const session = await loadSession();
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const manifest = await client.getArtifact(slug);
  const targetDir = resolve(options.dir ?? process.cwd());
  let packageRoot: string | undefined;

  if (manifest.distribution.packageUri) {
    const bundle = await client.downloadArtifactPackage(manifest.metadata.slug, manifest.version);
    packageRoot = await materializeArtifactPackageBundle(targetDir, manifest.metadata.slug, manifest.version, bundle);
  }

  const output =
    options.agent === "cursor"
      ? await syncCursorArtifact(targetDir, manifest, { packageRoot })
      : await syncClaudeArtifact(targetDir, manifest, { packageRoot });

  console.log(`Synced ${slug} for ${options.agent}`);
  if (packageRoot) {
    console.log(`Package extracted: ${packageRoot}`);
  }
  for (const file of output.files) {
    console.log(`Output: ${file}`);
  }
  for (const note of output.notes) {
    console.log(`Note: ${note}`);
  }
}
