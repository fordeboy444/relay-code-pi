# Authentication

- **URL:** https://docs.composio.dev/authentication
- **Summary:** Understand how Composio handles user authentication to toolkits

Composio organizes everything around your **users**. A user is whoever your agent acts on behalf of: a person in your app, identified by a [`userID`](/docs/how-composio-works) you choose. Authentication is always per user. Each user connects their own accounts, their Gmail, their GitHub, their Slack, and Composio stores and refreshes those credentials against that `userID`.

This is the core idea: your agent runs the same tools for many people, and every tool call runs as a specific user against that user's connected accounts. User A's agent never touches user B's data. You pass the `userID` when you create a session, and Composio handles the auth from there.

Because connections are stored under the `userID`, use a stable identifier, like your database ID, never one that can change.

- **Recommended:** database UUID or primary key (`user.id`)
- **Acceptable:** unique username (`user.username`)
- **Avoid:** email addresses (they can change)
- **Never:** `default` in production (it exposes other users' data)

Your users connect their accounts through a secure [Connect Link](/reference/api-reference/connected-accounts/postConnectedAccountsLink), and Composio manages their tokens for you.

## How Composio handles authentication

Every session includes the [`COMPOSIO_MANAGE_CONNECTIONS`](/toolkits/meta-tools/manage_connections) meta tool. When a tool needs an account, it reads the toolkit's **auth config** (how that toolkit authenticates: method, scopes, credentials), creates a connection, and returns a secure [Connect Link](/reference/api-reference/connected-accounts/postConnectedAccountsLink). This works for all Composio managed connections, so you don't have to set up any OAuth credentials yourself.

The user signs in on the hosted link and Composio stores the resulting connected account. Credentials never pass through your app or the model, so it's safe to surface the link right in the chat.

You only need a [custom auth config](/docs/custom-app-vs-managed-app) to bring your own OAuth app, request specific scopes, or use a toolkit without managed auth.

## In-chat authentication

<div>

The agent posts the Connect Link straight into the conversation. The user clicks it, signs in, and the agent retries the tool and continues. No auth UI for you to build.

</div>

You can also call `COMPOSIO_MANAGE_CONNECTIONS` yourself, intercept the Connect Link, and surface it wherever you need: DM it to the user, render it in your own UI, or email it. See [redirect auth links](/examples/general-agent-with-pi#redirect-auth-links) for a worked example.

### Custom callback URL

To send users back to your app after they connect, pass a `callback_url`:

```python
session = composio.create(
    user_id="user_123",
    manage_connections={"callback_url": "https://yourapp.com/chat"},
)
```

```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const session = await composio.create("user_123", {
  manageConnections: { callbackUrl: "https://yourapp.com/chat" },
});
```

## Manually triggering authentication

Don't want to wait for the agent? Call `session.authorize()` to generate a Connect Link on demand, for onboarding, a settings page, or a pre-flight check before a task.

  `session.authorize()`, callback URLs, connection status, and disabling in-chat prompts

## Behind the scenes

Composio manages authentication with **auth configs**. An [auth config](/reference/api-reference/auth-configs) is a blueprint for how a toolkit authenticates across all your users. It defines three things:

- **Authentication method**: OAuth2, Bearer token, API key, or Basic Auth
- **Scopes**: what actions your tools can perform
- **Credentials**: your own app credentials, or Composio's managed auth

Composio creates one auth config per toolkit and applies it to every user who connects that toolkit. Most toolkits use Composio managed auth, so you don't create or configure anything. You only need a [custom auth config](/docs/custom-app-vs-managed-app) to use your own OAuth app or customize scopes.

When a user authenticates, Composio creates a [connected account](/reference/api-reference/connected-accounts): their credentials (OAuth tokens or API keys) linked to your userID. Each user can have multiple, even for the same toolkit (e.g. work and personal Gmail).

### Connection lifecycle

For OAuth, Composio refreshes access tokens automatically before they expire, so connections stay `ACTIVE` with no work from you. If a refresh token is revoked or expires, the connection moves to `EXPIRED` and the user has to reconnect.

Catch this before a tool call fails by subscribing to the `composio.connected_account.expired` event on a [webhook subscription](/reference/api-reference/webhook-subscriptions). When it fires, send the user a fresh Connect Link to re-authenticate:

```python
session = composio.create(user_id="user_123")
connection_request = session.authorize("gmail")

# Send this URL to the user (email, in-app notification, etc.)
print(connection_request.redirect_url)
```

```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const session = await composio.create("user_123");
const connectionRequest = await session.authorize("gmail");

// Send this URL to the user (email, in-app notification, etc.)
console.log(connectionRequest.redirectUrl);
```

## Next

<Card icon={} title="Manual auth management" href="/docs/manually-authenticating" description="Generate Connect Links yourself, check connection status, and disable in-chat prompts" />
