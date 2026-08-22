# Create Shipping Carrier

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/store/create-shipping-carrier
- **Summary:** The 'Create Shipping Carrier' API allows adding a new shipping carrier.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/store/create-shipping-carrier#__docusaurus_skipToContent_fallback)

Version: v3

Create Shipping Carrier
=======================

POST 

https://services.leadconnectorhq.com/store/shipping-carrier

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Create Shipping Carrier" API allows adding a new shipping carrier.

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/store/create-shipping-carrier#request "Direct link to request")

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**name**stringrequired

Name of the shipping carrier

**Example:** `FedEx`

**callbackUrl**stringrequired

The URL endpoint that CRM needs to retrieve shipping rates. This must be a public URL.

**Example:** `https://example.com/get-shipping-rates`

**services** object\[\]

An array of available shipping carrier services

*   Array \[\
    \
\
**name**stringrequired\
\
Name of the shipping carrier service\
\
**Example:** `Priority Mail Express International`\
\
**value**stringrequired\
\
Value of the shipping carrier service\
\
**Example:** `PriorityMailExpressInternational`\
\
*   \]
    

**allowsMultipleServiceSelection**boolean

The seller can choose multiple services while creating shipping rates if this is true.

**Example:** `true`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "name": "FedEx",  "callbackUrl": "https://example.com/get-shipping-rates",  "services": [    {      "name": "Priority Mail Express International",      "value": "PriorityMailExpressInternational"    }  ],  "allowsMultipleServiceSelection": true}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/store/create-shipping-carrier#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**booleanrequired

Status of api action

**Example:** `true`

**message**string

Success message

**Example:** `Successfully created`

**data** objectrequired

Shipping carrier data

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**name**stringrequired

Name of the shipping carrier

**Example:** `FedEx`

**callbackUrl**stringrequired

The URL endpoint that CRM needs to retrieve shipping rates. This must be a public URL.

**Example:** `https://example.com/get-shipping-rates`

**services** object\[\]

An array of available shipping carrier services

*   Array \[\
    \
\
**name**stringrequired\
\
Name of the shipping carrier service\
\
**Example:** `Priority Mail Express International`\
\
**value**stringrequired\
\
Value of the shipping carrier service\
\
**Example:** `PriorityMailExpressInternational`\
\
*   \]
    

**allowsMultipleServiceSelection**boolean

The seller can choose multiple services while creating shipping rates if this is true.

**Example:** `true`

**_id**stringrequired

The unique identifier for the product.

**Example:** `655b33a82209e60b6adb87a5`

**marketplaceAppId**stringrequired

The unique identifier for the marketplace app.

**Example:** `655b33a82209e60b6adb87a5`

**createdAt**stringrequired

created at

**Example:** `2023-12-12T09:27:42.355Z`

**updatedAt**stringrequired

updated at

**Example:** `2023-12-12T09:27:42.355Z`

    {  "status": true,  "message": "Successfully created",  "data": {    "altId": "6578278e879ad2646715ba9c",    "altType": "location",    "name": "FedEx",    "callbackUrl": "https://example.com/get-shipping-rates",    "services": [      {        "name": "Priority Mail Express International",        "value": "PriorityMailExpressInternational"      }    ],    "allowsMultipleServiceSelection": true,    "_id": "655b33a82209e60b6adb87a5",    "marketplaceAppId": "655b33a82209e60b6adb87a5",    "createdAt": "2023-12-12T09:27:42.355Z",    "updatedAt": "2023-12-12T09:27:42.355Z"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/store/store-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/store/shipping-carrier' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "name": "FedEx",  "callbackUrl": "https://example.com/get-shipping-rates",  "services": [    {      "name": "Priority Mail Express International",      "value": "PriorityMailExpressInternational"    }  ],  "allowsMultipleServiceSelection": true}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "name": "FedEx",  "callbackUrl": "https://example.com/get-shipping-rates",  "services": \[    {      "name": "Priority Mail Express International",      "value": "PriorityMailExpressInternational"    }  \],  "allowsMultipleServiceSelection": true
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
