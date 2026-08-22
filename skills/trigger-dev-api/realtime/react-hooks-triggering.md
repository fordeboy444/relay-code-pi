# Trigger tasks from React

> Source: https://trigger.dev/docs/realtime/react-hooks/triggering

Trigger tasks directly from your React components. You can fire-and-forget, or trigger and immediately subscribe to the run’s progress or streamed output.

For triggering tasks from your frontend, you need to use “trigger” tokens. These can only be used once to trigger a task and are more secure than regular Public Access Tokens. To learn more about how to create and use these tokens, see our [Trigger Tokens](https://trigger.dev/docs/realtime/auth#trigger-tokens-for-frontend-triggering-only)
 documentation.

[​](https://trigger.dev/docs/realtime/react-hooks/triggering#hooks)

Hooks
----------------------------------------------------------------------------

We provide three hooks for triggering tasks from your frontend application:

*   `useTaskTrigger` - Trigger a task from your frontend application.
*   `useRealtimeTaskTrigger` - Trigger a task from your frontend application and subscribe to the run.
*   `useRealtimeTaskTriggerWithStreams` - Trigger a task from your frontend application and subscribe to the run, and also receive any streams that are emitted by the task.

### 

[​](https://trigger.dev/docs/realtime/react-hooks/triggering#usetasktrigger)

useTaskTrigger

The `useTaskTrigger` hook allows you to trigger a task from your frontend application.

    "use client"; // This is needed for Next.js App Router or other RSC frameworks
    
    import { useTaskTrigger } from "@trigger.dev/react-hooks";
    import type { myTask } from "@/trigger/myTask";
    //     👆 This is the type of your task, include this to get type-safety
    
    export function MyComponent({ publicAccessToken }: { publicAccessToken: string }) {
      //                         pass the type of your task here 👇
      const { submit, handle, error, isLoading } = useTaskTrigger<typeof myTask>("my-task", {
        accessToken: publicAccessToken, // 👈 this is the "trigger" token
      });
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      if (handle) {
        return <div>Run ID: {handle.id}</div>;
      }
    
      return (
        <button onClick={() => submit({ foo: "bar" })} disabled={isLoading}>
          {isLoading ? "Loading..." : "Trigger Task"}
        </button>
      );
    }
    

`useTaskTrigger` returns an object with the following properties:

*   `submit`: A function that triggers the task. It takes the payload of the task as an argument.
*   `handle`: The run handle object. This object contains the ID of the run that was triggered, along with a Public Access Token that can be used to access the run.
*   `isLoading`: A boolean that indicates whether the task is currently being triggered.
*   `error`: An error object that contains any errors that occurred while triggering the task.

The `submit` function triggers the task with the specified payload. You can additionally pass an optional [options](https://trigger.dev/docs/triggering#options)
 argument to the `submit` function:

    submit({ foo: "bar" }, { tags: ["tag1", "tag2"] });
    

#### 

[​](https://trigger.dev/docs/realtime/react-hooks/triggering#using-the-handle-object)

Using the handle object

You can use the `handle` object to initiate a subsequent [Realtime hook](https://trigger.dev/docs/realtime/react-hooks/subscribe#userealtimerun)
 to subscribe to the run.

    "use client"; // This is needed for Next.js App Router or other RSC frameworks
    
    import { useTaskTrigger, useRealtimeRun } from "@trigger.dev/react-hooks";
    import type { myTask } from "@/trigger/myTask";
    //     👆 This is the type of your task
    
    export function MyComponent({ publicAccessToken }: { publicAccessToken: string }) {
      //                         pass the type of your task here 👇
      const { submit, handle, error, isLoading } = useTaskTrigger<typeof myTask>("my-task", {
        accessToken: publicAccessToken, // 👈 this is the "trigger" token
      });
    
      //     use the handle object to preserve type-safety 👇
      const { run, error: realtimeError } = useRealtimeRun(handle, {
        accessToken: handle?.publicAccessToken,
        enabled: !!handle, // Only subscribe to the run if the handle is available
      });
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      if (handle) {
        return <div>Run ID: {handle.id}</div>;
      }
    
      if (realtimeError) {
        return <div>Error: {realtimeError.message}</div>;
      }
    
      if (run) {
        return <div>Run ID: {run.id}</div>;
      }
    
      return (
        <button onClick={() => submit({ foo: "bar" })} disabled={isLoading}>
          {isLoading ? "Loading..." : "Trigger Task"}
        </button>
      );
    }
    

We’ve also created some additional hooks that allow you to trigger tasks and subscribe to the run in one step:

### 

[​](https://trigger.dev/docs/realtime/react-hooks/triggering#userealtimetasktrigger)

useRealtimeTaskTrigger

The `useRealtimeTaskTrigger` hook allows you to trigger a task from your frontend application and then subscribe to the run in using Realtime:

    "use client"; // This is needed for Next.js App Router or other RSC frameworks
    
    import { useRealtimeTaskTrigger } from "@trigger.dev/react-hooks";
    import type { myTask } from "@/trigger/myTask";
    
    export function MyComponent({ publicAccessToken }: { publicAccessToken: string }) {
      const { submit, run, error, isLoading } = useRealtimeTaskTrigger<typeof myTask>("my-task", {
        accessToken: publicAccessToken,
      });
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      // This is the Realtime run object, which will automatically update when the run changes
      if (run) {
        return <div>Run ID: {run.id}</div>;
      }
    
      return (
        <button onClick={() => submit({ foo: "bar" })} disabled={isLoading}>
          {isLoading ? "Loading..." : "Trigger Task"}
        </button>
      );
    }
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/triggering#userealtimetasktriggerwithstreams)

useRealtimeTaskTriggerWithStreams

The `useRealtimeTaskTriggerWithStreams` hook allows you to trigger a task from your frontend application and then subscribe to the run in using Realtime, and also receive any streams that are emitted by the task.

    "use client"; // This is needed for Next.js App Router or other RSC frameworks
    
    import { useRealtimeTaskTriggerWithStreams } from "@trigger.dev/react-hooks";
    import type { myTask } from "@/trigger/myTask";
    
    type STREAMS = {
      openai: string; // this is the type of each "part" of the stream
    };
    
    export function MyComponent({ publicAccessToken }: { publicAccessToken: string }) {
      const { submit, run, streams, error, isLoading } = useRealtimeTaskTriggerWithStreams<
        typeof myTask,
        STREAMS
      >("my-task", {
        accessToken: publicAccessToken,
      });
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    
      if (streams && run) {
        const text = streams.openai?.map((part) => part).join("");
    
        return (
          <div>
            <div>Run ID: {run.id}</div>
            <div>{text}</div>
          </div>
        );
      }
    
      return (
        <button onClick={() => submit({ foo: "bar" })} disabled={isLoading}>
          {isLoading ? "Loading..." : "Trigger Task"}
        </button>
      );
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/react-hooks/overview)
[Run updatesBuild progress bars, status indicators, and live dashboards by subscribing to background task updates from React components.\
\
Next](https://trigger.dev/docs/realtime/react-hooks/subscribe)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
