import { loadManifestFromFile } from "../lib/manifest.js";

export async function validateCommand(manifestPath: string) {
  const manifest = await loadManifestFromFile(manifestPath);
  console.log(`Valid manifest: ${manifest.metadata.slug}@${manifest.version}`);
}
