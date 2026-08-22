# List Env Vars

> Source: https://trigger.dev/docs/management/envvars/list

GET

/

api

/

v1

/

projects

/

{projectRef}

/

envvars

/

{env}

TypeScript

Outside of a task

import { envvars, configure } from "@trigger.dev/sdk"; const variables = await envvars.list("proj\_yubjwjsfkxnylobaqvqz", "dev"); for (const variable of variables) { console.log(\`Name: ${variable.name}, Value: ${variable.value}\`); }

200

400

401

404

    [\
      {\
        "name": "SLACK_API_KEY",\
        "value": "slack_123456"\
      }\
    ]

#### Authorizations

secretKeypersonalAccessTokensecretKeypersonalAccessToken

[​](https://trigger.dev/docs/management/envvars/list#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Path Parameters

[​](https://trigger.dev/docs/management/envvars/list#parameter-project-ref)

projectRef

string

required

The external ref of the project. You can find this in the project settings. Starts with `proj_`.

[​](https://trigger.dev/docs/management/envvars/list#parameter-env)

env

enum<string>

required

The environment of the project to list variables for.

Available options:

`dev`,

`staging`,

`prod`

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/envvars/list#response-items-name)

name

string

required

Example:

`"SLACK_API_KEY"`

[​](https://trigger.dev/docs/management/envvars/list#response-items-value)

value

string

required

Example:

`"slack_123456"`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/schedules/timezones)
[Import Env VarsUpload mulitple environment variables for a specific project and environment.\
\
Next](https://trigger.dev/docs/management/envvars/import)

⌘I

TypeScript

Outside of a task

import { envvars, configure } from "@trigger.dev/sdk"; const variables = await envvars.list("proj\_yubjwjsfkxnylobaqvqz", "dev"); for (const variable of variables) { console.log(\`Name: ${variable.name}, Value: ${variable.value}\`); }

200

400

401

404

    [\
      {\
        "name": "SLACK_API_KEY",\
        "value": "slack_123456"\
      }\
    ]

Assistant

Responses are generated using AI and may contain mistakes.
