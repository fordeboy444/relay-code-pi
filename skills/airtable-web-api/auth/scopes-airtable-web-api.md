# Scopes - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/scopes
- **Summary:** Scopes control what actions a token can perform.

Guide

Scopes
======

Scopes control what actions a token can perform.

[Personal access tokens](https://airtable.com/developers/web/guides/personal-access-tokens)
 and [OAuth access tokens](https://airtable.com/developers/web/guides/oauth-integrations)
 can only access API endpoints covered by the scopes granted to them. A full reference of available scopes is below.

On top of requesting the correct scope, the user and token must also have the required resources and permissions to perform the action.

Example 1: a personal access token with the scope `data.records:read` and a base added to it would be able to use the "Read records" endpoint on that base, but would not be allowed to use the "Write records" endpoint for that base. Similarly, it would not be able to use the "Read records" endpoint to access other bases that have not been added to the token.

Example 2: a personal access token with the scope `schema.bases:read` and multiple bases added to it would only be able to create fields in bases where the user has Creator permissions (required to customize fields).

For more information on how tokens work, refer to the [Authentication](https://airtable.com/developers/web/api/authentication)
 reference.

Basic scopes
------------

The following scopes are available to all users:

`data.records:read`

See the data in records

*   [List records](https://airtable.com/developers/web/api/list-records)
    
*   [Get record](https://airtable.com/developers/web/api/get-record)
    

`data.records:write`

Create, edit, and delete records

*   [Delete multiple records](https://airtable.com/developers/web/api/delete-multiple-records)
    
*   [Update multiple records](https://airtable.com/developers/web/api/update-multiple-records)
    
*   [Create records](https://airtable.com/developers/web/api/create-records)
    
*   [Sync CSV data](https://airtable.com/developers/web/api/post-sync-api-endpoint)
    
*   [Delete record](https://airtable.com/developers/web/api/delete-record)
    
*   [Update record](https://airtable.com/developers/web/api/update-record)
    

`data.recordComments:read`

See comments in records

*   [List comments](https://airtable.com/developers/web/api/list-comments)
    

`data.recordComments:write`

Create, edit, and delete record comments

*   [Create comment](https://airtable.com/developers/web/api/create-comment)
    
*   [Delete comment](https://airtable.com/developers/web/api/delete-comment)
    
*   [Update comment](https://airtable.com/developers/web/api/update-comment)
    

`schema.bases:read`

See the structure of a base, like table names or field types

*   [List bases](https://airtable.com/developers/web/api/list-bases)
    
*   [Get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
    
*   [Get base schema](https://airtable.com/developers/web/api/get-base-schema)
    

`schema.bases:write`

Edit the structure of a base, like adding new fields or tables

*   [Create base](https://airtable.com/developers/web/api/create-base)
    
*   [Create table](https://airtable.com/developers/web/api/create-table)
    
*   [Update table](https://airtable.com/developers/web/api/update-table)
    
*   [Create field](https://airtable.com/developers/web/api/create-field)
    
*   [Update field](https://airtable.com/developers/web/api/update-field)
    
*   [Sync CSV data](https://airtable.com/developers/web/api/post-sync-api-endpoint)
    

`workspacesAndBases:read`

View metadata about workspaces, bases, and views including collaborators

*   [Get base collaborators](https://airtable.com/developers/web/api/get-base-collaborators)
    
*   [List block installations](https://airtable.com/developers/web/api/list-block-installations)
    
*   [Get interface](https://airtable.com/developers/web/api/get-interface)
    
*   [List views](https://airtable.com/developers/web/api/list-views)
    
*   [Get view metadata](https://airtable.com/developers/web/api/get-view-metadata)
    
*   [Get workspace collaborators](https://airtable.com/developers/web/api/get-workspace-collaborators)
    

`webhook:manage`

View, create, delete webhooks for a base, as well as fetch webhook payloads.

*   [List webhooks](https://airtable.com/developers/web/api/list-webhooks)
    
*   [Create a webhook](https://airtable.com/developers/web/api/create-a-webhook)
    
*   [Delete a webhook](https://airtable.com/developers/web/api/delete-a-webhook)
    
*   [Enable/disable webhook notifications](https://airtable.com/developers/web/api/enable-disable-webhook-notifications)
    
*   [Refresh a webhook](https://airtable.com/developers/web/api/refresh-a-webhook)
    

`block:manage`

Create new releases and submissions for custom extensions via the Blocks CLI.

`user.email:read`

See the user's email address

Enterprise member scopes
------------------------

The following scopes are only available to users on an enterprise account:

`enterprise.groups:read`

View information about user groups under the enterprise, their access, and their members

*   [Get user group](https://airtable.com/developers/web/api/get-user-group)
    

`workspacesAndBases:write`

Edit metadata of workspaces and bases, including collaborators, invites, views, and extensions

*   [Delete block installation](https://airtable.com/developers/web/api/delete-block-installation)
    
*   [Manage block installation](https://airtable.com/developers/web/api/manage-block-installation)
    
*   [Add base collaborator](https://airtable.com/developers/web/api/add-base-collaborator)
    
*   [Delete base collaborator](https://airtable.com/developers/web/api/delete-base-collaborator)
    
*   [Update collaborator base permission](https://airtable.com/developers/web/api/update-collaborator-base-permission)
    
*   [Add interface collaborator](https://airtable.com/developers/web/api/add-interface-collaborator)
    
*   [Delete interface collaborator](https://airtable.com/developers/web/api/delete-interface-collaborator)
    
*   [Update interface collaborator](https://airtable.com/developers/web/api/update-interface-collaborator)
    
*   [Delete interface invite](https://airtable.com/developers/web/api/delete-interface-invite)
    
*   [Delete base invite](https://airtable.com/developers/web/api/delete-base-invite)
    
*   [Delete view](https://airtable.com/developers/web/api/delete-view)
    
*   [Add workspace collaborator](https://airtable.com/developers/web/api/add-workspace-collaborator)
    
*   [Delete workspace collaborator](https://airtable.com/developers/web/api/delete-workspace-collaborator)
    
*   [Update workspace collaborator](https://airtable.com/developers/web/api/update-workspace-collaborator)
    
*   [Delete workspace invite](https://airtable.com/developers/web/api/delete-workspace-invite)
    
*   [Update workspace restrictions](https://airtable.com/developers/web/api/update-workspace-restrictions)
    

`workspacesAndBases.shares:manage`

View, enable, disable and delete share links for bases. Note: Share links can be used to view the data in the base.

*   [List shares](https://airtable.com/developers/web/api/list-shares)
    
*   [Delete share](https://airtable.com/developers/web/api/delete-share)
    
*   [Manage share](https://airtable.com/developers/web/api/manage-share)
    

Enterprise admin scopes
-----------------------

The following scopes are only available to enterprise admins:

`enterprise.scim.usersAndGroups:manage`

Manage the organization's users and groups via SCIM APIs, including provisioning and deprovisioning them.

*   [List groups](https://airtable.com/developers/web/api/list-scim-groups)
    
*   [Create group](https://airtable.com/developers/web/api/create-scim-group)
    
*   [Delete group](https://airtable.com/developers/web/api/delete-scim-group)
    
*   [Get group](https://airtable.com/developers/web/api/get-scim-group)
    
*   [Patch group](https://airtable.com/developers/web/api/patch-scim-group)
    
*   [Put group](https://airtable.com/developers/web/api/put-scim-group)
    
*   [List users](https://airtable.com/developers/web/api/list-scim-users)
    
*   [Create user](https://airtable.com/developers/web/api/create-scim-user)
    
*   [Delete user](https://airtable.com/developers/web/api/delete-scim-user)
    
*   [Get user](https://airtable.com/developers/web/api/get-scim-user)
    
*   [Patch user](https://airtable.com/developers/web/api/patch-scim-user)
    
*   [Put user](https://airtable.com/developers/web/api/put-scim-user)
    

`enterprise.auditLogs:read`

View the organization's audit logs

*   [Audit log events](https://airtable.com/developers/web/api/audit-log-events)
    
*   [List audit log requests](https://airtable.com/developers/web/api/list-audit-log-requests)
    
*   [Create audit log request](https://airtable.com/developers/web/api/create-audit-log-request)
    
*   [Get audit log request](https://airtable.com/developers/web/api/get-audit-log-request)
    

`enterprise.changeEvents:read`

View the organization's change events

*   [Change events](https://airtable.com/developers/web/api/change-events)
    

`enterprise.exports:manage`

Manage the organization's data exports, including eDiscovery exports

*   [List eDiscovery exports](https://airtable.com/developers/web/api/list-ediscovery-export)
    
*   [Create eDiscovery export](https://airtable.com/developers/web/api/create-ediscovery-export)
    
*   [Get eDiscovery export](https://airtable.com/developers/web/api/get-ediscovery-export)
    

`enterprise.account:read`

View data about the enterprise account, including workspaces ids, users, groups and email domains

*   [Get enterprise](https://airtable.com/developers/web/api/get-enterprise)
    
*   [List packages](https://airtable.com/developers/web/api/list-enterprise-packages)
    

`enterprise.account:write`

Edit data about the enterprise account, including creating descendant enterprise accounts

*   [Create descendant enterprise](https://airtable.com/developers/web/api/create-descendant-enterprise)
    
*   [Create base from package](https://airtable.com/developers/web/api/create-base-from-package-enterprise)
    
*   [Update workspace AI allowlist](https://airtable.com/developers/web/api/update-workspace-ai-allowlist)
    
    Beta
    

`enterprise.user:read`

View account information of users under the enterprise, including user id, name, email and bases user has access to

*   [List personal access tokens](https://airtable.com/developers/web/api/list-enterprise-personal-access-tokens)
    
    Beta
    
*   [Get users by id or email](https://airtable.com/developers/web/api/get-users-by-id-or-email)
    
*   [Get user by id](https://airtable.com/developers/web/api/get-user-by-id)
    

`enterprise.user:write`

Manage users under the enterprise account, including provisioning, deactivating and deleting users

*   [Revoke personal access tokens](https://airtable.com/developers/web/api/revoke-enterprise-personal-access-tokens)
    
    Beta
    
*   [Delete users by email](https://airtable.com/developers/web/api/delete-users-by-email)
    
*   [Manage user batched](https://airtable.com/developers/web/api/manage-user-batched)
    
*   [Manage user membership](https://airtable.com/developers/web/api/manage-user-membership)
    
*   [Grant admin access](https://airtable.com/developers/web/api/grant-admin-access)
    
*   [Revoke admin access](https://airtable.com/developers/web/api/revoke-admin-access)
    
*   [Delete user by id](https://airtable.com/developers/web/api/delete-user-by-id)
    
*   [Manage user](https://airtable.com/developers/web/api/manage-user)
    
*   [Logout user](https://airtable.com/developers/web/api/logout-user)
    
*   [Remove user from enterprise](https://airtable.com/developers/web/api/remove-user-from-enterprise)
    

`enterprise.groups:manage`

Manage user groups under the enterprise, including moving them

*   [Move user groups](https://airtable.com/developers/web/api/move-user-groups)
    

`workspacesAndBases:manage`

Manage workspaces and bases under the enterprise, including moving them

*   [Delete base](https://airtable.com/developers/web/api/delete-base)
    
*   [Move workspaces](https://airtable.com/developers/web/api/move-workspaces)
    
*   [Create workspace](https://airtable.com/developers/web/api/create-workspace)
    
*   [Delete workspace](https://airtable.com/developers/web/api/delete-workspace)
    
*   [Move base](https://airtable.com/developers/web/api/move-base)
    

`hyperDB.records:read`

Read records in the user's HyperDB tables

*   [Read records from a HyperDB table](https://airtable.com/developers/web/api/hyperdb-table-read-records)
    

`hyperDB.records:write`

Write records to the user's HyperDB tables

*   [Delete records from a HyperDB table by primary keys](https://airtable.com/developers/web/api/hyperdb-delete-records-by-primary-keys)
    
*   [Update or insert records from a HyperDB table by primary keys](https://airtable.com/developers/web/api/hyperdb-upsert-records-by-primary-keys)
    

!!
