# Frontend

> Source: https://trigger.dev/docs/ai-chat/frontend

The AI Agents and Prompts surface ships as part of the **v4.5 release candidate**. Install with `@trigger.dev/sdk@rc` (or pin `4.5.0-rc.0` or later) to use these features — they aren’t yet on the latest stable, and APIs may still change before the 4.5.0 GA. See [supported AI SDK versions](https://trigger.dev/docs/ai-chat/reference#compatibility)
 and the [AI chat changelog](https://trigger.dev/docs/ai-chat/changelog)
 for details.

[​](https://trigger.dev/docs/ai-chat/frontend#how-the-transport-works)

How the transport works
-------------------------------------------------------------------------------------------------

Vanilla `useChat` expects an `api` URL — it POSTs the conversation to your own Next.js route handler, which terminates the stream. `useTriggerChatTransport` replaces that round-trip: instead of an `api` URL, you pass a custom [`ChatTransport`](https://ai-sdk.dev/docs/ai-sdk-ui/transport)
 that talks directly to the Trigger.dev cloud (or your self-hosted webapp) on behalf of `useChat`. There’s no API route to maintain. The browser uses a short-lived session-scoped PAT (minted by your `accessToken` server action) to:

*   **Create the session** via your `startSession` action on the first message (or `transport.preload(chatId)`).
*   **Append the new user message** to the session’s durable `.in` stream.
*   **Subscribe to the `.out` SSE stream** for the agent’s response chunks (text, tool calls, reasoning, custom `data-*` parts).

The transport handles the auth refresh, reconnect, `Last-Event-ID` resume, and stop-signal plumbing transparently. `useChat` sees the result as `UIMessageChunk`s and renders them unchanged.

[​](https://trigger.dev/docs/ai-chat/frontend#transport-setup)

Transport setup
---------------------------------------------------------------------------------

Use the `useTriggerChatTransport` hook from `@trigger.dev/sdk/chat/react` to create a memoized transport instance, then pass it to `useChat`:

    import { useTriggerChatTransport } from "@trigger.dev/sdk/chat/react";
    import { useChat } from "@ai-sdk/react";
    import type { myChat } from "@/trigger/chat";
    import { mintChatAccessToken, startChatSession } from "@/app/actions";
    
    export function Chat() {
      const transport = useTriggerChatTransport<typeof myChat>({
        task: "my-chat",
        accessToken: ({ chatId }) => mintChatAccessToken(chatId),
        startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      });
    
      const { messages, sendMessage, stop, status } = useChat({ transport });
      // ... render UI
    }
    

The transport is created once on first render and reused across re-renders. Pass a type parameter for compile-time validation of the task ID. The two callbacks have distinct responsibilities:

*   **`accessToken`** is a _pure_ PAT mint — the transport invokes it on a 401/403 to refresh the session-scoped token. Customer wraps `auth.createPublicToken({ scopes: { read: { sessions: chatId }, write: { sessions: chatId } } })`, which resolves to a `Promise<string>` (the JWT). Return that string from your `accessToken` callback.
*   **`startSession`** wraps `chat.createStartSessionAction(taskId)` and is called when the transport needs to _create_ the session (`transport.preload(chatId)`, or lazily on the first `sendMessage` for a chatId without a cached PAT). The customer’s server controls authorization here, alongside any DB writes paired with session creation.

See [Quick start](https://trigger.dev/docs/ai-chat/quick-start)
 for the matching server actions.

The hook keeps `onSessionChange` and `clientData` up to date via internal refs, so you don’t need to memoize callbacks or worry about stale closures when those options change between renders.

[​](https://trigger.dev/docs/ai-chat/frontend#typed-messages-chat-withuimessage)

Typed messages (`chat.withUIMessage`)
-------------------------------------------------------------------------------------------------------------------------

If your chat agent is defined with [`chat.withUIMessage<YourUIMessage>()`](https://trigger.dev/docs/ai-chat/types)
 (custom `data-*` parts, typed tools, etc.), pass the same message type through `useChat` so `messages` and `message.parts` are narrowed on the client:

    import { useChat } from "@ai-sdk/react";
    import { useTriggerChatTransport, type InferChatUIMessage } from "@trigger.dev/sdk/chat/react";
    import type { myChat } from "./myChat";
    
    type Msg = InferChatUIMessage<typeof myChat>;
    
    const transport = useTriggerChatTransport<typeof myChat>({
      task: "my-chat",
      accessToken: ({ chatId }) => mintChatAccessToken(chatId),
      startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
    });
    const { messages } = useChat<Msg>({ transport });
    

See the [Types](https://trigger.dev/docs/ai-chat/types)
 guide for defining `YourUIMessage`, default stream options, and backend examples.

### 

[​](https://trigger.dev/docs/ai-chat/frontend#calling-a-fetch-endpoint-instead-of-a-server-action)

Calling a fetch endpoint instead of a server action

If you want to mint tokens via a REST endpoint instead of a Next.js server action, the same callbacks accept any async function. Import `AccessTokenParams` and `StartSessionParams` from `@trigger.dev/sdk/chat` to type your fetch handler.

    import type { AccessTokenParams, StartSessionParams } from "@trigger.dev/sdk/chat";
    
    const transport = useTriggerChatTransport({
      task: "my-chat",
      accessToken: async ({ chatId }: AccessTokenParams) => {
        const res = await fetch(`/api/chat/${chatId}/access-token`, { method: "POST" });
        return res.text();
      },
      startSession: async ({ chatId, taskId, clientData }: StartSessionParams) => {
        const res = await fetch(`/api/chat/${chatId}/start`, {
          method: "POST",
          body: JSON.stringify({ taskId, clientData }),
        });
        return res.json(); // { publicAccessToken: string }
      },
    });
    

The fetch handlers on the server side wrap the same SDK helpers as the server-action variant: `auth.createPublicToken({ scopes: { read: { sessions: chatId }, write: { sessions: chatId } } })` for refresh and `chat.createStartSessionAction(taskId)` for create.

[​](https://trigger.dev/docs/ai-chat/frontend#session-management)

Session management
---------------------------------------------------------------------------------------

Every chat is backed by a durable Session — the row that owns the chat’s runs, persists across run lifecycles, and orchestrates handoffs. The transport manages the session for you; what you persist on your side is a small piece of state per chat that lets a fresh tab resume without a round-trip to create a new session.

### 

[​](https://trigger.dev/docs/ai-chat/frontend#what-the-transport-persists-per-chat)

What the transport persists per chat

| Field | Type | Notes |
| --- | --- | --- |
| `publicAccessToken` | `string` | Session-scoped JWT (`read:sessions:{chatId} + write:sessions:{chatId}`). Refreshed automatically on 401/403 via `accessToken`. |
| `lastEventId` | `string \| undefined` | Last SSE event received on `.out`. **Valid for the lifetime of the Session** — keep it across `endRun` / `requestUpgrade` / continuation-run boundaries; only clear when the Session itself closes. The cursor lets the next subscription open past the prior turn’s stale `turn-complete` record. |
| `isStreaming` | `boolean \| undefined` | **Optional.** The transport sets it internally, but you don’t have to persist it — the server decides “nothing is streaming” via the session’s [`X-Session-Settled`](https://trigger.dev/docs/ai-chat/client-protocol#x-session-settled-fast-close-on-idle-reconnects)<br> signal on reconnect. If you do persist it, the transport keeps the fast-path short-circuit. If you drop it, reconnects open the SSE and close fast on settled sessions. |

### 

[​](https://trigger.dev/docs/ai-chat/frontend#session-cleanup-frontend)

Session cleanup (frontend)

Since session creation and updates are handled server-side, the frontend only needs to handle session deletion when a run ends:

    const transport = useTriggerChatTransport<typeof myChat>({
      task: "my-chat",
      accessToken: ({ chatId }) => mintChatAccessToken(chatId),
      startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      sessions: loadedSessions, // Restored from DB on page load
      onSessionChange: (chatId, session) => {
        if (!session) {
          deleteSession(chatId); // Server action — run ended
        }
      },
    });
    

### 

[​](https://trigger.dev/docs/ai-chat/frontend#restoring-on-page-load)

Restoring on page load

On page load, fetch both the messages and the session state from your database, then pass them to `useChat` and the transport. Pass `resume: true` to `useChat` when there’s an existing conversation — this tells the AI SDK to reconnect to the stream via the transport. Because the underlying Session row outlives individual runs, a chat you were in yesterday resumes against the same chat — even if the original run has long since exited. The transport hydrates from the persisted state and uses `lastEventId` to resubscribe; if the client tries to send a new message and no run is alive, the server triggers a fresh continuation run on the same session before the message is appended.

app/chat/\[chatId\]/ChatPage.tsx

    "use client";
    
    import { useEffect, useState } from "react";
    import { useTriggerChatTransport } from "@trigger.dev/sdk/chat/react";
    import { useChat } from "@ai-sdk/react";
    import {
      mintChatAccessToken,
      startChatSession,
      getChatMessages,
      getSession,
      deleteSession,
    } from "@/app/actions";
    
    // Rendered from `app/chat/[chatId]/page.tsx`, which awaits `params`
    // and forwards `chatId` into this client component:
    //
    //   export default async function Page({ params }: { params: Promise<{ chatId: string }> }) {
    //     const { chatId } = await params;
    //     return <ChatPage chatId={chatId} />;
    //   }
    export default function ChatPage({ chatId }: { chatId: string }) {
      const [initialMessages, setInitialMessages] = useState([]);
      const [initialSession, setInitialSession] = useState(undefined);
      const [loaded, setLoaded] = useState(false);
    
      useEffect(() => {
        async function load() {
          const [messages, session] = await Promise.all([getChatMessages(chatId), getSession(chatId)]);
          setInitialMessages(messages);
          setInitialSession(session ? { [chatId]: session } : undefined);
          setLoaded(true);
        }
        load();
      }, [chatId]);
    
      if (!loaded) return null;
    
      return (
        <ChatClient
          chatId={chatId}
          initialMessages={initialMessages}
          initialSessions={initialSession}
        />
      );
    }
    
    function ChatClient({ chatId, initialMessages, initialSessions }) {
      const transport = useTriggerChatTransport({
        task: "my-chat",
        accessToken: ({ chatId }) => mintChatAccessToken(chatId),
        startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
        sessions: initialSessions,
        onSessionChange: (id, session) => {
          if (!session) deleteSession(id);
        },
      });
    
      const { messages, sendMessage, stop, status } = useChat({
        id: chatId,
        messages: initialMessages,
        transport,
        resume: initialMessages.length > 0, // Resume if there's an existing conversation
      });
    
      // ... render UI
    }
    

`resume: true` causes `useChat` to call `reconnectToStream` on the transport when the component mounts. The transport uses the session’s `lastEventId` to skip past already-seen stream events, so the frontend only receives new data. Only enable `resume` when there are existing messages — for brand new chats, there’s nothing to reconnect to.

After resuming, `useChat`’s built-in `stop()` won’t send the stop signal to the backend because the AI SDK doesn’t pass its abort signal through `reconnectToStream`. Use `transport.stopGeneration(chatId)` for reliable stop behavior after resume — see [Stop generation](https://trigger.dev/docs/ai-chat/frontend#stop-generation)
 for the recommended pattern.

In React strict mode (enabled by default in Next.js dev), you may see a `TypeError: Cannot read properties of undefined (reading 'state')` in the console when using `resume`. This is a [known bug in the AI SDK](https://github.com/vercel/ai/issues/8477)
 caused by React strict mode double-firing the resume effect. The error is caught internally and **does not affect functionality** — streaming and message display work correctly. It only appears in development and will not occur in production builds.

### 

[​](https://trigger.dev/docs/ai-chat/frontend#network-resilience)

Network resilience

You don’t need to handle network drops, mobile background-kills, or Safari bfcache restores. The transport retries indefinitely with bounded backoff, reconnects on `online` / tab refocus / `pageshow` with `event.persisted`, and uses `Last-Event-ID` to resume without dropping chunks. See the [changelog entry](https://trigger.dev/docs/ai-chat/changelog)
 for the gory details.

[​](https://trigger.dev/docs/ai-chat/frontend#client-data-and-metadata)

Client data and metadata
---------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/ai-chat/frontend#transport-level-client-data)

Transport-level client data

Set default client data on the transport that’s included in every request. When the task uses `clientDataSchema`, this is type-checked to match:

    const transport = useTriggerChatTransport<typeof myChat>({
      task: "my-chat",
      accessToken: ({ chatId }) => mintChatAccessToken(chatId),
      startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      clientData: { userId: currentUser.id },
    });
    

The transport threads `clientData` through three places automatically: into `startSession`’s `params.clientData` for the first run’s `payload.metadata`, into per-turn `metadata` on every `.in/append` chunk, and live-updates if the option value changes between renders (so React-driven values like the current user work without reconstructing the transport).

### 

[​](https://trigger.dev/docs/ai-chat/frontend#per-message-metadata)

Per-message metadata

Pass metadata with individual messages via `sendMessage`. Per-message values are merged with transport-level client data (per-message wins on conflicts):

    sendMessage({ text: "Hello" }, { metadata: { model: "gpt-4o", priority: "high" } });
    

### 

[​](https://trigger.dev/docs/ai-chat/frontend#typed-client-data-with-clientdataschema)

Typed client data with clientDataSchema

Instead of manually parsing `clientData` with Zod in every hook, pass a `clientDataSchema` to `chat.agent`. The schema validates the data once per turn, and `clientData` is typed in all hooks and `run`:

    import { chat } from "@trigger.dev/sdk/ai";
    import { streamText, stepCountIs } from "ai";
    import { anthropic } from "@ai-sdk/anthropic";
    import { z } from "zod";
    
    export const myChat = chat.agent({
      id: "my-chat",
      clientDataSchema: z.object({
        model: z.string().optional(),
        userId: z.string(),
      }),
      onChatStart: async ({ chatId, clientData }) => {
        // clientData is typed as { model?: string; userId: string }
        await db.chat.create({
          data: { id: chatId, userId: clientData.userId },
        });
      },
      run: async ({ messages, clientData, signal }) => {
        // Same typed clientData — no manual parsing needed
        return streamText({
          model: openai(clientData?.model ?? "gpt-4o"),
          messages,
          abortSignal: signal,
          stopWhen: stepCountIs(15),
        });
      },
    });
    

The schema also types the `clientData` option on the frontend transport:

    // TypeScript enforces that clientData matches the schema
    const transport = useTriggerChatTransport<typeof myChat>({
      task: "my-chat",
      accessToken: ({ chatId }) => mintChatAccessToken(chatId),
      startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      clientData: { userId: currentUser.id },
    });
    

Supports Zod, ArkType, Valibot, and other schema libraries supported by the SDK.

[​](https://trigger.dev/docs/ai-chat/frontend#stop-generation)

Stop generation
---------------------------------------------------------------------------------

Use `transport.stopGeneration(chatId)` to stop the current generation. This sends a stop signal to the running task via input streams, aborting the current `streamText` call while keeping the run alive for the next message. `stopGeneration` works in all scenarios — including after a page refresh when the stream was reconnected via `resume`. Call it alongside `useChat`’s `stop()` to also update the frontend state:

    const { messages, sendMessage, stop: aiStop, status } = useChat({ transport });
    
    // Wrap both calls in a single stop handler
    const stop = useCallback(() => {
      transport.stopGeneration(chatId);
      aiStop();
    }, [transport, chatId, aiStop]);
    
    {
      status === "streaming" && (
        <button type="button" onClick={stop}>
          Stop
        </button>
      );
    }
    

`transport.stopGeneration(chatId)` handles the backend stop signal and closes the SSE connection, while `aiStop()` (from `useChat`) updates the frontend status to `"ready"` and fires the `onFinish` callback.

A [PR to the AI SDK](https://github.com/vercel/ai/pull/14350)
 has been submitted to pass `abortSignal` through `reconnectToStream`, which would make `useChat`’s built-in `stop()` work after resume without needing `stopGeneration`. Until that lands, use the pattern above for reliable stop behavior after page refresh.

See [Stop generation](https://trigger.dev/docs/ai-chat/backend#stop-generation)
 in the backend docs for how to handle stop signals in your task.

[​](https://trigger.dev/docs/ai-chat/frontend#tool-approvals)

Tool approvals
-------------------------------------------------------------------------------

The AI SDK supports tools that require human approval before execution. To use this with `chat.agent`, define a tool with `needsApproval: true` on the backend, then handle the approval UI and configure `sendAutomaticallyWhen` on the frontend.

### 

[​](https://trigger.dev/docs/ai-chat/frontend#backend-define-an-approval-required-tool)

Backend: define an approval-required tool

    import { tool } from "ai";
    import { z } from "zod";
    
    const sendEmail = tool({
      description: "Send an email. Requires human approval before sending.",
      inputSchema: z.object({
        to: z.string(),
        subject: z.string(),
        body: z.string(),
      }),
      needsApproval: true,
      execute: async ({ to, subject, body }) => {
        await emailService.send({ to, subject, body });
        return { sent: true, to, subject };
      },
    });
    

Pass the tool to `streamText` in your `run` function as usual. When the model calls the tool, `chat.agent` streams a `tool-approval-request` chunk. The turn completes and the run waits for the next message.

### 

[​](https://trigger.dev/docs/ai-chat/frontend#frontend-approval-ui)

Frontend: approval UI

Import `lastAssistantMessageIsCompleteWithApprovalResponses` from the AI SDK and pass it to `sendAutomaticallyWhen`. This tells `useChat` to automatically re-send messages once all approvals have been responded to. Destructure `addToolApprovalResponse` from `useChat` and wire it to your approval buttons:

    import { useChat } from "@ai-sdk/react";
    import { lastAssistantMessageIsCompleteWithApprovalResponses } from "ai";
    
    function Chat({ chatId, transport }) {
      const { messages, sendMessage, addToolApprovalResponse, status } = useChat({
        id: chatId,
        transport,
        sendAutomaticallyWhen: lastAssistantMessageIsCompleteWithApprovalResponses,
      });
    
      const handleApprove = (approvalId: string) => {
        addToolApprovalResponse({ id: approvalId, approved: true });
      };
    
      const handleDeny = (approvalId: string) => {
        addToolApprovalResponse({ id: approvalId, approved: false, reason: "User denied" });
      };
    
      return (
        <div>
          {messages.map((msg) =>
            msg.parts.map((part, i) => {
              if (part.state === "approval-requested") {
                return (
                  <div key={i}>
                    <p>Tool "{part.type}" wants to run with input:</p>
                    <pre>{JSON.stringify(part.input, null, 2)}</pre>
                    <button onClick={() => handleApprove(part.approval.id)}>Approve</button>
                    <button onClick={() => handleDeny(part.approval.id)}>Deny</button>
                  </div>
                );
              }
              // ... render other parts
            })
          )}
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/ai-chat/frontend#how-it-works)

How it works

1.  Model calls a tool with `needsApproval: true` — the turn completes with the tool in `approval-requested` state
2.  Frontend shows Approve/Deny buttons
3.  User clicks Approve — `addToolApprovalResponse` updates the tool part to `approval-responded`
4.  `sendAutomaticallyWhen` returns `true` — `useChat` re-sends the updated assistant message
5.  The transport sends the message via input streams — the backend matches it by ID and replaces the existing assistant message in the accumulator
6.  `streamText` sees the approved tool, executes it, and streams the result

Message IDs are kept in sync between frontend and backend automatically. The backend always includes a `generateMessageId` function when streaming responses, ensuring the `start` chunk carries a `messageId` that the frontend uses. This makes the ID-based matching reliable for tool approval updates.

[​](https://trigger.dev/docs/ai-chat/frontend#sending-actions)

Sending actions
---------------------------------------------------------------------------------

Send custom actions (undo, rollback, edit) to the agent via `transport.sendAction()`. Actions wake the agent and fire only `hydrateMessages` (if configured) and `onAction` — they’re not turns, so `onTurnStart` / `prepareMessages` / `onBeforeTurnComplete` / `onTurnComplete` and `run()` do not fire. For optimistic UI, mirror the action’s effect on the `useChat` state via `setMessages` while the request is in flight:

    function ChatControls({ chatId }: { chatId: string }) {
      const transport = useTriggerChatTransport({
        task: "my-chat",
        accessToken: ({ chatId }) => mintChatAccessToken(chatId),
        startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      });
    
      const { setMessages } = useChat({ transport });
    
      return (
        <div>
          <button
            onClick={() => {
              void transport.sendAction(chatId, { type: "undo" });
              setMessages((prev) => prev.slice(0, -2));
            }}
          >
            Undo last exchange
          </button>
          <button
            onClick={() => transport.sendAction(chatId, { type: "rollback", targetMessageId: "msg-5" })}
          >
            Rollback to message
          </button>
        </div>
      );
    }
    

The action payload is validated against the agent’s `actionSchema` on the backend — invalid actions are rejected. See [Actions](https://trigger.dev/docs/ai-chat/actions)
 for the backend setup.

`sendAction` returns a `ReadableStream<UIMessageChunk>`. For side-effect-only actions (where `onAction` returns `void`), the stream completes immediately with `trigger:turn-complete`. For actions where `onAction` returns a `StreamTextResult`, the stream carries the assistant chunks the same way `sendMessages` does — `useChat` consumes them automatically.

For server-to-server usage, `AgentChat` has the same method:

    const stream = await agentChat.sendAction({ type: "undo" });
    for await (const chunk of stream) {
      if (chunk.type === "text-delta") process.stdout.write(chunk.delta);
    }
    

[​](https://trigger.dev/docs/ai-chat/frontend#multi-tab-coordination)

Multi-tab coordination
-----------------------------------------------------------------------------------------------

When the same chat is open in multiple browser tabs, `multiTab: true` prevents duplicate messages and syncs conversation state across tabs. Only one tab can send at a time. Other tabs enter read-only mode with real-time message updates.

    import { useTriggerChatTransport } from "@trigger.dev/sdk/chat/react";
    import { useMultiTabChat } from "@trigger.dev/sdk/chat/react";
    import { useChat } from "@ai-sdk/react";
    
    function Chat({ chatId }: { chatId: string }) {
      const transport = useTriggerChatTransport({
        task: "my-chat",
        accessToken: ({ chatId }) => mintChatAccessToken(chatId),
        startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
        multiTab: true,
      });
    
      const { messages, setMessages, sendMessage } = useChat({
        id: chatId,
        transport,
      });
    
      const { isReadOnly } = useMultiTabChat(transport, chatId, messages, setMessages);
    
      return (
        <div>
          {isReadOnly && (
            <div className="bg-amber-50 text-amber-700 p-2 text-sm">
              This chat is active in another tab. Messages are read-only.
            </div>
          )}
          {/* message list */}
          <input
            disabled={isReadOnly}
            placeholder={isReadOnly ? "Active in another tab" : "Type a message..."}
          />
        </div>
      );
    }
    

### 

[​](https://trigger.dev/docs/ai-chat/frontend#how-it-works-2)

How it works

1.  When a tab sends a message, the transport “claims” the chatId via `BroadcastChannel`
2.  Other tabs detect the claim and enter read-only mode (`isReadOnly: true`)
3.  The active tab broadcasts its messages so read-only tabs see updates in real-time
4.  When the turn completes, the claim is released. Any tab can send next.
5.  Heartbeats detect crashed tabs (10s timeout clears stale claims)

### 

[​](https://trigger.dev/docs/ai-chat/frontend#what-usemultitabchat-does)

What `useMultiTabChat` does

*   Returns `{ isReadOnly }` for disabling the input UI
*   Broadcasts `messages` from the active tab to other tabs
*   Calls `setMessages` on read-only tabs when messages arrive from the active tab
*   Tracks read-only state via the transport’s `BroadcastChannel` coordinator

Multi-tab coordination is same-browser only (`BroadcastChannel` is a browser API). It gracefully degrades to a no-op in Node.js, SSR, or browsers without `BroadcastChannel` support. Cross-device coordination requires server-side involvement.

[​](https://trigger.dev/docs/ai-chat/frontend#self-hosting)

Self-hosting
---------------------------------------------------------------------------

If you’re self-hosting Trigger.dev, pass the `baseURL` option:

    const transport = useTriggerChatTransport({
      task: "my-chat",
      accessToken: ({ chatId }) => mintChatAccessToken(chatId),
      startSession: ({ chatId, clientData }) =>
          startChatSession({ chatId, clientData }),
      baseURL: "https://your-trigger-instance.com",
    });
    

`baseURL` also accepts a function so you can route per endpoint — useful when fronting `.in/append` with an edge proxy (e.g. to inject server-trusted signal into the wire) while keeping `.out` SSE direct:

    baseURL: ({ endpoint }) =>
      endpoint === "out" ? "https://api.trigger.dev" : "https://chat-proxy.example.com",
    

For per-request control beyond URL routing (header injection, custom retries, tracing), pass a `fetch` override. See [Trusted edge signals](https://trigger.dev/docs/ai-chat/patterns/trusted-edge-signals)
 for a full proxy walkthrough.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/ai-chat/tools)
[Server-Side ChatUse AgentChat to interact with chat agents from server-side code — tasks, webhooks, scripts, or other agents.\
\
Next](https://trigger.dev/docs/ai-chat/server-chat)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
