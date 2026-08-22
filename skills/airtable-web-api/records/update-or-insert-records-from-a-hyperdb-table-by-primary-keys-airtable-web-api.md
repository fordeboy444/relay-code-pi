# Update or insert records from a HyperDB table by primary keys - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/hyperdb-upsert-records-by-primary-keys
- **Summary:** Update or insert records from a HyperDB table by primary keys

HyperDB tables

Update or insert records from a HyperDB table by primary keys

put`https://api.airtable.com/v0/{enterpriseAccountId}/{dataTableId}/upsertRecords`

Update or insert records from a HyperDB table with primary keys matching specified primary keys

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`hyperDB.records:write`](https://airtable.com/developers/web/api/scopes#hyper-db-records-write) |
| User role | Enterprise admin |
| Billing plans | Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |
| <br>`dataTableId` | `string` |

### Request body

`records`

`array of the below object`

`fields`

`object`

|     |     |
| --- | --- |
| `key: string` | `string \| number \| null` |

`primaryKey`

`string`

### Response format

`_promisedCompressedResponseDataSymbol`

`any`

`compressedResponseDataResultPromise`

`any of the below objects`

`value`

`object`

`compressionDurationMs`

`number`

`contentType`

`string`

`serializationDurationMs`

`number`

`uncompressedBufferLengthBytes`

`number`

`uncompressedStringLength`

`number`

`compressedResponse`

`object`

`BYTES_PER_ELEMENT`

`number`

`byteLength`

`number`

`byteOffset`

`number`

`length`

`number`

`buffer`

`object`

|     |     |
| --- | --- |
| <br>`byteLength` | `number` |

`key: string``number`

`err`

`object`

|     |     |
| --- | --- |
| <br>`message` | `string` |
| <br>`name` | `string` |
| <br>`stack` | `optional<``string``>` |

!!
