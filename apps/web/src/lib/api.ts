import {
  AgentXClient,
  AgentXApiError,
  type AuthSession,
  type ArtifactSummary,
  type CurrentActor,
  type PersistenceBackupFile,
  type PersistenceStateExport,
  type ReviewRequest,
  type WorkspaceMember
} from "@agentx/sdk";
import type { ArtifactManifest, ArtifactPackageBundle } from "@agentx/schema";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getLocale } from "./i18n-server";

const apiBaseUrl = process.env.AGENTX_API_URL ?? "http://localhost:4000";
const serviceApiToken = process.env.AGENTX_WEB_TOKEN;
const authCookieName = "agentx_token";

function createFallbackArtifact(locale: "zh" | "en"): ArtifactManifest {
  return {
    apiVersion: "agentx/v1",
    kind: "skill",
    type: "skill",
    version: "1.0.0",
    metadata: {
      id: "3f74e62d-7034-4a8e-8607-82f4e2b5b3b4",
      name: "review-skill",
      slug: "review-skill",
      summary: locale === "zh" ? "统一的代码评审 skill" : "A shared code review skill",
      description: locale === "zh" ? "帮助团队按统一规范进行代码评审。" : "Helps teams review code with a shared standard.",
      ownerTeam: "platform",
      tags: ["review", "quality"],
      labels: {
        category: "quality"
      },
      visibility: "workspace",
      status: "approved",
      createdBy: "system",
      updatedBy: "system",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
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
      checksums: {}
    },
    spec: {
      format: "SKILL.md",
      entrypoint: "SKILL.md",
      triggers: ["manual", "recommended"],
      requiredContext: [],
      outputTargets: ["cursor", "claude_code"]
    }
  };
}

function createFallbackReviews(artifact: ArtifactManifest): ReviewRequest[] {
  return [
    {
      id: "review_demo_1",
      artifactId: artifact.metadata.id!,
      version: artifact.version,
      submittedBy: "system",
      submittedAt: new Date().toISOString(),
      status: "pending"
    }
  ];
}

function isApiError(error: unknown, status?: number): error is AgentXApiError {
  return error instanceof AgentXApiError && (status === undefined || error.status === status);
}

async function readToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(authCookieName)?.value ?? serviceApiToken;
}

async function client() {
  const token = await readToken();
  return new AgentXClient(apiBaseUrl, token);
}

export function getApiBaseUrl() {
  return apiBaseUrl;
}

export async function loginWithPassword(email: string, password: string): Promise<AuthSession> {
  return new AgentXClient(apiBaseUrl).login(email, password);
}

export async function getCurrentActor(): Promise<CurrentActor | null> {
  const token = await readToken();
  if (!token) {
    return null;
  }

  const cookieStore = await cookies();
  const cookieToken = cookieStore.get(authCookieName)?.value ?? serviceApiToken;

  try {
    return await new AgentXClient(apiBaseUrl, cookieToken).getCurrentActor();
  } catch (error) {
    if (isApiError(error, 401)) {
      return null;
    }
    throw error;
  }
}

export async function requireCurrentActor(): Promise<CurrentActor> {
  return requireCurrentActorFor("/");
}

export async function requireCurrentActorFor(redirectToPath: string): Promise<CurrentActor> {
  const current = await getCurrentActor();
  if (!current) {
    redirect(`/login?redirectTo=${encodeURIComponent(redirectToPath)}`);
  }

  return current;
}

export async function listArtifacts(query = ""): Promise<ArtifactSummary[]> {
  const locale = await getLocale();
  const fallbackArtifact = createFallbackArtifact(locale);
  try {
    return await (await client()).listArtifacts(query);
  } catch (error) {
    if (isApiError(error, 401)) {
      redirect("/login");
    }
    if (error instanceof AgentXApiError) {
      throw error;
    }
    return [
      {
        id: fallbackArtifact.metadata.id!,
        slug: fallbackArtifact.metadata.slug,
        name: fallbackArtifact.metadata.name,
        summary: fallbackArtifact.metadata.summary,
        type: fallbackArtifact.kind,
        status: fallbackArtifact.metadata.status,
        currentVersion: fallbackArtifact.version,
        tags: fallbackArtifact.metadata.tags
      }
    ].filter((artifact) => artifact.slug.includes(query) || artifact.name.includes(query) || query.length === 0);
  }
}

export async function getArtifact(slug: string): Promise<ArtifactManifest> {
  const locale = await getLocale();
  try {
    return await (await client()).getArtifact(slug);
  } catch (error) {
    if (isApiError(error, 401)) {
      redirect("/login");
    }
    if (error instanceof AgentXApiError) {
      throw error;
    }
    return createFallbackArtifact(locale);
  }
}

export async function getReviewQueue(): Promise<ReviewRequest[]> {
  const locale = await getLocale();
  const fallbackArtifact = createFallbackArtifact(locale);
  try {
    return await (await client()).listReviewQueue();
  } catch (error) {
    if (isApiError(error, 401)) {
      redirect("/login");
    }
    if (error instanceof AgentXApiError) {
      throw error;
    }
    return createFallbackReviews(fallbackArtifact);
  }
}

export async function submitArtifact(manifest: ArtifactManifest, artifactPackage?: ArtifactPackageBundle) {
  return (await client()).submitArtifact(manifest, artifactPackage);
}

export async function decideReview(reviewId: string, input: { decision: "approved" | "rejected"; notes?: string }) {
  return (await client()).decideReview(reviewId, input);
}

export async function getAuditLogs() {
  try {
    return await (await client()).listAuditLogs();
  } catch (error) {
    if (isApiError(error, 401)) {
      redirect("/login");
    }
    if (error instanceof AgentXApiError) {
      throw error;
    }
    return [];
  }
}

export async function getPersistenceInfo() {
  try {
    return await (await client()).getPersistenceInfo();
  } catch (error) {
    if (isApiError(error, 401)) {
      redirect("/login");
    }
    if (error instanceof AgentXApiError) {
      throw error;
    }
    return {
      dataFilePath: "apps/api/.data/agentx.json",
      backupDirectory: "apps/api/.data/backups",
      artifactCount: 1,
      reviewCount: 1
    };
  }
}

export async function exportPersistenceState(): Promise<PersistenceStateExport> {
  const locale = await getLocale();
  const fallbackArtifact = createFallbackArtifact(locale);
  const fallbackReviews = createFallbackReviews(fallbackArtifact);
  try {
    return await (await client()).exportPersistence();
  } catch (error) {
    if (isApiError(error, 401)) {
      redirect("/login");
    }
    if (error instanceof AgentXApiError) {
      throw error;
    }
    return {
      artifacts: [
        {
          id: fallbackArtifact.metadata.id!,
          slug: fallbackArtifact.metadata.slug,
          type: fallbackArtifact.kind
        }
      ],
      reviews: fallbackReviews,
      installs: [],
      auditLogs: [],
      members: [
        {
          id: "u_alice",
          email: "alice@internal",
          team: "platform",
          roles: ["admin", "reviewer", "publisher"]
        }
      ]
    };
  }
}

export async function backupPersistence(label?: string) {
  return (await client()).createPersistenceBackup(label);
}

export async function importPersistenceState(payload: unknown) {
  return (await client()).importPersistence(payload);
}

export async function getPersistenceBackups(): Promise<PersistenceBackupFile[]> {
  try {
    return await (await client()).listPersistenceBackups();
  } catch (error) {
    if (isApiError(error, 401)) {
      redirect("/login");
    }
    if (error instanceof AgentXApiError) {
      throw error;
    }
    return [];
  }
}

export async function getMembers(): Promise<WorkspaceMember[]> {
  return (await client()).listMembers();
}

export async function createMember(input: {
  email: string;
  team: string;
  roles: string[];
  password: string;
}) {
  return (await client()).createMember(input);
}

export async function updateMember(input: { email: string; team: string; roles: string[] }) {
  return (await client()).updateMember(input.email, {
    team: input.team,
    roles: input.roles
  });
}

export async function resetMemberPassword(input: { email: string; password: string }) {
  return (await client()).resetMemberPassword(input.email, input.password);
}

export async function setMemberDisabled(input: { email: string; disabled: boolean }) {
  return (await client()).setMemberDisabled(input.email, input.disabled);
}

export async function changeOwnPassword(input: { currentPassword: string; newPassword: string }) {
  return (await client()).changeOwnPassword(input);
}
