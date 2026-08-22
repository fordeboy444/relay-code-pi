# Create records - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-records
- **Summary:** post`https://api.airtable.com/v0/{baseId}/{tableIdOrName}` Creates multiple records.

Records

Create records
==============

post`https://api.airtable.com/v0/{baseId}/{tableIdOrName}`

Creates multiple records. Note that table names and table ids can be used interchangeably. We recommend using table IDs so you don't need to modify your API request when your table name changes.

Your request body should include an array of record objects. Each of these objects should have one key whose value is an inner object containing your record's cell values, keyed by either field name or field id.

Returns a unique array of the newly created record ids if the call succeeds.

You can also include a single record object at the top level.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`data.records:write`](https://airtable.com/developers/web/api/scopes#data-records-write) |
| User role | Base editor |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`tableIdOrName` | `string` |

### Request body

`fields`

`optional<``the below object``>`

Create **a single** record

|     |     |
| --- | --- |
| `key: string` | [`Cell value`](https://airtable.com/developers/web/api/field-model) |

`records`

`optional<``array of the below object``>`

Create **multiple** records

Pass in multiple records to create multiple in one request

`fields`

`object`

|     |     |
| --- | --- |
| `key: string` | [`Cell value`](https://airtable.com/developers/web/api/field-model) |

`returnFieldsByFieldId`

`optional<``boolean``>`

An optional boolean value that lets you return field objects keyed by the field id.

This defaults to `false`, which returns field objects where the key is the field name.

`typecast`

`optional<``boolean``>`

The Airtable API will perform best-effort automatic data conversion from string values if the typecast parameter is passed in. Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

### Response format

`any of the below objects`

`records`

`array of the below object`

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

`details`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`message` | `"partialSuccess"` |
| <br>`reasons` | `array of ("attachmentsFailedUploading" \| "attachmentUploadRateIsTooHigh")` |

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

`details`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`message` | `"partialSuccess"` |
| <br>`reasons` | `array of ("attachmentsFailedUploading" \| "attachmentUploadRateIsTooHigh")` |

!!
