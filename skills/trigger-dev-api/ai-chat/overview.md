# AI Agents

> Source: https://trigger.dev/docs/ai-chat/overview

The AI Agents and Prompts surface ships as part of the **v4.5 release candidate**. Install with `@trigger.dev/sdk@rc` (or pin `4.5.0-rc.0` or later) to use these features — they aren’t yet on the latest stable, and APIs may still change before the 4.5.0 GA. See [supported AI SDK versions](https://trigger.dev/docs/ai-chat/reference#compatibility)
 and the [AI chat changelog](https://trigger.dev/docs/ai-chat/changelog)
 for details.

An AI chat isn’t a request — it’s a session. `chat.agent` runs every conversation as a single long-lived Trigger.dev task: you write the loop, it wakes up when a message arrives, freezes when none do, and the same in-memory state and on-disk workspace survive across page refreshes, deploys, idle gaps, and crashes. The substrate handles the parts most teams stitch together by hand — turn lifecycle, mid-stream resume, recovery from cancel/crash/OOM, HITL approvals, deploy upgrades — so your code is the loop you’d write anyway: messages in, `streamText` out.

[​](https://trigger.dev/docs/ai-chat/overview#a-minimal-example)

A minimal example
-------------------------------------------------------------------------------------

A `chat.agent` task takes `messages`, calls `streamText`, and returns the result. The frontend wires the [Vercel AI SDK’s `useChat`](https://ai-sdk.dev/docs/reference/ai-sdk-ui/use-chat)
 to a `TriggerChatTransport`. No API routes.

trigger/chat.ts

    import { chat } from "@trigger.dev/sdk/ai";
    import { streamText, stepCountIs } from "ai";
    import { anthropic } from "@ai-sdk/anthropic";
    
    export const myChat = chat.agent({
      id: "my-chat",
      run: async ({ messages, signal }) =>
        streamText({
          model: anthropic("claude-sonnet-4-5"),
          messages,
          abortSignal: signal,
          stopWhen: stepCountIs(15),
        }),
    });
    

app/components/Chat.tsx

    import { useChat } from "@ai-sdk/react";
    import { useTriggerChatTransport } from "@trigger.dev/sdk/chat/react";
    
    export function Chat() {
      const transport = useTriggerChatTransport<typeof myChat>({
        task: "my-chat",
        accessToken: ({ chatId }) => mintChatAccessToken(chatId),
        startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      });
      const { messages, sendMessage } = useChat({ transport });
      // ... render UI
    }
    

See [Quick Start](https://trigger.dev/docs/ai-chat/quick-start)
 for the matching server actions and a runnable project.

[​](https://trigger.dev/docs/ai-chat/overview#why-use-ai-agents-on-trigger-dev)

Why use AI Agents on Trigger.dev
-------------------------------------------------------------------------------------------------------------------

*   **Resume across refreshes, deploys, and crashes.** A chat in progress when you redeploy keeps streaming on the new version. Mid-stream refreshes pick up where they left off.
*   **Native AI SDK support.** Text, tool calls, reasoning, and custom `data-*` parts all flow through `useChat` over a custom `ChatTransport`. No custom protocol to maintain.
*   **Multi-turn for free.** Each turn is a step inside the same durable task; conversation history accumulates server-side, so clients only ship the new message.
*   **Fast cold starts.** Opt-in [Head Start](https://trigger.dev/docs/ai-chat/fast-starts#head-start)
     runs the first `streamText` step in your warm Next.js / Hono / SvelteKit server while the agent boots in parallel — cuts time-to-first-chunk roughly in half.
*   **Production primitives ship in the box.** Stop generation, steering, edits, branching, sub-agents, HITL tool approvals, version upgrades, recovery from cancel/crash/OOM — all first-class.
*   **Observable.** Every turn is a span in the Trigger.dev dashboard. Sessions are queryable via `sessions.list` for inbox-style UIs.

[​](https://trigger.dev/docs/ai-chat/overview#how-it-fits-together)

How it fits together
-------------------------------------------------------------------------------------------

Three primitives, related but distinct:

*   **Chat agents** — the SDK surface you define with [`chat.agent()`](https://trigger.dev/docs/ai-chat/backend#chat-agent)
    . Owns the turn loop, lifecycle hooks, and the response stream.
*   **Sessions** — the durable, bi-directional channel keyed on `chatId` that holds the conversation across run boundaries. A chat agent runs _on top of_ a [Session](https://trigger.dev/docs/ai-chat/sessions)
    .
*   **Sub-agents** — Delegate work from one agent to another via [`AgentChat`](https://trigger.dev/docs/ai-chat/patterns/sub-agents)
    . The sub-agent runs as its own durable agent on its own session; its response streams back through the parent as preliminary tool results, so the frontend sees the sub-agent working inside the parent’s tool card.

[​](https://trigger.dev/docs/ai-chat/overview#next-steps)

Next steps
-----------------------------------------------------------------------

Quick Start
-----------

Get a working chat in three steps — agent, token, frontend.

How it works
------------

Sessions, the turn loop, durable streams, and what survives a refresh.

Backend
-------

`chat.agent` options, lifecycle hooks, and the raw-task primitives.

Tools
-----

Declare tools so `toModelOutput` survives across turns, typed in `run()`.

Patterns
--------

HITL approvals, branching, sub-agents, OOM/crash recovery.

Database connections
--------------------

Size and release connection pools so agents don’t exhaust your database.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/hidden-tasks)
[Quick StartGet a working AI agent in 3 steps — define an agent, generate a token, and wire up the frontend.\
\
Next](https://trigger.dev/docs/ai-chat/quick-start)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
