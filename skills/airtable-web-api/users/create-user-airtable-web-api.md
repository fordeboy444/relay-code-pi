# Create user - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-scim-user
- **Summary:** post`https://airtable.com/scim/v2/Users` Create a new user from a SCIM User The response is the SCIM user object representing the newly created user.

SCIM

Create user
===========

post`https://airtable.com/scim/v2/Users`

Create a new user from a [SCIM User](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1)
 object.

The response is the SCIM user object representing the newly created user. On creation, the user will always be marked active, and the emails array will include a single entry that matches the username. See the [SCIM User schema](https://datatracker.ietf.org/doc/html/rfc7643#section-4.1)
 for details.

_WARNING_: As the user is provisioned without a password, the use of this endpoint is only intended on environments with SSO Active.

_WARNING_: If your enterprise is not capturing the user's email domain, it is possible this will fail with a conflict against an already created user that is not a member of your enterprise (and this not visible when [listing users](https://airtable.com/developers/web/api/list-scim-users)
). If this occurs, it is recommended you add the user to your enterprise (e.g. add them to a workspace and then claim them).

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.scim.usersAndGroups:manage`](https://airtable.com/developers/web/api/scopes#enterprise-scim-users-and-groups-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use a service account's token when calling this route. |
| Billing plans | Business, Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Request body

[`SCIM user schema`](https://airtable.com/developers/web/api/model/scim-user-schema)

### Response format

[`SCIM user schema`](https://airtable.com/developers/web/api/model/scim-user-schema)

!!
