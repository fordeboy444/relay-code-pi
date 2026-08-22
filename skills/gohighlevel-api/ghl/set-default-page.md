# Set default page

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-set-default-page
- **Summary:** Set the default Facebook page for a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-set-default-page#__docusaurus_skipToContent_fallback)

Version: v3

Set default page
================

PUT 

https://services.leadconnectorhq.com/ad-publishing/facebook/page/default

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Set the default Facebook page for a location

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-set-default-page#request "Direct link to request")

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

**pageId**stringrequired

Facebook page identifier

**Example:** `103456789012345`

    {  "pageId": "103456789012345"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-set-default-page#responses "Direct link to Responses")

*   200
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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/facebook/page/default?locationId=HChooFuiyPpVYzeJ4HMe&isDraft=true' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "pageId": "103456789012345"}'

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
  "pageId": "103456789012345"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
