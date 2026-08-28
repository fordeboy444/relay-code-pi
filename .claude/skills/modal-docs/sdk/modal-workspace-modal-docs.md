# modal.Workspace | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.Workspace
- **Summary:** Synchronize the local object with its identity on the Modal server.

Copy page

modal.Workspace
===============

    class Workspace(modal.object.Object)

hydrate 

    hydrate(self, client=None)

Synchronize the local object with its identity on the Modal server.

It is rarely necessary to call this method explicitly, as most operations will lazily hydrate when needed. The main use case is when you need to access object metadata, such as its ID.

_Added in v0.72.39_: This method replaces the deprecated `.resolve()` method.

name 

    name(self)

members 

    members: WorkspaceMembersManager

Namespace with methods for managing the membership of a Workspace.

### members.list 

    list(self)

Return the members of the Workspace.

**Examples:**

    members = modal.Workspace.from_context().members.list()
    print([m.name for m in members])

from_context 

    from_context(*, client=None)

Look up the Workspace associated with the current context.

This returns the Workspace that the active Modal credentials authenticate against (i.e., your active profile or the `MODAL_TOKEN_ID` / `MODAL_TOKEN_SECRET` environment variables). If called inside a Modal container, it returns the Workspace that the container is running in.

billing 

    billing: WorkspaceBillingManager

Namespace for Workspace billing APIs.

### billing.report 

    report(self, *, start, end=None, resolution="d", tag_names=None)

Return a cost report for all Workspace usage, broken down by object and time.

**Parameters**

start datetime

Start of the report, inclusive and rounded to the beginning of the interval. Must be in UTC or timezone-naive (interpreted as UTC).

end datetime | None

End of the report, exclusive. Must be in UTC or timezone-naive. Partial final intervals will be excluded from the report.

resolution str

Resolution, e.g. "d" for daily or "h" for hourly. (Default is "d")

tag_names list\[str\] | None

List of tag names; each row will include the tag name and value in use for that object during the relevant time interval. Pass `["*"]` to include all tags in the report.

**Returns**

A list of `BillingReportItem` dataclasses. Each item reports the cost attributed to a specific Modal object during a given time interval. Cost is further broken down by the resource type that generated it (e.g. CPU, Memory, specific GPU usage). Note that the specific resource types included in the breakdown are subject to change as Modal’s billing model evolves.

**See Also**

*   [`modal billing report`](https://modal.com/docs/cli/latest/billing#modal-billing-report)
    : A workspace report CLI that has convenience features around relative time range queries and JSON/CSV output.
*   [`Environment.billing.report()`](https://modal.com/docs/sdk/py/latest/modal.Environment#billingreport)
    : An analogous report API that is scoped to a specific Environment.

proxy_tokens 

    proxy_tokens: WorkspaceProxyTokenManager

Namespace with methods for managing the proxy tokens in a Workspace.

See [the guide](https://modal.com/docs/guide/webhook-proxy-auth)
 for more information on proxy tokens.

### proxy_tokens.create 

    create(self)

Create a new proxy token for the Workspace.

**Usage**

    token = modal.Workspace.from_context().proxy_tokens.create()
    print(token.token_id, token.token_secret)

### proxy_tokens.list 

    list(self, environment_name=None)

List proxy tokens in the Workspace.

**Parameters**

environment_name Optional\[str\]

When provided, list only the tokens associated with this environment.

**Usage**

    ws = modal.Workspace.from_context()
    
    # List all proxy tokens in the Workspace
    tokens = ws.proxy_tokens.list()
    print([t.token_id for t in tokens])
    
    # List only the proxy tokens associated with a specific Environment
    env_tokens = ws.proxy_tokens.list(environment_name="prod")

### proxy_tokens.allow 

    allow(self, proxy_token_id, environment_name)

Allow a proxy token to authenticate requests to a given Environment.

**Parameters**

proxy_token_id str

The token ID (`wk-...`) to operate on.

environment_name str

The name of the environment to allow access to.

**Usage**

    ws = modal.Workspace.from_context()
    token = ws.proxy_tokens.create()
    ws.proxy_tokens.allow(token.token_id, "prod")

### proxy_tokens.revoke 

    revoke(self, proxy_token_id, environment_name)

Revoke a proxy token’s access to a given Environment.

The proxy token is not deleted, and it will continue to authenticate requests to any other Environments it is associated with.

**Parameters**

proxy_token_id str

The token ID (`wk-...`) to operate on.

environment_name str

The name of the environment to revoke access from.

**Usage**

    ws = modal.Workspace.from_context()
    ws.proxy_tokens.revoke(token_id, "prod")

### proxy_tokens.delete 

    delete(self, proxy_token_id)

Delete a proxy token from the Workspace.

This cannot be reverted. Any clients currently using the token will immediately lose access to associated resources.

**Parameters**

proxy_token_id str

The token ID (`wk-...`) to delete.

**Usage**

    modal.Workspace.from_context().proxy_tokens.delete(token_id)

[modal.Workspace](https://modal.com/docs/sdk/py/latest/modal.Workspace#modalworkspace)
[hydrate](https://modal.com/docs/sdk/py/latest/modal.Workspace#hydrate)
[name](https://modal.com/docs/sdk/py/latest/modal.Workspace#name)
[members](https://modal.com/docs/sdk/py/latest/modal.Workspace#members)
[list](https://modal.com/docs/sdk/py/latest/modal.Workspace#memberslist)
[from_context](https://modal.com/docs/sdk/py/latest/modal.Workspace#from_context)
[billing](https://modal.com/docs/sdk/py/latest/modal.Workspace#billing)
[report](https://modal.com/docs/sdk/py/latest/modal.Workspace#billingreport)
[proxy_tokens](https://modal.com/docs/sdk/py/latest/modal.Workspace#proxy_tokens)
[create](https://modal.com/docs/sdk/py/latest/modal.Workspace#proxy_tokenscreate)
[list](https://modal.com/docs/sdk/py/latest/modal.Workspace#proxy_tokenslist)
[allow](https://modal.com/docs/sdk/py/latest/modal.Workspace#proxy_tokensallow)
[revoke](https://modal.com/docs/sdk/py/latest/modal.Workspace#proxy_tokensrevoke)
[delete](https://modal.com/docs/sdk/py/latest/modal.Workspace#proxy_tokensdelete)
