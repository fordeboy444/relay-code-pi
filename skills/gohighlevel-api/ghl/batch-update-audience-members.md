# Batch update audience members

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-batch-update-audience-members
- **Summary:** Add or remove members in bulk from a Facebook custom audience via CSV or smart lists

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-batch-update-audience-members#__docusaurus_skipToContent_fallback)

Version: v3

Batch update audience members
=============================

PUT 

https://services.leadconnectorhq.com/ad-publishing/facebook/custom-audience/:audienceId/member/batch

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Add or remove members in bulk from a Facebook custom audience via CSV or smart lists

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-batch-update-audience-members#request "Direct link to request")

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

**Example:** `loc_abc123`

**csvPath**string

CSV file path

**Example:** `/uploads/audience.csv`

**operationType**stringrequired

Batch operation type

**Example:** `ADD`

**smartlistIds**string\[\]

Smartlist IDs array

**Example:** `["list_1","list_2"]`

**dynamicAudience**string

Dynamic audience flag

**Example:** `true`

    {  "locationId": "loc_abc123",  "csvPath": "/uploads/audience.csv",  "operationType": "ADD",  "smartlistIds": [    "list_1",    "list_2"  ],  "dynamicAudience": "true"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-batch-update-audience-members#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/facebook/custom-audience/23851234567890123/member/batch' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "loc_abc123",  "csvPath": "/uploads/audience.csv",  "operationType": "ADD",  "smartlistIds": [    "list_1",    "list_2"  ],  "dynamicAudience": "true"}'

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
  "locationId": "loc_abc123",  "csvPath": "/uploads/audience.csv",  "operationType": "ADD",  "smartlistIds": \[    "list_1",    "list_2"  \],  "dynamicAudience": "true"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
