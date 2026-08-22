# CLI promote command

> Source: https://trigger.dev/docs/cli-promote-commands

Run the command like this:

npm

pnpm

yarn

    npx trigger.dev@latest promote [version]
    

[​](https://trigger.dev/docs/cli-promote-commands#arguments)

Arguments
-------------------------------------------------------------------------

    npx trigger.dev@latest promote [version]
    

[​](https://trigger.dev/docs/cli-promote-commands#param-deployment-version)

Deployment version

\[version\]

The version to promote. This is the version that was previously deployed.

### 

[​](https://trigger.dev/docs/cli-promote-commands#common-options)

Common options

These options are available on most commands.

[​](https://trigger.dev/docs/cli-promote-commands#param-login-profile)

Login profile

\--profile

The login profile to use. Defaults to “default”.

[​](https://trigger.dev/docs/cli-promote-commands#param-api-url)

API URL

\--api-url | -a

Override the default API URL. If not specified, it uses `https://api.trigger.dev`. This can also be set via the `TRIGGER_API_URL` environment variable.

[​](https://trigger.dev/docs/cli-promote-commands#param-log-level)

Log level

\--log-level | -l

The CLI log level to use. Options are `debug`, `info`, `log`, `warn`, `error`, and `none`. This does not affect the log level of your trigger.dev tasks. Defaults to `log`.

[​](https://trigger.dev/docs/cli-promote-commands#param-skip-telemetry)

Skip telemetry

\--skip-telemetry

Opt-out of sending telemetry data. This can also be done via the `TRIGGER_TELEMETRY_DISABLED` environment variable. Just set it to anything other than an empty string.

[​](https://trigger.dev/docs/cli-promote-commands#param-help)

Help

\--help | -h

Shows the help information for the command.

[​](https://trigger.dev/docs/cli-promote-commands#param-version)

Version

\--version | -v

Displays the version number of the CLI.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/cli-preview-archive)
[switchThe \`trigger.dev switch\` command can be used to switch between profiles.\
\
Next](https://trigger.dev/docs/cli-switch)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
