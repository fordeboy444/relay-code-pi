# Get keyword ideas

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-keyword-ideas
- **Summary:** Retrieve keyword suggestions for Google Ads campaigns

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-keyword-ideas#__docusaurus_skipToContent_fallback)

Version: v3

Get keyword ideas
=================

POST 

https://services.leadconnectorhq.com/ad-publishing/google/keyword-ideas

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve keyword suggestions for Google Ads campaigns

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-keyword-ideas#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**isDraft** boolean

Is draft

**Example:** `true`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**url**stringrequired

Target URL

**Example:** `https://example.com`

**languageCode**string

Language code

**Example:** `en`

**locations**string\[\]

Target locations

**Example:** `["US","CA"]`

**keywords**string\[\]

Seed keywords

**Example:** `["marketing"]`

    {  "url": "https://example.com",  "languageCode": "en",  "locations": [    "US",    "CA"  ],  "keywords": [    "marketing"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-keyword-ideas#responses "Direct link to Responses")

*   201
*   400
*   401
*   422
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/keyword-ideas?locationId=HChooFuiyPpVYzeJ4HMe&isDraft=true' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "url": "https://example.com",  "languageCode": "en",  "locations": [    "US",    "CA"  ],  "keywords": [    "marketing"  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

isDraft — query\---truefalse

Body required

{
  "url": "https://example.com",  "languageCode": "en",  "locations": \[    "US",    "CA"  \],  "keywords": \[    "marketing"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
