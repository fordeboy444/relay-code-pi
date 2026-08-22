# Add workspace collaborator - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/add-workspace-collaborator
- **Summary:** Add workspace collaborator post`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/collaborators` Add a new workspace collaborator.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Collaborators

Add workspace collaborator
==========================

post`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/collaborators`

Add a new workspace collaborator. Despite the name, this route currently only supports adding one collaborator at a time.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:write`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-write) |
| User role | Workspace collaborators subject to [sharing restrictions](https://support.airtable.com/docs/workspace-sharing-restrictions) |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`workspaceId` | `string` |

### Request body

`collaborators`

`array of any of the below objects`

This endpoint accepts two types of collaborators: **individual user** and **group**.

`permissionLevel`

[`Workspace Permission Levels`](https://airtable.com/developers/web/api/model/workspace-permission-levels)

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |

`permissionLevel`

[`Workspace Permission Levels`](https://airtable.com/developers/web/api/model/workspace-permission-levels)

`group`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
