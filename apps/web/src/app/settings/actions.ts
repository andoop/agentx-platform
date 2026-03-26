"use server";

import { revalidatePath } from "next/cache";

import type { FormActionState } from "../form-state";
import {
  backupPersistence,
  changeOwnPassword,
  createMember,
  importPersistenceState,
  resetMemberPassword,
  setMemberDisabled,
  updateMember
} from "../../lib/api";
import { getMessages, translateApiErrorMessage } from "../../lib/i18n";
import { getLocale } from "../../lib/i18n-server";

function readValue(formData: FormData, key: string): string {
  return String(formData.get(key) ?? "").trim();
}

function readRoles(formData: FormData, key: string): string[] {
  return String(formData.get(key) ?? "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function backupPersistenceAction(formData: FormData) {
  const label = readValue(formData, "label");
  await backupPersistence(label || undefined);
  revalidatePath("/settings");
}

export async function importPersistenceAction(formData: FormData) {
  const t = getMessages(await getLocale());
  const raw = readValue(formData, "payload");
  if (!raw) {
    throw new Error(t.settings.importPayloadRequired);
  }

  const payload = JSON.parse(raw) as unknown;
  await importPersistenceState(payload);
  revalidatePath("/settings");
}

export async function createMemberAction(formData: FormData) {
  await createMember({
    email: readValue(formData, "email"),
    team: readValue(formData, "team"),
    roles: readRoles(formData, "roles"),
    password: readValue(formData, "password")
  });
  revalidatePath("/settings");
}

export async function createMemberFormAction(
  _previousState: FormActionState,
  formData: FormData
): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  try {
    await createMemberAction(formData);
    return {
      status: "success",
      message: t.settings.memberCreated
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.settings.createMemberFailed
    };
  }
}

export async function updateMemberAction(formData: FormData) {
  await updateMember({
    email: readValue(formData, "email"),
    team: readValue(formData, "team"),
    roles: readRoles(formData, "roles")
  });
  revalidatePath("/settings");
}

export async function updateMemberFormAction(
  _previousState: FormActionState,
  formData: FormData
): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  try {
    await updateMemberAction(formData);
    return {
      status: "success",
      message: t.settings.memberUpdated
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.settings.updateMemberFailed
    };
  }
}

export async function resetMemberPasswordAction(formData: FormData) {
  await resetMemberPassword({
    email: readValue(formData, "email"),
    password: readValue(formData, "password")
  });
  revalidatePath("/settings");
}

export async function resetMemberPasswordFormAction(
  _previousState: FormActionState,
  formData: FormData
): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  try {
    await resetMemberPasswordAction(formData);
    return {
      status: "success",
      message: t.settings.passwordReset
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.settings.passwordResetFailed
    };
  }
}

export async function setMemberDisabledAction(formData: FormData) {
  await setMemberDisabled({
    email: readValue(formData, "email"),
    disabled: readValue(formData, "disabled") === "true"
  });
  revalidatePath("/settings");
}

export async function setMemberDisabledFormAction(
  _previousState: FormActionState,
  formData: FormData
): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  try {
    await setMemberDisabledAction(formData);
    return {
      status: "success",
      message: readValue(formData, "disabled") === "true" ? t.settings.memberDisabled : t.settings.memberEnabled
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.settings.updateMemberStatusFailed
    };
  }
}

export async function changeOwnPasswordAction(formData: FormData) {
  await changeOwnPassword({
    currentPassword: readValue(formData, "currentPassword"),
    newPassword: readValue(formData, "newPassword")
  });
  revalidatePath("/settings");
}

export async function changeOwnPasswordFormAction(
  _previousState: FormActionState,
  formData: FormData
): Promise<FormActionState> {
  const locale = await getLocale();
  const t = getMessages(locale);
  try {
    await changeOwnPasswordAction(formData);
    return {
      status: "success",
      message: t.settings.ownPasswordUpdated
    };
  } catch (error) {
    return {
      status: "error",
      message: error instanceof Error ? translateApiErrorMessage(error.message, locale) : t.settings.changePasswordFailed
    };
  }
}
