# Streaming data from tasks

> Source: https://trigger.dev/docs/tasks/streams

**Streams let you pipe data from a running task to your frontend or backend as it’s produced.** Think AI completions token by token, progress updates, or file chunks. You can also **send data into** running tasks with [Input Streams](https://trigger.dev/docs/tasks/streams#input-streams)
 for bidirectional flows (cancel buttons, approvals). For subscribing to **run state changes** (status, metadata, tags) instead, see [Realtime](https://trigger.dev/docs/realtime/overview)
.

Streams require SDK version **4.1.0 or later** (`@trigger.dev/sdk` and `@trigger.dev/react-hooks`). This doc describes the current streams behavior (v2 is the default). For pre-4.1.0 streams, see [Pre-4.1.0 streams (legacy)](https://trigger.dev/docs/tasks/streams#pre-410-streams-legacy)
 below.

[​](https://trigger.dev/docs/tasks/streams#overview)

Overview
----------------------------------------------------------------

Streams provide:

*   **Unlimited stream length** (previously capped at 2000 chunks)
*   **Unlimited active streams per run** (previously 5)
*   **Improved reliability** with automatic resumption on connection loss
*   **28-day stream retention** (previously 1 day)
*   **Multiple client streams** can pipe to a single stream
*   **Enhanced dashboard visibility** for viewing stream data in real-time

Streams v2 is the **default** when using SDK 4.1.0 or later. If you trigger tasks outside the SDK, set the `x-trigger-realtime-streams-version=v2` header. To opt out, use `auth.configure({ future: { v2RealtimeStreams: false } })` or `TRIGGER_V2_REALTIME_STREAMS=0`.

[​](https://trigger.dev/docs/tasks/streams#limits-comparison)

Limits Comparison
----------------------------------------------------------------------------------

| Limit | Legacy (pre-4.1.0) | Current |
| --- | --- | --- |
| Maximum stream length | 2000 | Unlimited |
| Number of active streams per run | 5   | Unlimited |
| Maximum streams per run | 10  | Unlimited |
| Maximum stream TTL | 1 day | 28 days |
| Maximum stream size | 10MB | 300 MiB |

[​](https://trigger.dev/docs/tasks/streams#quick-start)

Quick Start
----------------------------------------------------------------------

The recommended workflow for **output** streams (data from task to client):

1.  **Define your streams** in a shared location using `streams.define()`
2.  **Use the defined stream** in your tasks with `.pipe()`, `.append()`, or `.writer()`
3.  **Read from the stream** using `.read()` or the `useRealtimeStream` hook in React

This approach gives you full type safety, better code organization, and easier maintenance as your application grows. For **input** streams (sending data into a running task), see [Input Streams](https://trigger.dev/docs/tasks/streams#input-streams)
 below.

[​](https://trigger.dev/docs/tasks/streams#defining-typed-streams-recommended)

Defining Typed Streams (Recommended)
----------------------------------------------------------------------------------------------------------------------

The recommended way to work with streams is to define them once with `streams.define()`. This allows you to specify the chunk type and stream ID in one place, and then reuse that definition throughout your codebase with full type safety.

### 

[​](https://trigger.dev/docs/tasks/streams#creating-a-defined-stream)

Creating a Defined Stream

Define your streams in a shared location (like `app/streams.ts` or `trigger/streams.ts`):

    import { streams, InferStreamType } from "@trigger.dev/sdk";
    
    // Define a stream with a specific type
    export const aiStream = streams.define<string>({
      id: "ai-output",
    });
    
    // Export the type for use in frontend components
    export type AIStreamPart = InferStreamType<typeof aiStream>;
    

You can define streams for any JSON-serializable type:

    import { streams, InferStreamType } from "@trigger.dev/sdk";
    import { UIMessageChunk } from "ai";
    
    // Stream for AI UI message chunks
    export const aiStream = streams.define<UIMessageChunk>({
      id: "ai",
    });
    
    // Stream for progress updates
    export const progressStream = streams.define<{ step: string; percent: number }>({
      id: "progress",
    });
    
    // Stream for simple text
    export const logStream = streams.define<string>({
      id: "logs",
    });
    
    // Export types
    export type AIStreamPart = InferStreamType<typeof aiStream>;
    export type ProgressStreamPart = InferStreamType<typeof progressStream>;
    export type LogStreamPart = InferStreamType<typeof logStream>;
    

### 

[​](https://trigger.dev/docs/tasks/streams#using-defined-streams-in-tasks)

Using Defined Streams in Tasks

Once defined, you can use all stream methods on your defined stream:

    import { task } from "@trigger.dev/sdk";
    import { aiStream } from "./streams";
    
    export const streamTask = task({
      id: "stream-task",
      run: async (payload: { prompt: string }) => {
        // Get a stream from an AI service, database, etc.
        const stream = await getAIStream(payload.prompt);
    
        // Pipe the stream using your defined stream
        const { stream: readableStream, waitUntilComplete } = aiStream.pipe(stream);
    
        // Option A: Iterate over the stream locally
        for await (const chunk of readableStream) {
          console.log("Received chunk:", chunk);
        }
    
        // Option B: Wait for the stream to complete
        await waitUntilComplete();
    
        return { message: "Stream completed" };
      },
    });
    

#### 

[​](https://trigger.dev/docs/tasks/streams#reading-from-a-stream)

Reading from a Stream

Use the defined stream’s `read()` method to consume data from anywhere (frontend, backend, or another task):

    import { aiStream } from "./streams";
    
    const stream = await aiStream.read(runId);
    
    for await (const chunk of stream) {
      console.log(chunk); // chunk is typed as the stream's chunk type
    }
    

With options:

    const stream = await aiStream.read(runId, {
      timeoutInSeconds: 60, // Stop if no data for 60 seconds
      startIndex: 10, // Start from the 10th chunk
    });
    

#### 

[​](https://trigger.dev/docs/tasks/streams#appending-to-a-stream)

Appending to a Stream

Use the defined stream’s `append()` method to add a single chunk:

    import { task } from "@trigger.dev/sdk";
    import { aiStream, progressStream, logStream } from "./streams";
    
    export const appendTask = task({
      id: "append-task",
      run: async (payload) => {
        // Append to different streams with full type safety
        await logStream.append("Processing started");
        await progressStream.append({ step: "Initialization", percent: 0 });
    
        // Do some work...
    
        await progressStream.append({ step: "Processing", percent: 50 });
        await logStream.append("Step 1 complete");
    
        // Do more work...
    
        await progressStream.append({ step: "Complete", percent: 100 });
        await logStream.append("All steps complete");
      },
    });
    

#### 

[​](https://trigger.dev/docs/tasks/streams#writing-multiple-chunks)

Writing Multiple Chunks

Use the defined stream’s `writer()` method for more complex stream writing:

    import { task } from "@trigger.dev/sdk";
    import { logStream } from "./streams";
    
    export const writerTask = task({
      id: "writer-task",
      run: async (payload) => {
        const { waitUntilComplete } = logStream.writer({
          execute: ({ write, merge }) => {
            // Write individual chunks
            write("Chunk 1");
            write("Chunk 2");
    
            // Merge another stream
            const additionalStream = ReadableStream.from(["Chunk 3", "Chunk 4", "Chunk 5"]);
            merge(additionalStream);
          },
        });
    
        await waitUntilComplete();
      },
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#using-defined-streams-in-react)

Using Defined Streams in React

Defined streams work seamlessly with the `useRealtimeStream` hook:

    "use client";
    
    import { useRealtimeStream } from "@trigger.dev/react-hooks";
    import { aiStream } from "@/app/streams";
    
    export function StreamViewer({ accessToken, runId }: { accessToken: string; runId: string }) {
      // Pass the defined stream directly - full type safety!
      const { parts, error } = useRealtimeStream(aiStream, runId, {
        accessToken,
        timeoutInSeconds: 600,
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
    

[​](https://trigger.dev/docs/tasks/streams#direct-stream-methods-without-defining)

Direct Stream Methods (Without Defining)
------------------------------------------------------------------------------------------------------------------------------

We strongly recommend using `streams.define()` instead of direct methods. Defined streams provide better organization, full type safety, and make it easier to maintain your codebase as it grows.

If you have a specific reason to avoid defined streams, you can use stream methods directly by specifying the stream key each time.

### 

[​](https://trigger.dev/docs/tasks/streams#direct-piping)

Direct Piping

    import { streams, task } from "@trigger.dev/sdk";
    
    export const directStreamTask = task({
      id: "direct-stream",
      run: async (payload: { prompt: string }) => {
        const stream = await getAIStream(payload.prompt);
    
        // Specify the stream key directly
        const { stream: readableStream, waitUntilComplete } = streams.pipe("ai-output", stream);
    
        await waitUntilComplete();
      },
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#direct-reading)

Direct Reading

    import { streams } from "@trigger.dev/sdk";
    
    // Specify the stream key when reading
    const stream = await streams.read(runId, "ai-output");
    
    for await (const chunk of stream) {
      console.log(chunk);
    }
    

### 

[​](https://trigger.dev/docs/tasks/streams#direct-appending)

Direct Appending

    import { streams, task } from "@trigger.dev/sdk";
    
    export const directAppendTask = task({
      id: "direct-append",
      run: async (payload) => {
        // Specify the stream key each time
        await streams.append("logs", "Processing started");
        await streams.append("progress", "50%");
        await streams.append("logs", "Complete");
      },
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#direct-writing)

Direct Writing

    import { streams, task } from "@trigger.dev/sdk";
    
    export const directWriterTask = task({
      id: "direct-writer",
      run: async (payload) => {
        const { waitUntilComplete } = streams.writer("output", {
          execute: ({ write, merge }) => {
            write("Chunk 1");
            write("Chunk 2");
          },
        });
    
        await waitUntilComplete();
      },
    });
    

[​](https://trigger.dev/docs/tasks/streams#default-stream)

Default Stream
----------------------------------------------------------------------------

Every run has a “default” stream, allowing you to skip the stream key entirely. This is useful for simple cases where you only need one stream per run. Using direct methods:

    import { streams, task } from "@trigger.dev/sdk";
    
    export const defaultStreamTask = task({
      id: "default-stream",
      run: async (payload) => {
        const stream = getDataStream();
    
        // No stream key needed - uses "default"
        const { waitUntilComplete } = streams.pipe(stream);
    
        await waitUntilComplete();
      },
    });
    
    // Reading from the default stream
    const readStream = await streams.read(runId);
    

[​](https://trigger.dev/docs/tasks/streams#targeting-different-runs)

Targeting Different Runs
------------------------------------------------------------------------------------------------

You can pipe streams to parent, root, or any other run using the `target` option. This works with both defined streams and direct methods.

### 

[​](https://trigger.dev/docs/tasks/streams#with-defined-streams)

With Defined Streams

    import { task } from "@trigger.dev/sdk";
    import { logStream } from "./streams";
    
    export const childTask = task({
      id: "child-task",
      run: async (payload, { ctx }) => {
        const stream = getDataStream();
    
        // Pipe to parent run
        logStream.pipe(stream, { target: "parent" });
    
        // Pipe to root run
        logStream.pipe(stream, { target: "root" });
    
        // Pipe to self (default behavior)
        logStream.pipe(stream, { target: "self" });
    
        // Pipe to a specific run ID
        logStream.pipe(stream, { target: payload.otherRunId });
      },
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#with-direct-methods)

With Direct Methods

    import { streams, task } from "@trigger.dev/sdk";
    
    export const childTask = task({
      id: "child-task",
      run: async (payload, { ctx }) => {
        const stream = getDataStream();
    
        // Pipe to parent run
        streams.pipe("output", stream, { target: "parent" });
    
        // Pipe to root run
        streams.pipe("output", stream, { target: "root" });
    
        // Pipe to a specific run ID
        streams.pipe("output", stream, { target: payload.otherRunId });
      },
    });
    

[​](https://trigger.dev/docs/tasks/streams#streaming-from-outside-a-task)

Streaming from Outside a Task
----------------------------------------------------------------------------------------------------------

If you specify a `target` run ID, you can pipe streams from anywhere (like a Next.js API route):

    import { streams } from "@trigger.dev/sdk";
    import { openai } from "@ai-sdk/openai";
    import { streamText } from "ai";
    
    export async function POST(req: Request) {
      const { messages, runId } = await req.json();
    
      const result = streamText({
        model: openai("gpt-4o"),
        messages,
      });
    
      // Pipe AI stream to a Trigger.dev run
      const { stream } = streams.pipe("ai-stream", result.toUIMessageStream(), {
        target: runId,
      });
    
      return new Response(stream as any, {
        headers: { "Content-Type": "text/event-stream" },
      });
    }
    

[​](https://trigger.dev/docs/tasks/streams#react-hook)

React Hook
--------------------------------------------------------------------

Use the `useRealtimeStream` hook to subscribe to streams in your React components.

### 

[​](https://trigger.dev/docs/tasks/streams#with-defined-streams-recommended)

With Defined Streams (Recommended)

    "use client";
    
    import { useRealtimeStream } from "@trigger.dev/react-hooks";
    import { aiStream } from "@/app/streams";
    
    export function StreamViewer({ accessToken, runId }: { accessToken: string; runId: string }) {
      // Pass the defined stream directly for full type safety
      const { parts, error } = useRealtimeStream(aiStream, runId, {
        accessToken,
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

[​](https://trigger.dev/docs/tasks/streams#with-direct-stream-keys)

With Direct Stream Keys

If you prefer not to use defined streams, you can specify the stream key directly:

    "use client";
    
    import { useRealtimeStream } from "@trigger.dev/react-hooks";
    
    export function StreamViewer({ accessToken, runId }: { accessToken: string; runId: string }) {
      const { parts, error } = useRealtimeStream<string>(runId, "ai-output", {
        accessToken,
        timeoutInSeconds: 600,
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

[​](https://trigger.dev/docs/tasks/streams#using-default-stream)

Using Default Stream

    // Omit stream key to use the default stream
    const { parts, error } = useRealtimeStream<string>(runId, {
      accessToken,
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#hook-options)

Hook Options

    const { parts, error } = useRealtimeStream(streamDef, runId, {
      accessToken: "pk_...", // Required: Public access token
      baseURL: "https://api.trigger.dev", // Optional: Custom API URL
      timeoutInSeconds: 60, // Optional: Timeout (default: 60)
      startIndex: 0, // Optional: Start from specific chunk
      throttleInMs: 16, // Optional: Throttle updates (default: 16ms)
      onData: (chunk) => {}, // Optional: Callback for each chunk
    });
    

[​](https://trigger.dev/docs/tasks/streams#input-streams)

Input Streams
--------------------------------------------------------------------------

Input Streams let you send data **into** a running task from your backend or frontend. While output streams (above) send data out of tasks, input streams complete the loop — enabling bidirectional communication.

Input Streams require SDK version **4.4.2 or later** and use the same streams infrastructure (v2 is the default). If you’re on an older SDK, calling `.on()` or `.once()` will throw with instructions to enable v2 streams. See [Pre-4.1.0 streams (legacy)](https://trigger.dev/docs/tasks/streams#pre-410-streams-legacy)
 for the older metadata-based API.

### 

[​](https://trigger.dev/docs/tasks/streams#input-streams-overview)

Input Streams overview

Input Streams solve three common problems:

*   **Cancelling AI streams mid-generation.** When you use AI SDK’s `streamText` inside a task, the LLM keeps generating until it’s done — even if the user clicked “Stop.” With input streams, your frontend sends a cancel signal and the task aborts the LLM call immediately.
*   **Human-in-the-loop workflows.** A task generates a draft, then pauses and waits for the user to approve or edit it before continuing.
*   **Interactive agents.** An AI agent running as a task needs follow-up information from the user mid-execution — clarifying a question, choosing between options, or providing additional context.

### 

[​](https://trigger.dev/docs/tasks/streams#quick-start-input-streams)

Quick Start (Input Streams)

1.  **Define** input streams in a shared file with `streams.input<T>({ id: "..." })`.
2.  **Receive** in your task with `.wait()`, `.once()`, `.on()`, or `.peek()`.
3.  **Send** from your backend with `.send(runId, data)` or from the frontend with the `useInputStreamSend` hook (see [Realtime React hooks](https://trigger.dev/docs/realtime/react-hooks/streams#useinputstreamsend)
    ).

### 

[​](https://trigger.dev/docs/tasks/streams#defining-input-streams)

Defining Input Streams

Use `streams.input()` to define a typed input stream. The generic parameter controls the shape of data that can be sent:

    import { streams } from "@trigger.dev/sdk";
    
    export const cancelSignal = streams.input<{ reason?: string }>({
      id: "cancel",
    });
    
    export const approval = streams.input<{ approved: boolean; reviewer: string }>({
      id: "approval",
    });
    
    export const userResponse = streams.input<{
      action: "approve" | "reject" | "edit";
      message?: string;
      edits?: Record<string, string>;
    }>({
      id: "user-response",
    });
    

Type safety is enforced through the generic — both `.send()` and the receiving methods (`.wait()`, `.once()`, `.on()`, `.peek()`) share the same type.

### 

[​](https://trigger.dev/docs/tasks/streams#receiving-data-inside-a-task)

Receiving data inside a task

| Method | Task suspended? | Compute cost while waiting | Best for |
| --- | --- | --- | --- |
| `.wait()` | **Yes** | **None** — process freed | Approval gates, human-in-the-loop, long waits |
| `.once()` | No  | Full — process stays alive | Short waits, concurrent work; returns result object with `.unwrap()` |
| `.on(handler)` | No  | Full — process stays alive | Continuous listening (cancel signals, live updates) |
| `.peek()` | No  | None | Non-blocking check for latest buffered value |

#### 

[​](https://trigger.dev/docs/tasks/streams#wait-%E2%80%94-suspend-until-data-arrives)

`wait()` — Suspend until data arrives

Suspends the task entirely, freeing compute resources. The task resumes when data arrives via `.send()`. Returns a [`ManualWaitpointPromise`](https://trigger.dev/docs/wait-for-token)
 — the same type as `wait.forToken()`.

    import { task } from "@trigger.dev/sdk";
    import { approval } from "./streams";
    
    export const publishPost = task({
      id: "publish-post",
      run: async (payload: { postId: string }) => {
        const draft = await prepareDraft(payload.postId);
        await notifyReviewer(draft);
    
        const result = await approval.wait({ timeout: "7d" });
    
        if (result.ok) {
          if (result.output.approved) {
            await publish(draft);
            return { published: true, reviewer: result.output.reviewer };
          }
          return { published: false, reviewer: result.output.reviewer };
        }
        return { published: false, timedOut: true };
      },
    });
    

Use `.unwrap()` to throw on timeout: `const data = await approval.wait({ timeout: "24h" }).unwrap();` **Options:** `timeout` (e.g. `"30s"`, `"5m"`, `"24h"`, `"7d"`), `idempotencyKey`, `idempotencyKeyTTL`, `tags`. Use `idempotencyKey` when your task has retries so the same waitpoint is resumed across retries.

#### 

[​](https://trigger.dev/docs/tasks/streams#once-%E2%80%94-wait-for-the-next-value-non-suspending)

`once()` — Wait for the next value (non-suspending)

Blocks until data arrives but keeps the task process alive. Returns a result object; use `.unwrap()` to get the data or throw on timeout.

    const result = await approval.once({ timeoutMs: 300_000 });
    if (result.ok) {
      console.log(result.output.approved);
    }
    // Or: const data = await approval.once({ timeoutMs: 300_000 }).unwrap();
    

`once()` also accepts a `signal` (e.g. `AbortController.signal`) for cancellation.

#### 

[​](https://trigger.dev/docs/tasks/streams#on-%E2%80%94-listen-for-every-value)

`on()` — Listen for every value

Registers a persistent handler that fires on every piece of data. Handlers are automatically cleaned up when the task run completes. Call `.off()` on the returned subscription to stop listening early.

    const controller = new AbortController();
    cancelSignal.on((data) => {
      console.log("Cancelled:", data.reason);
      controller.abort();
    });
    const result = streamText({ ..., abortSignal: controller.signal });
    

#### 

[​](https://trigger.dev/docs/tasks/streams#peek-%E2%80%94-non-blocking-check)

`peek()` — Non-blocking check

Returns the most recent buffered value without waiting, or `undefined` if nothing has been received yet.

    const latest = cancelSignal.peek();
    if (latest) {
      // A cancel was already sent before we checked
    }
    

### 

[​](https://trigger.dev/docs/tasks/streams#sending-data-to-a-running-task)

Sending data to a running task

Use `.send(runId, data)` from your backend to push data into a running task. See the [backend input streams guide](https://trigger.dev/docs/realtime/backend/input-streams)
 for API route patterns.

    import { cancelSignal, approval } from "./trigger/streams";
    
    await cancelSignal.send(runId, { reason: "User clicked stop" });
    await approval.send(runId, { approved: true, reviewer: "alice@example.com" });
    

### 

[​](https://trigger.dev/docs/tasks/streams#complete-example-cancellable-ai-streaming)

Complete example: Cancellable AI streaming

Stream an AI response while allowing the user to cancel mid-generation. **Define the streams:**

    import { streams } from "@trigger.dev/sdk";
    
    export const aiOutput = streams.define<string>({ id: "ai" });
    export const cancelStream = streams.input<{ reason?: string }>({ id: "cancel" });
    

**Task:** Register `cancelStream.on()` to abort an `AbortController`, then pipe `streamText(...).textStream` to `aiOutput`. **Backend:** POST to an API route that calls `cancelStream.send(runId, { reason: "User clicked stop" })`. **Frontend:** Use `useRealtimeStream(aiOutput, runId, { accessToken })` and a button that calls your cancel API (or use the `useInputStreamSend` hook; see [Realtime React hooks](https://trigger.dev/docs/realtime/react-hooks/streams#useinputstreamsend)
). **Important notes (input streams):** You cannot send to a completed, failed, or canceled run. Max payload per `.send()` is 1MB. Data sent before a listener is registered is buffered and delivered when a listener attaches; `.wait()` handles the buffering race automatically. Use `.wait()` for long waits to free compute; use `.once()` for short waits or concurrent work. Define input streams in a shared location and combine with output streams for full bidirectional communication.

[​](https://trigger.dev/docs/tasks/streams#complete-example-ai-streaming)

Complete Example: AI Streaming
-----------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/tasks/streams#define-the-stream)

Define the stream

    // app/streams.ts
    import { streams, InferStreamType } from "@trigger.dev/sdk";
    import { UIMessageChunk } from "ai";
    
    export const aiStream = streams.define<UIMessageChunk>({
      id: "ai",
    });
    
    export type AIStreamPart = InferStreamType<typeof aiStream>;
    

### 

[​](https://trigger.dev/docs/tasks/streams#create-the-task)

Create the task

    // trigger/ai-task.ts
    import { task } from "@trigger.dev/sdk";
    import { openai } from "@ai-sdk/openai";
    import { streamText } from "ai";
    import { aiStream } from "@/app/streams";
    
    export const generateAI = task({
      id: "generate-ai",
      run: async (payload: { prompt: string }) => {
        const result = streamText({
          model: openai("gpt-4o"),
          prompt: payload.prompt,
        });
    
        const { waitUntilComplete } = aiStream.pipe(result.toUIMessageStream());
    
        await waitUntilComplete();
    
        return { success: true };
      },
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#frontend-component)

Frontend component

    // components/ai-stream.tsx
    "use client";
    
    import { useRealtimeStream } from "@trigger.dev/react-hooks";
    import { aiStream } from "@/app/streams";
    
    export function AIStream({ accessToken, runId }: { accessToken: string; runId: string }) {
      const { parts, error } = useRealtimeStream(aiStream, runId, {
        accessToken,
        timeoutInSeconds: 300,
      });
    
      if (error) return <div>Error: {error.message}</div>;
      if (!parts) return <div>Loading...</div>;
    
      return (
        <div className="prose">
          {parts.map((part, i) => (
            <span key={i}>{part}</span>
          ))}
        </div>
      );
    }
    

[​](https://trigger.dev/docs/tasks/streams#migration-from-v1)

Migration from v1
----------------------------------------------------------------------------------

If you’re using the old `metadata.stream()` API, here’s how to migrate to the recommended v2 approach:

### 

[​](https://trigger.dev/docs/tasks/streams#step-1-define-your-streams)

Step 1: Define Your Streams

Create a shared streams definition file:

    // app/streams.ts or trigger/streams.ts
    import { streams, InferStreamType } from "@trigger.dev/sdk";
    
    export const myStream = streams.define<string>({
      id: "my-stream",
    });
    
    export type MyStreamPart = InferStreamType<typeof myStream>;
    

### 

[​](https://trigger.dev/docs/tasks/streams#step-2-update-your-tasks)

Step 2: Update Your Tasks

Replace `metadata.stream()` with the defined stream’s `pipe()` method:

    // Before (v1)
    import { metadata, task } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async (payload) => {
        const stream = getDataStream();
        await metadata.stream("my-stream", stream);
      },
    });
    

    // After (v2 - Recommended)
    import { task } from "@trigger.dev/sdk";
    import { myStream } from "./streams";
    
    export const myTask = task({
      id: "my-task",
      run: async (payload) => {
        const stream = getDataStream();
    
        // Don't await - returns immediately
        const { waitUntilComplete } = myStream.pipe(stream);
    
        // Optionally wait for completion
        await waitUntilComplete();
      },
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#step-3-update-your-frontend)

Step 3: Update Your Frontend

Use the defined stream with `useRealtimeStream`:

    // Before
    const { parts, error } = useRealtimeStream<string>(runId, "my-stream", {
      accessToken,
    });
    

    // After
    import { myStream } from "@/app/streams";
    
    const { parts, error } = useRealtimeStream(myStream, runId, {
      accessToken,
    });
    

### 

[​](https://trigger.dev/docs/tasks/streams#alternative-direct-methods-not-recommended)

Alternative: Direct Methods (Not Recommended)

If you prefer not to use defined streams, you can use direct methods:

    import { streams, task } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async (payload) => {
        const stream = getDataStream();
        const { waitUntilComplete } = streams.pipe("my-stream", stream);
        await waitUntilComplete();
      },
    });
    

[​](https://trigger.dev/docs/tasks/streams#reliability-features)

Reliability Features
----------------------------------------------------------------------------------------

Streams v2 includes automatic reliability improvements:

*   **Automatic resumption**: If a connection is lost, both appending and reading will automatically resume from the last successful chunk
*   **No data loss**: Network issues won’t cause stream data to be lost
*   **Idempotent operations**: Duplicate chunks are automatically handled

These improvements happen automatically - no code changes needed.

[​](https://trigger.dev/docs/tasks/streams#dashboard-integration)

Dashboard Integration
------------------------------------------------------------------------------------------

Streams are now visible in the Trigger.dev dashboard, allowing you to:

*   View stream data in real-time as it’s generated
*   Inspect historical stream data for completed runs
*   Debug streaming issues with full visibility into chunk delivery

[​](https://trigger.dev/docs/tasks/streams#best-practices)

Best Practices
----------------------------------------------------------------------------

1.  **Always use `streams.define()`**: Define your streams in a shared location for better organization, type safety, and code reusability. This is the recommended approach for all streams.
2.  **Export stream types**: Use `InferStreamType` to export types for your frontend components
3.  **Handle errors gracefully**: Always check for errors when reading streams in your UI
4.  **Set appropriate timeouts**: Adjust `timeoutInSeconds` based on your use case (AI completions may need longer timeouts)
5.  **Target parent runs**: When orchestrating with child tasks, pipe to parent runs for easier consumption
6.  **Throttle frontend updates**: Use `throttleInMs` in `useRealtimeStream` to prevent excessive re-renders
7.  **Use descriptive stream IDs**: Choose clear, descriptive IDs like `"ai-output"` or `"progress"` instead of generic names

[​](https://trigger.dev/docs/tasks/streams#pre-4-1-0-streams-legacy)

Pre-4.1.0 streams (legacy)
--------------------------------------------------------------------------------------------------

Prior to SDK 4.1.0, streams used the older metadata-based API. If you’re on an earlier version, see [metadata.stream()](https://trigger.dev/docs/runs/metadata#stream)
 for legacy usage. With 4.4.2+, [Input Streams](https://trigger.dev/docs/tasks/streams#input-streams)
 are available and documented in this page.

[​](https://trigger.dev/docs/tasks/streams#troubleshooting)

Troubleshooting
------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/tasks/streams#stream-not-appearing-in-dashboard)

Stream not appearing in dashboard

*   Verify your task is actually writing to the stream
*   Check that the stream key matches between writing and reading

### 

[​](https://trigger.dev/docs/tasks/streams#stream-timeout-errors)

Stream timeout errors

*   Increase `timeoutInSeconds` in your `read()` or `useRealtimeStream()` calls
*   Ensure your stream source is actively producing data
*   Check network connectivity between your application and Trigger.dev

### 

[​](https://trigger.dev/docs/tasks/streams#missing-chunks)

Missing chunks

*   With the current streams implementation, chunks should not be lost due to automatic resumption
*   Verify you’re reading from the correct stream key
*   Check the `startIndex` option if you’re not seeing expected chunks

### 

[​](https://trigger.dev/docs/tasks/streams#input-streams-not-working)

Input streams not working

*   Input streams require SDK **4.4.2 or later** and the default streams (v2) infrastructure. Ensure you’re on a recent SDK and not using the legacy metadata.stream() API.
*   If `.on()` or `.once()` throw, follow the error message to enable v2 streams (they are default in 4.1.0+).

### 

[​](https://trigger.dev/docs/tasks/streams#%E2%80%9Dstream-is-being-deleted%E2%80%9D-during-long-waits)

”Stream is being deleted” during long waits

If a stream is created but stays empty for ~1 hour (for example, during a long `wait.forToken()` or `wait.for()`), the streams backend may garbage-collect it. When the run resumes and tries to use the stream, you’ll see `S2Error: Stream is being deleted` and the task retries from the beginning. Two ways to avoid this:

*   Close the stream before the wait and open a new one when the run resumes.
*   Write a heartbeat record to the stream every 20–30 minutes during the wait so it’s never empty long enough to be deleted.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/runs/metadata)
[UsageGet compute duration and cost from inside a run, or for a specific block of code.\
\
Next](https://trigger.dev/docs/run-usage)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
