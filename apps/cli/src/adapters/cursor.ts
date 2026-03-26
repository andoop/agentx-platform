import { join } from "node:path";
import type { ArtifactManifest } from "@agentx/schema";

import {
  buildCursorMcpEntry,
  copyPackageFile,
  cursorCommandCandidates,
  cursorSkillCandidates,
  firstExistingPackageFile,
  readJsonFile,
  renderCursorCommand,
  renderCursorRule,
  sanitizeSlug,
  type AdapterContext,
  type AdapterOutput,
  writeJsonFile,
  writeTextFile
} from "./shared.js";

export async function syncCursorArtifact(
  targetDir: string,
  manifest: ArtifactManifest,
  context: AdapterContext = {}
): Promise<AdapterOutput> {
  const cursorDir = join(targetDir, ".cursor");
  const safeSlug = sanitizeSlug(manifest.metadata.slug);
  const notes = [`Installed from AgentX artifact ${manifest.metadata.slug}@${manifest.version}`];

  switch (manifest.type) {
    case "mcp_server": {
      const configPath = join(cursorDir, "mcp.json");
      const current = await readJsonFile<{ mcpServers?: Record<string, unknown> }>(configPath, {
        mcpServers: {}
      });
      current.mcpServers ||= {};
      current.mcpServers[manifest.metadata.slug] = buildCursorMcpEntry(manifest, context);
      const written = await writeJsonFile(configPath, current);
      notes.push("Cursor will load this MCP from .cursor/mcp.json");
      if (context.packageRoot) {
        notes.push(`Packaged files were extracted to ${context.packageRoot}`);
      }
      return { files: [written], notes };
    }
    case "skill": {
      const rulePath = join(cursorDir, "rules", `${safeSlug}.mdc`);
      const packageFile = await firstExistingPackageFile(context.packageRoot, cursorSkillCandidates(manifest));
      const written = packageFile
        ? await copyPackageFile(context.packageRoot!, packageFile, rulePath)
        : await writeTextFile(rulePath, renderCursorRule(manifest));
      notes.push(packageFile ? `Skill installed from packaged file ${packageFile}` : "Skill was rendered as a Cursor rule file");
      return { files: [written], notes };
    }
    case "command": {
      const commandPath = join(cursorDir, "commands", `${safeSlug}.md`);
      const packageFile = await firstExistingPackageFile(context.packageRoot, cursorCommandCandidates(manifest));
      const written = packageFile
        ? await copyPackageFile(context.packageRoot!, packageFile, commandPath)
        : await writeTextFile(commandPath, renderCursorCommand(manifest));
      notes.push(
        packageFile ? `Command installed from packaged file ${packageFile}` : "Command was rendered as a Cursor slash command"
      );
      return { files: [written], notes };
    }
  }
}
