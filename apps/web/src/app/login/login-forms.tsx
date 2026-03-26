"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { getMessages } from "../../lib/i18n";
import { demoLoginFormAction, loginFormAction } from "../auth-actions";
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

export function LoginForms({ redirectTo }: { redirectTo: string }) {
  const locale = useLocale();
  const t = getMessages(locale);
  const [loginState, loginActionWithState] = useActionState(loginFormAction, idleFormState);
  const [aliceState, aliceLoginAction] = useActionState(demoLoginFormAction, idleFormState);
  const [bobState, bobLoginAction] = useActionState(demoLoginFormAction, idleFormState);

  return (
    <>
      <form action={loginActionWithState} style={{ display: "grid", gap: 14, maxWidth: 420 }}>
        <input type="hidden" name="redirectTo" value={redirectTo} />
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="email">{t.login.email}</label>
          <input id="email" name="email" defaultValue="alice@internal" required style={inputStyle} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <label htmlFor="password">{t.login.password}</label>
          <input id="password" name="password" defaultValue="agentx123" required style={inputStyle} type="password" />
        </div>
        <StatusMessage state={loginState} />
        <SubmitButton idleLabel={t.login.login} pendingLabel={t.login.loggingIn} background="#111827" />
      </form>

      <div style={{ display: "grid", gap: 12 }}>
        <div>`alice@internal` / `agentx123`</div>
        <div>`bob@internal` / `agentx123`</div>
        <div style={{ display: "flex", gap: 10 }}>
          <form action={aliceLoginAction} style={{ display: "grid", gap: 8 }}>
            <input type="hidden" name="email" value="alice@internal" />
            <input type="hidden" name="redirectTo" value={redirectTo} />
            <StatusMessage state={aliceState} />
            <SubmitButton idleLabel={t.login.loginAsAlice} pendingLabel={t.login.loggingIn} background="#2563eb" />
          </form>
          <form action={bobLoginAction} style={{ display: "grid", gap: 8 }}>
            <input type="hidden" name="email" value="bob@internal" />
            <input type="hidden" name="redirectTo" value={redirectTo} />
            <StatusMessage state={bobState} />
            <SubmitButton idleLabel={t.login.loginAsBob} pendingLabel={t.login.loggingIn} background="#374151" />
          </form>
        </div>
      </div>
    </>
  );
}
