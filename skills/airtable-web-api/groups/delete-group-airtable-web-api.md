# Delete group - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-scim-group
- **Summary:** delete`https://airtable.com/scim/v2/Groups/{groupId}`

SCIM

Delete group
============

delete`https://airtable.com/scim/v2/Groups/{groupId}`

Delete a single [SCIM Group](https://datatracker.ietf.org/doc/html/rfc7643#section-4.2)
.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.scim.usersAndGroups:manage`](https://airtable.com/developers/web/api/scopes#enterprise-scim-users-and-groups-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use a service account's token when calling this route. |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`groupId` | `string` |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
