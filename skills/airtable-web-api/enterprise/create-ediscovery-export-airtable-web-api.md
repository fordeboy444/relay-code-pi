# Create eDiscovery export - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-ediscovery-export
- **Summary:** Create eDiscovery export post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/exports` Create an eDiscovery export request.

Compliance

Create eDiscovery export
========================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/exports`

Create an eDiscovery export request. The response includes an `id`, which is then used to [check the status of and download](https://airtable.com/developers/web/api/get-ediscovery-export)
 your export.

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

### Request body

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>Base ID to create eDiscovery export for. |
| <br>`includeCsvFormat` | `optional<``boolean``>`<br><br>If set, also export the base as CSVs (in a zipped file). Once the export is ready for download, the URL to the zip file will be available in the `csvZipDownloadUrl` attribute. |
| <br>`shouldSendEmailOnCompletion` | `optional<``boolean``>`<br><br>If set, an email will be sent to the user who initiated the export once the export is ready for download. |

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
