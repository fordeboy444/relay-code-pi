# Actions

> Source: https://trigger.dev/docs/ai-chat/actions

The AI Agents and Prompts surface ships as part of the **v4.5 release candidate**. Install with `@trigger.dev/sdk@rc` (or pin `4.5.0-rc.0` or later) to use these features — they aren’t yet on the latest stable, and APIs may still change before the 4.5.0 GA. See [supported AI SDK versions](https://trigger.dev/docs/ai-chat/reference#compatibility)
 and the [AI chat changelog](https://trigger.dev/docs/ai-chat/changelog)
 for details.

[​](https://trigger.dev/docs/ai-chat/actions#overview)

Overview
------------------------------------------------------------------

Custom actions let the frontend send structured commands (undo, rollback, edit, regenerate) that modify the conversation state. **Actions are not turns**: they fire `hydrateMessages` (if set) and `onAction` only. No turn lifecycle hooks (`onTurnStart` / `prepareMessages` / `onBeforeTurnComplete` / `onTurnComplete`), no `run()`, no turn-counter increment. The trace span is named `chat action`. Actions wake the agent from suspension the same way a new message does, run their handler against the latest accumulator state, and emit a `trigger:turn-complete` chunk so the frontend’s `useChat` knows the action has been applied.

[​](https://trigger.dev/docs/ai-chat/actions#defining-an-action-handler)

Defining an action handler
------------------------------------------------------------------------------------------------------

Define an `actionSchema` for validation and an `onAction` handler that uses [`chat.history`](https://trigger.dev/docs/ai-chat/backend#chat-history)
 to modify state:

    import { z } from "zod";
    
    export const myChat = chat.agent({
      id: "my-chat",
      actionSchema: z.discriminatedUnion("type", [\
        z.object({ type: z.literal("undo") }),\
        z.object({ type: z.literal("rollback"), targetMessageId: z.string() }),\
        z.object({ type: z.literal("edit"), messageId: z.string(), text: z.string() }),\
      ]),
    
      onAction: async ({ action }) => {
        switch (action.type) {
          case "undo":
            chat.history.slice(0, -2); // Remove last user + assistant exchange
            break;
          case "rollback":
            chat.history.rollbackTo(action.targetMessageId);
            break;
          case "edit":
            chat.history.replace(action.messageId, {
              id: action.messageId,
              role: "user",
              parts: [{ type: "text", text: action.text }],
            });
            break;
        }
        // returning void → side-effect-only, no model call
      },
    
      run: async ({ messages, signal }) => {
        return streamText({ model: anthropic("claude-sonnet-4-5"), messages, abortSignal: signal });
      },
    });
    

**Lifecycle flow:** Wake → parse action against `actionSchema` → `hydrateMessages` (if set) → **`onAction`** → apply `chat.history` mutations → emit `trigger:turn-complete` → wait for next message.

[​](https://trigger.dev/docs/ai-chat/actions#returning-a-model-response-from-an-action)

Returning a model response from an action
------------------------------------------------------------------------------------------------------------------------------------

`onAction` can return a `StreamTextResult`, `string`, or `UIMessage` to produce a response. The returned stream is auto-piped to the frontend just like a normal turn, but the rest of the turn machinery (`onTurnStart`, `onTurnComplete`, etc.) still does not fire.

    onAction: async ({ action, messages }) => {
      if (action.type === "regenerate") {
        chat.history.slice(0, -1); // drop the last assistant
        return streamText({
          model: anthropic("claude-sonnet-4-5"),
          messages,
          stopWhen: stepCountIs(15),
        });
      }
      // other actions return void → side-effect only
    }
    

This is useful for actions that both mutate state and want a fresh model response (regenerate-from-here, retry-with-different-style). Persistence is your responsibility inside `onAction` itself; you have access to the streamed response object.

[​](https://trigger.dev/docs/ai-chat/actions#gating-actions-on-hitl-state)

Gating actions on HITL state
----------------------------------------------------------------------------------------------------------

If you have a [human-in-the-loop](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop)
 tool waiting on `addToolOutput`, you usually want to refuse competing actions like `regenerate` until the answer arrives. [`chat.history.getPendingToolCalls()`](https://trigger.dev/docs/ai-chat/backend#chat-history)
 gives you exactly that signal:

    onAction: async ({ action, messages, signal }) => {
      if (action.type === "regenerate") {
        if (chat.history.getPendingToolCalls().length > 0) return; // gated
        chat.history.slice(0, -1);
        return streamText({ model: anthropic("claude-sonnet-4-5"), messages, abortSignal: signal });
      }
    },
    

[​](https://trigger.dev/docs/ai-chat/actions#sending-actions-from-the-frontend)

Sending actions from the frontend
--------------------------------------------------------------------------------------------------------------------

    // Browser — TriggerChatTransport
    const stream = await transport.sendAction(chatId, { type: "undo" });
    
    // Server — AgentChat
    const stream = await agentChat.sendAction({ type: "rollback", targetMessageId: "msg-3" });
    

The action payload is validated against `actionSchema` on the backend; invalid actions throw and surface as a stream error. The `action` parameter in `onAction` is fully typed from the schema.

For silent state changes that should never appear as a turn (e.g. injecting background context), use [`chat.inject()`](https://trigger.dev/docs/ai-chat/background-injection)
 instead. Actions are explicit user-driven mutations; injections are agent-side context updates.

[​](https://trigger.dev/docs/ai-chat/actions#see-also)

See also
------------------------------------------------------------------

*   [`chat.history`](https://trigger.dev/docs/ai-chat/backend#chat-history)
     — the imperative API actions use to mutate state
*   [Sending actions from the frontend](https://trigger.dev/docs/ai-chat/frontend#sending-actions)
     — `transport.sendAction` ergonomics
*   [`hydrateMessages`](https://trigger.dev/docs/ai-chat/lifecycle-hooks#hydratemessages)
     — fires before `onAction` when set
*   [Branching conversations](https://trigger.dev/docs/ai-chat/patterns/branching-conversations)
     — pairs action handlers with backend-controlled history
*   [Human-in-the-loop](https://trigger.dev/docs/ai-chat/patterns/human-in-the-loop)
     — gating fresh actions while a tool is waiting

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/ai-chat/background-injection)
[Error handlingHow errors flow through chat.agent — stream errors, hook errors, run failures — and how to recover.\
\
Next](https://trigger.dev/docs/ai-chat/error-handling)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
