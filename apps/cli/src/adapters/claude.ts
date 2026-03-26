import { join } from "node:path";
import type { ArtifactManifest } from "@agentx/schema";

import {
  buildClaudeMcpEntry,
  claudeCommandCandidates,
  claudeSkillCandidates,
  copyPackageFile,
  firstExistingPackageFile,
  readJsonFile,
  renderClaudeCommand,
  renderClaudeSkill,
  sanitizeSlug,
  type AdapterContext,
  type AdapterOutput,
  writeJsonFile,
  writeTextFile
} from "./shared.js";

export async function syncClaudeArtifact(
  targetDir: string,
  manifest: ArtifactManifest,
  context: AdapterContext = {}
): Promise<AdapterOutput> {
  const claudeDir = join(targetDir, ".claude");
  const safeSlug = sanitizeSlug(manifest.metadata.slug);
  const notes = [`Installed from AgentX artifact ${manifest.metadata.slug}@${manifest.version}`];

  switch (manifest.type) {
    case "mcp_server": {
      const configPath = join(targetDir, ".mcp.json");
      const current = await readJsonFile<{ mcpServers?: Record<string, unknown> }>(configPath, {
        mcpServers: {}
      });
      current.mcpServers ||= {};
      current.mcpServers[manifest.metadata.slug] = buildClaudeMcpEntry(manifest, context);
      const written = await writeJsonFile(configPath, current);
      notes.push("Claude Code will load this MCP from .mcp.json");
      if (context.packageRoot) {
        notes.push(`Packaged files were extracted to ${context.packageRoot}`);
      }
      return { files: [written], notes };
    }
    case "skill": {
      const skillPath = join(claudeDir, "skills", safeSlug, "SKILL.md");
      const packageFile = await firstExistingPackageFile(context.packageRoot, claudeSkillCandidates(manifest));
      const written = packageFile
        ? await copyPackageFile(context.packageRoot!, packageFile, skillPath)
        : await writeTextFile(skillPath, renderClaudeSkill(manifest));
      notes.push(packageFile ? `Skill installed from packaged file ${packageFile}` : "Skill was rendered as a Claude Code skill");
      return { files: [written], notes };
    }
    case "command": {
      const commandPath = join(claudeDir, "commands", `${safeSlug}.md`);
      const packageFile = await firstExistingPackageFile(context.packageRoot, claudeCommandCandidates(manifest));
      const written = packageFile
        ? await copyPackageFile(context.packageRoot!, packageFile, commandPath)
        : await writeTextFile(commandPath, renderClaudeCommand(manifest));
      notes.push(
        packageFile ? `Command installed from packaged file ${packageFile}` : "Command was rendered as a Claude Code slash command"
      );
      return { files: [written], notes };
    }
  }
}
