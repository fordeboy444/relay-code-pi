# List users - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-scim-users
- **Summary:** get`https://airtable.com/scim/v2/Users`

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

SCIM

List users
==========

get`https://airtable.com/scim/v2/Users`

List users as [SCIM User](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1)
 objects.

See the SCIM specification for [list responses](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2)
 for more.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.scim.usersAndGroups:manage`](https://airtable.com/developers/web/api/scopes#enterprise-scim-users-and-groups-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use a service account's token when calling this route. |
| Billing plans | Business, Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Query parameters

|     |     |
| --- | --- |
| <br>`startIndex` | `optional<``number``>`<br><br>Position of the first result from the full list of users, starting from 1, defaults to 1. |
| <br>`count` | `optional<``number``>`<br><br>Number of users to return, defaults to all users. |
| <br>`filter` | `optional<``string``>`<br><br>The SCIM spec includes additional filter options, but we only support equality filtering by the Airtable user email, which is the SCIM user name. |

### Response format

|     |     |
| --- | --- |
| <br>`schemas` | `array of strings` |
| <br>`startIndex` | `number`<br><br>Position of the first result from the full list of groups, starting from 1, defaults to 1. |
| <br>`itemsPerPage` | `number` |
| <br>`totalResults` | `number` |
| <br>`Resources` | ``array of [`SCIM user schemas`](https://airtable.com/developers/web/api/model/scim-user-schema) `` |

!!
