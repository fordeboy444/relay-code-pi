# Retrieve Env Var

> Source: https://trigger.dev/docs/management/envvars/retrieve

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

/

{name}

TypeScript

Outside of a task

import { envvars } from "@trigger.dev/sdk"; const variable = await envvars.retrieve("proj\_yubjwjsfkxnylobaqvqz", "dev", "SLACK\_API\_KEY"); console.log(\`Value: ${variable.value}\`);

200

400

401

404

    {
      "value": "slack_123456"
    }

#### Authorizations

secretKeypersonalAccessTokensecretKeypersonalAccessToken

[​](https://trigger.dev/docs/management/envvars/retrieve#authorization-authorization)

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

[​](https://trigger.dev/docs/management/envvars/retrieve#parameter-project-ref)

projectRef

string

required

The external ref of the project. You can find this in the project settings. Starts with `proj_`.

[​](https://trigger.dev/docs/management/envvars/retrieve#parameter-env)

env

enum<string>

required

The environment of the project to list variables for.

Available options:

`dev`,

`staging`,

`prod`

[​](https://trigger.dev/docs/management/envvars/retrieve#parameter-name)

name

string

required

The name of the environment variable.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/envvars/retrieve#response-value)

value

string

required

Example:

`"slack_123456"`

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/envvars/create)
[Update Env VarUpdate a specific environment variable for a specific project and environment.\
\
Next](https://trigger.dev/docs/management/envvars/update)

⌘I

TypeScript

Outside of a task

import { envvars } from "@trigger.dev/sdk"; const variable = await envvars.retrieve("proj\_yubjwjsfkxnylobaqvqz", "dev", "SLACK\_API\_KEY"); console.log(\`Value: ${variable.value}\`);

200

400

401

404

    {
      "value": "slack_123456"
    }

Assistant

Responses are generated using AI and may contain mistakes.
