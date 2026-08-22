# Shares

patch`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}` Manages share state. | Scope | `workspacesAndBases.shares:manage` | | User role | Base editor with caveats, see `state` below | | <br>`shareId` | `string` | | <br>`state` | `"enabled" \| "disabled"`<br><br>When _enabling_ a......

## Pages in this folder

| Page | Local file | Summary |
| --- | --- | --- |
| Manage share - Airtable Web API | [manage-share-airtable-web-api.md](manage-share-airtable-web-api.md) | patch`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}` Manages share state. \| Scope \| `workspacesAndBases.shares:manage` \| \| User role \| Base editor with caveats, see `state` below \| \| <br>`shareId` \| `string` \| \| <br>`state` \| `"enabled" \\| "disabled"`<br><br>When _enabling_ a... |
| List shares - Airtable Web API | [list-shares-airtable-web-api.md](list-shares-airtable-web-api.md) | get`https://api.airtable.com/v0/meta/bases/{baseId}/shares` Lists basic information of base shares. \| Scope \| `workspacesAndBases.shares:manage` \| \| <br>`state` \| `"enabled" \\| "disabled"` \| \| <br>`createdByUserId` \| `string`<br><br>A user ID \| \| <br>`restrictedToEnterpriseMembers` \|... |
| Invite link - Airtable Web API | [invite-link-airtable-web-api.md](invite-link-airtable-web-api.md) | *   Get interface *   Base invite link Represents a single or multiuse invite link. \| <br>`invitedEmail` \| `string \\| null`<br><br>May be null for multiUse invites. \| \| <br>`referredByUserId` \| `string`<br><br>A user ID \| \| <br>`type` \| `"singleUse" \\| "multiUse"` \| \| <br>`permissionLevel` \|... |
| Delete share - Airtable Web API | [delete-share-airtable-web-api.md](delete-share-airtable-web-api.md) | delete`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}` |
