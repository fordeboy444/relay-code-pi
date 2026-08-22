# Delete workspace collaborator - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-workspace-collaborator
- **Summary:** Delete workspace collaborator

Collaborators

Delete workspace collaborator
=============================

delete`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/collaborators/{userOrGroupId}`

Delete a workspace collaborator.

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

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
