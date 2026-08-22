# Add interface collaborator - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/add-interface-collaborator
- **Summary:** Add interface collaborator post`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/collaborators` Use this to add a collaborator to an interface.

Collaborators

Add interface collaborator
==========================

post`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/collaborators`

Use this to add a collaborator to an interface.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:write`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-write) |
| User role | Base collaborators subject to [sharing restrictions](https://support.airtable.com/docs/workspace-sharing-restrictions) |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`pageBundleId` | `string` |

### Request body

`collaborators`

`array of any of the below objects`

This endpoint accepts two types of collaborators: **individual user** and **group**. This route currently supports adding only one collaborator at a time.

`permissionLevel`

`"read" | "comment" | "edit"`

`group`

`optional<``any``>`

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |

`permissionLevel`

`"read" | "comment" | "edit"`

`user`

`optional<``any``>`

`group`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |

### Response format

This endpoint returns an empty response on success.

!!
