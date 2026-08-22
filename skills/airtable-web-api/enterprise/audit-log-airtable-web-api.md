# Audit log - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/audit-log
- **Summary:** *   List audit log requests *   Create audit log request *   Get audit log request A single "audit log task".

Object

Audit log
=========

Endpoints that reference this object:

*   [List audit log requests](https://airtable.com/developers/web/api/list-audit-log-requests)
    
*   [Create audit log request](https://airtable.com/developers/web/api/create-audit-log-request)
    
*   [Get audit log request](https://airtable.com/developers/web/api/get-audit-log-request)
    

  
`any of the below objects`

A single "audit log task".

The keys common to all response types are `id`, `createdByUserId`, `createdTime`, `timePeriod`, `filter`

|     |     |
| --- | --- |
| <br>`state` | `"pending" \| "processing"`<br><br>The audit log request has not started processing or is being processed. Check again in a few minutes. |
| <br>`id` | `string` |
| <br>`createdByUserId` | `string`<br><br>A user ID |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`timePeriod` | `string`<br><br>Either YYYY-MM or YYYY-MM-DD, as specified in the [creation request](https://airtable.com/developers/web/api/create-audit-log-request)<br>. |
| <br>`filter` | `optional<``string``>`<br><br>Filter specified in the [creation request](https://airtable.com/developers/web/api/create-audit-log-request)<br>. |

|     |     |
| --- | --- |
| <br>`state` | `"error"`<br><br>There was an error while attempting to process the audit log request. Refer to the error message and try again. |
| <br>`errorMessage` | `string`<br><br>An error message explaining what went wrong while processing the request. |
| <br>`id` | `string` |
| <br>`createdByUserId` | `string`<br><br>A user ID |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`timePeriod` | `string`<br><br>Either YYYY-MM or YYYY-MM-DD, as specified in the [creation request](https://airtable.com/developers/web/api/create-audit-log-request)<br>. |
| <br>`filter` | `optional<``string``>`<br><br>Filter specified in the [creation request](https://airtable.com/developers/web/api/create-audit-log-request)<br>. |

`state`

`"done"`

The audit log request is done processing. Download the files in **data.logFileUrls**. The gzipped files contain newline-delimited JSON log entries.

`data` is uniquely provided with the `done` state

`data`

`object`

Results from the finished audit log processing.

|     |     |
| --- | --- |
| <br>`expirationTime` | `string`<br><br>The time after which the URLs in **data.logFileUrls** expire. |
| <br>`logFileUrls` | `array of strings`<br><br>URLs to audit log files. |

`id`

`string`

`createdByUserId`

`string`

A user ID

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`timePeriod`

`string`

Either YYYY-MM or YYYY-MM-DD, as specified in the [creation request](https://airtable.com/developers/web/api/create-audit-log-request)
.

`filter`

`optional<``string``>`

Filter specified in the [creation request](https://airtable.com/developers/web/api/create-audit-log-request)
.

!!
