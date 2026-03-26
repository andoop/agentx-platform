import Link from "next/link";

import { Badge, PageShell, SectionCard } from "@agentx/ui";

import { listArtifacts, requireCurrentActorFor } from "../../lib/api";
import { getMessages, translateArtifactKind, translateStatus } from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";

export default async function CatalogPage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  await requireCurrentActorFor("/catalog");
  const artifacts = await listArtifacts();

  return (
    <PageShell title={t.catalog.title} subtitle={t.catalog.subtitle}>
      <SectionCard title={t.catalog.count(artifacts.length)}>
        <div style={{ display: "grid", gap: 16 }}>
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              style={{
                background: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 16
              }}
            >
              <div style={{ alignItems: "center", display: "flex", gap: 12, marginBottom: 8 }}>
                <Link href={`/artifacts/${artifact.slug}`} style={{ fontSize: 18, fontWeight: 600 }}>
                  {artifact.name}
                </Link>
                <Badge>{translateArtifactKind(artifact.type, locale)}</Badge>
                <Badge>{translateStatus(artifact.status, locale)}</Badge>
              </div>
              <p style={{ margin: "0 0 8px" }}>{artifact.summary}</p>
              <small>
                {t.catalog.version} {artifact.currentVersion}
              </small>
            </div>
          ))}
        </div>
      </SectionCard>
    </PageShell>
  );
}
