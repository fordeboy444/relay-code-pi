# Get tag by id

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/get-tag-by-id
- **Summary:** Get tag by id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-tag-by-id#__docusaurus_skipToContent_fallback)

Version: v3

Get tag by id
=============

GET 

https://services.leadconnectorhq.com/locations/:locationId/tags/:tagId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get tag by id

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-tag-by-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**tagId** stringrequired

Tag Id

**Example:** `flGwEuzsfJOia1i1ikRN`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-tag-by-id#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**tag** object

**name**string

**Example:** `minim aliquip anim`

**locationId**string

**Example:** `ve9EPM428h8vShlRW1KT`

**id**string

**Example:** `flGwEuzsfJOia1i1ikRN`

    {  "tag": {    "name": "minim aliquip anim",    "locationId": "ve9EPM428h8vShlRW1KT",    "id": "flGwEuzsfJOia1i1ikRN"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
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

    curl -L 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/tags/flGwEuzsfJOia1i1ikRN' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

tagId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
