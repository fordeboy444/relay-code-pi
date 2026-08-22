# Get record - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-record
- **Summary:** get`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}` Retrieve a single record.

Records

Get record
==========

get`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}`

Retrieve a single record. Any "empty" fields (e.g. **""**, **\[\]**, or **false**) in the record will not be returned.

**Note** If we can't locate the record on a given table, the request will fallback to a base wide search and will still return the record if the Record ID is valid and the record is located within the same base.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`data.records:read`](https://airtable.com/developers/web/api/scopes#data-records-read) |
| User role | Base read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`tableIdOrName` | `string` |
| <br>`recordId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`cellFormat` | `optional<``"json" \| "string"``>`<br><br>The format that should be used for cell values. Supported values are:<br><br>*   `json:` cells will be formatted as JSON, depending on the field type.<br>*   `string:` cells will be formatted as user-facing strings, regardless of the field type. The `timeZone` and `userLocale` parameters are required when using `string` as the `cellFormat`.<br><br>**Note:** You should not rely on the format of these strings, as it is subject to change.<br><br>The default is `json`. |
| <br>`returnFieldsByFieldId` | `optional<``boolean``>`<br><br>An optional boolean value that lets you return field objects where the key is the field id.<br><br>This defaults to `false`, which returns field objects where the key is the field name. |
| <br>`includeDateDependencyMetadata` | `optional<``boolean``>`<br><br>An optional boolean value that returns linked record cell values as objects instead of record IDs.<br><br>When `true`, all linked record fields return an array of objects with an `id` property. Linked record fields configured for date dependencies include an optional `dateDependencyMetadata` object with `dependencyType` and `buffer` fields (when date dependencies are configured in fixed mode). When `false` or unset, linked record fields return an array of record ID strings.<br><br>This defaults to `false`. |

### Response format

`id`

`string`

Record ID

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`fields`

`object`

Cell values are keyed by either field name or field ID (conditioned on `returnFieldsByFieldId`).

See [Cell Values](https://airtable.com/developers/web/api/field-model)
 for more information on cell value response types.

|     |     |
| --- | --- |
| `key: string` | [`Cell value`](https://airtable.com/developers/web/api/field-model) |

!!
