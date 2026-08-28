# Programmatic auth configs

- **URL:** https://docs.composio.dev/programmatic-auth-configs
- **Summary:** Create auth configs in code and pass them to a session

An [auth config](/docs/authentication#behind-the-scenes) is a blueprint for how a toolkit authenticates: the method, scopes, and credentials. Most of the time you create one in the [dashboard](https://dashboard.composio.dev/~/project/auth-configs?utm_source=docs&utm_medium=content&utm_campaign=docs-programmatic-auth-configs) and reuse it. Create them in code when you provision auth dynamically: a config per customer, per environment, or spun up and torn down as part of your app's lifecycle.

`composio.authConfigs.create()` returns an auth config ID like `ac_xxxxxxxx`. Store that ID, then [pass it to a session](#use-the-auth-config-in-a-session) so the session authenticates with it.

## Composio managed auth

For OAuth2 toolkits, Composio maintains a managed app so you can create an auth config without bringing your own credentials. This is the fastest way to start.

```python
from composio import Composio

composio = Composio()

auth_config = composio.auth_configs.create(
    toolkit="github",
    options={"type": "use_composio_managed_auth", "name": "GitHub"},
)

print(auth_config.id)  # ac_xxxxxxxx
```

```typescript

const composio = new Composio();
// ---cut---
const authConfig = await composio.authConfigs.create('github', {
  type: 'use_composio_managed_auth',
  name: 'GitHub',
});

console.log(authConfig.id); // ac_xxxxxxxx
```

## Your own OAuth2 credentials

Bring your own OAuth app to show your branding on consent screens, request custom scopes, or get a dedicated rate-limit quota. Register the app in the provider's developer portal, set its authorized redirect URI to Composio's callback, then pass the client ID and secret.

```
https://backend.composio.dev/api/v3.1/toolkits/auth/callback
```

```python
from composio import Composio

composio = Composio()

auth_config = composio.auth_configs.create(
    toolkit="notion",
    options={
        "type": "use_custom_auth",
        "auth_scheme": "OAUTH2",
        "name": "Notion",
        "credentials": {
            "client_id": os.environ["NOTION_CLIENT_ID"],
            "client_secret": os.environ["NOTION_CLIENT_SECRET"],
            "oauth_redirect_uri": "https://backend.composio.dev/api/v3.1/toolkits/auth/callback",
        },
    },
)
```

```typescript

const composio = new Composio();
// ---cut---
const authConfig = await composio.authConfigs.create('notion', {
  type: 'use_custom_auth',
  authScheme: 'OAUTH2',
  name: 'Notion',
  credentials: {
    client_id: process.env.NOTION_CLIENT_ID!,
    client_secret: process.env.NOTION_CLIENT_SECRET!,
    oauth_redirect_uri: 'https://backend.composio.dev/api/v3.1/toolkits/auth/callback',
  },
});
```

Omit `oauth_redirect_uri` to use Composio's default callback. Set it only when you [route the callback through your own domain](/docs/white-labeling-authentication#routing-the-callback-through-your-domain).

## Other auth types

Toolkits that use API keys, bearer tokens, basic auth, or no auth follow the same call. Set `auth_scheme` to the toolkit's scheme and put the required fields in `credentials`. For a toolkit whose key the user supplies at connect time, pass empty `credentials`.

```python
auth_config = composio.auth_configs.create(
    toolkit="perplexityai",
    options={
        "type": "use_custom_auth",
        "auth_scheme": "API_KEY",
        "name": "Perplexity AI",
        "credentials": {},
    },
)
```

```typescript

const composio = new Composio();
// ---cut---
const authConfig = await composio.authConfigs.create('perplexityai', {
  type: 'use_custom_auth',
  authScheme: 'API_KEY',
  name: 'Perplexity AI',
  credentials: {},
});
```

## Use the auth config in a session

Creating an auth config does not change which credentials a session uses. Pass the auth config ID to `authConfigs` (keyed by toolkit) when you create the session, and the session authenticates that toolkit with your config. Toolkits you leave out keep using Composio managed auth.

```python
session = composio.sessions.create(
    user_id="user_123",
    auth_configs={"notion": auth_config.id},
)
```

```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
const authConfig = { id: 'ac_your_notion_config' };
// ---cut---
const session = await composio.create('user_123', {
  authConfigs: { notion: authConfig.id },
});
```

See [Configuring sessions](/docs/configuring-sessions#custom-auth-configs) for how `authConfigs` interacts with account selection and precedence.

## Find auth configs

In TypeScript, filter `authConfigs.list()` by name or ID with `search`. Disabled configs are excluded by default; set `showDisabled` to include them. Auth config responses use `id` as their canonical identifier.

```typescript

const composio = new Composio();
// ---cut---
const configs = await composio.authConfigs.list({
  search: 'github',
  showDisabled: true,
});

for (const config of configs.items) {
  console.log(config.id);
}
```

## Discover the required fields

Different schemes need different credential fields. To build the `credentials` object dynamically, ask the toolkit which fields it requires for a given scheme before you create the config.

```python
fields = composio.toolkits.get_auth_config_creation_fields(
    toolkit="notion",
    auth_scheme="OAUTH2",
    required_only=True,
)
print(fields)
```

```typescript

const composio = new Composio();
// ---cut---
const fields = await composio.toolkits.getAuthConfigCreationFields('notion', 'OAUTH2', {
  requiredOnly: true,
});

console.log(fields);
```

## Next

<Card icon={} title="Controlling scopes" href="/docs/controlling-scopes" description="Override the default OAuth scopes Composio requests for a toolkit" />
