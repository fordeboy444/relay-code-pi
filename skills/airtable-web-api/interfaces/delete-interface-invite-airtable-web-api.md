# Delete interface invite - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-interface-invite
- **Summary:** Delete interface invite delete`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/invites/{inviteId}` Delete an interface invite.

Invites

Delete interface invite
=======================

delete`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/invites/{inviteId}`

Delete an interface invite.

The invite must be [outstanding](https://airtable.com/developers/web/api/org-management-glossary#outstanding-invite)
.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:write`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-write) |
| User role | Base creator |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`pageBundleId` | `string` |
| <br>`inviteId` | `string` |

### Response format

This endpoint returns an empty response on success.

### Error responses

!!
