# SWR hooks

> Source: https://trigger.dev/docs/realtime/react-hooks/swr

SWR hooks use the [swr](https://swr.vercel.app/)
 library to fetch data once and cache it. These hooks are useful when you need to fetch data without real-time updates.

While SWR can be configured to poll for updates, we recommend using our other [Realtime hooks](https://trigger.dev/docs/realtime/react-hooks)
 for most use-cases due to rate-limits and the way the Trigger.dev API works.

[​](https://trigger.dev/docs/realtime/react-hooks/swr#userun)

useRun
-----------------------------------------------------------------------

The `useRun` hook allows you to fetch a run by its ID.

    "use client"; // This is needed for Next.js App Router or other RSC frameworks
    
    import { useRun } from "@trigger.dev/react-hooks";
    
    export function MyComponent({ runId }: { runId: string }) {
      const { run, error, isLoading } = useRun(runId);
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
    
      return <div>Run: {run.id}</div>;
    }
    

The `run` object returned is the same as the [run object](https://trigger.dev/docs/management/runs/retrieve)
 returned by the Trigger.dev API. To correctly type the run’s payload and output, you can provide the type of your task to the `useRun` hook:

    import { useRun } from "@trigger.dev/react-hooks";
    import type { myTask } from "@/trigger/myTask";
    
    export function MyComponent({ runId }: { runId: string }) {
      const { run, error, isLoading } = useRun<typeof myTask>(runId, {
        refreshInterval: 0, // Disable polling
      });
    
      if (isLoading) return <div>Loading...</div>;
      if (error) return <div>Error: {error.message}</div>;
    
      // Now run.payload and run.output are correctly typed
    
      return <div>Run: {run.id}</div>;
    }
    

[​](https://trigger.dev/docs/realtime/react-hooks/swr#common-swr-options)

Common SWR options
-----------------------------------------------------------------------------------------------

You can pass the following options to the all SWR hooks:

[​](https://trigger.dev/docs/realtime/react-hooks/swr#param-revalidate-on-focus)

revalidateOnFocus

boolean

Revalidate the data when the window regains focus.

[​](https://trigger.dev/docs/realtime/react-hooks/swr#param-revalidate-on-reconnect)

revalidateOnReconnect

boolean

Revalidate the data when the browser regains a network connection.

[​](https://trigger.dev/docs/realtime/react-hooks/swr#param-refresh-interval)

refreshInterval

number

Poll for updates at the specified interval (in milliseconds). Polling is not recommended for most use-cases. Use the Realtime hooks instead.

[​](https://trigger.dev/docs/realtime/react-hooks/swr#common-swr-return-values)

Common SWR return values
-----------------------------------------------------------------------------------------------------------

[​](https://trigger.dev/docs/realtime/react-hooks/swr#param-error)

error

Error

An error object if an error occurred while fetching the data.

[​](https://trigger.dev/docs/realtime/react-hooks/swr#param-is-loading)

isLoading

boolean

A boolean indicating if the data is currently being fetched.

[​](https://trigger.dev/docs/realtime/react-hooks/swr#param-is-validating)

isValidating

boolean

A boolean indicating if the data is currently being revalidated.

[​](https://trigger.dev/docs/realtime/react-hooks/swr#param-is-error)

isError

boolean

A boolean indicating if an error occurred while fetching the data.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/react-hooks/streams)
[useWaitTokenUse the useWaitToken hook to complete a wait token from a React component\
\
Next](https://trigger.dev/docs/realtime/react-hooks/use-wait-token)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
