import type { ArtifactManifest, ArtifactPackageBundle } from "@agentx/schema";

export interface ArtifactSummary {
  id: string;
  slug: string;
  name: string;
  summary: string;
  type: ArtifactManifest["kind"];
  status: string;
  currentVersion: string;
  tags: string[];
}

export interface ReviewRequest {
  id: string;
  artifactId: string;
  version: string;
  submittedBy: string;
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  notes?: string;
}

export interface PersistenceStateExport {
  artifacts: unknown[];
  reviews: ReviewRequest[];
  installs: unknown[];
  auditLogs: Array<{
    id: string;
    action: string;
    actor: string;
    resourceType: string;
    resourceId: string;
    createdAt: string;
    metadata?: Record<string, unknown>;
  }>;
  members: Array<{
    id: string;
    email: string;
    team: string;
    roles: string[];
  }>;
}

export interface PersistenceBackupFile {
  fileName: string;
  backupPath: string;
  createdAt: string;
  sizeBytes: number;
}

export interface WorkspaceMember {
  id: string;
  email: string;
  team: string;
  roles: string[];
  disabledAt?: string;
}

export interface CurrentActor {
  actor: {
    email: string;
    team: string;
    roles: string[];
  };
  permissions: {
    canView: boolean;
    canPublish: boolean;
    canReview: boolean;
    canAdmin: boolean;
  };
}

export interface AuthSession extends CurrentActor {
  token: string;
  tokenType: "Bearer";
  expiresAt: string;
}

export class AgentXApiError extends Error {
  constructor(
    message: string,
    public readonly status: number
  ) {
    super(message);
    this.name = "AgentXApiError";
  }
}

export class AgentXClient {
  constructor(private readonly baseUrl: string, private readonly token?: string) {}

  async listArtifacts(query = ""): Promise<ArtifactSummary[]> {
    const response = await fetch(`${this.baseUrl}/catalog?query=${encodeURIComponent(query)}`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async getArtifact(slug: string): Promise<ArtifactManifest> {
    const response = await fetch(`${this.baseUrl}/catalog/${encodeURIComponent(slug)}`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async login(email: string, password: string): Promise<AuthSession> {
    const response = await fetch(`${this.baseUrl}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    return this.parseJson<AuthSession>(response);
  }

  async logout(): Promise<{ ok: true }> {
    const response = await fetch(`${this.baseUrl}/auth/logout`, {
      method: "POST",
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async changeOwnPassword(input: { currentPassword: string; newPassword: string }): Promise<{ ok: true; member: WorkspaceMember }> {
    const response = await fetch(`${this.baseUrl}/auth/change-password`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify(input)
    });
    return this.parseJson(response);
  }

  async submitArtifact(
    manifest: ArtifactManifest,
    artifactPackage?: ArtifactPackageBundle
  ): Promise<{ id: string; version: string; reviewId: string }> {
    const response = await fetch(`${this.baseUrl}/publisher/artifacts`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify(artifactPackage ? { manifest, artifactPackage } : manifest)
    });
    return this.parseJson<{ id: string; version: string; reviewId: string }>(response);
  }

  async downloadArtifactPackage(slug: string, version: string): Promise<ArtifactPackageBundle> {
    const response = await fetch(`${this.baseUrl}/catalog/${encodeURIComponent(slug)}/versions/${encodeURIComponent(version)}/package`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async listReviewQueue(): Promise<ReviewRequest[]> {
    const response = await fetch(`${this.baseUrl}/governance/reviews`, {
      headers: this.headers()
    });
    return this.parseJson<ReviewRequest[]>(response);
  }

  async decideReview(
    reviewId: string,
    input: { decision: "approved" | "rejected"; reviewer?: string; notes?: string }
  ): Promise<{ ok: true; review: ReviewRequest }> {
    const response = await fetch(`${this.baseUrl}/governance/reviews/${encodeURIComponent(reviewId)}/decision`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify(input)
    });
    return this.parseJson<{ ok: true; review: ReviewRequest }>(response);
  }

  async listAuditLogs(): Promise<
    Array<{
      id: string;
      action: string;
      actor: string;
      resourceType: string;
      resourceId: string;
      createdAt: string;
      metadata?: Record<string, unknown>;
    }>
  > {
    const response = await fetch(`${this.baseUrl}/governance/audit-logs`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async getPersistenceInfo(): Promise<{
    dataFilePath: string;
    backupDirectory: string;
    artifactCount: number;
    reviewCount: number;
  }> {
    const response = await fetch(`${this.baseUrl}/admin/persistence`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async exportPersistence(): Promise<PersistenceStateExport> {
    const response = await fetch(`${this.baseUrl}/admin/persistence/export`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async listPersistenceBackups(): Promise<PersistenceBackupFile[]> {
    const response = await fetch(`${this.baseUrl}/admin/persistence/backups`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async importPersistence(payload: unknown): Promise<{
    ok: true;
    counts: { artifacts: number; reviews: number; installs: number; auditLogs: number; members: number };
  }> {
    const response = await fetch(`${this.baseUrl}/admin/persistence/import`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    return this.parseJson(response);
  }

  async createPersistenceBackup(label?: string): Promise<{ ok: true; backupPath: string; fileName: string }> {
    const response = await fetch(`${this.baseUrl}/admin/persistence/backup`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify(label ? { label } : {})
    });
    return this.parseJson(response);
  }

  async getCurrentActor(): Promise<CurrentActor> {
    const response = await fetch(`${this.baseUrl}/auth/me`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async listMembers(): Promise<WorkspaceMember[]> {
    const response = await fetch(`${this.baseUrl}/authz/members`, {
      headers: this.headers()
    });
    return this.parseJson(response);
  }

  async createMember(input: {
    email: string;
    team: string;
    roles: string[];
    password: string;
  }): Promise<{ member: WorkspaceMember }> {
    const response = await fetch(`${this.baseUrl}/authz/members`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify(input)
    });
    return this.parseJson(response);
  }

  async updateMember(
    email: string,
    input: {
      team: string;
      roles: string[];
    }
  ): Promise<{ member: WorkspaceMember }> {
    const response = await fetch(`${this.baseUrl}/authz/members/${encodeURIComponent(email)}`, {
      method: "PATCH",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify(input)
    });
    return this.parseJson(response);
  }

  async resetMemberPassword(
    email: string,
    password: string
  ): Promise<{ ok: true; member: WorkspaceMember }> {
    const response = await fetch(`${this.baseUrl}/authz/members/${encodeURIComponent(email)}/reset-password`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify({ password })
    });
    return this.parseJson(response);
  }

  async setMemberDisabled(
    email: string,
    disabled: boolean
  ): Promise<{ ok: true; member: WorkspaceMember }> {
    const response = await fetch(`${this.baseUrl}/authz/members/${encodeURIComponent(email)}/status`, {
      method: "POST",
      headers: {
        ...this.headers(),
        "content-type": "application/json"
      },
      body: JSON.stringify({ disabled })
    });
    return this.parseJson(response);
  }

  private headers(): Record<string, string> {
    return this.token ? { authorization: `Bearer ${this.token}` } : {};
  }

  private async parseJson<T>(response: Response): Promise<T> {
    if (!response.ok) {
      let message = `Request failed with status ${response.status}`;
      try {
        const body = (await response.json()) as { message?: string };
        if (body.message) {
          message = body.message;
        }
      } catch {}
      throw new AgentXApiError(message, response.status);
    }

    return response.json() as Promise<T>;
  }
}
