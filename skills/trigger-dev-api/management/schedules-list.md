# List Schedules

> Source: https://trigger.dev/docs/management/schedules/list

GET

/

api

/

v1

/

schedules

TypeScript

TypeScript

    import { schedules } from "@trigger.dev/sdk";
    
    const allSchedules = await schedules.list();

200

    {
      "data": [\
        {\
          "id": "sched_1234",\
          "task": "my-scheduled-task",\
          "type": "IMPERATIVE",\
          "active": true,\
          "deduplicationKey": "dedup_key_1234",\
          "externalId": "user_1234",\
          "generator": {\
            "type": "CRON",\
            "expression": "0 0 * * *",\
            "description": "Every day at midnight"\
          },\
          "timezone": "America/New_York",\
          "nextRun": "2024-04-01T00:00:00Z",\
          "environments": [\
            {\
              "id": "<string>",\
              "type": "<string>",\
              "userName": "<string>"\
            }\
          ]\
        }\
      ],
      "pagination": {
        "currentPage": 123,
        "totalPages": 123,
        "count": 123
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/schedules/list#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Query Parameters

[​](https://trigger.dev/docs/management/schedules/list#parameter-page)

page

integer

Page number of the schedule listing

[​](https://trigger.dev/docs/management/schedules/list#parameter-per-page)

perPage

integer

Number of schedules per page

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/schedules/list#response-data)

data

object\[\]

Show child attributes

[​](https://trigger.dev/docs/management/schedules/list#response-pagination)

pagination

object

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/queues/concurrency-reset)
[Create ScheduleCreate a new \`IMPERATIVE\` schedule based on the specified options.\
\
Next](https://trigger.dev/docs/management/schedules/create)

Ctrl+I

TypeScript

TypeScript

    import { schedules } from "@trigger.dev/sdk";
    
    const allSchedules = await schedules.list();

200

    {
      "data": [\
        {\
          "id": "sched_1234",\
          "task": "my-scheduled-task",\
          "type": "IMPERATIVE",\
          "active": true,\
          "deduplicationKey": "dedup_key_1234",\
          "externalId": "user_1234",\
          "generator": {\
            "type": "CRON",\
            "expression": "0 0 * * *",\
            "description": "Every day at midnight"\
          },\
          "timezone": "America/New_York",\
          "nextRun": "2024-04-01T00:00:00Z",\
          "environments": [\
            {\
              "id": "<string>",\
              "type": "<string>",\
              "userName": "<string>"\
            }\
          ]\
        }\
      ],
      "pagination": {
        "currentPage": 123,
        "totalPages": 123,
        "count": 123
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
