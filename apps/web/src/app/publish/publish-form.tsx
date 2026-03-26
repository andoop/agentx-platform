"use client";

import type { CSSProperties, ChangeEvent, ReactNode } from "react";
import { useActionState, useMemo, useState } from "react";
import { useFormStatus } from "react-dom";

import {
  getMessages,
  translateArtifactKind,
  translateAuthType,
  translateCommandType,
  translateExecutionMode,
  translateInstallMethod,
  translateRiskLevel,
  translateRuntime,
  translateTransport,
  translateVisibility
} from "../../lib/i18n";
import { idleFormState } from "../form-state";
import { useLocale } from "../locale-provider";
import { submitArtifactFormAction } from "./actions";

const inputStyle = {
  border: "1px solid #d1d5db",
  borderRadius: 10,
  fontSize: 14,
  padding: "10px 12px",
  width: "100%"
} satisfies CSSProperties;

const textareaStyle = {
  ...inputStyle,
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  minHeight: 88
} satisfies CSSProperties;

function Section({
  title,
  description,
  children
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        display: "grid",
        gap: 12,
        padding: 14
      }}
    >
      <div style={{ display: "grid", gap: 4 }}>
        <div style={{ color: "#111827", fontSize: 14, fontWeight: 700 }}>{title}</div>
        {description ? <div style={{ color: "#6b7280", fontSize: 13 }}>{description}</div> : null}
      </div>
      {children}
    </div>
  );
}

function StatusMessage({ state }: { state: { status: "idle" | "success" | "error"; message?: string } }) {
  if (state.status === "idle" || !state.message) {
    return null;
  }

  return (
    <div
      style={{
        background: state.status === "error" ? "#fee2e2" : "#dcfce7",
        borderRadius: 10,
        color: state.status === "error" ? "#991b1b" : "#166534",
        padding: "10px 12px"
      }}
    >
      {state.message}
    </div>
  );
}

function SubmitButton() {
  const locale = useLocale();
  const t = getMessages(locale);
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        background: "#111827",
        border: "none",
        borderRadius: 10,
        color: "#fff",
        cursor: pending ? "progress" : "pointer",
        fontSize: 14,
        fontWeight: 600,
        opacity: pending ? 0.7 : 1,
        padding: "12px 16px"
      }}
    >
      {pending ? t.publish.form.submitting : t.publish.form.submit}
    </button>
  );
}

export function PublishForm() {
  const locale = useLocale();
  const t = getMessages(locale);
  const [state, action] = useActionState(submitArtifactFormAction, idleFormState);
  const [packagePaths, setPackagePaths] = useState<string[]>([]);
  const [artifactType, setArtifactType] = useState<"skill" | "command" | "mcp_server">("skill");

  function defaultEntrypoint(type: "skill" | "command" | "mcp_server") {
    switch (type) {
      case "skill":
        return "SKILL.md";
      case "command":
        return "command.md";
      case "mcp_server":
        return "dist/index.js";
    }
  }

  function handlePackageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.currentTarget.files ?? []);
    setPackagePaths(
      files.map((file) => {
        const relativePath = (file as File & { webkitRelativePath?: string }).webkitRelativePath;
        return relativePath && relativePath.length > 0 ? relativePath : file.name;
      })
    );
  }

  const packageSummary = useMemo(() => {
    if (packagePaths.length === 0) {
      return t.publish.form.packageEmpty;
    }

    return t.publish.form.packageSelected(packagePaths.length);
  }, [packagePaths, t]);

  return (
    <form action={action} style={{ display: "grid", gap: 14 }}>
      <Section title={t.publish.form.basicInfo}>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="type">{t.publish.form.artifactType}</label>
          <select
            id="type"
            name="type"
            defaultValue="skill"
            style={inputStyle}
            onChange={(event) => setArtifactType(event.currentTarget.value as "skill" | "command" | "mcp_server")}
          >
            <option value="skill">{translateArtifactKind("skill", locale)}</option>
            <option value="command">{translateArtifactKind("command", locale)}</option>
            <option value="mcp_server">{translateArtifactKind("mcp_server", locale)}</option>
          </select>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="name">{t.publish.form.name}</label>
          <input id="name" name="name" required style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="slug">{t.publish.form.slug}</label>
          <input id="slug" name="slug" required pattern="^[a-z0-9-]+$" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="summary">{t.publish.form.summary}</label>
          <input id="summary" name="summary" required maxLength={160} style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="description">{t.publish.form.description}</label>
          <textarea id="description" name="description" required rows={5} style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="entrypoint">{t.publish.form.entrypoint}</label>
          <input
            key={artifactType}
            id="entrypoint"
            name="entrypoint"
            defaultValue={defaultEntrypoint(artifactType)}
            style={inputStyle}
          />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="version">{t.publish.form.version}</label>
          <input id="version" name="version" defaultValue="0.1.0" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="ownerTeam">{t.publish.form.ownerTeam}</label>
          <input id="ownerTeam" name="ownerTeam" defaultValue="platform" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="visibility">{t.publish.form.visibility}</label>
          <select id="visibility" name="visibility" defaultValue="workspace" style={inputStyle}>
            <option value="workspace">{translateVisibility("workspace", locale)}</option>
            <option value="private">{translateVisibility("private", locale)}</option>
          </select>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="tags">{t.publish.form.tags}</label>
          <input id="tags" name="tags" placeholder="review,quality" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="labels">{t.publish.form.labels}</label>
          <textarea
            id="labels"
            name="labels"
            placeholder={"tier=core\nowner=platform"}
            style={textareaStyle}
          />
        </div>
      </Section>

      <Section title={t.publish.form.compatibilityAndSecurity}>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="compatibilityAgents">{t.publish.form.agents}</label>
          <input
            id="compatibilityAgents"
            name="compatibilityAgents"
            defaultValue="cursor,claude_code"
            style={inputStyle}
          />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="compatibilityOs">{t.publish.form.os}</label>
          <input id="compatibilityOs" name="compatibilityOs" defaultValue="darwin,linux" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="compatibilityArch">{t.publish.form.arch}</label>
          <input id="compatibilityArch" name="compatibilityArch" defaultValue="arm64,x64" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="riskLevel">{t.publish.form.riskLevel}</label>
          <select id="riskLevel" name="riskLevel" defaultValue="low" style={inputStyle}>
            <option value="low">{translateRiskLevel("low", locale)}</option>
            <option value="medium">{translateRiskLevel("medium", locale)}</option>
            <option value="high">{translateRiskLevel("high", locale)}</option>
            <option value="restricted">{translateRiskLevel("restricted", locale)}</option>
          </select>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="allowedHosts">{t.publish.form.allowedHosts}</label>
          <input id="allowedHosts" name="allowedHosts" placeholder="api.github.com,registry.npmjs.org" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="requiredSecrets">{t.publish.form.requiredSecrets}</label>
          <input id="requiredSecrets" name="requiredSecrets" placeholder="GITHUB_TOKEN" style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="requiresReview">{t.publish.form.requiresReview}</label>
          <select id="requiresReview" name="requiresReview" defaultValue="true" style={inputStyle}>
            <option value="true">{t.common.yes}</option>
            <option value="false">{t.common.no}</option>
          </select>
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="requiresApprovalToRun">{t.publish.form.requiresApprovalToRun}</label>
          <select id="requiresApprovalToRun" name="requiresApprovalToRun" defaultValue="false" style={inputStyle}>
            <option value="false">{t.common.no}</option>
            <option value="true">{t.common.yes}</option>
          </select>
        </div>
      </Section>

      {artifactType === "skill" ? (
        <Section title={t.publish.form.skillConfig} description={t.publish.form.skillConfigDescription}>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="skillFormat">{t.publish.form.skillFormat}</label>
            <select id="skillFormat" name="skillFormat" defaultValue="SKILL.md" style={inputStyle}>
              <option value="SKILL.md">SKILL.md</option>
              <option value=".mdc">.mdc</option>
              <option value="custom">{locale === "zh" ? "自定义" : "Custom"}</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="skillTriggers">{t.publish.form.skillTriggers}</label>
            <input id="skillTriggers" name="skillTriggers" defaultValue="manual" style={inputStyle} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="skillRequiredContext">{t.publish.form.skillRequiredContext}</label>
            <input id="skillRequiredContext" name="skillRequiredContext" placeholder="diff,changed-files" style={inputStyle} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="skillOutputTargets">{t.publish.form.skillOutputTargets}</label>
            <input id="skillOutputTargets" name="skillOutputTargets" defaultValue="cursor,claude_code" style={inputStyle} />
          </div>
        </Section>
      ) : null}

      {artifactType === "command" ? (
        <Section title={t.publish.form.commandConfig} description={t.publish.form.commandConfigDescription}>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="commandType">{t.publish.form.commandType}</label>
            <select id="commandType" name="commandType" defaultValue="slash" style={inputStyle}>
              <option value="slash">{translateCommandType("slash", locale)}</option>
              <option value="template">{translateCommandType("template", locale)}</option>
              <option value="workflow">{translateCommandType("workflow", locale)}</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="commandRuntime">{t.publish.form.runtime}</label>
            <select id="commandRuntime" name="commandRuntime" defaultValue="none" style={inputStyle}>
              <option value="none">{translateRuntime("none", locale)}</option>
              <option value="shell">{translateRuntime("shell", locale)}</option>
              <option value="node">{translateRuntime("node", locale)}</option>
              <option value="python">{translateRuntime("python", locale)}</option>
              <option value="http">{translateRuntime("http", locale)}</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="commandExecutionMode">{t.publish.form.executionMode}</label>
            <select id="commandExecutionMode" name="commandExecutionMode" defaultValue="readonly" style={inputStyle}>
              <option value="readonly">{translateExecutionMode("readonly", locale)}</option>
              <option value="executable">{translateExecutionMode("executable", locale)}</option>
              <option value="local_exec">{translateExecutionMode("local_exec", locale)}</option>
              <option value="approval_required">{translateExecutionMode("approval_required", locale)}</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="commandArgumentsSchema">{t.publish.form.argumentsSchema}</label>
            <textarea
              id="commandArgumentsSchema"
              name="commandArgumentsSchema"
              placeholder={'{"milestone":{"type":"string","required":true}}'}
              style={textareaStyle}
            />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="commandOutputTemplate">{t.publish.form.outputTemplate}</label>
            <textarea id="commandOutputTemplate" name="commandOutputTemplate" placeholder="## Summary" style={textareaStyle} />
          </div>
        </Section>
      ) : null}

      {artifactType === "mcp_server" ? (
        <Section title={t.publish.form.mcpConfig} description={t.publish.form.mcpConfigDescription}>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpTransport">{t.publish.form.transport}</label>
            <select id="mcpTransport" name="mcpTransport" defaultValue="stdio" style={inputStyle}>
              <option value="stdio">{translateTransport("stdio", locale)}</option>
              <option value="http">{translateTransport("http", locale)}</option>
              <option value="sse">{translateTransport("sse", locale)}</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpInstallMethod">{t.publish.form.installMethod}</label>
            <select id="mcpInstallMethod" name="mcpInstallMethod" defaultValue="npm" style={inputStyle}>
              <option value="npm">{translateInstallMethod("npm", locale)}</option>
              <option value="docker">{translateInstallMethod("docker", locale)}</option>
              <option value="python">{translateInstallMethod("python", locale)}</option>
              <option value="binary">{translateInstallMethod("binary", locale)}</option>
              <option value="custom">{translateInstallMethod("custom", locale)}</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpArgs">{t.publish.form.startupArgs}</label>
            <input id="mcpArgs" name="mcpArgs" placeholder="--port,8080" style={inputStyle} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpEnvSchema">{t.publish.form.envSchema}</label>
            <textarea
              id="mcpEnvSchema"
              name="mcpEnvSchema"
              placeholder={"GITHUB_TOKEN=required\nAPI_BASE_URL=optional"}
              style={textareaStyle}
            />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpTools">{t.publish.form.tools}</label>
            <input id="mcpTools" name="mcpTools" placeholder="list_pull_requests,get_pull_request" style={inputStyle} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpResources">{t.publish.form.resources}</label>
            <input id="mcpResources" name="mcpResources" placeholder="repo.readme,repo.labels" style={inputStyle} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpPrompts">{t.publish.form.prompts}</label>
            <input id="mcpPrompts" name="mcpPrompts" placeholder="pr_review,incident_summary" style={inputStyle} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpAuthType">{t.publish.form.authType}</label>
            <select id="mcpAuthType" name="mcpAuthType" defaultValue="none" style={inputStyle}>
              <option value="none">{translateAuthType("none", locale)}</option>
              <option value="api_key">{translateAuthType("api_key", locale)}</option>
              <option value="oauth">{translateAuthType("oauth", locale)}</option>
              <option value="custom">{translateAuthType("custom", locale)}</option>
            </select>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpAuthInstructions">{t.publish.form.authInstructions}</label>
            <textarea id="mcpAuthInstructions" name="mcpAuthInstructions" placeholder="Set GITHUB_TOKEN before use" style={textareaStyle} />
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <label htmlFor="mcpHealthcheck">{t.publish.form.healthcheck}</label>
            <input id="mcpHealthcheck" name="mcpHealthcheck" placeholder="http://localhost:3000/health" style={inputStyle} />
          </div>
        </Section>
      ) : null}

      <Section title={t.publish.form.package}>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="packageFiles">{t.publish.form.packageDirectory}</label>
          <input
            id="packageFiles"
            name="packageFiles"
            type="file"
            multiple
            onChange={handlePackageChange}
            {...({ webkitdirectory: "true", directory: "true" } as Record<string, string>)}
          />
          <input type="hidden" name="packagePaths" value={JSON.stringify(packagePaths)} />
          <div style={{ color: "#4b5563", fontSize: 13 }}>{packageSummary}</div>
          {packagePaths.length > 0 ? (
            <div
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 10,
                maxHeight: 180,
                overflowY: "auto",
                padding: "10px 12px"
              }}
            >
              <div style={{ color: "#111827", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{t.publish.form.uploadList}</div>
              <div style={{ color: "#374151", display: "grid", fontFamily: "monospace", fontSize: 12, gap: 4 }}>
                {packagePaths.map((path) => (
                  <div key={path}>{path}</div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </Section>
      <StatusMessage state={state} />
      <SubmitButton />
    </form>
  );
}
