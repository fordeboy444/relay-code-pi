# Update collaborator base permission - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-collaborator-base-permission
- **Summary:** Update collaborator base permission

Collaborators

Update collaborator base permission
===================================

patch`https://api.airtable.com/v0/meta/bases/{baseId}/collaborators/{userOrGroupId}`

Updates the permission level of a collaborator on a base.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:write`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-write) |
| User role | Base collaborators subject to [sharing restrictions](https://support.airtable.com/docs/workspace-sharing-restrictions) |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`userOrGroupId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`permissionLevel` | [`Application Permission Levels`](https://airtable.com/developers/web/api/model/application-permission-levels) |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
