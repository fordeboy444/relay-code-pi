# Update Link

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/links/update-link
- **Summary:** Update Link

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/links/update-link#__docusaurus_skipToContent_fallback)

Version: v3

Update Link
===========

PUT 

https://services.leadconnectorhq.com/links/:linkId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update Link

### Requirements

#### Scope(s)

`links.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/links/update-link#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**linkId** stringrequired

Link Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

Display name of the trigger link

**Example:** `first tag`

**redirectTo**stringrequired

URL or variable to redirect to when the trigger link is clicked

**Example:** `https://www.google.com/`

    {  "name": "first tag",  "redirectTo": "https://www.google.com/"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/links/update-link#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/links/ve9EPM428h8vShlRW1KT' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "first tag",  "redirectTo": "https://www.google.com/"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

linkId — pathrequired

Version — headerrequired\---v3

Body required

{
  "name": "first tag",  "redirectTo": "https://www.google.com/"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
