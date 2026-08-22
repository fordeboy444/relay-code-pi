# Get workspace collaborators - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-workspace-collaborators
- **Summary:** Get workspace collaborators get`https://api.airtable.com/v0/meta/workspaces/{workspaceId}` Returns basic information on the workspace.

Collaborators

Get workspace collaborators
===========================

get`https://api.airtable.com/v0/meta/workspaces/{workspaceId}`

Returns basic information on the workspace. Does not include deleted collaborators and only include [outstanding](https://airtable.com/developers/web/api/org-management-glossary#outstanding-invite)
 invites.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:read`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-read) |
| User role | Workspace read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`workspaceId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`include` | `optional<``array of ("collaborators" \| "inviteLinks")``>`<br><br>If specified, collaborators or inviteLinks key will be included in the response object. Otherwise they will be left out. |

### Response format

`id`

`string`

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`name`

`string`

`workspaceRestrictions`

`object`

[Sharing restrictions settings](https://support.airtable.com/docs/workspace-sharing-restrictions)
 enforced on the workspace.

|     |     |
| --- | --- |
| <br>`inviteCreationRestriction` | `"unrestricted" \| "onlyOwners"` |
| <br>`shareCreationRestriction` | `"unrestricted" \| "onlyOwners"` |

`collaborators`

`optional<``object``>`

This property is deprecated

Please use **individualCollaborators** and **groupCollaborators** instead.

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Base individual collaborators`](https://airtable.com/developers/web/api/model/base-individual-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |

`groupCollaborators`

`optional<``object``>`

Groups whose members are collaborating on this workspace.

**Note:** Group cannot be _**owner**_ of a workspace.

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Base group collaborators`](https://airtable.com/developers/web/api/model/base-group-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Group Collaborators`](https://airtable.com/developers/web/api/model/group-collaborator) `` |

`individualCollaborators`

`optional<``object``>`

Individual users that are explicitly added as collaborators on the workspace. Does not include users that only have access via membership in a group that has been added as a collaborator.

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Base individual collaborators`](https://airtable.com/developers/web/api/model/base-individual-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |

`baseIds`

`array of strings`

`inviteLinks`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`baseInviteLinks` | ``array of [`Base invite links`](https://airtable.com/developers/web/api/model/base-invite-link) `` |
| <br>`workspaceInviteLinks` | ``array of [`Invite links`](https://airtable.com/developers/web/api/model/invite-link) `` |

!!
