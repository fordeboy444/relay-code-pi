# Delete view - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-view
- **Summary:** delete`https://api.airtable.com/v0/meta/bases/{baseId}/views/{viewId}`

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Views

Delete view
===========

delete`https://api.airtable.com/v0/meta/bases/{baseId}/views/{viewId}`

Delete a view.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:write`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-write) |
| User role | Base editor |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`viewId` | `string` |

### Response format

This endpoint returns an empty response on success.

!!
