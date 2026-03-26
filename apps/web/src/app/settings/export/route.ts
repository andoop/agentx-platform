import { exportPersistenceState, getCurrentActor } from "../../../lib/api";
import { getLocale } from "../../../lib/i18n-server";

export async function GET() {
  const locale = await getLocale();
  const current = await getCurrentActor();
  if (!current) {
    return new Response(JSON.stringify({ message: locale === "zh" ? "需要先登录" : "Authentication required" }), {
      status: 401,
      headers: {
        "content-type": "application/json; charset=utf-8"
      }
    });
  }

  if (!current.permissions.canAdmin) {
    return new Response(JSON.stringify({ message: locale === "zh" ? "无权访问" : "Forbidden" }), {
      status: 403,
      headers: {
        "content-type": "application/json; charset=utf-8"
      }
    });
  }

  const state = await exportPersistenceState();

  return new Response(JSON.stringify(state, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "content-disposition": 'attachment; filename="agentx-export.json"'
    }
  });
}
