# Get Links

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/links/get-links
- **Summary:** Get Links

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/links/get-links#__docusaurus_skipToContent_fallback)

Version: v3

Get Links
=========

GET 

https://services.leadconnectorhq.com/links/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Links

### Requirements

#### Scope(s)

`links.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/links/get-links#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**locationId** stringrequired

Location ID of the business profile

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/links/get-links#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**links** object\[\]

List of trigger links

*   Array \[\
    \
\
**id**string\
\
Unique identifier of the trigger link\
\
**Example:** `n4AriwEnFrGh3tu08W0U`\
\
**name**string\
\
Display name of the trigger link\
\
**Example:** `first tag`\
\
**redirectTo**string\
\
URL or variable to redirect to when the trigger link is clicked\
\
**Example:** `https://www.google.com/`\
\
**fieldKey**string\
\
Template variable key used to reference this trigger link\
\
**Example:** `{{trigger_link.n4AriwEnFrGh3tu08W0U}}`\
\
**locationId**string\
\
Location ID this trigger link belongs to\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
*   \]
    

    {  "links": [    {      "id": "n4AriwEnFrGh3tu08W0U",      "name": "first tag",      "redirectTo": "https://www.google.com/",      "fieldKey": "{{trigger_link.n4AriwEnFrGh3tu08W0U}}",      "locationId": "ve9EPM428h8vShlRW1KT"    }  ]}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/links/trigger-links-api#authentication)
**type:** http**scopes:** `links.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/links/?locationId=ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
