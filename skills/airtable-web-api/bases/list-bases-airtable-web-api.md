# List bases - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-bases
- **Summary:** get`https://api.airtable.com/v0/meta/bases` Returns the list of bases the token can access, 1000 bases at a time.

Bases

List bases
==========

get`https://api.airtable.com/v0/meta/bases`

Returns the list of bases the token can access, 1000 bases at a time. If there is another page to request, pass the offset as a URL query parameter. (e.g. `?offset=itr23sEjsdfEr3282/appSW9R5uCNmRmfl6`)

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`schema.bases:read`](https://airtable.com/developers/web/api/scopes#schema-bases-read) |
| User role | Base read-only |
| Billing plans | All plans |

### Query parameters

|     |     |
| --- | --- |
| <br>`offset` | `optional<``string``>` |

### Response format

`offset`

`optional<``string``>`

`bases`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`name` | `string` |
| <br>`permissionLevel` | `"none" \| "read" \| "comment" \| "edit" \| "create"` |

!!
