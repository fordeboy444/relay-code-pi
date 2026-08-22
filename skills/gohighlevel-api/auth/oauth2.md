# About PKCE[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#about-pkce "Direct link to About PKCE")

- **URL:** https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2
- **Summary:** OAuth v2 is the recommended External Authentication method. HighLevel redirects the user to your authorization page, where they grant access. Your provider returns an authorization code, HighLevel exchanges it for an access/refresh token pair, stores the tokens securely, and includes them in the external calls your app makes (for example, in your Workflow Actions and Triggers).

[Skip to main content](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#__docusaurus_skipToContent_fallback)

Version: v3

On this page

OAuth v2 is the **recommended** External Authentication method. HighLevel redirects the user to your authorization page, where they grant access. Your provider returns an authorization code, HighLevel exchanges it for an access/refresh token pair, stores the tokens securely, and includes them in the external calls your app makes (for example, in your [Workflow Actions and Triggers](https://marketplace.gohighlevel.com/docs/marketplace-modules/WorkflowActionsAndTriggers)
).

> Currently, only the **Authorization Code** grant type is supported.

How the flow works[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#how-the-flow-works "Direct link to How the flow works")

1.  The user installs your app and is redirected to your **Authorization URL**.
2.  They log in and approve access on your site.
3.  Your site redirects back to HighLevel's **OAuth redirect URL** with an authorization `code`.
4.  HighLevel calls your **Access Token Request** endpoint, exchanging the code for an `access_token` and `refresh_token`.
5.  HighLevel stores the tokens and calls your **Test API endpoint** to confirm they work.
6.  When the access token later expires, HighLevel calls your **Refresh Token Request** endpoint to obtain a new one.

1\. External app name[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#1-external-app-name "Direct link to 1. External app name")

Enter a name for the external application you're integrating (e.g. "My OAuth App"). This is used to identify the app within the system.

2\. OAuth redirect URL[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#2-oauth-redirect-url "Direct link to 2. OAuth redirect URL")

HighLevel generates a redirect (callback) URL unique to your app:

    https://services.leadconnectorhq.com/oauth/clients/{appId}/authentication/oauth2/callback

Copy this URL and register it as an allowed redirect/callback URL in your provider's API or developer settings. Your provider must redirect back to this exact URL after the user authorizes access.

3\. Configure your fields (optional)[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#3-configure-your-fields-optional "Direct link to 3. Configure your fields (optional)")

If your authorization or token endpoints differ per user (for example a per-tenant domain), collect those values with [Configure Your Fields](https://marketplace.gohighlevel.com/docs/oauth/external-auth/ConfigureYourFields)
 and reference them as `{{userData.<key>}}` in your endpoint configuration.

4\. App credentials[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#4-app-credentials "Direct link to 4. App credentials")

Choose how your app exchanges the authorization code for tokens:

| Option | When to use |
| --- | --- |
| **OAuth v2** | Standard flow. Copy the **Client ID** and **Client Secret** from your provider's developer settings and paste them below. |
| **OAuth v2 with PKCE extension** | PKCE (Proof Key for Code Exchange) is an extension that helps prevent attacks such as authorization-code interception. Choose this if your provider supports PKCE. |

Then provide:

*   **Client ID** (required)
*   **Client Secret ID** (required for standard OAuth v2)

### About PKCE[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#about-pkce "Direct link to About PKCE")

When PKCE is enabled:

*   A unique **code verifier** is generated for each authorization request.
*   A **code challenge** (derived from the verifier using SHA-256) is sent on the authorization request.
*   The **code verifier** is securely stored and automatically included on the token request for verification.

This protects against authorization-code interception and is recommended when your provider supports it.

5\. Add OAuth endpoint configuration[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#5-add-oauth-endpoint-configuration "Direct link to 5. Add OAuth endpoint configuration")

This section defines the four requests in the OAuth flow. Each request has a **method dropdown**, a **URL**, and **More options** for parameters, headers, and body. Where defaults are useful, HighLevel pre-populates them - adjust to match your provider's documentation. Most requests also support **[Switch to Code Mode](https://marketplace.gohighlevel.com/docs/oauth/external-auth/CodeMode)
** when you need full control.

### Authorization URL[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#authorization-url "Direct link to Authorization URL")

Where HighLevel sends the user to authenticate and authorize the integration.

Default URL parameters:

| Parameter | Value |
| --- | --- |
| `client_id` | `{{externalApp.clientId}}` |
| `scope` | `{{externalApp.scope}}` |
| `response_type` | `code` |
| `state` | `{{bundle.state}}` |
| `redirect_uri` | `{{bundle.redirectUrl}}` |

> The `response_type`, `state`, and `redirect_uri` parameters are managed by HighLevel and should not be modified. The `state` parameter is a standard OAuth security measure that protects against CSRF; HighLevel verifies it on the callback.

### Scope[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#scope "Direct link to Scope")

The OAuth scopes that define the level of access your integration needs. Enter a comma- or space-separated list of values (e.g. `read:user write:data`). Include only the scopes you actually need.

### Access token request[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#access-token-request "Direct link to Access token request")

The endpoint where HighLevel sends the authorization code to receive tokens - typically a `POST`.

Default body:

| Parameter | Value |
| --- | --- |
| `client_id` | `{{externalApp.clientId}}` |
| `client_secret` | `{{externalApp.clientSecret}}` |
| `state` | `{{bundle.state}}` |
| `redirect_uri` | `{{bundle.redirectUrl}}` |
| `code` | `{{bundle.code}}` |
| `grant_type` | `authorization_code` |

Default headers:

    content-type: application/x-www-form-urlencodedaccept: application/json

Expected response:

    {  "access_token": "your_access_token",  "refresh_token": "your_refresh_token",  "expires_in": 3600}

> When PKCE is enabled, the `code_verifier` is automatically included on this request.

### Long-Lived Access Token Request (optional)[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#long-lived-access-token-request-optional "Direct link to Long-Lived Access Token Request (optional)")

Some providers require you to exchange the first (short-lived) access token for a long-lived one before it's used. If your provider works this way, configure this extra request; otherwise leave it blank.

### Refresh token request[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#refresh-token-request "Direct link to Refresh token request")

The endpoint HighLevel calls to obtain a new access token when the current one expires - typically a `POST`.

Default body:

| Parameter | Value |
| --- | --- |
| `refresh_token` | `{{bundle.refreshToken}}` |
| `grant_type` | `refresh_token` |

Default headers:

    content-type: application/x-www-form-urlencodedaccept: application/json

### Automatically refresh token[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#automatically-refresh-token "Direct link to Automatically refresh token")

Enable **I want to automatically refresh on unauthorized error** so HighLevel automatically calls your refresh token request when a request returns a `401`. This keeps the connection alive without the user having to re-authorize.

If auto-refresh is disabled, the connection breaks once the access token expires and the user must re-authorize. We strongly recommend leaving it enabled.

### Test API endpoint[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#test-api-endpoint "Direct link to Test API endpoint")

A simple endpoint (ideally a `GET` needing no special configuration, such as `/me`) that HighLevel calls to confirm the access token is valid. The access token is included automatically via the `Authorization` header:

    authorization: Bearer {{bundle.accessToken}}

If the test fails and auto-refresh is enabled, HighLevel attempts to refresh the token and try again.

6\. Multi-account support & user info (optional)[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#6-multi-account-support--user-info-optional "Direct link to 6. Multi-account support & user info (optional)")

OAuth apps can also fetch the connected user's profile and support connecting multiple external accounts. This is configured in the **Fetch user information** and **Multi-Account Support** sections - see [Multi-Account Support & User Info](https://marketplace.gohighlevel.com/docs/oauth/external-auth/MultiAccountSupport)
.

Glossary[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#glossary "Direct link to Glossary")

### OAuth parameters[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#oauth-parameters "Direct link to OAuth parameters")

| Parameter | System Value | Description |
| --- | --- | --- |
| `client_id` | `{{externalApp.clientId}}` | Unique identifier issued by your provider, used to identify your application during the OAuth flow. |
| `client_secret` | `{{externalApp.clientSecret}}` | Confidential key issued alongside the `client_id`, used to authenticate your application when exchanging the code for tokens. Keep it secure. |
| `scope` | `{{externalApp.scope}}` | Space-separated list of permissions your application requests. |
| `response_type` | `code` | Only the `code` response type is supported; it returns an authorization code that is exchanged for tokens. |
| `state` | `{{bundle.state}}` | Security token generated by HighLevel to prevent CSRF. Must be returned unchanged on the callback. Requests with a mismatched state are rejected. |
| `redirect_uri` | `{{bundle.redirectUrl}}` | The callback URL the provider redirects to after authorization. Must match the registered OAuth redirect URL exactly. |
| `grant_type` | `authorization_code` or `refresh_token` | `authorization_code` when exchanging the code for tokens; `refresh_token` when requesting a new access token. |
| `code_challenge` | Generated value | When PKCE is enabled, derived from the `code_verifier` using SHA-256 and base64URL encoding, sent on the authorization request. |
| `code_challenge_method` | `S256` | When PKCE is enabled, indicates the challenge method. Only `S256` (SHA-256) is supported. |
| `code_verifier` | Generated value | When PKCE is enabled, the high-entropy random string used to generate the `code_challenge`, sent on the token request. |

### Token parameters[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#token-parameters "Direct link to Token parameters")

| Parameter | System Value | Description |
| --- | --- | --- |
| `code` | `{{bundle.code}}` | The authorization code returned after the user authorizes. Temporary and single-use; exchanged for tokens. |
| `access_token` | `{{bundle.accessToken}}` | Token used to authenticate requests. Has a limited lifetime and is refreshed periodically. |
| `refresh_token` | `{{bundle.refreshToken}}` | Long-lived token used to obtain new access tokens when the current one expires. |

Testing your setup[​](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#testing-your-setup "Direct link to Testing your setup")

Use **Step 3 - Test your auth** to run the OAuth flow end to end. HighLevel opens your authorization page, exchanges the code for tokens, then calls your Test API endpoint. The tester shows the requests, responses, and HTTP details - and execution logs when [Code Mode](https://marketplace.gohighlevel.com/docs/oauth/external-auth/CodeMode)
 is used.

> Save your configuration before testing - the tester uses the most recently saved version.

Share your feedback
-------------------

★★★★★

*   [How the flow works](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#how-the-flow-works)
    
*   [1\. External app name](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#1-external-app-name)
    
*   [2\. OAuth redirect URL](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#2-oauth-redirect-url)
    
*   [3\. Configure your fields (optional)](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#3-configure-your-fields-optional)
    
*   [4\. App credentials](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#4-app-credentials)
    *   [About PKCE](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#about-pkce)
        
*   [5\. Add OAuth endpoint configuration](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#5-add-oauth-endpoint-configuration)
    *   [Authorization URL](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#authorization-url)
        
    *   [Scope](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#scope)
        
    *   [Access token request](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#access-token-request)
        
    *   [Long-Lived Access Token Request (optional)](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#long-lived-access-token-request-optional)
        
    *   [Refresh token request](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#refresh-token-request)
        
    *   [Automatically refresh token](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#automatically-refresh-token)
        
    *   [Test API endpoint](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#test-api-endpoint)
        
*   [6\. Multi-account support & user info (optional)](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#6-multi-account-support--user-info-optional)
    
*   [Glossary](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#glossary)
    *   [OAuth parameters](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#oauth-parameters)
        
    *   [Token parameters](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#token-parameters)
        
*   [Testing your setup](https://marketplace.gohighlevel.com/docs/oauth/external-auth/OAuth2#testing-your-setup)
