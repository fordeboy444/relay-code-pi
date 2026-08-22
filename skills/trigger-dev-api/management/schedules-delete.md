# Delete Schedule

> Source: https://trigger.dev/docs/management/schedules/delete

DELETE

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
    
    await schedules.del(scheduleId);

#### Authorizations

[​](https://trigger.dev/docs/management/schedules/delete#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";configure({ accessToken: "tr_dev_1234" });

#### Path Parameters

[​](https://trigger.dev/docs/management/schedules/delete#parameter-schedule-id)

schedule\_id

string

required

The ID of the schedule.

#### Response

200

Schedule deleted successfully

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/schedules/update)
[Deactivate ScheduleDeactivate a schedule by its ID. This will only work on \`IMPERATIVE\` schedules that were created in the dashboard or using the imperative SDK functions like \`schedules.create()\`.\
\
Next](https://trigger.dev/docs/management/schedules/deactivate)

Ctrl+I

TypeScript

TypeScript

    import { schedules } from "@trigger.dev/sdk";
    
    await schedules.del(scheduleId);

Assistant

Responses are generated using AI and may contain mistakes.
