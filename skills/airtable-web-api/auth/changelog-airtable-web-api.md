# Changelog - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/changelog
- **Summary:** This page lists changes made to the Web API and its documentation.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Guide

Changelog
=========

This page lists changes made to the Web API and its documentation.

Also see our [deprecation guidelines](https://support.airtable.com/docs/airtable-api-deprecation-guidelines)
 for our policy on breaking changes.

Please refer to our [metadata](https://airtable.com/api/meta#changeLog)
 and [enterprise](https://airtable.com/api/enterprise#changeLog)
 documentation pages for changes made before 2022-11-15. Note that in order to view these pages you must already be an enterprise customer, as all documentation before this date was restricted to enterprise customers.

2026-06-24

*   **New API endpoint (Beta)**: [Update workspace AI allowlist](https://airtable.com/developers/web/api/update-workspace-ai-allowlist)
     to add or remove up to 10 workspaces from the enterprise AI allowlist.

2026-06-08

*   **New API endpoint (Beta)**: [Revoke enterprise personal access tokens](https://airtable.com/developers/web/api/revoke-enterprise-personal-access-tokens)
     to revoke up to 100 personal access tokens for users administered by a root enterprise account.

2026-05-20

*   **New API endpoint (Beta)**: [List enterprise personal access tokens](https://airtable.com/developers/web/api/list-enterprise-personal-access-tokens)
     to retrieve personal access tokens for users administered by an enterprise account, with optional resource inclusion.

2026-04-06

*   [Get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
     is now open to all plans.

2026-03-24

*   [Get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
     now accepts the `schema.bases:read` scope in addition to `workspacesAndBases:read`.

2025-11-10

*   **New API endpoint**: [List packages](https://airtable.com/developers/web/api/list-enterprise-packages)
     to retrieve all packages in an enterprise.
*   **New API endpoint**: [Create base from package](https://airtable.com/developers/web/api/create-base-from-package-enterprise)
     to create an enterprise managed app from a package.

2025-10-20

*   Updated [Get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
     to return package installation details when requested with `include=packages`.

2025-08-27

*   **New API endpoint**: [Create workspace](https://airtable.com/developers/web/api/create-workspace)
     - Now you can create new workspaces within an enterprise.

2025-08-05

We've made Enterprise Admin scopes generally available for OAuth integrations. OAuth integrations can now request [enterprise admin scopes](https://airtable.com/developers/web/api/scopes#data-records-manage)
 including `data.records:manage`, `workspaces.and.bases:manage`, and other enterprise administration scopes without requiring special approval.

2025-03-13

*   We've updated the OAuth PKCE implementation to more closely follow [RFC 7636 Section 4.4](https://www.rfc-editor.org/rfc/rfc7636#section-4.4)
    .
*   Specifically, `code_challenge` will no longer be set as a query parameter in the authorization redirect URI.

2024-11-25

We've improved the OAuth integration experience

*   Multiple OAuth token refresh requests now only invalidate access if the number of requests exceeds 10 per second

2024-11-11

We’ve released several new API capabilities to support the Enterprise Hub feature, including:

*   **New API endpoint**: [Create descendant enterprise](https://airtable.com/developers/web/api/create-descendant-enterprise)
     - Now you can create descendant enterprise accounts in an organization.
*   **New API endpoint**: [Move workspaces](https://airtable.com/developers/web/api/move-workspaces)
     - Now you can bulk move workspaces between enterprise accounts belonging to the same organization.
*   **New API endpoint**: [Move user groups](https://airtable.com/developers/web/api/move-user-groups)
     - Now you can bulk move user groups between enterprise accounts belonging to the same organization.
*   Added new `enterprise.account:write` scope that allows creating descendant enterprises.
*   Added new `enterprise.groups:manage` scope that allows moving user groups.
*   [Get enterprise](https://airtable.com/developers/web/api/get-enterprise)
     - Now supports retrieving info across the enterprise and its descendants by populating the new [`include`](https://airtable.com/developers/web/api/get-enterprise#query-include)
     query parameter with the value of `aggregated` or `descendants`. Enterprise endpoints [get user by id](https://airtable.com/developers/web/api/get-user-by-id)
     and [get users by id or email](https://airtable.com/developers/web/api/get-users-by-id-or-email)
     have also been updated with this new functionality.
*   [Remove user from enterprise](https://airtable.com/developers/web/api/remove-user-from-enterprise)
     - Now supports removing a user's access from the enterprise and its descendants by populating the new [`removeFromDescendants`](https://airtable.com/developers/web/api/remove-user-from-enterprise#request-removefromdescendants)
     request field.

2024-07-31

*   **New API endpoint**: [Upload attachment](https://airtable.com/developers/web/api/upload-attachment)
     - Now you can upload an attachment to an attachment cell via the file bytes directly.

2024-04-10

*   **New API endpoint**: [Grant admin access](https://airtable.com/developers/web/api/grant-admin-access)
     - Now you can bulk grant admin access to enterprise users.
*   **New API endpoint**: [Revoke admin access](https://airtable.com/developers/web/api/revoke-admin-access)
     - Now you can bulk revoke admin access from enterprise users.

2024-04-08

*   [Get user by id](https://airtable.com/developers/web/api/get-user-by-id)
     - Now returns a user's admin access as `isAdmin` and `isSuperAdmin`.
*   [Get users by id or email](https://airtable.com/developers/web/api/get-users-by-id-or-email)
     - Now returns a user's admin access as `isAdmin` and `isSuperAdmin`.

2024-02-01

*   Updated [Authentication](https://airtable.com/developers/web/api/authentication)
     to reflect that the [deprecation period for Airtable API keys](https://support.airtable.com/docs/airtable-api-key-deprecation-notice)
     has ended.

2023-11-27

*   Added [Billing plans](https://airtable.com/developers/web/api/billing-plans')
     reference guide
*   Updated the billing plan availability on endpoints to distinguish between the additional tiers:
    *   Newly added: "Business"
    *   Renamed: "Enterprise" -> "Enterprise (pre-2023.08 legacy plan)"
    *   Unchanged: "Enterprise Scale"

2023-11-14

*   Updated [Rate limits](https://airtable.com/developers/web/api/rate-limits)
     with details about the per-user rate limit for requests made using personal access tokens

### 
Update on API Key-based webhook deprecation

*   It was previously announced that webhooks created by API keys would start to have an [expiry time](https://airtable.com/developers/web/api/webhooks-overview#webhook-expiration)
     (like webhooks created by personal access tokens or OAuth access tokens) after February 1st 2024. In order to support a smoother migration experience, we have decided to change this: legacy webhooks created by user API keys will **not** ever expire.
*   As a reminder, to continue using webhooks after API keys are deprecated, the [new authentication methods](https://airtable.com/developers/web/api/authentication)
     must be used.

2023-10-03

*   [Update record](https://airtable.com/developers/web/api/update-record)
     - Now supports returning field IDs when specifying [`returnFieldsByFieldId`](https://airtable.com/developers/web/api/update-record/)
    

2023-09-13

*   [Get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
     - Now returns the id of the containing workspace as `workspaceId`.

2023-08-30

*   [Get base schema](https://airtable.com/developers/web/api/get-base-schema)
     - Now returns the executing formula text as a part of the schema for [formula column types](https://airtable.com/developers/web/api/field-model#formula)
    .
*   Added new `user.email:read` scope that allows reading the user's email address
*   Renamed "Get user ID & scopes" endpoint to ["Get user info"](https://airtable.com/developers/web/api/get-user-id-scopes)
     and updated documentation. It now returns the user's email if the token has `user.email:read` scope

2023-07-24

*   Updated [Errors](https://airtable.com/developers/web/api/errors)
     documentation with an example of a retriable 503 error.

2023-06-12

*   OAuth integrations should see a reduced number of invalidations due to refresh tokens. We've added a short grace period during which duplicate requests will result in a 409 response rather than an invalidation. We'll be monitoring this to see if it addresses issues or whether further work is needed.

2023-04-05

*   Added ability to use field id's when using `filterByFormula` in [list records](https://airtable.com/developers/web/api/list-records#query-filterbyformula)
     - Now you can use a formula to filter records and not be susceptible to field name changes!

2023-03-22

*   **New API endpoint**: [Manage user membership](https://airtable.com/developers/web/api/manage-user-membership)
     - Now you can bulk manage and unmanage enterprise users in "claim" mode organizations!

2023-03-15

*   Fixed bug related to `returnFieldsByFieldId` parameter for [list records](https://airtable.com/developers/web/api/list-records)
     and [get record](https://airtable.com/developers/web/api/get-record)
     endpoints. A value of false would previously return fields by their ID. Now, passing returnFieldsByFieldId=false will return fields by their name, not their ID.

2023-03-08

*   Updated [Errors](https://airtable.com/developers/web/api/errors)
     documentation with more examples of 403 errors.
*   Message for `INVALID_PERMISSIONS_OR_MODEL_NOT_FOUND` error updated to mention checking your user's permissions.
*   Updated [OAuth reference](https://airtable.com/developers/web/api/oauth-reference)
     with details about the expected success status code when requesting tokens.

2023-02-15

More information about the deprecation of user API keys, including intermediate deprecation milestones and a FAQ, can now be found [here](https://support.airtable.com/docs/airtable-api-key-deprecation-notice)
.

2023-02-08

*   Errata: User ID & Scopes only returns scopes for requests from OAuth access tokens, [now fixed](https://airtable.com/developers/web/api/get-user-id-scopes)
    
*   Updated documentation for [personal access tokens](https://airtable.com/developers/web/guides/personal-access-tokens)
     and [OAuth integrations](https://airtable.com/developers/web/guides/oauth-integrations)
     to note that tokens should be treated as opaque, variable-length strings

2023-01-18

We're excited to announce the graduation of our announced features from last November's beta launch!

### 
New authentication methods, now in general availability

*   For general background, please see those [prior notes](https://airtable.com/developers/web/api/changelog#anchor-2022-11-15)
    
*   Errata: User ID & Scopes is only available for the new authentication methods, [now fixed](https://airtable.com/developers/web/api/get-user-id-scopes)
    

### 
New: Sync CSV data endpoint

[Sync CSV data endpoint](https://airtable.com/developers/web/api/post-sync-api-endpoint)
 is a new sync integration that accepts CSV-formatted data through our Web API.

We hope this makes it easier to plug in data sources that Airtable does not yet natively support!

### 
API Key deprecation period start

With the graduation of personal access tokens and OAuth integrations, we're also starting the deprecation period for the previous method of user API keys.

We'll turn off API key access entirely after February 1, 2024. In the coming weeks, we'll share intermediate deprecation milestones, and more actionable details.

### 
API Key-based webhook deprecation

As a reminder, the webhooks now in general availability require one of the [new authentication methods](https://airtable.com/developers/web/api/authentication)
. They have [expiry times](https://airtable.com/developers/web/api/webhooks-overview#webhook-expiration)
 and require [refreshes](https://airtable.com/developers/web/api/refresh-a-webhook)
 to continue to function.

As part of the user API key deprecation, we'll also phase out of previous features that relied on those keys. For example, enterprise users had access to create webhooks using API keys.

*   We'll phase out the ability for user API keys to create new webhooks; we'll share deprecation milestones and more details in the coming weeks
*   ~After February 1, 2024, any existing API key-created webhooks will also expire. These may be refreshed using the new authentication methods~ \[Note: as of November 2023, webhooks created using API key will no longer expire in the future - see [here](https://airtable.com/developers/web/api/changelog#anchor-2023-11-14)\
     for more info\]

2022-12-12

*   [Get base schema](https://airtable.com/developers/web/api/get-base-schema)
     - Now supports retrieving a list of visible field IDs for grid views by populating the new [`include`](https://airtable.com/developers/web/api/get-base-schema#query-include)
     query parameter with the value of [`visibleFieldIds`](https://airtable.com/developers/web/api/model/table-model#views-visiblefieldids)
    . Enterprise endpoints [list views](https://airtable.com/developers/web/api/list-views)
     and [get view metadata](https://airtable.com/developers/web/api/get-view-metadata)
     have also been updated with this new functionality.

2022-11-15

We’re excited to announce a number of updates to our developer tools and APIs, including:

*   New API authentication methods (now available in beta)
*   New API capabilities
*   New API docs

### 
New authentication methods, now available in beta

We've released several new API authentication features in beta to provide even more security and control for developers. These include:

*   **Personal access tokens for individual use:** All users will be able to use personal access tokens for individual development.
*   **OAuth for Integrations:** Developers looking to build integrations will be able to use OAuth for a secure and seamless integration setup.
*   **Service accounts (Enterprise only):** Enterprise admins will be able to set up service accounts as non-user accounts for integrations and other uses.
*   **Granular scopes and resources:** All users will gain access to more granular control over scopes and resources, such as limiting a personal access token to read only access or limiting access to specific bases. Enterprise admins can also grant access to all workspaces and bases owned by their enterprise

For more information, please refer to the [authentication reference page](https://airtable.com/developers/web/api/authentication)
, as well as our detailed guides for [personal access tokens](https://airtable.com/developers/web/guides/personal-access-tokens)
 and [OAuth integrations](https://airtable.com/developers/web/guides/oauth-integrations)
.

> Note: After personal access tokens and OAuth are no longer in beta, a deprecation timeline for Airtable API keys will be announced. There will be a notice period of at least 12 months before the deprecation is enforced, per our [deprecation guidelines](https://support.airtable.com/docs/airtable-api-deprecation-guidelines)
> .

### 
New API capabilities

We’ve released a number of new API capabilities, including new endpoints and updates to existing endpoints:

#### 
New API endpoints

*   Metadata API - This is now available to all users via personal access tokens and OAuth. These endpoints allow you to read and edit the structure of a base.
    *   [List bases](https://airtable.com/developers/web/api/list-bases)
        
    *   [Get base schema](https://airtable.com/developers/web/api/get-base-schema)
        
    *   [Create base](https://airtable.com/developers/web/api/create-base)
        
    *   [Create table](https://airtable.com/developers/web/api/create-table)
        
    *   [Update table](https://airtable.com/developers/web/api/update-table)
        
    *   [Create field](https://airtable.com/developers/web/api/create-field)
        
    *   [Update field](https://airtable.com/developers/web/api/update-field)
        
*   Comments API - This is now available to all users via personal access tokens and OAuth. These endpoints allow you to read and edit record comments.
    *   [List comments](https://airtable.com/developers/web/api/list-comments)
        
    *   [Create comment](https://airtable.com/developers/web/api/create-comment)
        
    *   [Update comment](https://airtable.com/developers/web/api/update-comment)
        
    *   [Delete comment](https://airtable.com/developers/web/api/delete-comment)
        
*   Webhooks - These are now available to all users via personal access tokens and OAuth. For more information, see the [webhooks overview guide](https://airtable.com/developers/web/api/webhooks-overview)
    .
    *   [List webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
        
    *   [List webhooks](https://airtable.com/developers/web/api/list-webhooks)
        
    *   [Create a webhook](https://airtable.com/developers/web/api/create-a-webhook)
        
    *   [Delete a webhook](https://airtable.com/developers/web/api/delete-a-webhook)
        
    *   [Enable/disable webhook notifications](https://airtable.com/developers/web/api/enable-disable-webhook-notifications)
        
    *   [Refresh a webhook](https://airtable.com/developers/web/api/refresh-a-webhook)
        
*   [Get user ID & scopes](https://airtable.com/developers/web/api/get-user-id-scopes)
     - This can be used for identifying the user ID and scopes associated with the token used.
*   [Delete base](https://airtable.com/developers/web/api/delete-base)
     & [delete workspace](https://airtable.com/developers/web/api/delete-workspace)
     - These are available to enterprise users on request. Please contact your Customer Success Manager or [support](https://support.airtable.com/docs/contact-us)
    .

#### 
Updates to existing endpoints

*   [Update multiple records](https://airtable.com/developers/web/api/update-multiple-records)
     - This now supports upsert (update or insert) requests using the new [`performUpsert`](https://airtable.com/developers/web/api/update-multiple-records#request-performupsert)
     attribute.
*   [Get base schema](https://airtable.com/developers/web/api/get-base-schema)
     - This now includes field options for more field types. Refer to [field types and cell values](https://airtable.com/developers/web/api/field-model)
     for option formats.
*   [List records](https://airtable.com/developers/web/api/list-records)
     - This GET endpoint now has a 16k character limit on URL size. A new POST version of the endpoint has been added for use cases that exceed this limit.

### 
New API docs

We’ve updated our API docs to make them easier to use and navigate for developers. But rest assured, our existing per-base documentation remains as is!

!!
