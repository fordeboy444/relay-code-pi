# Get base collaborators - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-base-collaborators
- **Summary:** Get base collaborators get`https://api.airtable.com/v0/meta/bases/{baseId}` Returns basic information on the base.

Bases

Get base collaborators
======================

get`https://api.airtable.com/v0/meta/bases/{baseId}`

Returns basic information on the base. Does not include deleted collaborators and only include [outstanding](https://airtable.com/developers/web/api/org-management-glossary#outstanding-invite)
 invites.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scopes | [`schema.bases:read`](https://airtable.com/developers/web/api/scopes#schema-bases-read)<br>, [`workspacesAndBases:read`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-read) |
| User role | Base read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`include` | `optional<``array of ("collaborators" \| "inviteLinks" \| "interfaces" \| "packages")``>`<br><br>If specified, collaborators, interfaces, inviteLinks key, and/or packages will be included in the response object. Otherwise, they will be left out. |

### Response format

`id`

`string`

Base ID, a unique identifier for a base.

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`permissionLevel`

`"none" | "read" | "comment" | "edit" | "create" | "owner"`

Collaborator permission level of the endpoint authenticator in the base. "none" for enterprise admin who is not a collaborator in the base but has permission to this endpoint.

`workspaceId`

`string`

ID of the workspace that contains this base.

`name`

`string`

`interfaces`

`optional<``object``>`

The below object is keyed with a string

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Interface ID (also known as `pageBundleId`) |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`firstPublishTime` | `string \| null` |
| <br>`name` | `string` |
| <br>`groupCollaborators` | `optional<```array of [`Group Collaborators`](https://airtable.com/developers/web/api/model/group-collaborator) ```>` |
| <br>`individualCollaborators` | `optional<```array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) ```>` |
| <br>`inviteLinks` | `optional<```array of [`Invite links`](https://airtable.com/developers/web/api/model/invite-link) ```>` |

`collaborators`

`optional<``object``>`

This property is deprecated

Please use **individualCollaborators** and **groupCollaborators** instead.

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |

`groupCollaborators`

`optional<``object``>`

Groups whose members are collaborating on this base.

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Group Collaborators`](https://airtable.com/developers/web/api/model/group-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Group Collaborators`](https://airtable.com/developers/web/api/model/group-collaborator) `` |

`individualCollaborators`

`optional<``object``>`

Individual users that are explicitly added as collaborators on the base. Does not include users that only have access via membership in a group that has been added as a collaborator.

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |

`packageInstallations`

`optional<``array of the below object``>`

Package installations present in this base. Include this field with `include=packages`.

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Unique identifier for the package installation. |
| <br>`installationType` | `"application" \| "component"`<br><br>The type of installation. See [App Library and Components](https://support.airtable.com/docs/using-app-library-and-components-in-airtable)<br> docs. |
| <br>`packageId` | `string`<br><br>The package ID associated with this installation. |
| <br>`packageReleaseId` | `string \| null`<br><br>The release ID tied to this installation. Null if the installation does not have a linked release. |

`sensitivityLabel`

`optional<``object``>`

The sensitivity label assigned to this base, if any.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`description` | `string` |
| <br>`name` | `string` |

`inviteLinks`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`baseInviteLinks` | ``array of [`Invite links`](https://airtable.com/developers/web/api/model/invite-link) `` |
| <br>`workspaceInviteLinks` | `optional<```array of [`Invite links`](https://airtable.com/developers/web/api/model/invite-link) ```>` |

!!
