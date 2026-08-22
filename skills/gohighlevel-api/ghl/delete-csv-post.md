# Delete CSV Post

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-csv-post
- **Summary:** Delete a specific post from a CSV import

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-csv-post#__docusaurus_skipToContent_fallback)

Version: v3

Delete CSV Post
===============

DELETE 

https://services.leadconnectorhq.com/social-media-posting/:locationId/csv/:csvId/post/:postId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Delete a specific post from a CSV import

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-csv-post#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**postId** stringrequired

CSV Post Id

**Example:** `65f92e55cc884f0d0845e447`

**csvId** stringrequired

CSV Id

**Example:** `65f92e55cc884f0d0845e447`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-csv-post#responses "Direct link to Responses")

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

**Example:** `Deleted CSV Post`

**results** object

Requested Results

**postId**stringrequired

Post Id

**Example:** `65f92e55cc884f0d0845e447`

**csv** object

CSV Data

**_id**string

CSV Id

**Example:** `65f92e55cc884f0d0845e447`

**csvFileType**string

CSV file type

**Possible values:** \[`basic`, `advance`\]

**Example:** `basic`

**mediaOptimization**boolean

Media optimization flag

**Example:** `true`

**applyWatermark**boolean

Apply watermark flag

**Example:** `false`

**status**string

CSV import status

**Possible values:** \[`pending`, `in_progress`, `completed`, `failed`, `in_review`, `importing`, `deleted`\]

**Example:** `completed`

**updatedAt**string<date-time>

Date Updated

**Example:** `2023-08-02T00:00:00.000Z`

    {  "success": true,  "statusCode": 200,  "message": "Deleted CSV Post",  "results": {    "postId": "65f92e55cc884f0d0845e447",    "csv": {      "_id": "65f92e55cc884f0d0845e447",      "status": "completed"    }  }}
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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/csv/65f92e55cc884f0d0845e447/post/65f92e55cc884f0d0845e447' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

postId — pathrequired

csvId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
