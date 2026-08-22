# Delete record - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-record
- **Summary:** delete`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}`

Records

Delete record
=============

delete`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}`

Deletes a single record

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

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Record ID |
| <br>`deleted` | `true` |

!!
