# Realtime overview

> Source: https://trigger.dev/docs/realtime/overview

**Realtime is the umbrella for everything live in Trigger.dev.** It covers two things: getting notified when a run’s state changes, and streaming continuous data (like AI tokens) from a running task to your app. Both use the same `@trigger.dev/react-hooks` package and the same authentication system. The difference is what they give you.

[​](https://trigger.dev/docs/realtime/overview#run-updates-vs-streaming)

Run updates vs Streaming
----------------------------------------------------------------------------------------------------

|     | Run updates | Streaming |
| --- | --- | --- |
| **What you get** | Run state: status, metadata, tags | Continuous data you define (AI tokens, file chunks, progress) |
| **When it fires** | On state changes | While the task runs, as data is produced |
| **Use case** | Progress bars, status badges, dashboards | AI chat output, live logs, file processing |
| **React hook** | [`useRealtimeRun`](https://trigger.dev/docs/realtime/react-hooks/subscribe) | [`useRealtimeStream`](https://trigger.dev/docs/realtime/react-hooks/streams) |
| **Setup in task code?** | No, automatic | Yes, using `streams.define()` |
| **Infrastructure** | [Electric SQL](https://trigger.dev/docs/realtime/how-it-works)<br> (PostgreSQL sync) | Streams transport |

You can use both at the same time. Subscribe to a run’s status (to show a progress bar) while also streaming AI output (to display tokens as they arrive).

[​](https://trigger.dev/docs/realtime/overview#run-updates)

Run updates
--------------------------------------------------------------------------

Subscribe to a run and your code gets called whenever its status, [metadata](https://trigger.dev/docs/runs/metadata)
, or [tags](https://trigger.dev/docs/tags)
 change. No setup needed in your task code. You can subscribe to:

*   **Specific runs** by run ID
*   **Runs with specific tags** (e.g., all runs tagged with `user:123`)
*   **Batch runs** within a specific batch
*   **Trigger + subscribe combos** that trigger a task and immediately subscribe (frontend only)

→ [React hooks](https://trigger.dev/docs/realtime/react-hooks/subscribe)
 | [Backend](https://trigger.dev/docs/realtime/backend/subscribe)

[​](https://trigger.dev/docs/realtime/overview#streaming)

Streaming
----------------------------------------------------------------------

Define typed streams in your task, pipe data to them, and read that data from your frontend or backend as it’s produced. You need to set up streams in your task code using `streams.define()`. → [How to emit streams from tasks](https://trigger.dev/docs/tasks/streams)
 | [React hooks](https://trigger.dev/docs/realtime/react-hooks/streams)
 | [Backend](https://trigger.dev/docs/realtime/backend/streams)

[​](https://trigger.dev/docs/realtime/overview#authentication)

Authentication
--------------------------------------------------------------------------------

All Realtime hooks and functions require authentication. See the [authentication guide](https://trigger.dev/docs/realtime/auth)
 for setup.

[​](https://trigger.dev/docs/realtime/overview#frequently-asked-questions)

Frequently asked questions
--------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/realtime/overview#how-do-i-show-a-progress-bar-for-a-background-task)

How do I show a progress bar for a background task?

Use [run metadata](https://trigger.dev/docs/runs/metadata)
 to store progress data (like a percentage), then subscribe to the run with [`useRealtimeRun`](https://trigger.dev/docs/realtime/react-hooks/subscribe)
. Your component re-renders on every metadata update.

### 

[​](https://trigger.dev/docs/realtime/overview#how-do-i-stream-ai/llm-responses-from-a-background-task)

How do I stream AI/LLM responses from a background task?

Define a stream in your task with `streams.define()`, pipe your AI SDK response to it, then consume it in React with [`useRealtimeStream`](https://trigger.dev/docs/realtime/react-hooks/streams)
. See [Streaming data from tasks](https://trigger.dev/docs/tasks/streams)
 for the full guide.

### 

[​](https://trigger.dev/docs/realtime/overview#do-i-need-websockets-or-polling)

Do I need WebSockets or polling?

No. Run updates are powered by [Electric SQL](https://trigger.dev/docs/realtime/how-it-works)
 (HTTP-based PostgreSQL syncing). Streams use their own transport. The hooks handle connections automatically.

### 

[​](https://trigger.dev/docs/realtime/overview#can-i-use-both-run-updates-and-streaming-together)

Can I use both run updates and streaming together?

Yes. A common pattern: subscribe to run status with `useRealtimeRun` (progress indicator) while streaming AI output with `useRealtimeStream` (token-by-token display).

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/private-networking/troubleshooting)
[How it worksTechnical architecture behind Trigger.dev's real-time run updates, built on Electric SQL and PostgreSQL syncing.\
\
Next](https://trigger.dev/docs/realtime/how-it-works)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
