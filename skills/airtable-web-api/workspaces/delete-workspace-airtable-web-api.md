# Delete workspace - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-workspace
- **Summary:** delete`https://api.airtable.com/v0/meta/workspaces/{workspaceId}` Deletes the specified workspace.

Workspaces

Delete workspace
================

delete`https://api.airtable.com/v0/meta/workspaces/{workspaceId}`

Deletes the specified workspace.

Deleted workspaces can be restored by workspace owners from the Trash UI, up to the workspace's billing plan retention period.

**WARNING:** If the API user is not currently a workspace owner (one example where this can happen is if the API user is an enterprise admin), the workspace will not show up in the user's Trash.

**WARNING:** Any bases in the deleted workspace will no longer be accessible, be sure to double check whether there are any actively used bases before proceeding with workspace deletion. If you want to retain access to these bases, you should transfer the bases to another workspace before deleting the workspace.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`workspacesAndBases:manage`](https://airtable.com/developers/web/api/scopes#workspaces-and-bases-manage) |
| User role | Enterprise admin<br><br>Admins of multiple enterprises should use an enterprise-scoped token or a service account's token when calling this route. |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`workspaceId` | `string` |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`deleted` | `true` |

### Error responses

!!
