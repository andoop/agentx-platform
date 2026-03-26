"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { getMessages } from "../../lib/i18n";
import {
  changeOwnPasswordFormAction,
  createMemberFormAction,
  resetMemberPasswordFormAction,
  setMemberDisabledFormAction,
  updateMemberFormAction
} from "./actions";
import { idleFormState } from "../form-state";
import { useLocale } from "../locale-provider";

const inputStyle = {
  border: "1px solid #d1d5db",
  borderRadius: 10,
  fontSize: 14,
  padding: "10px 12px",
  width: "100%"
} as const;

function StatusMessage({ state }: { state: { status: "idle" | "success" | "error"; message?: string } }) {
  if (state.status === "idle" || !state.message) {
    return null;
  }

  return (
    <div
      style={{
        background: state.status === "error" ? "#fee2e2" : "#dcfce7",
        borderRadius: 10,
        color: state.status === "error" ? "#991b1b" : "#166534",
        padding: "10px 12px"
      }}
    >
      {state.message}
    </div>
  );
}

function SubmitButton({
  idleLabel,
  pendingLabel,
  background
}: {
  idleLabel: string;
  pendingLabel: string;
  background: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        background,
        border: "none",
        borderRadius: 10,
        color: "#fff",
        cursor: pending ? "progress" : "pointer",
        opacity: pending ? 0.7 : 1,
        padding: "10px 14px"
      }}
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
}

export function MemberCreateForm() {
  const locale = useLocale();
  const t = getMessages(locale);
  const [state, action] = useActionState(createMemberFormAction, idleFormState);

  return (
    <form action={action} style={{ display: "grid", gap: 10 }}>
      <input name="email" placeholder={t.settings.emailPlaceholder} style={inputStyle} />
      <input name="team" placeholder={t.settings.teamPlaceholder} style={inputStyle} />
      <input name="roles" placeholder={t.settings.rolesPlaceholder} style={inputStyle} />
      <input name="password" placeholder={t.settings.tempPasswordPlaceholder} style={inputStyle} type="password" />
      <StatusMessage state={state} />
      <SubmitButton idleLabel={t.settings.createMember} pendingLabel={t.settings.creatingMember} background="#111827" />
    </form>
  );
}

export function MemberUpdateForm({
  email,
  team,
  roles
}: {
  email: string;
  team: string;
  roles: string[];
}) {
  const locale = useLocale();
  const t = getMessages(locale);
  const [state, action] = useActionState(updateMemberFormAction, idleFormState);

  return (
    <form action={action} style={{ display: "grid", gap: 8 }}>
      <input type="hidden" name="email" value={email} />
      <input name="team" defaultValue={team} style={inputStyle} />
      <input name="roles" defaultValue={roles.join(",")} style={inputStyle} />
      <StatusMessage state={state} />
      <SubmitButton idleLabel={t.settings.updateMember} pendingLabel={t.settings.updatingMember} background="#2563eb" />
    </form>
  );
}

export function MemberResetPasswordForm({ email }: { email: string }) {
  const locale = useLocale();
  const t = getMessages(locale);
  const [state, action] = useActionState(resetMemberPasswordFormAction, idleFormState);

  return (
    <form action={action} style={{ display: "grid", gap: 8 }}>
      <input type="hidden" name="email" value={email} />
      <input name="password" placeholder={t.settings.newPasswordPlaceholder} style={inputStyle} type="password" />
      <StatusMessage state={state} />
      <SubmitButton idleLabel={t.settings.resetPassword} pendingLabel={t.settings.resettingPassword} background="#7c3aed" />
    </form>
  );
}

export function MemberDisableForm({ email, disabled }: { email: string; disabled: boolean }) {
  const locale = useLocale();
  const t = getMessages(locale);
  const [state, action] = useActionState(setMemberDisabledFormAction, idleFormState);

  return (
    <form action={action} style={{ display: "grid", gap: 8 }}>
      <input type="hidden" name="email" value={email} />
      <input type="hidden" name="disabled" value={String(!disabled)} />
      <StatusMessage state={state} />
      <SubmitButton
        idleLabel={disabled ? t.settings.enableMember : t.settings.disableMember}
        pendingLabel={disabled ? t.settings.enablingMember : t.settings.disablingMember}
        background={disabled ? "#065f46" : "#b91c1c"}
      />
    </form>
  );
}

export function ChangeOwnPasswordForm() {
  const locale = useLocale();
  const t = getMessages(locale);
  const [state, action] = useActionState(changeOwnPasswordFormAction, idleFormState);

  return (
    <form action={action} style={{ display: "grid", gap: 10 }}>
      <input name="currentPassword" placeholder={t.settings.currentPassword} style={inputStyle} type="password" />
      <input name="newPassword" placeholder={t.settings.newPassword} style={inputStyle} type="password" />
      <StatusMessage state={state} />
      <SubmitButton idleLabel={t.settings.changeMyPassword} pendingLabel={t.common.loading} background="#111827" />
    </form>
  );
}
