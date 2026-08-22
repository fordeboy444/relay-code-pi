# List number pools

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/phone-system/get-number-pool-list
- **Summary:** Returns number pools for the location. Requires locationId as a query parameter.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/phone-system/get-number-pool-list#__docusaurus_skipToContent_fallback)

Version: v3

List number pools
=================

GET 

https://services.leadconnectorhq.com/phone-system/number-pools

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Returns number pools for the location. Requires locationId as a query parameter.

### Requirements

#### Scope(s)

`numberpools.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/get-number-pool-list#request "Direct link to request")

### Query Parameters

**locationId** stringrequired

Location ID to scope the number pool list

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/get-number-pool-list#responses "Direct link to Responses")

*   200

List of number pools for the location.

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/phone-system/lc-phone-api-v-3#authentication)
**type:** http**scopes:** `numberpools.read`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/phone-system/number-pools?locationId=ve9EPM428h8vShlRW1KT' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
