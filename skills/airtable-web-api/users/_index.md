# Users

*   List users *   Create user *   Get user *   Patch user *   Put user SCIM User objects with optional user metadata. Retrieve, add, and modify users and groups. put`https://airtable.com/scim/v2/Users/{userId}` Replace a user's attributes with all new values.

## Pages in this folder

| Page | Local file | Summary |
| --- | --- | --- |
| SCIM user schema - Airtable Web API | [scim-user-schema-airtable-web-api.md](scim-user-schema-airtable-web-api.md) | *   List users *   Create user *   Get user *   Patch user *   Put user SCIM User objects with optional user metadata. |
| SCIM - Airtable Web API | [scim-airtable-web-api.md](scim-airtable-web-api.md) | Retrieve, add, and modify users and groups. |
| Put user - Airtable Web API | [put-user-airtable-web-api.md](put-user-airtable-web-api.md) | put`https://airtable.com/scim/v2/Users/{userId}` Replace a user's attributes with all new values. |
| Patch user - Airtable Web API | [patch-user-airtable-web-api.md](patch-user-airtable-web-api.md) | patch`https://airtable.com/scim/v2/Users/{userId}` Perform a list of SCIM patch operations in sequence on an existing user. |
| Manage user membership - Airtable Web API | [manage-user-membership-airtable-web-api.md](manage-user-membership-airtable-web-api.md) | Manage user membership post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/claim` Batch manage organizations enterprise account users. |
| Manage user batched - Airtable Web API | [manage-user-batched-airtable-web-api.md](manage-user-batched-airtable-web-api.md) | patch`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users` Batch manage enterprise account users. |
| Manage user - Airtable Web API | [manage-user-airtable-web-api.md](manage-user-airtable-web-api.md) | patch`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}` Manage enterprise account managed \| <br>`state` \| `optional<``"provisioned" \\| "deactivated"``>`<br><br>provisioned<br> \\| deactivated<br> Can only change the state of managed<br> users. \| \| <br>`email`... |
| Logout user - Airtable Web API | [logout-user-airtable-web-api.md](logout-user-airtable-web-api.md) | post`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}/logout` Only available for ELA and FLA internal enterprise account users and managed "claiming" enterprise users. |
| List users - Airtable Web API | [list-users-airtable-web-api.md](list-users-airtable-web-api.md) | get`https://airtable.com/scim/v2/Users` |
| Get users by id or email - Airtable Web API | [get-users-by-id-or-email-airtable-web-api.md](get-users-by-id-or-email-airtable-web-api.md) | Get users by id or email get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users` Returns basic information relevant to both internal and external \| Scope \| `enterprise.user:read` \| \| <br>`id` \| `optional<``array of strings``>`<br><br>User Ids to search by. |
| Get user by id - Airtable Web API | [get-user-by-id-airtable-web-api.md](get-user-by-id-airtable-web-api.md) | get`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}` Returns basic information relevant to both internal and external \| Scope \| `enterprise.user:read` \| \| <br>`include` \| `optional<``array of ("collaborations" \\| "aggregated" \\| "descendants")``>`<br><br>If... |
| Get user - Airtable Web API | [get-user-airtable-web-api.md](get-user-airtable-web-api.md) | get`https://airtable.com/scim/v2/Users/{userId}` |
| Delete users by email - Airtable Web API | [delete-users-by-email-airtable-web-api.md](delete-users-by-email-airtable-web-api.md) | Delete users by email |
| Delete user by id - Airtable Web API | [delete-user-by-id-airtable-web-api.md](delete-user-by-id-airtable-web-api.md) | delete`https://api.airtable.com/v0/meta/enterpriseAccounts/{enterpriseAccountId}/users/{userId}` |
| Delete user - Airtable Web API | [delete-user-airtable-web-api.md](delete-user-airtable-web-api.md) | delete`https://airtable.com/scim/v2/Users/{userId}` Delete a single SCIM user. |
| Create user - Airtable Web API | [create-user-airtable-web-api.md](create-user-airtable-web-api.md) | post`https://airtable.com/scim/v2/Users` Create a new user from a SCIM User The response is the SCIM user object representing the newly created user. |
| Airtable Web API | [source](https://airtable.com/developers/web/api/user-listBases) |  |
