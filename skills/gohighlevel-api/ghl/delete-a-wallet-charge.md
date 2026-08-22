# Delete a wallet charge

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge
- **Summary:** Delete a wallet charge

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge#__docusaurus_skipToContent_fallback)

Version: v3

Delete a wallet charge
======================

DELETE 

https://services.leadconnectorhq.com/marketplace/billing/charges/:chargeId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete a wallet charge

### Requirements

#### Scope(s)

`charges.write`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge#request "Direct link to request")

### Path Parameters

**chargeId** stringrequired

ID of the charge to delete

**Example:** `charge_123`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/delete-charge#responses "Direct link to Responses")

*   200
*   404
*   422

Charge deleted successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**boolean

Indicates whether the charge was deleted successfully

**Example:** `true`

    {  "success": true}

Charge not found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**message**string

Error message describing why the charge was not found

**Example:** `Charge not found`

**statusCode**number

HTTP status code

**Example:** `404`

    {  "message": "Charge not found",  "statusCode": 404}

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
**type:** http**scopes:** `charges.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/marketplace/billing/charges/charge_123' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

chargeId — pathrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
