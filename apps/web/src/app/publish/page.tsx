import { PageShell, SectionCard } from "@agentx/ui";

import { requireCurrentActorFor } from "../../lib/api";
import { getMessages } from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";
import { PublishForm } from "./publish-form";

function getArtifactTemplate(locale: "zh" | "en") {
  return locale === "zh"
    ? `apiVersion: agentx/v1
kind: skill
type: skill
version: 0.1.0
metadata:
  name: review-skill
  slug: review-skill
  summary: 团队统一代码评审 skill
  description: 统一输出评审建议
  ownerTeam: platform
spec:
  format: SKILL.md
  entrypoint: SKILL.md
  triggers: [manual]
  requiredContext: []
  outputTargets: [cursor]
compatibility:
  agents: [cursor]
  os: [darwin, linux]
  arch: [arm64, x64]
dependencies: []
security:
  riskLevel: low
  requiresReview: true
  requiresApprovalToRun: false
distribution:
  packageUri: ./artifact-packages/review-skill
  checksums: {}`
    : `apiVersion: agentx/v1
kind: skill
type: skill
version: 0.1.0
metadata:
  name: review-skill
  slug: review-skill
  summary: Shared code review skill
  description: Standardize review suggestions across the team
  ownerTeam: platform
spec:
  format: SKILL.md
  entrypoint: SKILL.md
  triggers: [manual]
  requiredContext: []
  outputTargets: [cursor]
compatibility:
  agents: [cursor]
  os: [darwin, linux]
  arch: [arm64, x64]
dependencies: []
security:
  riskLevel: low
  requiresReview: true
  requiresApprovalToRun: false
distribution:
  packageUri: ./artifact-packages/review-skill
  checksums: {}`;
}

export default async function PublishPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const current = await requireCurrentActorFor("/publish");
  const artifactTemplate = getArtifactTemplate(locale);

  if (!current.permissions.canPublish) {
    return (
      <PageShell title={t.publish.title} subtitle={t.publish.subtitle}>
        <SectionCard title={t.publish.noAccess}>{t.publish.noPermission}</SectionCard>
      </PageShell>
    );
  }

  return (
    <PageShell title={t.publish.title} subtitle={t.publish.subtitle}>
      <SectionCard title={t.publish.flow}>
        <ol style={{ display: "grid", gap: 10, margin: 0, paddingLeft: 20 }}>
          {t.publish.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </SectionCard>

      <SectionCard title={t.publish.submitOnline}>
        <PublishForm />
      </SectionCard>

      <SectionCard title={t.publish.packageGuide}>
        <div style={{ display: "grid", gap: 8 }}>
          {t.publish.packageHints.map((hint) => (
            <div key={hint}>{hint}</div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title={t.publish.template}>
        <pre
          style={{
            background: "#111827",
            borderRadius: 12,
            color: "#f9fafb",
            overflowX: "auto",
            padding: 16
          }}
        >
          {artifactTemplate}
        </pre>
      </SectionCard>
    </PageShell>
  );
}
