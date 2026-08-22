# Start CSV Finalize

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-csv-finalize
- **Summary:** Finalize a CSV import and schedule all posts for publishing

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-csv-finalize#__docusaurus_skipToContent_fallback)

Version: v3

Start CSV Finalize
==================

PATCH 

https://services.leadconnectorhq.com/social-media-posting/:locationId/csv/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Finalize a CSV import and schedule all posts for publishing

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-csv-finalize#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**id** stringrequired

CSV Id

**Example:** `65f92e55cc884f0d0845e447`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**userId**stringrequired

User ID

**Example:** `sdfdsfdsfEWEsdfsdsW32dd`

    {  "userId": "sdfdsfdsfEWEsdfsdsW32dd"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/start-csv-finalize#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success or Failure

**Example:** `true`

**statusCode**numberrequired

Status Code

**Example:** `200`

**message**stringrequired

Message

**Example:** `Updated Successfully`

    {  "success": true,  "statusCode": 200,  "message": "Updated Successfully"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PATCH 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/csv/65f92e55cc884f0d0845e447' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "userId": "sdfdsfdsfEWEsdfsdsW32dd"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

id — pathrequired

Version — headerrequired\---v3

Body required

{
  "userId": "sdfdsfdsfEWEsdfsdsW32dd"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
