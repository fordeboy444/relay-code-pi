# Sdk Reference

Complete API reference for the Composio TypeScript SDK (@composio/core). Triggers (instance) class Trigger (Instance) class

## Pages in this folder

| Page | Local file | Summary |
| --- | --- | --- |
| TypeScript SDK Reference | [typescript-sdk-reference.md](typescript-sdk-reference.md) | Complete API reference for the Composio TypeScript SDK (@composio/core). |
| Triggers | [triggers.md](triggers.md) | Triggers (instance) class |
| Triggers | [triggers-2.md](triggers-2.md) | Trigger (Instance) class |
| Tools | [tools.md](tools.md) | Tools class definition  This class is used to manage tools in the Composio SDK. It provides methods to list, get, and execute tools.  Generic Param... |
| Tools | [tools-2.md](tools-2.md) | This class is used to manage tools in the Composio SDK. It provides methods to list, get, and execute tools. |
| Toolkits | [toolkits.md](toolkits.md) | Toolkits are a collectiono of tools that can be used to perform various tasks. They're conceptualized as a set of tools. Ex: Github toolkit can per... |
| Toolkits | [toolkits-2.md](toolkits-2.md) | Toolkits class  Toolkits are a collection of tools that can be used to perform various tasks. This is similar/replacement of `apps` in the Composio API. |
| Sessions | [sessions.md](sessions.md) | First-class API for creating and reusing Composio sessions.  `composio.sessions.create(...)` is the canonical session creation entrypoint. The top-level `composio.create(...)` method remains as a backwards-compatible alias for `composio.sessions.create(...)`. |
| Session files | [session-files.md](session-files.md) | File mount for a Composio session, reached via `session.experimental.files` on a session created with `composio.sessions.create(...)`. Upload, list, download, and delete files scoped to a single session. |
| Session | [session.md](session.md) | A Composio session \u2014 the object returned by `composio.create(...)` / `composio.use(...)`. Use it to fetch session-scoped tools, authorize toolkits,... |
| Session | [session-2.md](session-2.md) | A Composio session — the object returned by `composio.sessions.create(...)` and `composio.sessions.use(...)` (also reachable via the top-level `composio.create(...)` / `composio.use(...)` aliases).  This is the canonical session surface. Use it to fetch session-scoped tools, authorize toolkits, search, and execute tools. The public return type is `Session` (with `mcp` surfaced, returned when `{ mcp: true }` is passed) or `SessionWithoutMcp` (the default, with `mcp` omitted from the type); this class is the concrete runtime form behind both. |
| RemoteFile | [remotefile.md](remotefile.md) | Represents a file stored in a tool router session's file mount. Provides methods to fetch, save, and work with the file content. |
| Python SDK Reference | [python-sdk-reference.md](python-sdk-reference.md) | API reference for the Composio Python SDK |
| MCP | [mcp.md](mcp.md) | MCP (Model Control Protocol) class. Provides enhanced MCP server operations  This matches the TypeScript ExperimentalMCP class functionality. |
| MCP | [mcp-2.md](mcp-2.md) | MCP (Model Control Protocol) class Handles MCP server operations. When `config.experimental.mcp` is enabled, this class augments the features of `composio.mcp`. |
| Experimental | [experimental.md](experimental.md) | Experimental class reference |
| ConnectedAccounts | [connectedaccounts.md](connectedaccounts.md) | Manage connected accounts.  This class is used to manage connected accounts in the Composio SDK. These are used to authenticate with third-party se... |
| ConnectedAccounts | [connectedaccounts-2.md](connectedaccounts-2.md) | ConnectedAccounts class  This class is used to manage connected accounts in the Composio SDK. Connected accounts are used to authenticate with third-party services. |
| Composio | [composio.md](composio.md) | Composio SDK for Python.  Generic parameters: TTool: The individual tool type returned by the provider (e.g., ChatCompletionToolParam for OpenAI). ... |
| Composio | [composio-2.md](composio-2.md) | This is the core class for Composio. It is used to initialize the Composio SDK and provide a global configuration. |
| AuthConfigs | [authconfigs.md](authconfigs.md) | Manage authentication configurations. |
| AuthConfigs | [authconfigs-2.md](authconfigs-2.md) | AuthConfigs class  This class is used to manage authentication configurations in the Composio SDK. Auth configs are used to configure authentication providers and settings. |
