# Update workspace collaborator - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-workspace-collaborator
- **Summary:** Update workspace collaborator

Collaborators

Update workspace collaborator
=============================

patch`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/collaborators/{userOrGroupId}`

Updates the permission level of a collaborator on a workspace.

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
| <br>`userOrGroupId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`permissionLevel` | [`Workspace Permission Levels`](https://airtable.com/developers/web/api/model/workspace-permission-levels) |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
