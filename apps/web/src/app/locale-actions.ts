"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { localeCookieName, normalizeLocale } from "../lib/i18n";

function normalizeRedirectTo(value: string): string {
  if (!value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}

export async function setLocaleAction(formData: FormData) {
  const locale = normalizeLocale(String(formData.get("locale") ?? ""));
  const redirectTo = normalizeRedirectTo(String(formData.get("redirectTo") ?? "/"));
  const cookieStore = await cookies();

  cookieStore.set(localeCookieName, locale, {
    path: "/",
    sameSite: "lax"
  });

  redirect(redirectTo);
}
