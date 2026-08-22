# Import Env Vars

> Source: https://trigger.dev/docs/management/envvars/import

POST

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

import

Import variables from an array

TypeScript

    import { envvars } from "@trigger.dev/sdk";
    
    await envvars.upload("proj_yubjwjsfkxnylobaqvqz", "dev", {
      variables: { SLACK_API_KEY: "slack_key_1234" },
      override: false
    });

200

400

401

404

    {
      "success": true
    }

#### Authorizations

secretKeypersonalAccessTokensecretKeypersonalAccessToken

[​](https://trigger.dev/docs/management/envvars/import#authorization-authorization)

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

[​](https://trigger.dev/docs/management/envvars/import#parameter-project-ref)

projectRef

string

required

The external ref of the project. You can find this in the project settings. Starts with `proj_`.

[​](https://trigger.dev/docs/management/envvars/import#parameter-env)

env

enum<string>

required

The environment of the project to list variables for.

Available options:

`dev`,

`staging`,

`prod`

#### Body

application/json

[​](https://trigger.dev/docs/management/envvars/import#body-variables)

variables

object\[\]

required

Show child attributes

[​](https://trigger.dev/docs/management/envvars/import#body-override)

override

boolean

default:false

Whether to override existing variables or not

#### Response

200

application/json

Environment variables imported successfully

[​](https://trigger.dev/docs/management/envvars/import#response-success)

success

boolean

required

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/envvars/list)
[Create Env VarCreate a new environment variable for a specific project and environment.\
\
Next](https://trigger.dev/docs/management/envvars/create)

⌘I

Import variables from an array

TypeScript

    import { envvars } from "@trigger.dev/sdk";
    
    await envvars.upload("proj_yubjwjsfkxnylobaqvqz", "dev", {
      variables: { SLACK_API_KEY: "slack_key_1234" },
      override: false
    });

200

400

401

404

    {
      "success": true
    }

Assistant

Responses are generated using AI and may contain mistakes.
