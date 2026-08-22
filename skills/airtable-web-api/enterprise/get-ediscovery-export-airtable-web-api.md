# Get eDiscovery export - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-ediscovery-export
- **Summary:** Get eDiscovery export get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/exports/{enterpriseTaskId}` Get the status and result of an eDiscovery export. | Scope | `enterprise.exports:manage` | | <br>`enterpriseTaskId` | `string` | Available once the export completes. |...

Compliance

Get eDiscovery export
=====================

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/exports/{enterpriseTaskId}`

Get the status and result of an eDiscovery export.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.exports:manage`](https://airtable.com/developers/web/api/scopes#enterprise-exports-manage) |
| User role | Enterprise admin |
| Billing plans | Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |
| <br>`enterpriseTaskId` | `string` |

### Response format

`id`

`string`

`data`

`optional<``object``>`

Available once the export completes.

|     |     |
| --- | --- |
| <br>`expirationTime` | `string`<br><br>The date and time at which the download URLs expire. |
| <br>`jsonDownloadUrl` | `string`<br><br>URL to download JSON export. |
| <br>`csvZipDownloadUrl` | `optional<``string``>`<br><br>URL to download CSV export (as a zipped file), if `includeCsvFormat` was set for this export. |

`error`

`optional<``string``>`

If state is `error`, this will contain an error message.

`state`

`"pending" | "processing" | "error" | "done"`

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`user`

`object`

The user that created the eDiscovery export.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |
| <br>`email` | `string` |
| <br>`name` | `string` |

`request`

`object`

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>Base ID of the export. |
| <br>`includeCsvFormat` | `boolean`<br><br>Whether the export includes a CSV export (as a zipped file). |
| <br>`shouldSendEmailOnCompletion` | `boolean`<br><br>Whether an email notification should be sent when the export is complete. |

### Error responses

!!
