# Testing

> Source: https://trigger.dev/docs/ai-chat/testing

The AI Agents and Prompts surface ships as part of the **v4.5 release candidate**. Install with `@trigger.dev/sdk@rc` (or pin `4.5.0-rc.0` or later) to use these features — they aren’t yet on the latest stable, and APIs may still change before the 4.5.0 GA. See [supported AI SDK versions](https://trigger.dev/docs/ai-chat/reference#compatibility)
 and the [AI chat changelog](https://trigger.dev/docs/ai-chat/changelog)
 for details.

[​](https://trigger.dev/docs/ai-chat/testing#overview)

Overview
------------------------------------------------------------------

`@trigger.dev/sdk/ai/test` exports `mockChatAgent`, an offline harness that runs your `chat.agent` definition’s `run()` function inside an in-memory task runtime. You send messages, actions, and stop signals through driver methods and assert against the chunks the agent emits. Under the hood the harness drives the agent’s backing Session channels — `.in` receives the records your `sendMessage` / `sendStop` / `sendAction` produce, `.out` captures the chunks the agent emits. The harness API itself is session-agnostic; you don’t need to manage `sessionId` in tests. The harness exercises the real turn loop, lifecycle hooks, validation, hydration, and action routing — only the language model and the surrounding Trigger.dev runtime are replaced. Pair it with [`MockLanguageModelV3`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/mock-language-model-v3)
 and `simulateReadableStream` from `ai` to control LLM responses.

Import `@trigger.dev/sdk/ai/test` **before** your agent module. It installs the resource catalog so `chat.agent({ id, ... })` can register tasks during testing.

[​](https://trigger.dev/docs/ai-chat/testing#quick-start)

Quick start
------------------------------------------------------------------------

trigger/my-chat.test.ts

    import { mockChatAgent } from "@trigger.dev/sdk/ai/test";
    
    import { describe, expect, it } from "vitest";
    import { simulateReadableStream, stepCountIs } from "ai";
    import { MockLanguageModelV3 } from "ai/test";
    import type { LanguageModelV3StreamPart } from "@ai-sdk/provider";
    import { myChatAgent } from "./my-chat.js";
    
    function modelWithText(text: string) {
      const chunks: LanguageModelV3StreamPart[] = [\
        { type: "text-start", id: "t1" },\
        { type: "text-delta", id: "t1", delta: text },\
        { type: "text-end", id: "t1" },\
        {\
          type: "finish",\
          finishReason: { unified: "stop", raw: "stop" },\
          usage: {\
            inputTokens: { total: 10, noCache: 10, cacheRead: undefined, cacheWrite: undefined },\
            outputTokens: { total: 10, text: 10, reasoning: undefined },\
          },\
        },\
      ];
      return new MockLanguageModelV3({
        doStream: async () => ({ stream: simulateReadableStream({ chunks }) }),
      });
    }
    
    describe("myChatAgent", () => {
      it("streams the model's response", async () => {
        const model = modelWithText("hello world");
        const harness = mockChatAgent(myChatAgent, {
          chatId: "test-1",
          clientData: { model },
        });
    
        try {
          const turn = await harness.sendMessage({
            id: "u1",
            role: "user",
            parts: [{ type: "text", text: "hi" }],
          });
    
          const text = turn.chunks
            .filter((c) => c.type === "text-delta")
            .map((c) => (c as { delta: string }).delta)
            .join("");
          expect(text).toBe("hello world");
        } finally {
          await harness.close();
        }
      });
    });
    

The agent reads the mock model from `clientData`:

trigger/my-chat.ts

    import { chat } from "@trigger.dev/sdk/ai";
    import { streamText, type LanguageModel } from "ai";
    import { z } from "zod";
    
    type ClientData = { model: LanguageModel };
    
    export const myChatAgent = chat
      .withClientData({
        schema: z.custom<ClientData>(
          (v) => !!v && typeof v === "object" && "model" in (v as object)
        ),
      })
      .agent({
        id: "my-chat",
        run: async ({ messages, clientData, signal }) => {
          return streamText({
            model: clientData?.model ?? "openai/gpt-4o-mini",
            messages,
            abortSignal: signal,
            stopWhen: stepCountIs(15),
          });
        },
      });
    

[​](https://trigger.dev/docs/ai-chat/testing#setup)

Setup
------------------------------------------------------------

### 

[​](https://trigger.dev/docs/ai-chat/testing#install-dev-dependencies)

Install dev dependencies

The harness itself ships with `@trigger.dev/sdk`. You need a test runner and the AI SDK’s mock model utilities:

    pnpm add -D vitest ai @ai-sdk/provider
    

`@ai-sdk/provider` is only needed to type the chunk array as `LanguageModelV3StreamPart[]` — drop it if you cast inline.

### 

[​](https://trigger.dev/docs/ai-chat/testing#vitest-config)

Vitest config

A minimal `vitest.config.ts` for a Trigger.dev project:

    import { defineConfig } from "vitest/config";
    
    export default defineConfig({
      test: {
        include: ["src/**/*.test.ts"],
        environment: "node",
      },
    });
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#import-order)

Import order

`mockChatAgent` must be imported **first** so the resource catalog is installed before any `chat.agent({ id, ... })` registration runs:

    // ✅ Correct
    import { mockChatAgent } from "@trigger.dev/sdk/ai/test";
    import { myAgent } from "./my-agent.js";
    
    // ❌ Wrong — agent loads before the catalog exists
    import { myAgent } from "./my-agent.js";
    import { mockChatAgent } from "@trigger.dev/sdk/ai/test";
    

If the agent isn’t registered when `mockChatAgent` runs, you’ll get:

    mockChatAgent: no task registered with id "my-chat".
    

[​](https://trigger.dev/docs/ai-chat/testing#inject-the-model-via-clientdata)

Inject the model via clientData
----------------------------------------------------------------------------------------------------------------

`MockLanguageModelV3` lives in test code and shouldn’t leak into your agent module. Pass it through `clientData` so the agent picks it up at runtime in tests, and falls back to a real model in production:

trigger/agent.ts

    type ClientData = { model?: LanguageModel };
    
    export const agent = chat
      .withClientData({ schema: z.custom<ClientData>() })
      .agent({
        id: "agent",
        run: async ({ messages, clientData, signal }) => {
          return streamText({
            model: clientData?.model ?? anthropic("claude-haiku-4-5"),
            messages,
            abortSignal: signal,
            stopWhen: stepCountIs(15),
          });
        },
      });
    

agent.test.ts

    const harness = mockChatAgent(agent, {
      chatId: "test",
      clientData: { model: mockModel },
    });
    

[​](https://trigger.dev/docs/ai-chat/testing#driving-turns)

Driving turns
----------------------------------------------------------------------------

The harness exposes one method per chat trigger. Each waits for the next `trigger:turn-complete` chunk before resolving.

### 

[​](https://trigger.dev/docs/ai-chat/testing#sendmessage)

sendMessage

    const turn = await harness.sendMessage({
      id: "u1",
      role: "user",
      parts: [{ type: "text", text: "hi" }],
    });
    

Pass an array to send multiple messages at once.

### 

[​](https://trigger.dev/docs/ai-chat/testing#sendregenerate)

sendRegenerate

    const turn = await harness.sendRegenerate(messages);
    

Equivalent to the frontend’s `useChat().regenerate()` — replays a turn with the given message history.

### 

[​](https://trigger.dev/docs/ai-chat/testing#sendaction)

sendAction

Routes a payload through `actionSchema` + `onAction`. Actions are not turns: only `hydrateMessages` and `onAction` fire on the agent side — no turn lifecycle hooks, no `run()`. The returned `turn.rawChunks` contains whatever `onAction` produced (a streamed model response if it returned a `StreamTextResult`, otherwise just `trigger:turn-complete`):

    const turn = await harness.sendAction({ type: "undo" });
    

If the action fails schema validation, an `error` chunk appears in `turn.rawChunks`.

### 

[​](https://trigger.dev/docs/ai-chat/testing#sendstop)

sendStop

Fires a stop signal. Does **not** wait for a turn — the agent’s `signal.aborted` becomes `true` and the current turn unwinds:

    await harness.sendStop("user requested stop");
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#close)

close

Sends a `close` trigger, closes the session’s `.in` channel, and aborts the run signal so the task exits cleanly. Always call this at the end of every test:

    afterEach(() => harness.close());
    // or with a try/finally
    try {
      await harness.sendMessage(...);
    } finally {
      await harness.close();
    }
    

[​](https://trigger.dev/docs/ai-chat/testing#inspecting-output)

Inspecting output
------------------------------------------------------------------------------------

Each turn returns:

    type MockChatAgentTurn = {
      chunks: UIMessageChunk[];   // text-delta, tool-call, etc.
      rawChunks: unknown[];       // includes control chunks (turn-complete, errors)
    };
    

The harness also exposes accumulators across all turns:

    harness.allChunks;     // every UIMessageChunk since creation
    harness.allRawChunks;  // every raw chunk including control frames
    

A small helper to assemble streamed text:

    function collectText(chunks: UIMessageChunk[]): string {
      return chunks
        .filter((c) => c.type === "text-delta")
        .map((c) => (c as { delta: string }).delta)
        .join("");
    }
    

[​](https://trigger.dev/docs/ai-chat/testing#common-patterns)

Common patterns
--------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/ai-chat/testing#asserting-hook-order)

Asserting hook order

    const events: string[] = [];
    const agent = chat.agent({
      id: "hook-order",
      onChatStart: async () => { events.push("onChatStart"); },
      onTurnStart: async () => { events.push("onTurnStart"); },
      onBeforeTurnComplete: async () => { events.push("onBeforeTurnComplete"); },
      onTurnComplete: async () => { events.push("onTurnComplete"); },
      run: async ({ messages, signal }) => {
        events.push("run");
        return streamText({ model, messages, abortSignal: signal });
      },
    });
    
    const harness = mockChatAgent(agent, { chatId: "t" });
    await harness.sendMessage(userMessage("hi"));
    
    // onTurnComplete fires after the turn-complete chunk is written —
    // give it a tick before asserting.
    await new Promise((r) => setTimeout(r, 20));
    expect(events).toEqual([\
      "onChatStart",\
      "onTurnStart",\
      "run",\
      "onBeforeTurnComplete",\
      "onTurnComplete",\
    ]);
    await harness.close();
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#testing-onvalidatemessages)

Testing onValidateMessages

    const turn = await harness.sendMessage(userMessage("hello blocked-word"));
    
    // The turn completes with an error chunk, not text
    expect(collectText(turn.chunks)).toBe("");
    expect(turn.rawChunks.some((c) =>
      typeof c === "object" && c !== null &&
      (c as { type?: string }).type === "trigger:turn-complete"
    )).toBe(true);
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#testing-actions-and-rejection)

Testing actions and rejection

    // Valid action
    await harness.sendAction({ type: "undo" });
    
    // Invalid action — schema validation fails, error chunk emitted
    const turn = await harness.sendAction({ type: "not-a-real-action" });
    const errors = turn.rawChunks.filter((c) =>
      typeof c === "object" && c !== null &&
      (c as { type?: string }).type === "error"
    );
    expect(errors.length).toBeGreaterThan(0);
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#multi-turn-accumulation)

Multi-turn accumulation

The harness preserves chat history across turns, just like the real runtime:

    const seenLengths: number[] = [];
    const agent = chat.agent({
      id: "multi-turn",
      run: async ({ messages, signal }) => {
        seenLengths.push(messages.length);
        return streamText({ model, messages, abortSignal: signal });
      },
    });
    
    const harness = mockChatAgent(agent, { chatId: "t" });
    await harness.sendMessage(userMessage("first"));
    await harness.sendMessage(userMessage("second"));
    await harness.sendMessage(userMessage("third"));
    
    // Turn 1: 1 message; turn 2: user + assistant + user = 3; turn 3: 5
    expect(seenLengths).toEqual([1, 3, 5]);
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#hydrating-from-a-%E2%80%9Cdatabase%E2%80%9D)

Hydrating from a “database”

Use `clientData` to seed a synthetic prior context for `hydrateMessages`:

    const hydrated = [\
      { id: "h1", role: "user", parts: [{ type: "text", text: "prior question" }] },\
      { id: "h2", role: "assistant", parts: [{ type: "text", text: "prior answer" }] },\
    ];
    
    const harness = mockChatAgent(agent, {
      chatId: "test-hydrate",
      clientData: { model, hydrated: [...hydrated, userMessage("follow up")] },
    });
    
    await harness.sendMessage(userMessage("follow up"));
    
    // Model should have been called with the hydrated context
    expect(model.doStreamCalls[0]!.prompt.length).toBeGreaterThanOrEqual(3);
    

The agent reads `clientData.hydrated` inside its `hydrateMessages` hook:

    hydrateMessages: async ({ clientData, incomingMessages }) => {
      return clientData?.hydrated ?? incomingMessages;
    },
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#testing-continuation-runs)

Testing continuation runs

A continuation run is a new run picking up an existing session after the prior run ended — `chat.endRun`, waitpoint timeout, or `chat.requestUpgrade`. The contract differs from a fresh run in two ways:

*   `onChatStart` does **not** fire (it’s once-per-chat — fires only on the chat’s very first user message ever).
*   The boot payload arrives with `continuation: true` and no `message`. The SDK waits silently on `session.in` until the next user message arrives.

Pass `continuation: true` to drive this path:

    const onChatStart = vi.fn();
    const onTurnStart = vi.fn();
    
    const agent = chat.agent({
      id: "my-chat",
      onChatStart,
      onTurnStart,
      run: async ({ messages, signal }) =>
        streamText({ model, messages, abortSignal: signal }),
    });
    
    const harness = mockChatAgent(agent, {
      chatId: "test-continuation",
      // Auto-selects `mode: "continuation"` — boots with `trigger` omitted
      // and `continuation: true` in the wire payload, exactly as the server
      // produces it on continuation runs in production.
      continuation: true,
      previousRunId: "run_test_prior",
    });
    
    try {
      // The SDK enters continuation-wait; sendMessage wakes it and drives turn 0.
      await harness.sendMessage({
        id: "u1",
        role: "user",
        parts: [{ type: "text", text: "where were we?" }],
      });
      await new Promise((r) => setTimeout(r, 20));
    
      expect(onChatStart).not.toHaveBeenCalled();
      expect(onTurnStart).toHaveBeenCalledTimes(1);
    } finally {
      await harness.close();
    }
    

To simulate an **OOM-retry attempt** (also a continuation by contract — same `onChatStart` skip), bump `ctx.attempt.number`:

    const harness = mockChatAgent(agent, {
      chatId: "test-oom-retry",
      taskContext: {
        ctx: { attempt: { number: 2, startedAt: new Date(0), status: "EXECUTING" } },
      },
    });
    
    await harness.sendMessage(/* ... */);
    expect(onChatStart).not.toHaveBeenCalled();
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#testing-recovery-boot)

Testing recovery boot

`onRecoveryBoot` fires when the dead predecessor left state behind — a partial assistant on `session.out`, in-flight users on `session.in`, or both. The harness exposes two seeders to drive this state at boot time:

*   `harness.seedSessionOutPartial(message)` — pre-seed a trailing partial assistant. The next boot’s replay surfaces it as `event.partialAssistant`.
*   `harness.seedSessionInTail(messages)` — pre-seed user messages on the input tail. The next boot’s replay surfaces them as `event.inFlightUsers`.

Combined with `continuation: true`, this drives the full recovery boot path:

    import { mockChatAgent } from "@trigger.dev/sdk/ai/test";
    
    const onRecoveryBoot = vi.fn(async () => {
      // accept smart default
    });
    
    const agent = chat.agent({
      id: "my-chat",
      onRecoveryBoot,
      run: async ({ messages, signal }) =>
        streamText({ model, messages, abortSignal: signal }),
    });
    
    const harness = mockChatAgent(agent, {
      chatId: "test-recovery",
      continuation: true,
      previousRunId: "run_prior",
    });
    
    // Predecessor was answering "write an essay" and got cut off mid-stream
    // after producing some text. Customer then sent a follow-up.
    harness.seedSessionOutPartial({
      id: "a-orphan",
      role: "assistant",
      parts: [{ type: "text", text: "Espresso originated in..." }],
    });
    harness.seedSessionInTail([\
      { id: "u-1", role: "user", parts: [{ type: "text", text: "Write an essay about espresso." }] },\
      { id: "u-2", role: "user", parts: [{ type: "text", text: "keep going" }] },\
    ]);
    
    await new Promise((r) => setTimeout(r, 50));
    
    expect(onRecoveryBoot).toHaveBeenCalledTimes(1);
    const event = onRecoveryBoot.mock.calls[0]![0];
    expect(event.partialAssistant?.id).toBe("a-orphan");
    expect(event.inFlightUsers).toHaveLength(2);
    

Use `harness.seedSnapshot({ messages: [...] })` alongside these to model a continuation where settled history exists. See the [Recovery boot](https://trigger.dev/docs/ai-chat/patterns/recovery-boot)
 pattern for what each field means and what the smart default does with it.

[​](https://trigger.dev/docs/ai-chat/testing#testing-against-a-database)

Testing against a database
------------------------------------------------------------------------------------------------------

Most agents call into a database from `hydrateMessages` or `onTurnComplete` to load history and persist replies. You shouldn’t pass database clients through `clientData` — that’s wire-data from the browser. Use **`locals` for dependency injection** instead. `locals` are task-scoped, server-side only, and untyped to the wire format. The mock harness exposes a `setupLocals` callback that pre-seeds them before the agent’s `run()` starts.

### 

[​](https://trigger.dev/docs/ai-chat/testing#define-a-locals-key-for-the-dependency)

Define a locals key for the dependency

Create a single key per dependency, exported from your project:

db.ts

    import { locals } from "@trigger.dev/sdk";
    import { PrismaClient } from "@prisma/client";
    
    export type Db = PrismaClient;
    export const dbKey = locals.create<Db>("db");
    
    export function getDb(): Db {
      // Returns the seeded test instance if present, otherwise lazy-creates prod.
      return locals.get(dbKey) ?? locals.set(dbKey, new PrismaClient());
    }
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#use-the-dependency-from-agent-hooks)

Use the dependency from agent hooks

Hooks read from `locals` instead of constructing clients themselves:

trigger/agent.ts

    import { chat } from "@trigger.dev/sdk/ai";
    import { getDb } from "../db";
    
    export const agent = chat.agent({
      id: "agent",
      hydrateMessages: async ({ chatId }) => {
        const db = getDb();
        const row = await db.chat.findUnique({ where: { id: chatId } });
        return (row?.messages as UIMessage[]) ?? [];
      },
      onTurnComplete: async ({ chatId, messages }) => {
        const db = getDb();
        await db.chat.upsert({
          where: { id: chatId },
          create: { id: chatId, messages },
          update: { messages },
        });
      },
      run: async ({ messages, signal }) => {
        return streamText({ model: anthropic("claude-sonnet-4-5"), messages, abortSignal: signal });
      },
    });
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#inject-a-test-database-in-the-harness)

Inject a test database in the harness

`setupLocals` runs _before_ the agent starts, so `getDb()` returns the test instance for every hook:

agent.test.ts

    import { mockChatAgent } from "@trigger.dev/sdk/ai/test";
    import { dbKey } from "./db";
    import { agent } from "./trigger/agent";
    
    const harness = mockChatAgent(agent, {
      chatId: "test-1",
      setupLocals: ({ set }) => {
        set(dbKey, testDb); // testDb = your testcontainers Prisma client, sqlite stub, etc.
      },
    });
    

### 

[​](https://trigger.dev/docs/ai-chat/testing#pick-a-backing-database)

Pick a backing database

You still need to decide what `testDb` actually is:

*   **Testcontainers (recommended).** Spin up Postgres in Docker via `@internal/testcontainers` (or `testcontainers` directly), run migrations, hand the resulting `PrismaClient` to `set(dbKey, ...)`. Highest fidelity — catches schema drift, migration bugs, transaction issues.
*   **Embedded SQLite / PGlite.** Fast and no Docker, but a different SQL dialect from production. Fine for hooks that only do simple CRUD; risky for raw SQL or Postgres-specific features.
*   **In-memory fake.** Hand-rolled object with the same interface as your DB module. Fastest, lowest fidelity — works when you only care about whether the agent _called_ the right method, not what the DB _did_ with it.

### 

[​](https://trigger.dev/docs/ai-chat/testing#drizzle-kysely-etc)

Drizzle, Kysely, etc.

The pattern is the same — replace `PrismaClient` with your client class:

db.ts

    import { drizzle } from "drizzle-orm/node-postgres";
    import { Pool } from "pg";
    
    export type Db = ReturnType<typeof drizzle>;
    export const dbKey = locals.create<Db>("db");
    
    export function getDb(): Db {
      return locals.get(dbKey) ?? locals.set(
        dbKey,
        drizzle(new Pool({ connectionString: process.env.DATABASE_URL })),
      );
    }
    

The same `setupLocals` pattern works for any server-side dependency: feature flag clients, Stripe SDK, internal HTTP clients, Sentry. Anything you’d normally inject via constructor parameters in a class-based design.

[​](https://trigger.dev/docs/ai-chat/testing#api-reference)

API reference
----------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/ai-chat/testing#mockchatagent-agent-options)

mockChatAgent(agent, options?)

    function mockChatAgent(
      agent: { id: string },
      options?: MockChatAgentOptions,
    ): MockChatAgentHarness;
    

#### 

[​](https://trigger.dev/docs/ai-chat/testing#mockchatagentoptions)

MockChatAgentOptions

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `chatId` | `string` | `"test-chat"` | Chat session id passed in every wire payload. |
| `clientData` | `unknown` | `undefined` | Client-provided data forwarded to `run()` and every hook. |
| `taskContext` | `MockTaskContextOptions` | `{}` | Overrides for the mock `TaskRunContext`. Use `ctx.attempt.number > 1` to simulate an OOM-retry attempt — the agent skips `onChatStart` (same as continuation runs). |
| `preload` | `boolean` | `true` | Start in preload mode. When `false`, the first `sendMessage()` starts turn 0 directly without preload. Ignored when `mode` is set explicitly. |
| `mode` | `"preload" \| "submit-message" \| "handover-prepare" \| "continuation"` | derived | Initial boot trigger. Defaults to `"preload"` (or `"submit-message"` when `preload: false`, or `"continuation"` when `continuation: true`). See [Boot modes](https://trigger.dev/docs/ai-chat/testing#boot-modes)<br> below. |
| `continuation` | `boolean` | `false` | Boot as a continuation run (a new run on an existing session). Auto-selects `mode: "continuation"` if `mode` is not set — boots with `trigger` omitted and `continuation: true` in the payload, exercising the SDK’s continuation-wait branch. `onChatStart` does NOT fire on continuation runs. |
| `previousRunId` | `string` | `undefined` | Set `payload.previousRunId` on the initial wire payload. Typically paired with `continuation: true`. |
| `snapshot` | `ChatSnapshotV1` | `undefined` | Pre-seed the snapshot the agent reads at run boot (replaces the real S3 GET). Use to drive resume scenarios with prior history. See [Persistence and replay](https://trigger.dev/docs/ai-chat/patterns/persistence-and-replay)<br> for the production snapshot model. |
| `setupLocals` | `({ set }) => void \| Promise<void>` | `undefined` | Callback invoked before `run()` starts. Use `set(key, value)` to inject server-side dependencies (DB clients, service stubs) that the agent reads via `locals.get()`. |

##### Boot modes

The harness’s initial wire payload depends on `mode`:

| Mode | Wire payload | Use when |
| --- | --- | --- |
| `"preload"` | `{ trigger: "preload" }` | Simulating a `transport.preload(chatId)` warm-up. Fires `onPreload`, waits for the first `sendMessage()`. |
| `"submit-message"` | `{ trigger: "submit-message" }` | Skipping preload — `sendMessage()` drives turn 0 directly. |
| `"continuation"` | `{ continuation: true }` (no `trigger`) | A new run picking up an existing session after the prior run ended (`chat.endRun`, waitpoint timeout, `chat.requestUpgrade`). Mirrors the boot payload the server’s `ensureRunForSession` / `swapSessionRun` produce. The SDK enters its continuation-wait branch — `onPreload` and `onChatStart` do NOT fire. |
| `"handover-prepare"` | `{ trigger: "handover-prepare" }` | Driving the `chat.handover` wait path. Use `sendHandover()` / `sendHandoverSkip()` to dispatch the handover signal. |

#### 

[​](https://trigger.dev/docs/ai-chat/testing#mockchatagentharness)

MockChatAgentHarness

| Member | Description |
| --- | --- |
| `chatId` | The chat session id used by this harness. |
| `sendMessage(message)` | Send a single user message (or tool-approval-responded assistant message). Slim wire: at most ONE message per record. Returns the chunks produced during the resulting turn. |
| `sendRegenerate()` | Send a regenerate-message trigger (no body — slim wire). The agent trims trailing assistant messages from its accumulator and re-runs. |
| `sendHeadStart({ messages })` | Drive the head-start path: sends `trigger: "handover-prepare"` with `headStartMessages` carrying the first-turn UIMessage history. Used only at the very first turn before any snapshot exists. |
| `sendHandover({ partialAssistantMessage, isFinal?, messageId? })` | Dispatch a `handover` signal — only meaningful when started with `mode: "handover-prepare"`. The agent picks up partial assistant messages and continues the turn. |
| `sendHandoverSkip()` | Dispatch a `handover-skip` signal — only meaningful when started with `mode: "handover-prepare"`. The agent exits cleanly without firing turn hooks. |
| `sendAction(action)` | Route a custom action through `actionSchema` + `onAction`. |
| `sendStop(message?)` | Fire a stop signal. Does not wait for the turn — the run’s `signal.aborted` becomes `true`. |
| `seedSnapshot(snapshot)` | Pre-seed the snapshot read for the next boot. Effective on the next run boot only. |
| `seedSessionOutTail(chunks?)` | Pre-seed `session.out` chunks for the next boot’s replay. Reduces to settled assistant turns. |
| `seedSessionOutPartial(message?)` | Pre-seed a trailing partial assistant for the next boot’s replay. Surfaces as `event.partialAssistant` in `onRecoveryBoot`. |
| `seedSessionInTail(messages)` | Pre-seed user messages on `session.in` for the next boot. Surfaces as `event.inFlightUsers` in `onRecoveryBoot`. |
| `getSnapshot()` | The most recently written snapshot, or `undefined` if no snapshot was written. |
| `close()` | Send a `close` trigger, abort the signal, wait for `run()` to return. Always call at end of test. |
| `allChunks` | Every `UIMessageChunk` emitted since the harness was created. |
| `allRawChunks` | Every raw chunk emitted since creation, including control chunks (`trigger:turn-complete`, errors). |

### 

[​](https://trigger.dev/docs/ai-chat/testing#runinmocktaskcontext)

runInMockTaskContext

`mockChatAgent` is a higher-level wrapper around `runInMockTaskContext`, re-exported from `@trigger.dev/sdk/ai/test` so you don’t need to depend on `@trigger.dev/core` directly. Use it when you need to drive a non-chat task offline:

    import { runInMockTaskContext } from "@trigger.dev/sdk/ai/test";
    
    await runInMockTaskContext(
      async ({ inputs, outputs, ctx }) => {
        setTimeout(() => {
          inputs.send("chat-messages", { messages: [], chatId: "c1" });
        }, 0);
    
        await myTask.fns.run(payload, {
          ctx,
          signal: new AbortController().signal,
        });
    
        expect(outputs.chunks("chat")).toContainEqual(
          expect.objectContaining({ type: "text-delta", delta: "hi" }),
        );
      },
      { ctx: { run: { id: "run_abc" } } },
    );
    

[​](https://trigger.dev/docs/ai-chat/testing#limitations)

Limitations
------------------------------------------------------------------------

*   **No network.** The mock task context replaces realtime streams, run metadata, lifecycle managers, and the runtime. Anything that bypasses these (raw `fetch`, direct DB clients) runs against the real network.
*   **Single agent per process.** The resource catalog is process-global; tests within a file are sequential by default. If you parallelize across files, vitest runs each file in its own worker, which avoids registry collisions.
*   **Time-sensitive hooks.** `onTurnComplete` runs _after_ the `turn-complete` chunk is written, so `sendMessage()` resolves before that hook finishes. Add a brief `await new Promise((r) => setTimeout(r, 20))` if you need to assert on hook side-effects.
*   **No real LLM.** The harness does not call providers — you must inject `MockLanguageModelV3` (or another mock) yourself.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/ai-chat/client-protocol)
[MCP ServerChat with your agents from any AI coding tool using the Trigger.dev MCP server.\
\
Next](https://trigger.dev/docs/ai-chat/mcp)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
