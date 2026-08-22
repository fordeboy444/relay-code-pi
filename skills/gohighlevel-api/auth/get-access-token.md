# Get Access Token

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token
- **Summary:** Use Access Tokens to access CRM resources on behalf of an authenticated location/company.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token#__docusaurus_skipToContent_fallback)

Version: v3New

Get Access Token
================

POST 

https://services.leadconnectorhq.com/oauth/token

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Use Access Tokens to access CRM resources on behalf of an authenticated location/company.

Request[​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/x-www-form-urlencoded

*   Body
*   Example (auto)

### Body**required**

**client_id**stringrequired

The ID provided by CRM for your integration

**Example:** `6578278e879ad2646715ba9c`

**client_secret**stringrequired

The client secret provided by CRM for your integration

**Example:** `ab12dc0ae1234a7898f9ff06d4f69gh`

**grant_type**stringrequired

The OAuth2 grant type — authorization_code, refresh_token, or client_credentials

**Possible values:** \[`authorization_code`, `refresh_token`, `client_credentials`\]

**Example:** `authorization_code`

**code**string

The authorization code received from the authorization endpoint (required for authorization_code grant)

**Example:** `ab12dc0ae1234a7898f9ff06d4f69gh`

**refresh_token**string

The refresh token used to obtain a new access token (required for refresh_token grant)

**Example:** `xy34dc0ae1234a4858f9ff06d4f66ba`

**user_type**string

The type of token to be requested

**Possible values:** \[`Company`, `Location`\]

**Example:** `Location`

**redirect_uri**string

The redirect URI for your application

**Example:** `https://myapp.com/oauth/callback/crm`

    {  "client_id": "6578278e879ad2646715ba9c",  "client_secret": "ab12dc0ae1234a7898f9ff06d4f69gh",  "grant_type": "authorization_code",  "code": "ab12dc0ae1234a7898f9ff06d4f69gh",  "refresh_token": "xy34dc0ae1234a4858f9ff06d4f66ba",  "user_type": "Location",  "redirect_uri": "https://myapp.com/oauth/callback/crm"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-access-token#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**access_token**string

The OAuth2 access token

**Example:** `ab12dc0ae1234a7898f9ff06d4f69gh`

**token_type**string

The token type (always Bearer)

**Example:** `Bearer`

**expires_in**number

Time in seconds until the access token expires

**Example:** `86399`

**refresh_token**string

The OAuth2 refresh token used to obtain a new access token

**Example:** `xy34dc0ae1234a4858f9ff06d4f66ba`

**scope**string

Space-separated list of scopes the access token has access to

**Example:** `conversations/message.readonly conversations/message.write`

**userType**string

The user type associated with the token (Location or Company)

**Example:** `Location`

**locationId**string

Location ID - Present only for Sub-Account Access Token

**Example:** `l1C08ntBrFjLS0elLIYU`

**companyId**string

Company ID

**Example:** `l1C08ntBrFjLS0elLIYU`

**approvedLocations**string\[\]

Approved locations to generate location access token

**Example:** `["l1C08ntBrFjLS0elLIYU"]`

**userId**stringrequired

USER ID - Represent user id of person who performed installation

**Example:** `l1C08ntBrFjLS0elLIYU`

**planId**string

Plan Id of the subscribed plan in paid apps.

**Example:** `l1C08ntBrFjLS0elLIYU`

**isBulkInstallation**boolean

Indicates whether the installation was performed as a bulk installation

**Example:** `false`

**installToFutureLocations**boolean

Boolean to control if user wants app to be automatically installed to future locations (only for company tokens)

**Example:** `true`

**approveAllLocations**boolean

Boolean indicating if user approved all locations during bulk installation (only for company tokens)

**Example:** `true`

    {  "access_token": "ab12dc0ae1234a7898f9ff06d4f69gh",  "token_type": "Bearer",  "expires_in": 86399,  "refresh_token": "xy34dc0ae1234a4858f9ff06d4f66ba",  "scope": "conversations/message.readonly conversations/message.write",  "userType": "Location",  "locationId": "l1C08ntBrFjLS0elLIYU",  "companyId": "l1C08ntBrFjLS0elLIYU",  "approvedLocations": [    "l1C08ntBrFjLS0elLIYU"  ],  "userId": "l1C08ntBrFjLS0elLIYU",  "planId": "l1C08ntBrFjLS0elLIYU",  "isBulkInstallation": false,  "installToFutureLocations": true,  "approveAllLocations": true}

Bad Request

*   application/json

*   Schema
*   Example (auto)
*   invalidParameter
*   missingParameter
*   invalidRefreshToken
*   locationNotActive

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Thrown when any parameter (grant_type, client_id, client_secret, refresh_token, etc.) has an invalid value.

    {  "statusCode": 400,  "message": "Invalid parameter: grant_type"}

Thrown when a required parameter (grant_type, client_id, client_secret, refresh_token, etc.) is missing from the request.

    {  "statusCode": 400,  "message": "Missing parameter: client_id"}

Thrown when the supplied refresh token is invalid, expired, or has already been used.

    {  "statusCode": 400,  "message": "Invalid grant: refresh token is invalid"}

Thrown when the location is not active (Due to SaaS subscription incomplete, paused, canceled, etc. Agency manually paused location. Agency becomes inactive.). Once the location becomes active again, the same refresh token can be used to get a new access token, provided the app is still installed on the location.

    {  "statusCode": 400,  "message": "Location is not active"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Unprocessable Entity

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

Share your feedback
-------------------

★★★★★

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/oauth/token' \-H 'Content-Type: application/x-www-form-urlencoded' \-H 'Accept: application/json' \-H 'Version: v3' \-d 'client_id=6578278e879ad2646715ba9c' \-d 'client_secret=ab12dc0ae1234a7898f9ff06d4f69gh' \-d 'grant_type=authorization_code' \-d 'code=ab12dc0ae1234a7898f9ff06d4f69gh' \-d 'refresh_token=xy34dc0ae1234a4858f9ff06d4f66ba' \-d 'user_type=Location' \-d 'redirect_uri=https%3A%2F%2Fmyapp.com%2Foauth%2Fcallback%2Fcrm'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

Version — headerrequired\---v3

Body required

*   Example (from schema)

client_idrequired

client_secretrequired

grant_typerequired\---authorization_coderefresh_tokenclient_credentials

code

refresh_token

user_type\---CompanyLocation

redirect_uri

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
