# OAuth reference - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/oauth-reference
- **Summary:** Reference for how to request OAuth access tokens for your integration.

Guide

OAuth reference
===============

Reference for how to request OAuth access tokens for your integration.

Refer to [this guide](https://airtable.com/developers/web/guides/oauth-integrations)
 for how to register an OAuth integration with Airtable.

An example setup repo is available [here](https://github.com/Airtable/oauth-example)
.

Table of contents

*   [Routes](https://airtable.com/developers/web/api/oauth-reference#routes)
    *   [Authorization request](https://airtable.com/developers/web/api/oauth-reference#authorization-request)
        *   [Authorization request query](https://airtable.com/developers/web/api/oauth-reference#authorization-request-query)
            
        *   [Successful response query parameters](https://airtable.com/developers/web/api/oauth-reference#successful-response-query-parameters)
            
        *   [Error response query parameters](https://airtable.com/developers/web/api/oauth-reference#error-response-query-parameters)
            
        *   [Authorization error codes](https://airtable.com/developers/web/api/oauth-reference#authorization-error-codes)
            
    *   [Token creation request](https://airtable.com/developers/web/api/oauth-reference#token-creation-request)
        *   [Token creation request headers](https://airtable.com/developers/web/api/oauth-reference#token-creation-request-headers)
            
        *   [Token creation request body](https://airtable.com/developers/web/api/oauth-reference#token-creation-request-body)
            
        *   [Successful response](https://airtable.com/developers/web/api/oauth-reference#successful-response)
            
        *   [Error response](https://airtable.com/developers/web/api/oauth-reference#error-response)
            
        *   [Token creation error codes](https://airtable.com/developers/web/api/oauth-reference#token-creation-error-codes)
            
    *   [Token expiry & refresh tokens](https://airtable.com/developers/web/api/oauth-reference#token-expiry-refresh-tokens)
        *   [Token refresh request headers](https://airtable.com/developers/web/api/oauth-reference#token-refresh-request-headers)
            
        *   [Token refresh request body](https://airtable.com/developers/web/api/oauth-reference#token-refresh-request-body)
            
*   [Token permissions](https://airtable.com/developers/web/api/oauth-reference#token-permissions)
    *   [Scopes](https://airtable.com/developers/web/api/oauth-reference#scopes)
        
    *   [Resources](https://airtable.com/developers/web/api/oauth-reference#resources)
        
*   [Redirect URI](https://airtable.com/developers/web/api/oauth-reference#redirect-uri)
    
*   [Authorization parameter rules](https://airtable.com/developers/web/api/oauth-reference#authorization-parameter-rules)
    
*   [Cross-Origin Resource Sharing (CORS)](https://airtable.com/developers/web/api/oauth-reference#cross-origin-resource-sharing-cors)
    
*   [Enterprise Restrictions](https://airtable.com/developers/web/api/oauth-reference#enterprise-restrictions)
    

Routes

### 
Authorization request

GET `https://airtable.com/oauth2/v1/authorize`

#### 
Authorization request query

You can find your `client_id` and manage the registered `redirect_uri` and `scopes` for your integration by clicking your integration's name in the integration management page at [/create/oauth](https://airtable.com/create/oauth)
.

**Important:** In order to use an integration outside of development your integration you will need to set a valid Terms of Service URL, Support Email, and Privacy Policy URL in the integration management page at [/create/oauth](https://airtable.com/create/oauth)
.

| Parameter | Value |
| --- | --- |
| `client_id` | An opaque string that identifies your integration with Airtable. |
| `redirect_uri` | The URI for the authorize response redirect. Must exactly match a redirect URI associated with your integration.. HTTPS is required for any URI beside localhost: see [this section](https://airtable.com/developers/web/api/oauth-reference#redirect-uri)<br> for more details and limitations. |
| `response_type` | The string "`code`". |
| `scope` | A string that is a space delimited list of unique [scopes](https://airtable.com/developers/web/api/scopes)<br>. All scopes must be valid, Airtable defined scopes that have been selected for your integration in the integration management page. You must request at least one scope. |
| `state` | A cryptographically generated, opaque string. Protects against CSRF attacks. See [this section](https://airtable.com/developers/web/api/oauth-reference#authorization-parameter-rules)<br> for our policy on generating this value. |
| `code_challenge` | The base64 url-encoding of the sha256 of the [`code_verifier`](https://airtable.com/developers/web/api/oauth-reference#authorization-parameter-rules)<br> you generated for the request. Protects against man-in-the-middle grant code injection attacks. Part of the [PKCE extension](https://oauth.net/2/pkce/)<br> of OAuth. |
| `code_challenge_method` | The string "`S256`". |

Refer to [this section](https://airtable.com/developers/web/api/oauth-reference#authorization-parameter-rules)
 for more details on generating authorization parameters (`state`, `code_challenge`, `code_verifier`).

#### 
Successful response query parameters

After authorization, the user’s browser is redirected back to the redirect URI passed in the authorization request. When successful, you receive the following query parameters in the request.

| Parameter | Value |
| --- | --- |
| `code` | A string. The grant code that you can exchange for an access token. |
| `state` | The `state` parameter past in the authorization request. You **must** verify the state value is associated with an authorization request you made. This protects against CSRF attacks. |
| `code_challenge` | The `code_challenge` parameter you passed in the authorization request. |
| `code_challenge_method` | The string "`S256`". |

#### 
Error response query parameters

After authorization, the user’s browser is redirected back to the redirect URI passed in the authorization request. When an error occurs you receive the following query parameters in the request.

Note: If the `redirect_uri` provided does not match one registered with the provided `client_id`, you will not receive an error response.

| Parameter | Value |
| --- | --- |
| `error` | An error code classifying the general error. |
| `error_description` | A message offering a detailed reason for the failure. Intended for use in debugging by developers. |
| `state` | The `state` parameter past in the authorization request. You **must** verify the state value is associated with an authorization request you made. This protects against CSRF attacks. |

#### 
Authorization error codes

| Error | Description |
| --- | --- |
| `invalid_request` | Some possible causes: the request is missing a required parameter, a parameter had an unsupported type, the request included a parameter more than once |
| `access_denied` | Some possible causes: The user chose not to authorize your integration, your OAuth integration had not set a Terms of Service URL or Privacy Policy URL or Support Email, the user's enterprise has restricted them from using your integration |
| `unsupported_response_type` | The `response_type` parameter you passed was not `code`. |
| `invalid_scope` | Some possible causes: the scope string was empty or malformed, contained duplicate scopes, or a scope that your integration had not registered as a possible scope |
| `server_error` | An unexpected error occurred within Airtable. |
| `temporarily_unavailable` | The server is temporarily unavailable. Used in place of a 504 response which is not possible since the user is being redirected. |

### 
Token creation request

After a successful authorization request, POST to `https://airtable.com/oauth2/v1/token` using the grant code from the authorization request. This request must be made **within 10 minutes** of the authorization request.

#### 
Token creation request headers

| Header | Value |
| --- | --- |
| `Authorization` (optional) | **Required** if your integration has a `client_secret`. **forbidden** if it does not. The value should be the interpolated string "`Basic {credentials}`", where `credentials` is the base64 url-encoding of the interpolated string "`{client_id}:{client_secret}`". |
| `Content-Type` | The string "`application/x-www-form-urlencoded`" |

#### 
Token creation request body

Note: these parameters must be formatted via the `application/x-www-form-urlencoded` encoding.

| Parameter | Value |
| --- | --- |
| `code` | The grant code generated during the authorization request. Individual `code` values can only be used once, even if the request fails. |
| `client_id` (optional if your integration has a `client_secret`) | The `client_id` used in the authorization request that generated `code`. Used to prevent man-in-the-middle attacks. |
| `redirect_uri` | The `redirect_uri` used in the authorization request that generated `code`. Used to prevent man-in-the-middle attacks. |
| `grant_type` | The string "`authorization_code`". |
| `code_verifier` | A cryptographically generated, opaque string. Used to generate the `code_challenge` parameter in the authorization request that generated `code`. See [this section](https://airtable.com/developers/web/api/oauth-reference#authorization-parameter-rules)<br> for our policy on generating this value. |

#### 
Successful response

The HTTP status code for a successful response is 200 (OK).

| Field | Value |
| --- | --- |
| `access_token` | An opaque string. Can be used to make requests to the Airtable API on behalf of the user, and cannot be recovered if lost. |
| `refresh_token` | An opaque string. Can be used to request a new access token after the current one expires. See [below](https://airtable.com/developers/web/api/oauth-reference#token-expiry-refresh-tokens)<br> for more details on token refresh. |
| `token_type` | The string "`Bearer` " (space intentional) |
| `scope` | A string that is a space delimited list of [scopes](https://airtable.com/developers/web/api/scopes)<br> granted to this access token. Can be recovered using the [get userId and scopes endpoint](https://airtable.com/developers/web/api/oauth-reference/get-user-id-scopes)<br>. |
| `expires_in` | An integer. Time in seconds until the access token expires (expected value is 60 minutes). |
| `refresh_expires_in` | An integer. Time in seconds until the refresh token expires (expected value is 60 days). |

Refer to the [authentication reference](https://airtable.com/developers/web/api/authentication)
 for how to use the access token to make requests to the Airtable API. Note: you will need to use the [list bases](https://airtable.com/developers/web/api/user-listBases)
 endpoint to list the bases that the token has access to.

> Note: OAuth access and refresh tokens should be treated as opaque, variable-length strings. In particular, do not rely on tokens having a particular length or format. Changes to the token format (for newly created tokens) are not considered to be breaking changes.

#### 
Error response

If the `error` is `invalid_client` the HTTP status code will be 401. The status code will be 400 for all other `error` values.

| Field | Value |
| --- | --- |
| `error` | String classifying the general error. See [below](https://airtable.com/developers/web/api/oauth-reference#error-codes)<br> for possible error codes. |
| `error_description` | Message offering a detailed reason for the failure, for use in debugging. |

#### 
Token creation error codes

| Error | Description |
| --- | --- |
| `invalid_request` | Some possible causes: request includes an unsupported parameter value (besides `grant_type`), single parameter was included multiple times. |
| `invalid_client` | Some possible causes: incorrect `client_id`, `client_secret` was missing and required, `client_secret` provided for integration without `client_secret`, different `client_id` values in authorization header and request body. |
| `invalid_grant` | Some possible causes: grant `code` has expired, `client_id` or `redirect_uri` passed were not those used to generate the grant code, `S256` was not passed as `code_challenge_method`, `code_verifier` does not match `code_challenge` used to generate the `code` |
| `unsupported_grant_type` | `grant_type` was not one of: `authorization_code` or `refresh_token` |

Token expiry & refresh tokens

Access tokens expire after 60 minutes. You will need to use the `refresh_token` returned from your requests to `/oauth2/v1/token` (both from new authorizations and when refreshing a token, explained below) to request a new access token after it is expired.

This is done by making a new `POST` request to `/oauth2/v1/token` with the following headers and request body.

When a refresh token is exchanged for an access token, the previous access and refresh tokens are invalidated and new tokens are returned.

Refresh tokens are valid for 60 days. If the refresh token is not used in this time, the authorization is effectively revoked - the user will need to re-authorize your integration. There is no limit to how long you can continue to refresh a token as long as it is done within the 60 day period each time.

> Note: frequent invalid refresh requests may result in token revocation. Please keep requests below 10 per second per token.
> 
> Note: If you receive a 409 response it indicates a conflict in the request because you recently refreshed a token.

For more information about the refresh token protocol, refer to this [OAuth.net](https://oauth.net/2/refresh-tokens/)
 page.

### 
Token refresh request headers

| Header | Value |
| --- | --- |
| `Authorization` (optional) | **Required** if your integration has a `client_secret`. **forbidden** if it does not. The value should be the interpolated string "`Basic {credentials}`", where `credentials` is the base64 url-encoding of the interpolated string "`{client_id}:{client_secret}`". |
| `Content-Type` | The string "`application/x-www-form-urlencoded`" |

### 
Token refresh request body

Note: these parameters must be formatted via the `application/x-www-form-urlencoded` encoding.

| Parameter | Value |
| --- | --- |
| `grant_type` | The string "`refresh_token`" |
| `refresh_token` | The saved refresh token from the previous token grant. |
| `scope` (optional) | If specified, a subset of the token's existing scopes. |
| `client_id` (optional) | Required if your integration **does not** have a `client_secret`. |

Token permissions

Tokens act as the account of the authorizing user, with additional limitations according to its scopes and the bases and workspaces that were granted to it. The token can only make API requests that correspond to the scopes requested for the token and can only access the bases and workspaces that the user granted to the OAuth integration.

### 
Scopes

[Scopes](https://airtable.com/developers/web/api/scopes)
 define what actions can be performed on behalf of the user.

These privileges are only applicable to resources that a user has granted your integration access to. For example, if a user does not grant you access to a particular base, you cannot modify that base regardless of what scopes you have. A user cannot grant your integration permissions they themselves do not have. If the user who authorized your integration loses some permissions, any access tokens generated by them will also lose those permissions.

If you disable a scope for your integration

*   All authorization and token requests using the disabled scope will fail
*   All outstanding access tokens will lose the privileges granted by that scope until you re-enable it

### 
Resources

Resources are the bases and workspaces your integration has access to via the API. The actions you can take on these resources are limited by both the scopes of your access token as well as the permissions the user has. A user cannot grant your integration permission to perform actions they themselves cannot perform.

Users can add or revoke resources for an access token at any time. You can use the [list bases](https://airtable.com/developers/web/api/user-listBases)
 endpoint to list the bases that the token has access to (requires `schema.bases:read` scope).

Redirect URI

The format of the redirect URI is subject to a number of constraints for security reasons.

| Property | Validation rules |
| --- | --- |
| [scheme](https://tools.ietf.org/html/rfc3986#section-3.1) | Redirect URIs must use the HTTPS scheme. Localhost URIs are an exception, and may use the HTTP scheme. |
| [userinfo](https://tools.ietf.org/html/rfc3986#section-3.2.1) | Redirect URIs cannot contain a userinfo component. |
| [host](https://tools.ietf.org/html/rfc3986#section-3.2.2) | The host cannot be a raw IP address unless that IP address is localhost e.g. `127.0.0.1`. |
| [domain](https://tools.ietf.org/html/rfc1034) | The host [top level domains](https://tools.ietf.org/id/draft-liman-tld-names-00.html)<br> must belong to the [public suffix list](https://publicsuffix.org/list/)<br> unless you are using localhost. |
| [path](https://tools.ietf.org/html/rfc3986#section-3.3) | Redirect URI paths cannot be relative e.g. a path cannot contain “/..” or “..” or their URL encodings. |
| [query](https://datatracker.ietf.org/doc/html/rfc3986#section-3.4) | Queries must be formatted via the application/x-www-form-urlencoded encoding in utf-8. |
| [fragment](https://datatracker.ietf.org/doc/html/rfc3986#section-3.5) | Redirect URIs cannot contain the fragment component. |
| characters | Redirect URIs cannot contain certain characters including the following: the wildcard (“\*”), non-printable ASCII characters, invalid percent encodings (valid percent encodings are a percent sign followed by two hexadecimal digits), null character encodings e.g. %00 or %C0%80 |
| open redirects | Redirect URIs must not themselves redirect the user. This is especially true if the redirect URI redirects to a URI that is not TLS encrypted. |

Authorization parameter rules

| Parameter | Description |
| --- | --- |
| `code_verifier` | **Must** be a cryptographically generated string; 43-128 characters long. Characters belong to the set: `a-z / A-Z / 0-9 / “.” / “-” / “_”` |
| `code_challenge` | base64 url encoding of the sha256 hash of `code_verifier`. |
| `state` | **Must** be a cryptographically generated string; 16-1024 characters long. Characters belong to the set `a-z / A-Z / 0-9 / “.” / “-” / “_”` |

Cross-Origin Resource Sharing (CORS)

Support for CORS requests to create tokens is in development. At present you cannot create tokens directly from the browser.

Enterprise restrictions

Enterprise's users may be affected by additional restrictions:

*   An enterprise account may prevent its bases and workspaces from being selected
*   An enterprise account may prevent its users from authorizing all third-party (OAuth) integrations

An admin can allow specific integrations using the integration's Client ID

!!
