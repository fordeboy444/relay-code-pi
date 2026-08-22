# Create Link

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/links/create-link
- **Summary:** Create Link

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/links/create-link#__docusaurus_skipToContent_fallback)

Version: v3

Create Link
===========

POST 

https://services.leadconnectorhq.com/links/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create Link

### Requirements

#### Scope(s)

`links.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/links/create-link#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location ID of the business profile

**Example:** `ve9EPM428h8vShlRW1KT`

**name**stringrequired

Display name of the trigger link

**Example:** `first tag`

**redirectTo**stringrequired

URL or variable to redirect to when the trigger link is clicked

**Example:** `https://www.google.com/`

    {  "locationId": "ve9EPM428h8vShlRW1KT",  "name": "first tag",  "redirectTo": "https://www.google.com/"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/links/create-link#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**link** object

The trigger link object

**id**string

Unique identifier of the trigger link

**Example:** `n4AriwEnFrGh3tu08W0U`

**name**string

Display name of the trigger link

**Example:** `first tag`

**redirectTo**string

URL or variable to redirect to when the trigger link is clicked

**Example:** `https://www.google.com/`

**fieldKey**string

Template variable key used to reference this trigger link

**Example:** `{{trigger_link.n4AriwEnFrGh3tu08W0U}}`

**locationId**string

Location ID this trigger link belongs to

**Example:** `ve9EPM428h8vShlRW1KT`

    {  "link": {    "id": "n4AriwEnFrGh3tu08W0U",    "name": "first tag",    "redirectTo": "https://www.google.com/",    "fieldKey": "{{trigger_link.n4AriwEnFrGh3tu08W0U}}",    "locationId": "ve9EPM428h8vShlRW1KT"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/links/trigger-links-api#authentication)
**type:** http**scopes:** `links.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/links/' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "ve9EPM428h8vShlRW1KT",  "name": "first tag",  "redirectTo": "https://www.google.com/"}'

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
  "locationId": "ve9EPM428h8vShlRW1KT",  "name": "first tag",  "redirectTo": "https://www.google.com/"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
