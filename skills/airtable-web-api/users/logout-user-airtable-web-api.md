# Logout user - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/logout-user
- **Summary:** post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}/logout` Only available for ELA and FLA internal enterprise account users and managed "claiming" enterprise users.

Users

Logout user
===========

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}/logout`

Logout the user.

Only available for ELA and FLA [internal](https://airtable.com/developers/web/api/org-management-glossary#internal-user)
 enterprise account users and [managed](https://airtable.com/developers/web/api/org-management-glossary#managed-user)
 "claiming" enterprise users.

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
