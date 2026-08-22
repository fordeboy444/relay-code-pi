# Manage user membership - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/manage-user-membership
- **Summary:** Manage user membership post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/claim` Batch manage organizations enterprise account users.

Users

Manage user membership
======================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/claim`

Batch manage organizations enterprise account users. This endpoint allows you to change a user's membership status from being unmanaged to being an organization member, and vice versa. To use this endpoint, provide either the user's `id` or `email` in the request body. If both are supplied, the `email` will be ignored.

This endpoint can only be used if your enterprise is not domain capturing.

In the example request provided, the first two users are successfully processed while all of the remaining users are not processed and are returned in the `errors` array with the reason why they were not able to be processed.

Note that the domain of the user you are trying to claim must be verified in your organization's Admin Panel. If the domain is not verified, the user will not be claimed and will be returned in the `errors` array.

For more information on managing users and the different types of users in organizations, please see [our support article](https://support.airtable.com/docs/using-organizations)
.

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
| <br>`state` | `"managed" \| "unmanaged"`<br><br>[managed](https://airtable.com/developers/web/api/org-management-glossary#managed-user)<br> \| [unmanaged](https://airtable.com/developers/web/api/org-management-glossary#unmanaged-user) |
| <br>`email` | `optional<``string``>` |

### Response format

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>` |
| <br>`type` | `string` |
| <br>`message` | `string` |
| <br>`email` | `optional<``string``>` |

### Error responses

!!
