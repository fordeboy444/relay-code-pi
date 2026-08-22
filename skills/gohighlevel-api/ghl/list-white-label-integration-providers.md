# List White-label Integration Providers

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/list-integration-providers
- **Summary:** The 'List White-label Integration Providers' API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/list-integration-providers#__docusaurus_skipToContent_fallback)

Version: v3

List White-label Integration Providers
======================================

GET 

https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "List White-label Integration Providers" API allows to retrieve a paginated list of integration providers. Customize your results by filtering whitelabel integration providers(which are built directly on top of Authorize.net or NMI) based on name or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve integration provider information.

### Requirements

#### Scope(s)

`payments/integration.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-integration-providers#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**altId** stringrequired

location Id / company Id based on altType

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

Alt Type

**Example:** `location`

**limit** number

The maximum number of items to be included in a single page of results

Default value:`0`

**Example:** `20`

**offset** number

The starting index of the page, indicating the position from which the results should be retrieved.

Default value:`0`

**Example:** `0`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-integration-providers#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**providers** objectrequired

list of integration provider.

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

    {  "providers": {    "_id": "65cb47dda50f4f13ced4b870",    "altId": "Z4Bxl8J4SaPEPLq9IQ8g",    "altType": "location",    "title": "Example",    "route": "epd",    "provider": "nmi",    "description": "Lorem",    "imageUrl": "https://example.com/assets/pmd/img/payments/nmi-logo.webp",    "createdAt": "2024-02-13T10:43:41.026Z",    "updatedAt": "2024-02-13T10:43:41.026Z"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
**type:** http**scopes:** `payments/integration.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/payments/integrations/provider/whitelabel?altId=6578278e879ad2646715ba9c&altType=location' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Show optional parameters

limit — query

offset — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
