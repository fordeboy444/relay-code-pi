---
name: airtable-web-api
description: "Airtable Web API reference. Use this skill whenever the user asks about the Airtable API — records, fields, tables, bases, workspaces, webhooks, comments, interfaces, shares, enterprise/SCIM user management, OAuth scopes, or the 5-requests-per-second rate limit. Trigger on phrases like 'Airtable API', 'airtable records', 'airtable webhook', 'airtable SCIM', or any Airtable integration/automation question."
---

# Airtable Web API Skill

You are a helpful assistant with deep knowledge of **Airtable Web API**.

## Topic folders

Reference material is organized into topic folders. Pick a topic, read its folder `_index.md`, then open the specific file you need.

| Folder | Index | Description | Pages |
| --- | --- | --- | --- |
| Auth | [auth/_index.md](auth/_index.md) | Scopes control what actions a token can perform. The API is limited to 5 requests per second per base. Reference for how to request OAuth access tokens for your integration. | 11 |
| Bases | [bases/_index.md](bases/_index.md) | Update collaborator base permission post`https://api.airtable.com/v0/meta/workspaces/{workspaceId}/moveBase` Move a base between two workspaces owned by the enterprise. \| User role \| Enterprise admin<br><br>Admins of multiple enterprises should use an enterprise-scoped token or a service account's... | 14 |
| Blocks | [blocks/_index.md](blocks/_index.md) | Manage block installation List block installations get`https://api.airtable.com/v0/meta/bases/{baseId}/blockInstallations` Lists basic information of base block installations. \| <br>`state` \| `"enabled" \\| "disabled"` \| \| <br>`createdByUserId` \| `string`<br><br>A user ID \| \| <br>`blockSlug` \|...... | 3 |
| Comments | [comments/_index.md](comments/_index.md) | *   List comments *   Create comment *   Update comment The user, user group, or app agent mentioned and returned from the comments API Users can be mentioned by including the userId or email surrounded by `@[]` in the text field of the request body Responses from listing, creating, or updating...... | 5 |
| Developers | [developers/_index.md](developers/_index.md) | Individual Collaborator | 1 |
| Enterprise | [enterprise/_index.md](enterprise/_index.md) | Revoke personal access tokens post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/personalAccessTokens/revoke` Revoke personal access tokens for users administered by this enterprise account.... | 28 |
| Fields | [fields/_index.md](fields/_index.md) | patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableId}/fields/{columnId}` Updates the name, description, and/or options of a field. Field types and cell values This documents all of the currently supported field types and their corresponding cell value formats, as well as their... | 6 |
| Groups | [groups/_index.md](groups/_index.md) | put`https://airtable.com/scim/v2/Groups/{groupId}` Replace a Groups's attributes with all new values. patch`https://airtable.com/scim/v2/Groups/{groupId}` SCIM patch an array of operations to a Group and applies them sequentially.... | 9 |
| Interfaces | [interfaces/_index.md](interfaces/_index.md) | Update interface collaborator get`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}` Returns general information about the interface. Delete interface invite delete`https://api.airtable.com/v0/meta/bases/{baseId}/interfaces/{pageBundleId}/invites/{inviteId}` Delete an... | 5 |
| Records | [records/_index.md](records/_index.md) | post`https://content.airtable.com/v0/{baseId}/{recordId}/{attachmentFieldIdOrName}/uploadAttachment` Upload an attachment up to 5 MB to an attachment cell via the file bytes directly. patchput`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}` Updates a single record. Update or insert... | 12 |
| Shares | [shares/_index.md](shares/_index.md) | patch`https://api.airtable.com/v0/meta/bases/{baseId}/shares/{shareId}` Manages share state. \| Scope \| `workspacesAndBases.shares:manage` \| \| User role \| Base editor with caveats, see `state` below \| \| <br>`shareId` \| `string` \| \| <br>`state` \| `"enabled" \\| "disabled"`<br><br>When _enabling_ a...... | 4 |
| Tables | [tables/_index.md](tables/_index.md) | patch`https://api.airtable.com/v0/meta/bases/{baseId}/tables/{tableIdOrName}` Updates the name, description, and/or date dependency settings of a table. \| <br>`dateDependencySettings` \| `optional<``Date Dependency Settings`<br>`>`<br><br>The date dependency settings for the table (optional). \| \|...... | 4 |
| Users | [users/_index.md](users/_index.md) | *   List users *   Create user *   Get user *   Patch user *   Put user SCIM User objects with optional user metadata. Retrieve, add, and modify users and groups. put`https://airtable.com/scim/v2/Users/{userId}` Replace a user's attributes with all new values. | 17 |
| Views | [views/_index.md](views/_index.md) | get`https://api.airtable.com/v0/meta/bases/{baseId}/views` get`https://api.airtable.com/v0/meta/bases/{baseId}/views/{viewId}` delete`https://api.airtable.com/v0/meta/bases/{baseId}/views/{viewId}` | 3 |
| Webhooks | [webhooks/_index.md](webhooks/_index.md) | Webhooks table created Webhooks table changed *   Change events data *   Webhooks payload The presence of each **created\***, **destroyed\***, **changed\*** field is determined by the specification filters and the actual change itself. Webhooks specification *   Create a webhook A single webhook... | 16 |
| Workspaces | [workspaces/_index.md](workspaces/_index.md) | Workspace Permission Levels Update workspace restrictions Update workspace collaborator | 11 |

## How to use this skill

1. Find the relevant topic folder in the table above.
2. Read that folder's `_index.md` to see the files it contains.
3. Open the specific file that matches the endpoint or concept you're asking about.
4. Cite the source URL when giving API details.
5. If the user asks about something not covered, say so.
