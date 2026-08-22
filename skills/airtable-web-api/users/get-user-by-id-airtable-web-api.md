# Get user by id - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-user-by-id
- **Summary:** get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}` Returns basic information relevant to both internal and external | Scope | `enterprise.user:read` | | <br>`include` | `optional<``array of ("collaborations" \| "aggregated" \| "descendants")``>`<br><br>If...

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Users

Get user by id
==============

get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}`

Returns basic information relevant to both [internal](https://airtable.com/developers/web/api/org-management-glossary#internal-user)
 and [external](https://airtable.com/developers/web/api/org-management-glossary#external-user)
 user.

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
| <br>`userId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`include` | `optional<``array of ("collaborations" \| "aggregated" \| "descendants")``>`<br><br>If specified, collaborations, aggregated, and/or descendants keys will be included in the response object. Otherwise, they will be left out. |

### Response format

`id`

`string`

A user ID

`state`

`"provisioned" | "deactivated"`

[provisioned](https://airtable.com/developers/web/api/org-management-glossary#provisioned-user)
 | [deactivated](https://airtable.com/developers/web/api/org-management-glossary#deactivated-user)

`isServiceAccount`

`boolean`

Whether the user is a [service account](https://support.airtable.com/docs/en/service-accounts-overview)
.

`isSsoRequired`

`boolean`

Whether the user is required to authenticate through their administrating enterprise's identity provider to login. False if user is not on an enterprise.

`isTwoFactorAuthEnabled`

`boolean`

Whether the user configured a second authentication method when logging in to Airtable through username/password auth.

`lastActivityTime`

`string | null`

Most recent time the user interacted with this enterprise account's data. null if never.

`collaborations`

`optional<`[`Collaborations`](https://airtable.com/developers/web/api/model/collaborations)
`>`

The user's direct collaborations on workspaces, bases and interfaces associated with this enterprise account. Excludes collaborations from groups.

`createdTime`

`optional<``string``>`

When user was created. This field is only returned when user is internal.

`descendants`

`optional<``object``>`

The user's values per descendant enterprise account. Only returned when the user is on a claimed domain and the enterprise account has the Enterprise Hub feature enabled.

The below object is keyed with a string

`licenseType`

`optional<``"editor" | "contributor" | "builder" | "viewer" | "viewerRestricted" | "portalEditor" | "none"``>`

The currently assigned license of a user. Only available for enterprise accounts with the new billing model.

`lastActivityTime`

`string | null`

`collaborations`

`optional<`[`Collaborations`](https://airtable.com/developers/web/api/model/collaborations)
`>`

`isAdmin`

`optional<``boolean``>`

`isManaged`

`optional<``boolean``>`

`groups`

`optional<``array of the below object``>`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |

`enterpriseUserType`

`optional<``"accessReadOnlyShareLinks" | "full"``>`

The type of user. Only returned if the enterprise has group mappings active and only if user is internal.

`invitedToAirtableByUserId`

`optional<``string | null``>`

This field is only returned when either the inviter or the user is internal. If there is no inviter, this field is null. If user is internal but inviter is external, this field is "usrEXTERNREDACTED".

`isAdmin`

`optional<``boolean``>`

Whether the user has directly assigned admin rights over this enterprise account. Only returned when the user is on a claimed domain. Note: if a user is a super admin but is not directly assigned admin rights over this enterprise account, this field is `false`.

`isManaged`

`optional<``boolean``>`

Whether the user is managed by this enterprise account. Only returned when the user is on a claimed domain.

`isSuperAdmin`

`optional<``boolean``>`

Whether the user has super admin rights over this enterprise account. Only returned when the user is on a claimed domain and the enterprise account has the Enterprise Hub feature enabled.

`licenseType`

`optional<``"editor" | "contributor" | "builder" | "viewer" | "viewerRestricted" | "portalEditor" | "none"``>`

The currently assigned license of a user. Only available for enterprise accounts with the new billing model.

`email`

`string`

`name`

`string`

`aggregated`

`optional<``object``>`

The user's aggregated values across this enterprise account and its descendants. Only returned when the user is on a claimed domain and the enterprise account has the Enterprise Hub feature enabled.

`lastActivityTime`

`string | null`

Most recent time the user interacted with this enterprise account and its descendants' data. null if never.

`collaborations`

`optional<`[`Collaborations`](https://airtable.com/developers/web/api/model/collaborations)
`>`

The user's direct collaborations on workspaces, bases and interfaces associated with this enterprise account and its descendants. Excludes collaborations from groups.

`isAdmin`

`optional<``boolean``>`

Whether the user has directly assigned admin rights over this enterprise account or its descendants.

`licenseType`

`optional<``"editor" | "contributor" | "builder" | "viewer" | "viewerRestricted" | "portalEditor" | "none"``>`

The currently assigned license of a user. This is the highest license type assigned to the user across the enterprise account and its descendants. Only available for enterprise accounts with the new billing model.

`groups`

`optional<``array of the below object``>`

This field specifies the groups associated with this enterprise account and its descendants that the user belongs to.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |

`groups`

`optional<``array of the below object``>`

This field specifies the groups associated with this enterprise account that the user belongs to. This field is only returned when the user is internal.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |

!!
