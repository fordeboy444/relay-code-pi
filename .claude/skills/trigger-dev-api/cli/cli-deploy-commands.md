# CLI deploy command

> Source: https://trigger.dev/docs/cli-deploy-commands

Run the command like this:

npm

pnpm

yarn

    npx trigger.dev@latest deploy
    

This will fail in CI if any version mismatches are detected. Ensure everything runs locally first using the [dev](https://trigger.dev/docs/cli-dev-commands)
 command and don’t bypass the version checks!

It performs a few steps to deploy:

1.  Optionally updates packages when running locally.
2.  Compiles and bundles the code.
3.  Deploys the code to the Trigger.dev instance.
4.  Registers the tasks as a new version in the environment (prod by default).

[​](https://trigger.dev/docs/cli-deploy-commands#deploying-from-ci)

Deploying from CI
----------------------------------------------------------------------------------------

When deploying from CI/CD environments such as GitHub Actions, GitLab CI, or Jenkins, you need to authenticate non-interactively by setting the `TRIGGER_ACCESS_TOKEN` environment variable. Please see the [CI / GitHub Actions guide](https://trigger.dev/docs/github-actions)
 for more information.

[​](https://trigger.dev/docs/cli-deploy-commands#arguments)

Arguments
------------------------------------------------------------------------

    npx trigger.dev@latest deploy [path]
    

[​](https://trigger.dev/docs/cli-deploy-commands#param-project-path)

Project path

\[path\]

The path to the project. Defaults to the current directory.

[​](https://trigger.dev/docs/cli-deploy-commands#options)

Options
--------------------------------------------------------------------

[​](https://trigger.dev/docs/cli-deploy-commands#param-config-file)

Config file

\--config | -c

The name of the config file found at the project path. Defaults to `trigger.config.ts`

[​](https://trigger.dev/docs/cli-deploy-commands#param-project-ref)

Project ref

\--project-ref | -p

The project ref. Required if there is no config file.

[​](https://trigger.dev/docs/cli-deploy-commands#param-env-file)

Env file

\--env-file

Load environment variables from a file. This will only hydrate the `process.env` of the CLI process, not the tasks.

[​](https://trigger.dev/docs/cli-deploy-commands#param-skip-update-check)

Skip update check

\--skip-update-check

Skip checking for `@trigger.dev` package updates.

[​](https://trigger.dev/docs/cli-deploy-commands#param-environment)

Environment

\--env | -e

Defaults to `prod` but you can specify `staging` or `preview`. If you specify `preview` we will try and automatically detect the branch name from git.

[​](https://trigger.dev/docs/cli-deploy-commands#param-preview-branch)

Preview branch

\--branch | -b

When using `--env preview` the branch is automatically detected from git. But you can manually specify it by using this option, e.g. `--branch my-branch` or `-b my-branch`.

[​](https://trigger.dev/docs/cli-deploy-commands#param-dry-run)

Dry run

\--dry-run

Create a deployable build but don’t deploy it. Prints out the build path so you can inspect it.

[​](https://trigger.dev/docs/cli-deploy-commands#param-skip-promotion)

Skip promotion

\--skip-promotion

Skips automatically promoting the newly deployed version to the “current” deploy.

[​](https://trigger.dev/docs/cli-deploy-commands#param-skip-syncing-env-vars)

Skip syncing env vars

\--skip-sync-env-vars

Turn off syncing environment variables with the Trigger.dev instance.

[​](https://trigger.dev/docs/cli-deploy-commands#param-local-build)

Local build

\--local-build

Force building the deployment image locally using your local Docker. This is automatic when self-hosting.

### 

[​](https://trigger.dev/docs/cli-deploy-commands#common-options)

Common options

These options are available on most commands.

[​](https://trigger.dev/docs/cli-deploy-commands#param-login-profile)

Login profile

\--profile

The login profile to use. Defaults to “default”.

[​](https://trigger.dev/docs/cli-deploy-commands#param-api-url)

API URL

\--api-url | -a

Override the default API URL. If not specified, it uses `https://api.trigger.dev`. This can also be set via the `TRIGGER_API_URL` environment variable.

[​](https://trigger.dev/docs/cli-deploy-commands#param-log-level)

Log level

\--log-level | -l

The CLI log level to use. Options are `debug`, `info`, `log`, `warn`, `error`, and `none`. This does not affect the log level of your trigger.dev tasks. Defaults to `log`.

[​](https://trigger.dev/docs/cli-deploy-commands#param-skip-telemetry)

Skip telemetry

\--skip-telemetry

Opt-out of sending telemetry data. This can also be done via the `TRIGGER_TELEMETRY_DISABLED` environment variable. Just set it to anything other than an empty string.

[​](https://trigger.dev/docs/cli-deploy-commands#param-help)

Help

\--help | -h

Shows the help information for the command.

[​](https://trigger.dev/docs/cli-deploy-commands#param-version)

Version

\--version | -v

Displays the version number of the CLI.

### 

[​](https://trigger.dev/docs/cli-deploy-commands#self-hosting)

Self-hosting

When [self-hosting](https://trigger.dev/docs/self-hosting/overview)
, builds are performed locally by default. Once you’ve logged in to your self-hosted instance using the CLI, you can deploy with:

    npx trigger.dev@latest deploy
    

For CI/CD environments, set `TRIGGER_ACCESS_TOKEN` and `TRIGGER_API_URL` environment variables. See the [GitHub Actions guide](https://trigger.dev/docs/github-actions#self-hosting)
 for more details.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/cli-introduction)
[devThe \`trigger.dev dev\` command is used to run your tasks locally.\
\
Next](https://trigger.dev/docs/cli-dev-commands)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
