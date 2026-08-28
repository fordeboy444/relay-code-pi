# Stream data to React (AI, files, progress)

> Source: https://trigger.dev/docs/realtime/react-hooks/streams

**Display AI responses as they generate, stream file processing results, or pipe any continuous data from a running task into your React components.** Unlike [progress and status hooks](https://trigger.dev/docs/realtime/react-hooks/subscribe)
 (which track run state), streaming hooks give you the raw data your task produces while it runs.

To learn how to emit streams from your tasks, see [Streaming data from tasks](https://trigger.dev/docs/tasks/streams)
.

[​](https://trigger.dev/docs/realtime/react-hooks/streams#userealtimestream-recommended)

useRealtimeStream (Recommended)
---------------------------------------------------------------------------------------------------------------------------

Available in SDK version **4.1.0 or later**. This is the recommended way to consume streams in your React components.

The `useRealtimeStream` hook allows you to subscribe to a specific stream by its run ID and stream key. This hook is designed to work seamlessly with [defined streams](https://trigger.dev/docs/tasks/streams#defining-typed-streams-recommended)
 for full type safety.

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#basic-usage)

Basic Usage

    "use client";
    
    import { useRealtimeStream } from "@trigger.dev/react-hooks";
    
    export function StreamViewer({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { parts, error } = useRealtimeStream<string>(runId, "ai-output", {
        accessToken: publicAccessToken,
      });
    
      if (error) return <div>Error: {error.message}</div>;
      if (!parts) return <div>Loading...</div>;
    
      return (
        <div>
          {parts.map((part, i) => (
            <span key={i}>{part}</span>
          ))}
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#with-defined-streams)

With Defined Streams

The recommended approach is to use defined streams for full type safety:

    "use client";
    
    import { useRealtimeStream } from "@trigger.dev/react-hooks";
    import { aiStream } from "@/app/streams";
    
    export function StreamViewer({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      // Pass the defined stream directly - full type safety!
      const { parts, error } = useRealtimeStream(aiStream, runId, {
        accessToken: publicAccessToken,
        timeoutInSeconds: 600,
        onData: (chunk) => {
          console.log("New chunk:", chunk); // chunk is typed!
        },
      });
    
      if (error) return <div>Error: {error.message}</div>;
      if (!parts) return <div>Loading...</div>;
    
      return (
        <div>
          {parts.map((part, i) => (
            <span key={i}>{part}</span>
          ))}
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#streaming-ai-responses)

Streaming AI Responses

Here’s a complete example showing how to display streaming AI responses:

    "use client";
    
    import { useRealtimeStream } from "@trigger.dev/react-hooks";
    import { aiStream } from "@/trigger/streams";
    import { Streamdown } from "streamdown";
    
    export function AIStreamViewer({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { parts, error } = useRealtimeStream(aiStream, runId, {
        accessToken: publicAccessToken,
        timeoutInSeconds: 300,
      });
    
      if (error) return <div>Error: {error.message}</div>;
      if (!parts) return <div>Loading stream...</div>;
    
      const text = parts.join("");
    
      return (
        <div className="prose">
          <Streamdown isAnimating={true}>{text}</Streamdown>
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#options)

Options

The `useRealtimeStream` hook accepts the following options:

    const { parts, error } = useRealtimeStream(streamOrRunId, streamKeyOrOptions, {
      accessToken: "pk_...", // Required: Public access token
      baseURL: "https://api.trigger.dev", // Optional: Custom API URL
      timeoutInSeconds: 60, // Optional: Timeout (default: 60)
      startIndex: 0, // Optional: Start from specific chunk
      throttleInMs: 16, // Optional: Throttle updates (default: 16ms)
      onData: (chunk) => {}, // Optional: Callback for each chunk
    });
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#using-default-stream)

Using Default Stream

You can omit the stream key to use the default stream:

    const { parts, error } = useRealtimeStream<string>(runId, {
      accessToken: publicAccessToken,
    });
    

For more information on defining and using streams, see the [Streaming data from tasks](https://trigger.dev/docs/tasks/streams)
 documentation.

[​](https://trigger.dev/docs/realtime/react-hooks/streams#useinputstreamsend)

useInputStreamSend
---------------------------------------------------------------------------------------------------

The `useInputStreamSend` hook lets you send data from your frontend into a running task’s [input stream](https://trigger.dev/docs/tasks/streams#input-streams)
. Use it for cancel buttons, approval forms, or any UI that needs to push typed data into a running task.

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#basic-usage-2)

Basic usage

Pass the input stream’s `id` (string), the run ID, and options such as `accessToken`. You typically get `runId` and `accessToken` from the object returned when you trigger the task (e.g. `handle.id`, `handle.publicAccessToken`). The hook returns `send`, `isLoading`, `error`, and `isReady`:

    "use client";
    
    import { useInputStreamSend } from "@trigger.dev/react-hooks";
    import { approval } from "@/trigger/streams";
    
    export function ApprovalForm({
      runId,
      accessToken,
    }: {
      runId: string;
      accessToken: string;
    }) {
      const { send, isLoading, isReady } = useInputStreamSend(
        approval.id,
        runId,
        { accessToken }
      );
    
      return (
        <button
          disabled={!isReady || isLoading}
          onClick={() => send({ approved: true, reviewer: "alice" })}
        >
          Approve
        </button>
      );
    }
    

With a generic for type-safe payloads when not using a defined stream:

    type ApprovalPayload = { approved: boolean; reviewer: string };
    const { send } = useInputStreamSend<ApprovalPayload>("approval", runId, {
      accessToken,
    });
    send({ approved: true, reviewer: "alice" });
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#options-and-return-value)

Options and return value

*   **`streamId`**: The input stream identifier (string). Use the `id` from your defined stream (e.g. `approval.id`) or the same string you used in `streams.input<T>({ id: "approval" })`.
*   **`runId`**: The run to send input to. When `runId` is undefined, `isReady` is false and `send` will not trigger.
*   **`options`**: `accessToken` (required for client usage), `baseURL` (optional). See [Realtime auth](https://trigger.dev/docs/realtime/auth)
     for generating a public access token with the right scopes (e.g. input streams write for that run).

Return value:

*   **`send(data)`**: Sends typed data to the input stream. Uses SWR mutation under the hood.
*   **`isLoading`**: True while a send is in progress.
*   **`error`**: Set if the last send failed.
*   **`isReady`**: True when both `runId` and access token are available.

For receiving input stream data inside a task (`.wait()`, `.once()`, `.on()`), see [Input Streams](https://trigger.dev/docs/tasks/streams#input-streams)
 in the Streams doc.

[​](https://trigger.dev/docs/realtime/react-hooks/streams#userealtimerunwithstreams)

useRealtimeRunWithStreams
-----------------------------------------------------------------------------------------------------------------

For new projects, we recommend using `useRealtimeStream` instead (available in SDK 4.1.0+). This hook is still supported for backward compatibility and use cases where you need to subscribe to both the run and all its streams at once.

The `useRealtimeRunWithStreams` hook allows you to subscribe to a run by its ID and also receive any streams that are emitted by the task. This is useful when you need to access both the run metadata and multiple streams simultaneously.

    "use client"; // This is needed for Next.js App Router or other RSC frameworks
    
    import { useRealtimeRunWithStreams } from "@trigger.dev/react-hooks";
    
    export function MyComponent({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { run, streams, error } = useRealtimeRunWithStreams(runId, {
        accessToken: publicAccessToken,
      });
    
      if (error) return <div>Error: {error.message}</div>;
    
      return (
        <div>
          <div>Run: {run.id}</div>
          <div>
            {Object.keys(streams).map((stream) => (
              <div key={stream}>Stream: {stream}</div>
            ))}
          </div>
        </div>
      );
    }
    

You can also provide the type of the streams to the `useRealtimeRunWithStreams` hook to get type-safety:

    import { useRealtimeRunWithStreams } from "@trigger.dev/react-hooks";
    import type { myTask } from "@/trigger/myTask";
    
    type STREAMS = {
      openai: string; // this is the type of each "part" of the stream
    };
    
    export function MyComponent({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { run, streams, error } = useRealtimeRunWithStreams<typeof myTask, STREAMS>(runId, {
        accessToken: publicAccessToken,
      });
    
      if (error) return <div>Error: {error.message}</div>;
    
      const text = streams.openai?.map((part) => part).join("");
    
      return (
        <div>
          <div>Run: {run.id}</div>
          <div>{text}</div>
        </div>
      );
    }
    

As you can see above, each stream is an array of the type you provided, keyed by the stream name. If instead of a pure text stream you have a stream of objects, you can provide the type of the object:

    import type { TextStreamPart } from "ai";
    import type { myTask } from "@/trigger/myTask";
    
    type STREAMS = { openai: TextStreamPart<{}> };
    
    export function MyComponent({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { run, streams, error } = useRealtimeRunWithStreams<typeof myTask, STREAMS>(runId, {
        accessToken: publicAccessToken,
      });
    
      if (error) return <div>Error: {error.message}</div>;
    
      const text = streams.openai
        ?.filter((stream) => stream.type === "text-delta")
        ?.map((part) => part.text)
        .join("");
    
      return (
        <div>
          <div>Run: {run.id}</div>
          <div>{text}</div>
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#streaming-ai-responses-with-userealtimerunwithstreams)

Streaming AI responses with useRealtimeRunWithStreams

Here’s an example showing how to display streaming OpenAI responses using `useRealtimeRunWithStreams`:

    import { useRealtimeRunWithStreams } from "@trigger.dev/react-hooks";
    import type { aiStreaming, STREAMS } from "./trigger/ai-streaming";
    
    function MyComponent({ runId, publicAccessToken }: { runId: string; publicAccessToken: string }) {
      const { streams } = useRealtimeRunWithStreams<typeof aiStreaming, STREAMS>(runId, {
        accessToken: publicAccessToken,
      });
    
      if (!streams.openai) {
        return <div>Loading...</div>;
      }
    
      const text = streams.openai.join(""); // `streams.openai` is an array of strings
    
      return (
        <div>
          <h2>OpenAI response:</h2>
          <p>{text}</p>
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#ai-sdk-with-tools)

AI SDK with tools

When using the AI SDK with tools with `useRealtimeRunWithStreams`, you can access tool calls and results:

    import { useRealtimeRunWithStreams } from "@trigger.dev/react-hooks";
    import type { aiStreamingWithTools, STREAMS } from "./trigger/ai-streaming";
    
    function MyComponent({ runId, publicAccessToken }: { runId: string; publicAccessToken: string }) {
      const { streams } = useRealtimeRunWithStreams<typeof aiStreamingWithTools, STREAMS>(runId, {
        accessToken: publicAccessToken,
      });
    
      if (!streams.openai) {
        return <div>Loading...</div>;
      }
    
      // streams.openai is an array of TextStreamPart
      const toolCall = streams.openai.find(
        (stream) => stream.type === "tool-call" && stream.toolName === "getWeather"
      );
      const toolResult = streams.openai.find((stream) => stream.type === "tool-result");
      const textDeltas = streams.openai.filter((stream) => stream.type === "text-delta");
    
      const text = textDeltas.map((delta) => delta.textDelta).join("");
      const weatherLocation = toolCall ? toolCall.args.location : undefined;
      const weather = toolResult ? toolResult.result.temperature : undefined;
    
      return (
        <div>
          <h2>OpenAI response:</h2>
          <p>{text}</p>
          <h2>Weather:</h2>
          <p>
            {weatherLocation
              ? `The weather in ${weatherLocation} is ${weather} degrees.`
              : "No weather data"}
          </p>
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#throttling-updates)

Throttling updates

The `useRealtimeRunWithStreams` hook accepts an `experimental_throttleInMs` option to throttle the updates from the server. This can be useful if you are getting too many updates and want to reduce the number of updates.

    import { useRealtimeRunWithStreams } from "@trigger.dev/react-hooks";
    
    export function MyComponent({
      runId,
      publicAccessToken,
    }: {
      runId: string;
      publicAccessToken: string;
    }) {
      const { run, streams, error } = useRealtimeRunWithStreams(runId, {
        accessToken: publicAccessToken,
        experimental_throttleInMs: 1000, // Throttle updates to once per second
      });
    
      if (error) return <div>Error: {error.message}</div>;
    
      return (
        <div>
          <div>Run: {run.id}</div>
          {/* Display streams */}
        </div>
      );
    }
    

All other options (accessToken, baseURL, enabled, id) work the same as the other realtime hooks. For the newer `useRealtimeStream` hook, use the `throttleInMs` option instead (see [options above](https://trigger.dev/docs/realtime/react-hooks/streams#options)
).

[​](https://trigger.dev/docs/realtime/react-hooks/streams#frequently-asked-questions)

Frequently asked questions
-------------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#how-do-i-stream-ai/llm-responses-from-a-background-task-to-react)

How do I stream AI/LLM responses from a background task to React?

Define a typed stream in your task with `streams.define<string>()`, pipe your AI SDK response to it with `.pipe()`, then consume it in your component with `useRealtimeStream`. See [Streaming data from tasks](https://trigger.dev/docs/tasks/streams)
 for the task-side setup.

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#what%E2%80%99s-the-difference-between-streaming-and-run-updates)

What’s the difference between streaming and run updates?

[Run updates](https://trigger.dev/docs/realtime/react-hooks/subscribe)
 track **run state** (status, metadata, tags). Streaming (this page) pipes **continuous data** your task produces. Use run updates for progress bars and status badges. Use streaming for AI chat output, live logs, or file processing results. You can use both at the same time.

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#can-i-send-data-back-into-a-running-task-from-react)

Can I send data back into a running task from React?

Yes. Use the `useInputStreamSend` hook to send data into a running task’s input stream. This is useful for cancel buttons, user approvals, or any interactive flow. See [Input Streams](https://trigger.dev/docs/tasks/streams#input-streams)
 for the full guide.

### 

[​](https://trigger.dev/docs/realtime/react-hooks/streams#do-streams-work-with-the-vercel-ai-sdk)

Do streams work with the Vercel AI SDK?

Yes. You can pipe a Vercel AI SDK `streamText` response directly into a Trigger.dev stream using `.pipe()`. The [Streaming data from tasks](https://trigger.dev/docs/tasks/streams)
 page has a complete AI streaming example.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/react-hooks/subscribe)
[SWRFetch and cache data using SWR-based hooks\
\
Next](https://trigger.dev/docs/realtime/react-hooks/swr)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
