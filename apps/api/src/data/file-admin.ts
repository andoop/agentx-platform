import { copyFile, mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
import { basename, dirname, join } from "node:path";

import { artifactManifestSchema, actorRoleSchema } from "@agentx/schema";
import { z } from "zod";

import type { PersistenceState } from "./store.js";
import { createSeedState, normalizePersistenceState } from "./store.js";

const artifactRecordSchema = z.object({
  id: z.string(),
  manifest: artifactManifestSchema,
  type: z.enum(["mcp_server", "skill", "command"]),
  slug: z.string(),
  name: z.string(),
  summary: z.string(),
  status: z.enum(["draft", "pending_review", "approved", "rejected", "deprecated", "archived"]),
  currentVersion: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
});

const reviewRecordSchema = z.object({
  id: z.string(),
  artifactId: z.string(),
  version: z.string(),
  submittedBy: z.string(),
  submittedAt: z.string(),
  status: z.enum(["pending", "approved", "rejected"]),
  notes: z.string().optional()
});

const installPlanSchema = z.object({
  artifactId: z.string(),
  slug: z.string(),
  version: z.string(),
  steps: z.array(z.string()),
  dependencies: z.array(z.string()),
  targetAgent: z.string()
});

const auditEventSchema = z.object({
  id: z.string(),
  action: z.string(),
  actor: z.string(),
  resourceType: z.string(),
  resourceId: z.string(),
  createdAt: z.string(),
  metadata: z.record(z.unknown()).optional()
});

const workspaceMemberSchema = z.object({
  id: z.string(),
  email: z.string(),
  team: z.string(),
  roles: z.array(actorRoleSchema),
  passwordHash: z.string().optional(),
  disabledAt: z.string().optional()
});

const persistenceStateSchema = z.object({
  artifacts: z.array(artifactRecordSchema),
  reviews: z.array(reviewRecordSchema),
  installs: z.array(installPlanSchema),
  auditLogs: z.array(auditEventSchema),
  members: z.array(workspaceMemberSchema)
});

function parsePersistenceState(input: unknown): PersistenceState {
  return normalizePersistenceState(persistenceStateSchema.parse(input) as PersistenceState);
}

function backupFileName(label?: string): string {
  const suffix = new Date().toISOString().replace(/[:.]/g, "-");
  const safeLabel = label?.trim().replace(/[^a-zA-Z0-9-_]+/g, "-");
  return safeLabel ? `agentx-${safeLabel}-${suffix}.json` : `agentx-${suffix}.json`;
}

export class FilePersistenceAdmin {
  constructor(private readonly dataFilePath: string) {}

  async ensureInitialized(): Promise<void> {
    await mkdir(dirname(this.dataFilePath), { recursive: true });
    try {
      const raw = await readFile(this.dataFilePath, "utf8");
      const state = parsePersistenceState(JSON.parse(raw));
      await this.writeState(state);
    } catch {
      await this.writeState(createSeedState());
    }
  }

  async getInfo(): Promise<{ dataFilePath: string; backupDirectory: string; artifactCount: number; reviewCount: number }> {
    const state = await this.readState();
    return {
      dataFilePath: this.dataFilePath,
      backupDirectory: join(dirname(this.dataFilePath), "backups"),
      artifactCount: state.artifacts.length,
      reviewCount: state.reviews.length
    };
  }

  async exportState(): Promise<PersistenceState> {
    return this.readState();
  }

  async importState(input: unknown): Promise<PersistenceState> {
    const state = parsePersistenceState(input);
    await this.writeState(state);
    return state;
  }

  async createBackup(label?: string): Promise<{ backupPath: string }> {
    await this.ensureInitialized();
    const backupDirectory = join(dirname(this.dataFilePath), "backups");
    await mkdir(backupDirectory, { recursive: true });
    const backupPath = join(backupDirectory, backupFileName(label));
    await copyFile(this.dataFilePath, backupPath);
    return { backupPath };
  }

  async listBackups(): Promise<Array<{ fileName: string; backupPath: string; createdAt: string; sizeBytes: number }>> {
    await this.ensureInitialized();
    const backupDirectory = join(dirname(this.dataFilePath), "backups");
    await mkdir(backupDirectory, { recursive: true });
    const fileNames = await readdir(backupDirectory);

    const backups = await Promise.all(
      fileNames
        .filter((fileName) => fileName.endsWith(".json"))
        .map(async (fileName) => {
          const backupPath = join(backupDirectory, fileName);
          const fileStat = await stat(backupPath);
          return {
            fileName,
            backupPath,
            createdAt: fileStat.birthtime.toISOString(),
            sizeBytes: fileStat.size
          };
        })
    );

    return backups.sort((left, right) => right.createdAt.localeCompare(left.createdAt));
  }

  private async readState(): Promise<PersistenceState> {
    await this.ensureInitialized();
    const raw = await readFile(this.dataFilePath, "utf8");
    return parsePersistenceState(JSON.parse(raw));
  }

  private async writeState(state: PersistenceState): Promise<void> {
    await mkdir(dirname(this.dataFilePath), { recursive: true });
    await writeFile(this.dataFilePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
  }
}

export function backupBaseName(path: string): string {
  return basename(path);
}
