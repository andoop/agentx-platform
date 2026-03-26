"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import type { FormActionState } from "./form-state";
import { loginWithPassword } from "../lib/api";
import { getMessages, translateApiErrorMessage } from "../lib/i18n";
import { getLocale } from "../lib/i18n-server";

const authCookieName = "agentx_token";

function normalizeRedirectTo(value: string): string {
  if (!value.startsWith("/") || value.startsWith("//")) {
    return "/";
  }

  return value;
}

function demoPassword(email: string): string {
  const shared = process.env.AGENTX_DEMO_PASSWORD ?? "agentx123";
  if (email === "alice@internal") {
    return process.env.AGENTX_ALICE_PASSWORD ?? shared;
  }
  if (email === "bob@internal") {
    return process.env.AGENTX_BOB_PASSWORD ?? shared;
  }
  return shared;
}

function refreshApp() {
  revalidatePath("/");
  revalidatePath("/catalog");
  revalidatePath("/publish");
  revalidatePath("/review");
  revalidatePath("/settings");
}

export async function loginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = normalizeRedirectTo(String(formData.get("redirectTo") ?? "/"));
  const session = await loginWithPassword(email, password);
  const cookieStore = await cookies();

  cookieStore.set(authCookieName, session.token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax"
  });
  cookieStore.delete("agentx_actor");

  refreshApp();
  redirect(redirectTo || "/");
}

export async function loginFormAction(_previousState: FormActionState, formData: FormData): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const redirectTo = normalizeRedirectTo(String(formData.get("redirectTo") ?? "/"));

  try {
    const session = await loginWithPassword(email, password);
    const cookieStore = await cookies();

    cookieStore.set(authCookieName, session.token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax"
    });
    cookieStore.delete("agentx_actor");
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.login.loginFailed
    };
  }

  refreshApp();
  redirect(redirectTo || "/");
}

export async function demoLoginAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const redirectTo = normalizeRedirectTo(String(formData.get("redirectTo") ?? "/"));
  const session = await loginWithPassword(email, demoPassword(email));
  const cookieStore = await cookies();

  cookieStore.set(authCookieName, session.token, {
    httpOnly: true,
    path: "/",
    sameSite: "lax"
  });
  cookieStore.delete("agentx_actor");

  refreshApp();
  redirect(redirectTo);
}

export async function demoLoginFormAction(
  _previousState: FormActionState,
  formData: FormData
): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  const email = String(formData.get("email") ?? "").trim();
  const redirectTo = normalizeRedirectTo(String(formData.get("redirectTo") ?? "/"));

  try {
    const session = await loginWithPassword(email, demoPassword(email));
    const cookieStore = await cookies();

    cookieStore.set(authCookieName, session.token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax"
    });
    cookieStore.delete("agentx_actor");
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.login.demoLoginFailed
    };
  }

  refreshApp();
  redirect(redirectTo);
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(authCookieName);
  cookieStore.delete("agentx_actor");
  refreshApp();
  redirect("/login");
}
