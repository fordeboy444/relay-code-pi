# Move user groups - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/move-user-groups
- **Summary:** Airtable is a low-code platform for building collaborative apps. Customize your workflow, collaborate, and achieve ambitious outcomes. Get started for free.

User groups

Move user groups
================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/moveGroups`

Batch move user groups between two enterprise accounts belonging to the same organization.

This endpoint can only be used if your enterprise account has the Enterprise Hub feature enabled.

If the target enterprise account has the invites settings restricted to org unit members, group members who are non-org unit members will be removed when the user groups are moved.

For more information about invites settings, please see [our support article](https://support.airtable.com/docs/settings-airtable-admin-panel#sharing-and-data-in-the-admin-panel)
.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.groups:manage`](https://airtable.com/developers/web/api/scopes#enterprise-groups-manage) |
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
| <br>`groupIds` | `array of strings`<br><br>ID of the groups to be moved. Up to 100 groupIds can be provided. |

### Response format

`errors`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |
| <br>`type` | `string` |
| <br>`message` | `string` |

`movedGroups`

`array of the below object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user group ID |
| <br>`removedUserIds` | `optional<``array of strings``>`<br><br>A list of group members removed from the group as part of the move. Only returned when the target enterprise account has the invites settings restricted to org unit members. |

!!
