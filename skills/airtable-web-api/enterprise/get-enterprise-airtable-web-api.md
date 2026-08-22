# Get enterprise - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-enterprise
- **Summary:** get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}` Returns basic information relevant to the enterprise account. | Scope | `enterprise.account:read` | | <br>`include` | `optional<``array of ("aggregated" \| "descendants")``>`<br><br>If specified, aggregated and/or...

Enterprises

Get enterprise
==============

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}`

Returns basic information relevant to the enterprise account.

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
| <br>`include` | `optional<``array of ("aggregated" \| "descendants")``>`<br><br>If specified, aggregated and/or descendants keys will be included in the response object. Otherwise, it will be left out. |

### Response format

`id`

`string`

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`rootEnterpriseAccountId`

`string`

The ID of this account's root enterprise account. For accounts that are not part of an Enterprise Hub, this is the same as the account's own ID.

`descendants`

`optional<``object``>`

The enterprise account values per descendant enterprise account. Only returned when the enterprise account has the Enterprise Hub feature enabled.

The below object is keyed with a string

|     |     |
| --- | --- |
| <br>`groupIds` | `array of strings` |
| <br>`userIds` | `array of strings` |
| <br>`workspaceIds` | `array of strings` |

`descendantEnterpriseAccountIds`

`array of strings`

A list of descendant org unit's belonging to the enterprise account.

`emailDomains`

`array of the below object`

A list of email domains associated to the enterprise account.

|     |     |
| --- | --- |
| <br>`emailDomain` | `string` |
| <br>`isSsoRequired` | `boolean` |

`groupIds`

`array of strings`

A list of groups that belong to the enterprise account.

`userIds`

`array of strings`

A list of users including all the collaborators of all of the enterprise account's workspaces, bases, and interfaces.

`workspaceIds`

`array of strings`

A list of workspaces that are managed by the enterprise account.

`aggregated`

`optional<``object``>`

The aggregated values across the enterprise account and its descendants. Only returned when the enterprise account has the Enterprise Hub feature enabled.

|     |     |
| --- | --- |
| <br>`groupIds` | `array of strings`<br><br>A list of groups that belong to the enterprise account and its descendants. |
| <br>`userIds` | `array of strings`<br><br>A list of users including all the collaborators with the enterprise account and its descendants. |
| <br>`workspaceIds` | `array of strings`<br><br>A list of workspaces that are managed by the enterprise account and its descendants. |

!!
