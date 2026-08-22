# Workspaces | Modal Docs

- **URL:** https://modal.com/docs/guide/workspaces
- **Summary:** This page is a high-level guide to Modal Workspaces, the primary unit of organization for Modal resources and authentication.

Copy page

Workspaces
==========

This page is a high-level guide to Modal Workspaces, the primary unit of organization for Modal resources and authentication.

A **Workspace** is an area where a user can deploy Modal Apps and other resources. There are two types of Workspaces: personal and shared. After a new user has signed up to Modal, a personal Workspace is automatically created for them. The name of the personal Workspace is based on your GitHub username, but it might be randomly generated if already taken or invalid.

To collaborate with others, a new shared Workspace needs to be created.

Create a Workspace 

All additional Workspaces are shared Workspaces, meaning you can invite others by email to collaborate with you. There are two ways to create a Modal Workspace on the [settings](https://modal.com/settings/workspaces)
 page.

![view of workspaces creation interface](https://modal-cdn.com/cdnbot/create-new-workspace-viewk0ka46_7_800f2053.webp)

1.  Create from [GitHub organization](https://docs.github.com/en/organizations)
    . Allows members in GitHub organization to auto-join the Workspace.
    
2.  Create from scratch. You can invite anyone to your Workspace.
    

If you’re interested in having a Workspace associated with your Okta organization, then check out our [Okta SSO docs](https://modal.com/docs/guide/okta-sso)
.

If you’re interested in using SSO through Google or other providers, then please reach out to us at [support@modal.com](mailto:support@modal.com)
.

Auto-joining a Workspace associated with a GitHub organization 

Note: This is only relevant for Workspaces created from a GitHub organization.

Users can automatically join a Workspace on their [Workspace settings page](https://modal.com/settings/workspaces)
 if they are a member of the GitHub organization associated with the Workspace.

To turn off this functionality a Workspace Manager can disable it on the **Workspace Management** tab of their Workspace’s settings page.

Inviting new Workspace members 

To invite a new Workspace member, you can visit the [settings](https://modal.com/settings)
 page and navigate to the members tab for the appropriate Workspace.

You can either send an email invite or share an invite link. Both existing Modal users and non-existing users can use the links to join your Workspace. If they are a new user a Modal account will be created for them.

![invite member section](https://modal.com/_app/immutable/assets/invite-member.CHnml0eT.png)

Create a token for a Workspace 

To interact with a Workspace’s resources programmatically, you need to add an API token for that Workspace. Your existing API tokens are displayed on [the settings page](https://modal.com/settings/tokens)
 and new API tokens can be added for a particular Workspace.

After adding a token for a Workspace to your Modal config file you can activate that Workspace’s profile using the CLI (see below).

As an manager or Workspace owner you can manage active tokens for a Workspace on [the member tokens page](https://modal.com/settings/tokens/member-tokens)
. For more information on API token management see the [documentation about configuration](https://modal.com/docs/sdk/py/latest/modal.config)
.

Switching active Workspace 

When on the dashboard or using the CLI, the active profile determines which personal or organizational Workspace is associated with your actions.

### Dashboard 

You can switch between organization Workspaces and your Personal Workspace by using the workspace selector at the top of [the dashboard](https://modal.com/home)
.

### CLI 

To switch the Workspace associated with CLI commands, use `modal profile activate`.

Administering Workspace membership 

Workspaces have three different levels of access privileges:

*   Owner
*   Manager
*   Member

A user that creates a Workspace is automatically set as the **Owner** for that Workspace. The owner can assign any other roles within the Workspace, as well as remove other members of the Workspace.

A **Manager** within a Workspace can assign all roles except **Owner** and can also remove other members of the Workspace.

A **Member** of a Workspace can not assign any access privileges within the Workspace but can otherwise perform any action like running and deploying Apps and modify Secrets.

As an Owner or Manager you can administrate the access privileges of other members on the `Workspace Management` tab in [settings](https://modal.com/settings/workspace-management)
.

Leaving a Workspace 

To leave a Workspace, navigate to [the settings page](https://modal.com/settings/workspaces)
 and click “Leave” on a listed Workspace. There must be at least one Owner assigned to a Workspace.

[Workspaces](https://modal.com/docs/guide/workspaces#workspaces)
[Create a Workspace](https://modal.com/docs/guide/workspaces#create-a-workspace)
[Auto-joining a Workspace associated with a GitHub organization](https://modal.com/docs/guide/workspaces#auto-joining-a-workspace-associated-with-a-github-organization)
[Inviting new Workspace members](https://modal.com/docs/guide/workspaces#inviting-new-workspace-members)
[Create a token for a Workspace](https://modal.com/docs/guide/workspaces#create-a-token-for-a-workspace)
[Switching active Workspace](https://modal.com/docs/guide/workspaces#switching-active-workspace)
[Dashboard](https://modal.com/docs/guide/workspaces#dashboard)
[CLI](https://modal.com/docs/guide/workspaces#cli)
[Administering Workspace membership](https://modal.com/docs/guide/workspaces#administering-workspace-membership)
[Leaving a Workspace](https://modal.com/docs/guide/workspaces#leaving-a-workspace)
