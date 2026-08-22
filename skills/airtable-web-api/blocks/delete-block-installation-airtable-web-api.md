# Delete block installation - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-block-installation
- **Summary:** Delete block installation

Extensions

Delete block installation
=========================

delete`https://api.airtable.com/v0/meta/bases/{baseId}/blockInstallations/{blockInstallationId}`

A deleted block installation is recoverable.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:write`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-write) |
| User role | Base creator |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`blockInstallationId` | `string` |

### Response format

This endpoint returns an empty response on success.

!!
