# Create descendant enterprise - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-descendant-enterprise
- **Summary:** Create descendant enterprise post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/descendants` Creates a descendant enterprise account of the enterprise account.

Enterprises

Create descendant enterprise
============================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/descendants`

Creates a descendant enterprise account of the enterprise account. Descendant enterprise accounts can only be created for root enterprise accounts with the Enterprise Hub feature enabled.

Note that descendant enterprise accounts are also called organizational units (org units).

For more information on org units in organizations with Enterprise Hub, please see [our support article](https://support.airtable.com/docs/enterprise-hub-in-airtable#understanding-and-using-organizational-units)
.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.account:write`](https://airtable.com/developers/web/api/scopes#enterprise-account-write) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`name` | `string` |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string` |

!!
