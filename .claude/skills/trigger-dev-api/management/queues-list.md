# List Queues

> Source: https://trigger.dev/docs/management/queues/list

GET

/

api

/

v1

/

queues

TypeScript

TypeScript

    import { queues } from "@trigger.dev/sdk";
    
    // List all queues
    const allQueues = await queues.list();
    
    // With pagination
    const pagedQueues = await queues.list({
      page: 1,
      perPage: 20,
    });

200

    {
      "data": [\
        {\
          "id": "queue_1234",\
          "name": "my-task-id",\
          "type": "task",\
          "running": 5,\
          "queued": 10,\
          "paused": false,\
          "concurrencyLimit": 10,\
          "concurrency": {\
            "current": 10,\
            "base": 10,\
            "override": null,\
            "overriddenAt": null,\
            "overriddenBy": null\
          }\
        }\
      ],
      "pagination": {
        "currentPage": 1,
        "totalPages": 5,
        "count": 50
      }
    }

#### Authorizations

[​](https://trigger.dev/docs/management/queues/list#authorization-authorization)

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

[​](https://trigger.dev/docs/management/queues/list#parameter-page)

page

integer

Page number of the queue listing (1-based)

[​](https://trigger.dev/docs/management/queues/list#parameter-per-page)

perPage

integer

Number of queues per page

#### Response

200

application/json

Successful request

[​](https://trigger.dev/docs/management/queues/list#response-data)

data

object\[\]

required

An array of queue objects

Show child attributes

[​](https://trigger.dev/docs/management/queues/list#response-pagination)

pagination

object

required

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/runs/retrieve-result)
[Retrieve QueueGet a queue by its ID, or by type and name.\
\
Next](https://trigger.dev/docs/management/queues/retrieve)

⌘I

TypeScript

TypeScript

    import { queues } from "@trigger.dev/sdk";
    
    // List all queues
    const allQueues = await queues.list();
    
    // With pagination
    const pagedQueues = await queues.list({
      page: 1,
      perPage: 20,
    });

200

    {
      "data": [\
        {\
          "id": "queue_1234",\
          "name": "my-task-id",\
          "type": "task",\
          "running": 5,\
          "queued": 10,\
          "paused": false,\
          "concurrencyLimit": 10,\
          "concurrency": {\
            "current": 10,\
            "base": 10,\
            "override": null,\
            "overriddenAt": null,\
            "overriddenBy": null\
          }\
        }\
      ],
      "pagination": {
        "currentPage": 1,
        "totalPages": 5,
        "count": 50
      }
    }

Assistant

Responses are generated using AI and may contain mistakes.
