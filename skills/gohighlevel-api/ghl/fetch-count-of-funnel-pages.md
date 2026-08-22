# Fetch count of funnel pages

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/funnels/get-pages-count-by-funnel-id
- **Summary:** Retrieves count of all funnel pages based on the given query parameters.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/funnels/get-pages-count-by-funnel-id#__docusaurus_skipToContent_fallback)

Version: v3

Fetch count of funnel pages
===========================

GET 

https://services.leadconnectorhq.com/funnels/page/count

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieves count of all funnel pages based on the given query parameters.

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/funnels/get-pages-count-by-funnel-id#request "Direct link to request")

### Query Parameters

**locationId** stringrequired

**funnelId** stringrequired

**name** string

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/funnels/get-pages-count-by-funnel-id#responses "Direct link to Responses")

*   200

Successful response - Count of funnel pages returned

*   application/json

*   Schema
*   Example (auto)

**Schema**

**count**numberrequired

**Example:** `20`

    {  "count": 20}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/funnels/funnels-api#authentication)
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

    curl -L 'https://services.leadconnectorhq.com/funnels/page/count' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

funnelId — queryrequired

Show optional parameters

name — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
