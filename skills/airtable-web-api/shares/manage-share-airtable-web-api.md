# Manage share - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/manage-share
- **Summary:** patch`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}` Manages share state. | Scope | `workspacesAndBases.shares:manage` | | User role | Base editor with caveats, see `state` below | | <br>`shareId` | `string` | | <br>`state` | `"enabled" \| "disabled"`<br><br>When _enabling_ a...

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Shares

Manage share
============

patch`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}`

Manages share state.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases.shares:manage`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-shares-manage) |
| User role | Base editor with caveats, see `state` below |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`shareId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`state` | `"enabled" \| "disabled"`<br><br>When _enabling_ a share a user is subject to [sharing restrictions](https://support.airtable.com/docs/workspace-sharing-restrictions)<br>. These restrictions are not applicable when disabling a share. |

### Response format

This endpoint returns an empty response on success.

!!
