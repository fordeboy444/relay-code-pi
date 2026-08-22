# Delete user by id - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-user-by-id
- **Summary:** delete`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}`

Users

Delete user by id
=================

delete`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}`

Delete ELA enterprise account [internal](https://airtable.com/developers/web/api/org-management-glossary#internal-users)
 users and "claiming" enterprise account [managed](https://airtable.com/developers/web/api/org-management-glossary#managed-user)
 users.

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
| <br>`userId` | `string` |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
