# Advanced usage

> Source: https://trigger.dev/docs/management/advanced-usage

### 

[​](https://trigger.dev/docs/management/advanced-usage#accessing-raw-http-responses)

Accessing raw HTTP responses

All API methods return a `Promise` subclass `ApiPromise` that includes helpers for accessing the underlying HTTP response:

    import { runs } from "@trigger.dev/sdk";
    
    async function main() {
      const { data: run, response: raw } = await runs.retrieve("run_1234").withResponse();
    
      console.log(raw.status);
      console.log(raw.headers);
    
      const response = await runs.retrieve("run_1234").asResponse(); // Returns a Response object
    
      console.log(response.status);
      console.log(response.headers);
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/auto-pagination)
[TriggerTrigger a task by its identifier.\
\
Next](https://trigger.dev/docs/management/tasks/trigger)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
