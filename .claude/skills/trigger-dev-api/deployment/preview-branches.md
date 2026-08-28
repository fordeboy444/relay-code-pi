# Preview branches

> Source: https://trigger.dev/docs/deployment/preview-branches

[​](https://trigger.dev/docs/deployment/preview-branches#how-to-use-preview-branches)

How to use preview branches
--------------------------------------------------------------------------------------------------------------------

The preview environment is special – you create branches from it. The branches you create live under the preview environment and have all the features you’re used to from other environments (like staging or production). That means you can trigger runs, have schedules, test them, use Realtime, etc. ![Preview environment and branches](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/preview-environment-branches.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=c5f3be2cf5cd9cc99e18cc5a0f9a0998) We recommend you automatically create a preview branch for each git branch when a Pull Request is opened and then archive it automatically when the PR is merged/closed. The process to use preview branches looks like this:

1.  Create a preview branch
2.  Deploy to the preview branch (1+ times)
3.  Trigger runs using your Preview API key (`TRIGGER_SECRET_KEY`) and the branch name (`TRIGGER_PREVIEW_BRANCH`).
4.  Archive the preview branch when the branch is done.

There are two main ways to do this:

1.  Automatically: using GitHub Actions (recommended).
2.  Manually: in the dashboard and/or using the CLI.

### 

[​](https://trigger.dev/docs/deployment/preview-branches#limits-on-active-preview-branches)

Limits on active preview branches

We restrict the number of active preview branches (per project). You can archive a preview branch at any time (automatically or manually) to unlock another slot – or you can upgrade your plan. Once archived you can still view the dashboard for the branch but you can’t trigger or execute runs (or other write operations). This limit exists because each branch has an independent concurrency limit. For the Cloud product these are the limits:

| Plan | Active preview branches |
| --- | --- |
| Free | 0   |
| Hobby | 5   |
| Pro | 20 (then paid for more) |

For full details see our [pricing page](https://trigger.dev/pricing)
.

[​](https://trigger.dev/docs/deployment/preview-branches#triggering-runs-and-using-the-sdk)

Triggering runs and using the SDK
--------------------------------------------------------------------------------------------------------------------------------

Before we talk about how to deploy to preview branches, one important thing to understand is that you must set the `TRIGGER_PREVIEW_BRANCH` environment variable as well as the `TRIGGER_SECRET_KEY` environment variable. When deploying to somewhere that supports `process.env` (like Node.js runtimes) you can just set the environment variables:

    TRIGGER_SECRET_KEY="tr_preview_1234567890"
    TRIGGER_PREVIEW_BRANCH="your-branch-name"
    

If you’re deploying somewhere that doesn’t support `process.env` (like some edge runtimes) you can manually configure the SDK:

    import { configure } from "@trigger.dev/sdk";
    import { myTask } from "./trigger/myTasks";
    
    configure({
      secretKey: "tr_preview_1234567890", // WARNING: Never actually hardcode your secret key like this
      previewBranch: "your-branch-name",
    });
    
    async function triggerTask() {
      await myTask.trigger({ userId: "1234" }); // Trigger a run in your-branch-name
    }
    

### 

[​](https://trigger.dev/docs/deployment/preview-branches#triggering-across-multiple-branches-from-one-process)

Triggering across multiple branches from one process

If a single process needs to trigger runs in several preview branches (or a mix of prod and preview), use `new TriggerClient({...})` for each target instead of mutating global config. Each instance owns its own auth and branch.

    import { TriggerClient } from "@trigger.dev/sdk";
    
    const signupFlow = new TriggerClient({
      accessToken: process.env.TRIGGER_PREVIEW_KEY,
      previewBranch: "signup-flow",
    });
    const checkout = new TriggerClient({
      accessToken: process.env.TRIGGER_PREVIEW_KEY,
      previewBranch: "checkout-redesign",
    });
    
    const payload = { to: "user@example.com" };
    await Promise.all([\
      signupFlow.tasks.trigger("send-email", payload),\
      checkout.tasks.trigger("send-email", payload),\
    ]);
    

See [Multiple SDK clients](https://trigger.dev/docs/management/multiple-clients)
 for the full pattern.

[​](https://trigger.dev/docs/deployment/preview-branches#preview-branches-with-github-actions-recommended)

Preview branches with GitHub Actions (recommended)
----------------------------------------------------------------------------------------------------------------------------------------------------------------

This GitHub Action will:

1.  Automatically create a preview branch for your Pull Request (if the branch doesn’t already exist).
2.  Deploy the preview branch.
3.  Archive the preview branch when the Pull Request is merged/closed. This only works if your workflow runs on **closed** PRs (`types: [opened, synchronize, reopened, closed]`). If you omit `closed`, branches won’t be archived automatically.

.github/workflows/trigger-preview-branches.yml

    name: Deploy to Trigger.dev (preview branches)
    
    on:
      pull_request:
        types: [opened, synchronize, reopened, closed]
    
    jobs:
      deploy-preview:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
    
          - name: Use Node.js 20.x
            uses: actions/setup-node@v4
            with:
              node-version: "20.x"
    
          - name: Install dependencies
            run: npm install
    
          - name: Deploy preview branch
            run: npx trigger.dev@latest deploy --env preview
            env:
              TRIGGER_ACCESS_TOKEN: ${{ secrets.TRIGGER_ACCESS_TOKEN }}
    

For this workflow to work, you need to set the following secrets in your GitHub repository:

*   `TRIGGER_ACCESS_TOKEN`: A Trigger.dev personal access token (they start with `tr_pat_`). [Learn how to create one and set it in GitHub](https://trigger.dev/docs/github-actions#creating-a-personal-access-token)
    .

Notice that the deploy command has `--env preview` at the end. We automatically detect the preview branch from the GitHub actions env var. You can manually specify the branch using `--branch <branch-name>` in the deploy command, but this isn’t required.

[​](https://trigger.dev/docs/deployment/preview-branches#preview-branches-with-the-cli-manual)

Preview branches with the CLI (manual)
----------------------------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/deployment/preview-branches#deploying-a-preview-branch)

Deploying a preview branch

Creating and deploying a preview branch manually is easy:

    npx trigger.dev@latest deploy --env preview
    

This will create and deploy a preview branch, automatically detecting the git branch. If for some reason the auto-detection doesn’t work it will let you know and tell you do this:

    npx trigger.dev@latest deploy --env preview --branch your-branch-name
    

### 

[​](https://trigger.dev/docs/deployment/preview-branches#archiving-a-preview-branch)

Archiving a preview branch

You can manually archive a preview branch with the CLI:

    npx trigger.dev@latest preview archive
    

Again we will try auto-detect the current branch. But you can specify the branch name with `--branch <branch-name>`.

[​](https://trigger.dev/docs/deployment/preview-branches#creating-and-archiving-preview-branches-from-the-dashboard)

Creating and archiving preview branches from the dashboard
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

From the “Preview branches” page you can create a branch: ![Preview branches page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/preview-branches.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=643a7ea8cea29bec0cf4c3dd5e9b7b9f) ![Create preview branch](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/preview-branches-new.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=c07177baf4a0581142ac55f2213181e5) You can also archive a branch: ![Archive preview branch](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/preview-branches-archive.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=0c65583a0291f776674ff89c21c409ca)

[​](https://trigger.dev/docs/deployment/preview-branches#environment-variables)

Environment variables
--------------------------------------------------------------------------------------------------------

You can set environment variables for “Preview” and they will get applied to all branches (existing and new). You can also set environment variables for a specific branch. If they are set for both then the branch-specific variables will take precedence. ![Environment variables](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/preview-environment-variables.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=3d088494a88aa0bc8a52775e17448ed6) These can be set manually in the dashboard, or automatically at deploy time using the [syncEnvVars()](https://trigger.dev/docs/config/extensions/syncEnvVars)
 or [syncVercelEnvVars()](https://trigger.dev/docs/config/extensions/syncEnvVars#syncvercelenvvars)
 build extensions.

### 

[​](https://trigger.dev/docs/deployment/preview-branches#sync-environment-variables)

Sync environment variables

Full instructions are in the [syncEnvVars()](https://trigger.dev/docs/config/extensions/syncEnvVars)
 documentation.

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    // You will need to install the @trigger.dev/build package
    import { syncEnvVars } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      //... other config
      build: {
        // This will automatically detect and sync environment variables
        extensions: [\
          syncEnvVars(async (ctx) => {\
            // You can fetch env variables from a 3rd party service like Infisical, Hashicorp Vault, etc.\
            // The ctx.branch will be set if it's a preview deployment.\
            return await fetchEnvVars(ctx.environment, ctx.branch);\
          }),\
        ],
      },
    });
    

### 

[​](https://trigger.dev/docs/deployment/preview-branches#sync-vercel-environment-variables)

Sync Vercel environment variables

You need to set the `VERCEL_ACCESS_TOKEN`, `VERCEL_PROJECT_ID` and `VERCEL_TEAM_ID` environment variables. You can find these in the Vercel dashboard. Full instructions are in the [syncVercelEnvVars()](https://trigger.dev/docs/config/extensions/syncEnvVars#syncvercelenvvars)
 documentation. The extension will automatically detect a preview branch deploy from Vercel and sync the appropriate environment variables.

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    // You will need to install the @trigger.dev/build package
    import { syncVercelEnvVars } from "@trigger.dev/build/extensions/core";
    
    export default defineConfig({
      //... other config
      build: {
        // This will automatically detect and sync environment variables
        extensions: [syncVercelEnvVars()],
      },
    });
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/github-actions)
[Atomic deploysUse atomic deploys to coordinate changes to your tasks and your application.\
\
Next](https://trigger.dev/docs/deployment/atomic-deployment)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
