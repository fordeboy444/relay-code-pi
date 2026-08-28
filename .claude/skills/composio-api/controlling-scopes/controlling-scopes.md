# Controlling scopes

- **URL:** https://docs.composio.dev/controlling-scopes
- **Summary:** Override the default OAuth scopes Composio requests for a toolkit

Scopes are the permissions an OAuth toolkit grants your app: read email, write to a repo, manage calendar events. Composio requests a sensible set of default scopes for each toolkit, so most apps never set scopes at all. Override them when the defaults grant too much or too little: to follow least privilege, or to reach an API the defaults don't cover.

You control scopes on an [auth config](/docs/authentication#behind-the-scenes), then [pass that auth config to a session](#use-the-auth-config-in-a-session) so the session requests your scopes when users connect.

Scopes apply to OAuth toolkits. Toolkits that authenticate with API keys or bearer tokens don't have scopes to set.

## Set scopes with Composio managed auth

Pass a `scopes` field in `credentials` to override the defaults while still using Composio's managed OAuth app. Give scopes as a comma-separated string.

```python
from composio import Composio

composio = Composio()

auth_config = composio.auth_configs.create(
    toolkit="hubspot",
    options={
        "type": "use_composio_managed_auth",
        "name": "HubSpot",
        "credentials": {"scopes": "sales-email-read,tickets"},
    },
)
```

```typescript

const composio = new Composio();
// ---cut---
const authConfig = await composio.authConfigs.create('hubspot', {
  type: 'use_composio_managed_auth',
  name: 'HubSpot',
  credentials: { scopes: 'sales-email-read,tickets' },
});
```

## Set scopes with your own OAuth app

When you bring your own OAuth credentials, put `scopes` alongside the client ID and secret. Make sure your OAuth app has those scopes approved in the provider's portal.

```python

auth_config = composio.auth_configs.create(
    toolkit="github",
    options={
        "type": "use_custom_auth",
        "auth_scheme": "OAUTH2",
        "name": "GitHub",
        "credentials": {
            "client_id": os.environ["GITHUB_CLIENT_ID"],
            "client_secret": os.environ["GITHUB_CLIENT_SECRET"],
            "scopes": "repo,read:org",
        },
    },
)
```

```typescript

const composio = new Composio();
// ---cut---
const authConfig = await composio.authConfigs.create('github', {
  type: 'use_custom_auth',
  authScheme: 'OAUTH2',
  name: 'GitHub',
  credentials: {
    client_id: process.env.GITHUB_CLIENT_ID!,
    client_secret: process.env.GITHUB_CLIENT_SECRET!,
    scopes: 'repo,read:org',
  },
});
```

## Update scopes on an existing config

Change the scopes on an auth config you already created without recreating it.

```python
composio.auth_configs.update(
    "ac_1234",
    {"type": "default", "scopes": "repo,read:org,read:user"},
)
```

```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
// ---cut---
await composio.authConfigs.update('ac_1234', {
  type: 'default',
  scopes: 'repo,read:org,read:user',
});
```

Changing scopes affects new connections only. Users with an existing [connected account](/docs/authentication#behind-the-scenes) keep the scopes they already granted until they reconnect. To apply new scopes to a current user, have them re-authenticate.

## Use the auth config in a session

Setting scopes on an auth config does nothing until a session uses it. Pass the auth config ID to `authConfigs` (keyed by toolkit) when you create the session, and the session requests your scopes when the user connects that toolkit.

```python
session = composio.create(
    user_id="user_123",
    auth_configs={"github": auth_config.id},
)
```

```typescript
const composio = new Composio({ apiKey: 'your_api_key' });
const authConfig = { id: 'ac_your_github_config' };
// ---cut---
const session = await composio.create('user_123', {
  authConfigs: { github: authConfig.id },
});
```

## Next

<Card icon={} title="White-labeling authentication" href="/docs/white-labeling-authentication" description="Remove Composio branding from your auth flows" />
