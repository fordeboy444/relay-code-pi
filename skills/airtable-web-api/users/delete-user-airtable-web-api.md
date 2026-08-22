# Delete user - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-scim-user
- **Summary:** delete`https://airtable.com/scim/v2/Users/{userId}` Delete a single SCIM user.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

SCIM

Delete user
===========

delete`https://airtable.com/scim/v2/Users/{userId}`

Delete a single SCIM user.

See [SCIM specification](https://datatracker.ietf.org/doc/html/rfc7644#section-3.6)
 for more.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.scim.usersAndGroups:manage`](https://airtable.com/developers/web/api/scopes#enterprise-scim-users-and-groups-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use a service account's token when calling this route. |
| Billing plans | Business, Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`userId` | `string` |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
