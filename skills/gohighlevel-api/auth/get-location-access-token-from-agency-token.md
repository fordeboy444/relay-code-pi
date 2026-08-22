# Get Location Access Token from Agency Token

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token
- **Summary:** This API allows you to generate locationAccessToken from AgencyAccessToken

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token#__docusaurus_skipToContent_fallback)

Version: v3New

Get Location Access Token from Agency Token

POST 

https://services.leadconnectorhq.com/oauth/location-token

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

This API allows you to generate locationAccessToken from AgencyAccessToken

### Requirements

#### Scope(s)

`oauth.write`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/x-www-form-urlencoded

*   Body
*   Example (auto)

### Body**required**

**companyId**stringrequired

Company Id of location you want to request token for

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

**locationId**stringrequired

The location ID for which you want to obtain accessToken

**Example:** `l1C08ntBrFjLS0elLIYU`

    {  "companyId": "tDtDnQdgm2LXpyiqYvZ6",  "locationId": "l1C08ntBrFjLS0elLIYU"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/oauth/get-location-access-token#responses "Direct link to Responses")

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

Location access token which can be used to authenticate & authorize API under following scope

**Example:** `ab12dc0ae1234a7898f9ff06d4f69gh`

**token_type**string

The token type (always Bearer)

**Example:** `Bearer`

**expires_in**number

Time in seconds remaining for token to expire

**Example:** `86399`

**scope**string

Scopes the following accessToken have access to

**Example:** `conversations/message.readonly conversations/message.write`

**locationId**string

Location ID - Present only for Sub-Account Access Token

**Example:** `l1C08ntBrFjLS0elLIYU`

**planId**string

Plan Id of the subscribed plan in paid apps.

**Example:** `l1C08ntBrFjLS0elLIYU`

**userId**stringrequired

USER ID - Represent user id of person who performed installation

**Example:** `l1C08ntBrFjLS0elLIYU`

**appId**string

App ID of the installed application

**Example:** `6578278e879ad2646715ba9c`

**versionId**string

Version ID of the installed app version

**Example:** `6578278e879ad2646715ba9c`

**refresh_token**string

The OAuth2 refresh token used to obtain a new access token for this specific location.

**Example:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30`

    {  "access_token": "ab12dc0ae1234a7898f9ff06d4f69gh",  "token_type": "Bearer",  "expires_in": 86399,  "scope": "conversations/message.readonly conversations/message.write",  "locationId": "l1C08ntBrFjLS0elLIYU",  "planId": "l1C08ntBrFjLS0elLIYU",  "userId": "l1C08ntBrFjLS0elLIYU",  "appId": "6578278e879ad2646715ba9c",  "versionId": "6578278e879ad2646715ba9c",  "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/oauth/oauth-2-0-v-3#authentication)
**type:** http**scopes:** `oauth.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/oauth/location-token' \-H 'Content-Type: application/x-www-form-urlencoded' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d 'companyId=tDtDnQdgm2LXpyiqYvZ6' \-d 'locationId=l1C08ntBrFjLS0elLIYU'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

*   Example (from schema)

companyIdrequired

locationIdrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
