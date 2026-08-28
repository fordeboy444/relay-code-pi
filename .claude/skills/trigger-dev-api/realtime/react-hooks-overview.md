# React hooks for real-time task updates

> Source: https://trigger.dev/docs/realtime/react-hooks/overview

**`@trigger.dev/react-hooks` gives your React components live access to background tasks.** Subscribe to run progress, stream AI output as it generates, or trigger tasks directly from the browser.

[​](https://trigger.dev/docs/realtime/react-hooks/overview#installation)

Installation
----------------------------------------------------------------------------------------

Install the `@trigger.dev/react-hooks` package in your project:

npm

pnpm

yarn

    npm add @trigger.dev/react-hooks
    

[​](https://trigger.dev/docs/realtime/react-hooks/overview#authentication)

Authentication
--------------------------------------------------------------------------------------------

All hooks require authentication with a Public Access Token. Pass the token via the `accessToken` option:

    import { useRealtimeRun } from "@trigger.dev/react-hooks";
    
    export function MyComponent({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { run, error } = useRealtimeRun(runId, {
        accessToken: publicAccessToken,
        baseURL: "https://your-trigger-dev-instance.com", // optional, only needed if you are self-hosting Trigger.dev
      });
    
      // ...
    }
    

Learn more about [generating and managing tokens in our authentication guide](https://trigger.dev/docs/realtime/auth)
.

[​](https://trigger.dev/docs/realtime/react-hooks/overview#available-hooks)

Available hooks
----------------------------------------------------------------------------------------------

| Hook category | What it does | Guide |
| --- | --- | --- |
| **Trigger hooks** | Trigger tasks from the browser | [Triggering](https://trigger.dev/docs/realtime/react-hooks/triggering) |
| **Run updates** | Subscribe to run status, metadata, and tags | [Run updates](https://trigger.dev/docs/realtime/react-hooks/subscribe) |
| **Streaming** | Consume AI output, file chunks, or any continuous data | [Streaming](https://trigger.dev/docs/realtime/react-hooks/streams) |
| **SWR hooks** | One-time fetch with caching (not recommended for most cases) | [SWR](https://trigger.dev/docs/realtime/react-hooks/swr) |

[​](https://trigger.dev/docs/realtime/react-hooks/overview#swr-vs-realtime-hooks)

SWR vs Realtime hooks
----------------------------------------------------------------------------------------------------------

We offer two “styles” of hooks: SWR and Realtime. SWR hooks use the [swr](https://swr.vercel.app/)
 library to fetch data once and cache it. Realtime hooks use [Trigger.dev Realtime](https://trigger.dev/docs/realtime)
 to subscribe to updates as they happen.

It can be a little confusing which one to use because [swr](https://swr.vercel.app/)
 can also be configured to poll for updates. But because of rate-limits and the way the Trigger.dev API works, we recommend using the Realtime hooks for most use cases.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/auth)
[TriggeringTrigger background tasks from React components and optionally subscribe to their progress or stream their output.\
\
Next](https://trigger.dev/docs/realtime/react-hooks/triggering)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
