# Get user group - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-user-group
- **Summary:** get`https://api.airtable.com/v0/meta/groups/{groupId}` Returns basic information relevant to the user group. | Scope | `enterprise.groups:read` | | User role | Enterprise member | | <br>`include` | `optional<``array of "collaborations"``>`<br><br>If specified, collaborations key will be included in...

User groups

Get user group
==============

get`https://api.airtable.com/v0/meta/groups/{groupId}`

Returns basic information relevant to the user group.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.groups:read`](https://airtable.com/developers/web/api/scopes#enterprise-groups-read) |
| User role | Enterprise member |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`groupId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`include` | `optional<``array of "collaborations"``>`<br><br>If specified, collaborations key will be included in the response object. Otherwise it will be left out. You must be a group member or enterprise admin to view this information. |

### Response format

`id`

`string`

A user group ID

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`enterpriseAccountId`

`string`

The id of the enterprise account that the group is associated with.

`updatedTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`collaborations`

`optional<`[`Collaborations`](https://airtable.com/developers/web/api/model/collaborations)
`>`

The group's direct collaborations on workspaces, bases and interfaces.

`mappedUserLicenseType`

`optional<``"editor" | "contributor" | "builder" | "viewer" | "viewerRestricted" | "portalEditor" | "none"``>`

The license type mapped to this group, if any.

`name`

`string`

`members`

`array of the below object`

Group members' information.

|     |     |
| --- | --- |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`userId` | `string`<br><br>A user ID |
| <br>`email` | `string` |
| <br>`firstName` | `string \| null` |
| <br>`lastName` | `string \| null` |
| <br>`role` | `"manager" \| "member"` |

!!
