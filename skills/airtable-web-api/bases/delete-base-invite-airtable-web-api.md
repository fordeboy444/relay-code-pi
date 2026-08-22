# Delete base invite - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-base-invite
- **Summary:** delete`https://api.airtable.com/v0/meta/bases/{baseId}/invites/{inviteId}` Delete a base invite.

Invites

Delete base invite
==================

delete`https://api.airtable.com/v0/meta/bases/{baseId}/invites/{inviteId}`

Delete a base invite.

The invite must be [outstanding](https://airtable.com/developers/web/api/org-management-glossary#outstanding-invite)
.

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
| <br>`inviteId` | `string` |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
