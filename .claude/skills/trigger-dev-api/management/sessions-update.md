# Update session

> Source: https://trigger.dev/docs/management/sessions/update

PATCH

/

api

/

v1

/

sessions

/

{session}

Update a session

TypeScript

    import { sessions } from "@trigger.dev/sdk";
    
    const session = await sessions.update(chatId, {
      tags: ["priority"],
      metadata: { lastSeenBy: "support" },
    });

200

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

[​](https://trigger.dev/docs/management/sessions/update#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/sessions/update#parameter-session)

session

string

required

The session's friendly ID (`session_…`) or your `externalId`. The server disambiguates by the `session_` prefix.

#### Body

application/json

Body for `PATCH /api/v1/sessions/{session}`. The whole body must be 32KB or smaller. Every field is optional; omitted fields are left unchanged.

[​](https://trigger.dev/docs/management/sessions/update#body-tags)

tags

string\[\]

Replaces the tags on the session row.

Maximum array length: `10`

Maximum string length: `128`

[​](https://trigger.dev/docs/management/sessions/update#body-metadata-one-of-0)

metadata

object

Replaces the metadata. Pass `null` to clear it.

[​](https://trigger.dev/docs/management/sessions/update#body-external-id-one-of-0)

externalId

string | null

Read-only after create: cannot be changed or cleared. Sending a value different from the current one (including `null` when one is set) returns `422`; sending the same value is idempotent.

Required string length: `1 - 256`

#### Response

200

application/json

Session updated successfully

A session row.

[​](https://trigger.dev/docs/management/sessions/update#response-id)

id

string

required

The session's friendly ID, prefixed with `session_`.

Example:

`"session_abc123"`

[​](https://trigger.dev/docs/management/sessions/update#response-type)

type

string

required

The session type discriminator.

Example:

`"chat.agent"`

[​](https://trigger.dev/docs/management/sessions/update#response-task-identifier)

taskIdentifier

string

required

The task this session triggers runs against.

Example:

`"my-chat"`

[​](https://trigger.dev/docs/management/sessions/update#response-tags)

tags

string\[\]

required

Tags on the session row.

Example:

    ["chat:1234"]

[​](https://trigger.dev/docs/management/sessions/update#response-created-at)

createdAt

string<date-time>

required

[​](https://trigger.dev/docs/management/sessions/update#response-updated-at)

updatedAt

string<date-time>

required

[​](https://trigger.dev/docs/management/sessions/update#response-external-id-one-of-0)

externalId

string | null

Your stable identity for the session, if one was set.

Example:

`"chat_1234"`

[​](https://trigger.dev/docs/management/sessions/update#response-trigger-config)

triggerConfig

object

Trigger options applied to every run a session schedules. `basePayload` is the wire payload merged into each run; the remaining fields map onto the standard trigger options.

Show child attributes

[​](https://trigger.dev/docs/management/sessions/update#response-current-run-id-one-of-0)

currentRunId

string | null

Friendly ID of the live run for this session, if any. Prefixed with `run_`. Omitted on list rows.

Example:

`"run_def456"`

[​](https://trigger.dev/docs/management/sessions/update#response-metadata-one-of-0)

metadata

object

Arbitrary JSON metadata, or `null` if unset.

[​](https://trigger.dev/docs/management/sessions/update#response-closed-at-one-of-0)

closedAt

string<date-time> | null

When the session was closed, or `null` if open.

[​](https://trigger.dev/docs/management/sessions/update#response-closed-reason-one-of-0)

closedReason

string | null

The optional reason recorded when the session was closed.

[​](https://trigger.dev/docs/management/sessions/update#response-expires-at-one-of-0)

expiresAt

string<date-time> | null

The session's retention deadline, or `null` if none.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/sessions/retrieve)
[Close sessionClose a session. Closing is terminal and idempotent — closing an already-closed session returns the existing row unchanged. A closed session cannot be reopened, and reusing its \`externalId\` on create returns \`409\`. Requires a secret key — a session public token cannot close a session.\
\
Next](https://trigger.dev/docs/management/sessions/close)

Ctrl+I

Update a session

TypeScript

    import { sessions } from "@trigger.dev/sdk";
    
    const session = await sessions.update(chatId, {
      tags: ["priority"],
      metadata: { lastSeenBy: "support" },
    });

200

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
