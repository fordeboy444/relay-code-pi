# Sync CSV data - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/post-sync-api-endpoint
- **Summary:** post`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/sync/{apiEndpointSyncId}` Syncs raw CSV data into a Sync API table.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Records

Sync CSV data
=============

post`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/sync/{apiEndpointSyncId}`

Syncs raw CSV data into a Sync API table. You must first set up a sync from a base (instructions in this [support article](https://support.airtable.com/docs/airtable-sync-integration-api-endpoint)
). The **apiEndpointSyncId** in the path parameters can be found in the setup flow when creating a new Sync API table, or from the synced table settings.

The CSV data can contain up to 10k rows, 500 columns, and the HTTP request's size is limited to 2 MB.

Up to 10k rows will be synced per sync run. If you send two requests that each contain a CSV with 10k rows before a sync run occurs, then only 10k rows will be synced.

There is a rate limit of 20 requests, per 5 minutes, per base for this endpoint.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scopes | [`data.records:write`](https://airtable.com/developers/web/api/scopes#data-records-write)<br>, [`schema.bases:write`](https://airtable.com/developers/web/api/scopes#schema-bases-write) |
| User role | Base creator |
| Billing plans | Pro, Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`tableIdOrName` | `string` |
| <br>`apiEndpointSyncId` | `string` |

### Response format

|     |     |
| --- | --- |
| <br>`success` | `true` |

!!
