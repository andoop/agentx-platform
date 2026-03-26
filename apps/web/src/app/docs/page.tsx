import { PageShell, SectionCard } from "@agentx/ui";

import { getMessages } from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";
import { LocaleSwitcher } from "../locale-switcher";

const listStyle = {
  display: "grid",
  gap: 8,
  margin: 0,
  paddingLeft: 18
} as const;

const cardGridStyle = {
  display: "grid",
  gap: 16,
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))"
} as const;

const cardStyle = {
  background: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  display: "grid",
  gap: 10,
  padding: 16
} as const;

export default async function DocsPage() {
  const locale = await getLocale();
  const t = getMessages(locale);

  return (
    <PageShell title={t.docsPage.title} subtitle={t.docsPage.subtitle}>
      <div style={{ display: "grid", gap: 16 }}>
        <SectionCard title={t.docsPage.languageTitle}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>{t.docsPage.languageBody}</div>
            <LocaleSwitcher />
          </div>
        </SectionCard>

        <SectionCard title={t.docsPage.audienceTitle}>
          <div style={cardGridStyle}>
            {t.docsPage.audienceCards.map((card) => (
              <div key={card.title} style={cardStyle}>
                <strong>{card.title}</strong>
                <div style={{ color: "#4b5563", lineHeight: 1.6 }}>{card.description}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title={t.docsPage.docsHubTitle}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>{t.docsPage.docsHubBody}</div>

            <div>
              <strong>{t.docsPage.coreDocs}</strong>
              <ul style={listStyle}>
                <li>
                  <code>README.md</code>
                </li>
                <li>
                  <code>README.zh-CN.md</code>
                </li>
                <li>
                  <code>CONTRIBUTING.md</code>
                </li>
                <li>
                  <code>CONTRIBUTING.zh-CN.md</code>
                </li>
                <li>
                  <code>SECURITY.md</code>
                </li>
                <li>
                  <code>SECURITY.zh-CN.md</code>
                </li>
              </ul>
            </div>

            <div>
              <strong>{t.docsPage.languageHubs}</strong>
              <ul style={listStyle}>
                <li>
                  <code>docs/README.md</code>
                </li>
                <li>
                  <code>docs/README.zh-CN.md</code>
                </li>
                <li>
                  <code>docs/en/README.md</code>
                </li>
                <li>
                  <code>docs/zh-CN/README.md</code>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title={t.docsPage.architectureTitle}>
          <div style={{ display: "grid", gap: 12 }}>
            <div>{t.docsPage.architectureBody}</div>
            <div>
              <strong>{t.docsPage.architectureDocs}</strong>
              <ul style={listStyle}>
                <li>
                  <code>docs/zh-CN/architecture/overview.md</code>
                </li>
                <li>
                  <code>docs/en/architecture/overview.md</code>
                </li>
                <li>
                  <code>docs/zh-CN/architecture/mvp.md</code>
                </li>
                <li>
                  <code>docs/en/architecture/mvp.md</code>
                </li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title={t.docsPage.nextStepsTitle}>
          <div style={{ display: "grid", gap: 12 }}>
            <ol style={listStyle}>
              {t.docsPage.nextSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </SectionCard>

        <SectionCard title={t.docsPage.repoNoteTitle}>
          <div>{t.docsPage.repoNoteBody}</div>
        </SectionCard>
      </div>
    </PageShell>
  );
}
