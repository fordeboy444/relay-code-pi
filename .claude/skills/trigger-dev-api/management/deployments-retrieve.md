# Get deployment

> Source: https://trigger.dev/docs/management/deployments/retrieve

GET

/

api

/

v1

/

deployments

/

{deploymentId}

TypeScript

TypeScript

    const response = await fetch(
      `https://api.trigger.dev/api/v1/deployments/${deploymentId}`,
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
      "imagePlatform": "<string>",
      "externalBuildData": {},
      "errorData": {},
      "worker": {
        "id": "<string>",
        "version": "<string>",
        "tasks": [\
          {\
            "id": "<string>",\
            "slug": "<string>",\
            "filePath": "<string>",\
            "exportName": "<string>"\
          }\
        ]
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/deployments/retrieve#authorization-authorization)

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

[​](https://trigger.dev/docs/management/deployments/retrieve#parameter-deployment-id)

deploymentId

string

required

The deployment ID.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/deployments/retrieve#response-id)

id

string

The deployment ID

[​](https://trigger.dev/docs/management/deployments/retrieve#response-status)

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

[​](https://trigger.dev/docs/management/deployments/retrieve#response-content-hash)

contentHash

string

Hash of the deployment content

[​](https://trigger.dev/docs/management/deployments/retrieve#response-short-code)

shortCode

string

The short code for the deployment

[​](https://trigger.dev/docs/management/deployments/retrieve#response-version)

version

string

The deployment version (e.g., "20250228.1")

[​](https://trigger.dev/docs/management/deployments/retrieve#response-image-reference-one-of-0)

imageReference

string | null

Reference to the deployment image

[​](https://trigger.dev/docs/management/deployments/retrieve#response-image-platform)

imagePlatform

string

Platform of the deployment image

[​](https://trigger.dev/docs/management/deployments/retrieve#response-external-build-data-one-of-0)

externalBuildData

object

External build data if applicable

[​](https://trigger.dev/docs/management/deployments/retrieve#response-error-data-one-of-0)

errorData

object

Error data if the deployment failed

[​](https://trigger.dev/docs/management/deployments/retrieve#response-worker-one-of-0)

worker

object

Worker information if available

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/deployments/list)
[Get latest deploymentRetrieve information about the latest unmanaged deployment for the authenticated project.\
\
Next](https://trigger.dev/docs/management/deployments/get-latest)

⌘I

TypeScript

TypeScript

    const response = await fetch(
      `https://api.trigger.dev/api/v1/deployments/${deploymentId}`,
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
      "imagePlatform": "<string>",
      "externalBuildData": {},
      "errorData": {},
      "worker": {
        "id": "<string>",
        "version": "<string>",
        "tasks": [\
          {\
            "id": "<string>",\
            "slug": "<string>",\
            "filePath": "<string>",\
            "exportName": "<string>"\
          }\
        ]
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
