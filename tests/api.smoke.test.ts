import assert from "node:assert/strict";
import test from "node:test";

import { startApiServer } from "./helpers/process.js";

test("API smoke: auth, catalog, publish, review", async (t) => {
  const server = await startApiServer();
  t.after(server.stop);

  const loginResponse = await fetch(`${server.baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      email: "alice@internal",
      password: "agentx123"
    })
  });
  assert.equal(loginResponse.status, 200);

  const session = (await loginResponse.json()) as { token: string; actor: { email: string } };
  assert.equal(session.actor.email, "alice@internal");
  assert.ok(session.token.length > 10);

  const meResponse = await fetch(`${server.baseUrl}/auth/me`, {
    headers: {
      authorization: `Bearer ${session.token}`
    }
  });
  assert.equal(meResponse.status, 200);

  const catalogResponse = await fetch(`${server.baseUrl}/catalog?query=review`, {
    headers: {
      authorization: `Bearer ${session.token}`
    }
  });
  assert.equal(catalogResponse.status, 200);

  const catalog = (await catalogResponse.json()) as Array<{ slug: string }>;
  assert.ok(catalog.some((artifact) => artifact.slug === "review-skill"));

  const slug = `api-smoke-${Date.now()}`;
  const publishResponse = await fetch(`${server.baseUrl}/publisher/artifacts`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${session.token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      apiVersion: "agentx/v1",
      kind: "command",
      type: "command",
      version: "0.1.0",
      metadata: {
        name: "api smoke command",
        slug,
        summary: "Smoke test command created through API",
        description: "Verifies publish and governance smoke coverage.",
        ownerTeam: "platform",
        tags: ["smoke"],
        labels: {},
        visibility: "workspace",
        status: "draft"
      },
      compatibility: {
        agents: ["cursor"],
        os: ["darwin", "linux"],
        arch: ["arm64", "x64"]
      },
      dependencies: [],
      security: {
        riskLevel: "low",
        requiresReview: true,
        requiresApprovalToRun: false,
        allowedHosts: [],
        requiredSecrets: []
      },
      distribution: {
        checksums: {}
      },
      spec: {
        commandType: "slash",
        entrypoint: "command.md",
        runtime: "none",
        argumentsSchema: {},
        executionMode: "readonly"
      }
    })
  });
  assert.equal(publishResponse.status, 201);

  const publishResult = (await publishResponse.json()) as { id: string; reviewId: string };
  assert.ok(publishResult.id);
  assert.ok(publishResult.reviewId);

  const reviewQueueResponse = await fetch(`${server.baseUrl}/governance/reviews`, {
    headers: {
      authorization: `Bearer ${session.token}`
    }
  });
  assert.equal(reviewQueueResponse.status, 200);

  const reviews = (await reviewQueueResponse.json()) as Array<{ id: string; status: string }>;
  assert.ok(reviews.some((review) => review.id === publishResult.reviewId && review.status === "pending"));
});
