import { randomUUID } from "node:crypto";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { artifactManifestSchema, type ArtifactManifest, type ActorRole } from "@agentx/schema";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

import { getSeedPassword, hashPassword, verifyPassword } from "../auth/password.js";
import type { PrismaClient } from "../generated/prisma/client.js";

import {
  createSeedState,
  makeId,
  normalizePersistenceState,
  store,
  type ArtifactRecord,
  type AuditEvent,
  type InstallPlan,
  type PersistenceState,
  type ReviewRecord,
  type WorkspaceMember,
  toWorkspaceMember,
  writeAuditEvent
} from "./store.js";
import { getPrismaClient } from "./prisma.js";

function timestamp(): string {
  return new Date().toISOString();
}

function resolveDataFilePath(): string {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  return process.env.AGENTX_DATA_FILE
    ? resolve(process.env.AGENTX_DATA_FILE)
    : resolve(currentDir, "../../.data/agentx.json");
}

export function getDataFilePath(): string {
  return resolveDataFilePath();
}

export interface ReviewDecisionInput {
  reviewId: string;
  decision: "approved" | "rejected";
  reviewer: string;
  notes?: string;
}

export interface CreateMemberInput {
  email: string;
  team: string;
  roles: ActorRole[];
  password: string;
  performedBy: string;
}

export interface UpdateMemberInput {
  email: string;
  team: string;
  roles: ActorRole[];
  performedBy: string;
}

export interface ResetMemberPasswordInput {
  email: string;
  password: string;
  performedBy: string;
}

export interface ChangeOwnPasswordInput {
  email: string;
  currentPassword: string;
  newPassword: string;
  performedBy: string;
}

export interface SetMemberDisabledInput {
  email: string;
  disabled: boolean;
  performedBy: string;
}

export interface ArtifactRepository {
  listArtifacts(filters?: { query?: string; type?: string }): Promise<ArtifactRecord[]>;
  getArtifactBySlug(slug: string): Promise<ArtifactRecord | undefined>;
  saveSubmittedArtifact(manifest: ArtifactManifest): Promise<{ artifact: ArtifactRecord; review: ReviewRecord }>;
  listReviews(): Promise<ReviewRecord[]>;
  decideReview(input: ReviewDecisionInput): Promise<{ review: ReviewRecord; artifact?: ArtifactRecord }>;
  saveInstallPlan(plan: InstallPlan): Promise<InstallPlan>;
  listAuditLogs(): Promise<AuditEvent[]>;
  listMembers(): Promise<WorkspaceMember[]>;
  getMemberByEmail(email: string): Promise<WorkspaceMember | undefined>;
  verifyMemberCredentials(email: string, password: string): Promise<WorkspaceMember | undefined>;
  createMember(input: CreateMemberInput): Promise<WorkspaceMember>;
  updateMember(input: UpdateMemberInput): Promise<WorkspaceMember>;
  resetMemberPassword(input: ResetMemberPasswordInput): Promise<WorkspaceMember>;
  changeOwnPassword(input: ChangeOwnPasswordInput): Promise<WorkspaceMember>;
  setMemberDisabled(input: SetMemberDisabledInput): Promise<WorkspaceMember>;
  writeAudit(event: Omit<AuditEvent, "id" | "createdAt">): Promise<AuditEvent>;
  initialize(): Promise<void>;
}

function activeAdminCount(members: Array<{ roles: ActorRole[]; disabledAt?: string }>): number {
  return members.filter((member) => !member.disabledAt && hasRole(member, "admin")).length;
}

function ensureAtLeastOneAdmin(
  members: Array<{ email: string; roles: ActorRole[]; disabledAt?: string }>,
  next: UpdateMemberInput
): void {
  const adminCount = activeAdminCount(members);
  const current = members.find((member) => member.email === next.email);
  const removingLastAdmin = Boolean(
    current && !current.disabledAt && hasRole(current, "admin") && !hasRole(next, "admin") && adminCount <= 1
  );

  if (removingLastAdmin) {
    throw new Error("At least one admin member must remain");
  }
}

function ensureNotLastActiveAdmin(
  members: Array<{ email: string; roles: ActorRole[]; disabledAt?: string }>,
  email: string,
  disable: boolean
): void {
  if (!disable) {
    return;
  }

  const current = members.find((member) => member.email === email);
  if (!current || current.disabledAt || !hasRole(current, "admin")) {
    return;
  }

  if (activeAdminCount(members) <= 1) {
    throw new Error("At least one active admin member must remain");
  }
}

class InMemoryArtifactRepository implements ArtifactRepository {
  async listArtifacts(filters?: { query?: string; type?: string }): Promise<ArtifactRecord[]> {
    const query = filters?.query?.toLowerCase() ?? "";
    const type = filters?.type;

    return Array.from(store.artifacts.values()).filter((artifact) => {
      const matchesKeyword =
        query.length === 0 ||
        artifact.slug.toLowerCase().includes(query) ||
        artifact.name.toLowerCase().includes(query) ||
        artifact.summary.toLowerCase().includes(query);
      const matchesType = !type || artifact.type === type;
      return matchesKeyword && matchesType;
    });
  }

  async getArtifactBySlug(slug: string): Promise<ArtifactRecord | undefined> {
    return store.artifacts.get(slug);
  }

  async saveSubmittedArtifact(manifest: ArtifactManifest): Promise<{ artifact: ArtifactRecord; review: ReviewRecord }> {
    const now = timestamp();
    const artifactId = manifest.metadata.id ?? randomUUID();

    const artifact: ArtifactRecord = {
      id: artifactId,
      manifest: {
        ...manifest,
        metadata: {
          ...manifest.metadata,
          id: artifactId,
          status: "pending_review",
          createdAt: manifest.metadata.createdAt ?? now,
          updatedAt: now
        }
      },
      type: manifest.kind,
      slug: manifest.metadata.slug,
      name: manifest.metadata.name,
      summary: manifest.metadata.summary,
      status: "pending_review",
      currentVersion: manifest.version,
      createdAt: manifest.metadata.createdAt ?? now,
      updatedAt: now
    };

    const review: ReviewRecord = {
      id: makeId("review"),
      artifactId,
      version: manifest.version,
      submittedBy: manifest.metadata.createdBy ?? "publisher",
      submittedAt: now,
      status: "pending"
    };

    store.artifacts.set(artifact.slug, artifact);
    store.reviews.set(review.id, review);

    await this.writeAudit({
      action: "artifact.submitted",
      actor: review.submittedBy,
      resourceId: artifactId,
      resourceType: manifest.kind,
      metadata: {
        slug: manifest.metadata.slug,
        version: manifest.version
      }
    });

    return { artifact, review };
  }

  async listReviews(): Promise<ReviewRecord[]> {
    return Array.from(store.reviews.values()).sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));
  }

  async decideReview(input: ReviewDecisionInput): Promise<{ review: ReviewRecord; artifact?: ArtifactRecord }> {
    const review = store.reviews.get(input.reviewId);
    if (!review) {
      throw new Error(`Review ${input.reviewId} not found`);
    }

    review.status = input.decision;
    review.notes = input.notes;
    store.reviews.set(input.reviewId, review);

    const artifact = Array.from(store.artifacts.values()).find((item) => item.id === review.artifactId);
    if (artifact) {
      artifact.status = input.decision === "approved" ? "approved" : "rejected";
      artifact.manifest.metadata.status = artifact.status;
      artifact.updatedAt = timestamp();
      artifact.manifest.metadata.updatedAt = artifact.updatedAt;
      artifact.manifest.metadata.updatedBy = input.reviewer;
      store.artifacts.set(artifact.slug, artifact);
    }

    await this.writeAudit({
      action: `review.${input.decision}`,
      actor: input.reviewer,
      resourceType: artifact?.type ?? "artifact",
      resourceId: review.artifactId,
      metadata: { reviewId: input.reviewId, notes: input.notes }
    });

    return { review, artifact };
  }

  async saveInstallPlan(plan: InstallPlan): Promise<InstallPlan> {
    store.installs.set(`${plan.slug}:${plan.targetAgent}`, plan);
    await this.writeAudit({
      action: "artifact.install_plan.generated",
      actor: "installer",
      resourceType: "install_plan",
      resourceId: plan.artifactId,
      metadata: { agent: plan.targetAgent, version: plan.version }
    });
    return plan;
  }

  async listAuditLogs(): Promise<AuditEvent[]> {
    return Array.from(store.auditLogs.values()).sort((left, right) => right.createdAt.localeCompare(left.createdAt));
  }

  async listMembers(): Promise<WorkspaceMember[]> {
    return Array.from(store.members.values()).map(toWorkspaceMember);
  }

  async getMemberByEmail(email: string): Promise<WorkspaceMember | undefined> {
    const member = store.members.get(email);
    return member ? toWorkspaceMember(member) : undefined;
  }

  async verifyMemberCredentials(email: string, password: string): Promise<WorkspaceMember | undefined> {
    const member = store.members.get(email);
    if (!member || member.disabledAt || !verifyPassword(password, member.passwordHash)) {
      return undefined;
    }

    return toWorkspaceMember(member);
  }

  async createMember(input: CreateMemberInput): Promise<WorkspaceMember> {
    if (store.members.has(input.email)) {
      throw new Error(`Member ${input.email} already exists`);
    }

    const member = {
      id: randomUUID(),
      email: input.email,
      team: input.team,
      roles: input.roles,
      passwordHash: hashPassword(input.password),
      disabledAt: undefined
    };

    store.members.set(member.email, member);
    await this.writeAudit({
      action: "member.created",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email,
      metadata: {
        team: member.team,
        roles: member.roles
      }
    });
    return toWorkspaceMember(member);
  }

  async updateMember(input: UpdateMemberInput): Promise<WorkspaceMember> {
    const member = store.members.get(input.email);
    if (!member) {
      throw new Error(`Member ${input.email} not found`);
    }

    ensureAtLeastOneAdmin(Array.from(store.members.values()), input);
    const next = {
      ...member,
      team: input.team,
      roles: input.roles
    };
    store.members.set(next.email, next);

    await this.writeAudit({
      action: "member.updated",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: next.email,
      metadata: {
        team: next.team,
        roles: next.roles
      }
    });
    return toWorkspaceMember(next);
  }

  async resetMemberPassword(input: ResetMemberPasswordInput): Promise<WorkspaceMember> {
    const member = store.members.get(input.email);
    if (!member) {
      throw new Error(`Member ${input.email} not found`);
    }

    const next = {
      ...member,
      passwordHash: hashPassword(input.password)
    };
    store.members.set(next.email, next);
    await this.writeAudit({
      action: "member.password_reset",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: next.email
    });
    return toWorkspaceMember(next);
  }

  async changeOwnPassword(input: ChangeOwnPasswordInput): Promise<WorkspaceMember> {
    const member = store.members.get(input.email);
    if (!member) {
      throw new Error(`Member ${input.email} not found`);
    }
    if (member.disabledAt) {
      throw new Error("Disabled members cannot change password");
    }
    if (!verifyPassword(input.currentPassword, member.passwordHash)) {
      throw new Error("Current password is incorrect");
    }

    const next = {
      ...member,
      passwordHash: hashPassword(input.newPassword)
    };
    store.members.set(next.email, next);
    await this.writeAudit({
      action: "member.password_changed",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: next.email
    });
    return toWorkspaceMember(next);
  }

  async setMemberDisabled(input: SetMemberDisabledInput): Promise<WorkspaceMember> {
    const member = store.members.get(input.email);
    if (!member) {
      throw new Error(`Member ${input.email} not found`);
    }

    ensureNotLastActiveAdmin(Array.from(store.members.values()), input.email, input.disabled);
    const next = {
      ...member,
      disabledAt: input.disabled ? timestamp() : undefined
    };
    store.members.set(next.email, next);
    await this.writeAudit({
      action: input.disabled ? "member.disabled" : "member.enabled",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: next.email
    });
    return toWorkspaceMember(next);
  }

  async writeAudit(event: Omit<AuditEvent, "id" | "createdAt">): Promise<AuditEvent> {
    return writeAuditEvent(event);
  }

  async initialize(): Promise<void> {}
}

class FileArtifactRepository implements ArtifactRepository {
  private readonly db: Low<PersistenceState>;

  constructor(filePath: string) {
    this.db = new Low<PersistenceState>(new JSONFile<PersistenceState>(filePath), createSeedState());
  }

  async initialize(): Promise<void> {
    const filePath = resolveDataFilePath();
    await mkdir(dirname(filePath), { recursive: true });
    await this.db.read();
    this.db.data = normalizePersistenceState(this.db.data ?? createSeedState());

    if (this.db.data.artifacts.length === 0) {
      this.db.data = createSeedState();
    }

    await this.db.write();
  }

  async listArtifacts(filters?: { query?: string; type?: string }): Promise<ArtifactRecord[]> {
    const data = await this.readData();
    const query = filters?.query?.toLowerCase() ?? "";
    const type = filters?.type;

    return data.artifacts
      .filter((artifact) => {
        const matchesKeyword =
          query.length === 0 ||
          artifact.slug.toLowerCase().includes(query) ||
          artifact.name.toLowerCase().includes(query) ||
          artifact.summary.toLowerCase().includes(query);
        const matchesType = !type || artifact.type === type;
        return matchesKeyword && matchesType;
      })
      .sort((left, right) => right.updatedAt.localeCompare(left.updatedAt));
  }

  async getArtifactBySlug(slug: string): Promise<ArtifactRecord | undefined> {
    const data = await this.readData();
    return data.artifacts.find((artifact) => artifact.slug === slug);
  }

  async saveSubmittedArtifact(manifest: ArtifactManifest): Promise<{ artifact: ArtifactRecord; review: ReviewRecord }> {
    const data = await this.readData();
    const now = timestamp();
    const artifactId = manifest.metadata.id ?? randomUUID();

    const artifact: ArtifactRecord = {
      id: artifactId,
      manifest: {
        ...manifest,
        metadata: {
          ...manifest.metadata,
          id: artifactId,
          status: "pending_review",
          createdAt: manifest.metadata.createdAt ?? now,
          updatedAt: now
        }
      },
      type: manifest.kind,
      slug: manifest.metadata.slug,
      name: manifest.metadata.name,
      summary: manifest.metadata.summary,
      status: "pending_review",
      currentVersion: manifest.version,
      createdAt: manifest.metadata.createdAt ?? now,
      updatedAt: now
    };

    const review: ReviewRecord = {
      id: makeId("review"),
      artifactId,
      version: manifest.version,
      submittedBy: manifest.metadata.createdBy ?? "publisher",
      submittedAt: now,
      status: "pending"
    };

    const artifactIndex = data.artifacts.findIndex((item) => item.slug === artifact.slug);
    if (artifactIndex >= 0) {
      data.artifacts[artifactIndex] = artifact;
    } else {
      data.artifacts.push(artifact);
    }

    data.reviews.unshift(review);
    await this.writeAuditToData(data, {
      action: "artifact.submitted",
      actor: review.submittedBy,
      resourceId: artifactId,
      resourceType: manifest.kind,
      metadata: {
        slug: manifest.metadata.slug,
        version: manifest.version
      }
    });
    await this.persist(data);

    return { artifact, review };
  }

  async listReviews(): Promise<ReviewRecord[]> {
    const data = await this.readData();
    return [...data.reviews].sort((left, right) => right.submittedAt.localeCompare(left.submittedAt));
  }

  async decideReview(input: ReviewDecisionInput): Promise<{ review: ReviewRecord; artifact?: ArtifactRecord }> {
    const data = await this.readData();
    const review = data.reviews.find((item) => item.id === input.reviewId);
    if (!review) {
      throw new Error(`Review ${input.reviewId} not found`);
    }

    review.status = input.decision;
    review.notes = input.notes;

    const artifact = data.artifacts.find((item) => item.id === review.artifactId);
    if (artifact) {
      artifact.status = input.decision === "approved" ? "approved" : "rejected";
      artifact.updatedAt = timestamp();
      artifact.manifest.metadata.status = artifact.status;
      artifact.manifest.metadata.updatedAt = artifact.updatedAt;
      artifact.manifest.metadata.updatedBy = input.reviewer;
    }

    await this.writeAuditToData(data, {
      action: `review.${input.decision}`,
      actor: input.reviewer,
      resourceType: artifact?.type ?? "artifact",
      resourceId: review.artifactId,
      metadata: { reviewId: input.reviewId, notes: input.notes }
    });
    await this.persist(data);

    return { review, artifact };
  }

  async saveInstallPlan(plan: InstallPlan): Promise<InstallPlan> {
    const data = await this.readData();
    const existingIndex = data.installs.findIndex(
      (item) => item.slug === plan.slug && item.targetAgent === plan.targetAgent
    );

    if (existingIndex >= 0) {
      data.installs[existingIndex] = plan;
    } else {
      data.installs.push(plan);
    }

    await this.writeAuditToData(data, {
      action: "artifact.install_plan.generated",
      actor: "installer",
      resourceType: "install_plan",
      resourceId: plan.artifactId,
      metadata: { agent: plan.targetAgent, version: plan.version }
    });
    await this.persist(data);

    return plan;
  }

  async listAuditLogs(): Promise<AuditEvent[]> {
    const data = await this.readData();
    return [...data.auditLogs].sort((left, right) => right.createdAt.localeCompare(left.createdAt));
  }

  async listMembers(): Promise<WorkspaceMember[]> {
    const data = await this.readData();
    return data.members.map(toWorkspaceMember);
  }

  async getMemberByEmail(email: string): Promise<WorkspaceMember | undefined> {
    const data = await this.readData();
    const member = data.members.find((item) => item.email === email);
    return member ? toWorkspaceMember(member) : undefined;
  }

  async verifyMemberCredentials(email: string, password: string): Promise<WorkspaceMember | undefined> {
    const data = await this.readData();
    const member = data.members.find((item) => item.email === email);
    if (!member || member.disabledAt || !verifyPassword(password, member.passwordHash)) {
      return undefined;
    }

    return toWorkspaceMember(member);
  }

  async createMember(input: CreateMemberInput): Promise<WorkspaceMember> {
    const data = await this.readData();
    if (data.members.some((member) => member.email === input.email)) {
      throw new Error(`Member ${input.email} already exists`);
    }

    const member = {
      id: randomUUID(),
      email: input.email,
      team: input.team,
      roles: input.roles,
      passwordHash: hashPassword(input.password),
      disabledAt: undefined
    };

    data.members.push(member);
    await this.writeAuditToData(data, {
      action: "member.created",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email,
      metadata: {
        team: member.team,
        roles: member.roles
      }
    });
    await this.persist(data);
    return toWorkspaceMember(member);
  }

  async updateMember(input: UpdateMemberInput): Promise<WorkspaceMember> {
    const data = await this.readData();
    const index = data.members.findIndex((member) => member.email === input.email);
    if (index < 0) {
      throw new Error(`Member ${input.email} not found`);
    }

    ensureAtLeastOneAdmin(data.members, input);
    const member = {
      ...data.members[index],
      team: input.team,
      roles: input.roles
    };
    data.members[index] = member;
    await this.writeAuditToData(data, {
      action: "member.updated",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email,
      metadata: {
        team: member.team,
        roles: member.roles
      }
    });
    await this.persist(data);
    return toWorkspaceMember(member);
  }

  async resetMemberPassword(input: ResetMemberPasswordInput): Promise<WorkspaceMember> {
    const data = await this.readData();
    const index = data.members.findIndex((member) => member.email === input.email);
    if (index < 0) {
      throw new Error(`Member ${input.email} not found`);
    }

    const member = {
      ...data.members[index],
      passwordHash: hashPassword(input.password)
    };
    data.members[index] = member;
    await this.writeAuditToData(data, {
      action: "member.password_reset",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email
    });
    await this.persist(data);
    return toWorkspaceMember(member);
  }

  async changeOwnPassword(input: ChangeOwnPasswordInput): Promise<WorkspaceMember> {
    const data = await this.readData();
    const index = data.members.findIndex((member) => member.email === input.email);
    if (index < 0) {
      throw new Error(`Member ${input.email} not found`);
    }

    const current = data.members[index];
    if (current.disabledAt) {
      throw new Error("Disabled members cannot change password");
    }
    if (!verifyPassword(input.currentPassword, current.passwordHash)) {
      throw new Error("Current password is incorrect");
    }

    const member = {
      ...current,
      passwordHash: hashPassword(input.newPassword)
    };
    data.members[index] = member;
    await this.writeAuditToData(data, {
      action: "member.password_changed",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email
    });
    await this.persist(data);
    return toWorkspaceMember(member);
  }

  async setMemberDisabled(input: SetMemberDisabledInput): Promise<WorkspaceMember> {
    const data = await this.readData();
    const index = data.members.findIndex((member) => member.email === input.email);
    if (index < 0) {
      throw new Error(`Member ${input.email} not found`);
    }

    ensureNotLastActiveAdmin(data.members, input.email, input.disabled);
    const member = {
      ...data.members[index],
      disabledAt: input.disabled ? timestamp() : undefined
    };
    data.members[index] = member;
    await this.writeAuditToData(data, {
      action: input.disabled ? "member.disabled" : "member.enabled",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email
    });
    await this.persist(data);
    return toWorkspaceMember(member);
  }

  async writeAudit(event: Omit<AuditEvent, "id" | "createdAt">): Promise<AuditEvent> {
    const data = await this.readData();
    const record = await this.writeAuditToData(data, event);
    await this.persist(data);
    return record;
  }

  private async readData(): Promise<PersistenceState> {
    await this.db.read();
    this.db.data = normalizePersistenceState(this.db.data ?? createSeedState());
    return this.db.data;
  }

  private async persist(data: PersistenceState): Promise<void> {
    this.db.data = data;
    await this.db.write();
  }

  private async writeAuditToData(
    data: PersistenceState,
    event: Omit<AuditEvent, "id" | "createdAt">
  ): Promise<AuditEvent> {
    const record: AuditEvent = {
      id: makeId("audit"),
      createdAt: timestamp(),
      ...event
    };
    data.auditLogs.unshift(record);
    return record;
  }
}

function parseManifest(manifest: unknown): ArtifactManifest {
  return artifactManifestSchema.parse(manifest);
}

function toArtifactRecord(input: {
  id: string;
  type: ArtifactManifest["kind"];
  slug: string;
  name: string;
  summary: string;
  status: ArtifactRecord["status"];
  currentVersion: string;
  createdAt: Date | string;
  updatedAt: Date | string;
  manifest: ArtifactManifest;
}): ArtifactRecord {
  return {
    id: input.id,
    type: input.type,
    slug: input.slug,
    name: input.name,
    summary: input.summary,
    status: input.status,
    currentVersion: input.currentVersion,
    createdAt: typeof input.createdAt === "string" ? input.createdAt : input.createdAt.toISOString(),
    updatedAt: typeof input.updatedAt === "string" ? input.updatedAt : input.updatedAt.toISOString(),
    manifest: input.manifest
  };
}

function toReviewRecord(input: {
  id: string;
  artifactId: string;
  version: string;
  submittedBy: string;
  submittedAt: Date | string;
  status: ReviewRecord["status"];
  notes?: string | null;
}): ReviewRecord {
  return {
    id: input.id,
    artifactId: input.artifactId,
    version: input.version,
    submittedBy: input.submittedBy,
    submittedAt: typeof input.submittedAt === "string" ? input.submittedAt : input.submittedAt.toISOString(),
    status: input.status,
    notes: input.notes ?? undefined
  };
}

class PrismaArtifactRepository implements ArtifactRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async initialize(): Promise<void> {
    const memberCount = await this.prisma.workspaceMember.count();
    if (memberCount === 0) {
      await this.prisma.workspaceMember.createMany({
        data: [
          {
            email: "alice@internal",
            team: "platform",
            roles: ["admin", "reviewer", "publisher"],
            passwordHash: hashPassword(getSeedPassword("alice@internal"))
          },
          {
            email: "bob@internal",
            team: "app",
            roles: ["viewer", "publisher"],
            passwordHash: hashPassword(getSeedPassword("bob@internal"))
          }
        ]
      });
    }
  }

  async listArtifacts(filters?: { query?: string; type?: string }): Promise<ArtifactRecord[]> {
    const query = filters?.query?.trim();
    const artifacts = await this.prisma.artifact.findMany({
      where: {
        ...(filters?.type ? { type: filters.type } : {}),
        ...(query
          ? {
              OR: [
                { slug: { contains: query, mode: "insensitive" } },
                { name: { contains: query, mode: "insensitive" } },
                { summary: { contains: query, mode: "insensitive" } }
              ]
            }
          : {})
      },
      include: {
        versions: {
          orderBy: { createdAt: "desc" },
          take: 1
        }
      },
      orderBy: {
        updatedAt: "desc"
      }
    });

    return artifacts.flatMap((artifact) => {
      const version = artifact.versions[0];
      if (!version) {
        return [];
      }

      return [
        toArtifactRecord({
          id: artifact.id,
          type: artifact.type as ArtifactManifest["kind"],
          slug: artifact.slug,
          name: artifact.name,
          summary: artifact.summary,
          status: artifact.status as ArtifactRecord["status"],
          currentVersion: artifact.currentVersion ?? version.version,
          createdAt: artifact.createdAt,
          updatedAt: artifact.updatedAt,
          manifest: parseManifest(version.manifest)
        })
      ];
    });
  }

  async getArtifactBySlug(slug: string): Promise<ArtifactRecord | undefined> {
    const artifact = await this.prisma.artifact.findUnique({
      where: { slug },
      include: {
        versions: {
          orderBy: { createdAt: "desc" }
        }
      }
    });

    if (!artifact || artifact.versions.length === 0) {
      return undefined;
    }

    const version =
      artifact.versions.find((item) => item.version === artifact.currentVersion) ?? artifact.versions[0];
    const manifest = parseManifest(version.manifest);

    return toArtifactRecord({
      id: artifact.id,
      type: artifact.type as ArtifactManifest["kind"],
      slug: artifact.slug,
      name: artifact.name,
      summary: artifact.summary,
      status: artifact.status as ArtifactRecord["status"],
      currentVersion: artifact.currentVersion ?? version.version,
      createdAt: artifact.createdAt,
      updatedAt: artifact.updatedAt,
      manifest
    });
  }

  async saveSubmittedArtifact(manifest: ArtifactManifest): Promise<{ artifact: ArtifactRecord; review: ReviewRecord }> {
    const now = new Date();
    const artifactId = manifest.metadata.id ?? randomUUID();
    const createdAtIso = manifest.metadata.createdAt ?? now.toISOString();
    const updatedAtIso = now.toISOString();
    const normalizedManifest: ArtifactManifest = {
      ...manifest,
      metadata: {
        ...manifest.metadata,
        id: artifactId,
        status: "pending_review",
        createdAt: createdAtIso,
        updatedAt: updatedAtIso
      }
    };

    const artifact = await this.prisma.artifact.upsert({
      where: { slug: normalizedManifest.metadata.slug },
      create: {
        id: artifactId,
        type: normalizedManifest.kind,
        slug: normalizedManifest.metadata.slug,
        name: normalizedManifest.metadata.name,
        summary: normalizedManifest.metadata.summary,
        description: normalizedManifest.metadata.description,
        ownerTeam: normalizedManifest.metadata.ownerTeam,
        visibility: normalizedManifest.metadata.visibility,
        status: "pending_review",
        currentVersion: normalizedManifest.version,
        tags: normalizedManifest.metadata.tags,
        labels: normalizedManifest.metadata.labels,
        createdBy: normalizedManifest.metadata.createdBy,
        updatedBy: normalizedManifest.metadata.updatedBy ?? normalizedManifest.metadata.createdBy,
        createdAt: new Date(createdAtIso),
        updatedAt: new Date(updatedAtIso)
      },
      update: {
        type: normalizedManifest.kind,
        name: normalizedManifest.metadata.name,
        summary: normalizedManifest.metadata.summary,
        description: normalizedManifest.metadata.description,
        ownerTeam: normalizedManifest.metadata.ownerTeam,
        visibility: normalizedManifest.metadata.visibility,
        status: "pending_review",
        currentVersion: normalizedManifest.version,
        tags: normalizedManifest.metadata.tags,
        labels: normalizedManifest.metadata.labels,
        updatedBy: normalizedManifest.metadata.updatedBy ?? normalizedManifest.metadata.createdBy,
        updatedAt: new Date(updatedAtIso)
      }
    });

    await this.prisma.artifactVersion.upsert({
      where: {
        artifactId_version: {
          artifactId: artifact.id,
          version: normalizedManifest.version
        }
      },
      create: {
        artifactId: artifact.id,
        version: normalizedManifest.version,
        manifest: normalizedManifest,
        packageUri: normalizedManifest.distribution.packageUri,
        checksums: normalizedManifest.distribution.checksums,
        createdBy: normalizedManifest.metadata.createdBy
      },
      update: {
        manifest: normalizedManifest,
        packageUri: normalizedManifest.distribution.packageUri,
        checksums: normalizedManifest.distribution.checksums,
        createdBy: normalizedManifest.metadata.createdBy
      }
    });

    const review = await this.prisma.reviewRequest.create({
      data: {
        artifactId: artifact.id,
        version: normalizedManifest.version,
        submittedBy: normalizedManifest.metadata.createdBy ?? "publisher",
        status: "pending"
      }
    });

    await this.writeAudit({
      action: "artifact.submitted",
      actor: review.submittedBy,
      resourceId: artifact.id,
      resourceType: normalizedManifest.kind,
      metadata: {
        slug: normalizedManifest.metadata.slug,
        version: normalizedManifest.version
      }
    });

    return {
      artifact: toArtifactRecord({
        id: artifact.id,
        type: artifact.type as ArtifactManifest["kind"],
        slug: artifact.slug,
        name: artifact.name,
        summary: artifact.summary,
        status: artifact.status as ArtifactRecord["status"],
        currentVersion: artifact.currentVersion ?? normalizedManifest.version,
        createdAt: artifact.createdAt,
        updatedAt: artifact.updatedAt,
        manifest: normalizedManifest
      }),
      review: toReviewRecord({
        ...review,
        status: review.status as ReviewRecord["status"]
      })
    };
  }

  async listReviews(): Promise<ReviewRecord[]> {
    const reviews = await this.prisma.reviewRequest.findMany({
      orderBy: { submittedAt: "desc" }
    });
    return reviews.map((review) =>
      toReviewRecord({
        ...review,
        status: review.status as ReviewRecord["status"]
      })
    );
  }

  async decideReview(input: ReviewDecisionInput): Promise<{ review: ReviewRecord; artifact?: ArtifactRecord }> {
    const review = await this.prisma.reviewRequest.findUnique({
      where: { id: input.reviewId }
    });
    if (!review) {
      throw new Error(`Review ${input.reviewId} not found`);
    }

    const updatedReview = await this.prisma.reviewRequest.update({
      where: { id: input.reviewId },
      data: {
        status: input.decision,
        notes: input.notes,
        reviewer: input.reviewer,
        decidedAt: new Date()
      }
    });

    const updatedArtifact = await this.prisma.artifact.update({
      where: { id: review.artifactId },
      data: {
        status: input.decision === "approved" ? "approved" : "rejected",
        updatedBy: input.reviewer
      },
      include: {
        versions: {
          orderBy: { createdAt: "desc" },
          take: 1
        }
      }
    });

    await this.writeAudit({
      action: `review.${input.decision}`,
      actor: input.reviewer,
      resourceType: updatedArtifact.type,
      resourceId: updatedArtifact.id,
      metadata: { reviewId: input.reviewId, notes: input.notes }
    });

    const latestVersion = updatedArtifact.versions[0];
    const artifactRecord =
      latestVersion &&
      toArtifactRecord({
        id: updatedArtifact.id,
        type: updatedArtifact.type as ArtifactManifest["kind"],
        slug: updatedArtifact.slug,
        name: updatedArtifact.name,
        summary: updatedArtifact.summary,
        status: updatedArtifact.status as ArtifactRecord["status"],
        currentVersion: updatedArtifact.currentVersion ?? latestVersion.version,
        createdAt: updatedArtifact.createdAt,
        updatedAt: updatedArtifact.updatedAt,
        manifest: parseManifest(latestVersion.manifest)
      });

    return {
      review: toReviewRecord({
        ...updatedReview,
        status: updatedReview.status as ReviewRecord["status"]
      }),
      artifact: artifactRecord ?? undefined
    };
  }

  async saveInstallPlan(plan: InstallPlan): Promise<InstallPlan> {
    await this.prisma.installEvent.create({
      data: {
        artifactId: plan.artifactId,
        version: plan.version,
        targetAgent: plan.targetAgent
      }
    });

    await this.writeAudit({
      action: "artifact.install_plan.generated",
      actor: "installer",
      resourceType: "install_plan",
      resourceId: plan.artifactId,
      metadata: { agent: plan.targetAgent, version: plan.version }
    });

    return plan;
  }

  async listAuditLogs(): Promise<AuditEvent[]> {
    const logs = await this.prisma.auditLog.findMany({
      orderBy: { createdAt: "desc" }
    });

    return logs.map((log) => ({
      id: log.id,
      action: log.action,
      actor: log.actor,
      resourceType: log.resourceType,
      resourceId: log.resourceId ?? "",
      createdAt: log.createdAt.toISOString(),
      metadata: (log.metadata as Record<string, unknown>) ?? {}
    }));
  }

  async listMembers(): Promise<WorkspaceMember[]> {
    const members = await this.prisma.workspaceMember.findMany({
      orderBy: { createdAt: "asc" }
    });

    return members.map((member) =>
      toWorkspaceMember({
        id: member.id,
        email: member.email,
        team: member.team,
        roles: member.roles as ActorRole[],
        passwordHash: member.passwordHash,
        disabledAt: member.disabledAt?.toISOString()
      })
    );
  }

  async getMemberByEmail(email: string): Promise<WorkspaceMember | undefined> {
    const member = await this.prisma.workspaceMember.findUnique({
      where: { email }
    });

    if (!member) {
      return undefined;
    }

    return toWorkspaceMember({
      id: member.id,
      email: member.email,
      team: member.team,
      roles: member.roles as ActorRole[],
      passwordHash: member.passwordHash,
      disabledAt: undefined
    });
  }

  async verifyMemberCredentials(email: string, password: string): Promise<WorkspaceMember | undefined> {
    const member = await this.prisma.workspaceMember.findUnique({
      where: { email }
    });

    if (!member || member.disabledAt || !verifyPassword(password, member.passwordHash)) {
      return undefined;
    }

    return toWorkspaceMember({
      id: member.id,
      email: member.email,
      team: member.team,
      roles: member.roles as ActorRole[],
      passwordHash: member.passwordHash,
      disabledAt: undefined
    });
  }

  async createMember(input: CreateMemberInput): Promise<WorkspaceMember> {
    const existing = await this.prisma.workspaceMember.findUnique({
      where: { email: input.email }
    });
    if (existing) {
      throw new Error(`Member ${input.email} already exists`);
    }

    const member = await this.prisma.workspaceMember.create({
      data: {
        email: input.email,
        team: input.team,
        roles: input.roles,
        passwordHash: hashPassword(input.password),
        disabledAt: null
      }
    });

    await this.writeAudit({
      action: "member.created",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email,
      metadata: {
        team: member.team,
        roles: member.roles as ActorRole[]
      }
    });

    return toWorkspaceMember({
      id: member.id,
      email: member.email,
      team: member.team,
      roles: member.roles as ActorRole[],
      passwordHash: member.passwordHash,
      disabledAt: member.disabledAt?.toISOString()
    });
  }

  async updateMember(input: UpdateMemberInput): Promise<WorkspaceMember> {
    const members = await this.prisma.workspaceMember.findMany();
    const current = members.find((member) => member.email === input.email);
    if (!current) {
      throw new Error(`Member ${input.email} not found`);
    }

    ensureAtLeastOneAdmin(
      members.map((member) => ({
        email: member.email,
        roles: member.roles as ActorRole[],
        disabledAt: member.disabledAt?.toISOString()
      })),
      input
    );

    const member = await this.prisma.workspaceMember.update({
      where: { email: input.email },
      data: {
        team: input.team,
        roles: input.roles
      }
    });

    await this.writeAudit({
      action: "member.updated",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email,
      metadata: {
        team: member.team,
        roles: member.roles as ActorRole[]
      }
    });

    return toWorkspaceMember({
      id: member.id,
      email: member.email,
      team: member.team,
      roles: member.roles as ActorRole[],
      passwordHash: member.passwordHash,
      disabledAt: member.disabledAt?.toISOString()
    });
  }

  async resetMemberPassword(input: ResetMemberPasswordInput): Promise<WorkspaceMember> {
    const existing = await this.prisma.workspaceMember.findUnique({
      where: { email: input.email }
    });
    if (!existing) {
      throw new Error(`Member ${input.email} not found`);
    }

    const member = await this.prisma.workspaceMember.update({
      where: { email: input.email },
      data: {
        passwordHash: hashPassword(input.password)
      }
    });

    await this.writeAudit({
      action: "member.password_reset",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email
    });

    return toWorkspaceMember({
      id: member.id,
      email: member.email,
      team: member.team,
      roles: member.roles as ActorRole[],
      passwordHash: member.passwordHash,
      disabledAt: member.disabledAt?.toISOString()
    });
  }

  async changeOwnPassword(input: ChangeOwnPasswordInput): Promise<WorkspaceMember> {
    const member = await this.prisma.workspaceMember.findUnique({
      where: { email: input.email }
    });
    if (!member) {
      throw new Error(`Member ${input.email} not found`);
    }
    if (member.disabledAt) {
      throw new Error("Disabled members cannot change password");
    }
    if (!verifyPassword(input.currentPassword, member.passwordHash)) {
      throw new Error("Current password is incorrect");
    }

    const updated = await this.prisma.workspaceMember.update({
      where: { email: input.email },
      data: {
        passwordHash: hashPassword(input.newPassword)
      }
    });

    await this.writeAudit({
      action: "member.password_changed",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: updated.email
    });

    return toWorkspaceMember({
      id: updated.id,
      email: updated.email,
      team: updated.team,
      roles: updated.roles as ActorRole[],
      passwordHash: updated.passwordHash,
      disabledAt: updated.disabledAt?.toISOString()
    });
  }

  async setMemberDisabled(input: SetMemberDisabledInput): Promise<WorkspaceMember> {
    const members = await this.prisma.workspaceMember.findMany();
    const current = members.find((member) => member.email === input.email);
    if (!current) {
      throw new Error(`Member ${input.email} not found`);
    }

    ensureNotLastActiveAdmin(
      members.map((member) => ({
        email: member.email,
        roles: member.roles as ActorRole[],
        disabledAt: member.disabledAt?.toISOString()
      })),
      input.email,
      input.disabled
    );

    const member = await this.prisma.workspaceMember.update({
      where: { email: input.email },
      data: {
        disabledAt: input.disabled ? new Date() : null
      }
    });

    await this.writeAudit({
      action: input.disabled ? "member.disabled" : "member.enabled",
      actor: input.performedBy,
      resourceType: "workspace_member",
      resourceId: member.email
    });

    return toWorkspaceMember({
      id: member.id,
      email: member.email,
      team: member.team,
      roles: member.roles as ActorRole[],
      passwordHash: member.passwordHash,
      disabledAt: member.disabledAt?.toISOString()
    });
  }

  async writeAudit(event: Omit<AuditEvent, "id" | "createdAt">): Promise<AuditEvent> {
    const record = await this.prisma.auditLog.create({
      data: {
        action: event.action,
        actor: event.actor,
        resourceType: event.resourceType,
        resourceId: event.resourceId,
        metadata: (event.metadata ?? {}) as never
      }
    });

    return {
      id: record.id,
      action: record.action,
      actor: record.actor,
      resourceType: record.resourceType,
      resourceId: record.resourceId ?? "",
      createdAt: record.createdAt.toISOString(),
      metadata: (record.metadata as Record<string, unknown>) ?? {}
    };
  }
}

const prismaClient = getPrismaClient();

export const artifactRepository: ArtifactRepository = prismaClient
  ? new PrismaArtifactRepository(prismaClient)
  : new FileArtifactRepository(resolveDataFilePath());
export const repositoryMode = prismaClient ? "prisma" : "file";

export async function initializeArtifactRepository(): Promise<void> {
  await artifactRepository.initialize();
}

export function hasRole(member: { roles: ActorRole[] } | undefined, role: ActorRole): boolean {
  return Boolean(member?.roles.includes(role) || member?.roles.includes("admin"));
}
