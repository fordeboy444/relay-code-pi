# Disconnect existing provider config

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/disconnect-config
- **Summary:** API to disconnect an existing payment config for given location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/disconnect-config#__docusaurus_skipToContent_fallback)

Version: v3

Disconnect existing provider config
===================================

POST 

https://services.leadconnectorhq.com/payments/custom-provider/disconnect

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to disconnect an existing payment config for given location

### Requirements

#### Scope(s)

`payments/custom-provider.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/disconnect-config#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

Location id

**Example:** `Lk3nlfk4lxlelVEwcW`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**liveMode**booleanrequired

Whether the config is for test mode or live mode. true represents config is for live payments

**Example:** `true`

    {  "liveMode": "true"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/disconnect-config#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Whether the custom provider config is disconnect or not. true represents config is disconnect

**Example:** `true`

    {  "success": "true"}

No such config exists for given locationId and marketplaceAppId

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

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
**type:** http**scopes:** `payments/custom-provider.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/payments/custom-provider/disconnect?locationId=Lk3nlfk4lxlelVEwcW' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "liveMode": "true"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Body required

{
  "liveMode": "true"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
