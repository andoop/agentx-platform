import { AgentXClient } from "@agentx/sdk";

import { loadManifestFromFile, resolveManifestPath } from "../lib/manifest.js";
import { loadArtifactPackageBundle } from "../lib/package-bundle.js";
import { loadSession } from "../lib/session.js";

export async function publishCommand(manifestPath: string) {
  const session = await loadSession();
  const manifest = await loadManifestFromFile(manifestPath);
  const resolvedManifestPath = resolveManifestPath(manifestPath);
  const artifactPackage = await loadArtifactPackageBundle(manifest, resolvedManifestPath);
  const client = new AgentXClient(session.apiBaseUrl, session.token);
  const result = await client.submitArtifact(manifest, artifactPackage);

  console.log(`Submitted ${manifest.metadata.slug}@${result.version}`);
  console.log(`Artifact ID: ${result.id}`);
  console.log(`Review ID: ${result.reviewId}`);
  if (artifactPackage) {
    console.log(`Uploaded package files: ${artifactPackage.files.length}`);
  }
}
