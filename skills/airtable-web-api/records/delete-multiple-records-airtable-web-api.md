# Delete multiple records - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-multiple-records
- **Summary:** Delete multiple records

Records

Delete multiple records
=======================

delete`https://api.airtable.com/v0/{baseId}/{tableIdOrName}`

Deletes records given an array of record ids

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

### Query parameters

|     |     |
| --- | --- |
| <br>`records` | `optional<``array of strings``>`<br><br>The recordIds of each record to be deleted. |

### Response format

`records`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Record ID |
| <br>`deleted` | `true` |

!!
