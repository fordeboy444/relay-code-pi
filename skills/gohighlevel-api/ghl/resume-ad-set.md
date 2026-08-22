# Resume ad set

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-adset
- **Summary:** Resume a paused Facebook ad set

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-adset#__docusaurus_skipToContent_fallback)

Version: v3

Resume ad set
=============

POST 

https://services.leadconnectorhq.com/ad-publishing/facebook/adsets/:adSetId/resume

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Resume a paused Facebook ad set

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-adset#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**adSetId** stringrequired

Ad set identifier

**Example:** `507f1f77bcf86cd799439012`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

    {  "locationId": "HChooFuiyPpVYzeJ4HMe"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-adset#responses "Direct link to Responses")

*   201
*   400
*   401
*   422
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/adsets/507f1f77bcf86cd799439012/resume' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "HChooFuiyPpVYzeJ4HMe"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

adSetId — pathrequired

Version — headerrequired\---2021-07-28

Body required

{
  "locationId": "HChooFuiyPpVYzeJ4HMe"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
