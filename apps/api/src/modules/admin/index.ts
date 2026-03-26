import type { FastifyInstance } from "fastify";

import { requireRole } from "../../auth/actor.js";
import { backupBaseName, FilePersistenceAdmin } from "../../data/file-admin.js";
import { getDataFilePath, repositoryMode } from "../../data/repository.js";

function assertFileMode() {
  if (repositoryMode !== "file") {
    throw new Error("Persistence admin endpoints are only available in file mode");
  }
}

export async function registerAdminRoutes(app: FastifyInstance): Promise<void> {
  const fileAdmin = new FilePersistenceAdmin(getDataFilePath());

  app.get("/admin/persistence", async (_request, reply) => {
    try {
      const actor = await requireRole(_request, reply, "admin");
      if (!actor) {
        return;
      }
      assertFileMode();
      return await fileAdmin.getInfo();
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Persistence info unavailable" });
    }
  });

  app.get("/admin/persistence/export", async (_request, reply) => {
    try {
      const actor = await requireRole(_request, reply, "admin");
      if (!actor) {
        return;
      }
      assertFileMode();
      return await fileAdmin.exportState();
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Export unavailable" });
    }
  });

  app.get("/admin/persistence/backups", async (_request, reply) => {
    try {
      const actor = await requireRole(_request, reply, "admin");
      if (!actor) {
        return;
      }
      assertFileMode();
      return await fileAdmin.listBackups();
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Backup list unavailable" });
    }
  });

  app.post("/admin/persistence/import", async (request, reply) => {
    try {
      const actor = await requireRole(request, reply, "admin");
      if (!actor) {
        return;
      }
      assertFileMode();
      const state = await fileAdmin.importState(request.body);
      return {
        ok: true,
        counts: {
          artifacts: state.artifacts.length,
          reviews: state.reviews.length,
          installs: state.installs.length,
          auditLogs: state.auditLogs.length,
          members: state.members.length
        }
      };
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Import failed" });
    }
  });

  app.post("/admin/persistence/backup", async (request, reply) => {
    try {
      const actor = await requireRole(request, reply, "admin");
      if (!actor) {
        return;
      }
      assertFileMode();
      const { label } = (request.body as { label?: string } | undefined) ?? {};
      const result = await fileAdmin.createBackup(label);
      return {
        ok: true,
        backupPath: result.backupPath,
        fileName: backupBaseName(result.backupPath)
      };
    } catch (error) {
      return reply.code(400).send({ message: error instanceof Error ? error.message : "Backup failed" });
    }
  });
}
