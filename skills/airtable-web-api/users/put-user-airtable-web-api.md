# Put user - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/put-scim-user
- **Summary:** put`https://airtable.com/scim/v2/Users/{userId}` Replace a user's attributes with all new values.

SCIM

Put user
========

put`https://airtable.com/scim/v2/Users/{userId}`

Replace a user's attributes with all new values.

The body parameters are the same as those for [creating a user](https://airtable.com/developers/web/api/create-scim-user)
, except that you can set `active` to true or false.

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

### Request body

[`SCIM user schema`](https://airtable.com/developers/web/api/model/scim-user-schema)

### Response format

[`SCIM user schema`](https://airtable.com/developers/web/api/model/scim-user-schema)

!!
