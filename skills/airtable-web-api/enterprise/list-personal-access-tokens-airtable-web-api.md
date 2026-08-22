# List personal access tokens - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-enterprise-personal-access-tokens
- **Summary:** List personal access tokens get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/personalAccessTokens` List personal access tokens for users administered by this enterprise account.

Enterprises

List personal access tokens

Beta

===================================

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/personalAccessTokens`

List personal access tokens for users administered by this enterprise account. Only supported for root (organization-level) enterprise accounts; a request for a descendant (org unit) enterprise account returns an error. For enterprise-scoped tokens, resourceAccess.enterpriseAccountId is returned only when the scoped enterprise is the requested root enterprise account or one of its descendants.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.user:read`](https://airtable.com/developers/web/api/scopes#enterprise-user-read) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`includeResources` | `optional<``boolean``>` |

### Response format

`personalAccessTokens`

`array of the below object`

`id`

`string`

`state`

`"active" | "deactivated"`

`createdByUserId`

`string`

A user ID

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`userId`

`string`

A user ID

`name`

`string`

`resourceAccess`

`any of the below objects`

|     |     |
| --- | --- |
| <br>`mode` | `"all"` |

|     |     |
| --- | --- |
| <br>`mode` | `"enterprise"` |
| <br>`enterpriseAccountId` | `optional<``string``>` |

|     |     |
| --- | --- |
| <br>`mode` | `"specificModelIds"` |
| <br>`resourceModelIds` | `optional<``array of strings``>` |

`scopes`

``array of [`Scopes`](https://airtable.com/developers/web/api/scopes) ``

!!
