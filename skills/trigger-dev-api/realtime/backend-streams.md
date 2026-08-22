# Stream data to your backend (AI, files)

> Source: https://trigger.dev/docs/realtime/backend/streams

**Read streaming data from your tasks in backend code.** Consume AI completions as they generate, process file chunks, or handle any continuous data your tasks produce.

To emit streams from your tasks, see [Streaming data from tasks](https://trigger.dev/docs/tasks/streams)
. For React components, see [Streaming in React](https://trigger.dev/docs/realtime/react-hooks/streams)
.

Run-scoped streams are the right primitive for ephemeral I/O that lives inside a single run’s lifetime. For durable, long-lived channels that outlive a run, see [`chat.agent`](https://trigger.dev/docs/ai-chat/overview)
: it’s built on a Session row that owns the chat’s runs and exposes bidirectional `.in` / `.out` channels addressed by a durable id.

[​](https://trigger.dev/docs/realtime/backend/streams#reading-streams)

Reading streams
-----------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/realtime/backend/streams#using-defined-streams-recommended)

Using defined streams (Recommended)

The recommended approach is to use [defined streams](https://trigger.dev/docs/tasks/streams#defining-typed-streams-recommended)
 for full type safety:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function consumeStream(runId: string) {
      // Read from the defined stream
      const stream = await aiStream.read(runId);
    
      let fullText = "";
    
      for await (const chunk of stream) {
        console.log("Received chunk:", chunk); // chunk is typed!
        fullText += chunk;
      }
    
      console.log("Final text:", fullText);
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#direct-stream-reading)

Direct stream reading

If you prefer not to use defined streams, you can read directly by specifying the stream key:

    import { streams } from "@trigger.dev/sdk";
    
    async function consumeStream(runId: string) {
      // Read from a stream by key
      const stream = await streams.read<string>(runId, "ai-output");
    
      for await (const chunk of stream) {
        console.log("Received chunk:", chunk);
      }
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#reading-from-the-default-stream)

Reading from the default stream

Every run has a default stream, so you can omit the stream key:

    import { streams } from "@trigger.dev/sdk";
    
    async function consumeDefaultStream(runId: string) {
      // Read from the default stream
      const stream = await streams.read<string>(runId);
    
      for await (const chunk of stream) {
        console.log("Received chunk:", chunk);
      }
    }
    

[​](https://trigger.dev/docs/realtime/backend/streams#stream-options)

Stream options
---------------------------------------------------------------------------------------

The `read()` method accepts several options for controlling stream behavior:

### 

[​](https://trigger.dev/docs/realtime/backend/streams#timeout)

Timeout

Set a timeout to stop reading if no data is received within a specified time:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function consumeWithTimeout(runId: string) {
      const stream = await aiStream.read(runId, {
        timeoutInSeconds: 120, // Wait up to 2 minutes for data
      });
    
      try {
        for await (const chunk of stream) {
          console.log("Received chunk:", chunk);
        }
      } catch (error) {
        if (error.name === "TimeoutError") {
          console.log("Stream timed out");
        }
      }
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#start-index)

Start index

Resume reading from a specific chunk index (useful for reconnection scenarios):

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function resumeStream(runId: string, lastChunkIndex: number) {
      // Start reading from the chunk after the last one we received
      const stream = await aiStream.read(runId, {
        startIndex: lastChunkIndex + 1,
      });
    
      for await (const chunk of stream) {
        console.log("Received chunk:", chunk);
      }
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#abort-signal)

Abort signal

Use an `AbortSignal` to cancel stream reading:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function consumeWithCancellation(runId: string) {
      const controller = new AbortController();
    
      // Cancel after 30 seconds
      setTimeout(() => controller.abort(), 30000);
    
      const stream = await aiStream.read(runId, {
        signal: controller.signal,
      });
    
      try {
        for await (const chunk of stream) {
          console.log("Received chunk:", chunk);
    
          // Optionally abort based on content
          if (chunk.includes("STOP")) {
            controller.abort();
          }
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Stream was cancelled");
        }
      }
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#combining-options)

Combining options

You can combine multiple options:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function advancedStreamConsumption(runId: string) {
      const controller = new AbortController();
    
      const stream = await aiStream.read(runId, {
        timeoutInSeconds: 300, // 5 minute timeout
        startIndex: 0, // Start from the beginning
        signal: controller.signal, // Allow cancellation
      });
    
      try {
        for await (const chunk of stream) {
          console.log("Received chunk:", chunk);
        }
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Stream was cancelled");
        } else if (error.name === "TimeoutError") {
          console.log("Stream timed out");
        } else {
          console.error("Stream error:", error);
        }
      }
    }
    

[​](https://trigger.dev/docs/realtime/backend/streams#practical-examples)

Practical examples
-----------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/realtime/backend/streams#reading-ai-streaming-responses)

Reading AI streaming responses

Here’s a complete example of consuming an AI stream from your backend:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function consumeAIStream(runId: string) {
      const stream = await aiStream.read(runId, {
        timeoutInSeconds: 300, // AI responses can take time
      });
    
      let fullResponse = "";
      const chunks: string[] = [];
    
      for await (const chunk of stream) {
        chunks.push(chunk);
        fullResponse += chunk;
    
        // Process each chunk as it arrives
        console.log("Chunk received:", chunk);
    
        // Could send to websocket, SSE, etc.
        // await sendToClient(chunk);
      }
    
      console.log("Stream complete!");
      console.log("Total chunks:", chunks.length);
      console.log("Full response:", fullResponse);
    
      return { fullResponse, chunks };
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#reading-multiple-streams)

Reading multiple streams

If a task emits multiple streams, you can read them concurrently or sequentially:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream, progressStream } from "./trigger/streams";
    
    async function consumeMultipleStreams(runId: string) {
      // Read streams concurrently
      const [aiData, progressData] = await Promise.all([\
        consumeStream(aiStream, runId),\
        consumeStream(progressStream, runId),\
      ]);
    
      return { aiData, progressData };
    }
    
    async function consumeStream<T>(
      streamDef: { read: (runId: string) => Promise<AsyncIterableStream<T>> },
      runId: string
    ): Promise<T[]> {
      const stream = await streamDef.read(runId);
      const chunks: T[] = [];
    
      for await (const chunk of stream) {
        chunks.push(chunk);
      }
    
      return chunks;
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#piping-streams-to-http-responses)

Piping streams to HTTP responses

You can pipe streams directly to HTTP responses for server-sent events (SSE):

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    import type { NextRequest } from "next/server";
    
    export async function GET(request: NextRequest) {
      const runId = request.nextUrl.searchParams.get("runId");
    
      if (!runId) {
        return new Response("Missing runId", { status: 400 });
      }
    
      const stream = await aiStream.read(runId, {
        timeoutInSeconds: 300,
      });
    
      // Create a readable stream for SSE
      const encoder = new TextEncoder();
      const readableStream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of stream) {
              // Format as SSE
              const data = `data: ${JSON.stringify({ chunk })}\n\n`;
              controller.enqueue(encoder.encode(data));
            }
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        },
      });
    
      return new Response(readableStream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
        },
      });
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#implementing-retry-logic)

Implementing retry logic

Handle transient errors with retry logic:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function consumeStreamWithRetry(
      runId: string,
      maxRetries = 3
    ): Promise<string[]> {
      let lastChunkIndex = 0;
      const allChunks: string[] = [];
      let attempt = 0;
    
      while (attempt < maxRetries) {
        try {
          const stream = await aiStream.read(runId, {
            startIndex: lastChunkIndex,
            timeoutInSeconds: 120,
          });
    
          for await (const chunk of stream) {
            allChunks.push(chunk);
            lastChunkIndex++;
          }
    
          // Success! Break out of retry loop
          break;
        } catch (error) {
          attempt++;
    
          if (attempt >= maxRetries) {
            throw new Error(`Failed after ${maxRetries} attempts: ${error.message}`);
          }
    
          console.log(`Retry attempt ${attempt} after error:`, error.message);
    
          // Wait before retrying (exponential backoff)
          await new Promise((resolve) => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
        }
      }
    
      return allChunks;
    }
    

### 

[​](https://trigger.dev/docs/realtime/backend/streams#processing-streams-in-chunks)

Processing streams in chunks

Process streams in batches for efficiency:

    import { streams } from "@trigger.dev/sdk";
    import { aiStream } from "./trigger/streams";
    
    async function processStreamInBatches(runId: string, batchSize = 10) {
      const stream = await aiStream.read(runId);
    
      let batch: string[] = [];
    
      for await (const chunk of stream) {
        batch.push(chunk);
    
        if (batch.length >= batchSize) {
          // Process the batch
          await processBatch(batch);
          batch = [];
        }
      }
    
      // Process remaining chunks
      if (batch.length > 0) {
        await processBatch(batch);
      }
    }
    
    async function processBatch(chunks: string[]) {
      console.log(`Processing batch of ${chunks.length} chunks`);
      // Do something with the batch
      // e.g., save to database, send to queue, etc.
    }
    

[​](https://trigger.dev/docs/realtime/backend/streams#using-with-runs-subscribetorun)

Using with `runs.subscribeToRun()`
---------------------------------------------------------------------------------------------------------------------------

For more advanced use cases where you need both the run status and streams, you can use the `runs.subscribeToRun()` method with `.withStreams()`:

    import { runs } from "@trigger.dev/sdk";
    import type { myTask } from "./trigger/myTask";
    
    async function subscribeToRunAndStreams(runId: string) {
      for await (const update of runs.subscribeToRun<typeof myTask>(runId).withStreams()) {
        switch (update.type) {
          case "run":
            console.log("Run update:", update.run.status);
            break;
          case "default":
            console.log("Stream chunk:", update.chunk);
            break;
        }
      }
    }
    

For most use cases, we recommend using `streams.read()` with defined streams for better type safety and clearer code. Use `runs.subscribeToRun().withStreams()` only when you need to track both run status and stream data simultaneously.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/realtime/backend/subscribe)
[IntroductionThe Trigger.dev CLI has a number of options and commands to help you develop locally, self host, and deploy your tasks.\
\
Next](https://trigger.dev/docs/cli-introduction)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
