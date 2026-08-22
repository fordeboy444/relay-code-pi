# Create table - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-table
- **Summary:** post`https://api.airtable.com/v0/meta/bases/{baseId}/tables` Creates a new table and returns the schema for the newly created table.

Tables

Create table
============

post`https://api.airtable.com/v0/meta/bases/{baseId}/tables`

Creates a new table and returns the schema for the newly created table.

Refer to [field types](https://airtable.com/developers/web/api/model/field-type)
 for supported field types, the write format for field options, and other specifics for certain field types. Supported field types have a write format shown.

At least one field must be specified. The first field in the fields array will be used as the table's primary field and must be a supported primary field type. Fields must have case-insensitive unique names within the table.

A default grid view will be created with all fields visible.

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

### Request body

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name for the table. |
| <br>`description` | `optional<``string``>`<br><br>The description for the table (optional). If present, must be a non-empty string no longer than 20,000 characters. |
| <br>`fields` | ``array of [`Field Configs`](https://airtable.com/developers/web/api/field-model) ``<br><br>A list of JSON objects representing the fields in the table. Refer to [field types](https://airtable.com/developers/web/api/model/field-type)<br> for supported field types, the write format for field options, and other specifics for certain field types. |

### Response format

[`Table model`](https://airtable.com/developers/web/api/model/table-model)

!!
