import { parse, stringify } from "yaml";

import { artifactManifestSchema, type ArtifactManifest } from "@agentx/schema";

export function parseArtifactManifest(raw: string): ArtifactManifest {
  const parsed = parse(raw);
  return artifactManifestSchema.parse(parsed);
}

export function stringifyArtifactManifest(manifest: ArtifactManifest): string {
  return stringify(manifest);
}

export function buildManifestTemplate(kind: ArtifactManifest["kind"]): ArtifactManifest {
  const base = {
    apiVersion: "agentx/v1" as const,
    kind,
    version: "0.1.0",
    metadata: {
      name: "example",
      slug: "example",
      summary: "Example artifact",
      description: "Describe what this artifact does and why it exists.",
      ownerTeam: "platform"
    },
    compatibility: {
      agents: ["cursor"],
      os: ["darwin", "linux"],
      arch: ["arm64", "x64"]
    },
    dependencies: [],
    security: {
      riskLevel: "low",
      requiresReview: true,
      requiresApprovalToRun: false,
      allowedHosts: [],
      requiredSecrets: []
    },
    distribution: {
      checksums: {}
    }
  };

  switch (kind) {
    case "mcp_server":
      return artifactManifestSchema.parse({
        ...base,
        type: kind,
        spec: {
          transport: "stdio",
          installMethod: "npm",
          entrypoint: "dist/server.js",
          args: [],
          envSchema: {},
          tools: [],
          resources: [],
          prompts: [],
          auth: {
            type: "none"
          }
        }
      });
    case "skill":
      return artifactManifestSchema.parse({
        ...base,
        type: kind,
        spec: {
          format: "SKILL.md",
          entrypoint: "SKILL.md",
          triggers: ["manual"],
          requiredContext: [],
          outputTargets: []
        }
      });
    case "command":
      return artifactManifestSchema.parse({
        ...base,
        type: kind,
        spec: {
          commandType: "slash",
          entrypoint: "command.md",
          runtime: "none",
          argumentsSchema: {},
          executionMode: "readonly"
        }
      });
  }
}
