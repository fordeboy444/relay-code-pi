# List groups - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-scim-groups
- **Summary:** get`https://airtable.com/scim/v2/Groups` List groups as SCIM Groups objects.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

SCIM

List groups
===========

get`https://airtable.com/scim/v2/Groups`

List groups as [SCIM Groups](https://datatracker.ietf.org/doc/html/rfc7643#section-4.2)
 objects. [SCIM specification for list responses.](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2)

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.scim.usersAndGroups:manage`](https://airtable.com/developers/web/api/scopes#enterprise-scim-users-and-groups-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use a service account's token when calling this route. |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Query parameters

|     |     |
| --- | --- |
| <br>`count` | `optional<``number``>`<br><br>Number of groups to return, defaults to all groups. |
| <br>`filter` | `optional<``string``>`<br><br>The SCIM spec includes additional filter options, but we only support equality filtering by the Group display name, which is the SCIM displayName. |

### Response format

`schemas`

`array of strings`

`startIndex`

`number`

Position of the first result from the full list of groups, starting from 1, defaults to 1.

`itemsPerPage`

`number`

`totalResults`

`number`

`Resources`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |
| <br>`schemas` | `array of strings`<br><br>A list of schemas, including at least SCIM's core group schema URI. |
| <br>`displayName` | `string \| null`<br><br>Becomes the displayName of the group in Airtable. It must not be in use already. |

!!
