import { PageShell, SectionCard } from "@agentx/ui";
import { redirect } from "next/navigation";

import { getCurrentActor } from "../../lib/api";
import { getMessages } from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";
import { LoginForms } from "./login-forms";

function normalizeRedirectTo(value?: string): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}

export default async function LoginPage({
  searchParams
}: {
  searchParams?: Promise<{ redirectTo?: string }>;
}) {
  const locale = await getLocale();
  const t = getMessages(locale);
  const params = searchParams ? await searchParams : undefined;
  const redirectTo = normalizeRedirectTo(params?.redirectTo);
  const current = await getCurrentActor();

  if (current) {
    redirect(redirectTo);
  }

  return (
    <PageShell title={t.login.title} subtitle={t.login.subtitle}>
      <SectionCard title={t.login.sectionTitle}>
        <LoginForms redirectTo={redirectTo} />
      </SectionCard>
    </PageShell>
  );
}
