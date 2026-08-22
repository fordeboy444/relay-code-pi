# Allow Attach Rebilling

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/allow-attach-rebilling
- **Summary:** Marks a SaaS sub-account as awaiting rebilling attach and optionally stores the rebilling configuration that should be applied when the rebilling config is created. Sets payment_pending on the sub-account. Only allowed when the sub-account is in setup_pending state.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/allow-attach-rebilling#__docusaurus_skipToContent_fallback)

Version: v3

Allow Attach Rebilling
======================

POST 

https://services.leadconnectorhq.com/saas/allow-attach-rebilling/:locationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Marks a SaaS sub-account as awaiting rebilling attach and optionally stores the rebilling configuration that should be applied when the rebilling config is created. Sets payment_pending on the sub-account. Only allowed when the sub-account is in setup_pending state.

### Requirements

#### Scope(s)

`saas/company.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/allow-attach-rebilling#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID (Sub-account) to allow attach rebilling for

**Example:** `AUKAtFVo0lWezBsBQ3FE`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**companyId**stringrequired

Company ID owning the location

**Example:** `5DP4iH6HLkQsiKESj6rh`

**attachedRebillingConfig** object

Map of rebilling product code to its config. When provided, this gets stored on the sub-account so it can be applied when the rebilling config is created. Omit to only mark the sub-account as awaiting rebilling attach without any pre-configured products. Possible product keys: `contentAI`, `workflow_premium_actions`, `workflow_ai`, `conversationAI`, `whatsApp`, `reviewsAI`, `EmailVerification`, `funnelAI`, `domainPurchase`, `Phone`, `Email`, `agentStudio`, `askai`, `aiStudio`.

**property name\*** AttachedRebillingProductConfigDto

**enabled**booleanrequired

Enable rebilling for this product

**Example:** `true`

**markup**numberrequired

Markup multiplier applied on top of the base price, from 1 (1x) to 10 (10x). For domainPurchase the maximum is 3 (3x). Converted internally to a percentage markup (e.g. 2 -> 100%, 3 -> 200%).

**Example:** `3`

**price**number

Base price per unit (only applicable for usage based products like EmailVerification, agentStudio, contentAI)

**Example:** `0.0025`

    {  "companyId": "5DP4iH6HLkQsiKESj6rh",  "attachedRebillingConfig": {    "EmailVerification": {      "enabled": true,      "markup": 4,      "price": 0.0025    },    "Phone": {      "enabled": true,      "markup": 3    },    "agentStudio": {      "enabled": true,      "markup": 8,      "price": 0.25    },    "contentAI": {      "enabled": true,      "markup": 5,      "price": 0.09    },    "domainPurchase": {      "enabled": true,      "markup": 3    }  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/saas-api/allow-attach-rebilling#responses "Direct link to Responses")

*   200
*   400
*   401
*   404
*   422
*   500

Allow attach rebilling completed successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Indicates if the allow attach rebilling operation succeeded

**Example:** `true`

**locationId**stringrequired

Location ID the rebilling config was attached to

**Example:** `AUKAtFVo0lWezBsBQ3FE`

**attachedRebillingConfig** objectrequired

Stored rebilling configuration on the location. Markup is the internal percentage value converted from the request multiplier (e.g. 4 -> 300%, 3 -> 200%).

**property name\*** AttachedRebillingProductConfigDto

**enabled**booleanrequired

Enable rebilling for this product

**Example:** `true`

**markup**numberrequired

Markup multiplier applied on top of the base price, from 1 (1x) to 10 (10x). For domainPurchase the maximum is 3 (3x). Converted internally to a percentage markup (e.g. 2 -> 100%, 3 -> 200%).

**Example:** `3`

**price**number

Base price per unit (only applicable for usage based products like EmailVerification, agentStudio, contentAI)

**Example:** `0.0025`

    {  "success": true,  "locationId": "AUKAtFVo0lWezBsBQ3FE",  "attachedRebillingConfig": {    "EmailVerification": {      "enabled": true,      "markup": 300,      "price": 0.0025    },    "Phone": {      "enabled": true,      "markup": 200    }  }}

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

Resource not found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

Status code

**Example:** `404`

**message**string

Error message

**Example:** `["Contact not found","User not found","Group not found","Channel not found"]`

    {  "statusCode": 404,  "message": [    "Contact not found",    "User not found",    "Group not found",    "Channel not found"  ]}

Unprocessable entity (e.g. sub-account already in saas mode activated, or not in setup_pending state)

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Internal server error

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

Status code

**Example:** `500`

**message**string

Error message

**Example:** `Internal Server Error`

    {  "statusCode": 500,  "message": "Internal Server Error"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/saas-api/saas-api#authentication)
**type:** http**scopes:** `saas/company.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/saas/allow-attach-rebilling/AUKAtFVo0lWezBsBQ3FE' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "companyId": "5DP4iH6HLkQsiKESj6rh",  "attachedRebillingConfig": {    "EmailVerification": {      "enabled": true,      "markup": 4,      "price": 0.0025    },    "Phone": {      "enabled": true,      "markup": 3    },    "agentStudio": {      "enabled": true,      "markup": 8,      "price": 0.25    },    "contentAI": {      "enabled": true,      "markup": 5,      "price": 0.09    },    "domainPurchase": {      "enabled": true,      "markup": 3    }  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Body required

{
  "companyId": "5DP4iH6HLkQsiKESj6rh",  "attachedRebillingConfig": {    "EmailVerification": {      "enabled": true,      "markup": 4,      "price": 0.0025    },    "Phone": {      "enabled": true,      "markup": 3    },    "agentStudio": {      "enabled": true,      "markup": 8,      "price": 0.25    },    "contentAI": {      "enabled": true,      "markup": 5,      "price": 0.09    },    "domainPurchase": {      "enabled": true,      "markup": 3    }  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
