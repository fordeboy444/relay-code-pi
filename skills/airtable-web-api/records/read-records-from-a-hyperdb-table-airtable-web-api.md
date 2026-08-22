# Read records from a HyperDB table - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/hyperdb-table-read-records
- **Summary:** Read records from a HyperDB table

HyperDB tables

Read records from a HyperDB table
=================================

post`https://api.airtable.com/v0/{enterpriseAccountId}/{dataTableId}/getRecords`

Read records from a HyperDB table

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`hyperDB.records:read`](https://airtable.com/developers/web/api/scopes#hyper-db-records-read) |
| User role | Enterprise admin |
| Billing plans | Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |
| <br>`dataTableId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`cursor` | `optional<``string``>` |
| <br>`maxRecords` | `optional<``number``>` |
| <br>`fields` | `optional<``array of strings``>` |
| <br>`primaryKeys` | `optional<``array of strings``>` |

### Response format

`nextCursor`

`string | null`

`records`

`array of the below object`

`fields`

`object`

|     |     |
| --- | --- |
| `key: string` | `string \| number \| null` |

`primaryKey`

`string`

!!
