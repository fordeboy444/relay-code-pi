# Invite link - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/invite-link
- **Summary:** *   Get interface *   Base invite link Represents a single or multiuse invite link. | <br>`invitedEmail` | `string \| null`<br><br>May be null for multiUse invites. | | <br>`referredByUserId` | `string`<br><br>A user ID | | <br>`type` | `"singleUse" \| "multiUse"` | | <br>`permissionLevel` |...

Object

Invite link
===========

Endpoints that reference this object:

*   [Get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
    
*   [Get interface](https://airtable.com/developers/web/api/get-interface)
    
*   [Get workspace collaborators](https://airtable.com/developers/web/api/get-workspace-collaborators)
    

Models that reference this object:

*   [Base invite link](https://airtable.com/developers/web/api/model/base-invite-link)
    

  
`object`

Represents a single or multiuse invite link.

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`invitedEmail` | `string \| null`<br><br>May be null for multiUse invites. |
| <br>`referredByUserId` | `string`<br><br>A user ID |
| <br>`type` | `"singleUse" \| "multiUse"` |
| <br>`permissionLevel` | `"none" \| "read" \| "comment" \| "edit" \| "create" \| "owner"` |
| <br>`restrictedToEmailDomains` | `array of strings`<br><br>If an empty list, no restrictions are present. Else, a receiver must have an email domain within the list to claim the invite. |

!!
