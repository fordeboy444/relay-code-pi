# Delete page connection

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-page
- **Summary:** Remove a Facebook page connection from a location

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-page#__docusaurus_skipToContent_fallback)

Version: v3

Delete page connection
======================

DELETE 

https://services.leadconnectorhq.com/ad-publishing/facebook/page

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Remove a Facebook page connection from a location

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-page#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**pageId** stringrequired

Facebook page ID

**Example:** `123456789`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-page#responses "Direct link to Responses")

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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/ad-publishing/facebook/page?locationId=loc_abc123&pageId=123456789' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

pageId — queryrequired

Version — headerrequired\---2021-07-28

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
