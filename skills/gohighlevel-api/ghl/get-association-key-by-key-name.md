# Get association key by key name

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/associations/get-association-key-by-key-name
- **Summary:** Using this api you can get standard / user defined association by key

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/associations/get-association-key-by-key-name#__docusaurus_skipToContent_fallback)

Version: v3

Get association key by key name
===============================

GET 

https://services.leadconnectorhq.com/associations/key/:key_name

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Using this api you can get standard / user defined association by key

### Requirements

#### Scope(s)

`associations.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/associations/get-association-key-by-key-name#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**key_name** stringrequired

### Query Parameters

**locationId** stringrequired

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/associations/get-association-key-by-key-name#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**locationId**stringrequired

**Example:** `string`

**id**stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**key**stringrequired

First Objects Association Label (custom_objects.children)

**Example:** `student`

**firstObjectLabel**objectrequired

First Objects Association Label (custom_objects.children)

**Example:** `student`

**firstObjectKey**objectrequired

First Objects Key

**Example:** `custom_objects.children`

**secondObjectLabel**objectrequired

Second Object Association Label (contact)

**Example:** `Teacher`

**secondObjectKey**objectrequired

Second Objects Key

**Example:** `contact`

**associationType**objectrequired

Association Type can be USER_DEFINED or SYSTEM_DEFINED

**Example:** `USER_DEFINED`

    {  "locationId": "string",  "id": "ve9EPM428h8vShlRW1KT",  "key": "student",  "firstObjectLabel": "student",  "firstObjectKey": "custom_objects.children",  "secondObjectLabel": "Teacher",  "secondObjectKey": "contact",  "associationType": "USER_DEFINED"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/associations/associations-api#authentication)
**type:** http**scopes:** `associations.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/associations/key/:key_name' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

key_name — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
