# Manual setup

> Source: https://trigger.dev/docs/manual-setup

This guide covers how to manually set up Trigger.dev in your project, including configuration for different package managers, monorepos, and build extensions. This guide replicates all the steps performed by the `trigger.dev init` command. Follow our [Quickstart](https://trigger.dev/docs/quick-start)
 for a more streamlined setup.

[​](https://trigger.dev/docs/manual-setup#prerequisites)

Prerequisites
-------------------------------------------------------------------------

*   Node.js 18.20+ (or Bun runtime)
*   A Trigger.dev account (sign up at [trigger.dev](https://trigger.dev/)
    )
*   TypeScript 5.0.4 or later (for TypeScript projects)

[​](https://trigger.dev/docs/manual-setup#cli-authentication)

CLI Authentication
-----------------------------------------------------------------------------------

Before setting up your project, you need to authenticate the CLI with Trigger.dev:

    # Login to Trigger.dev
    npx trigger.dev@latest login
    
    # Or with a specific API URL (for self-hosted instances)
    npx trigger.dev@latest login --api-url https://your-trigger-instance.com
    

This will open your browser to authenticate. Once authenticated, you’ll need to select or create a project in the Trigger.dev dashboard to get your project reference (e.g., `proj_abc123`).

[​](https://trigger.dev/docs/manual-setup#package-installation)

Package installation
---------------------------------------------------------------------------------------

Install the required packages based on your package manager:

npm

pnpm

yarn

bun

    npm add @trigger.dev/sdk@latest
    npm add --save-dev @trigger.dev/build@latest
    

[​](https://trigger.dev/docs/manual-setup#environment-variables)

Environment variables
-----------------------------------------------------------------------------------------

For local development, you need to set up the `TRIGGER_SECRET_KEY` environment variable. This key authenticates your application with Trigger.dev.

1.  Go to your project dashboard in Trigger.dev
2.  Navigate to the “API Keys” page
3.  Copy the **DEV** secret key
4.  Add it to your local environment file:

    TRIGGER_SECRET_KEY=tr_dev_xxxxxxxxxx
    

### 

[​](https://trigger.dev/docs/manual-setup#self-hosted-instances)

Self-hosted instances

If you’re using a self-hosted Trigger.dev instance, also set:

    TRIGGER_API_URL=https://your-trigger-instance.com
    

[​](https://trigger.dev/docs/manual-setup#cli-setup)

CLI setup
-----------------------------------------------------------------

You can run the Trigger.dev CLI in two ways:

### 

[​](https://trigger.dev/docs/manual-setup#option-1-using-npx/pnpm-dlx/yarn-dlx)

Option 1: Using npx/pnpm dlx/yarn dlx

    # npm
    npx trigger.dev@latest dev
    
    # pnpm
    pnpm dlx trigger.dev@latest dev
    
    # yarn
    yarn dlx trigger.dev@latest dev
    

### 

[​](https://trigger.dev/docs/manual-setup#option-2-add-as-dev-dependency)

Option 2: Add as dev dependency

Add the CLI to your `package.json`:

    {
      "devDependencies": {
        "trigger.dev": "^4.0.0"
      }
    }
    

Then add scripts to your `package.json`:

    {
      "scripts": {
        "dev:trigger": "trigger dev",
        "deploy:trigger": "trigger deploy"
      }
    }
    

### 

[​](https://trigger.dev/docs/manual-setup#version-pinning)

Version pinning

Make sure to pin the version of the CLI to the same version as the SDK that you are using:

    "devDependencies": {
      "trigger.dev": "^4.0.0",
      "@trigger.dev/build": "^4.0.0"
    },
    "dependencies": {
      "@trigger.dev/sdk": "^4.0.0"
    }
    

While running the CLI `dev` or `deploy` commands, the CLI will automatically detect mismatched versions and warn you.

[​](https://trigger.dev/docs/manual-setup#configuration-file)

Configuration file
-----------------------------------------------------------------------------------

Create a `trigger.config.ts` file in your project root (or `trigger.config.mjs` for JavaScript projects):

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      // Your project ref from the Trigger.dev dashboard
      project: "<your-project-ref>", // e.g., "proj_abc123"
    
      // Directories containing your tasks
      dirs: ["./src/trigger"], // Customize based on your project structure
    
      // Retry configuration
      retries: {
        enabledInDev: false, // Enable retries in development
        default: {
          maxAttempts: 3,
          minTimeoutInMs: 1000,
          maxTimeoutInMs: 10000,
          factor: 2,
          randomize: true,
        },
      },
    
      // Build configuration (optional)
      build: {
        extensions: [], // Build extensions go here
      },
    
      // Max duration of a task in seconds
      maxDuration: 3600,
    });
    

### 

[​](https://trigger.dev/docs/manual-setup#using-the-bun-runtime)

Using the Bun runtime

By default, Trigger.dev will use the Node.js runtime. If you’re using Bun, you can specify the runtime:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<your-project-ref>",
      runtime: "bun",
      dirs: ["./src/trigger"],
    });
    

See our [Bun runtime documentation](https://trigger.dev/docs/guides/frameworks/bun)
 for more information.

[​](https://trigger.dev/docs/manual-setup#add-your-first-task)

Add your first task
-------------------------------------------------------------------------------------

Create a `trigger` directory (matching the `dirs` in your config) and add an example task:

src/trigger/example.ts

    import { task } from "@trigger.dev/sdk";
    
    export const helloWorld = task({
      id: "hello-world",
      run: async (payload: { name: string }) => {
        console.log(`Hello ${payload.name}!`);
    
        return {
          message: `Hello ${payload.name}!`,
          timestamp: new Date().toISOString(),
        };
      },
    });
    

See our [Tasks](https://trigger.dev/docs/tasks/overview)
 docs for more information on how to create tasks.

[​](https://trigger.dev/docs/manual-setup#typescript-config)

TypeScript config
---------------------------------------------------------------------------------

If you’re using TypeScript, add `trigger.config.ts` to your `tsconfig.json` include array:

    {
      "compilerOptions": {
        // ... your existing options
      },
      "include": [\
        // ... your existing includes\
        "trigger.config.ts"\
      ]
    }
    

[​](https://trigger.dev/docs/manual-setup#git-config)

Git config
-------------------------------------------------------------------

Add `.trigger` to your `.gitignore` file to exclude Trigger.dev’s local development files:

    # Trigger.dev
    .trigger
    

If you don’t have a `.gitignore` file, create one with this content.

[​](https://trigger.dev/docs/manual-setup#react-hooks-setup)

React hooks setup
---------------------------------------------------------------------------------

If you’re building a React frontend application and want to display task status in real-time, install the React hooks package:

### 

[​](https://trigger.dev/docs/manual-setup#installation)

Installation

    # npm
    npm install @trigger.dev/react-hooks@latest
    
    # pnpm
    pnpm add @trigger.dev/react-hooks@latest
    
    # yarn
    yarn add @trigger.dev/react-hooks@latest
    
    # bun
    bun add @trigger.dev/react-hooks@latest
    

### 

[​](https://trigger.dev/docs/manual-setup#basic-usage)

Basic usage

1.  **Generate a Public Access Token** in your backend:

    import { auth } from "@trigger.dev/sdk";
    
    // In your backend API
    export async function getPublicAccessToken() {
      const publicAccessToken = await auth.createPublicToken({
        scopes: ["read:runs"], // Customize based on needs
      });
    
      return publicAccessToken;
    }
    

2.  **Use hooks to monitor tasks**:

    import { useRealtimeRun } from "@trigger.dev/react-hooks";
    
    export function TaskStatus({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { run, error } = useRealtimeRun(runId, {
        accessToken: publicAccessToken,
      });
    
      if (error) return <div>Error: {error.message}</div>;
      if (!run) return <div>Loading...</div>;
    
      return (
        <div>
          <p>Status: {run.status}</p>
          <p>Progress: {run.completedAt ? "Complete" : "Running..."}</p>
        </div>
      );
    }
    

For more information, see the [React Hooks documentation](https://trigger.dev/docs/realtime/react-hooks/overview)
.

[​](https://trigger.dev/docs/manual-setup#build-extensions)

Build extensions
-------------------------------------------------------------------------------

Build extensions allow you to customize the build process. Ensure you have the `@trigger.dev/build` package installed in your project (see [package installation](https://trigger.dev/docs/manual-setup#package-installation)
). Now you can use any of the built-in extensions:

    import { defineConfig } from "@trigger.dev/sdk";
    import { prismaExtension } from "@trigger.dev/build/extensions/prisma";
    
    export default defineConfig({
      project: "<project-ref>",
      build: {
        extensions: [\
          prismaExtension({\
            mode: "legacy",\
            schema: "prisma/schema.prisma",\
            migrate: true, // Run migrations on deploy\
          }),\
        ],
      },
    });
    

See our [Build extensions](https://trigger.dev/docs/config/extensions/overview)
 docs for more information on how to use build extensions and the available extensions.

[​](https://trigger.dev/docs/manual-setup#monorepo-setup)

Monorepo setup
---------------------------------------------------------------------------

There are two main approaches for setting up Trigger.dev in a monorepo:

1.  **Tasks as a package**: Create a separate package for your Trigger.dev tasks that can be shared across apps
2.  **Tasks in apps**: Install Trigger.dev directly in individual apps that need background tasks

Both approaches work well depending on your needs. Use the tasks package approach if you want to share tasks across multiple applications, or the app-based approach if tasks are specific to individual apps.

### 

[​](https://trigger.dev/docs/manual-setup#approach-1-tasks-as-a-package-turborepo)

Approach 1: Tasks as a package (Turborepo)

This approach creates a dedicated tasks package that can be consumed by multiple apps in your monorepo.

#### 

[​](https://trigger.dev/docs/manual-setup#1-set-up-workspace-configuration)

1\. Set up workspace configuration

**Root `package.json`**:

    {
      "name": "my-monorepo",
      "private": true,
      "scripts": {
        "build": "turbo run build",
        "dev": "turbo run dev",
        "lint": "turbo run lint"
      },
      "devDependencies": {
        "turbo": "^2.4.4",
        "typescript": "5.8.2"
      },
      "packageManager": "pnpm@9.0.0"
    }
    

**`pnpm-workspace.yaml`**:

    packages:
      - "apps/*"
      - "packages/*"
    

**`turbo.json`**:

    {
      "$schema": "https://turbo.build/schema.json",
      "ui": "tui",
      "tasks": {
        "build": {
          "dependsOn": ["^build"],
          "outputs": [".next/**", "!.next/cache/**"]
        },
        "dev": {
          "cache": false,
          "persistent": true
        },
        "lint": {
          "dependsOn": ["^lint"]
        }
      }
    }
    

#### 

[​](https://trigger.dev/docs/manual-setup#2-create-the-tasks-package)

2\. Create the tasks package

**`packages/tasks/package.json`**:

    {
      "name": "@repo/tasks",
      "version": "0.0.0",
      "dependencies": {
        "@trigger.dev/sdk": "^4.0.0"
      },
      "devDependencies": {
        "@trigger.dev/build": "^4.0.0"
      },
      "exports": {
        ".": "./src/trigger/index.ts",
        "./trigger": "./src/index.ts"
      }
    }
    

**`packages/tasks/trigger.config.ts`**:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<your-project-ref>", // Replace with your project reference
      dirs: ["./src/trigger"],
      retries: {
        enabledInDev: true,
        default: {
          maxAttempts: 3,
          minTimeoutInMs: 1000,
          maxTimeoutInMs: 10000,
          factor: 2,
          randomize: true,
        },
      },
      maxDuration: 3600,
    });
    

**`packages/tasks/src/index.ts`**:

    export * from "@trigger.dev/sdk"; // Export values and types from the Trigger.dev sdk
    

**`packages/tasks/src/trigger/index.ts`**:

    // Export tasks
    export * from "./example";
    

**`packages/tasks/src/trigger/example.ts`**:

    import { task } from "@trigger.dev/sdk";
    
    export const helloWorld = task({
      id: "hello-world",
      run: async (payload: { name: string }) => {
        console.log(`Hello ${payload.name}!`);
    
        return {
          message: `Hello ${payload.name}!`,
          timestamp: new Date().toISOString(),
        };
      },
    });
    

See our [turborepo-prisma-tasks-package example](https://github.com/triggerdotdev/examples/tree/main/monorepos/turborepo-prisma-tasks-package)
 for a more complete example.

#### 

[​](https://trigger.dev/docs/manual-setup#3-use-tasks-in-your-apps)

3\. Use tasks in your apps

**`apps/web/package.json`**:

    {
      "name": "web",
      "dependencies": {
        "@repo/tasks": "workspace:*",
        "next": "^15.2.1",
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
      }
    }
    

**`apps/web/app/api/actions.ts`**:

    "use server";
    
    import { tasks } from "@repo/tasks/trigger";
    import type { helloWorld } from "@repo/tasks";
    //     👆 type only import
    
    export async function triggerHelloWorld(name: string) {
      try {
        const handle = await tasks.trigger<typeof helloWorld>("hello-world", {
          name: name,
        });
    
        return handle.id;
      } catch (error) {
        console.error(error);
        return { error: "something went wrong" };
      }
    }
    

#### 

[​](https://trigger.dev/docs/manual-setup#4-development-workflow)

4\. Development workflow

Run the development server for the tasks package:

    # From the root of your monorepo
    cd packages/tasks
    npx trigger.dev@latest dev
    
    # Or using turbo (if you add dev:trigger script to tasks package.json)
    turbo run dev:trigger --filter=@repo/tasks
    

### 

[​](https://trigger.dev/docs/manual-setup#approach-2-tasks-in-apps-turborepo)

Approach 2: Tasks in apps (Turborepo)

This approach installs Trigger.dev directly in individual apps that need background tasks.

#### 

[​](https://trigger.dev/docs/manual-setup#1-install-in-your-app)

1\. Install in your app

**`apps/web/package.json`**:

    {
      "name": "web",
      "dependencies": {
        "@trigger.dev/sdk": "^4.0.0",
        "next": "^15.2.1",
        "react": "^19.0.0",
        "react-dom": "^19.0.0"
      },
      "devDependencies": {
        "@trigger.dev/build": "^4.0.0"
      }
    }
    

#### 

[​](https://trigger.dev/docs/manual-setup#2-add-configuration)

2\. Add configuration

**`apps/web/trigger.config.ts`**:

    import { defineConfig } from "@trigger.dev/sdk";
    
    export default defineConfig({
      project: "<your-project-ref>", // Replace with your project reference
      dirs: ["./src/trigger"],
      retries: {
        enabledInDev: true,
        default: {
          maxAttempts: 3,
          minTimeoutInMs: 1000,
          maxTimeoutInMs: 10000,
          factor: 2,
          randomize: true,
        },
      },
      maxDuration: 3600,
    });
    

#### 

[​](https://trigger.dev/docs/manual-setup#3-create-tasks)

3\. Create tasks

**`apps/web/src/trigger/example.ts`**:

    import { task } from "@trigger.dev/sdk";
    
    export const helloWorld = task({
      id: "hello-world",
      run: async (payload: { name: string }) => {
        console.log(`Hello ${payload.name}!`);
    
        return {
          message: `Hello ${payload.name}!`,
          timestamp: new Date().toISOString(),
        };
      },
    });
    

#### 

[​](https://trigger.dev/docs/manual-setup#4-use-tasks-in-your-app)

4\. Use tasks in your app

**`apps/web/app/api/actions.ts`**:

    "use server";
    
    import { tasks } from "@trigger.dev/sdk";
    import type { helloWorld } from "../../src/trigger/example";
    //     👆 type only import
    
    export async function triggerHelloWorld(name: string) {
      try {
        const handle = await tasks.trigger<typeof helloWorld>("hello-world", {
          name: name,
        });
    
        return handle.id;
      } catch (error) {
        console.error(error);
        return { error: "something went wrong" };
      }
    }
    

#### 

[​](https://trigger.dev/docs/manual-setup#5-development-workflow)

5\. Development workflow

    # From the app directory
    cd apps/web
    npx trigger.dev@latest dev
    
    # Or from the root using turbo
    turbo run dev:trigger --filter=web
    

[​](https://trigger.dev/docs/manual-setup#example-projects)

Example projects
-------------------------------------------------------------------------------

You can find a growing list of example projects in our [examples](https://trigger.dev/docs/guides/introduction)
 section.

[​](https://trigger.dev/docs/manual-setup#troubleshooting)

Troubleshooting
-----------------------------------------------------------------------------

If you run into any issues, please check our [Troubleshooting](https://trigger.dev/docs/troubleshooting)
 page.

[​](https://trigger.dev/docs/manual-setup#feedback)

Feedback
---------------------------------------------------------------

If you have any feedback, please let us know by [opening an issue](https://github.com/triggerdotdev/trigger.dev/issues)
.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/quick-start)
[Video walkthroughGo from zero to a working task in your Next.js app in 10 minutes.\
\
Next](https://trigger.dev/docs/video-walkthrough)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
