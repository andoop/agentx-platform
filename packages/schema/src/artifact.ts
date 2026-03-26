import { z } from "zod";

export const artifactTypeSchema = z.enum(["mcp_server", "skill", "command"]);
export const artifactVisibilitySchema = z.enum(["private", "workspace"]);
export const artifactStatusSchema = z.enum([
  "draft",
  "pending_review",
  "approved",
  "rejected",
  "deprecated",
  "archived"
]);
export const actorRoleSchema = z.enum(["viewer", "publisher", "reviewer", "admin"]);

export const baseMetadataSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  summary: z.string().min(1).max(160),
  description: z.string().min(1),
  ownerTeam: z.string().min(1),
  tags: z.array(z.string()).default([]),
  labels: z.record(z.string()).default({}),
  visibility: artifactVisibilitySchema.default("workspace"),
  status: artifactStatusSchema.default("draft"),
  createdBy: z.string().min(1).optional(),
  updatedBy: z.string().min(1).optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional()
});

export const dependencySchema = z.object({
  type: z.enum(["artifact", "runtime", "env"]),
  target: z.string().min(1),
  versionRange: z.string().min(1).optional(),
  optional: z.boolean().default(false)
});

export const compatibilitySchema = z.object({
  agents: z.array(z.enum(["cursor", "claude_code", "internal"])).default([]),
  os: z.array(z.enum(["darwin", "linux", "windows"])).default([]),
  arch: z.array(z.enum(["x64", "arm64"])).default([])
});

export const securityPolicySchema = z.object({
  riskLevel: z.enum(["low", "medium", "high", "restricted"]).default("low"),
  requiresReview: z.boolean().default(true),
  requiresApprovalToRun: z.boolean().default(false),
  allowedHosts: z.array(z.string()).default([]),
  requiredSecrets: z.array(z.string()).default([])
});

export const distributionSchema = z.object({
  packageUri: z.string().min(1).optional(),
  readmeUri: z.string().url().optional(),
  iconUri: z.string().url().optional(),
  checksums: z.record(z.string()).default({})
});

const mcpSpecSchema = z.object({
  transport: z.enum(["stdio", "http", "sse"]),
  installMethod: z.enum(["docker", "npm", "python", "binary", "custom"]),
  entrypoint: z.string().min(1),
  args: z.array(z.string()).default([]),
  envSchema: z.record(z.string()).default({}),
  tools: z.array(z.string()).default([]),
  resources: z.array(z.string()).default([]),
  prompts: z.array(z.string()).default([]),
  auth: z.object({
    type: z.enum(["none", "api_key", "oauth", "custom"]).default("none"),
    instructions: z.string().optional()
  }),
  healthcheck: z.string().optional()
});

const skillSpecSchema = z.object({
  format: z.enum(["SKILL.md", ".mdc", "custom"]),
  entrypoint: z.string().min(1),
  triggers: z.array(z.enum(["manual", "rule_match", "recommended"])).default(["manual"]),
  requiredContext: z.array(z.string()).default([]),
  outputTargets: z.array(z.string()).default([])
});

const commandSpecSchema = z.object({
  commandType: z.enum(["slash", "template", "workflow"]),
  entrypoint: z.string().min(1),
  runtime: z.enum(["none", "shell", "node", "python", "http"]).default("none"),
  argumentsSchema: z.record(z.any()).default({}),
  outputTemplate: z.string().optional(),
  executionMode: z.enum(["readonly", "executable", "local_exec", "approval_required"])
});

export const artifactSpecSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("mcp_server"),
    spec: mcpSpecSchema
  }),
  z.object({
    type: z.literal("skill"),
    spec: skillSpecSchema
  }),
  z.object({
    type: z.literal("command"),
    spec: commandSpecSchema
  })
]);

export const artifactManifestSchema = z
  .object({
    apiVersion: z.literal("agentx/v1"),
    kind: artifactTypeSchema,
    metadata: baseMetadataSchema,
    version: z.string().min(1),
    compatibility: compatibilitySchema.default({ agents: [], os: [], arch: [] }),
    dependencies: z.array(dependencySchema).default([]),
    security: securityPolicySchema.default({
      riskLevel: "low",
      requiresReview: true,
      requiresApprovalToRun: false,
      allowedHosts: [],
      requiredSecrets: []
    }),
    distribution: distributionSchema.default({ checksums: {} })
  })
  .and(artifactSpecSchema)
  .superRefine((value, context) => {
    if (value.kind !== value.type) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "`kind` must match `type`"
      });
    }
  });

export type ArtifactType = z.infer<typeof artifactTypeSchema>;
export type ArtifactStatus = z.infer<typeof artifactStatusSchema>;
export type ActorRole = z.infer<typeof actorRoleSchema>;
export type ArtifactManifest = z.infer<typeof artifactManifestSchema>;

export const artifactPackageFileSchema = z.object({
  path: z.string().min(1),
  contentBase64: z.string().min(1)
});

export const artifactPackageBundleSchema = z.object({
  files: z.array(artifactPackageFileSchema).default([])
});

export type ArtifactPackageBundle = z.infer<typeof artifactPackageBundleSchema>;
