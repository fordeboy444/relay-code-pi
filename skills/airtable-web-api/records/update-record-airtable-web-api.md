# Update record - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-record
- **Summary:** patchput`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}` Updates a single record.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Records

Update record
=============

patchput`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}`

Updates a single record. Table names and table ids can be used interchangeably. We recommend using table IDs so you don't need to modify your API request when your table name changes. A **PATCH** request will only update the fields you specify, leaving the rest as they were. A **PUT** request will perform a destructive update and clear all unspecified cell values.

Your request body should include a **fields** property whose value is an object containing your record's cell values, keyed by either field name or field id.

Automatic data conversion for update actions can be enabled via **typecast** parameter. The Airtable API will perform best-effort automatic data conversion from string values if the **typecast** parameter is passed in. Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

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
| <br>`recordId` | `string` |

### Request body

`returnFieldsByFieldId`

`optional<``boolean``>`

An optional boolean value that lets you return field objects keyed by the field id.

This defaults to `false`, which returns field objects where the key is the field name.

`typecast`

`optional<``boolean``>`

The Airtable API will perform best-effort automatic data conversion from string values if the typecast parameter is passed in. Automatic conversion is disabled by default to ensure data integrity, but it may be helpful for integrating with 3rd party data sources.

`fields`

`object`

|     |     |
| --- | --- |
| `key: string` | `any` |

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

`details`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`message` | `"partialSuccess"` |
| <br>`reasons` | `array of ("attachmentsFailedUploading" \| "attachmentUploadRateIsTooHigh")` |

!!
