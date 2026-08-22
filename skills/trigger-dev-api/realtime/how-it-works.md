# How Realtime works

> Source: https://trigger.dev/docs/realtime/how-it-works

This page covers the infrastructure behind **run updates** (status, metadata, tags). [Streaming](https://trigger.dev/docs/tasks/streams)
 uses a separate transport.

[​](https://trigger.dev/docs/realtime/how-it-works#architecture)

Architecture
--------------------------------------------------------------------------------

The run updates system is built on top of [Electric SQL](https://electric-sql.com/)
, an open-source PostgreSQL syncing engine. The Trigger.dev API wraps Electric SQL and provides a simple API to subscribe to [runs](https://trigger.dev/docs/runs)
 and get updates as they happen.

[​](https://trigger.dev/docs/realtime/how-it-works#run-changes)

Run changes
------------------------------------------------------------------------------

You will receive updates whenever a run changes for the following reasons:

*   The run moves to a new state. See our [run lifecycle docs](https://trigger.dev/docs/runs#the-run-lifecycle)
     for more information.
*   [Run tags](https://trigger.dev/docs/tags)
     are added or removed.
*   [Run metadata](https://trigger.dev/docs/runs/metadata)
     is updated.

[​](https://trigger.dev/docs/realtime/how-it-works#run-object)

Run object
----------------------------------------------------------------------------

The run object returned by Realtime subscriptions is optimized for streaming updates and differs from the management API’s run object. See [the run object](https://trigger.dev/docs/realtime/run-object)
 page for the complete schema and field descriptions.

[​](https://trigger.dev/docs/realtime/how-it-works#basic-usage)

Basic usage
------------------------------------------------------------------------------

After you trigger a task, you can subscribe to the run using the `runs.subscribeToRun` function. This function returns an async iterator that you can use to get updates on the run status.

    import { runs, tasks } from "@trigger.dev/sdk";
    
    // Somewhere in your backend code
    async function myBackend() {
      const handle = await tasks.trigger("my-task", { some: "data" });
    
      for await (const run of runs.subscribeToRun(handle.id)) {
        // This will log the run every time it changes
        console.log(run);
      }
    }
    

Every time the run changes, the async iterator will yield the updated run. You can use this to update your UI, log the run status, or take any other action. Alternatively, you can subscribe to changes to any run that includes a specific tag (or tags) using the `runs.subscribeToRunsWithTag` function.

    import { runs } from "@trigger.dev/sdk";
    
    // Somewhere in your backend code
    for await (const run of runs.subscribeToRunsWithTag("user:1234")) {
      // This will log the run every time it changes, for all runs with the tag "user:1234"
      console.log(run);
    }
    

If you’ve used `batchTrigger` to trigger multiple runs, you can also subscribe to changes to all the runs triggered in the batch using the `runs.subscribeToBatch` function.

    import { runs } from "@trigger.dev/sdk";
    
    // Somewhere in your backend code
    for await (const run of runs.subscribeToBatch("batch-id")) {
      // This will log the run every time it changes, for all runs in the batch with the ID "batch-id"
      console.log(run);
    }
    

[​](https://trigger.dev/docs/realtime/how-it-works#run-metadata)

Run metadata
--------------------------------------------------------------------------------

The run metadata API gives you the ability to add or update custom metadata on a run, which will cause the run to be updated. This allows you to extend the Realtime API with custom data attached to a run that can be used for various purposes. Some common use cases include:

*   Adding a link to a related resource
*   Adding a reference to a user or organization
*   Adding a custom status with progress information

See our [run metadata docs](https://trigger.dev/docs/runs/metadata)
 for more on how to write tasks that use the metadata API.

### 

[​](https://trigger.dev/docs/realtime/how-it-works#using-metadata-with-realtime-&-react-hooks)

Using metadata with Realtime & React hooks

You can combine run metadata with the Realtime API to bridge the gap between your trigger.dev tasks and your applications in two ways:

1.  Using our [React hooks](https://trigger.dev/docs/realtime/react-hooks/subscribe#using-metadata)
     to subscribe to metadata updates and update your UI in real-time.
2.  Using our [backend functions](https://trigger.dev/docs/realtime/backend)
     to subscribe to metadata updates in your backend.

[​](https://trigger.dev/docs/realtime/how-it-works#limits)

Limits
--------------------------------------------------------------------

The Realtime API in the Trigger.dev Cloud limits the number of concurrent subscriptions, depending on your plan. If you exceed the limit, you will receive an error when trying to subscribe to a run. For more information, see our [pricing page](https://trigger.dev/pricing)
.

[​](https://trigger.dev/docs/realtime/how-it-works#learn-more)

Learn more
----------------------------------------------------------------------------

*   Read our Realtime blog post [“How we built a real-time service that handles 20,000 updates per second](https://trigger.dev/blog/how-we-built-realtime)
    
*   Using Realtime: [React Hooks (frontend)](https://trigger.dev/docs/realtime/react-hooks)
    
*   Using [Backend (server-side)](https://trigger.dev/docs/realtime/backend)
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/overview)
[The run objectThe run object schema for Realtime subscriptions\
\
Next](https://trigger.dev/docs/realtime/run-object)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
