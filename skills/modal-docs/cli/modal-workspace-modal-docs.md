# modal workspace | Modal Docs

- **URL:** https://modal.com/docs/cli/latest/workspace
- **Summary:** Interact with the current Modal Workspace.

Copy page

`modal workspace`
=================

Interact with the current Modal Workspace.

A Workspace is the top-level account that owns your Modal resources. Use these commands to manage workspace-level settings such as proxy tokens.

**Usage**:

    modal workspace [OPTIONS] COMMAND [ARGS]...

**Options**:

*   `--help`: Show this message and exit.

**Commands**:

*   `members`: View the members of the current Workspace.
*   `proxy-tokens`: Manage the proxy tokens of the current Workspace.

`modal workspace members` 

View the members of the current Workspace.

**Usage**:

    modal workspace members [OPTIONS] COMMAND [ARGS]...

**Options**:

*   `--help`: Show this message and exit.

**Commands**:

*   `list`: List the members of the current Workspace.

### `modal workspace members list` 

List the members of the current Workspace.

**Usage**:

    modal workspace members list [OPTIONS]

**Options**:

*   `--json`
*   `--help`: Show this message and exit.

`modal workspace proxy-tokens` 

Manage the proxy tokens of the current Workspace.

Proxy tokens provide authentication to HTTP interfaces on Modal Servers and Web Functions. They are passed as request headers (`Modal-Key` and `Modal-Secret`). See [https://modal.com/docs/guide/webhook-proxy-auth](https://modal.com/docs/guide/webhook-proxy-auth)
 for more information.

Proxy tokens and secrets have `wk-` and `ws-` prefixes, respectively. The cannot be interchanged with API tokens (which use `ak-` and `as-` prefixes).

On workspaces with RBAC enabled, tokens are scoped to specific environments; use the `allow` and `revoke` commands to manage environment associations.

**Usage**:

    modal workspace proxy-tokens [OPTIONS] COMMAND [ARGS]...

**Options**:

*   `--help`: Show this message and exit.

**Commands**:

*   `allow`: Allow a proxy token to authenticate to an environment.
*   `create`: Create a proxy token in the current Workspace.
*   `delete`: Delete a proxy token from the current Workspace.
*   `list`: List the proxy tokens of the current Workspace.
*   `revoke`: Revoke a proxy token’s access to an environment.

### `modal workspace proxy-tokens allow` 

Allow a proxy token to authenticate to an environment.

**Usage**:

    modal workspace proxy-tokens allow [OPTIONS] TOKEN_ID ENVIRONMENT_NAME

**Options**:

*   `--help`: Show this message and exit.

### `modal workspace proxy-tokens create` 

Create a proxy token in the current Workspace.

**Usage**:

    modal workspace proxy-tokens create [OPTIONS]

**Options**:

*   `--json`
*   `--help`: Show this message and exit.

### `modal workspace proxy-tokens delete` 

Delete a proxy token from the current Workspace.

**Usage**:

    modal workspace proxy-tokens delete [OPTIONS] TOKEN_ID

**Options**:

*   `-y, --yes`: Run without pausing for confirmation.
*   `--help`: Show this message and exit.

### `modal workspace proxy-tokens list` 

List the proxy tokens of the current Workspace.

**Usage**:

    modal workspace proxy-tokens list [OPTIONS]

**Options**:

*   `-e, --environment TEXT`: Only list tokens associated with this environment. Lists all tokens when omitted.
*   `--json`
*   `--help`: Show this message and exit.

### `modal workspace proxy-tokens revoke` 

Revoke a proxy token’s access to an environment.

**Usage**:

    modal workspace proxy-tokens revoke [OPTIONS] TOKEN_ID ENVIRONMENT_NAME

**Options**:

*   `--help`: Show this message and exit.

[modal workspace](https://modal.com/docs/cli/latest/workspace#modal-workspace)
[modal workspace members](https://modal.com/docs/cli/latest/workspace#modal-workspace-members)
[modal workspace members list](https://modal.com/docs/cli/latest/workspace#modal-workspace-members-list)
[modal workspace proxy-tokens](https://modal.com/docs/cli/latest/workspace#modal-workspace-proxy-tokens)
[modal workspace proxy-tokens allow](https://modal.com/docs/cli/latest/workspace#modal-workspace-proxy-tokens-allow)
[modal workspace proxy-tokens create](https://modal.com/docs/cli/latest/workspace#modal-workspace-proxy-tokens-create)
[modal workspace proxy-tokens delete](https://modal.com/docs/cli/latest/workspace#modal-workspace-proxy-tokens-delete)
[modal workspace proxy-tokens list](https://modal.com/docs/cli/latest/workspace#modal-workspace-proxy-tokens-list)
[modal workspace proxy-tokens revoke](https://modal.com/docs/cli/latest/workspace#modal-workspace-proxy-tokens-revoke)
