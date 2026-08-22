# Set Default Brand Voice

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/brand-boards/set-default-brand-voice
- **Summary:** Set a brand voice as the default for a location. The previous default will be unset.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/set-default-brand-voice#__docusaurus_skipToContent_fallback)

Version: v3New

Set Default Brand Voice
=======================

POST 

https://services.leadconnectorhq.com/brand-boards/locations/:locationId/brand-voices/:brandVoiceId/default

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Set a brand voice as the default for a location. The previous default will be unset.

### Requirements

#### Scope(s)

`brand-boards/voices.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/set-default-brand-voice#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID

**Example:** `oHJiAh0wDG3BzmzACVD6`

**brandVoiceId** stringrequired

Brand voice ID

**Example:** `507f1f77bcf86cd799439011`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/set-default-brand-voice#responses "Direct link to Responses")

*   200
*   400
*   401
*   403
*   404

Success

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Whether the operation was successful

**Example:** `true`

**brandVoiceId**stringrequired

Brand voice ID that was set as default

**Example:** `507f1f77bcf86cd799439011`

**traceId**string

Trace ID of request

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "success": true,  "brandVoiceId": "507f1f77bcf86cd799439011",  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

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

The token does not have access to this location

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for invalid location access

**Example:** `403`

**message**string

Error message describing the location access failure

**Example:** `The token does not have access to this location`

    {  "statusCode": 403,  "message": "The token does not have access to this location"}

Not Found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for not found

**Example:** `404`

**message**string

Error message describing the not found failure

**Example:** `Not Found`

**error**string

Error type identifier

**Example:** `The requested resource was not found`

    {  "statusCode": 404,  "message": "Not Found",  "error": "The requested resource was not found"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/brand-boards-api-v-3#authentication)
**type:** http**scopes:** `brand-boards/voices.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X POST 'https://services.leadconnectorhq.com/brand-boards/locations/oHJiAh0wDG3BzmzACVD6/brand-voices/507f1f77bcf86cd799439011/default' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

brandVoiceId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
