# List views - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-views
- **Summary:** get`https://api.airtable.com/v0/meta/bases/{baseId}/views`

Views

List views
==========

get`https://api.airtable.com/v0/meta/bases/{baseId}/views`

Lists basic information of base views.

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

### Query parameters

|     |     |
| --- | --- |
| <br>`include` | `optional<``array of "visibleFieldIds"``>`<br><br>If specified, additional fields to include in the `views` object response; currently, this list only allows a single literal value `visibleFieldIds` (for views of type `grid` only) |

### Response format

`views`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"grid" \| "form" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block"`<br><br>Gantt views have a type of 'block' |
| <br>`personalForUserId` | `optional<``string``>`<br><br>Present if the view is personal for a user. |
| <br>`name` | `string` |
| <br>`visibleFieldIds` | `optional<``array of strings``>`<br><br>Available on `grid` views only: list of visible (non-hidden) field IDs, when requested with `include` query paremeter |

!!
