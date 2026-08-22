# Create base - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-base
- **Summary:** post`https://api.airtable.com/v0/meta/bases` Creates a new base with the provided tables and returns the schema for the newly created base.

Bases

Create base
===========

post`https://api.airtable.com/v0/meta/bases`

Creates a new base with the provided tables and returns the schema for the newly created base.

Refer to field types for supported field types, the write format for field options, and other specifics for certain field types. Supported field types have a write format shown.

At least one table and field must be specified. The first field in the fields array will be used as the table's primary field and must be a supported primary field type. Fields must have case-insensitive unique names within the table.

A default grid view will be created with all fields visible for each provided table.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`schema.bases:write`](https://airtable.com/developers/web/api/scopes#schema-bases-write) |
| User role | Workspace creator |
| Billing plans | All plans |

### Request body

|     |     |
| --- | --- |
| <br>`name` | `string`<br><br>The name for the new base. |
| <br>`workspaceId` | `string`<br><br>The workspace where the base will be created. |
| <br>`tables` | ``array of [`Table Configs`](https://airtable.com/developers/web/api/model/table-config) ``<br><br>A list of JSON objects representing the tables that will be created along with the base. |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`tables` | ``array of [`Table models`](https://airtable.com/developers/web/api/model/table-model) `` |

!!
