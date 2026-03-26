"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ArtifactManifest, ArtifactPackageBundle } from "@agentx/schema";

import { idleFormState, type FormActionState } from "../form-state";
import { submitArtifact } from "../../lib/api";
import { getMessages, translateApiErrorMessage } from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";

type CompatibilityAgents = ArtifactManifest["compatibility"]["agents"];
type CompatibilityOs = ArtifactManifest["compatibility"]["os"];
type CompatibilityArch = ArtifactManifest["compatibility"]["arch"];
type RiskLevel = ArtifactManifest["security"]["riskLevel"];
type McpTransport = "stdio" | "http" | "sse";
type McpInstallMethod = "docker" | "npm" | "python" | "binary" | "custom";
type McpAuthType = "none" | "api_key" | "oauth" | "custom";
type SkillFormat = "SKILL.md" | ".mdc" | "custom";
type SkillTrigger = "manual" | "rule_match" | "recommended";
type CommandType = "slash" | "template" | "workflow";
type CommandRuntime = "none" | "shell" | "node" | "python" | "http";
type CommandExecutionMode = "readonly" | "executable" | "local_exec" | "approval_required";

function value(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function optionalValue(formData: FormData, key: string): string | undefined {
  const current = value(formData, key);
  return current.length > 0 ? current : undefined;
}

function csvValues(formData: FormData, key: string): string[] {
  return value(formData, key)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function boolValue(formData: FormData, key: string, fallback: boolean): boolean {
  const current = formData.get(key);
  if (current === null) {
    return fallback;
  }

  return String(current) === "true";
}

function jsonRecord(formData: FormData, key: string): Record<string, unknown> {
  const current = optionalValue(formData, key);
  if (!current) {
    return {};
  }

  const parsed = JSON.parse(current) as unknown;
  if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
    throw new Error(`${key} 必须是 JSON object`);
  }

  return parsed as Record<string, unknown>;
}

function stringRecord(formData: FormData, key: string): Record<string, string> {
  const current = optionalValue(formData, key);
  if (!current) {
    return {};
  }

  return Object.fromEntries(
    current
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf("=");
        if (separatorIndex <= 0) {
          throw new Error(`${key} 的每一行都必须是 KEY=value`);
        }

        return [line.slice(0, separatorIndex).trim(), line.slice(separatorIndex + 1).trim()];
      })
  );
}

function defaultEntrypoint(type: ArtifactManifest["kind"]): string {
  switch (type) {
    case "skill":
      return "SKILL.md";
    case "command":
      return "command.md";
    case "mcp_server":
      return "dist/index.js";
  }
}

async function buildArtifactPackageBundle(formData: FormData): Promise<ArtifactPackageBundle | undefined> {
  const uploadedFiles = formData
    .getAll("packageFiles")
    .filter((item): item is File => item instanceof File && item.size > 0);

  if (uploadedFiles.length === 0) {
    return undefined;
  }

  const rawPaths = value(formData, "packagePaths");
  const parsedPaths = rawPaths ? (JSON.parse(rawPaths) as string[]) : [];

  if (parsedPaths.length > 0 && parsedPaths.length !== uploadedFiles.length) {
    throw new Error("Uploaded package file metadata is inconsistent");
  }

  return {
    files: await Promise.all(
      uploadedFiles.map(async (file, index) => ({
        path: parsedPaths[index] || file.name,
        contentBase64: Buffer.from(await file.arrayBuffer()).toString("base64")
      }))
    )
  };
}

async function submitArtifactAction(formData: FormData) {
  const type = value(formData, "type") as ArtifactManifest["kind"];
  const version = value(formData, "version") || "0.1.0";
  const entrypoint = value(formData, "entrypoint") || defaultEntrypoint(type);
  const ownerTeam = value(formData, "ownerTeam") || "platform";
  const artifactPackage = await buildArtifactPackageBundle(formData);
  const compatibility: ArtifactManifest["compatibility"] = {
    agents: (() => {
      const values = csvValues(formData, "compatibilityAgents");
      return (values.length > 0 ? values : ["cursor", "claude_code"]) as CompatibilityAgents;
    })(),
    os: (() => {
      const values = csvValues(formData, "compatibilityOs");
      return (values.length > 0 ? values : ["darwin", "linux"]) as CompatibilityOs;
    })(),
    arch: (() => {
      const values = csvValues(formData, "compatibilityArch");
      return (values.length > 0 ? values : ["arm64", "x64"]) as CompatibilityArch;
    })()
  };
  const dependencies: ArtifactManifest["dependencies"] = [];
  const distribution: ArtifactManifest["distribution"] = {
    packageUri: artifactPackage ? `web-upload://${value(formData, "slug")}/${version}` : undefined,
    checksums: {}
  };
  const metadata = {
    name: value(formData, "name"),
    slug: value(formData, "slug"),
    summary: value(formData, "summary"),
    description: value(formData, "description"),
    ownerTeam,
    tags: csvValues(formData, "tags"),
    labels: Object.fromEntries(
      Object.entries(stringRecord(formData, "labels")).map(([key, item]) => [key, String(item)])
    ),
    visibility: (optionalValue(formData, "visibility") ?? "workspace") as "private" | "workspace",
    status: "draft" as const
  };
  const security = {
    riskLevel: (optionalValue(formData, "riskLevel") ?? "low") as RiskLevel,
    requiresReview: boolValue(formData, "requiresReview", true),
    requiresApprovalToRun: boolValue(formData, "requiresApprovalToRun", type === "command"),
    allowedHosts: csvValues(formData, "allowedHosts"),
    requiredSecrets: csvValues(formData, "requiredSecrets")
  };

  let manifest: ArtifactManifest;

  switch (type) {
    case "mcp_server":
      manifest = {
        apiVersion: "agentx/v1",
        kind: "mcp_server",
        type: "mcp_server",
        version,
        metadata,
        compatibility,
        dependencies,
        security,
        distribution,
        spec: {
          transport: (optionalValue(formData, "mcpTransport") ?? "stdio") as McpTransport,
          installMethod: (optionalValue(formData, "mcpInstallMethod") ??
            (artifactPackage ? "custom" : "npm")) as McpInstallMethod,
          entrypoint,
          args: csvValues(formData, "mcpArgs"),
          envSchema: stringRecord(formData, "mcpEnvSchema"),
          tools: csvValues(formData, "mcpTools"),
          resources: csvValues(formData, "mcpResources"),
          prompts: csvValues(formData, "mcpPrompts"),
          auth: {
            type: (optionalValue(formData, "mcpAuthType") ?? "none") as McpAuthType,
            instructions: optionalValue(formData, "mcpAuthInstructions")
          },
          healthcheck: optionalValue(formData, "mcpHealthcheck")
        }
      };
      break;
    case "command":
      manifest = {
        apiVersion: "agentx/v1",
        kind: "command",
        type: "command",
        version,
        metadata,
        compatibility,
        dependencies,
        security,
        distribution,
        spec: {
          commandType: (optionalValue(formData, "commandType") ?? "slash") as CommandType,
          entrypoint,
          runtime: (optionalValue(formData, "commandRuntime") ?? "none") as CommandRuntime,
          argumentsSchema: jsonRecord(formData, "commandArgumentsSchema"),
          outputTemplate: optionalValue(formData, "commandOutputTemplate"),
          executionMode: (optionalValue(formData, "commandExecutionMode") ?? "readonly") as CommandExecutionMode
        }
      };
      break;
    default:
      manifest = {
        apiVersion: "agentx/v1",
        kind: "skill",
        type: "skill",
        version,
        metadata,
        compatibility,
        dependencies,
        security,
        distribution,
        spec: {
          format: (optionalValue(formData, "skillFormat") ?? "SKILL.md") as SkillFormat,
          entrypoint,
          triggers: (() => {
            const values = csvValues(formData, "skillTriggers");
            return (values.length > 0 ? values : ["manual"]) as SkillTrigger[];
          })(),
          requiredContext: csvValues(formData, "skillRequiredContext"),
          outputTargets: csvValues(formData, "skillOutputTargets")
        }
      };
  }

  await submitArtifact(manifest, artifactPackage);
}

export async function submitArtifactFormAction(
  _previousState: FormActionState = idleFormState,
  formData: FormData
): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  try {
    await submitArtifactAction(formData);
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.publish.form.submitFailed
    };
  }

  revalidatePath("/catalog");
  revalidatePath("/review");
  redirect("/review");
}
