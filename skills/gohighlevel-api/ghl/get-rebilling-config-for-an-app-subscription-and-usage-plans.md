# Get rebilling config for an app subscription and usage plans

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app
- **Summary:** Get rebilling config for an app subscription and usage plans for the authenticated sub-account. This endpoint returns the subscription and usage plans for an app.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app#__docusaurus_skipToContent_fallback)

Version: v3

Get rebilling config for an app subscription and usage plans

GET 

https://services.leadconnectorhq.com/marketplace/app/:appId/rebilling-config/location/:locationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get rebilling config for an app subscription and usage plans for the authenticated sub-account. This endpoint returns the subscription and usage plans for an app.

### Requirements

#### Scope(s)

`oauth.readonly`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**appId** stringrequired

ID of the app to get rebilling config

**Example:** `6578278e879ad2646715ba9c`

**locationId** stringrequired

ID of the Sub-Account location to get rebilling config for

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/get-rebilling-config-for-app#responses "Direct link to Responses")

*   200
*   400
*   403

Successfully retrieved rebilling config for the app

*   application/json

*   Schema
*   Example (auto)

**Schema**

**plans** objectrequired

The rebilling plans configuration

**subscription** object\[\]required

Subscription plans

*   Array \[\
    \
\
**resellingAmount**numberrequired\
\
The reselling amount\
\
**Example:** `0`\
\
**baseAmount**numberrequired\
\
The base amount\
\
**Example:** `0`\
\
**planId**stringrequired\
\
The plan id\
\
**Example:** `5ae000000000000000000000`\
\
**features**string\[\]required\
\
The features\
\
**Example:** `["feature1","feature2"]`\
\
**paymentType**stringrequired\
\
The payment time\
\
**Example:** `month`\
\
**name**stringrequired\
\
The plan name\
\
**Example:** `Monthly Plan - 999`\
\
**paymentTime**stringrequired\
\
The payment time\
\
**Example:** `month`\
\
*   \]
    

**usage** object\[\]required

Usage-based plans

*   Array \[\
    \
\
**productType**stringrequired\
\
The product type\
\
**Example:** `workflow_action`\
\
**productName**stringrequired\
\
The product name\
\
**Example:** `Send Group iMessage`\
\
**usageUnit**stringrequired\
\
The usage unit for the meter\
\
**Example:** `action / message`\
\
**meterId**stringrequired\
\
The meter id\
\
**Example:** `680b97022b4a34420f5f9b93`\
\
**meterName**stringrequired\
\
The meter name\
\
**Example:** `Send Group iMessage`\
\
**fixedPricePerUnit**numberrequired\
\
The fixed price per unit, applicable for fixed price type\
\
**Example:** `0.01001`\
\
**priceType**stringrequired\
\
The price type\
\
**Possible values:** \[`fixed`, `dynamic`\]\
\
**Example:** `fixed`\
\
**minPricePerUnit**stringrequired\
\
The min price per unit, applicable for dynamic price type\
\
**Example:** `0.01001`\
\
**maxPricePerUnit**stringrequired\
\
The max price per unit, applicable for dynamic price type\
\
**Example:** `0.01001`\
\
**executionLimitPerCycle**numberrequired\
\
The execution limit per cycle\
\
**Example:** `1000`\
\
*   \]
    

    {  "plans": {    "subscription": [      {        "resellingAmount": 0,        "baseAmount": 999,        "planId": "5ae000000000000000000000",        "features": [          "feature1",          "feature2"        ],        "paymentType": "month",        "name": "Monthly Plan - 999",        "paymentTime": "month"      }    ],    "usage": [      {        "productType": "workflow_action",        "productName": "Send Group iMessage",        "usageUnit": "action / message",        "meterId": "680b97022b4a34420f5f9b93",        "meterName": "Send Group iMessage",        "fixedPricePerUnit": 0.01001,        "priceType": "fixed",        "minPricePerUnit": "0.01001",        "maxPricePerUnit": "0.01001",        "executionLimitPerCycle": 1000      }    ]  }}

Bad Request. Invalid request parameters or missing required data.

Forbidden. The client does not have necessary permissions to access installer details.

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)
**type:** http**scopes:** `oauth.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/marketplace/app/6578278e879ad2646715ba9c/rebilling-config/location/ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

appId — pathrequired

locationId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
