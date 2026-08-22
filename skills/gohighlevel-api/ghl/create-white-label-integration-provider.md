# Create White-label Integration Provider

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration-provider
- **Summary:** The 'Create White-label Integration Provider' API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration-provider#__docusaurus_skipToContent_fallback)

Version: v3

Create White-label Integration Provider
=======================================

POST 

https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Create White-label Integration Provider" API allows adding a new payment provider integration to the system which is built on top of Authorize.net or NMI. Use this endpoint to create a integration provider with the specified details. Ensure that the required information is provided in the request payload. This endpoint can be only invoked using marketplace-app token

### Requirements

#### Scope(s)

`payments/integration.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration-provider#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

location Id / company Id based on altType

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

Alt Type

**Possible values:** \[`location`\]

**Example:** `location`

**uniqueName**stringrequired

A unique name given to the integration provider, uniqueName must start and end with a character. Only lowercase characters and hyphens (-) are supported

**Example:** `easy-direct`

**title**stringrequired

The title or name of the integration provider.

**Example:** `Title`

**provider**stringrequired

The type of payment provider associated with the integration provider.

**Possible values:** \[`authorize-net`, `nmi`\]

**Example:** `{"AUTHORIZE_NET":"authorize-net","NMI":"nmi"}`

**description**stringrequired

A brief description providing additional information about the integration provider.

**Example:** `Description`

**imageUrl**stringrequired

The URL to an image representing the integration provider. The imageUrl should start with "https://" and ensure that this URL is publicly accessible.

**Example:** `https://example.com/image.jpg`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "uniqueName": "easy-direct",  "title": "Title",  "provider": {    "AUTHORIZE_NET": "authorize-net",    "NMI": "nmi"  },  "description": "Description",  "imageUrl": "https://example.com/image.jpg"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/create-integration-provider#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**_id**stringrequired

The unique identifier of the integration provider.

**Example:** `65cb47dda50f4f13ced4b870`

**altId**stringrequired

The altId / locationId of the integration provider.

**Example:** `Z4Bxl8J4SaPEPLq9IQ8g`

**altType**stringrequired

The altType of the integration provider.

**Example:** `location`

**title**stringrequired

The title or name of the integration provider.

**Example:** `Example`

**route**stringrequired

The route name associated with the integration provider.

**Example:** `epd`

**provider**stringrequired

The payment provider associated with the integration provider.

**Example:** `nmi`

**description**stringrequired

A brief description providing additional information about the integration provider.

**Example:** `Lorem`

**imageUrl**stringrequired

The URL to an image representing the integration provider.

**Example:** `https://example.com/assets/pmd/img/payments/nmi-logo.webp`

**createdAt**string<date-time>required

The timestamp when the integration provider was created.

**Example:** `2024-02-13T10:43:41.026Z`

**updatedAt**string<date-time>required

The timestamp when the integration provider was last updated.

**Example:** `2024-02-13T10:43:41.026Z`

    {  "_id": "65cb47dda50f4f13ced4b870",  "altId": "Z4Bxl8J4SaPEPLq9IQ8g",  "altType": "location",  "title": "Example",  "route": "epd",  "provider": "nmi",  "description": "Lorem",  "imageUrl": "https://example.com/assets/pmd/img/payments/nmi-logo.webp",  "createdAt": "2024-02-13T10:43:41.026Z",  "updatedAt": "2024-02-13T10:43:41.026Z"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
**type:** http**scopes:** `payments/integration.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "uniqueName": "easy-direct",  "title": "Title",  "provider": {    "AUTHORIZE_NET": "authorize-net",    "NMI": "nmi"  },  "description": "Description",  "imageUrl": "https://example.com/image.jpg"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "uniqueName": "easy-direct",  "title": "Title",  "provider": {    "AUTHORIZE_NET": "authorize-net",    "NMI": "nmi"  },  "description": "Description",  "imageUrl": "https://example.com/image.jpg"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
