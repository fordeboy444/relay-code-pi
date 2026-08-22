# Delete Account

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account
- **Summary:** Delete account and account from group

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account#__docusaurus_skipToContent_fallback)

Version: v3

Delete Account
==============

DELETE 

https://services.leadconnectorhq.com/social-media-posting/:locationId/accounts/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete account and account from group

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account#request "Direct link to request")

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

Id

**Example:** `65fac446d599990d1313c1dd`

### Query Parameters

**companyId** string

Company ID

**Example:** `sdfdsfdsfEWEsdfsdsW32dd`

**userId** string

User ID

**Example:** `sdfdsfdsfEWEsdfsdsW32dd`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-account#responses "Direct link to Responses")

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

**Example:** `Deleted Account`

**results** object

Requested Results

**locationId**string

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**id**string

Id

**Example:** `65fac446d599990d1313c1dd`

    {  "success": true,  "statusCode": 200,  "message": "Deleted Account",  "results": {    "locationId": "ve9EPM428h8vShlRW1KT",    "id": "65fac446d599990d1313c1dd"  }}
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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/accounts/65fac446d599990d1313c1dd?companyId=sdfdsfdsfEWEsdfsdsW32dd&userId=sdfdsfdsfEWEsdfsdsW32dd' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

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

Show optional parameters

companyId — query

userId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
