# Fetch List of Redirects

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/funnels/fetch-redirects-list
- **Summary:** Retrieves a list of all URL redirects based on the given query parameters.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/funnels/fetch-redirects-list#__docusaurus_skipToContent_fallback)

Version: v3

Fetch List of Redirects
=======================

GET 

https://services.leadconnectorhq.com/funnels/lookup/redirect/list

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieves a list of all URL redirects based on the given query parameters.

### Requirements

#### Scope(s)

`funnels/redirect.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/funnels/fetch-redirects-list#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**Example:** `6p2RxpgtMKQwO3E6IUaT`

**limit** numberrequired

**Example:** `20`

**offset** numberrequired

**Example:** `10`

**search** string

**Example:** `example.com/test`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/funnels/fetch-redirects-list#responses "Direct link to Responses")

*   200
*   422

Successful response - List of URL redirects returned

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data**objectrequired

Object containing the count of redirects and an array of redirect data

**Example:** `{"count":42,"data":[]}`

    {  "data": {    "count": 42,    "data": []  }}

Unprocessable Entity - The provided data is invalid or incomplete

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/funnels/funnels-api#authentication)
**type:** http**scopes:** `funnels/redirect.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/funnels/lookup/redirect/list?locationId=6p2RxpgtMKQwO3E6IUaT&limit=20&offset=10&search=example.com%2Ftest' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

limit — queryrequired

offset — queryrequired

Version — headerrequired\---v3

Show optional parameters

search — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
