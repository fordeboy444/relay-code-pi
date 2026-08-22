# Delete base collaborator - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-base-collaborator
- **Summary:** Delete base collaborator delete`https://api.airtable.com/v0/meta/bases/{baseId}/collaborators/{userOrGroupId}` Delete a base collaborator.

Collaborators

Delete base collaborator
========================

delete`https://api.airtable.com/v0/meta/bases/{baseId}/collaborators/{userOrGroupId}`

Delete a base collaborator.

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

### Response format

This endpoint returns an empty response on success.

!!
