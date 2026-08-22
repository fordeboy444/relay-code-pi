# Create field - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-field
- **Summary:** post`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields` Creates a new column and returns the schema for the newly created column.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Fields

Create field
============

post`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields`

Creates a new column and returns the schema for the newly created column.

Refer to field types for supported [field types](https://airtable.com/developers/web/api/model/field-type)
, the write format for field options, and other specifics for certain field types. Supported field types have a write format shown.

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
| <br>`tableId` | `string` |

### Request body

[`Field model with name`](https://airtable.com/developers/web/api/field-model)

This identical to Field type and options, with an additional `name` and `description` property on all types

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `optional<`[`Field Type`](https://airtable.com/developers/web/api/model/field-type)<br>`>` |
| <br>`name` | `string` |
| <br>`description` | `optional<``string``>` |
| <br>`options` | `optional<`[`Field options`](https://airtable.com/developers/web/api/field-model)<br>`>` |

!!
