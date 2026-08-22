# Get base schema - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-base-schema
- **Summary:** get`https://api.airtable.com/v0/meta/bases/{baseId}/tables`

Bases

Get base schema
===============

get`https://api.airtable.com/v0/meta/bases/{baseId}/tables`

Returns the schema of the tables in the specified base.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`schema.bases:read`](https://airtable.com/developers/web/api/scopes#schema-bases-read) |
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

|     |     |
| --- | --- |
| <br>`tables` | ``array of [`Table models`](https://airtable.com/developers/web/api/model/table-model) `` |

!!
