# Update interface collaborator - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/update-interface-collaborator
- **Summary:** Update interface collaborator

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Collaborators

Update interface collaborator
=============================

patch`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/collaborators/{userOrGroupId}`

Use this to update permissions for an interface-only collaborator.

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
| <br>`userOrGroupId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`permissionLevel` | `"read" \| "comment" \| "edit"` |

### Response format

This endpoint returns an empty response on success.

!!
