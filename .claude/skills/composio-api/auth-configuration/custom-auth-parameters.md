# Custom Auth Parameters

- **URL:** https://docs.composio.dev/auth-configuration/custom-auth-params
- **Summary:** Inject custom credentials in headers or parameters

If you're building an agent, we recommend using [sessions](/docs/configuring-sessions) instead. Sessions handle authentication automatically via [in-chat authentication](/docs/authentication#in-chat-authentication) or [manual authentication](/docs/manually-authenticating).

If you already manage OAuth tokens or API keys yourself and want Composio to execute tools using your credentials, you can pass them directly at execution time — no connected account or redirect flow required.

## Passing credentials directly

Pass `customAuthParams` in the `tools.execute()` call to inject your own token as a header or query parameter.

  
```python
from composio import Composio

composio = Composio()

result = composio.tools.execute(
    slug="GOOGLECALENDAR_LIST_EVENTS",
    user_id="user_123",
    arguments={},
    custom_auth_params={
        "parameters": [
            {
                "name": "Authorization",
                "value": "Bearer YOUR_ACCESS_TOKEN",
                "in": "header",
            }
        ],
    },
)
print(result)
```
  
  
```typescript

const composio = new Composio({
  apiKey: process.env.COMPOSIO_API_KEY,
});

const result = await composio.tools.execute(
  "GOOGLECALENDAR_LIST_EVENTS",
  {
    userId: "user_123",
    arguments: {},
    customAuthParams: {
      parameters: [
        {
          in: "header",
          name: "Authorization",
          value: `Bearer ${process.env.GOOGLE_ACCESS_TOKEN}`,
        },
      ],
    },
  }
);

console.log(JSON.stringify(result, null, 2));
```
  

This bypasses Composio's automatic token refresh. You are responsible for refreshing expired tokens yourself.

### Parameter options

Each entry in the `parameters` array accepts:

| Field | Description |
|-------|-------------|
| `name` | The parameter name (e.g., `Authorization`, `X-API-Key`) |
| `value` | The credential value |
| `in` | Where to inject — `"header"` or `"query"` |

You can also set `base_url` (Python) / `baseURL` (TypeScript) to override the default API base URL for the toolkit.

## Using a beforeExecute modifier

For more control — such as conditionally injecting credentials based on toolkit or tool — use a `beforeExecute` modifier.

Before Execute Modifiers are a way to modify the parameters of a tool before it is executed. In this case, they are useful for adding custom authentication headers or parameters to a tool.

  
```python
from composio import Composio, before_execute
from composio.types import ToolExecuteParams

composio = Composio()

@before_execute(toolkits=["NOTION"])
def add_custom_auth(
    tool: str,
    toolkit: str,
    params: ToolExecuteParams,
) -> ToolExecuteParams:
    if params["custom_auth_params"] is None:
        params["custom_auth_params"] = {"parameters": []}

    params["custom_auth_params"]["parameters"].append(
        {
            "name": "x-api-key",
            "value": os.getenv("NOTION_API_KEY"),
            "in": "header",
        }
    )
    return params

result = composio.tools.execute(
    slug="NOTION_GET_DATABASE_ITEMS",
    user_id="user_123",
    arguments={},
    modifiers=[
        add_custom_auth,
    ],
)
print(result)
```
  
  
```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
const authModifier = ({ toolSlug, toolkitSlug, params }: { toolSlug: string; toolkitSlug: string; params: any }) => {
  if (toolkitSlug === "NOTION") {
    if (!params.customAuthParams) {
      params.customAuthParams = { parameters: [] };
    }

    params.customAuthParams.parameters.push({
      in: "header",
      name: "X-API-Key",
      value: process.env.CUSTOM_API_KEY,
    });
  }
  return params;
};

const result = await composio.tools.execute(
  "NOTION_GET_DATABASE_ITEMS",
  {
    userId: "user_123",
    arguments: {
      database_id: "1234567890",
    },
  },
  {
    beforeExecute: authModifier,
  }
);

console.log(JSON.stringify(result, null, 2));
```
  

## Next

<Card icon={} title="Before execution modifiers" href="/docs/tools-direct/modify-tool-behavior/before-execution-modifiers" description="Modify tool arguments before execution" />
