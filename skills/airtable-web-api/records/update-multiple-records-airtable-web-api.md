# Update multiple records - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-multiple-records
- **Summary:** Update multiple records patchput`https://api.airtable.com/v0/{baseId}/{tableIdOrName}` Updates records, or upserts them when `performUpsert` is set (see below).

Records

Update multiple records
=======================

patchput`https://api.airtable.com/v0/{baseId}/{tableIdOrName}`

Updates records, or upserts them when `performUpsert` is set (see below).

The URL path accepts both table names and table IDs. We recommend using table IDs so you don't need to modify your API request when your table name changes.

A `PATCH` request will only update the fields included in the request. Fields not included in the request will be unchanged. A `PUT` request will perform a destructive update and clear all unincluded cell values.

### 
Upserts

Set the `performUpsert` property in your request to enable upsert behavior. When upserting is enabled, the `id` property of records becomes optional. Records that do not include `id` will use the fields chosen by [`fieldsToMergeOn`](https://airtable.com/developers/web/api/update-multiple-records#request-performupsert-fieldstomergeon)
 as an external ID to match with existing records.

*   If zero matches are found, a new record will be created.
*   If one match is found, that record will be updated.
*   If multiple matches are found, the request will fail.

Records that include `id` will ignore `fieldsToMergeOn` and behave as normal updates. If no record with the given `id` exists, the request will fail and will not create a new record. The API response for upsert requests will additionally include `updatedRecords` and `createdRecords` arrays, indicating which records in the `records` array already existed and were updated, or did not exist and were created, respectively.

Airtable reserves the right to throttle upsert requests differently from the [standard rate limit throttling policy](https://airtable.com/developers/web/api/rate-limits)
.

### 
Typecasting

Set the `typecast` parameter to `true` to enable typecasting. When typecasting is enabled, Airtable will try to convert string values in a record's `fields` object to the appropriate cell value. This conversion is only performed on a best-effort basis. Typecasting is disabled by default to ensure your data's integrity, but it may be helpful when integrating with third-party services.

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

`performUpsert`

`optional<``the below object``>`

Enables upsert behavior when set.

**fieldsToMergeOn** will be used as an external ID to match records for updates. For records where no match is found, a new Airtable record will be created.

|     |     |
| --- | --- |
| <br>`fieldsToMergeOn` | `array of strings`<br><br>An array with at least one and at most three field names or IDs. IDs must uniquely identify a single record. These cannot be computed fields (formulas, lookups, rollups), and must be one of the following types: number, text, long text, single select, multiple select, date. |

`returnFieldsByFieldId`

`optional<``boolean``>`

If set to `true`, records in the API response will key the **fields** object by field ID.

Defaults to `false` when unset, which returns **fields** objects keyed by field name.

`typecast`

`optional<``boolean``>`

If set to `true`, Airtable will try to convert string values into the appropriate cell value. This conversion is only performed on a best-effort basis. To ensure your data's integrity, this should only be used when necessary.

Defaults to `false` when unset.

`records`

`array of the below object`

`id`

`optional<``string``>`

The ID of the record to update. Required when **performUpsert** is undefined.

`fields`

`object`

|     |     |
| --- | --- |
| `key: string` | [`Cell value`](https://airtable.com/developers/web/api/field-model) |

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

`createdRecords`

`array of strings`

Record IDs of records created by the upsert request.

`updatedRecords`

`array of strings`

Record IDs of existing records modified by the upsert request.

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

!!
