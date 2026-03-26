import { readFile } from "node:fs/promises";
import { isAbsolute, resolve } from "node:path";

import { parseArtifactManifest } from "@agentx/config";

export function resolveManifestPath(path: string): string {
  return isAbsolute(path) ? path : resolve(process.env.INIT_CWD ?? process.cwd(), path);
}

export async function loadManifestFromFile(path: string) {
  const resolvedPath = resolveManifestPath(path);
  const raw = await readFile(resolvedPath, "utf8");
  return parseArtifactManifest(raw);
}
