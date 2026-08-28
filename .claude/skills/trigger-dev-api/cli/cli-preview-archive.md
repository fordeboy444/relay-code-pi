# CLI preview archive command

> Source: https://trigger.dev/docs/cli-preview-archive

Run the command like this:

npm

pnpm

yarn

    npx trigger.dev@latest preview archive
    

It will archive the preview branch, automatically detecting the branch name from git. You can manually specify the branch using the `--branch` option.

[​](https://trigger.dev/docs/cli-preview-archive#arguments)

Arguments
------------------------------------------------------------------------

    npx trigger.dev@latest preview archive [path]
    

[​](https://trigger.dev/docs/cli-preview-archive#param-project-path)

Project path

\[path\]

The path to the project. Defaults to the current directory.

[​](https://trigger.dev/docs/cli-preview-archive#options)

Options
--------------------------------------------------------------------

[​](https://trigger.dev/docs/cli-preview-archive#param-preview-branch)

Preview branch

\--branch | -b

When using `--env preview` the branch is automatically detected from git. But you can manually specify it by using this option, e.g. `--branch my-branch` or `-b my-branch`.

[​](https://trigger.dev/docs/cli-preview-archive#param-config-file)

Config file

\--config | -c

The name of the config file found at the project path. Defaults to `trigger.config.ts`

[​](https://trigger.dev/docs/cli-preview-archive#param-project-ref)

Project ref

\--project-ref | -p

The project ref. Required if there is no config file.

[​](https://trigger.dev/docs/cli-preview-archive#param-env-file)

Env file

\--env-file

Load environment variables from a file. This will only hydrate the `process.env` of the CLI process, not the tasks.

[​](https://trigger.dev/docs/cli-preview-archive#param-skip-update-check)

Skip update check

\--skip-update-check

Skip checking for `@trigger.dev` package updates.

### 

[​](https://trigger.dev/docs/cli-preview-archive#common-options)

Common options

These options are available on most commands.

[​](https://trigger.dev/docs/cli-preview-archive#param-login-profile)

Login profile

\--profile

The login profile to use. Defaults to “default”.

[​](https://trigger.dev/docs/cli-preview-archive#param-api-url)

API URL

\--api-url | -a

Override the default API URL. If not specified, it uses `https://api.trigger.dev`. This can also be set via the `TRIGGER_API_URL` environment variable.

[​](https://trigger.dev/docs/cli-preview-archive#param-log-level)

Log level

\--log-level | -l

The CLI log level to use. Options are `debug`, `info`, `log`, `warn`, `error`, and `none`. This does not affect the log level of your trigger.dev tasks. Defaults to `log`.

[​](https://trigger.dev/docs/cli-preview-archive#param-skip-telemetry)

Skip telemetry

\--skip-telemetry

Opt-out of sending telemetry data. This can also be done via the `TRIGGER_TELEMETRY_DISABLED` environment variable. Just set it to anything other than an empty string.

[​](https://trigger.dev/docs/cli-preview-archive#param-help)

Help

\--help | -h

Shows the help information for the command.

[​](https://trigger.dev/docs/cli-preview-archive#param-version)

Version

\--version | -v

Displays the version number of the CLI.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/cli-logout-commands)
[promoteUse the promote command to promote a previously deployed version to the current version.\
\
Next](https://trigger.dev/docs/cli-promote-commands)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
