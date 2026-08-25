import { task, logger } from "@trigger.dev/sdk";

/**
 * Task: health-check
 *
 * Starter task — every scaffolded project ships with this so the local
 * Trigger.dev dev worker has something to load (avoids
 *   "Error: No trigger files found"
 * on `npm run trigger:dev`) and so `relay_smoke_test` has a reliable target
 * for the first deploy-order gate.
 *
 * Replace it (or add new tasks via the `relay_add_task` tool) once your
 * first real automation is ready.
 */
export const healthCheck = task({
  id: "health-check",
  run: async (payload: Record<string, unknown>) => {
    logger.info("health-check started", { payload });
    return {
      status: "ok",
      ranAt: new Date().toISOString(),
      echo: payload ?? null,
    };
  },
});
