# List sessions

> Source: https://trigger.dev/docs/management/sessions/list

GET

/

api

/

v1

/

sessions

List sessions

TypeScript

    import { sessions } from "@trigger.dev/sdk";
    
    for await (const session of sessions.list({
      type: "chat.agent",
      status: "ACTIVE",
      limit: 50,
    })) {
      console.log(session.id, session.externalId, session.createdAt);
    }

200

400

    {
      "data": [\
        {\
          "id": "session_abc123",\
          "type": "chat.agent",\
          "taskIdentifier": "my-chat",\
          "tags": [\
            "chat:1234"\
          ],\
          "createdAt": "2023-11-07T05:31:56Z",\
          "updatedAt": "2023-11-07T05:31:56Z",\
          "externalId": "chat_1234",\
          "triggerConfig": {\
            "basePayload": {},\
            "machine": "small-1x",\
            "queue": "<string>",\
            "tags": [\
              "<string>"\
            ],\
            "maxAttempts": 5,\
            "maxDuration": 2,\
            "lockToVersion": "20240523.1",\
            "region": "<string>",\
            "idleTimeoutInSeconds": 1800\
          },\
          "currentRunId": "run_def456",\
          "metadata": {},\
          "closedAt": "2023-11-07T05:31:56Z",\
          "closedReason": "<string>",\
          "expiresAt": "2023-11-07T05:31:56Z"\
        }\
      ],
      "pagination": {
        "next": "session_abc123",
        "previous": "session_xyz789"
      }
    }

#### Authorizations

secretKeypublicAccessTokensecretKeypublicAccessToken

[​](https://trigger.dev/docs/management/sessions/list#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Query Parameters

[​](https://trigger.dev/docs/management/sessions/list#parameter-page)

page

object

Paginate the results. Specify the number of sessions per page, and the ID of the session to start the page after or before.

For object fields like `page`, use the "form" encoding style. For example, to get the next page, use `page[after]=session_1234`.

Show child attributes

[​](https://trigger.dev/docs/management/sessions/list#parameter-filter)

filter

object

Use this parameter to filter the sessions. You can filter by type, tags, task identifier, external id, status, and created at.

For array fields, you can provide multiple values to filter by using a comma-separated list. For example, to get ACTIVE and CLOSED sessions, you can use `filter[status]=ACTIVE,CLOSED`.

For object fields, you should use the "form" encoding style. For example, to filter by the period, you can use `filter[createdAt][period]=1d`.

Show child attributes

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/sessions/list#response-data)

data

object\[\]

Show child attributes

[​](https://trigger.dev/docs/management/sessions/list#response-pagination)

pagination

object

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/sessions/create)
[Retrieve sessionRetrieve a single session by its friendly id (\`session\_…\`) or your \`externalId\`. The response includes \`triggerConfig\` and the friendly \`currentRunId\` of the live run, if any.\
\
Next](https://trigger.dev/docs/management/sessions/retrieve)

Ctrl+I

List sessions

TypeScript

    import { sessions } from "@trigger.dev/sdk";
    
    for await (const session of sessions.list({
      type: "chat.agent",
      status: "ACTIVE",
      limit: 50,
    })) {
      console.log(session.id, session.externalId, session.createdAt);
    }

200

400

    {
      "data": [\
        {\
          "id": "session_abc123",\
          "type": "chat.agent",\
          "taskIdentifier": "my-chat",\
          "tags": [\
            "chat:1234"\
          ],\
          "createdAt": "2023-11-07T05:31:56Z",\
          "updatedAt": "2023-11-07T05:31:56Z",\
          "externalId": "chat_1234",\
          "triggerConfig": {\
            "basePayload": {},\
            "machine": "small-1x",\
            "queue": "<string>",\
            "tags": [\
              "<string>"\
            ],\
            "maxAttempts": 5,\
            "maxDuration": 2,\
            "lockToVersion": "20240523.1",\
            "region": "<string>",\
            "idleTimeoutInSeconds": 1800\
          },\
          "currentRunId": "run_def456",\
          "metadata": {},\
          "closedAt": "2023-11-07T05:31:56Z",\
          "closedReason": "<string>",\
          "expiresAt": "2023-11-07T05:31:56Z"\
        }\
      ],
      "pagination": {
        "next": "session_abc123",
        "previous": "session_xyz789"
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
