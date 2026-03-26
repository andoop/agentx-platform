"use client";

import { usePathname, useSearchParams } from "next/navigation";

import { getMessages, type Locale } from "../lib/i18n";
import { setLocaleAction } from "./locale-actions";
import { useLocale } from "./locale-provider";

function LocaleButton({
  label,
  nextLocale,
  currentLocale,
  redirectTo
}: {
  label: string;
  nextLocale: Locale;
  currentLocale: Locale;
  redirectTo: string;
}) {
  const active = currentLocale === nextLocale;

  return (
    <form action={setLocaleAction}>
      <input type="hidden" name="locale" value={nextLocale} />
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <button
        type="submit"
        disabled={active}
        style={{
          background: active ? "#2563eb" : "transparent",
          border: "1px solid rgba(255,255,255,0.4)",
          borderRadius: 999,
          color: "#fff",
          cursor: active ? "default" : "pointer",
          fontSize: 12,
          opacity: active ? 1 : 0.85,
          padding: "6px 10px"
        }}
      >
        {label}
      </button>
    </form>
  );
}

export function LocaleSwitcher() {
  const locale = useLocale();
  const t = getMessages(locale);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const redirectTo = query ? `${pathname}?${query}` : pathname;

  return (
    <div style={{ alignItems: "center", display: "flex", gap: 8, marginLeft: 16 }}>
      <span style={{ fontSize: 12, opacity: 0.8 }}>{t.language.label}</span>
      <LocaleButton label={t.language.zh} nextLocale="zh" currentLocale={locale} redirectTo={redirectTo} />
      <LocaleButton label={t.language.en} nextLocale="en" currentLocale={locale} redirectTo={redirectTo} />
    </div>
  );
}
