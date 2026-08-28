# Deployment

> Source: https://trigger.dev/docs/deployment/overview

Before you can run production workloads on Trigger.dev, you need to deploy your tasks. The only way to do this at the moment is through the [deploy CLI command](https://trigger.dev/docs/cli-deploy-commands)
:

npm

pnpm

yarn

    npx trigger.dev@latest deploy
    

[​](https://trigger.dev/docs/deployment/overview#deploying-101)

Deploying 101
--------------------------------------------------------------------------------

Let’s assume you have an existing trigger.dev project with a few tasks that you have been running locally but now want to deploy to the Trigger.dev cloud (or your self-hosted instance). First, let’s make sure you are logged in to the CLI (if you haven’t already):

    npx trigger.dev login
    

This will open a browser window where you can log in with your Trigger.dev account and link your CLI. Now you can deploy your tasks:

    npx trigger.dev deploy
    

This should print out a success message and let you know a new version has been deployed:

    Trigger.dev (3.3.16)
    ------------------------------------------------------
    ┌  Deploying project
    │
    ◇  Retrieved your account details for eric@trigger.dev
    │
    ◇  Successfully built code
    │
    ◇  Successfully deployed version 20250228.1
    │
    └  Version 20250228.1 deployed with 4 detected tasks
    

Now if you visit your Trigger.dev dashboard you should see the new version deployed: ![Trigger.dev dashboard showing the latest version deployed](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/my-first-deployment.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=e3d467bc4d5de26e0ab935f657c73634)

Deploying consists of building your tasks and uploading them to the Trigger.dev cloud. This process can take a few seconds to a few minutes depending on the size of your project.

[​](https://trigger.dev/docs/deployment/overview#triggering-deployed-tasks)

Triggering deployed tasks
--------------------------------------------------------------------------------------------------------

Once you have deployed your tasks, you can trigger tasks exactly the same way you did locally, but with the “PROD” API key: ![Trigger.dev dashboard showing the API key](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/api-key.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=96b825a5094caa74ac1b504802aa1a41) Copy the API key from the dashboard and set the `TRIGGER_SECRET_KEY` environment variable, and then any tasks you trigger will run against the deployed version:

.env

    TRIGGER_SECRET_KEY="tr_prod_abc123"
    

Now you can trigger your tasks:

    import { myTask } from "./trigger/tasks";
    
    await myTask.trigger({ foo: "bar" });
    

See our [triggering tasks](https://trigger.dev/docs/triggering)
 guide for more information.

[​](https://trigger.dev/docs/deployment/overview#versions)

Versions
----------------------------------------------------------------------

When you deploy your tasks, Trigger.dev creates a new version of all tasks in your project. A version is a snapshot of your tasks at a certain point in time. This ensures that tasks are not affected by changes to the code.

### 

[​](https://trigger.dev/docs/deployment/overview#current-version)

Current version

When you deploy, the version number is automatically incremented, and the new version is set as the current version for that environment.

A single environment (prod, staging, etc.) can only have a single “current” version at a time.

The current version defines which version of the code new task runs will execute against. When a task run starts, it is locked to the current version. This ensures that the task run is not affected by changes to the code. Retries of the task run will also be locked to the original version.

When you Replay a run in the dashboard we will create a new run, locked to the current version and not necessarily the version of the original run.

### 

[​](https://trigger.dev/docs/deployment/overview#version-locking)

Version locking

You can optionally specify the version when triggering a task using the `version` parameter. This is useful when you want to run a task against a specific version of the code:

    await myTask.trigger({ foo: "bar" }, { version: "20250228.1" });
    

If you want to set a global version to run all tasks against, you can use the `TRIGGER_VERSION` environment variable:

    TRIGGER_VERSION=20250228.1
    

### 

[​](https://trigger.dev/docs/deployment/overview#child-tasks-and-auto-version-locking)

Child tasks and auto-version locking

Trigger and wait functions version lock child task runs to the parent task run version. This ensures the results from child runs match what the parent task is expecting. If you don’t wait then version locking doesn’t apply.

| Trigger function | Parent task version | Child task version | isLocked |
| --- | --- | --- | --- |
| `trigger()` | `20240313.2` | Current | No  |
| `batchTrigger()` | `20240313.2` | Current | No  |
| `triggerAndWait()` | `20240313.2` | `20240313.2` | Yes |
| `batchTriggerAndWait()` | `20240313.2` | `20240313.2` | Yes |

### 

[​](https://trigger.dev/docs/deployment/overview#skipping-promotion)

Skipping promotion

When you deploy, the new version is automatically promoted be the current version. If you want to skip this promotion, you can use the `--skip-promotion` flag:

    npx trigger.dev deploy --skip-promotion
    

This will create a new deployment version but not promote it to the current version: ![Trigger.dev dashboard showing the latest version deployed but not promoted](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/skip-promotion.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=0cee76dfc877b3f9458fab9c2ac8d960) This allows you to deploy and test a new version without affecting new task runs. When you want to promote the version, you can do so from the CLI:

    npx trigger.dev promote 20250228.1
    

Or from the dashboard: ![Trigger.dev dashboard showing the promote button](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/promote-button.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=cec8c4a1ee1b52e0b367f5b3d09871a5) To learn more about skipping promotion and how this enables atomic deployments, see our [Atomic deployment](https://trigger.dev/docs/deployment/atomic-deployment)
 guide.

[​](https://trigger.dev/docs/deployment/overview#staging-deploys)

Staging deploys
------------------------------------------------------------------------------------

By default, the `deploy` command will deploy to the `prod` environment. If you want to deploy to a different environment, you can use the `--env` flag:

    npx trigger.dev deploy --env staging
    

If you are using the Trigger.dev Cloud, staging deploys are only available on the Hobby and Pro plans.

This will create an entirely new version of your tasks for the `staging` environment, with a new version number and an independent current version: ![Trigger.dev dashboard showing the staging environment](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/deployment/staging-deploy.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=9070a4a84cc1b356419d2331ae984b13) Now you can trigger tasks against the staging environment by setting the `TRIGGER_SECRET_KEY` environment variable to the staging API key:

.env

    TRIGGER_SECRET_KEY="tr_stg_abcd123"
    

For additional environments beyond `prod` and `staging`, you can use [preview branches](https://trigger.dev/docs/deployment/preview-branches)
, which allow you to create isolated environments for each branch of your code.

[​](https://trigger.dev/docs/deployment/overview#local-builds)

Local builds
------------------------------------------------------------------------------

By default we use a remote build provider to speed up builds. However, you can also force the build to happen locally on your machine using the `--force-local-build` flag:

    npx trigger.dev deploy --force-local-build
    

Deploying with local builds can be a useful fallback in cases where our remote build provider is experiencing availability issues.

### 

[​](https://trigger.dev/docs/deployment/overview#system-requirements)

System requirements

To use local builds, you need the following tools installed on your machine:

*   Docker ([installation guide](https://docs.docker.com/get-started/get-docker)
    )
*   Docker Buildx ([installation guide](https://github.com/docker/buildx#installing)
    )

[​](https://trigger.dev/docs/deployment/overview#environment-variables)

Environment variables
------------------------------------------------------------------------------------------------

To add custom environment variables to your deployed tasks, you need to add them to your project in the Trigger.dev dashboard, or automatically sync them using our [syncEnvVars](https://trigger.dev/docs/config/config-file#syncenvvars)
 or [syncVercelEnvVars](https://trigger.dev/docs/config/config-file#syncvercelenvvars)
 build extensions. For more information on environment variables, see our [environment variables](https://trigger.dev/docs/deploy-environment-variables)
 guide.

[​](https://trigger.dev/docs/deployment/overview#troubleshooting)

Troubleshooting
------------------------------------------------------------------------------------

When things go wrong with your deployment, there are a few things you can do to diagnose the issue:

### 

[​](https://trigger.dev/docs/deployment/overview#dry-runs)

Dry runs

You can do a “dry run” of the deployment to see what is built and uploaded without actually deploying:

    npx trigger.dev deploy --dry-run
    
    #  Dry run complete. View the built project at /<project path>/.trigger/tmp/<build dir>
    

The dry run will output the build directory where you can inspect the built tasks and dependencies. You can also compress this directory and send it to us if you need help debugging.

### 

[​](https://trigger.dev/docs/deployment/overview#debug-logs)

Debug logs

You can run the deploy command with `--log-level debug` at the end. This will print out a lot of information about the deploy. If you can’t figure out the problem from the information below please join [our Discord](https://trigger.dev/discord)
 and create a help forum post. Do NOT share the extended debug logs publicly as they might reveal private information about your project.

### 

[​](https://trigger.dev/docs/deployment/overview#common-issues)

Common issues

#### 

[​](https://trigger.dev/docs/deployment/overview#failed-to-build-project-image-error-building-image)

`Failed to build project image: Error building image`

There should be a link below the error message to the full build logs on your machine. Take a look at these to see what went wrong. Join [our Discord](https://trigger.dev/discord)
 and you share it privately with us if you can’t figure out what’s going wrong. Do NOT share these publicly as the verbose logs might reveal private information about your project. Sometimes these errors are caused by upstream availability issues with our remote build provider. In this case, you can try deploying with a local build using the `--force-local-build` flag. Refer to the [Local builds](https://trigger.dev/docs/deployment/overview#local-builds)
 section for more information.

#### 

[​](https://trigger.dev/docs/deployment/overview#deployment-encountered-an-error)

`Deployment encountered an error`

Usually there will be some useful guidance below this message. If you can’t figure out what’s going wrong then join [our Discord](https://trigger.dev/discord)
 and create a Help forum post with a link to your deployment.

#### 

[​](https://trigger.dev/docs/deployment/overview#no-loader-is-configured-for--node-files)

`No loader is configured for ".node" files`

This happens because `.node` files are native code and can’t be bundled like other packages. To fix this, add your package to [`build.external`](https://trigger.dev/docs/config/config-file#external)
 in the `trigger.config.ts` file like this:

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<project ref>",
      // Your other config settings...
      build: {
        external: ["your-node-package"],
      },
    });
    

### 

[​](https://trigger.dev/docs/deployment/overview#cannot-find-matching-keyid)

`Cannot find matching keyid`

This error occurs when using Node.js v22 with corepack, as it’s not yet compatible with the latest package manager signatures. To fix this, either:

1.  Downgrade to Node.js v20 (LTS), or
2.  Install corepack globally: `npm i -g corepack@latest`

The corepack bug and workaround are detailed in [this issue](https://github.com/npm/cli/issues/8075)
.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/config/extensions/custom)
[Environment VariablesAny environment variables used in your tasks need to be added so the deployed code will run successfully.\
\
Next](https://trigger.dev/docs/deploy-environment-variables)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
