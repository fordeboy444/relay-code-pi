# Delete base - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-base
- **Summary:** delete`https://api.airtable.com/v0/meta/bases/{baseId}` Deletes the specified base.

Workspaces

Delete base
===========

delete`https://api.airtable.com/v0/meta/bases/{baseId}`

Deletes the specified base. Deleted bases can be restored by workspace owners from the Trash UI, up to the workspace's billing plan retention period.

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
| <br>`baseId` | `string` |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`deleted` | `true` |

### Error responses

!!
