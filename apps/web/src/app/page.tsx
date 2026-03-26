import Link from "next/link";

import { PageShell, SectionCard } from "@agentx/ui";
import { getCurrentActor } from "../lib/api";
import { getMessages } from "../lib/i18n";
import { getLocale } from "../lib/i18n-server";
import { LocaleSwitcher } from "./locale-switcher";

const gridStyle = {
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
} as const;

const cardStyle = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  display: "grid",
  gap: 10,
  padding: 18
} as const;

const ctaStyle = {
  borderRadius: 10,
  display: "inline-block",
  fontWeight: 600,
  padding: "10px 14px",
  textDecoration: "none"
} as const;

export default async function HomePage() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const current = await getCurrentActor();

  return (
    <PageShell title={t.home.title} subtitle={t.home.subtitle}>
      <div style={{ display: "grid", gap: 16 }}>
        <section
          style={{
            background: "linear-gradient(135deg, #111827 0%, #1d4ed8 100%)",
            borderRadius: 16,
            color: "#fff",
            display: "grid",
            gap: 16,
            padding: 24
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.12)",
              borderRadius: 999,
              display: "inline-flex",
              fontSize: 12,
              fontWeight: 700,
              padding: "6px 10px",
              width: "fit-content"
            }}
          >
            {t.home.heroBadge}
          </div>
          <div style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 760 }}>{t.home.heroSummary}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="/docs" style={{ ...ctaStyle, background: "#fff", color: "#111827" }}>
              {t.home.primaryCta}
            </Link>
            <Link href="/catalog" style={{ ...ctaStyle, border: "1px solid rgba(255,255,255,0.35)", color: "#fff" }}>
              {t.home.secondaryCta}
            </Link>
          </div>
        </section>

        <SectionCard title={t.home.overviewTitle}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>{t.home.overviewBody}</div>
            <div>
              {t.home.currentLanguage}: {locale === "zh" ? t.language.zh : t.language.en}
            </div>
          </div>
        </SectionCard>

        <SectionCard title={t.home.entryTitle}>
          <div style={{ display: "grid", gap: 12 }}>
            {current ? (
              <>
                <div>
                  {t.home.currentIdentity}: {current.actor.email}
                </div>
                <Link href="/catalog">{t.home.browseCatalog}</Link>
                <Link href="/publish">{t.home.publishArtifact}</Link>
                <Link href="/review">{t.home.reviewQueue}</Link>
                <Link href="/settings">{t.home.openSettings}</Link>
              </>
            ) : (
              <>
                <div>{t.home.notLoggedIn}</div>
                <Link href="/login">{t.home.goLogin}</Link>
              </>
            )}
          </div>
        </SectionCard>

        <SectionCard title={t.home.artifactTypesTitle}>
          <div style={gridStyle}>
            {t.home.artifactTypes.map((artifact) => (
              <div key={artifact.name} style={cardStyle}>
                <strong>{artifact.name}</strong>
                <div style={{ color: "#4b5563", lineHeight: 1.6 }}>{artifact.description}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.home.featureTitle}>
          <div style={gridStyle}>
            {t.home.featureCards.map((feature) => (
              <div key={feature.title} style={cardStyle}>
                <strong>{feature.title}</strong>
                <div style={{ color: "#4b5563", lineHeight: 1.6 }}>{feature.description}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.home.languageDocsTitle}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>{t.home.languageDocsSubtitle}</div>
            <div>{t.home.docsLanguageSupport}</div>
            <LocaleSwitcher />
            <div>{t.home.switchLanguageHint}</div>
            <div style={{ display: "grid", gap: 6 }}>
              <Link href="/docs">{t.home.docsIndex}</Link>
              <div>
                {t.home.docsChinese}: <code>docs/zh-CN/README.md</code>
              </div>
              <div>
                {t.home.docsEnglish}: <code>docs/en/README.md</code>
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title={t.home.quickStartTitle}>
          <ol style={{ display: "grid", gap: 8, margin: 0, paddingLeft: 18 }}>
            {t.home.quickStartSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </SectionCard>
      </div>
    </PageShell>
  );
}
