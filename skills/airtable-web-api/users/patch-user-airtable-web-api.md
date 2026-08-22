# Patch user - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/patch-scim-user
- **Summary:** patch`https://airtable.com/scim/v2/Users/{userId}` Perform a list of SCIM patch operations in sequence on an existing user.

SCIM

Patch user
==========

patch`https://airtable.com/scim/v2/Users/{userId}`

Perform a list of SCIM patch operations in sequence on an existing user.

See [SCIM specification](https://datatracker.ietf.org/doc/html/rfc7644#section-3.5.2)
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

### Request body

`schemas`

`array of strings`

A list of schemas, including at least SCIM's PatchOp schema.

`Operations`

`array of the below object`

A list of SCIM patch operations to perform.

See the [SCIM PATCH protocol](https://datatracker.ietf.org/doc/html/rfc7644#section-3.5.2)
 for details.

|     |     |
| --- | --- |
| <br>`path` | `string`<br><br>Path for a [SCIM user](https://airtable.com/developers/web/api/scim-overview#scim-user-objects)<br> field. |
| <br>`value` | `optional<``string \| any``>`<br><br>Replacment value. Not used when performing the `'remove'` operation. |
| <br>`op` | `"add" \| "replace" \| "remove"` |

### Response format

[`SCIM user schema`](https://airtable.com/developers/web/api/model/scim-user-schema)

!!
