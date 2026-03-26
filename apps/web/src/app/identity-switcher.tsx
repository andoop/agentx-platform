"use client";

import Link from "next/link";

import { getMessages, translateRoleName } from "../lib/i18n";
import { demoLoginAction, logoutAction } from "./auth-actions";
import { useLocale } from "./locale-provider";

export function IdentitySwitcher({ actor }: { actor: { email: string; team: string; roles: string[] } | null }) {
  const locale = useLocale();
  const t = getMessages(locale);

  if (!actor) {
    return (
      <div style={{ alignItems: "center", display: "flex", gap: 10, marginLeft: "auto" }}>
        <form action={demoLoginAction}>
          <input type="hidden" name="email" value="alice@internal" />
          <button
            type="submit"
            style={{
              background: "#2563eb",
              border: "none",
              borderRadius: 8,
              color: "#fff",
              cursor: "pointer",
              fontSize: 12,
              padding: "6px 10px"
            }}
          >
            {t.identity.demoLoginAlice}
          </button>
        </form>
        <Link href="/login" style={{ color: "#fff", fontSize: 12, textDecoration: "none" }}>
          {t.identity.login}
        </Link>
      </div>
    );
  }

  return (
    <div style={{ alignItems: "center", display: "flex", gap: 12, marginLeft: "auto" }}>
      <div style={{ fontSize: 12, lineHeight: 1.4 }}>
        <div>{actor.email}</div>
        <div style={{ opacity: 0.8 }}>{actor.team}</div>
        <div style={{ opacity: 0.8 }}>{actor.roles.map((role) => translateRoleName(role, locale)).join(", ")}</div>
      </div>
      <form action={logoutAction} style={{ display: "flex", gap: 8 }}>
        <button
          type="submit"
          style={{
            background: "#2563eb",
            border: "none",
            borderRadius: 8,
            color: "#fff",
            cursor: "pointer",
            fontSize: 12,
            padding: "6px 10px"
          }}
        >
          {t.identity.logout}
        </button>
      </form>
    </div>
  );
}
