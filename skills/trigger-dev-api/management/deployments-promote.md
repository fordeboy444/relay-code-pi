# Promote deployment

> Source: https://trigger.dev/docs/management/deployments/promote

POST

/

api

/

v1

/

deployments

/

{version}

/

promote

TypeScript

TypeScript

    const response = await fetch(
      `https://api.trigger.dev/api/v1/deployments/${version}/promote`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();

200

400

    {
      "id": "<string>",
      "version": "<string>",
      "shortCode": "<string>"
    }

#### Authorizations

[​](https://trigger.dev/docs/management/deployments/promote#authorization-authorization)

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

[​](https://trigger.dev/docs/management/deployments/promote#parameter-version)

version

string

required

The deployment version to promote (e.g., "20250228.1").

#### Response

200

application/json

Deployment promoted successfully

[​](https://trigger.dev/docs/management/deployments/promote#response-id)

id

string

The deployment ID

[​](https://trigger.dev/docs/management/deployments/promote#response-version)

version

string

The deployment version (e.g., "20250228.1")

[​](https://trigger.dev/docs/management/deployments/promote#response-short-code)

shortCode

string

The short code for the deployment

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/deployments/get-latest)
[Create a waitpoint tokenCreates a new waitpoint token that can be used to pause a run until an external event completes it. The token includes a \`url\` which can be called via HTTP POST to complete the waitpoint. Use the token ID with \`wait.forToken()\` inside a task to pause execution until the token is completed.\
\
Next](https://trigger.dev/docs/management/waitpoints/create)

⌘I

TypeScript

TypeScript

    const response = await fetch(
      `https://api.trigger.dev/api/v1/deployments/${version}/promote`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();

200

400

    {
      "id": "<string>",
      "version": "<string>",
      "shortCode": "<string>"
    }

Assistant

Responses are generated using AI and may contain mistakes.
