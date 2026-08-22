# Fast starts

> Source: https://trigger.dev/docs/ai-chat/fast-starts

The AI Agents and Prompts surface ships as part of the **v4.5 release candidate**. Install with `@trigger.dev/sdk@rc` (or pin `4.5.0-rc.0` or later) to use these features — they aren’t yet on the latest stable, and APIs may still change before the 4.5.0 GA. See [supported AI SDK versions](https://trigger.dev/docs/ai-chat/reference#compatibility)
 and the [AI chat changelog](https://trigger.dev/docs/ai-chat/changelog)
 for details.

The first turn of a brand-new conversation pays for the chat.agent run’s cold start: dequeue, process boot, `onPreload` / `onChatStart` hooks, and only then the LLM call. Two features address this from different angles.

[​](https://trigger.dev/docs/ai-chat/fast-starts#picking-an-approach)

Picking an approach
--------------------------------------------------------------------------------------------

|     | [Preload](https://trigger.dev/docs/ai-chat/fast-starts#preload) | [Head Start](https://trigger.dev/docs/ai-chat/fast-starts#head-start) |
| --- | --- | --- |
| **What it does** | Eagerly triggers the run before the first message | Runs step 1’s LLM call in your warm process while the agent boots in parallel |
| **First-turn TTFC win** | Hides agent boot if the user _does_ send a message | ~50% reduction (LLM TTFB floor); boot fully overlaps with TTFB |
| **When to fire** | Page load / input focus — your call | First message arrival — automatic |
| **Cost when user never sends** | Idle compute until the preload window times out | Zero (no run was triggered) |
| **Requires a warm server process** | No — works for browser-only surfaces | Yes — your route handler runs step 1 |
| **Requires LLM keys client-side?** | No  | No — keys stay in your warm server |
| **Bundle constraints** | None | Route handler must import schema-only tools (no heavy executes) |

**Pick one, not both.** Running both for the same chat is wasted work — Head Start gates on a real first message, so adding Preload on top eats the idle-compute cost Head Start was avoiding. **Use Preload** when the chat surface is browser-only, when you don’t have a warm Node/Bun/Edge process serving the page, or when you can confidently predict the user _will_ send a message (the run never goes idle). **Use Head Start** when the chat lives behind a warm server (Next.js App Router, Hono, SvelteKit, Workers, etc.) and you want first-turn TTFC down at the LLM TTFB floor without any speculative run.

* * *

[​](https://trigger.dev/docs/ai-chat/fast-starts#preload)

Preload
--------------------------------------------------------------------

Preload eagerly triggers a run for a chat before the first message is sent. Initialization (DB setup, context loading) happens while the user is still typing, reducing first-response latency.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#frontend)

Frontend

Call `transport.preload(chatId)` to start a run early:

    import { useEffect } from "react";
    import { useTriggerChatTransport } from "@trigger.dev/sdk/chat/react";
    import { useChat } from "@ai-sdk/react";
    
    export function Chat({ chatId }) {
      const transport = useTriggerChatTransport({
        task: "my-chat",
        accessToken: ({ chatId }) => mintChatAccessToken(chatId),
        startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
        clientData: { userId: currentUser.id },
      });
    
      // Preload on mount: run starts before the user types anything.
      // Trigger config (idleTimeoutInSeconds, machine, tags) lives in the
      // server action that wraps `chat.createStartSessionAction`.
      useEffect(() => {
        transport.preload(chatId);
      }, [chatId]);
    
      const { messages, sendMessage } = useChat({ id: chatId, transport });
      // ...
    }
    

Preload is a no-op if a session already exists for this chatId. Your `accessToken` callback receives `{ chatId }` and is invoked the same way on preload as on any other refresh — no special branching by purpose. See [TriggerChatTransport options](https://trigger.dev/docs/ai-chat/reference#triggerchattransport-options)
.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#backend)

Backend

The `onPreload` hook fires immediately. The run then waits for the first message. When the user sends a message, `onChatStart` fires with `preloaded: true` so you can skip work that already ran:

    export const myChat = chat.agent({
      id: "my-chat",
      onPreload: async ({ chatId, clientData }) => {
        // Eagerly initialize: runs before the first message
        userContext.init(await loadUser(clientData.userId));
        await db.chat.create({ data: { id: chatId } });
      },
      onChatStart: async ({ preloaded }) => {
        if (preloaded) return; // Already initialized in onPreload
        // ... fallback initialization for non-preloaded runs
      },
      run: async ({ messages, signal }) => {
        return streamText({ model: anthropic("claude-sonnet-4-5"), messages, abortSignal: signal });
      },
    });
    

With `chat.createSession()` or raw tasks, check `payload.trigger === "preload"` and wait for the first message:

    if (payload.trigger === "preload") {
      // Initialize early...
      const result = await chat.messages.waitWithIdleTimeout({
        idleTimeoutInSeconds: 60,
        timeout: "1h",
      });
      if (!result.ok) return;
      currentPayload = result.output;
    }
    

* * *

[​](https://trigger.dev/docs/ai-chat/fast-starts#head-start)

Head Start
--------------------------------------------------------------------------

Head Start runs step 1’s LLM call in your warm server process while the agent run boots in parallel. The user sees one continuous turn: text first from your server, then a clean handover to the agent for tool execution and any further steps. The agent you hand off to can be a `chat.agent`, a `chat.customAgent`, or a `chat.createSession` loop (see [Handover with custom agents](https://trigger.dev/docs/ai-chat/fast-starts#handover-with-custom-agents)
). `chat.headStart` returns a standard [Web Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 handler — `(req: Request) => Promise<Response>` — so it slots into any runtime that speaks Web Fetch. **Verified runtimes:** Node 18+, Bun, Deno, Cloudflare Workers, Vercel (Node and Edge), Netlify (Functions and Edge). The handler uses only `fetch` and Web `ReadableStream` / `TransformStream` (no `node:*` imports), and the S2 streaming dependency picks the right transport for each runtime automatically (HTTP/2 on Node/Deno, HTTP/1.1 on Bun/Workers/browsers). **Compatible frameworks (native Web Fetch):** Next.js App Router, Hono, SvelteKit, Remix, React Router v7, TanStack Start, Astro, Nitro/Nuxt, Elysia. Mount the handler directly. **Node-only frameworks (Express, Fastify, Koa):** the handler still works, but the framework gives you a Node `IncomingMessage` instead of a Web `Request`. Use a small adapter — examples in [Mounting in your framework](https://trigger.dev/docs/ai-chat/fast-starts#mounting-in-your-framework)
 below. When the first turn is pure text (no tool calls), the agent run boots and exits without ever calling an LLM. You only pay for what the conversation actually needed.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#measured-ttfc)

Measured TTFC

3 runs each, prompt `"say hi in five words"`, same model both sides (Anthropic Claude Sonnet 4):

|     | Without Head Start | With Head Start | Δ   |
| --- | --- | --- | --- |
| TTFT (avg) | 2801 ms | **1218 ms** | **−57%** |
| TTFT (range) | 2351–3101 ms | 1201–1252 ms |     |
| Total turn | 4180 ms | 2345 ms | −44% |

With Head Start, time-to-first-text is essentially the LLM TTFB floor (50ms spread). Without it, agent boot + hooks stack before the LLM call, adding 750ms of variance.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#how-it-works)

How it works

1

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Browser POSTs the first message to your route handler

The transport sees `headStart: "/api/chat"` is set and there’s no session yet for this chat. It POSTs the wire payload (messages, chatId, metadata) to your route handler.

2

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Your handler creates the session and triggers the agent run

A single `apiClient.createSession` round-trip both creates the chat session and triggers an agent run with `trigger: "handover-prepare"`. The agent run boots into a wait state on `session.in`.

3

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Your handler runs streamText step 1

`streamText` runs in your warm process with `stopWhen: stepCountIs(1)`. The output is streamed to the browser as SSE while the agent run boots in parallel. Boot time (~488ms) overlaps with LLM TTFB (~389ms), fully hidden.

4

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Mid-turn handover

On step 1’s `tool-calls` finish, your handler signals the agent and the SDK splices the agent’s step-2+ stream into the same SSE response. On pure-text finish, your handler signals `handover-skip` and the agent run exits clean — no LLM call from the trigger side.

5

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Subsequent turns bypass the route handler

After turn 1, the transport hydrates the session PAT from response headers and writes turn 2 onward directly to `session.in`. Same direct-trigger path as a regular `chat.agent` setup.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#setup)

Setup

**Bundle isolation is the load-bearing constraint.** Head Start only saves time because your route-handler bundle stays lightweight. Anything you import in that handler — and anything those modules import transitively — lands in the bundle. If your tool catalog with heavy `execute` fns (E2B, Puppeteer, native bindings, the trigger SDK runtime, Turndown, image processing, `node:child_process`) ends up in the bundle, you’ve put cold-start back into a different process.This is an **import-chain** problem, not a runtime one. A “we’ll strip the executes at runtime” helper would not fix it — bundlers resolve imports at build time. The only correct shape is to keep schemas in their own module that imports `ai` and `zod` only.

1

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Split your tool definitions into schemas + executes

Schemas in one module (light deps), executes in another (heavy deps). The agent task pulls in both; the route handler pulls in schemas only.

lib/chat-tools/schemas.ts

    // ⚠️ This file MUST NOT import anything heavier than `ai` and `zod`.
    // Any import here lands in the route-handler bundle.
    import { tool } from "ai";
    import { z } from "zod";
    
    export const fetchPage = tool({
      description: "Fetch a URL and return text",
      inputSchema: z.object({ url: z.string().url() }),
      // No execute — agent task adds it elsewhere.
    });
    
    export const headStartTools = { fetchPage };
    

trigger/chat-tools.ts

    // Heavy deps live here. Only the trigger task imports this module.
    import { tool } from "ai";
    import TurndownService from "turndown";
    import { fetchPage as fetchPageSchema } from "@/lib/chat-tools/schemas";
    
    const turndown = new TurndownService();
    
    export const fetchPage = tool({
      ...fetchPageSchema,
      execute: async ({ url }) => {
        const res = await fetch(url);
        return { body: turndown.turndown(await res.text()) };
      },
    });
    
    export const chatTools = { fetchPage };
    

2

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Define your chat.agent (heavy executes)

The agent uses the full tool set — these are the executes that run when step 2+ needs them.

trigger/chat.ts

    import { chat } from "@trigger.dev/sdk/ai";
    import { streamText, stepCountIs } from "ai";
    import { anthropic } from "@ai-sdk/anthropic";
    import { chatTools } from "./chat-tools";
    
    export const myChat = chat.agent({
      id: "my-chat",
      run: async ({ messages, signal }) =>
        streamText({
          ...chat.toStreamTextOptions({ tools: chatTools }),
          model: anthropic("claude-sonnet-4-6"),
          messages,
          stopWhen: stepCountIs(10),
          abortSignal: signal,
        }),
    });
    

3

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Build the head-start handler

Call `chat.headStart({ agentId, run })`. It returns a standard Web Fetch handler: `(req: Request) => Promise<Response>`. Inside the `run` callback you call `streamText` yourself and spread `chat.toStreamTextOptions({ tools })` to inherit the SDK-owned wiring (messages, schema-only tools, `stopWhen: stepCountIs(1)`, abort signal). Add your own `model` and `system` on top.

lib/chat-handler.ts

    import { chat } from "@trigger.dev/sdk/chat-server";
    import { streamText } from "ai";
    import { anthropic } from "@ai-sdk/anthropic";
    import { headStartTools } from "@/lib/chat-tools/schemas";
    
    export const chatHandler = chat.headStart({
      agentId: "my-chat",
      run: async ({ chat: helper }) =>
        streamText({
          ...helper.toStreamTextOptions({ tools: headStartTools }),
          model: anthropic("claude-sonnet-4-6"),
          system: "You are a helpful assistant.",
          stopWhen: stepCountIs(15),
        }),
    });
    

Use the **same model** on both sides (route handler and `chat.agent`) to avoid a tone or style shift between step 1 and step 2+. Your LLM provider keys stay server-side in your warm process — Trigger.dev never holds them in this design.

Mount the handler in whatever framework you use — see [Mounting in your framework](https://trigger.dev/docs/ai-chat/fast-starts#mounting-in-your-framework)
 below.

4

[](https://trigger.dev/docs/ai-chat/fast-starts#)

Opt in on the transport

Add `headStart: "/api/chat"` to `useTriggerChatTransport`. Subsequent turns bypass this URL automatically — `accessToken` and (optionally) `startSession` still run for the direct-trigger path on turn 2 onward.

components/chat.tsx

    const transport = useTriggerChatTransport<typeof myChat>({
      task: "my-chat",
      accessToken: ({ chatId }) => mintChatAccessToken(chatId),
      startSession: ({ chatId, clientData }) =>
      startChatSession({ chatId, clientData }),
      headStart: "/api/chat",
    });
    

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#mounting-in-your-framework)

Mounting in your framework

`chat.headStart` returns a Web Fetch handler — `(req: Request) => Promise<Response>`. Frameworks that natively pass Web `Request` objects mount it as-is. Node-only frameworks (Express, Fastify, Koa) need a small adapter.

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#web-fetch-frameworks-recommended)

Web Fetch frameworks (recommended)

Next.js (App Router)

Hono

SvelteKit

Remix / React Router v7

TanStack Start

Astro

Nitro / Nuxt

Elysia

    // app/api/chat/route.ts
    import { chatHandler } from "@/lib/chat-handler";
    
    export const POST = chatHandler;
    // Default function timeout on Vercel is 10s. Bump if your turns
    // run long (multi-step tool use, slow models):
    // export const maxDuration = 60;
    

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#edge-/-standalone-runtimes)

Edge / standalone runtimes

Cloudflare Workers

Bun (native server)

Deno (Deno.serve)

    // src/index.ts
    import { chatHandler } from "./chat-handler";
    
    export default {
      async fetch(req: Request): Promise<Response> {
        const url = new URL(req.url);
        if (req.method === "POST" && url.pathname === "/api/chat") {
          return chatHandler(req);
        }
        return new Response("Not found", { status: 404 });
      },
    };
    

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#node-only-frameworks)

Node-only frameworks

Express, Fastify, and Koa pass Node `IncomingMessage` / `ServerResponse` objects rather than Web `Request` / `Response`. The SDK ships `chat.toNodeListener` that wraps any Web Fetch handler as a Node `(req, res)` listener — body bytes are read upfront, headers translated, the response body streamed chunk-by-chunk, and client disconnect is propagated to the handler via `AbortSignal`.

Express

Fastify

Koa

Raw node:http

    import express from "express";
    import { chat } from "@trigger.dev/sdk/chat-server";
    import { chatHandler } from "./chat-handler";
    
    const app = express();
    app.post("/api/chat", chat.toNodeListener(chatHandler));
    app.listen(3000);
    

Don’t run `express.json()` (or any body-parsing middleware) before the head-start route — it consumes the request body before `chat.toNodeListener` can read the raw bytes. Either skip the parser for this route, or scope it to other routes.

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#streaming-response-timeouts)

Streaming response timeouts

The handler keeps the SSE response open until the agent run signals turn-complete (or skip, on a pure-text turn). Make sure your framework / serverless function timeout accommodates that:

*   **Pure-text first turns**: ~LLM TTFB (1–3 s typically).
*   **Tool-calling first turns**: LLM step 1 + agent boot + tool execution + step 2 LLM call. Usually 5–15 s; longer for multi-step tool use.
*   **Vercel**: default function timeout is 10 s on Hobby, 60 s on Pro. Set `export const maxDuration = N;` on the route segment.
*   **Cloudflare Workers**: default 30 s CPU time (paid plans up to 5 min). Streaming wall time is generally not the bottleneck.
*   **AWS Lambda behind API Gateway**: 29 s API Gateway hard limit; Lambda Function URL allows up to 15 min.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#what-gets-routed-where)

What gets routed where

|     | First turn (handover) | Subsequent turns |
| --- | --- | --- |
| Browser sends message via | POST to `headStart` URL | Direct write to `session.in` |
| Step 1 LLM call runs in | Your warm process | Trigger.dev agent run |
| Tool execution runs in | Trigger.dev agent run | Trigger.dev agent run |
| Step 2+ LLM call runs in | Trigger.dev agent run | Trigger.dev agent run |
| `onChatStart` / `onTurnStart` fire | After handover signal arrives | Normally |
| `hydrateMessages` fires (if registered) | After handover, with the first-turn history as `incomingMessages` | Normally |
| `onTurnComplete` fires | After turn finishes (handover) or skipped (handover-skip) | Normally |

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#persistence-and-the-handover-contract)

Persistence and the handover contract

A head-start turn persists exactly like a normal turn — the handover machinery is invisible to your hooks. The guarantees:

*   **One stable assistant `messageId` across the whole turn.** The route handler generates the id, the handover signal carries it to the agent, and the agent’s step 2+ stream reuses it — so the browser merges step 1 and step 2+ into a single assistant message, and you can merge-by-id when persisting.
*   **`onTurnComplete` is the canonical persistence point**, same as any turn. It carries the full assistant message under that one id: step-1 text, reasoning, and tool calls plus step-2+ tool results and text. The [database persistence](https://trigger.dev/docs/ai-chat/patterns/database-persistence)
     patterns apply unchanged.
*   **Reasoning parts survive the handover.** When step 1 runs on an extended-thinking model, the reasoning streamed by your route handler lands in the durable session history (and `onTurnComplete`) under the same `messageId`, with provider metadata intact — Anthropic thinking signatures survive a replay back to the model. Step-2 reasoning appends to the same message rather than replacing it.

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#with-hydratemessages)

With `hydrateMessages`

Head Start composes with [`hydrateMessages`](https://trigger.dev/docs/ai-chat/lifecycle-hooks#hydratemessages)
. On the first turn, the hook receives the route handler’s first-turn history as `incomingMessages` — the canonical upsert-and-return pattern persists the user message exactly as it would on a direct-trigger turn. The runtime splices the warm handler’s partial assistant onto your hydrated chain after the hook returns, deduplicated by the assistant `messageId`, so your hook never needs to include the in-flight partial.

**Hydrate hooks must upsert their conversation row, not update it.** Head-start turns skip preload entirely, so row-creating hooks (`onPreload`, or an `onChatStart` create) have not run when `hydrateMessages` first fires. A bare `UPDATE` against a missing row throws and errors the turn.

Your hydrate hook shapes **model context**, not the transcript — dropping reasoning-only entries or unresolved tool rows from the returned chain is fine and does not affect what `onTurnComplete` persists or what the UI renders.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#handover-with-custom-agents)

Handover with custom agents

The route handler is backend-agnostic: `agentId` can point at a `chat.agent`, a [`chat.customAgent`](https://trigger.dev/docs/ai-chat/custom-agents)
, or a [`chat.createSession`](https://trigger.dev/docs/ai-chat/custom-agents#managed-loop-chatcreatesession)
 loop. With `chat.agent` the handover is consumed for you (the steps above). The two hand-rolled backends consume it explicitly on turn 0.

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#chat-createsession)

chat.createSession

The turn iterator surfaces the handover as `turn.handover`. On a final (pure-text) handover, call `turn.complete()` with no source to finalize the warm partial without streaming; otherwise stream as usual. The iterator threads the spliced partial as `originalMessages` for you, so a resumed tool round merges into the handed-over assistant.

trigger/chat.ts

    for await (const turn of session) {
      // Pure-text handover (isFinal): step 1 already IS the response.
      const result = turn.handover?.isFinal
        ? undefined
        : streamText({
            model: anthropic("claude-sonnet-4-6"),
            messages: turn.messages,
            abortSignal: turn.signal,
            stopWhen: stepCountIs(10),
          });
    
      await turn.complete(result); // no source on a final handover
    }
    

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#chat-customagent)

chat.customAgent

In a hand-rolled loop, call `conversation.consumeHandover({ payload })` at the top of turn 0. It waits for the handover signal, seeds prior history from `payload.headStartMessages`, splices the warm step-1 partial into the accumulator, and returns `{ isFinal, skipped }`.

trigger/chat.ts

    // Turn 0, gated on a head-start run:
    if (turn === 0 && payload.trigger === "handover-prepare") {
      const { isFinal, skipped } = await conversation.consumeHandover({ payload });
      if (skipped) return; // not a head-start run, or the warm handler aborted — exit
      if (!isFinal) {
        // The partial carries a pending tool call. Run step 2 to execute it,
        // passing originalMessages so the tool output merges into the
        // handed-over assistant instead of starting a new message.
        const result = streamText({
          model: anthropic("claude-sonnet-4-6"),
          messages: conversation.modelMessages,
          stopWhen: stepCountIs(10),
        });
        const response = await chat.pipeAndCapture(result, {
          originalMessages: conversation.uiMessages,
        });
        if (response) await conversation.addResponse(response);
      }
      await chat.writeTurnComplete(); // on isFinal the warm partial is already the response
      return;
    }
    

Gate the call on `trigger === "handover-prepare"` — `consumeHandover` consumes the warm handover, not a normal first message. See [Custom agents](https://trigger.dev/docs/ai-chat/custom-agents)
 for the full loop (continuation seeding, stop handling, persistence). The lower-level `chat.waitForHandover({ payload })` and `accumulator.applyHandover(signal)` are exported if you need to wait and splice in separate steps.

Always pass `originalMessages: conversation.uiMessages` to `pipeAndCapture` in a custom loop. It keeps assistant message IDs stable across turns and lets a tool-approval or handover resume merge into the trailing assistant — the same threading `chat.agent` does internally.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#the-chat-headstart-api)

The `chat.headStart` API

    chat.headStart<TTools>({
      agentId: string,                       // The chat.agent / chat.customAgent id you're handing off to
      run: (args: HeadStartRunArgs<TTools>) => Promise<StreamTextResult<any, any>>,
      idleTimeoutInSeconds?: number,         // How long the agent waits for the handover signal. Default: 60
      triggerConfig?: Partial<SessionTriggerConfig>, // Run options for the handover-prepare run
    }): (req: Request) => Promise<Response>
    

`triggerConfig` sets run options on the auto-triggered handover-prepare run: `tags`, `queue`, `machine`, `maxAttempts`, `maxDuration`, `region`, and `lockToVersion`. The `chat:{chatId}` tag is prepended automatically. Because the session is created once on the first head-start turn (idempotent on the chat id), this is the only place to set those options for a head-start chat’s lifetime, mirroring what [`chat.createStartSessionAction`](https://trigger.dev/docs/ai-chat/sessions)
 sets for the direct-trigger path.

lib/chat-handler.ts

    export const chatHandler = chat.headStart({
      agentId: "my-chat",
      triggerConfig: { tags: ["org:acme"], queue: "chat", machine: "small-2x" },
      run: async ({ chat: helper }) =>
        streamText({ ...helper.toStreamTextOptions({ tools: headStartTools }), model, system }),
    });
    

The `run` callback receives:

*   `messages: UIMessage[]` — user messages parsed from the request body.
*   `signal: AbortSignal` — fires when the request closes or the SDK times out the handover.
*   `chat: HeadStartChatHelper<TTools>` — exposes `chat.toStreamTextOptions({ tools })` and a `chat.session` escape hatch for power users.

`chat.toStreamTextOptions({ tools })` returns options to spread into `streamText`. The SDK owns these keys — overriding them will break the protocol:

| Key | What the SDK sets | Why |
| --- | --- | --- |
| `messages` | `convertToModelMessages(uiMessages)` | First-turn user history |
| `tools` | What you pass | Schema-only tools for step 1 |
| `stopWhen` | `stepCountIs(1)` | Step 1 only — agent picks up step 2+ |
| `abortSignal` | Combined request + idle timeout | Safe cleanup on disconnect |

You bring `model`, `system`, `providerOptions`, `prepareStep`, anything else `streamText` accepts.

#### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#the-transport-option)

The transport option

    useTriggerChatTransport({
      // ... task, accessToken, startSession, ...
      headStart?: string,  // URL of your chat.headStart route handler
    });
    

Optional. When set, the FIRST message of a brand-new chat (no existing session state) routes through this URL. Subsequent turns bypass it and use the direct-trigger path. This is **not** a stock `useChat` `endpoint` — it’s not the canonical request URL for every turn, just the first-turn shortcut.

### 

[​](https://trigger.dev/docs/ai-chat/fast-starts#limitations)

Limitations

*   **First turn only.** Step 2+ and turn 2+ run on the trigger side. There’s no per-turn “head start every turn” mode — the win comes from amortizing agent boot across the LLM call once.
*   **Single step on the warm-server side.** The handler runs `stopWhen: stepCountIs(1)`. Multi-step handover (handler does step 1 + step 2 + …) is out of scope.
*   **Your server needs an LLM provider key.** The first-turn LLM call runs in your warm process, so that environment needs whatever keys the model requires. The agent’s executes still run on the Trigger.dev side with whatever environment variables they need there.
*   **Browser-only chat surfaces don’t apply.** Without a warm server process, there’s nowhere to run step 1 ahead of the agent run. Use [Preload](https://trigger.dev/docs/ai-chat/fast-starts#preload)
     or eat the cold-start tax.
*   **Streaming-capable runtime required.** Your framework / runtime has to support streaming HTTP responses (Web Fetch `Response` body or equivalent). Most modern hosts do — Next.js, Hono, SvelteKit, Workers, Bun, Deno, Vercel, etc. Some legacy platforms that buffer full responses won’t deliver chunks until the turn is over, which negates the TTFC benefit (correctness still holds).
*   **Non-`useChat` chat surfaces** (Slack bots, Discord bots, custom protocols) don’t fit the `chat.headStart` shape — the API expects the AI SDK transport’s wire payload on input. For those, trigger the chat.agent directly from your bot handler.

[​](https://trigger.dev/docs/ai-chat/fast-starts#reference)

Reference
------------------------------------------------------------------------

*   [`chat.headStart` factory and types](https://trigger.dev/docs/ai-chat/reference)
     — full signatures for `HeadStartRunArgs`, `HeadStartChatHelper`, `HeadStartSession`, `HeadStartHandlerOptions`.
*   [`headStart` transport option](https://trigger.dev/docs/ai-chat/reference#triggerchattransport-options)
     — alongside `accessToken`, `startSession`, etc.
*   [`onPreload` hook](https://trigger.dev/docs/ai-chat/lifecycle-hooks#onpreload)
     — the backend hook that fires when a run is preloaded.
*   [Custom agents](https://trigger.dev/docs/ai-chat/custom-agents)
     — the `chat.customAgent` and `chat.createSession` loops that `consumeHandover` / `turn.handover` plug into.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/ai/prompts)
[CompactionAutomatic context compaction to keep long conversations within token limits.\
\
Next](https://trigger.dev/docs/ai-chat/compaction)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
