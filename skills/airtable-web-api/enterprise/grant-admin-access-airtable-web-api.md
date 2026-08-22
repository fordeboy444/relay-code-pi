# Grant admin access - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/grant-admin-access
- **Summary:** post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/grantAdminAccess` Grant admin access to users.

Users

Grant admin access
==================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/grantAdminAccess`

Grant admin access to users. To use this endpoint, provide either the user's `id` or `email` in the request body. If both are supplied, the `email` will be ignored.

In the example request provided, the first two users are successfully processed while all of the remaining users are not processed and are returned in the `errors` array with the reason why they were not able to be processed.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.user:write`](https://airtable.com/developers/web/api/scopes#enterprise-user-write) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Request body

`users`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>A user ID |
| <br>`email` | `optional<``string``>` |

### Response format

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>A user ID |
| <br>`type` | `string` |
| <br>`email` | `optional<``string``>` |
| <br>`message` | `optional<``string``>` |

!!
