# Delete share - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-share
- **Summary:** delete`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}`

Shares

Delete share
============

delete`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}`

**WARNING:** Hard deleted share is NOT recoverable!!!

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases.shares:manage`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-shares-manage) |
| User role | Base editor |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`shareId` | `string` |

### Response format

This endpoint returns an empty response on success.

!!
