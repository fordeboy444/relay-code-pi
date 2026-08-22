# Code execution sandbox

> Source: https://trigger.dev/docs/ai-chat/patterns/code-sandbox

The AI Agents and Prompts surface ships as part of the **v4.5 release candidate**. Install with `@trigger.dev/sdk@rc` (or pin `4.5.0-rc.0` or later) to use these features — they aren’t yet on the latest stable, and APIs may still change before the 4.5.0 GA. See [supported AI SDK versions](https://trigger.dev/docs/ai-chat/reference#compatibility)
 and the [AI chat changelog](https://trigger.dev/docs/ai-chat/changelog)
 for details.

Use a **hosted code sandbox** (for example [E2B](https://e2b.dev/)
) when the model should run short scripts to analyze tool output (PostHog queries, CSV-like data, math) without executing arbitrary code on the Trigger worker host. This page describes a **durable chat** pattern that fits `chat.agent()`:

*   **Warm** the sandbox at the start of each turn (**non-blocking**).
*   **Reuse** it for every `executeCode` tool call during that turn (and across turns in the same run if you keep the handle).
*   **Dispose** it **right before the run suspends** waiting for the next user message — using the **`onChatSuspend`** hook, not `onTurnComplete`.

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#why-not-tear-down-in-onturncomplete)

Why not tear down in `onTurnComplete`?
-----------------------------------------------------------------------------------------------------------------------------------------

After a turn finishes, the chat runtime still goes through an **idle** window and only then suspends. During that window the run is still executing — useful for `chat.defer()` work — and the run hasn’t suspended yet. The boundary you want for “turn done, about to sleep” is **`onChatSuspend`**, which fires right before the run transitions from idle to suspended. It provides the `phase` (`”preload”` or `”turn”`) and full chat context. See [onChatSuspend / onChatResume](https://trigger.dev/docs/ai-chat/lifecycle-hooks#onchatsuspend--onchatresume)
.

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#recommended-provider-e2b)

Recommended provider: E2B
-----------------------------------------------------------------------------------------------------------------

*   **API key** auth — works from any Trigger.dev worker; no Vercel-only OIDC.
*   **Code Interpreter** SDK (`@e2b/code-interpreter`): long-lived sandbox, `runCode()`, `kill()`.

Alternatives (Modal, Daytona, raw Docker) are fine but more DIY. Vercel’s sandbox + AI SDK helpers are a better fit when execution stays **on Vercel**, not on the Trigger worker.

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#implementation-sketch)

Implementation sketch
----------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#1-run-scoped-sandbox-map)

1\. Run-scoped sandbox map

Keep a `Map<runId, Promise<Sandbox>>` (or similar) in a **task-only module** so your Next.js app never imports it.

### 

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#2-onturnstart-%E2%80%94-warm-without-blocking)

2\. `onTurnStart` — warm without blocking

    onTurnStart: async ({ runId, ctx, ...rest }) => {
      warmCodeSandbox(runId); // fire-and-forget Sandbox.create()
      // ...persist messages, writer, etc.
    },
    

### 

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#3-chat-local-%E2%80%94-run-id-for-tools)

3\. `chat.local` — run id for tools

Tool `execute` functions do not receive hook payloads. Use [`chat.local()`](https://trigger.dev/docs/ai-chat/chat-local)
 to store the current run id for the sandbox key, **initialized from `onTurnStart`** (same `runId` as the map):

    // In the same task module as your tools
    import { chat } from "@trigger.dev/sdk/ai";
    
    export const codeSandboxRun = chat.local<{ runId: string }>({ id: "codeSandboxRun" });
    
    export function warmCodeSandbox(runId: string) {
      codeSandboxRun.init({ runId });
      // ...start Sandbox.create(), store promise in Map by runId
    }
    

The **`executeCode`** tool reads `codeSandboxRun.runId` and awaits the sandbox promise before `runCode`.

### 

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#4-onchatsuspend-/-oncomplete-%E2%80%94-teardown)

4\. `onChatSuspend` / `onComplete` — teardown

Use **`onChatSuspend`** to dispose the sandbox right before the run suspends, and **`onComplete`** as a safety net when the run ends entirely.

    export const aiChat = chat.agent({
      id: "ai-chat",
      // ...
      onChatSuspend: async ({ phase, ctx }) => {
        await disposeCodeSandboxForRun(ctx.run.id);
      },
      onComplete: async ({ ctx }) => {
        await disposeCodeSandboxForRun(ctx.run.id);
      },
    });
    

Unlike `onWait` (which fires for all wait types), `onChatSuspend` only fires at chat suspension points — no need to filter on `wait.type`. The `phase` discriminator tells you if this is a preload or post-turn suspension. Optional **`onChatResume`**: log or reset flags; a fresh sandbox can be warmed again on the next **`onTurnStart`**.

### 

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#5-ai-sdk-tool)

5\. AI SDK tool

Wrap the provider in a normal AI SDK `tool({ inputSchema, execute })` (same pattern as `webFetch`). Keep tool definitions in **task code**, not in the Next.js server bundle.

### 

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#6-environment)

6\. Environment

Set **`E2B_API_KEY`** (or your provider’s secret) on the **Trigger environment** for the worker — not in public client env.

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#typing-ctx)

Typing `ctx`
--------------------------------------------------------------------------------------

Every `chat.agent` lifecycle event and the `run` payload include **`ctx`**: the same **[`TaskRunContext`](https://trigger.dev/docs/ai-chat/reference#task-context-ctx)
** shape as `task({ run: (payload, { ctx }) => ... })`.

    import type { TaskRunContext } from "@trigger.dev/sdk";
    

The alias **`Context`** is also exported from `@trigger.dev/sdk` and is the same type.

[​](https://trigger.dev/docs/ai-chat/patterns/code-sandbox#see-also)

See also
--------------------------------------------------------------------------------

*   [Database persistence for chat](https://trigger.dev/docs/ai-chat/patterns/database-persistence)
     — conversation + session rows, hooks, token renewal
*   [Lifecycle hooks](https://trigger.dev/docs/ai-chat/lifecycle-hooks)
    
*   [API Reference — `ctx` on events](https://trigger.dev/docs/ai-chat/reference#task-context-ctx)
    
*   [Per-run data with `chat.local`](https://trigger.dev/docs/ai-chat/chat-local)
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/ai-chat/patterns/branching-conversations)
[Human-in-the-loopPause the agent mid-response to ask the user a clarifying question, then resume with their answer.\
\
Next](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
