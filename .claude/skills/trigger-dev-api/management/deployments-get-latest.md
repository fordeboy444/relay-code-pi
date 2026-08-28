# Get latest deployment

> Source: https://trigger.dev/docs/management/deployments/get-latest

GET

/

api

/

v1

/

deployments

/

latest

TypeScript

TypeScript

    const response = await fetch(
      "https://api.trigger.dev/api/v1/deployments/latest",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
        },
      }
    );
    const deployment = await response.json();

200

    {
      "id": "<string>",
      "contentHash": "<string>",
      "shortCode": "<string>",
      "version": "<string>",
      "imageReference": "<string>",
      "errorData": {}
    }

This endpoint only returns **unmanaged** deployments, which are used in self-hosted setups. It will return `404` for standard CLI deployments made against Trigger.dev Cloud.If you’re using the CLI to deploy, use the [list deployments](https://trigger.dev/docs/management/deployments/list)
 endpoint instead.

#### Authorizations

[​](https://trigger.dev/docs/management/deployments/get-latest#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/deployments/get-latest#response-id)

id

string

The deployment ID

[​](https://trigger.dev/docs/management/deployments/get-latest#response-status)

status

enum<string>

The current status of the deployment

Available options:

`PENDING`,

`INSTALLING`,

`BUILDING`,

`DEPLOYING`,

`DEPLOYED`,

`FAILED`,

`CANCELED`,

`TIMED_OUT`

[​](https://trigger.dev/docs/management/deployments/get-latest#response-content-hash)

contentHash

string

Hash of the deployment content

[​](https://trigger.dev/docs/management/deployments/get-latest#response-short-code)

shortCode

string

The short code for the deployment

[​](https://trigger.dev/docs/management/deployments/get-latest#response-version)

version

string

The deployment version (e.g., "20250228.1")

[​](https://trigger.dev/docs/management/deployments/get-latest#response-image-reference-one-of-0)

imageReference

string | null

Reference to the deployment image

[​](https://trigger.dev/docs/management/deployments/get-latest#response-error-data-one-of-0)

errorData

object

Error data if the deployment failed

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/deployments/retrieve)
[Promote deploymentPromote a previously deployed version to be the current version for the environment. This makes the specified version active for new task runs.\
\
Next](https://trigger.dev/docs/management/deployments/promote)

⌘I

TypeScript

TypeScript

    const response = await fetch(
      "https://api.trigger.dev/api/v1/deployments/latest",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
        },
      }
    );
    const deployment = await response.json();

200

    {
      "id": "<string>",
      "contentHash": "<string>",
      "shortCode": "<string>",
      "version": "<string>",
      "imageReference": "<string>",
      "errorData": {}
    }

Assistant

Responses are generated using AI and may contain mistakes.
