import type { ArtifactManifest, ArtifactStatus, ActorRole } from "@agentx/schema";

import { getSeedPassword, hashPassword } from "../auth/password.js";

export interface ArtifactRecord {
  id: string;
  manifest: ArtifactManifest;
  type: ArtifactManifest["kind"];
  slug: string;
  name: string;
  summary: string;
  status: ArtifactStatus;
  currentVersion: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewRecord {
  id: string;
  artifactId: string;
  version: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  notes?: string;
}

export interface InstallPlan {
  artifactId: string;
  slug: string;
  version: string;
  steps: string[];
  dependencies: string[];
  targetAgent: string;
}

export interface AuditEvent {
  id: string;
  action: string;
  actor: string;
  resourceType: string;
  resourceId: string;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

export interface WorkspaceMember {
  id: string;
  email: string;
  team: string;
  roles: ActorRole[];
  disabledAt?: string;
}

export interface WorkspaceMemberRecord extends WorkspaceMember {
  passwordHash: string;
}

export interface PersistenceState {
  artifacts: ArtifactRecord[];
  reviews: ReviewRecord[];
  installs: InstallPlan[];
  auditLogs: AuditEvent[];
  members: WorkspaceMemberRecord[];
}

function now(): string {
  return new Date().toISOString();
}

const seedManifest: ArtifactManifest = {
  apiVersion: "agentx/v1",
  kind: "skill",
  type: "skill",
  version: "1.0.0",
  metadata: {
    id: "3f74e62d-7034-4a8e-8607-82f4e2b5b3b4",
    name: "review-skill",
    slug: "review-skill",
    summary: "统一的代码评审 skill",
    description: "帮助团队按统一规范进行代码评审。",
    ownerTeam: "platform",
    tags: ["review", "quality"],
    labels: {
      category: "quality"
    },
    visibility: "workspace",
    status: "approved",
    createdBy: "system",
    updatedBy: "system",
    createdAt: now(),
    updatedAt: now()
  },
  compatibility: {
    agents: ["cursor", "claude_code"],
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
    packageUri: "https://packages.internal/review-skill-1.0.0.tgz",
    checksums: {
      sha256: "demo"
    }
  },
  spec: {
    format: "SKILL.md",
    entrypoint: "SKILL.md",
    triggers: ["manual", "recommended"],
    requiredContext: [],
    outputTargets: ["cursor", "claude_code"]
  }
};

export function createSeedState(): PersistenceState {
  return {
    artifacts: [
      {
        id: seedManifest.metadata.id!,
        manifest: seedManifest,
        type: seedManifest.kind,
        slug: seedManifest.metadata.slug,
        name: seedManifest.metadata.name,
        summary: seedManifest.metadata.summary,
        status: seedManifest.metadata.status,
        currentVersion: seedManifest.version,
        createdAt: seedManifest.metadata.createdAt!,
        updatedAt: seedManifest.metadata.updatedAt!
      }
    ],
    reviews: [],
    installs: [],
    auditLogs: [],
    members: [
      {
        id: "u_alice",
        email: "alice@internal",
        team: "platform",
        roles: ["admin", "reviewer", "publisher"],
        passwordHash: hashPassword(getSeedPassword("alice@internal"))
      },
      {
        id: "u_bob",
        email: "bob@internal",
        team: "app",
        roles: ["viewer", "publisher"],
        passwordHash: hashPassword(getSeedPassword("bob@internal"))
      }
    ]
  };
}

const seedState = createSeedState();

export const store = {
  artifacts: new Map<string, ArtifactRecord>(seedState.artifacts.map((artifact) => [artifact.slug, artifact])),
  reviews: new Map<string, ReviewRecord>(seedState.reviews.map((review) => [review.id, review])),
  installs: new Map<string, InstallPlan>(seedState.installs.map((plan) => [`${plan.slug}:${plan.targetAgent}`, plan])),
  auditLogs: new Map<string, AuditEvent>(seedState.auditLogs.map((event) => [event.id, event])),
  members: new Map<string, WorkspaceMemberRecord>(seedState.members.map((member) => [member.email, member]))
};

export function toWorkspaceMember(member: WorkspaceMemberRecord): WorkspaceMember {
  return {
    id: member.id,
    email: member.email,
    team: member.team,
    roles: member.roles,
    disabledAt: member.disabledAt
  };
}

export function normalizePersistenceState(state: PersistenceState): PersistenceState {
  return {
    ...state,
    members: state.members.map((member) => ({
      ...member,
      passwordHash: member.passwordHash || hashPassword(getSeedPassword(member.email)),
      disabledAt: member.disabledAt
    }))
  };
}

export function makeId(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

export function writeAuditEvent(event: Omit<AuditEvent, "id" | "createdAt">): AuditEvent {
  const record: AuditEvent = {
    id: makeId("audit"),
    createdAt: now(),
    ...event
  };
  store.auditLogs.set(record.id, record);
  return record;
}
