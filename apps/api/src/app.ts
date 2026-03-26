import Fastify from "fastify";

import { initializeArtifactRepository, repositoryMode } from "./data/repository.js";
import { registerAdminRoutes } from "./modules/admin/index.js";
import { registerAuthRoutes } from "./modules/auth/index.js";
import { registerAuthzRoutes } from "./modules/authz/index.js";
import { registerCatalogRoutes } from "./modules/catalog/index.js";
import { registerGovernanceRoutes } from "./modules/governance/index.js";
import { registerInstallerRoutes } from "./modules/installer/index.js";
import { registerPublisherRoutes } from "./modules/publisher/index.js";

export async function buildApp() {
  const app = Fastify({
    logger: true
  });

  app.get("/health", async () => ({
    ok: true,
    service: "agentx-api",
    repositoryMode
  }));

  await initializeArtifactRepository();
  await registerAuthRoutes(app);
  await registerCatalogRoutes(app);
  await registerPublisherRoutes(app);
  await registerInstallerRoutes(app);
  await registerGovernanceRoutes(app);
  await registerAuthzRoutes(app);
  await registerAdminRoutes(app);

  return app;
}
