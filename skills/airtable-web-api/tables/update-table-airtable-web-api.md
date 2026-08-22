# Update table - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-table
- **Summary:** patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableIdOrName}` Updates the name, description, and/or date dependency settings of a table. | <br>`dateDependencySettings` | `optional<``Date Dependency Settings`<br>`>`<br><br>The date dependency settings for the table (optional). | |...

Tables

Update table
============

patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableIdOrName}`

Updates the name, description, and/or date dependency settings of a table.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`schema.bases:write`](https://airtable.com/developers/web/api/scopes#schema-bases-write) |
| User role | Base creator |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`tableIdOrName` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`dateDependencySettings` | `optional<`[`Date Dependency Settings`](https://airtable.com/developers/web/api/model/date-dependency-settings)<br>`>`<br><br>The date dependency settings for the table (optional). |
| <br>`description` | `optional<``string``>`<br><br>The new description for the table (optional). If present, must be a string no longer than 20,000 characters. |
| <br>`name` | `optional<``string``>`<br><br>The new name for the table (optional). |

### Response format

`id`

`string`

`primaryFieldId`

`string`

The first column in the table and every view.

`dateDependencySettings`

`optional<`[`Date Dependency Settings`](https://airtable.com/developers/web/api/model/date-dependency-settings)
`>`

The date dependency settings for the table, if they exist.

`name`

`string`

`description`

`optional<``string``>`

`fields`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `optional<`[`Field Type`](https://airtable.com/developers/web/api/model/field-type)<br>`>` |
| <br>`name` | `string` |
| <br>`description` | `optional<``string``>` |
| <br>`options` | `optional<`[`Field options`](https://airtable.com/developers/web/api/field-model)<br>`>` |

`views`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `"grid" \| "form" \| "calendar" \| "gallery" \| "kanban" \| "timeline" \| "block"`<br><br>View type, `block` is Gantt View |
| <br>`name` | `string` |
| <br>`visibleFieldIds` | `optional<``array of strings``>`<br><br>Available on `grid` views only: list of visible (non-hidden) field IDs, when requested with `include` query paremeter |

!!
