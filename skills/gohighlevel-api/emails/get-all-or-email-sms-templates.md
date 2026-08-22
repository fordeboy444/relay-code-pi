# GET all or email/sms templates

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/get-all-or-email-sms-templates
- **Summary:** GET all or email/sms templates

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-all-or-email-sms-templates#__docusaurus_skipToContent_fallback)

Version: v3

GET all or email/sms templates
==============================

GET 

https://services.leadconnectorhq.com/locations/:locationId/templates

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

GET all or email/sms templates

### Requirements

#### Scope(s)

`locations/templates.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-all-or-email-sms-templates#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

### Query Parameters

**deleted** boolean

Default value:`false`

**Example:** `false`

**skip** string

Default value:`0`

**Example:** `1`

**limit** string

Default value:`25`

**Example:** `25`

**type** string

**Possible values:** \[`sms`, `email`, `whatsapp`\]

**originId** stringrequired

Origin Id

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-all-or-email-sms-templates#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**templates** object\[\]

*   Array \[\
    \
oneOf\
\
*   GetSmsTemplateResponseSchema\
*   GetEmailTemplateResponseSchema\
\
**id**string\
\
**Example:** `2yMwhgTNO19bpintqrap`\
\
**name**string\
\
**Example:** `sms template`\
\
**type**string\
\
**Example:** `sms`\
\
**template** object\
\
**body**string\
\
**Example:** `sms body`\
\
**attachments**array\[\]\
\
**Example:** `[]`\
\
**dateAdded**string\
\
**Example:** `2022-01-27T12:31:19.679Z`\
\
**locationId**string\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**urlAttachments**string\[\]\
\
**Example:** `[]`\
\
*   \]
    

**totalCount**number

**Example:** `100`

    {  "templates": [    {      "id": "2yMwhgTNO19bpintqrap",      "name": "sms template",      "type": "sms",      "template": {        "body": "sms body",        "attachments": []      },      "dateAdded": "2022-01-27T12:31:19.679Z",      "locationId": "ve9EPM428h8vShlRW1KT",      "urlAttachments": []    },    {      "id": "2yMwhgTNO19bpintqrap",      "name": "email template",      "type": "email",      "dateAdded": "2022-01-27T12:31:19.679Z",      "template": {        "subject": "subject text",        "attachments": [],        "html": "<html><head><style>body{font-family: sans-serif;}</style></head><body>testing</body></html>"      },      "locationId": "ve9EPM428h8vShlRW1KT"    }  ],  "totalCount": 100}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scopes:** `locations/templates.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/templates?deleted=false&skip=0&limit=25&originId=ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

originId — queryrequired

Version — headerrequired\---v3

Show optional parameters

deleted — query\---truefalse

skip — query

limit — query

type — query\---smsemailwhatsapp

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
