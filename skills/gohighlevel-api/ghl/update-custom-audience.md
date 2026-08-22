# Update custom audience

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-update-custom-audience
- **Summary:** Update name or description of a Facebook custom audience

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-update-custom-audience#__docusaurus_skipToContent_fallback)

Version: v3

Update custom audience
======================

PUT 

https://services.leadconnectorhq.com/ad-publishing/facebook/custom-audience/:audienceId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update name or description of a Facebook custom audience

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-update-custom-audience#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**audienceId** stringrequired

Custom audience identifier

**Example:** `23851234567890123`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**name**stringrequired

Audience name

**Example:** `My Custom Audience`

**description**string

Audience description

**Example:** `Lookalike audience from website visitors`

    {  "locationId": "HChooFuiyPpVYzeJ4HMe",  "name": "My Custom Audience",  "description": "Lookalike audience from website visitors"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-update-custom-audience#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/facebook/custom-audience/23851234567890123' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "HChooFuiyPpVYzeJ4HMe",  "name": "My Custom Audience",  "description": "Lookalike audience from website visitors"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

audienceId — pathrequired

Version — headerrequired\---2021-07-28

Body required

{
  "locationId": "HChooFuiyPpVYzeJ4HMe",  "name": "My Custom Audience",  "description": "Lookalike audience from website visitors"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
