import type { FastifyInstance } from "fastify";

import { requireActor } from "../../auth/actor.js";
import { ArtifactPackageStore } from "../../data/package-store.js";
import { artifactRepository } from "../../data/repository.js";

export async function registerCatalogRoutes(app: FastifyInstance): Promise<void> {
  const packageStore = new ArtifactPackageStore();

  app.get("/catalog", async (request, reply) => {
    const actor = await requireActor(request, reply);
    if (!actor) {
      return;
    }

    const { query = "", type } = request.query as { query?: string; type?: string };
    return await artifactRepository.listArtifacts({ query, type });
  });

  app.get("/catalog/:slug", async (request, reply) => {
    const actor = await requireActor(request, reply);
    if (!actor) {
      return;
    }

    const { slug } = request.params as { slug: string };
    const artifact = await artifactRepository.getArtifactBySlug(slug);

    if (!artifact) {
      return reply.code(404).send({ message: `Artifact ${slug} not found` });
    }

    return artifact.manifest;
  });

  app.get("/catalog/:slug/versions/:version/package", async (request, reply) => {
    const actor = await requireActor(request, reply);
    if (!actor) {
      return;
    }

    const { slug, version } = request.params as { slug: string; version: string };
    const artifact = await artifactRepository.getArtifactBySlug(slug);

    if (!artifact || artifact.currentVersion !== version || !artifact.manifest.distribution.packageUri) {
      return reply.code(404).send({ message: `Package ${slug}@${version} not found` });
    }

    const bundle = await packageStore.readBundle(slug, version);
    if (!bundle) {
      return reply.code(404).send({ message: `Package ${slug}@${version} not found` });
    }

    return bundle;
  });
}
