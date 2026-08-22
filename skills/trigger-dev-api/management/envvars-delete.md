# Delete Env Var

> Source: https://trigger.dev/docs/management/envvars/delete

DELETE

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

    import { envvars } from "@trigger.dev/sdk";
    
    await envvars.del("proj_yubjwjsfkxnylobaqvqz", "dev", "SLACK_API_KEY");

200

400

401

404

    {
      "success": true
    }

#### Authorizations

secretKeypersonalAccessTokensecretKeypersonalAccessToken

[​](https://trigger.dev/docs/management/envvars/delete#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/envvars/delete#parameter-project-ref)

projectRef

string

required

The external ref of the project. You can find this in the project settings. Starts with `proj_`.

[​](https://trigger.dev/docs/management/envvars/delete#parameter-env)

env

enum<string>

required

The environment of the project to list variables for.

Available options:

`dev`,

`staging`,

`prod`

[​](https://trigger.dev/docs/management/envvars/delete#parameter-name)

name

string

required

The name of the environment variable.

#### Response

200

application/json

Environment variable deleted successfully

[​](https://trigger.dev/docs/management/envvars/delete#response-success)

success

boolean

required

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/envvars/update)
[List deploymentsList all deployments for the authenticated environment, ordered by most recent first.\
\
Next](https://trigger.dev/docs/management/deployments/list)

Ctrl+I

TypeScript

Outside of a task

    import { envvars } from "@trigger.dev/sdk";
    
    await envvars.del("proj_yubjwjsfkxnylobaqvqz", "dev", "SLACK_API_KEY");

200

400

401

404

    {
      "success": true
    }

Assistant

Responses are generated using AI and may contain mistakes.
