# Retrieve run

> Source: https://trigger.dev/docs/management/runs/retrieve

GET

/

api

/

v3

/

runs

/

{runId}

TypeScript

TypeScript

    import { runs } from "@trigger.dev/sdk";
    
    const result = await runs.retrieve("run_1234");
    
    // We include boolean helpers to check the status of the run
    // (isSuccess, isFailed, isCompleted, etc.)
    if (result.isSuccess) {
      console.log("Run was successful with output", result.output);
    }
    
    // You also have access to the run status that includes more granular information
    console.log("Run status:", result.status);
    
    // You can access the payload and output
    console.log("Payload:", result.payload);
    console.log("Output:", result.output);
    
    // You can also access the attempts, which will give you information about errors (if they exist)
    for (const attempt of result.attempts) {
      if (attempt.status === "FAILED") {
        console.log("Attempt failed with error:", attempt.error);
      }
    }

200

400

401

404

    {
      "id": "run_1234",
      "taskIdentifier": "my-task",
      "createdAt": "2023-11-07T05:31:56Z",
      "updatedAt": "2023-11-07T05:31:56Z",
      "attempts": [\
        {\
          "id": "attempt_1234",\
          "createdAt": "2023-11-07T05:31:56Z",\
          "updatedAt": "2023-11-07T05:31:56Z",\
          "error": {\
            "message": "Something went wrong",\
            "name": "Error",\
            "stackTrace": "Error: Something went wrong"\
          },\
          "startedAt": "2023-11-07T05:31:56Z",\
          "completedAt": "2023-11-07T05:31:56Z"\
        }\
      ],
      "version": 20240523.1,
      "idempotencyKey": "idempotency_key_1234",
      "isTest": false,
      "startedAt": "2023-11-07T05:31:56Z",
      "finishedAt": "2023-11-07T05:31:56Z",
      "delayedUntil": "2023-11-07T05:31:56Z",
      "ttl": "1h42m",
      "expiredAt": "2023-11-07T05:31:56Z",
      "tags": [\
        "user_5df987al13",\
        "org_c6b7dycmxw"\
      ],
      "metadata": {
        "foo": "bar"
      },
      "costInCents": 0.00292,
      "baseCostInCents": 0.0025,
      "durationMs": 491,
      "depth": 0,
      "batchId": "batch_1234",
      "payload": {
        "foo": "bar"
      },
      "payloadPresignedUrl": "https://r2.cloudflarestorage.com/packets/yubjwjsfkxnylobaqvqz/dev/run_p4omhh45hgxxnq1re6ovy/payload.json?X-Amz-Expires=300&X-Amz-Date=20240625T154526Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=10b064e58a0680db5b5e077be2be3b2a%2F20240625%2Fauto%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=88604cb993ffc151b4d73f2439da431d9928488e4b3dcfa4a7c8f1819",
      "output": {
        "foo": "bar"
      },
      "outputPresignedUrl": "https://r2.cloudflarestorage.com/packets/yubjwjsfkxnylobaqvqz/dev/run_p4omhh45hgxxnq1re6ovy/payload.json?X-Amz-Expires=300&X-Amz-Date=20240625T154526Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=10b064e58a0680db5b5e077be2be3b2a%2F20240625%2Fauto%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=88604cb993ffc151b4d73f2439da431d9928488e4b3dcfa4a7c8f1819",
      "relatedRuns": {
        "root": {
          "id": "run_1234",
          "taskIdentifier": "my-task",
          "createdAt": "2023-11-07T05:31:56Z",
          "updatedAt": "2023-11-07T05:31:56Z",
          "version": 20240523.1,
          "idempotencyKey": "idempotency_key_1234",
          "isTest": false,
          "startedAt": "2023-11-07T05:31:56Z",
          "finishedAt": "2023-11-07T05:31:56Z",
          "delayedUntil": "2023-11-07T05:31:56Z",
          "ttl": "1h42m",
          "expiredAt": "2023-11-07T05:31:56Z",
          "tags": [\
            "user_5df987al13",\
            "org_c6b7dycmxw"\
          ],
          "metadata": {
            "foo": "bar"
          },
          "costInCents": 0.00292,
          "baseCostInCents": 0.0025,
          "durationMs": 491,
          "depth": 0,
          "batchId": "batch_1234"
        },
        "parent": {
          "id": "run_1234",
          "taskIdentifier": "my-task",
          "createdAt": "2023-11-07T05:31:56Z",
          "updatedAt": "2023-11-07T05:31:56Z",
          "version": 20240523.1,
          "idempotencyKey": "idempotency_key_1234",
          "isTest": false,
          "startedAt": "2023-11-07T05:31:56Z",
          "finishedAt": "2023-11-07T05:31:56Z",
          "delayedUntil": "2023-11-07T05:31:56Z",
          "ttl": "1h42m",
          "expiredAt": "2023-11-07T05:31:56Z",
          "tags": [\
            "user_5df987al13",\
            "org_c6b7dycmxw"\
          ],
          "metadata": {
            "foo": "bar"
          },
          "costInCents": 0.00292,
          "baseCostInCents": 0.0025,
          "durationMs": 491,
          "depth": 0,
          "batchId": "batch_1234"
        },
        "children": [\
          {\
            "id": "run_1234",\
            "taskIdentifier": "my-task",\
            "createdAt": "2023-11-07T05:31:56Z",\
            "updatedAt": "2023-11-07T05:31:56Z",\
            "version": 20240523.1,\
            "idempotencyKey": "idempotency_key_1234",\
            "isTest": false,\
            "startedAt": "2023-11-07T05:31:56Z",\
            "finishedAt": "2023-11-07T05:31:56Z",\
            "delayedUntil": "2023-11-07T05:31:56Z",\
            "ttl": "1h42m",\
            "expiredAt": "2023-11-07T05:31:56Z",\
            "tags": [\
              "user_5df987al13",\
              "org_c6b7dycmxw"\
            ],\
            "metadata": {\
              "foo": "bar"\
            },\
            "costInCents": 0.00292,\
            "baseCostInCents": 0.0025,\
            "durationMs": 491,\
            "depth": 0,\
            "batchId": "batch_1234"\
          }\
        ]
      },
      "schedule": {
        "id": "sched_1234",
        "generator": {
          "type": "CRON",
          "expression": "0 0 * * *",
          "description": "Every day at midnight"
        },
        "externalId": "user_1234",
        "deduplicationKey": "dedup_key_1234"
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/runs/retrieve#authorization-authorization)

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

[​](https://trigger.dev/docs/management/runs/retrieve#parameter-run-id)

runId

string

required

The ID of an run, starts with `run_`. The run ID will be returned when you trigger a run on a task.

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/runs/retrieve#response-id)

id

string

required

The unique ID of the run, prefixed with `run_`

Example:

`"run_1234"`

[​](https://trigger.dev/docs/management/runs/retrieve#response-status)

status

enum<string>

required

The status of the run

Available options:

`PENDING_VERSION`,

`DELAYED`,

`QUEUED`,

`EXECUTING`,

`REATTEMPTING`,

`FROZEN`,

`COMPLETED`,

`CANCELED`,

`FAILED`,

`CRASHED`,

`INTERRUPTED`,

`SYSTEM_FAILURE`

[​](https://trigger.dev/docs/management/runs/retrieve#response-task-identifier)

taskIdentifier

string

required

The identifier of the task that was run

Example:

`"my-task"`

[​](https://trigger.dev/docs/management/runs/retrieve#response-created-at)

createdAt

string<date-time>

required

[​](https://trigger.dev/docs/management/runs/retrieve#response-updated-at)

updatedAt

string<date-time>

required

[​](https://trigger.dev/docs/management/runs/retrieve#response-attempts)

attempts

object\[\]

required

Show child attributes

[​](https://trigger.dev/docs/management/runs/retrieve#response-version)

version

string

The version of the worker that executed the run

Example:

`20240523.1`

[​](https://trigger.dev/docs/management/runs/retrieve#response-idempotency-key)

idempotencyKey

string

The idempotency key used to prevent creating duplicate runs, if provided

Example:

`"idempotency_key_1234"`

[​](https://trigger.dev/docs/management/runs/retrieve#response-is-test)

isTest

boolean

Whether the run is a test run or not

Example:

`false`

[​](https://trigger.dev/docs/management/runs/retrieve#response-started-at)

startedAt

string<date-time>

The time the run started

[​](https://trigger.dev/docs/management/runs/retrieve#response-finished-at)

finishedAt

string<date-time>

The time the run finished

[​](https://trigger.dev/docs/management/runs/retrieve#response-delayed-until)

delayedUntil

string<date-time>

If the run was triggered with a delay, this will be the time the run will be enqueued to execute

[​](https://trigger.dev/docs/management/runs/retrieve#response-ttl-one-of-0)

ttl

stringnumberstringnumber

The time-to-live for this run. If the run is not executed within this time, it will be removed from the queue and never execute. You can use a string in this format: `1h`, `1m`, `1h42m` or a number of seconds (min. 1).

Example:

`"1h42m"`

[​](https://trigger.dev/docs/management/runs/retrieve#response-expired-at)

expiredAt

string<date-time>

If the run had a TTL and that time has passed, when the run "expired".

[​](https://trigger.dev/docs/management/runs/retrieve#response-tags)

tags

string\[\]

Tags can be attached to a run to make it easy to find runs (in the dashboard or using SDK functions like `runs.list`)

A tag must be between 1 and 128 characters, a run can have up to 10 tags attached to it.

Example:

    ["user_5df987al13", "org_c6b7dycmxw"]
    

[​](https://trigger.dev/docs/management/runs/retrieve#response-metadata)

metadata

object

The metadata of the run. See [Metadata](https://trigger.dev/docs/runs/metadata)
 for more information.

Example:

    { "foo": "bar" }
    

[​](https://trigger.dev/docs/management/runs/retrieve#response-cost-in-cents)

costInCents

number

The compute cost of the run (so far) in cents. This cost does not apply to DEV runs.

Example:

`0.00292`

[​](https://trigger.dev/docs/management/runs/retrieve#response-base-cost-in-cents)

baseCostInCents

number

The invocation cost of the run in cents. This cost does not apply to DEV runs.

Example:

`0.0025`

[​](https://trigger.dev/docs/management/runs/retrieve#response-duration-ms)

durationMs

number

The duration of compute (so far) in milliseconds. This does not include waits.

Example:

`491`

[​](https://trigger.dev/docs/management/runs/retrieve#response-depth)

depth

integer

The depth of the run in the task run hierarchy. The root run has a depth of 0.

Example:

`0`

[​](https://trigger.dev/docs/management/runs/retrieve#response-batch-id)

batchId

string

The ID of the batch that this run belongs to

Example:

`"batch_1234"`

[​](https://trigger.dev/docs/management/runs/retrieve#response-trigger-function)

triggerFunction

enum<string>

The name of the function that triggered the run

Available options:

`trigger`,

`triggerAndWait`,

`batchTrigger`,

`batchTriggerAndWait`

[​](https://trigger.dev/docs/management/runs/retrieve#response-payload)

payload

object

The payload that was sent to the task. Will be omitted if the request was made with a Public API key

Example:

    { "foo": "bar" }
    

[​](https://trigger.dev/docs/management/runs/retrieve#response-payload-presigned-url)

payloadPresignedUrl

string

The presigned URL to download the payload. Will only be included if the payload is too large to be included in the response. Expires in 5 minutes.

Example:

`"https://r2.cloudflarestorage.com/packets/yubjwjsfkxnylobaqvqz/dev/run_p4omhh45hgxxnq1re6ovy/payload.json?X-Amz-Expires=300&X-Amz-Date=20240625T154526Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=10b064e58a0680db5b5e077be2be3b2a%2F20240625%2Fauto%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=88604cb993ffc151b4d73f2439da431d9928488e4b3dcfa4a7c8f1819"`

[​](https://trigger.dev/docs/management/runs/retrieve#response-output)

output

object

The output of the run. Will be omitted if the request was made with a Public API key

Example:

    { "foo": "bar" }
    

[​](https://trigger.dev/docs/management/runs/retrieve#response-output-presigned-url)

outputPresignedUrl

string

The presigned URL to download the output. Will only be included if the output is too large to be included in the response. Expires in 5 minutes.

Example:

`"https://r2.cloudflarestorage.com/packets/yubjwjsfkxnylobaqvqz/dev/run_p4omhh45hgxxnq1re6ovy/payload.json?X-Amz-Expires=300&X-Amz-Date=20240625T154526Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=10b064e58a0680db5b5e077be2be3b2a%2F20240625%2Fauto%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=88604cb993ffc151b4d73f2439da431d9928488e4b3dcfa4a7c8f1819"`

[​](https://trigger.dev/docs/management/runs/retrieve#response-related-runs)

relatedRuns

object

Show child attributes

[​](https://trigger.dev/docs/management/runs/retrieve#response-schedule)

schedule

object

The schedule that triggered the run. Will be omitted if the run was not triggered by a schedule

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/list)
[Replay runCreates a new run with the same payload and options as the original run.\
\
Next](https://trigger.dev/docs/management/runs/replay)

⌘I

TypeScript

TypeScript

    import { runs } from "@trigger.dev/sdk";
    
    const result = await runs.retrieve("run_1234");
    
    // We include boolean helpers to check the status of the run
    // (isSuccess, isFailed, isCompleted, etc.)
    if (result.isSuccess) {
      console.log("Run was successful with output", result.output);
    }
    
    // You also have access to the run status that includes more granular information
    console.log("Run status:", result.status);
    
    // You can access the payload and output
    console.log("Payload:", result.payload);
    console.log("Output:", result.output);
    
    // You can also access the attempts, which will give you information about errors (if they exist)
    for (const attempt of result.attempts) {
      if (attempt.status === "FAILED") {
        console.log("Attempt failed with error:", attempt.error);
      }
    }

200

400

401

404

    {
      "id": "run_1234",
      "taskIdentifier": "my-task",
      "createdAt": "2023-11-07T05:31:56Z",
      "updatedAt": "2023-11-07T05:31:56Z",
      "attempts": [\
        {\
          "id": "attempt_1234",\
          "createdAt": "2023-11-07T05:31:56Z",\
          "updatedAt": "2023-11-07T05:31:56Z",\
          "error": {\
            "message": "Something went wrong",\
            "name": "Error",\
            "stackTrace": "Error: Something went wrong"\
          },\
          "startedAt": "2023-11-07T05:31:56Z",\
          "completedAt": "2023-11-07T05:31:56Z"\
        }\
      ],
      "version": 20240523.1,
      "idempotencyKey": "idempotency_key_1234",
      "isTest": false,
      "startedAt": "2023-11-07T05:31:56Z",
      "finishedAt": "2023-11-07T05:31:56Z",
      "delayedUntil": "2023-11-07T05:31:56Z",
      "ttl": "1h42m",
      "expiredAt": "2023-11-07T05:31:56Z",
      "tags": [\
        "user_5df987al13",\
        "org_c6b7dycmxw"\
      ],
      "metadata": {
        "foo": "bar"
      },
      "costInCents": 0.00292,
      "baseCostInCents": 0.0025,
      "durationMs": 491,
      "depth": 0,
      "batchId": "batch_1234",
      "payload": {
        "foo": "bar"
      },
      "payloadPresignedUrl": "https://r2.cloudflarestorage.com/packets/yubjwjsfkxnylobaqvqz/dev/run_p4omhh45hgxxnq1re6ovy/payload.json?X-Amz-Expires=300&X-Amz-Date=20240625T154526Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=10b064e58a0680db5b5e077be2be3b2a%2F20240625%2Fauto%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=88604cb993ffc151b4d73f2439da431d9928488e4b3dcfa4a7c8f1819",
      "output": {
        "foo": "bar"
      },
      "outputPresignedUrl": "https://r2.cloudflarestorage.com/packets/yubjwjsfkxnylobaqvqz/dev/run_p4omhh45hgxxnq1re6ovy/payload.json?X-Amz-Expires=300&X-Amz-Date=20240625T154526Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=10b064e58a0680db5b5e077be2be3b2a%2F20240625%2Fauto%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=88604cb993ffc151b4d73f2439da431d9928488e4b3dcfa4a7c8f1819",
      "relatedRuns": {
        "root": {
          "id": "run_1234",
          "taskIdentifier": "my-task",
          "createdAt": "2023-11-07T05:31:56Z",
          "updatedAt": "2023-11-07T05:31:56Z",
          "version": 20240523.1,
          "idempotencyKey": "idempotency_key_1234",
          "isTest": false,
          "startedAt": "2023-11-07T05:31:56Z",
          "finishedAt": "2023-11-07T05:31:56Z",
          "delayedUntil": "2023-11-07T05:31:56Z",
          "ttl": "1h42m",
          "expiredAt": "2023-11-07T05:31:56Z",
          "tags": [\
            "user_5df987al13",\
            "org_c6b7dycmxw"\
          ],
          "metadata": {
            "foo": "bar"
          },
          "costInCents": 0.00292,
          "baseCostInCents": 0.0025,
          "durationMs": 491,
          "depth": 0,
          "batchId": "batch_1234"
        },
        "parent": {
          "id": "run_1234",
          "taskIdentifier": "my-task",
          "createdAt": "2023-11-07T05:31:56Z",
          "updatedAt": "2023-11-07T05:31:56Z",
          "version": 20240523.1,
          "idempotencyKey": "idempotency_key_1234",
          "isTest": false,
          "startedAt": "2023-11-07T05:31:56Z",
          "finishedAt": "2023-11-07T05:31:56Z",
          "delayedUntil": "2023-11-07T05:31:56Z",
          "ttl": "1h42m",
          "expiredAt": "2023-11-07T05:31:56Z",
          "tags": [\
            "user_5df987al13",\
            "org_c6b7dycmxw"\
          ],
          "metadata": {
            "foo": "bar"
          },
          "costInCents": 0.00292,
          "baseCostInCents": 0.0025,
          "durationMs": 491,
          "depth": 0,
          "batchId": "batch_1234"
        },
        "children": [\
          {\
            "id": "run_1234",\
            "taskIdentifier": "my-task",\
            "createdAt": "2023-11-07T05:31:56Z",\
            "updatedAt": "2023-11-07T05:31:56Z",\
            "version": 20240523.1,\
            "idempotencyKey": "idempotency_key_1234",\
            "isTest": false,\
            "startedAt": "2023-11-07T05:31:56Z",\
            "finishedAt": "2023-11-07T05:31:56Z",\
            "delayedUntil": "2023-11-07T05:31:56Z",\
            "ttl": "1h42m",\
            "expiredAt": "2023-11-07T05:31:56Z",\
            "tags": [\
              "user_5df987al13",\
              "org_c6b7dycmxw"\
            ],\
            "metadata": {\
              "foo": "bar"\
            },\
            "costInCents": 0.00292,\
            "baseCostInCents": 0.0025,\
            "durationMs": 491,\
            "depth": 0,\
            "batchId": "batch_1234"\
          }\
        ]
      },
      "schedule": {
        "id": "sched_1234",
        "generator": {
          "type": "CRON",
          "expression": "0 0 * * *",
          "description": "Every day at midnight"
        },
        "externalId": "user_1234",
        "deduplicationKey": "dedup_key_1234"
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
