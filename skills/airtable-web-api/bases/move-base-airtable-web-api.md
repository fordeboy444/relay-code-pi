# Move base - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/move-base
- **Summary:** post`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/moveBase` Move a base between two workspaces owned by the enterprise. | User role | Enterprise admin<br><br>Admins of multiple enterprises should use an enterprise-scoped token or a service account's token when calling this route. | |...

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Workspaces

Move base
=========

post`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/moveBase`

Move a base between two workspaces owned by the enterprise.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:manage`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use an enterprise-scoped token or a service account's token when calling this route. |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`workspaceId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>ID of the base to be moved |
| <br>`targetWorkspaceId` | `string`<br><br>ID of the target workspace of the move. I.e. the workspace that the base will belong to once the move is complete. The target workspace must be in the same enterprise account as the source workspace. |
| <br>`targetIndex` | `optional<``number``>`<br><br>The desired index for the base in the target workspace's base order (optional). If provided, targetIndex must be a number between 0 (beginning of the list) and the number of bases in the target workspace (end of the list). If targetIndex is not provided, the base will be moved to the end of the list of bases in the target workspace. |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
