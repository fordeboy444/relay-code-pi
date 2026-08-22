# Delete users by email - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-users-by-email
- **Summary:** Delete users by email

Users

Delete users by email
=====================

delete`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users`

Delete multiple users by email.

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

### Query parameters

|     |     |
| --- | --- |
| <br>`email` | `optional<``array of strings``>` |

### Response format

`deletedUsers`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |
| <br>`email` | `string` |

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`type` | `string` |
| <br>`email` | `string` |
| <br>`message` | `optional<``string``>` |

### Error responses

!!
