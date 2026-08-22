# Environment Variables

> Source: https://trigger.dev/docs/deploy-environment-variables

An environment variable in Node.js is accessed in your code using `process.env.MY_ENV_VAR`. We deploy your tasks and scale them up and down when they are triggered. So any environment variables you use in your tasks need to accessible to us so your code will run successfully.

[​](https://trigger.dev/docs/deploy-environment-variables#in-the-dashboard)

In the dashboard
-----------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/deploy-environment-variables#setting-environment-variables)

Setting environment variables

1

[](https://trigger.dev/docs/deploy-environment-variables#)

Go to the Environment Variables page

In the sidebar select the “Environment Variables” page, then press the “New environment variable” button. ![Environment variables page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-page.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=4f6c67a030b20699bde25c22d68e57af) 

2

[](https://trigger.dev/docs/deploy-environment-variables#)

Add your environment variables

You can add values for your local dev environment, staging and prod. ![Environment variables\
page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-panel.jpg?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=ed23a501677d11631bb832eb6f95ceae) 

Specifying Dev values is optional. They will be overriden by values in your .env file when running locally.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#secret-environment-variables)

Secret environment variables

When creating an environment variable, you can mark it as a **Secret**. Secret values are hidden in the dashboard and cannot be viewed after creation.

Marking a variable as a Secret is irreversible and can only be done when creating the variable. To change this setting, you must delete the variable and create a new one.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#editing-environment-variables)

Editing environment variables

You can edit an environment variable’s values. You cannot edit the key name, you must delete and create a new one.

1

[](https://trigger.dev/docs/deploy-environment-variables#)

Press the action button on a variable

![Environment variables page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-actions.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=ce9fba7375a89774d6eb6fd3800ba2b9)

2

[](https://trigger.dev/docs/deploy-environment-variables#)

Press edit

![Environment variables page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-edit-popover.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=a56b25cb17ed5da98f82f0ede3e1b14f)

### 

[​](https://trigger.dev/docs/deploy-environment-variables#deleting-environment-variables)

Deleting environment variables

1

[](https://trigger.dev/docs/deploy-environment-variables#)

Press the action button on a variable

![Environment variables page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-actions.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=ce9fba7375a89774d6eb6fd3800ba2b9)

2

[](https://trigger.dev/docs/deploy-environment-variables#)

Press delete

This will immediately delete the variable. ![Environment variables\
page](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/environment-variables-delete-popover.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=5564d5157938fad70bbb0bed5cbd7ad7) 

[​](https://trigger.dev/docs/deploy-environment-variables#local-development)

Local development
-------------------------------------------------------------------------------------------------

When running `npx trigger.dev dev`, the CLI automatically loads environment variables from these files in order (later files override any duplicate keys from earlier ones):

*   `.env`
*   `.env.development`
*   `.env.local`
*   `.env.development.local`
*   `dev.vars`

These variables are available to your tasks via `process.env`. You don’t need to use the `--env-file` flag for this automatic loading.

[​](https://trigger.dev/docs/deploy-environment-variables#in-your-code)

In your code
---------------------------------------------------------------------------------------

You can use our SDK to get and manipulate environment variables. You can also easily sync environment variables from another service into Trigger.dev.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#directly-manipulating-environment-variables)

Directly manipulating environment variables

We have a complete set of SDK functions (and REST API) you can use to directly manipulate environment variables.

| Function | Description |
| --- | --- |
| [envvars.list()](https://trigger.dev/docs/management/envvars/list) | List all environment variables |
| [envvars.upload()](https://trigger.dev/docs/management/envvars/import) | Upload multiple env vars. You can override existing values. |
| [envvars.create()](https://trigger.dev/docs/management/envvars/create) | Create a new environment variable |
| [envvars.retrieve()](https://trigger.dev/docs/management/envvars/retrieve) | Retrieve an environment variable |
| [envvars.update()](https://trigger.dev/docs/management/envvars/update) | Update a single environment variable |
| [envvars.del()](https://trigger.dev/docs/management/envvars/delete) | Delete a single environment variable |

#### 

[​](https://trigger.dev/docs/deploy-environment-variables#initial-load-from-env-file)

Initial load from .env file

To initially load environment variables from a `.env` file into your Trigger.dev cloud environment, you can use `envvars.upload()`. This is useful for one-time bulk imports when setting up a new project or environment.

    import { envvars } from "@trigger.dev/sdk";
    import { readFileSync } from "fs";
    import { parse } from "dotenv";
    
    // Read and parse your .env file
    const envContent = readFileSync(".env.production", "utf-8");
    const parsed = parse(envContent);
    
    // Upload to Trigger.dev (replace with your project ref and environment slug)
    await envvars.upload("proj_your_project_ref", "prod", {
      variables: parsed,
      override: false, // Set to true to override existing variables
    });
    

When called inside a task, you can omit the project ref and environment slug as they’ll be automatically inferred from the task context:

    import { envvars, task } from "@trigger.dev/sdk";
    import { readFileSync } from "fs";
    import { parse } from "dotenv";
    
    export const setupEnvVars = task({
      id: "setup-env-vars",
      run: async () => {
        const envContent = readFileSync(".env.production", "utf-8");
        const parsed = parse(envContent);
    
        // projectRef and environment slug are automatically inferred from ctx
        await envvars.upload({
          variables: parsed,
          override: false,
        });
      },
    });
    

This is different from `syncEnvVars` which automatically syncs variables during every deploy. Use `envvars.upload()` for one-time initial loads, and `syncEnvVars` for ongoing synchronization.

#### 

[​](https://trigger.dev/docs/deploy-environment-variables#getting-the-current-environment)

Getting the current environment

When using `envvars.retrieve()` inside a task, you can access the current environment information from the task context (`ctx`). The `envvars.retrieve()` function doesn’t return the environment, but you can get it from `ctx.environment`:

    import { envvars, task } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async (payload, { ctx }) => {
        // Get the current environment information
        const currentEnv = ctx.environment.slug; // e.g., "dev", "prod", "staging"
        const envType = ctx.environment.type; // e.g., "DEVELOPMENT", "PRODUCTION", "STAGING", "PREVIEW"
    
        // Retrieve an environment variable
        // When called inside a task, projectRef and slug are automatically inferred
        const apiKey = await envvars.retrieve("API_KEY");
    
        console.log(`Retrieved API_KEY from environment: ${currentEnv} (${envType})`);
        console.log(`Value: ${apiKey.value}`);
      },
    });
    

The context object provides:

*   `ctx.environment.slug` - The environment slug (e.g., “dev”, “prod”)
*   `ctx.environment.type` - The environment type (“DEVELOPMENT”, “PRODUCTION”, “STAGING”, or “PREVIEW”)
*   `ctx.environment.id` - The environment ID
*   `ctx.project.ref` - The project reference

For more information about the context object, see the [Context documentation](https://trigger.dev/docs/context)
.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#sync-env-vars-from-another-service)

Sync env vars from another service

You could use the SDK functions above but it’s much easier to use our `syncEnvVars` build extension in your `trigger.config` file.

To use the `syncEnvVars` build extension, you should first install the `@trigger.dev/build` package into your devDependencies.

In this example we’re using env vars from [Infisical](https://infisical.com/)
.

trigger.config.ts

    import { defineConfig } from "@trigger.dev/sdk";
    import { syncEnvVars } from "@trigger.dev/build/extensions/core";
    import { InfisicalSDK } from "@infisical/sdk";
    
    export default defineConfig({
      build: {
        extensions: [\
          syncEnvVars(async (ctx) => {\
            const client = new InfisicalSDK();\
    \
            await client.auth().universalAuth.login({\
              clientId: process.env.INFISICAL_CLIENT_ID!,\
              clientSecret: process.env.INFISICAL_CLIENT_SECRET!,\
            });\
    \
            const { secrets } = await client.secrets().listSecrets({\
              environment: ctx.environment,\
              projectId: process.env.INFISICAL_PROJECT_ID!,\
            });\
    \
            return secrets.map((secret) => ({\
              name: secret.secretKey,\
              value: secret.secretValue,\
            }));\
          }),\
        ],
      },
    });
    

#### 

[​](https://trigger.dev/docs/deploy-environment-variables#syncing-environment-variables-from-vercel)

Syncing environment variables from Vercel

To sync environment variables from your Vercel projects to Trigger.dev, you can use our build extension. Check out our [syncing environment variables from Vercel guide](https://trigger.dev/docs/guides/examples/vercel-sync-env-vars)
.

#### 

[​](https://trigger.dev/docs/deploy-environment-variables#deploy)

Deploy

When you run the [CLI deploy command](https://trigger.dev/docs/cli-deploy-commands)
 directly or using [GitHub Actions](https://trigger.dev/docs/github-actions)
 it will sync the environment variables from [Infisical](https://infisical.com/)
 to Trigger.dev. This means they’ll appear on the Environment Variables page so you can confirm that it’s worked. This means that you need to redeploy your Trigger.dev tasks if you change the environment variables in [Infisical](https://infisical.com/)
.

The `process.env.INFISICAL_CLIENT_ID`, `process.env.INFISICAL_CLIENT_SECRET` and `process.env.INFISICAL_PROJECT_ID` will need to be supplied to the `deploy` CLI command. You can do this via the `--env-file .env` flag or by setting them as environment variables in your terminal.

#### 

[​](https://trigger.dev/docs/deploy-environment-variables#dev)

Dev

`syncEnvVars` does not have any effect when running the `dev` command locally. If you want to inject environment variables from another service into your local environment you can do so via a `.env` file or just supplying them as environment variables in your terminal. Most services will have a CLI tool that allows you to run a command with environment variables set:

    infisical run -- npx trigger.dev@latest dev
    

Any environment variables set in the CLI command will be available to your local Trigger.dev tasks.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#the-syncenvvars-callback-return-type)

The syncEnvVars callback return type

You can return env vars as an object with string keys and values, or an array of names + values.

    return {
      MY_ENV_VAR: "my value",
      MY_OTHER_ENV_VAR: "my other value",
    };
    

or

    return [\
      {\
        name: "MY_ENV_VAR",\
        value: "my value",\
      },\
      {\
        name: "MY_OTHER_ENV_VAR",\
        value: "my other value",\
      },\
    ];
    

This should mean that for most secret services you won’t need to convert the data into a different format.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#using-google-credential-json-files)

Using Google credential JSON files

Securely pass a Google credential JSON file to your Trigger.dev task using environment variables.

1

[](https://trigger.dev/docs/deploy-environment-variables#)

Convert the Google credential file to base64

In your terminal, run the following command and copy the resulting base64 string:

    base64 -i path/to/your/service-account-file.json
    

2

[](https://trigger.dev/docs/deploy-environment-variables#)

Set up the environment variable in Trigger.dev

Follow [these steps](https://trigger.dev/docs/deploy-environment-variables)
 to set a new environment variable using the base64 string as the value.

    GOOGLE_CREDENTIALS_BASE64="<your base64 string>"
    

3

[](https://trigger.dev/docs/deploy-environment-variables#)

Use the environment variable in your code

Add the following code to your Trigger.dev task:

    import { google } from "googleapis";
    
    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, "base64").toString("utf8")
    );
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ["https://www.googleapis.com/auth/cloud-platform"],
    });
    
    const client = await auth.getClient();
    

4

[](https://trigger.dev/docs/deploy-environment-variables#)

Use the client in your code

You can now use the `client` object to make authenticated requests to Google APIs

[​](https://trigger.dev/docs/deploy-environment-variables#using-env-production-or-dotenvx-with-trigger-dev)

Using `.env.production` or dotenvx with Trigger.dev
------------------------------------------------------------------------------------------------------------------------------------------------------------------

Trigger.dev does not automatically load `.env.production` files or dotenvx files during deploys.  
To use these files in your Trigger.dev environment:

### 

[​](https://trigger.dev/docs/deploy-environment-variables#option-1-%E2%80%94-manually-add-your-environment-variables)

Option 1 — Manually add your environment variables

1.  Open your `.env.production` (or `.env`) file
2.  Copy the full contents
3.  Go to your Trigger.dev project → **Environment Variables**
4.  Click **Add variables**
5.  Paste the contents directly into the editor

Trigger.dev will automatically parse and create each key/value pair. This is the simplest way to bring dotenvx or `.env.production` variables into your Trigger.dev environment.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#option-2-%E2%80%94-sync-variables-automatically-using-syncenvvars)

Option 2 — Sync variables automatically using `syncEnvVars`

If you’d prefer an automated flow, you can use the `syncEnvVars` build extension to programmatically load and return your variables:

    import { defineConfig } from "@trigger.dev/sdk";
    import { syncEnvVars } from "@trigger.dev/build/extensions/core";
    import dotenvx from "@dotenvx/dotenvx";
    import { readFileSync } from "fs";
    
    export default defineConfig({
      project: "<project id>",
      build: {
        extensions: [\
          syncEnvVars(async () => {\
            const envContent = readFileSync(".env.production", "utf-8");\
            const parsed = dotenvx.parse(envContent);\
            return parsed ?? {};\
          }),\
        ],
      },
    });
    

This will read your .env.production file using dotenvx and sync the variables to Trigger.dev during every deploy. **Summary**

*   Trigger.dev does not automatically detect .env.production or dotenvx files
*   You can paste them manually into the dashboard
*   Or sync them automatically using a build extension

[​](https://trigger.dev/docs/deploy-environment-variables#multi-tenant-applications)

Multi-tenant applications
-----------------------------------------------------------------------------------------------------------------

If you’re building a multi-tenant application where each tenant needs different environment variables (like tenant-specific API keys or database credentials), you don’t need a separate project for each tenant. Instead, use a single project and load tenant-specific secrets at runtime.

This is different from [syncing environment variables at deploy time](https://trigger.dev/docs/deploy-environment-variables#sync-env-vars-from-another-service)
. Here, secrets are loaded dynamically during task execution, not synced to Trigger.dev’s environment variables.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#recommended-approach)

Recommended approach

Use a secrets service (Infisical, AWS Secrets Manager, HashiCorp Vault, etc.) to store tenant-specific secrets, then retrieve them at the start of each task run based on the tenant identifier in your payload or context. **Important:** Never pass secrets in the task payload, as payloads are logged and visible in the dashboard.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#example-implementation)

Example implementation

    import { task } from "@trigger.dev/sdk";
    import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
    
    export const processTenantData = task({
      id: "process-tenant-data",
      run: async (payload: { tenantId: string; data: unknown }) => {
        // Retrieve tenant-specific secret at runtime
        const client = new SecretsManagerClient({ region: "us-east-1" });
        const response = await client.send(
          new GetSecretValueCommand({
            SecretId: `tenants/${payload.tenantId}/supabase-key`,
          })
        );
    
        const supabaseKey = JSON.parse(response.SecretString!).SUPABASE_SERVICE_KEY;
    
        // Your task logic using the tenant-specific secret
        // ...
      },
    });
    

You can use any secrets service - see the [sync env vars section](https://trigger.dev/docs/deploy-environment-variables#sync-env-vars-from-another-service)
 for an example with Infisical.

### 

[​](https://trigger.dev/docs/deploy-environment-variables#benefits)

Benefits

*   **Single codebase** - Deploy once, works for all tenants
*   **Secure** - Secrets never appear in payloads or logs
*   **Scalable** - No project limit constraints
*   **Flexible** - Easy to add new tenants without redeploying

This approach allows you to support unlimited tenants with a single Trigger.dev project, avoiding the [project limit](https://trigger.dev/docs/limits#projects)
 while maintaining security and separation of tenant data.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/deployment/overview)
[CI / GitHub ActionsYou can easily deploy your tasks with GitHub actions and other CI environments.\
\
Next](https://trigger.dev/docs/github-actions)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
