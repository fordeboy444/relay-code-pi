# Create group - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-scim-group
- **Summary:** post`https://airtable.com/scim/v2/Groups` Create a new group from a SCIM Group This endpoint creates a group with no members.

SCIM

Create group
============

post`https://airtable.com/scim/v2/Groups`

Create a new group from a [SCIM Group](https://datatracker.ietf.org/doc/html/rfc7643#section-4.2)
 object.

This endpoint creates a group with no members. Use the [patch group](https://airtable.com/developers/web/api/patch-scim-group)
 or [put group](https://airtable.com/developers/web/api/put-scim-group)
 endpoints to populate the new group with members.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.scim.usersAndGroups:manage`](https://airtable.com/developers/web/api/scopes#enterprise-scim-users-and-groups-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use a service account's token when calling this route. |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Request body

|     |     |
| --- | --- |
| <br>`schemas` | `array of strings`<br><br>A list of schemas, including at least SCIM's core group schema URI. |
| <br>`displayName` | `string \| null`<br><br>Becomes the displayName of the group in Airtable. It must not be in use already. |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |
| <br>`schemas` | `array of strings`<br><br>A list of schemas, including at least SCIM's core group schema URI. |
| <br>`displayName` | `string \| null`<br><br>Becomes the displayName of the group in Airtable. It must not be in use already. |

!!
