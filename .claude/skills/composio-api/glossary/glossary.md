# Glossary

- **URL:** https://docs.composio.dev/glossary
- **Summary:** Definitions of key Composio terms and concepts.

A blueprint that defines how authentication works for a toolkit: the auth method (`OAUTH2`, `API_KEY`, `BEARER_TOKEN`, or `BASIC`), scopes, and credentials. A [session](/docs/how-composio-works) creates one automatically when it needs one. To use your own OAuth credentials or non-default scopes, [create a custom one](/docs/auth-configuration/custom-auth-configs).

The authentication method an auth config uses, such as `OAUTH2`, `API_KEY`, `BEARER_TOKEN`, or `BASIC`.

The URL a user returns to after completing an OAuth flow through a Connect Link. You pass it as `callbackUrl` when you initiate authentication.

A project-scoped secret that authenticates your SDK and API requests. Every resource you create with it is scoped to that project.

The default mode in which Composio supplies its own OAuth app credentials for each toolkit. It requires no setup.

A hosted page where a user authorizes access to a toolkit. It is returned as a `redirect_url` from `session.authorize()` or `connectedAccounts.link()`, and Composio manages the full OAuth flow. See [Authentication](/docs/authentication).

A stored set of credentials (OAuth tokens or API keys) linked to a userID, created when a user authenticates with a toolkit. Composio refreshes OAuth tokens automatically, and a user can have [multiple connected accounts](/docs/managing-multiple-connected-accounts) for the same toolkit. IDs are prefixed `ca_`.

The object returned when you initiate authentication. It contains the Connect Link URL and a `waitForConnection()` method that resolves once the user completes the flow.

A tool you define yourself and use alongside Composio's built-in tools. Add local experimental custom tools and custom toolkits through [Custom tools and toolkits](/docs/extending-sessions/custom-tools-and-toolkits).

A flow in which the agent handles authentication itself by calling `COMPOSIO_MANAGE_CONNECTIONS` to generate a Connect Link and send it to the user in the conversation. See [In-chat authentication](/docs/authentication#in-chat-authentication).

An open protocol for connecting AI models to external tools. Create a session with `mcp: true` to expose `session.mcp.url` and `session.mcp.headers`, an MCP-compatible endpoint any MCP client can connect to. See [Using sessions via MCP](/docs/sessions-via-mcp).

Authenticating users from your own code with `session.authorize()` or `connectedAccounts.link()`, rather than letting the agent handle it through in-chat authentication. See [Manual authentication](/docs/manually-authenticating).

A set of tools included in every session: `COMPOSIO_SEARCH_TOOLS`, `COMPOSIO_GET_TOOL_SCHEMAS`, `COMPOSIO_MANAGE_CONNECTIONS`, `COMPOSIO_MULTI_EXECUTE_TOOL`, `COMPOSIO_REMOTE_WORKBENCH`, and `COMPOSIO_REMOTE_BASH_TOOL`. They let the agent discover tools, manage auth, execute in parallel, and run code without loading hundreds of tool definitions upfront. See [Meta Tools Reference](/toolkits/meta-tools).

Middleware that transforms tool behavior. [Schema modifiers](/docs/tools-direct/modify-tool-behavior/schema-modifiers) change a tool's schema before the agent sees it, [before-execution modifiers](/docs/tools-direct/modify-tool-behavior/before-execution-modifiers) change arguments before a tool runs, and [after-execution modifiers](/docs/tools-direct/modify-tool-behavior/after-execution-modifiers) transform the result. In Python, [`@before_file_upload`](/docs/tools-direct/modify-tool-behavior/before-execution-modifiers#before-file-upload-python) intercepts local paths for `file_uploadable` parameters before read and upload.

Tools you access through provider packages with `session.tools()` and call directly, rather than over MCP. Both paths give the agent the same capabilities, but tools called directly integrate with your AI framework and support modifiers and custom tools.

The top-level Composio account entity. It contains team members and projects.

A key (`x-org-api-key`) for organization-level operations such as creating and managing projects. It is distinct from the project-scoped Composio API Key.

An isolated environment within an organization that scopes API keys, connected accounts, auth configs, and webhooks. Resources in one project are inaccessible from another. IDs are prefixed `proj_`. See [Projects](/reference/api-reference/projects).

Making authenticated HTTP requests through a toolkit's connected account without a predefined tool. Use it for API endpoints Composio has no built-in tool for.

An adapter package that transforms Composio tools into the format an AI framework expects (OpenAI, Anthropic, LangChain, Vercel AI SDK, and others). See [Providers](/docs/providers).

An ephemeral, immutable configuration object returned by `composio.create(userId)`. It ties together a userID, the available toolkits, an auth config, and connected accounts, and it exposes `tools()`, `authorize()`, and `toolkits()` (plus `mcp.url` when created with `mcp: true`). See [What is a session?](/docs/how-composio-works).

The unique identifier for a session. Meta tools use it internally to share context across calls within the same session.

An individual action an agent can execute. It has an input schema and an output schema, and is named `{TOOLKIT}_{ACTION}` (for example, `GITHUB_CREATE_ISSUE`).

A tool's unique identifier, in the `{TOOLKIT}_{ACTION}` pattern (for example, `GITHUB_CREATE_ISSUE`).

A collection of related tools for a single external service. Users connect to a toolkit through authentication, and all of its tools execute with the user's credentials.

The lowercase identifier for a toolkit (for example, `github`, `gmail`, or `slack`). Use it when configuring sessions, fetching tools, or creating triggers.

Pinning a toolkit to a specific version so your integration keeps a consistent set of tools even as Composio updates its definitions. See [Toolkit versioning](/docs/tools-direct/toolkit-versioning).

A source that sends structured payloads to your application when something happens in a connected app. Triggers come in two kinds: realtime (the provider pushes events the moment they happen, for example Slack, GitHub, or Asana) and polling (Composio checks the provider on a schedule, for example Gmail). Either way, events arrive at your subscription or webhook URL. See [Triggers](/docs/triggers).

A specific, active trigger scoped to a user's connected account.

The ingress URL Composio issues per OAuth app for webhook triggers, plus the signing secret used to verify each inbound request. Composio configures it for you in most cases. When a trigger type's `requires_webhook_endpoint_setup` flag is `true`, you configure it yourself once per OAuth app through the [Webhook Endpoints API](/reference/api-reference/webhook-endpoints). See [Custom OAuth webhooks](/docs/setting-up-triggers/custom-oauth-webhooks).

The URL Composio delivers signed events to in your application. There is one per project, configured through the dashboard or the [Webhook Subscriptions API](/reference/api-reference/webhook-subscriptions). See [Subscribing to events](/docs/setting-up-triggers/subscribing-to-events).

An identifier from your application that Composio uses to scope connected accounts, tool executions, and authorizations. Connections are fully isolated between userIDs. See [What is a session?](/docs/how-composio-works).

Customizing the auth experience so users see your brand during the OAuth flow. You provide your own OAuth credentials, redirect URIs, and branding. See [White-labeling authentication](/docs/white-labeling-authentication).

A persistent Python environment (previously called the workbench) exposed through the `COMPOSIO_REMOTE_WORKBENCH` meta tool. Its state persists across calls within a session, which makes it useful for bulk operations, data transformations, and processing large tool responses. Configure it with the `sandbox` session key; `workbench` still works as an alias. See [Sandbox](/docs/sandbox/remote).
