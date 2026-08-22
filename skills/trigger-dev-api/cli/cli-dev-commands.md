# CLI dev command

> Source: https://trigger.dev/docs/cli-dev-commands

This runs a server on your machine that can execute Trigger.dev tasks:

npm

pnpm

yarn

    npx trigger.dev@latest dev
    

It will first perform an update check to prevent version mismatches, failed deploys, and other errors. You will always be prompted first. You will see in the terminal that the server is running and listening for tasks. When you run a task, you will see it in the terminal along with a link to view it in the dashboard. It is worth noting that each task runs in a separate Node process. This means that if you have a long-running task, it will not block other tasks from running.

[​](https://trigger.dev/docs/cli-dev-commands#options)

Options
-----------------------------------------------------------------

[​](https://trigger.dev/docs/cli-dev-commands#param-config-file)

Config file

\--config | -c

The name of the config file found at the project path. Defaults to `trigger.config.ts`

[​](https://trigger.dev/docs/cli-dev-commands#param-project-ref)

Project ref

\--project-ref | -p

The project ref. Required if there is no config file.

[​](https://trigger.dev/docs/cli-dev-commands#param-env-file)

Env file

\--env-file

Load environment variables from a file. This will only hydrate the `process.env` of the CLI process, not the tasks.

[​](https://trigger.dev/docs/cli-dev-commands#param-skip-update-check)

Skip update check

\--skip-update-check

Skip checking for `@trigger.dev` package updates.

[​](https://trigger.dev/docs/cli-dev-commands#param-analyze-build-output)

Analyze build output

\--analyze

Analyzes the build output and displays detailed import timings. This is useful for debugging the start times for your runs which can be caused by importing lots of code or heavy packages.

### 

[​](https://trigger.dev/docs/cli-dev-commands#common-options)

Common options

These options are available on most commands.

[​](https://trigger.dev/docs/cli-dev-commands#param-login-profile)

Login profile

\--profile

The login profile to use. Defaults to “default”.

[​](https://trigger.dev/docs/cli-dev-commands#param-api-url)

API URL

\--api-url | -a

Override the default API URL. If not specified, it uses `https://api.trigger.dev`. This can also be set via the `TRIGGER_API_URL` environment variable.

[​](https://trigger.dev/docs/cli-dev-commands#param-log-level)

Log level

\--log-level | -l

The CLI log level to use. Options are `debug`, `info`, `log`, `warn`, `error`, and `none`. This does not affect the log level of your trigger.dev tasks. Defaults to `log`.

[​](https://trigger.dev/docs/cli-dev-commands#param-skip-telemetry)

Skip telemetry

\--skip-telemetry

Opt-out of sending telemetry data. This can also be done via the `TRIGGER_TELEMETRY_DISABLED` environment variable. Just set it to anything other than an empty string.

[​](https://trigger.dev/docs/cli-dev-commands#param-help)

Help

\--help | -h

Shows the help information for the command.

[​](https://trigger.dev/docs/cli-dev-commands#param-version)

Version

\--version | -v

Displays the version number of the CLI.

[​](https://trigger.dev/docs/cli-dev-commands#concurrently-running-the-terminal)

Concurrently running the terminal
---------------------------------------------------------------------------------------------------------------------

Install the concurrently package as a dev dependency:

    concurrently --raw --kill-others npm:dev:remix npm:dev:trigger
    

Then add something like this in your package.json scripts:

    "scripts": {
      "dev": "concurrently --raw --kill-others npm:dev:*",
      "dev:trigger": "npx trigger.dev@latest dev",
      // Add your framework-specific dev script here, for example:
      // "dev:next": "next dev",
      // "dev:remix": "remix dev",
      //...
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/cli-deploy-commands)
[initUse these options when running the CLI \`init\` command.\
\
Next](https://trigger.dev/docs/cli-init-commands)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
