# Manage user - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/manage-user
- **Summary:** patch`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}` Manage enterprise account managed | <br>`state` | `optional<``"provisioned" \| "deactivated"``>`<br><br>provisioned<br> \| deactivated<br> Can only change the state of managed<br> users. | | <br>`email`...

Users

Manage user
===========

patch`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}`

Manage enterprise account [managed](https://airtable.com/developers/web/api/org-management-glossary#managed-user)
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

### Request body

|     |     |
| --- | --- |
| <br>`state` | `optional<``"provisioned" \| "deactivated"``>`<br><br>[provisioned](https://airtable.com/developers/web/api/org-management-glossary#provisioned-user)<br> \| [deactivated](https://airtable.com/developers/web/api/org-management-glossary#deactivated-user)<br> Can only change the state of [managed](https://airtable.com/developers/web/api/org-management-glossary#managed-user)<br> users. |
| <br>`email` | `optional<``string``>`<br><br>Enterprise account must own both the original and destination email domains.<br><br>_WARNING:_ If SSO is required for your enterprise account, you must follow these steps precisely to avoid locking the end user out of their account or creating duplicate accounts.<br><br>*   Use this API to update the user's email to a new value (this effectively logs the user out)<br>*   Use your SSO provider's (e.g. Okta's) admin panel to update the user's email to the new value<br>*   Tell the user to log into Airtable with the new email |
| <br>`firstName` | `optional<``string``>` |
| <br>`lastName` | `optional<``string``>` |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
