# Get user - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-scim-user
- **Summary:** get`https://airtable.com/scim/v2/Users/{userId}`

SCIM

Get user
========

get`https://airtable.com/scim/v2/Users/{userId}`

Get a single user as a [SCIM User](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1)
 object.

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

[`SCIM user schema`](https://airtable.com/developers/web/api/model/scim-user-schema)

### Error responses

!!
