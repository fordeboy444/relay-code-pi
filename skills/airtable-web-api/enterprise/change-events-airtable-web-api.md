# Change events - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/change-events
- **Summary:** get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/changeEvents` Retrieve change events for enterprise bases.

Compliance

Change events
=============

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/changeEvents`

Retrieve change events for enterprise bases. These change events are available for 14 days from the date of the event.

This endpoint requires change events to be enabled for your enterprise account and toggled on in your enterprise admin panel. Please contact your account team or support to start this process. Events are generated only after you turn change events on in your admin panel.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.changeEvents:read`](https://airtable.com/developers/web/api/scopes#enterprise-change-events-read) |
| User role | Enterprise admin |
| Billing plans | Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`startTime` | `optional<``string``>`<br><br>Earliest change event to retrieve (inclusive), in ISO 8601 date time format. Optional. |
| <br>`endTime` | `optional<``string``>`<br><br>Latest change event to retrieve (exclusive), in ISO 8601 date time format. Optional. |
| <br>`pageSize` | `optional<``number``>`<br><br>The number of records per page. Maximum value of 100; defaults to 10. |
| <br>`offset` | `optional<``string``>`<br><br>If there may be more to retrieve, an **offset** is returned. Pass the **offset** to the next call to retrieve the next page. Do not pass **offset** when retrieving the first page. |

### Response format

`offset`

`optional<``string``>`

Pagination token. Pass this value as the **offset** query parameter to retrieve the next page.

`events`

`array of the below object`

Events are returned newest to oldest.

`id`

`string`

`type`

`string`

The type of event. **base_modified** is currently the only value.

`actor`

[`Change events actor`](https://airtable.com/developers/web/api/model/change-events-actor)

The actor that caused the change event. Note that this could be a user or an internal system.

`eventTimestamp`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`objectId`

`string`

ID of the affected object.

`objectType`

`"base"`

Type of the affected object. Currently only 'base'.

`timestamp`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`context`

`object`

Additional context about the change event.

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`applicationId` | `optional<``string``>`<br><br>Deprecated. Use `baseId` instead. |
| <br>`actionId` | `optional<``string``>` |

`origin`

`object`

Contains additional information about the request origin, including IP address.

|     |     |
| --- | --- |
| <br>`ipAddress` | `string` |

`payload`

`object`

Payload of base changes. This captures changes to base's schema, cell values, attachment URLs, and record comments.

Each **created\***, **destroyed\***, **changed\*** field is optional.

Refer to [field types](https://airtable.com/developers/web/api/field-model)
 for more information about cell value payloads.

|     |     |
| --- | --- |
| <br>`data` | [`Change events data`](https://airtable.com/developers/web/api/model/change-events-data) |
| <br>`version` | `"v0"` |

### Error responses

!!
