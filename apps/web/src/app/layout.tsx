import type { PropsWithChildren } from "react";
import Link from "next/link";

import { getCurrentActor } from "../lib/api";
import { getMessages } from "../lib/i18n";
import { getLocale } from "../lib/i18n-server";
import { IdentitySwitcher } from "./identity-switcher";
import { LocaleProvider } from "./locale-provider";
import { LocaleSwitcher } from "./locale-switcher";

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();
  const t = getMessages(locale);
  const current = await getCurrentActor();

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"}>
      <body style={{ background: "#f8fafc", margin: 0 }}>
        <LocaleProvider locale={locale}>
          <nav
            style={{
              alignItems: "center",
              background: "#111827",
              color: "#fff",
              display: "flex",
              gap: 20,
              padding: "16px 32px"
            }}
          >
            <Link href="/" style={{ color: "#fff", fontWeight: 700, textDecoration: "none" }}>
              AgentX
            </Link>
            <Link href="/docs" style={{ color: "#fff", textDecoration: "none" }}>
              {t.nav.docs}
            </Link>
            <Link href="/catalog" style={{ color: "#fff", textDecoration: "none" }}>
              {t.nav.catalog}
            </Link>
            <Link href="/publish" style={{ color: "#fff", textDecoration: "none" }}>
              {t.nav.publish}
            </Link>
            <Link href="/review" style={{ color: "#fff", textDecoration: "none" }}>
              {t.nav.review}
            </Link>
            <Link href="/settings" style={{ color: "#fff", textDecoration: "none" }}>
              {t.nav.settings}
            </Link>
            <LocaleSwitcher />
            <IdentitySwitcher
              actor={
                current
                  ? {
                      email: current.actor.email,
                      team: current.actor.team,
                      roles: current.actor.roles
                    }
                  : null
              }
            />
          </nav>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
