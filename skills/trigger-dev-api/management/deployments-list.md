# List deployments

> Source: https://trigger.dev/docs/management/deployments/list

GET

/

api

/

v1

/

deployments

TypeScript

TypeScript

    const response = await fetch(
      "https://api.trigger.dev/api/v1/deployments",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
        },
      }
    );
    const { data, pagination } = await response.json();

200

    {
      "data": [\
        {\
          "id": "<string>",\
          "createdAt": "2023-11-07T05:31:56Z",\
          "shortCode": "<string>",\
          "version": "<string>",\
          "runtime": "<string>",\
          "runtimeVersion": "<string>",\
          "deployedAt": "2023-11-07T05:31:56Z",\
          "git": {},\
          "error": {}\
        }\
      ],
      "pagination": {
        "next": "<string>"
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/deployments/list#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Query Parameters

[​](https://trigger.dev/docs/management/deployments/list#parameter-page-after)

page\[after\]

string

The deployment ID to start the search from, to get the next page.

[​](https://trigger.dev/docs/management/deployments/list#parameter-page-size)

page\[size\]

integer

default:20

The number of deployments to return (default 20, min 5, max 100).

Required range: `5 <= x <= 100`

[​](https://trigger.dev/docs/management/deployments/list#parameter-status)

status

enum<string>

Filter deployments by status.

Available options:

`PENDING`,

`BUILDING`,

`DEPLOYING`,

`DEPLOYED`,

`FAILED`,

`CANCELED`,

`TIMED_OUT`

[​](https://trigger.dev/docs/management/deployments/list#parameter-period)

period

string

Filter deployments created within this period (e.g. 1d, 7d, 3h).

[​](https://trigger.dev/docs/management/deployments/list#parameter-from)

from

string

Filter deployments created on or after this date (ISO 8601).

[​](https://trigger.dev/docs/management/deployments/list#parameter-to)

to

string

Filter deployments created on or before this date (ISO 8601). Only applied when `from` is also provided.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/deployments/list#response-data)

data

object\[\]

Show child attributes

[​](https://trigger.dev/docs/management/deployments/list#response-pagination)

pagination

object

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/envvars/delete)
[Get deploymentRetrieve information about a specific deployment by its ID.\
\
Next](https://trigger.dev/docs/management/deployments/retrieve)

⌘I

TypeScript

TypeScript

    const response = await fetch(
      "https://api.trigger.dev/api/v1/deployments",
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${secretKey}`,
        },
      }
    );
    const { data, pagination } = await response.json();

200

    {
      "data": [\
        {\
          "id": "<string>",\
          "createdAt": "2023-11-07T05:31:56Z",\
          "shortCode": "<string>",\
          "version": "<string>",\
          "runtime": "<string>",\
          "runtimeVersion": "<string>",\
          "deployedAt": "2023-11-07T05:31:56Z",\
          "git": {},\
          "error": {}\
        }\
      ],
      "pagination": {
        "next": "<string>"
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
