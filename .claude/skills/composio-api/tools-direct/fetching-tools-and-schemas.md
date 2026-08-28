# Fetching tools and schemas

- **URL:** https://docs.composio.dev/tools-direct/fetching-tools
- **Summary:** Fetch and filter tools, and inspect schemas

If you're building an agent, we recommend using [sessions](/docs/configuring-sessions) instead. See [Tools and toolkits](/docs/how-composio-works) for how sessions discover and fetch tools automatically.

Fetch specific tools, filter by permissions or search, and inspect schemas for type information. Tools are automatically formatted for your provider.

## Basic usage

  
```python
tools = composio.tools.get(
    user_id,
    toolkits=["GITHUB"]
)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
const userId = 'user-123';
// ---cut---
const tools = await composio.tools.get(userId, {
  toolkits: ["GITHUB"]
});
```
  

Returns top 20 tools by default. Tools require a `user_id` because they're scoped to authenticated accounts. See [User scoping](/docs/how-composio-works) and [Authentication](/docs/tools-direct/authenticating-tools).

## Tool schemas

Inspect tool parameters and types without a user_id:

  
```python
tool = composio.tools.get_raw_composio_tool_by_slug("GMAIL_SEND_EMAIL")
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const tool = await composio.tools.getRawComposioToolBySlug("GMAIL_SEND_EMAIL");
```
  

Generate type-safe code for direct SDK execution with [`composio generate`](/docs/cli#generate-type-definitions). This creates TypeScript or Python types from tool schemas.

View tool parameters and schemas visually in the [Composio platform](https://dashboard.composio.dev?utm_source=docs&utm_medium=content&utm_campaign=docs-tools-direct-fetching-tools). Navigate to any toolkit and select a tool to see its input/output parameters.

## Filtering tools

### By toolkit

Get tools from specific apps. Returns top 20 tools by default.

  
```python
# Fetch with limit for a specific user
tools = composio.tools.get(
    user_id,
    toolkits=["GITHUB"],
    limit=5  # Get top 5 tools
)

# Same filter but without user_id (for schemas)
raw_tools = composio.tools.get_raw_composio_tools(
    toolkits=["GITHUB"],
    limit=5
)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
const userId = 'user-123';
// ---cut---
// Fetch with limit for a specific user
const limitedTools = await composio.tools.get(userId, {
  toolkits: ["GITHUB"],
  limit: 5  // Get top 5 tools
});

// Same filter but without userId (for schemas)
const rawTools = await composio.tools.getRawComposioTools({
  toolkits: ["GITHUB"],
  limit: 5
});
```
  

### By name

Fetch specific tools when you know their names.

  
```python
# Fetch specific tools by name
tools = composio.tools.get(
    user_id,
    tools=["GITHUB_CREATE_ISSUE", "GITHUB_CREATE_PULL_REQUEST"]
)

# Get schemas without user_id
raw_tools = composio.tools.get_raw_composio_tools(
    tools=["GITHUB_CREATE_ISSUE", "GITHUB_CREATE_PULL_REQUEST"]
)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
const userId = 'user-123';
// ---cut---
// Fetch specific tools by name
const specificTools = await composio.tools.get(userId, {
  tools: ["GITHUB_LIST_STARGAZERS", "GITHUB_STAR_A_REPOSITORY_FOR_THE_AUTHENTICATED_USER"]
});

// Get schemas without userId
const specificRawTools = await composio.tools.getRawComposioTools({
  tools: ["GITHUB_LIST_STARGAZERS", "GITHUB_STAR_A_REPOSITORY_FOR_THE_AUTHENTICATED_USER"]
});
```
  

### By scopes

Filter OAuth tools by permission level. Only works with a single toolkit.

  
```python
# Filter by OAuth scopes (single toolkit only)
tools = composio.tools.get(
    user_id,
    toolkits=["GITHUB"],
    scopes=["write:org"]
)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
const userId = 'user-123';
// ---cut---
// Filter by OAuth scopes (single toolkit only)
const scopedTools = await composio.tools.get(userId, {
  toolkits: ["GITHUB"],
  scopes: ["write:org"]
});
```
  

### By search (experimental)

Find tools semantically.

  
```python
# Search tools semantically
tools = composio.tools.get(
    user_id,
    search="create calendar event"
)

# Search schemas without user_id
raw_tools = composio.tools.get_raw_composio_tools(
    search="create calendar event"
)

# Search within a specific toolkit
tools = composio.tools.get(
    user_id,
    search="issues",
    toolkits=["GITHUB"],
)

# Search toolkit schemas without user_id
raw_tools = composio.tools.get_raw_composio_tools(
    search="issues",
    toolkits=["GITHUB"]
)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
const userId = 'user-123';
// ---cut---
// Search tools semantically
const searchResults = await composio.tools.get(userId, {
  search: "create google calendar event"
});

// Search schemas without userId
const searchRawTools = await composio.tools.getRawComposioTools({
  search: "create google calendar event"
});

// Search within a specific toolkit
const toolkitSearch = await composio.tools.get(userId, {
  search: "star a repository",
  toolkits: ["GITHUB"]
});

// Search toolkit schemas without userId
const toolkitSearchRaw = await composio.tools.getRawComposioTools({
  search: "star a repository",
  toolkits: ["GITHUB"]
});
```
  

When no toolkit version is specified, the API returns tools from the base version (`00000000_00`), which may be fewer than what's available. Pass `toolkit_versions="latest"` or a specific version to get all tools. Never use `latest` in production. See [toolkit versioning](/docs/tools-direct/toolkit-versioning).

## Next

<Card icon={} title="Executing tools" href="/docs/tools-direct/executing-tools" description="Run tools with providers, agentic frameworks, or direct execution" />
