# Check if account has sufficient funds

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds
- **Summary:** Check if account has sufficient funds

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds#__docusaurus_skipToContent_fallback)

Version: v3

Check if account has sufficient funds
=====================================

GET 

https://services.leadconnectorhq.com/marketplace/billing/charges/has-funds

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Check if account has sufficient funds

### Requirements

#### Scope(s)

`charges.readonly`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds#request "Direct link to request")

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/has-funds#responses "Direct link to Responses")

*   200
*   422

Returns fund availability status

*   application/json

*   Schema
*   Example (auto)

**Schema**

**hasFunds**boolean

Indicates whether the sub-account has sufficient funds to be charged

**Example:** `true`

    {  "hasFunds": true}

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)
**type:** http**scopes:** `charges.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/marketplace/billing/charges/has-funds' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
