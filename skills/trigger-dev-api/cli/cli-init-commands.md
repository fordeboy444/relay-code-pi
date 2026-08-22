# CLI init command

> Source: https://trigger.dev/docs/cli-init-commands

Run the command like this:

npm

pnpm

yarn

    npx trigger.dev@latest init
    

[​](https://trigger.dev/docs/cli-init-commands#options)

Options
------------------------------------------------------------------

[​](https://trigger.dev/docs/cli-init-commands#param-javascript)

Javascript

\--javascript

By default, the init command assumes you are using TypeScript. Use this flag to initialize a project that uses JavaScript.

[​](https://trigger.dev/docs/cli-init-commands#param-project-ref)

Project ref

\--project-ref | -p

The project ref to use when initializing the project.

[​](https://trigger.dev/docs/cli-init-commands#param-package-tag)

Package tag

\--tag | -t

The version of the `@trigger.dev/sdk` package to install. Defaults to `latest`.

[​](https://trigger.dev/docs/cli-init-commands#param-skip-package-install)

Skip package install

\--skip-package-install

Skip installing the `@trigger.dev/sdk` package.

[​](https://trigger.dev/docs/cli-init-commands#param-override-config)

Override config

\--override-config

Override the existing config file if it exists.

[​](https://trigger.dev/docs/cli-init-commands#param-package-arguments)

Package arguments

\--pkg-args

Additional arguments to pass to the package manager. Accepts CSV for multiple args.

### 

[​](https://trigger.dev/docs/cli-init-commands#common-options)

Common options

These options are available on most commands.

[​](https://trigger.dev/docs/cli-init-commands#param-login-profile)

Login profile

\--profile

The login profile to use. Defaults to “default”.

[​](https://trigger.dev/docs/cli-init-commands#param-api-url)

API URL

\--api-url | -a

Override the default API URL. If not specified, it uses `https://api.trigger.dev`. This can also be set via the `TRIGGER_API_URL` environment variable.

[​](https://trigger.dev/docs/cli-init-commands#param-log-level)

Log level

\--log-level | -l

The CLI log level to use. Options are `debug`, `info`, `log`, `warn`, `error`, and `none`. This does not affect the log level of your trigger.dev tasks. Defaults to `log`.

[​](https://trigger.dev/docs/cli-init-commands#param-skip-telemetry)

Skip telemetry

\--skip-telemetry

Opt-out of sending telemetry data. This can also be done via the `TRIGGER_TELEMETRY_DISABLED` environment variable. Just set it to anything other than an empty string.

[​](https://trigger.dev/docs/cli-init-commands#param-help)

Help

\--help | -h

Shows the help information for the command.

[​](https://trigger.dev/docs/cli-init-commands#param-version)

Version

\--version | -v

Displays the version number of the CLI.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/cli-dev-commands)
[list-profilesUse these options when using the \`list-profiles\` CLI command.\
\
Next](https://trigger.dev/docs/cli-list-profiles-commands)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
