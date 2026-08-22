# List records - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-records
- **Summary:** get`https://api.airtable.com/v0/{baseId}/{tableIdOrName}` List records in a table.

Records

List records
============

get`https://api.airtable.com/v0/{baseId}/{tableIdOrName}`

List records in a table. Note that table names and table ids can be used interchangeably. We recommend using table IDs so you don't need to modify your API request when your table name changes.

The server returns one page of records at a time. Each page will contain **pageSize** records, which is 100 by default. If there are more records, the response will contain an **offset**. To fetch the next page of records, include **offset** in the next request's parameters. Pagination will stop when you've reached the end of your table. If the **maxRecords** parameter is passed, pagination will stop once you've reached this maximum.

Returned records do not include any fields with "empty" values, e.g. **""**, **\[\]**, or **false**.

You can filter, sort, and format the results with query parameters. Note that these parameters need to be URL encoded. You can use our [API URL encoder tool](https://codepen.io/airtable/pen/MeXqOg)
 to help with this. If you are using a helper library like [Airtable.js](https://github.com/Airtable/airtable.js)
, these parameters will be automatically encoded.

**Note** Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to `/v0/{baseId}/{tableIdOrName}/listRecords` while passing the parameters within the body of the request instead of the query parameters.

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

### Query parameters

`timeZone`

`optional<`[`Timezone`](https://airtable.com/developers/web/api/model/timezone)
`>`

The [time zone](https://support.airtable.com/docs/supported-timezones-for-set-timezone)
 that should be used to format dates when using `string` as the `cellFormat`. This parameter is required when using `string` as the `cellFormat`.

`userLocale`

`optional<``string``>`

The [user locale](https://support.airtable.com/docs/supported-locale-modifiers-for-set-locale)
 that should be used to format dates when using `string` as the `cellFormat`. This parameter is required when using `string` as the `cellFormat`.

`pageSize`

`optional<``number``>`

The number of records returned in each request. Must be less than or equal to 100. Default is 100.

`maxRecords`

`optional<``number``>`

The maximum total number of records that will be returned in your requests. If this value is larger than **pageSize** (which is 100 by default), you may have to load multiple pages to reach this total.

`offset`

`optional<``string``>`

To fetch the next page of records, include offset from the previous request in the next request's parameters.

`view`

`optional<``string``>`

The name or ID of a view in the table. If set, only the records in that view will be returned. The records will be sorted according to the order of the view unless the **sort** parameter is included, which overrides that order. Fields hidden in this view will be returned in the results. To only return a subset of fields, use the **fields** parameter.

`sort`

`optional<``array of the below object``>`

A list of sort objects that specifies how the records will be ordered. Each sort object must have a **field** key specifying the name of the field to sort on, and an optional **direction** key that is either **"asc"** or **"desc"**. The default direction is **"asc"**.

The **sort** parameter overrides the sorting of the view specified in the **view** parameter. If neither the **sort** nor the **view** parameter is included, the order of records is arbitrary.

|     |     |
| --- | --- |
| <br>`field` | `string` |
| <br>`direction` | `optional<``"asc" \| "desc"``>` |

`filterByFormula`

`optional<``string``>`

A [formula](https://support.airtable.com/docs/formula-field-reference)
 used to filter records. The formula will be evaluated for each record, and if the result is not **0**, **false**, **""**, **NaN**, **\[\]**, or **#Error!** the record will be included in the response. We recommend testing your formula in the Formula field UI before using it in your API request.

If combined with the **view** parameter, only records in that view which satisfy the formula will be returned.

The formula must be encoded first before passing it as a value. You can use [this tool](https://codepen.io/airtable/full/MeXqOg)
 to not only encode the formula but also create the entire url you need.

Formulas can use field names or field IDs inside the formula.

**Note** Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to `/v0/{baseId}/{tableIdOrName}/listRecords` while passing the parameters within the body of the request instead of the query parameters.

`cellFormat`

`optional<``"json" | "string"``>`

The format that should be used for cell values. Supported values are:

*   **json**: cells will be formatted as JSON, depending on the field type.
*   **string**: cells will be formatted as user-facing strings, regardless of the field type.

The **timeZone** and **userLocale** parameters are required when using **string** as the **cellFormat**.

**Note**: You should not rely on the format of these strings, as it is subject to change.

The default is **json**.

`fields`

`optional<``array of strings``>`

Only data for fields whose names or IDs are in this list will be included in the result. If you don't need every field, you can use this parameter to reduce the amount of data transferred.

**Note** Airtable's API only accepts request with a URL shorter than 16,000 characters. Encoded formulas may cause your requests to exceed this limit. To fix this issue you can instead make a POST request to `/v0/{baseId}/{tableIdOrName}/listRecords` while passing the parameters within the body of the request instead of the query parameters.

`returnFieldsByFieldId`

`optional<``boolean``>`

An optional boolean value that lets you return field objects where the key is the field id.

This defaults to **false**, which returns field objects where the key is the field name.

`includeDateDependencyMetadata`

`optional<``boolean``>`

An optional boolean value that returns linked record cell values as objects instead of record IDs.

When `true`, all linked record fields return an array of objects with an `id` property. Linked record fields configured for date dependencies include an optional `dateDependencyMetadata` object with `dependencyType` and `buffer` fields (when date dependencies are configured in fixed mode). When `false` or unset, linked record fields return an array of record ID strings.

This defaults to `false`.

`recordMetadata`

`optional<``array of "commentCount"``>`

An optional field that, if specified, includes **commentCount** on each record returned.

### Response format

List of records with fields and cell values

`offset`

`optional<``string``>`

If there are more records, the response will contain an offset. Pass this offset into the next request to fetch the next page of records.

`records`

`array of the below object`

A single record with field and cell values

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

`commentCount`

`optional<``number``>`

The number of comments (if there are any) on the record.

The `recordMetadata` query parameter must include `"commentCount"` in order to receive this.

### Error responses

!!
