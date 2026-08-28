# Human-in-the-loop

> Source: https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop

The AI Agents and Prompts surface ships as part of the **v4.5 release candidate**. Install with `@trigger.dev/sdk@rc` (or pin `4.5.0-rc.0` or later) to use these features — they aren’t yet on the latest stable, and APIs may still change before the 4.5.0 GA. See [supported AI SDK versions](https://trigger.dev/docs/ai-chat/reference#compatibility)
 and the [AI chat changelog](https://trigger.dev/docs/ai-chat/changelog)
 for details.

Some turns need to stop and ask the user something before they can finish — picking between options, confirming a destructive action, or clarifying an ambiguous request. The AI SDK calls this **human-in-the-loop** (HITL), and the building block is a tool with no `execute` function. When the LLM calls a tool that has no `execute`, `streamText` ends with the tool call still pending. The turn completes cleanly, the frontend renders UI to collect the answer, and when the user responds, a new turn resumes with the answer merged into the same assistant message.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#how-it-works)

How it works
---------------------------------------------------------------------------------------------

    Turn N:
      User message → run()
      LLM streams text → calls askUser tool (no execute)
      streamText ends with tool-call in `input-available` state
      onTurnComplete fires (finishReason = "tool-calls")
      Agent suspends (compute freed) — maxDuration does not tick while paused
    
    Frontend:
      Renders question + option buttons from tool input
      User clicks → addToolOutput({ tool, toolCallId, output })
      sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls
      → sendMessage() fires next turn
    
    Turn N+1:
      hydrateMessages / accumulator sees the updated assistant message
      run() is called, LLM continues from the tool result
      onTurnComplete fires (finishReason = "stop", responseMessage is the FULL merged message)
    

The AI SDK’s `toUIMessageStream` automatically reuses the assistant message ID across the pause (we pass `originalMessages` internally), so `responseMessage` in the post-resume `onTurnComplete` is the **full merged message** — the original text, the completed tool call, and any follow-up content — not just the new parts.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#duration-and-cost-while-paused)

Duration and cost while paused
---------------------------------------------------------------------------------------------------------------------------------

A pause doesn’t hold compute. After the model calls a no-execute tool, the turn finishes and the run stays warm for `idleTimeoutInSeconds` (default 30s), then **suspends** and frees its compute, the same way [`wait.for`](https://trigger.dev/docs/wait-for)
 does. The user’s `addToolOutput` wakes it back up. Because the run is suspended while it waits, the human’s thinking time is not billed and does **not** count against [`maxDuration`](https://trigger.dev/docs/runs/max-duration)
. `maxDuration` measures active CPU time and excludes suspended waitpoint time, exactly like `wait.for`, so a user can take minutes, hours, or days to answer without the run hitting `maxDuration`. The only time that counts is each turn’s actual compute plus the short warm window before each suspend. You don’t need to raise `maxDuration` or end the run to support long human waits. How long a single suspended pause stays open is governed by the run’s suspend timeout, not `maxDuration`; if a wait outlives it the run ends, and the next `addToolOutput` boots a fresh continuation that picks up the resolved tool result.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#backend-define-the-tool)

Backend: define the tool
--------------------------------------------------------------------------------------------------------------------

A HITL tool has an `inputSchema` describing what the model can ask, but **no `execute` function**. When the LLM calls it, `streamText` returns control to your agent.

trigger/my-chat.ts

    import { chat } from "@trigger.dev/sdk/ai";
    import { streamText, tool, stepCountIs } from "ai";
    import { anthropic } from "@ai-sdk/anthropic";
    import { z } from "zod";
    
    const askUser = tool({
      description:
        "Ask the user a clarifying question when you need their input. " +
        "Present 2-4 options for them to pick from.",
      inputSchema: z.object({
        question: z.string(),
        options: z
          .array(
            z.object({
              id: z.string(),
              label: z.string(),
              description: z.string().optional(),
            })
          )
          .min(2)
          .max(4),
      }),
      // No execute function — streamText ends, the frontend supplies the output
      // via addToolOutput, and the next turn continues from the result.
    });
    
    export const myChat = chat.agent({
      id: "my-chat",
      tools: { askUser },
      run: async ({ messages, tools, signal }) => {
        return streamText({
          model: anthropic("claude-sonnet-4-5"),
          messages,
          tools,
          abortSignal: signal,
          stopWhen: stepCountIs(15),
        });
      },
    });
    

Declaring `tools` on the config (and reading them back from the payload) is the recommended shape for any agent with tools. See [Tools](https://trigger.dev/docs/ai-chat/tools)
.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#frontend-render-the-question-and-collect-the-answer)

Frontend: render the question and collect the answer
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Two pieces on the client:

1.  **UI for the pending tool call** — render when the tool part is in `input-available` state, i.e. the LLM has called the tool but there’s no output yet.
2.  **Auto-send on resolution** — use `sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls` so answering kicks off the next turn without the user having to hit “send.”

    import { useChat, lastAssistantMessageIsCompleteWithToolCalls } from "@ai-sdk/react";
    import { useTriggerChatTransport } from "@trigger.dev/sdk/chat/react";
    
    function ChatView({ chatId }: { chatId: string }) {
      const transport = useTriggerChatTransport({
        task: "my-chat",
        accessToken: ({ chatId }) => mintChatAccessToken(chatId),
        startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      });
      const { messages, sendMessage, addToolOutput } = useChat({
        id: chatId,
        transport,
        sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithToolCalls,
      });
    
      return (
        <>
          {messages.map((m) =>
            m.parts.map((part, i) => {
              if (part.type === "tool-askUser" && part.state === "input-available") {
                return (
                  <AskUserCard
                    key={i}
                    question={part.input.question}
                    options={part.input.options}
                    onAnswer={(opt) =>
                      addToolOutput({
                        tool: "askUser",
                        toolCallId: part.toolCallId,
                        output: { optionId: opt.id, label: opt.label },
                      })
                    }
                  />
                );
              }
              if (part.type === "text") return <Markdown key={i}>{part.text}</Markdown>;
              return null;
            })
          )}
        </>
      );
    }
    

`addToolOutput` patches the assistant message locally with `state: "output-available"` and fills in `output`. `lastAssistantMessageIsCompleteWithToolCalls` detects that every pending tool call now has a result, and `useChat` fires a new `sendMessage` — the backend picks it up as the next turn.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#detecting-a-paused-turn-in-onturncomplete)

Detecting a paused turn in `onTurnComplete`
---------------------------------------------------------------------------------------------------------------------------------------------------------

Two ways to detect “this turn paused for user input” vs “this turn finished normally”:

### 

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#via-finishreason-recommended)

Via `finishReason` (recommended)

The AI SDK’s finish reason is surfaced on every `onTurnComplete` event. If the model stopped on tool calls, it’s `"tool-calls"`:

    onTurnComplete: async ({ finishReason, responseMessage }) => {
      if (finishReason === "tool-calls") {
        // Turn paused — assistant message has pending tool call(s)
        const pending = responseMessage?.parts.filter(
          (p) => p.type.startsWith("tool-") && p.state === "input-available"
        );
        // Persist as a checkpoint / partial turn
      } else {
        // finishReason === "stop" — normal completion
        // Persist as a completed turn
      }
    };
    

`finishReason` is only undefined for manual `chat.pipe()` flows or aborted streams. For the common `run() → return streamText(...)` pattern it’s always populated.

### 

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#via-response-parts)

Via response parts

If you need more nuance (e.g. which specific tool is pending), use `chat.history.getPendingToolCalls()`:

    const pending = chat.history.getPendingToolCalls();
    // [{ toolCallId, toolName, messageId }]
    

The result reflects the most recent assistant message: the one waiting on `addToolOutput`. Use it from `onAction` to gate fresh user turns (“can’t send a new message while a HITL is open”), or from `onTurnComplete` to decide what to persist. Both `finishReason === "tool-calls"` and `chat.history.getPendingToolCalls().length > 0` are equivalent in practice. Use `finishReason` for dispatch, the helper for detail.

### 

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#acting-once-per-net-new-tool-result)

Acting once per net-new tool result

When the user’s `addToolOutput` round-trips a tool answer back to the agent, the wire message carries the resolved tool part. If you want to fire side-effects (audit log, billing, notifications) exactly once per resolved tool call, do it in `hydrateMessages` before the runtime merges. `chat.history.extractNewToolResults(message)` returns only the parts whose `toolCallId` isn’t already resolved on the chain:

    hydrateMessages: async ({ incomingMessages }) => {
      for (const msg of incomingMessages) {
        if (msg.role !== "assistant") continue;
        for (const r of chat.history.extractNewToolResults(msg)) {
          await auditLog.record({
            toolCallId: r.toolCallId,
            toolName: r.toolName,
            output: r.output,
            errorText: r.errorText, // set only for output-error parts
          });
        }
      }
      return incomingMessages;
    },
    

`extractNewToolResults` compares against the current `chat.history`. By the time `onTurnComplete` fires, the chain already contains `responseMessage`, so the helper returns `[]` there. Use it where the message is from outside the accumulator: `hydrateMessages`, `onAction` if the action carries a message, or any custom pre-merge code path.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#persistence-one-message-vs-one-record-per-pause)

Persistence: one message vs one record per pause
--------------------------------------------------------------------------------------------------------------------------------------------------------------------

Because the AI SDK reuses the assistant message ID across the pause, the “same turn” from the user’s perspective maps to **two `onTurnComplete` firings** on the server — but both receive a `responseMessage` with the **same `id`**, and the second firing’s `responseMessage` contains the fully merged content. Two common persistence patterns:

### 

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#overwrite-on-every-turn-simplest)

Overwrite on every turn (simplest)

Just store the latest `uiMessages` array on every `onTurnComplete`. The paused-turn write is overwritten by the resume-turn write; the final DB state has the full merged message.

    onTurnComplete: async ({ chatId, uiMessages }) => {
      await db.chat.update({
        where: { id: chatId },
        data: { messages: uiMessages },
      });
    },
    

Use this unless you specifically need an audit trail.

### 

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#checkpoint-nodes-immutable-history)

Checkpoint nodes (immutable history)

For apps that want every pause point recorded as its own immutable snapshot (branching, replay, diff review), save a checkpoint when paused and a sibling when complete:

    onTurnComplete: async ({ chatId, responseMessage, finishReason, uiMessages }) => {
      if (!responseMessage) return;
    
      if (finishReason === "tool-calls") {
        // Paused — save a checkpoint
        await db.turnCheckpoint.create({
          data: {
            chatId,
            messageId: responseMessage.id,
            parts: responseMessage.parts,
            kind: "partial",
          },
        });
      } else {
        // Completed — save a sibling with the merged full message
        await db.turnCheckpoint.create({
          data: {
            chatId,
            messageId: responseMessage.id,
            parts: responseMessage.parts,
            kind: "final",
          },
        });
      }
    
      // Always update the canonical chat record for `hydrateMessages` to load
      await db.chat.update({
        where: { id: chatId },
        data: { messages: uiMessages },
      });
    };
    

Both writes see `responseMessage.id` as the same value — they’re checkpoints of the same logical message. Grouping by `messageId` + ordering by `createdAt` gives you the progression.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#multi-pause-turns)

Multi-pause turns
-------------------------------------------------------------------------------------------------------

A single logical turn can pause more than once — the LLM asks question A, gets the answer, thinks, then asks question B before finishing. Each pause fires its own `onTurnComplete` with `finishReason === "tool-calls"`; only the last firing has `finishReason === "stop"`. The checkpoint pattern above handles this naturally — each pause adds a new checkpoint sharing the same `responseMessage.id`.

[​](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop#gotchas)

Gotchas
-----------------------------------------------------------------------------------

*   **Don’t set an `execute` function on the HITL tool.** If it has one, `streamText` will call it immediately instead of handing control back.
*   **The frontend must use `sendAutomaticallyWhen`.** Without it, the user has to press Enter after answering — `addToolOutput` updates local state but doesn’t fire a new turn by itself.
*   **Don’t mutate `responseMessage` in `onTurnComplete`.** It’s the captured snapshot. To add custom parts, use `chat.response.append()` in `onBeforeTurnComplete` (while the stream is open).
*   **Stop handling.** If the user stops the run while a pause is active (`chat.stop()` on the transport), `onTurnComplete` fires with `stopped: true` and `finishReason` reflecting the last successful step. Treat stopped paused turns the same as stopped normal turns.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/ai-chat/patterns/code-sandbox)
[Tool result auditingFire side effects exactly once per resolved tool call — audit logs, billing, notifications — using extractNewToolResults inside hydrateMessages or onTurnComplete.\
\
Next](https://trigger.dev/docs/ai-chat/patterns/tool-result-auditing)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
