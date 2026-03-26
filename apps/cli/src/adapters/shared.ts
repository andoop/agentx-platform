import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, isAbsolute, resolve } from "node:path";

import type { ArtifactManifest } from "@agentx/schema";

type McpManifest = Extract<ArtifactManifest, { type: "mcp_server" }>;
type SkillManifest = Extract<ArtifactManifest, { type: "skill" }>;
type CommandManifest = Extract<ArtifactManifest, { type: "command" }>;

export interface AdapterOutput {
  files: string[];
  notes: string[];
}

export interface AdapterContext {
  packageRoot?: string;
}

function jsonCodeBlock(value: unknown): string {
  return `\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\`\n`;
}

export function sanitizeSlug(slug: string): string {
  return slug.replace(/[^a-zA-Z0-9-_]/g, "-");
}

export async function writeTextFile(path: string, content: string): Promise<string> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, content, "utf8");
  return path;
}

export async function copyPackageFile(packageRoot: string, sourcePath: string, targetPath: string): Promise<string> {
  const resolvedSource = resolvePackagePath(packageRoot, sourcePath);
  await mkdir(dirname(targetPath), { recursive: true });
  await copyFile(resolvedSource, targetPath);
  return targetPath;
}

export async function readJsonFile<T>(path: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(path, "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function writeJsonFile(path: string, value: unknown): Promise<string> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  return path;
}

export function envPlaceholders(envSchema: Record<string, string>): Record<string, string> {
  return Object.fromEntries(Object.keys(envSchema).map((key) => [key, `\${${key}}`]));
}

export function resolvePackagePath(packageRoot: string, sourcePath: string): string {
  return isAbsolute(sourcePath) ? sourcePath : resolve(packageRoot, sourcePath);
}

export async function packageFileExists(packageRoot: string, sourcePath: string): Promise<boolean> {
  try {
    await readFile(resolvePackagePath(packageRoot, sourcePath));
    return true;
  } catch {
    return false;
  }
}

export async function firstExistingPackageFile(
  packageRoot: string | undefined,
  candidates: string[]
): Promise<string | undefined> {
  if (!packageRoot) {
    return undefined;
  }

  for (const candidate of candidates) {
    if (await packageFileExists(packageRoot, candidate)) {
      return candidate;
    }
  }

  return undefined;
}

export function renderCursorRule(manifest: SkillManifest): string {
  return `---
description: AgentX skill ${manifest.metadata.name} - ${manifest.metadata.summary}
globs:
alwaysApply: false
---

# ${manifest.metadata.name}

## Summary
${manifest.metadata.summary}

## When To Use
Use this installed AgentX skill when the request matches the following intent:
- ${manifest.metadata.description}
- Triggers: ${manifest.spec.triggers.join(", ") || "manual"}

## Instructions
- Follow the skill intent and constraints described above.
- Required context: ${manifest.spec.requiredContext.join(", ") || "none"}
- Preferred output targets: ${manifest.spec.outputTargets.join(", ") || "general"}
- Source entrypoint: ${manifest.spec.entrypoint}
- Installed from AgentX artifact: ${manifest.metadata.slug}@${manifest.version}
`;
}

export function renderCursorCommand(manifest: CommandManifest): string {
  return `# ${manifest.metadata.name}

${manifest.metadata.summary}

Use this AgentX command when:
- ${manifest.metadata.description}

Execution mode: ${manifest.spec.executionMode}
Runtime: ${manifest.spec.runtime}
Entrypoint: ${manifest.spec.entrypoint}

Arguments schema:${jsonCodeBlock(manifest.spec.argumentsSchema)}

Installed from AgentX artifact \`${manifest.metadata.slug}@${manifest.version}\`.
`;
}

export function renderClaudeSkill(manifest: SkillManifest): string {
  return `---
name: ${sanitizeSlug(manifest.metadata.slug)}
description: Use this skill when ${manifest.metadata.summary}. ${manifest.metadata.description}
---

# ${manifest.metadata.name}

## When To Use
- ${manifest.metadata.summary}
- Triggers: ${manifest.spec.triggers.join(", ") || "manual"}

## Instructions
- Follow the skill intent described above.
- Required context: ${manifest.spec.requiredContext.join(", ") || "none"}
- Preferred output targets: ${manifest.spec.outputTargets.join(", ") || "general"}
- Source entrypoint: ${manifest.spec.entrypoint}
- Installed from AgentX artifact: ${manifest.metadata.slug}@${manifest.version}
`;
}

export function renderClaudeCommand(manifest: CommandManifest): string {
  return `# ${manifest.metadata.name}

${manifest.metadata.summary}

## Use When
- ${manifest.metadata.description}

## Execution
- Runtime: ${manifest.spec.runtime}
- Execution mode: ${manifest.spec.executionMode}
- Entrypoint: ${manifest.spec.entrypoint}

## Arguments
${jsonCodeBlock(manifest.spec.argumentsSchema)}

Installed from AgentX artifact \`${manifest.metadata.slug}@${manifest.version}\`.
`;
}

export function buildStdioMcpCommand(
  manifest: McpManifest,
  context?: AdapterContext
): {
  command: string;
  args: string[];
  env?: Record<string, string>;
} {
  const env = envPlaceholders(manifest.spec.envSchema);
  const packageEntrypoint =
    context?.packageRoot && ["python", "binary", "custom"].includes(manifest.spec.installMethod)
      ? resolvePackagePath(context.packageRoot, manifest.spec.entrypoint)
      : undefined;

  switch (manifest.spec.installMethod) {
    case "npm":
      return {
        command: "npx",
        args: ["-y", manifest.metadata.slug, ...manifest.spec.args],
        env
      };
    case "python":
      return {
        command: "python",
        args: [packageEntrypoint ?? manifest.spec.entrypoint, ...manifest.spec.args],
        env
      };
    case "docker":
      return {
        command: "docker",
        args: [
          "run",
          "--rm",
          ...(Object.keys(env).flatMap((key) => ["-e", key])),
          manifest.distribution.packageUri ?? manifest.metadata.slug,
          ...manifest.spec.args
        ]
      };
    case "binary":
    case "custom":
      return {
        command: packageEntrypoint ?? manifest.spec.entrypoint,
        args: manifest.spec.args,
        env
      };
  }
}

export function buildCursorMcpEntry(manifest: McpManifest, context?: AdapterContext): Record<string, unknown> {
  if (manifest.spec.transport === "http" || manifest.spec.transport === "sse") {
    return {
      url: manifest.spec.entrypoint,
      env: envPlaceholders(manifest.spec.envSchema)
    };
  }

  return buildStdioMcpCommand(manifest, context);
}

export function buildClaudeMcpEntry(manifest: McpManifest, context?: AdapterContext): Record<string, unknown> {
  if (manifest.spec.transport === "http" || manifest.spec.transport === "sse") {
    return {
      type: manifest.spec.transport === "http" ? "http" : "sse",
      url: manifest.spec.entrypoint
    };
  }

  const stdio = buildStdioMcpCommand(manifest, context);
  return {
    type: "stdio",
    command: stdio.command,
    args: stdio.args,
    env: stdio.env
  };
}

export function cursorSkillCandidates(manifest: SkillManifest): string[] {
  const safeSlug = sanitizeSlug(manifest.metadata.slug);
  return [manifest.spec.entrypoint, `cursor/${safeSlug}.mdc`, "cursor/rule.mdc", `${safeSlug}.mdc`];
}

export function cursorCommandCandidates(manifest: CommandManifest): string[] {
  const safeSlug = sanitizeSlug(manifest.metadata.slug);
  return [manifest.spec.entrypoint, `cursor/${safeSlug}.md`, "cursor/command.md", `${safeSlug}.md`];
}

export function claudeSkillCandidates(manifest: SkillManifest): string[] {
  return [manifest.spec.entrypoint, "claude/SKILL.md", "SKILL.md"];
}

export function claudeCommandCandidates(manifest: CommandManifest): string[] {
  const safeSlug = sanitizeSlug(manifest.metadata.slug);
  return [manifest.spec.entrypoint, `claude/${safeSlug}.md`, "claude/command.md", "command.md"];
}
