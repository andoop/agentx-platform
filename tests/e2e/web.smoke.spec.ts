import { expect, test } from "@playwright/test";

const apiBaseUrl = "http://127.0.0.1:4120";

test("Web smoke: login, publish, approve", async ({ page }) => {
  const slug = `web-smoke-${Date.now()}`;

  await page.goto("/login");
  await page.getByRole("button", { name: "以 Alice 登录" }).click();
  await expect(page).toHaveURL(/\/$/);

  await page.goto("/publish");
  await page.selectOption("#type", "command");
  await page.getByLabel("名称").fill("Web Smoke Command");
  await page.getByLabel("Slug").fill(slug);
  await page.getByLabel("摘要").fill("Smoke command published through the web UI");
  await page.getByLabel("描述").fill("Verifies the end-to-end login, publish, and review flow.");
  await page.getByLabel("入口文件").fill("command.md");
  await page.getByLabel("所属团队").fill("platform");
  await page.getByLabel("参数 Schema").fill('{"ticket":{"type":"string"}}');
  await page.getByRole("button", { name: "提交审核" }).click();

  await expect(page).toHaveURL(/\/review$/);
  await expect(page.getByRole("heading", { name: /待处理 \d+ 条审核请求/ })).toBeVisible();

  const token = (await page.context().cookies()).find((cookie) => cookie.name === "agentx_token")?.value;
  expect(token).toBeTruthy();

  const pendingResponse = await fetch(`${apiBaseUrl}/catalog/${slug}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  expect(pendingResponse.ok).toBeTruthy();

  const pendingArtifact = (await pendingResponse.json()) as { metadata: { id: string; status: string } };
  expect(pendingArtifact.metadata.status).toBe("pending_review");

  await page.getByPlaceholder("审批备注").fill("web smoke approval");
  await page.getByRole("button", { name: "批准" }).click();
  await expect
    .poll(async () => {
      const approvedResponse = await fetch(`${apiBaseUrl}/catalog/${slug}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      const approvedArtifact = (await approvedResponse.json()) as { metadata: { status: string } };
      return approvedArtifact.metadata.status;
    })
    .toBe("approved");
});
