import { Badge, PageShell, SectionCard } from "@agentx/ui";

import { getArtifact, requireCurrentActorFor } from "../../../lib/api";
import {
  getMessages,
  localizeDisplayData,
  translateArtifactKind,
  translateBoolean,
  translateRiskLevel,
  translateStatus
} from "../../../lib/i18n";
import { getLocale } from "../../../lib/i18n-server";

export default async function ArtifactDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const locale = await getLocale();
  const t = getMessages(locale);
  const { slug } = await params;
  await requireCurrentActorFor(`/artifacts/${slug}`);
  const artifact = await getArtifact(slug);
  const localizedSpec = localizeDisplayData(artifact.spec, locale);

  return (
    <PageShell title={artifact.metadata.name} subtitle={artifact.metadata.summary}>
      <SectionCard title={t.artifact.overview} action={<Badge>{translateArtifactKind(artifact.kind, locale)}</Badge>}>
        <p>{artifact.metadata.description}</p>
        <p>
          {t.artifact.currentVersion}: {artifact.version}
        </p>
        <p>
          {t.artifact.ownerTeam}: {artifact.metadata.ownerTeam}
        </p>
        <p>
          {t.artifact.reviewStatus}: {translateStatus(artifact.metadata.status, locale)}
        </p>
      </SectionCard>

      <SectionCard title={t.artifact.compatibility}>
        <p>{t.publish.form.agents}: {artifact.compatibility.agents.join(", ") || t.common.none}</p>
        <p>{t.publish.form.os}: {artifact.compatibility.os.join(", ") || t.common.none}</p>
        <p>{t.publish.form.arch}: {artifact.compatibility.arch.join(", ") || t.common.none}</p>
      </SectionCard>

      <SectionCard title={t.artifact.dependenciesAndSecurity}>
        <p>{t.artifact.dependencies}: {artifact.dependencies.map((item) => item.target).join(", ") || t.common.none}</p>
        <p>{t.artifact.risk}: {translateRiskLevel(artifact.security.riskLevel, locale)}</p>
        <p>{t.artifact.requiresApprovalToRun}: {translateBoolean(artifact.security.requiresApprovalToRun, locale)}</p>
      </SectionCard>

      <SectionCard title={t.artifact.spec}>
        <pre
          style={{
            background: "#111827",
            borderRadius: 12,
            color: "#f9fafb",
            overflowX: "auto",
            padding: 16
          }}
        >
          {JSON.stringify(localizedSpec, null, 2)}
        </pre>
      </SectionCard>
    </PageShell>
  );
}
