# Single Toolkit MCP

- **URL:** https://docs.composio.dev/single-toolkit-mcp
- **Summary:** Create MCP servers for specific toolkits

For most use cases, use a regular [session](/docs/configuring-sessions) instead. Sessions provide dynamic tool access and a much better MCP experience with context management handled by us.

## Install the SDK

  

  
  

  

## Create an MCP server

  
    ### Initialize Composio

    
      
```python
from composio import Composio

composio = Composio(api_key="YOUR_API_KEY")
```
      
      
```typescript

const composio = new Composio({
  apiKey: process.env.COMPOSIO_API_KEY
});
```
      
    
  

  
    ### Create server configuration

    
    **Before you begin:** [Create an auth configuration](/docs/auth-configuration/custom-auth-configs) for your toolkit.
    

    
      
```python
server = composio.mcp.create(
    name="my-gmail-server",
    toolkits=[{
        "toolkit": "gmail",
        "auth_config": "ac_xyz123"
    }],
    allowed_tools=["GMAIL_FETCH_EMAILS", "GMAIL_SEND_EMAIL"]
)

print(f"Server created: {server.id}")
```
      
      
```typescript
const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
// ---cut---
const server = await composio.mcp.create("my-gmail-server", {
  toolkits: [
    {
      authConfigId: "ac_xyz123",
      toolkit: "gmail"
    }
  ],
  allowedTools: ["GMAIL_FETCH_EMAILS", "GMAIL_SEND_EMAIL"]
});

console.log(`Server created: ${server.id}`);
```
      
    

    
    You can also create and manage MCP configs from the [Composio dashboard](https://dashboard.composio.dev/~/org/connect/clients?utm_source=docs&utm_medium=content&utm_campaign=docs-single-toolkit-mcp).
    
  

  
    ### Generate user URLs

    
    Users must authenticate with the toolkits configured in your MCP server first. See [authentication](/docs/authentication) for details.
    

    
      
```python
instance = composio.mcp.generate(user_id="user-123", mcp_config_id=server.id)

print(f"MCP Server URL: {instance['url']}")
```
      
      
```typescript
const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const server = { id: 'my-gmail-server' };
// ---cut---
const instance = await composio.mcp.generate("user-123", server.id);

console.log("MCP Server URL:", instance.url);
```
      
    
  

  
    ### Use with AI providers

    
    Pass an `x-api-key` header when connecting to Composio MCP. This is required when `require_mcp_api_key` is enabled (default for newly created organizations).
    

    
      
```python
from openai import OpenAI

client = OpenAI(api_key="your-openai-api-key")

mcp_server_url = "https://backend.composio.dev/v3/mcp/YOUR_SERVER_ID?user_id=YOUR_USER_ID"
mcp_headers = {"x-api-key": "YOUR_COMPOSIO_API_KEY"}

response = client.responses.create(
    model="gpt-5",
    tools=[{
        "type": "mcp",
        "server_label": "composio-server",
        "server_url": mcp_server_url,
        "headers": mcp_headers,
        "require_approval": "never",
    }],
    input="What are my latest emails?",
)

print(response.output_text)
```
      
      
```python
from anthropic import Anthropic

client = Anthropic(api_key="your-anthropic-api-key")

mcp_server_url = "https://backend.composio.dev/v3/mcp/YOUR_SERVER_ID?user_id=YOUR_USER_ID"
mcp_headers = {"x-api-key": "YOUR_COMPOSIO_API_KEY"}

response = client.beta.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1000,
    messages=[{"role": "user", "content": "What are my latest emails?"}],
    mcp_servers=[{
        "type": "url",
        "url": mcp_server_url,
        "name": "composio-mcp-server",
        "headers": mcp_headers,
    }],
    betas=["mcp-client-2025-04-04"]
)

print(response.content)
```
      
      
```typescript
// @noErrors

const MCP_URL = "https://backend.composio.dev/v3/mcp/YOUR_SERVER_ID?user_id=YOUR_USER_ID";
const MCP_HEADERS = { "x-api-key": "YOUR_COMPOSIO_API_KEY" };

const client = new MCPClient({
  id: "mcp-client",
  servers: {
    composio: { url: new URL(MCP_URL), headers: MCP_HEADERS },
  }
});

const agent = new Agent({
  id: "assistant",
  name: "Assistant",
  instructions: "You are a helpful assistant that can read and manage emails.",
  model: openai("gpt-5.4"),
  tools: await client.getTools()
});

const res = await agent.generate("What are my latest emails?");
console.log(res.text);
```
      
    
  

## Server management

### List servers

  
```python
servers = composio.mcp.list()
print(f"Found {len(servers['items'])} servers")

# Filter by toolkit
gmail_servers = composio.mcp.list(toolkits="gmail", limit=20)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const servers = await composio.mcp.list({
  toolkits: [],
  authConfigs: [],
  limit: 10,
  page: 1
});
console.log(`Found ${servers.items.length} servers`);

// Filter by toolkit
const gmailServers = await composio.mcp.list({
  toolkits: ["gmail"],
  authConfigs: [],
  limit: 20,
  page: 1
});
```
  

### Get server details

  
```python
server = composio.mcp.get("mcp_server_id")
print(f"Server: {server.name}")
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const server = await composio.mcp.get("mcp_server_id");
console.log(`Server: ${server.name}`);
```
  

### Update a server

  
```python
updated = composio.mcp.update(
    server_id="mcp_server_id",
    name="updated-name",
    allowed_tools=["GMAIL_FETCH_EMAILS", "GMAIL_SEARCH_EMAILS"]
)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const updated = await composio.mcp.update("mcp_server_id", {
  name: "updated-name",
  allowedTools: ["GMAIL_FETCH_EMAILS", "GMAIL_SEARCH_EMAILS"]
});
```
  

### Delete a server

  
```python
result = composio.mcp.delete("mcp_server_id")
if result['deleted']:
    print("Server deleted")
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const result = await composio.mcp.delete("mcp_server_id");
if (result.deleted) {
  console.log("Server deleted");
}
```
  

## Next

  Use with Anthropic, OpenAI, and other frameworks
