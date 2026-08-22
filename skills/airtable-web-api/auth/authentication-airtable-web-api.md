# Authentication - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/authentication
- **Summary:** Airtable's API uses token-based authentication, allowing users to authenticate API requests by inputting their tokens into the HTTP authorization bearer token header.

Guide

Authentication
==============

Basics

Airtable's API uses token-based authentication, allowing users to authenticate API requests by inputting their tokens into the HTTP authorization bearer token header.

Example:

All API requests must be authenticated and made through HTTPS.

Passing personal access tokens and OAuth access tokens via the legacy `api_key` URL parameter is not supported.

Types of token

> As of February 1st 2024, the deprecation period for Airtable API keys has ended. Users of Airtable API keys must migrate to the new authentication methods to continue using Airtable's API. See [this article](https://support.airtable.com/docs/airtable-api-key-deprecation-notice)
>  for more details.

We currently support using personal access tokens and OAuth access tokens during the authentication process.

[Personal access tokens](https://airtable.com/developers/web/guides/personal-access-tokens)
 are for personal development, like building an integration for yourself, your client, or your company. They can be created and managed at [/create/tokens](https://airtable.com/create/tokens)
 or from the enterprise admin panel for [service accounts](https://support.airtable.com/docs/service-accounts-overview)
. Personal access tokens act as your user account, and should not be shared with third-party services or integrations.

[OAuth access tokens](https://airtable.com/developers/web/guides/oauth-integrations)
 are recommended for building an integration where other users grant your service access to Airtable’s API on their behalf. In this case, your integration is a third-party service with respect to Airtable. After registering your integration with Airtable at [/create/oauth](https://airtable.com/create/oauth)
, tokens are available via the [OAuth grant flow](https://oauth.net/2/)
.

Any integrations that allow other users to grant access to Airtable should use OAuth.

Scopes and resources/access

Personal access and Oauth tokens serve as the account of the user who grants access, with the following limitations:

*   [Scopes](https://airtable.com/developers/web/api/scopes)
    : What actions the token can perform.
*   Resources/access: What bases and workspace the token can access. Tokens can be granted access to individual—or all—bases/workspaces. These can be listed using the [list bases](https://airtable.com/developers/web/api/list-bases)
     endpoint.

For example, to update a record in a base via API, the user who granted the token must have editor access to the base. Additionally, the token must have both the correct scope (`data.records:write`) and the base added to it as a resource.

For personal access tokens, scopes and resources/access are individually configured from [/create/tokens](https://airtable.com/create/tokens)
. And for OAuth access tokens, developers choose the requested scopes from [/create/oauth](https://airtable.com/create/oauth)
, while end-users decide what resources to grant access to.

When configuring resources/access for a personal access token, Enterprise users may see additional options:

*   **Add all resources** — Grants the token access to all workspaces and bases that the user currently has access to, regardless of enterprise organization or org unit. If the user is a collaborator on a workspace or base, the token can access it.
*   **Add a specific organization** — Grants the token access to all workspaces and bases owned by a specific organization. To see this option, the user must be an admin of that organization.

!!
