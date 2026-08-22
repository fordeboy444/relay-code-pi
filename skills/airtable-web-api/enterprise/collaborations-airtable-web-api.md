# Collaborations - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/collaborations
- **Summary:** *   Get users by id or email *   Get user by id *   Get user group Direct collaborations on the enterprise account's workspaces, bases and interfaces.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Object

Collaborations
==============

Endpoints that reference this object:

*   [Get users by id or email](https://airtable.com/developers/web/api/get-users-by-id-or-email)
    
*   [Get user by id](https://airtable.com/developers/web/api/get-user-by-id)
    
*   [Get user group](https://airtable.com/developers/web/api/get-user-group)
    

  
`object`

Direct collaborations on the enterprise account's workspaces, bases and interfaces.

`baseCollaborations`

`array of the below object`

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`grantedByUserId` | `string`<br><br>A user ID |
| <br>`permissionLevel` | [`Application Permission Levels`](https://airtable.com/developers/web/api/model/application-permission-levels) |

`interfaceCollaborations`

`array of the below object`

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`grantedByUserId` | `string`<br><br>A user ID |
| <br>`interfaceId` | `string` |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"` |

`workspaceCollaborations`

`array of the below object`

|     |     |
| --- | --- |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`grantedByUserId` | `string`<br><br>A user ID |
| <br>`permissionLevel` | [`Workspace Permission Levels`](https://airtable.com/developers/web/api/model/workspace-permission-levels) |
| <br>`workspaceId` | `string` |

!!
