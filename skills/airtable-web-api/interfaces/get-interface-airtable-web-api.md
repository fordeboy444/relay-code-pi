# Get interface - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/get-interface
- **Summary:** get`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}` Returns general information about the interface.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Collaborators

Get interface
=============

get`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}`

Returns general information about the interface. Does not include deleted collaborators and only includes [outstanding](https://airtable.com/developers/web/api/org-management-glossary#outstanding-invite)
 invites.

`pageBundleId` is the ID of the interface and can be found in the [`interfaces`](https://airtable.com/developers/web/api/get-base-collaborators#response-interfaces)
 object returned by the [get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
 endpoint.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:read`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-read) |
| User role | Base read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`pageBundleId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`include` | `optional<``array of ("collaborators" \| "inviteLinks")``>` |

### Response format

`id`

`string`

`baseId`

`string`

Base ID, a unique identifier for a base.

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`name`

`string`

`permissionLevel`

`"none" | "read" | "comment" | "edit" | "create" | "owner"`

`groupCollaborators`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Group Collaborators`](https://airtable.com/developers/web/api/model/group-collaborator) `` |
| <br>`interfaceCollaborators` | ``array of [`Group Collaborators`](https://airtable.com/developers/web/api/model/group-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Group Collaborators`](https://airtable.com/developers/web/api/model/group-collaborator) `` |

`individualCollaborators`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`baseCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |
| <br>`interfaceCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |
| <br>`workspaceCollaborators` | ``array of [`Individual Collaborators`](https://airtable.com/developers/web/api/model/individual-collaborator) `` |

`inviteLinks`

`optional<```array of [`Invite links`](https://airtable.com/developers/web/api/model/invite-link) ```>`

!!
