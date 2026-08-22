# Management API overview

> Source: https://trigger.dev/docs/management/overview

[​](https://trigger.dev/docs/management/overview#installation)

Installation
------------------------------------------------------------------------------

The management API is available through the same `@trigger.dev/sdk` package used in defining and triggering tasks. If you have already installed the package in your project, you can skip this step.

npm

pnpm

yarn

    npm i @trigger.dev/sdk@latest
    

[​](https://trigger.dev/docs/management/overview#usage)

Usage
----------------------------------------------------------------

All `v3` functionality is provided through the `@trigger.dev/sdk` module. You can import the entire module or individual resources as needed.

    import { configure, runs } from "@trigger.dev/sdk";
    
    configure({
      // this is the default and if the `TRIGGER_SECRET_KEY` environment variable is set, can omit calling configure
      secretKey: process.env["TRIGGER_SECRET_KEY"],
    });
    
    async function main() {
      const completedRuns = await runs.list({
        limit: 10,
        status: ["COMPLETED"],
      });
    }
    
    main().catch(console.error);
    

### 

[​](https://trigger.dev/docs/management/overview#multiple-clients-in-one-process)

Multiple clients in one process

If a single process needs to talk to more than one Trigger.dev project, environment, or preview branch, use `new TriggerClient({...})` for each target instead of `configure()`. Each instance owns its own auth and config, with no shared global state. See [Multiple SDK clients](https://trigger.dev/docs/management/multiple-clients)
 for the full pattern.

    import { TriggerClient } from "@trigger.dev/sdk";
    
    const prod = new TriggerClient({ accessToken: process.env.TRIGGER_PROD_KEY });
    const preview = new TriggerClient({
      accessToken: process.env.TRIGGER_PREVIEW_KEY,
      previewBranch: "signup-flow",
    });
    
    const payload = { to: "user@example.com" };
    await prod.tasks.trigger("send-email", payload);
    await preview.runs.list({ status: ["COMPLETED"] });
    

Was this page helpful?

YesNo

[AuthenticationAuthenticating with the Trigger.dev management API\
\
Next](https://trigger.dev/docs/management/authentication)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
