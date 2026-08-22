# List packages - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-enterprise-packages
- **Summary:** get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/packages` List all packages for an enterprise account | Scope | `enterprise.account:read` | | <br>`shouldGetAllPackagesInGrid` | `optional<``boolean``>`<br><br>If true and the enterprise account is the root enterprise...

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Enterprises

List packages
=============

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/packages`

List all packages for an enterprise account

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.account:read`](https://airtable.com/developers/web/api/scopes#enterprise-account-read) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`shouldGetAllPackagesInGrid` | `optional<``boolean``>`<br><br>If true and the enterprise account is the root enterprise account, returns all packages across the entire enterprise grid. Defaults to false. |

### Response format

`packages`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `string` |
| <br>`createdByUserId` | `string` |
| <br>`createdTime` | `string` |
| <br>`description` | `string \| null` |
| <br>`enterpriseAccountId` | `string \| null` |
| <br>`installCount` | `number` |
| <br>`lastUpdatedByUserId` | `string` |
| <br>`lastUpdatedTime` | `string` |
| <br>`latestReleaseId` | `string \| null` |
| <br>`name` | `string` |
| <br>`sourceApplicationId` | `string` |
| <br>`tagline` | `string \| null` |

!!
