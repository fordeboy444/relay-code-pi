# Create session

> Source: https://trigger.dev/docs/management/sessions/create

POST

/

api

/

v1

/

sessions

Start a session

TypeScript

    import { sessions } from "@trigger.dev/sdk";
    
    const { id, runId, publicAccessToken, isCached } = await sessions.start({
      type: "chat.agent",
      externalId: chatId,
      taskIdentifier: "my-chat",
      triggerConfig: {
        basePayload: { chatId },
        tags: [`chat:${chatId}`],
      },
    });
    
    console.log(id);       // e.g. "session_abc123"
    console.log(runId);    // the first run, e.g. "run_def456"
    console.log(isCached); // false on a brand-new session

200

201

409

422

    {
      "id": "session_abc123",
      "type": "chat.agent",
      "taskIdentifier": "my-chat",
      "tags": [\
        "chat:1234"\
      ],
      "createdAt": "2023-11-07T05:31:56Z",
      "updatedAt": "2023-11-07T05:31:56Z",
      "runId": "run_def456",
      "publicAccessToken": "<string>",
      "isCached": true,
      "externalId": "chat_1234",
      "triggerConfig": {
        "basePayload": {},
        "machine": "small-1x",
        "queue": "<string>",
        "tags": [\
          "<string>"\
        ],
        "maxAttempts": 5,
        "maxDuration": 2,
        "lockToVersion": "20240523.1",
        "region": "<string>",
        "idleTimeoutInSeconds": 1800
      },
      "currentRunId": "run_def456",
      "metadata": {},
      "closedAt": "2023-11-07T05:31:56Z",
      "closedReason": "<string>",
      "expiresAt": "2023-11-07T05:31:56Z"
    }

#### Authorizations

secretKeypublicAccessTokensecretKeypublicAccessToken

[​](https://trigger.dev/docs/management/sessions/create#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Body

application/json

Body for `POST /api/v1/sessions`. The whole body must be 32KB or smaller.

[​](https://trigger.dev/docs/management/sessions/create#body-type)

type

string

required

Free-form discriminator for the session, e.g. `chat.agent`. Not validated against an enum.

Required string length: `1 - 64`

Example:

`"chat.agent"`

[​](https://trigger.dev/docs/management/sessions/create#body-task-identifier)

taskIdentifier

string

required

The task this session triggers runs against.

Required string length: `1 - 128`

Example:

`"my-chat"`

[​](https://trigger.dev/docs/management/sessions/create#body-trigger-config)

triggerConfig

object

required

Trigger options applied to every run a session schedules. `basePayload` is the wire payload merged into each run; the remaining fields map onto the standard trigger options.

Show child attributes

[​](https://trigger.dev/docs/management/sessions/create#body-external-id)

externalId

string

Your stable identity for the session, unique per environment. Cannot start with the reserved `session_` prefix. Reusing an `externalId` makes create idempotent; reusing one whose session is closed or expired returns `409`.

Required string length: `1 - 256`

Example:

`"chat_1234"`

[​](https://trigger.dev/docs/management/sessions/create#body-tags)

tags

string\[\]

Up to 10 tags on the session row, for dashboard filtering.

Maximum array length: `10`

Maximum string length: `128`

[​](https://trigger.dev/docs/management/sessions/create#body-metadata)

metadata

object

Arbitrary JSON metadata.

[​](https://trigger.dev/docs/management/sessions/create#body-expires-at)

expiresAt

string<date-time>

Absolute expiry timestamp for retention.

#### Response

200

application/json

An open session already existed for this `externalId`. The existing session is returned with `isCached: true`.

A session row.

[​](https://trigger.dev/docs/management/sessions/create#response-id)

id

string

required

The session's friendly ID, prefixed with `session_`.

Example:

`"session_abc123"`

[​](https://trigger.dev/docs/management/sessions/create#response-type)

type

string

required

The session type discriminator.

Example:

`"chat.agent"`

[​](https://trigger.dev/docs/management/sessions/create#response-task-identifier)

taskIdentifier

string

required

The task this session triggers runs against.

Example:

`"my-chat"`

[​](https://trigger.dev/docs/management/sessions/create#response-tags)

tags

string\[\]

required

Tags on the session row.

Example:

    ["chat:1234"]
    

[​](https://trigger.dev/docs/management/sessions/create#response-created-at)

createdAt

string<date-time>

required

[​](https://trigger.dev/docs/management/sessions/create#response-updated-at)

updatedAt

string<date-time>

required

[​](https://trigger.dev/docs/management/sessions/create#response-run-id)

runId

string

required

Friendly ID of the first run triggered alongside the session.

Example:

`"run_def456"`

[​](https://trigger.dev/docs/management/sessions/create#response-public-access-token)

publicAccessToken

string

required

Session-scoped public access token carrying `read:sessions:{key}` and `write:sessions:{key}`. Default TTL is 1 hour. Safe to pass to frontend clients.

[​](https://trigger.dev/docs/management/sessions/create#response-is-cached)

isCached

boolean

required

`true` if an open session already existed for this `externalId` (idempotent upsert), `false` if newly created.

[​](https://trigger.dev/docs/management/sessions/create#response-external-id-one-of-0)

externalId

string | null

Your stable identity for the session, if one was set.

Example:

`"chat_1234"`

[​](https://trigger.dev/docs/management/sessions/create#response-trigger-config)

triggerConfig

object

Trigger options applied to every run a session schedules. `basePayload` is the wire payload merged into each run; the remaining fields map onto the standard trigger options.

Show child attributes

[​](https://trigger.dev/docs/management/sessions/create#response-current-run-id-one-of-0)

currentRunId

string | null

Friendly ID of the live run for this session, if any. Prefixed with `run_`. Omitted on list rows.

Example:

`"run_def456"`

[​](https://trigger.dev/docs/management/sessions/create#response-metadata-one-of-0)

metadata

object

Arbitrary JSON metadata, or `null` if unset.

[​](https://trigger.dev/docs/management/sessions/create#response-closed-at-one-of-0)

closedAt

string<date-time> | null

When the session was closed, or `null` if open.

[​](https://trigger.dev/docs/management/sessions/create#response-closed-reason-one-of-0)

closedReason

string | null

The optional reason recorded when the session was closed.

[​](https://trigger.dev/docs/management/sessions/create#response-expires-at-one-of-0)

expiresAt

string<date-time> | null

The session's retention deadline, or `null` if none.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/waitpoints/complete-callback)
[List sessionsList sessions in the current environment, newest first. Filter by type, tags, task identifier, external id, status, and creation window. Use cursor-based pagination with \`page\[after\]\` and \`page\[before\]\` to navigate pages. List rows omit \`triggerConfig\`; retrieve a single session to read it.\
\
Next](https://trigger.dev/docs/management/sessions/list)

⌘I

Start a session

TypeScript

    import { sessions } from "@trigger.dev/sdk";
    
    const { id, runId, publicAccessToken, isCached } = await sessions.start({
      type: "chat.agent",
      externalId: chatId,
      taskIdentifier: "my-chat",
      triggerConfig: {
        basePayload: { chatId },
        tags: [`chat:${chatId}`],
      },
    });
    
    console.log(id);       // e.g. "session_abc123"
    console.log(runId);    // the first run, e.g. "run_def456"
    console.log(isCached); // false on a brand-new session

200

201

409

422

    {
      "id": "session_abc123",
      "type": "chat.agent",
      "taskIdentifier": "my-chat",
      "tags": [\
        "chat:1234"\
      ],
      "createdAt": "2023-11-07T05:31:56Z",
      "updatedAt": "2023-11-07T05:31:56Z",
      "runId": "run_def456",
      "publicAccessToken": "<string>",
      "isCached": true,
      "externalId": "chat_1234",
      "triggerConfig": {
        "basePayload": {},
        "machine": "small-1x",
        "queue": "<string>",
        "tags": [\
          "<string>"\
        ],
        "maxAttempts": 5,
        "maxDuration": 2,
        "lockToVersion": "20240523.1",
        "region": "<string>",
        "idleTimeoutInSeconds": 1800
      },
      "currentRunId": "run_def456",
      "metadata": {},
      "closedAt": "2023-11-07T05:31:56Z",
      "closedReason": "<string>",
      "expiresAt": "2023-11-07T05:31:56Z"
    }

Assistant

Responses are generated using AI and may contain mistakes.
