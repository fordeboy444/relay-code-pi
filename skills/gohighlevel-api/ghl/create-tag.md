# Create Tag

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/create-tag
- **Summary:** Create tag

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/create-tag#__docusaurus_skipToContent_fallback)

Version: v3

Create Tag
==========

POST 

https://services.leadconnectorhq.com/locations/:locationId/tags

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create tag

### Requirements

#### Scope(s)

`locations/tags.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/create-tag#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

Tag name

**Example:** `Tag`

    {  "name": "Tag"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/create-tag#responses "Direct link to Responses")

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
**type:** http**scopes:** `locations/tags.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/tags' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "Tag"}'

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
  "name": "Tag"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
