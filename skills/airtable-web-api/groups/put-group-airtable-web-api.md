# Put group - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/put-scim-group
- **Summary:** put`https://airtable.com/scim/v2/Groups/{groupId}` Replace a Groups's attributes with all new values.

SCIM

Put group
=========

put`https://airtable.com/scim/v2/Groups/{groupId}`

Replace a Groups's attributes with all new values.

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

### Request body

`schemas`

`array of strings`

A list of schemas, including at least SCIM's core group schema URI.

`displayName`

`optional<``string | null``>`

Becomes the displayName of the group in Airtable. It must not be in use already.

`members`

`optional<``array of the below object``>`

List of members of the group.

|     |     |
| --- | --- |
| <br>`value` | `string`<br><br>Represents the user ID of a group member |

### Response format

See [SCIM Groups](https://datatracker.ietf.org/doc/html/rfc7643#section-4.2)

`id`

`string`

A user group ID

`schemas`

`array of strings`

A list of schemas, including at least SCIM's core group schema URI.

`displayName`

`string | null`

Becomes the displayName of the group in Airtable. It must not be in use already.

`members`

`optional<``array of the below object``>`

List of members of the group.

|     |     |
| --- | --- |
| <br>`value` | `string`<br><br>Represents the user ID of a group member |

!!
