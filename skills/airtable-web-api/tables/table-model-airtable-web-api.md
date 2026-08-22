# Table model - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/table-model
- **Summary:** *   Create base *   Get base schema *   Create table *   Create base from package The first column in the table and every view.

Object

Table model
===========

Endpoints that reference this object:

*   [Create base](https://airtable.com/developers/web/api/create-base)
    
*   [Get base schema](https://airtable.com/developers/web/api/get-base-schema)
    
*   [Create table](https://airtable.com/developers/web/api/create-table)
    
*   [Create base from package](https://airtable.com/developers/web/api/create-base-from-package-enterprise)
    

  
`object`

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
