# Create workspace - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-workspace
- **Summary:** post`https://api.airtable.com/v0/meta/workspaces` Creates a new workspace with the provided name within the specified enterprise account and returns the workspace id.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Workspaces

Create workspace
================

post`https://api.airtable.com/v0/meta/workspaces`

Creates a new workspace with the provided name within the specified enterprise account and returns the workspace id. The requesting user must be an active effective admin of the enterprise account; the created workspace's owner will be the user who makes the request.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:manage`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-manage) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Request body

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string`<br><br>The enterprise account that the workspace will be created in. |
| <br>`name` | `string`<br><br>Name of the workspace to be created. |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string` |

!!
