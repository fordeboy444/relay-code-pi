# Delete interface collaborator - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-interface-collaborator
- **Summary:** Delete interface collaborator delete`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/collaborators/{userOrGroupId}` Delete an interface collaborator.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Collaborators

Delete interface collaborator
=============================

delete`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/collaborators/{userOrGroupId}`

Delete an interface collaborator. Requires base collaborator access to remove others, but can be used to remove yourself even with interface-only collaborator access.

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

### Response format

This endpoint returns an empty response on success.

!!
