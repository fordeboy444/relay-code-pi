# Update workspace restrictions - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-workspace-restrictions
- **Summary:** Update workspace restrictions

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Workspaces

Update workspace restrictions
=============================

post`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/updateRestrictions`

Update [sharing restrictions settings](https://support.airtable.com/docs/workspace-sharing-restrictions)
 for the workspace.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:write`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-write) |
| User role | Workspace creator |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`workspaceId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`inviteCreationRestriction` | `optional<``"unrestricted" \| "onlyOwners"``>` |
| <br>`shareCreationRestriction` | `optional<``"unrestricted" \| "onlyOwners"``>` |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
