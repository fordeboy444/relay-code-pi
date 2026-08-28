# Update Schedule

> Source: https://trigger.dev/docs/management/schedules/update

PUT

/

api

/

v1

/

schedules

/

{schedule\_id}

TypeScript

TypeScript

    import { schedules } from "@trigger.dev/sdk";
    
    const updatedSchedule = await schedules.update(scheduleId, {
      task: 'my-updated-task',
      cron: '0 0 * * *'
    });

200

    {
      "id": "sched_1234",
      "task": "my-scheduled-task",
      "type": "IMPERATIVE",
      "active": true,
      "deduplicationKey": "dedup_key_1234",
      "externalId": "user_1234",
      "generator": {
        "type": "CRON",
        "expression": "0 0 * * *",
        "description": "Every day at midnight"
      },
      "timezone": "America/New_York",
      "nextRun": "2024-04-01T00:00:00Z",
      "environments": [\
        {\
          "id": "<string>",\
          "type": "<string>",\
          "userName": "<string>"\
        }\
      ]
    }

#### Authorizations

[​](https://trigger.dev/docs/management/schedules/update#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/schedules/update#parameter-schedule-id)

schedule\_id

string

required

The ID of the schedule.

#### Body

application/json

[​](https://trigger.dev/docs/management/schedules/update#body-task)

task

string

required

[​](https://trigger.dev/docs/management/schedules/update#body-cron)

cron

string

required

[​](https://trigger.dev/docs/management/schedules/update#body-external-id)

externalId

string

[​](https://trigger.dev/docs/management/schedules/update#body-timezone)

timezone

string

Defaults to "UTC". In IANA format ("America/New\_York"). If set then it will trigger at the CRON frequency in that timezone and respect daylight savings time.

Example:

`"America/New_York"`

#### Response

200

application/json

Schedule updated successfully

[​](https://trigger.dev/docs/management/schedules/update#response-id)

id

string

The unique ID of the schedule, prefixed with 'sched\_'

Example:

`"sched_1234"`

[​](https://trigger.dev/docs/management/schedules/update#response-task)

task

string

The id of the scheduled task that will be triggered by this schedule

Example:

`"my-scheduled-task"`

[​](https://trigger.dev/docs/management/schedules/update#response-type)

type

string

The type of schedule, `DECLARATIVE` or `IMPERATIVE`. Declarative schedules are declared in your code by setting the `cron` property on a `schedules.task`. Imperative schedules are created in the dashboard or by using the imperative SDK functions like `schedules.create()`.

Example:

`"IMPERATIVE"`

[​](https://trigger.dev/docs/management/schedules/update#response-active)

active

boolean

Whether the schedule is active or not

Example:

`true`

[​](https://trigger.dev/docs/management/schedules/update#response-deduplication-key)

deduplicationKey

string

The deduplication key used to prevent creating duplicate schedules

Example:

`"dedup_key_1234"`

[​](https://trigger.dev/docs/management/schedules/update#response-external-id)

externalId

string

The external ID of the schedule. Can be anything that is useful to you (e.g., user ID, org ID, etc.)

Example:

`"user_1234"`

[​](https://trigger.dev/docs/management/schedules/update#response-generator)

generator

object

Show child attributes

[​](https://trigger.dev/docs/management/schedules/update#response-timezone)

timezone

string

Defaults to UTC. In IANA format, if set then it will trigger at the CRON frequency in that timezone and respect daylight savings time.

Example:

`"America/New_York"`

[​](https://trigger.dev/docs/management/schedules/update#response-next-run)

nextRun

string<date-time>

The next time the schedule will run

Example:

`"2024-04-01T00:00:00Z"`

[​](https://trigger.dev/docs/management/schedules/update#response-environments)

environments

object\[\]

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/schedules/retrieve)
[Delete ScheduleDelete a schedule by its ID. This will only work on \`IMPERATIVE\` schedules that were created in the dashboard or using the imperative SDK functions like \`schedules.create()\`.\
\
Next](https://trigger.dev/docs/management/schedules/delete)

Ctrl+I

TypeScript

TypeScript

    import { schedules } from "@trigger.dev/sdk";
    
    const updatedSchedule = await schedules.update(scheduleId, {
      task: 'my-updated-task',
      cron: '0 0 * * *'
    });

200

    {
      "id": "sched_1234",
      "task": "my-scheduled-task",
      "type": "IMPERATIVE",
      "active": true,
      "deduplicationKey": "dedup_key_1234",
      "externalId": "user_1234",
      "generator": {
        "type": "CRON",
        "expression": "0 0 * * *",
        "description": "Every day at midnight"
      },
      "timezone": "America/New_York",
      "nextRun": "2024-04-01T00:00:00Z",
      "environments": [\
        {\
          "id": "<string>",\
          "type": "<string>",\
          "userName": "<string>"\
        }\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
