# Patch group - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/patch-scim-group
- **Summary:** patch`https://airtable.com/scim/v2/Groups/{groupId}` SCIM patch an array of operations to a Group and applies them sequentially.

SCIM

Patch group
===========

patch`https://airtable.com/scim/v2/Groups/{groupId}`

SCIM patch an array of operations to a Group and applies them sequentially.

See [SCIM specification](https://datatracker.ietf.org/doc/html/rfc7644#section-3.5.2)
 for more.

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

A list of schemas, including at least SCIM's PatchOp schema URI.

`Operations`

`array of the below object`

A list of SCIM patch operations to perform.

See the [SCIM PATCH protocol](https://datatracker.ietf.org/doc/html/rfc7644#section-3.5.2)
 for details.

|     |     |
| --- | --- |
| <br>`path` | `string`<br><br>Path for a [SCIM group](https://airtable.com/api/enterprise#scimGroupFieldTypes)<br> field. |
| <br>`value` | `optional<``string \| any``>`<br><br>Replacment value. Not used when performing the `'remove'` operation. |
| <br>`op` | `"add" \| "replace" \| "remove"` |

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
