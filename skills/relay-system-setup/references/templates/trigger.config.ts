import { defineConfig } from "@trigger.dev/sdk";

// The Trigger.dev CLI reads TRIGGER_PROJECT_ID from the `project` field below.
// The /system-setup skill fills it; never put the project id in .env/.env.production
// and never pass --project-ref on the CLI.
export default defineConfig({
  project: "",
  runtime: "node",
  logLevel: "log",
  dirs: ["./src/trigger"],
});