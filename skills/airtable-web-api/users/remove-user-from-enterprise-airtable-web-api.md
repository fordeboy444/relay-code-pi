# Remove user from enterprise - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/remove-user-from-enterprise
- **Summary:** Airtable is a low-code platform for building collaborative apps. Customize your workflow, collaborate, and achieve ambitious outcomes. Get started for free.

Enterprises

Remove user from enterprise
===========================

post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}/remove`

Unshare a user from all enterprise workspaces, bases, interfaces, and user groups. If applicable, the user will also have their admin access revoked.

Returns lists of unsharing and sharing actions performed as part of the user removal.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`enterprise.user:write`](https://airtable.com/developers/web/api/scopes#enterprise-user-write) |
| User role | Enterprise admin |
| Billing plans | Enterprise (pre-2023.08 legacy plan), Enterprise Scale |

### Path parameters

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `string` |
| <br>`userId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`removeFromDescendants` | `optional<``boolean``>`<br><br>If true, removes the user from descendant enterprise accounts as well. Only enterprise accounts with the Enterprise Hub feature enabled have descendant enterprise accounts. |
| <br>`replacementOwnerId` | `optional<``string``>`<br><br>If the user is the sole owner of any workspaces, you must specify a replacementOwnerId to be added as the new owner of such workspaces. If the user is not the sole owner of any workspaces, replacementOwnerId is optional and will be ignored if provided. |
| <br>`isDryRun` | `optional<``boolean``>` |

### Response format

`wasUserRemovedAsAdmin`

`boolean`

If removeFromDescendants is true, this field represents whether the user was removed as an admin of this enterprise account or its descendants.

`shared`

`object`

A list of JSON objects representing workspaces that replacementOwnerId was shared to.

`workspaces`

`array of the below object`

|     |     |
| --- | --- |
| <br>`enterpriseAccountId` | `optional<``string``>`<br><br>Only returned when removeFromDescendants is true |
| <br>`userId` | `optional<``string``>`<br><br>A user ID |
| <br>`deletedTime` | `string \| null` |
| <br>`permissionLevel` | `"none" \| "read" \| "comment" \| "edit" \| "create" \| "owner"` |
| <br>`workspaceId` | `string` |
| <br>`workspaceName` | `string` |

`unshared`

`object`

A list of JSON objects representing workspaces, bases, and interfaces the user was unshared from.

`bases`

`array of the below object`

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`userId` | `string`<br><br>A user ID |
| <br>`enterpriseAccountId` | `optional<``string``>`<br><br>Only returned when removeFromDescendants is true |
| <br>`baseName` | `string` |
| <br>`deletedTime` | `string \| null` |
| <br>`formerPermissionLevel` | `"none" \| "read" \| "comment" \| "edit" \| "create" \| "owner"` |

`interfaces`

`array of the below object`

|     |     |
| --- | --- |
| <br>`baseId` | `string`<br><br>Base ID, a unique identifier for a base. |
| <br>`userId` | `string`<br><br>A user ID |
| <br>`enterpriseAccountId` | `optional<``string``>`<br><br>Only returned when removeFromDescendants is true |
| <br>`deletedTime` | `string \| null` |
| <br>`formerPermissionLevel` | `"none" \| "read" \| "comment" \| "edit" \| "create" \| "owner"` |
| <br>`interfaceId` | `string` |
| <br>`interfaceName` | `string` |

`workspaces`

`array of the below object`

|     |     |
| --- | --- |
| <br>`userId` | `string`<br><br>A user ID |
| <br>`enterpriseAccountId` | `optional<``string``>`<br><br>Only returned when removeFromDescendants is true |
| <br>`deletedTime` | `string \| null` |
| <br>`formerPermissionLevel` | `"none" \| "read" \| "comment" \| "edit" \| "create" \| "owner"` |
| <br>`workspaceId` | `string` |
| <br>`workspaceName` | `string` |

### Error responses

!!
