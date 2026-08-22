# Get view metadata - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-view-metadata
- **Summary:** get`https://api.airtable.com/v0/meta/bases/{baseId}/views/{viewId}`

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Views

Get view metadata
=================

get`https://api.airtable.com/v0/meta/bases/{baseId}/views/{viewId}`

Get basic information of base view.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:read`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-read) |
| User role | Base read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`viewId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`include` | `optional<``array of "visibleFieldIds"``>`<br><br>If specified, additional fields to include in the `views` object response; currently, this list only allows a single literal value `visibleFieldIds` (for views of type `grid` only) |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"grid" \| "form" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block"`<br><br>Gantt views have a type of 'block' |
| <br>`personalForUserId` | `optional<``string``>`<br><br>Present if the view is personal for a user. |
| <br>`name` | `string` |
| <br>`visibleFieldIds` | `optional<``array of strings``>`<br><br>Available on `grid` views only: list of visible (non-hidden) field IDs, when requested with `include` query paremeter |

!!
