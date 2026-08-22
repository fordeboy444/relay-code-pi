# Move workspaces - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/move-workspaces
- **Summary:** post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/moveWorkspaces` Batch move workspaces between two enterprise accounts belonging to the same organization.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Workspaces

Move workspaces
===============

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/moveWorkspaces`

Batch move workspaces between two enterprise accounts belonging to the same organization.

This endpoint can only be used if your enterprise account has the Enterprise Hub feature enabled.

If the target enterprise account has the invite settings restricted to org unit members, all non-org unit member collaborators will be removed when the workspaces are moved.

For more information about invites settings, please see [our support article](https://support.airtable.com/docs/settings-airtable-admin-panel#sharing-and-data-in-the-admin-panel)
.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:manage`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-manage) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`targetEnterpriseAccountId` | `string`<br><br>ID of the target enterprise account of the move. The target enterprise account must be in the same Hub-enabled organization as the source enterprise account, and you must have admin rights over the target enterprise account. |
| <br>`replacementOwnerId` | `optional<``string``>`<br><br>If the target enterprise account has the invites settings restricted to org unit members, all non-member collaborators will be removed when the workspace are moved. If any workspace only has non-member owners, you must specify a replacementOwnerId to be added as the new owner of such workspaces. If no workspace has only non-member owners, replaceOwnerId is optional and will be ignored if provided. |
| <br>`workspaceIds` | `array of strings`<br><br>ID of the workspaces to be moved. Up to 100 workspaceIds can be provided. |

### Response format

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`type` | `string` |
| <br>`message` | `string` |

`movedWorkspaces`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string` |

!!
