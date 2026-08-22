# Manage user batched - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/manage-user-batched
- **Summary:** patch`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users` Batch manage enterprise account users.

Users

Manage user batched
===================

patch`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users`

Batch manage enterprise account users. One of `id` or `email` must supplied in the body. If both are supplied, `id` will be used as the identifier in changing user email to the `email` specified in the request.

_WARNING:_ We recommend performing actions on up to 10 users at a time to avoid timeouts. Though we currently do not enforce a limit on the number of users you can manage at once, we are monitoring the performance of this endpoint and may enforce a limit in the future.

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
| <br>`state` | `optional<``"provisioned" \| "deactivated"``>`<br><br>[provisioned](https://airtable.com/developers/web/api/org-management-glossary#provisioned-user)<br> \| [deactivated](https://airtable.com/developers/web/api/org-management-glossary#deactivated-user)<br> Can only change the state of [managed](https://airtable.com/developers/web/api/org-management-glossary#managed-user)<br> users. |
| <br>`email` | `optional<``string``>`<br><br>Enterprise account must own both the original and destination email domains.<br><br>_WARNING:_ If SSO is required for your enterprise account, you must follow these steps precisely to avoid locking the end user out of their account or creating duplicate accounts.<br><br>*   Use this API to update the user's email to a new value (this effectively logs the user out)<br>*   Use your SSO provider's (e.g. Okta's) admin panel to update the user's email to the new value<br>*   Tell the user to log into Airtable with the new email |
| <br>`firstName` | `optional<``string``>` |
| <br>`lastName` | `optional<``string``>` |

### Response format

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `optional<``string``>`<br><br>A user ID |
| <br>`type` | `string` |
| <br>`message` | `string` |
| <br>`email` | `optional<``string``>` |

`updatedUsers`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |
| <br>`state` | `optional<``"provisioned" \| "deactivated"``>`<br><br>Only returned if it is provided in the request body. |
| <br>`email` | `optional<``string``>`<br><br>Only returned if it is provided in the request body. |
| <br>`firstName` | `optional<``string``>` |
| <br>`lastName` | `optional<``string``>` |

### Error responses

!!
