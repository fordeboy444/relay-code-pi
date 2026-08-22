# Get tags by ids

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-tags-by-ids
- **Summary:** Retrieve specific tags by their IDs

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-tags-by-ids#__docusaurus_skipToContent_fallback)

Version: v3

Get tags by ids
===============

POST 

https://services.leadconnectorhq.com/social-media-posting/:locationId/tags/details

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve specific tags by their IDs

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-tags-by-ids#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**tagIds**string\[\]required

Array of Tag Ids

**Example:** `["65fbdcfecc884f07e645ea8b"]`

    {  "tagIds": [    "65fbdcfecc884f07e645ea8b"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-tags-by-ids#responses "Direct link to Responses")

*   201
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

**Example:** `201`

**message**stringrequired

Message

**Example:** `Fetched Tags by Tag IDs`

**results** object

Requested Results

**tags** object\[\]required

Social Media Tag Data

*   Array \[\
    \
\
**tag**string\
\
Tag Name\
\
**Example:** `Primary Tag`\
\
**locationId**string\
\
Location Id\
\
**Example:** `Lx1EI6YIgQYMQi0ytFXv`\
\
**_id**string\
\
MongoDB document ID\
\
**Example:** `Lx1EI6YIgQYMQi0ytFXv`\
\
**createdBy**string\
\
Created By User Id\
\
**Example:** `Lx1EI6YIgQYMQi0ytFXv`\
\
**deleted**boolean\
\
Deleted boolean value\
\
**Example:** `false`\
\
**createdAt**string<date-time>\
\
Date when the record was created\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
**updatedAt**string<date-time>\
\
Date when the record was last updated\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
*   \]
    

**count**number

Count

**Example:** `3`

    {  "success": true,  "statusCode": 201,  "message": "Fetched Tags by Tag IDs",  "results": {    "tags": [      {        "tag": "Primary Tag",        "locationId": "Lx1EI6YIgQYMQi0ytFXv",        "_id": "Lx1EI6YIgQYMQi0ytFXv",        "createdBy": "Lx1EI6YIgQYMQi0ytFXv",        "deleted": false,        "createdAt": "2023-08-02T00:00:00.000Z",        "updatedAt": "2023-08-02T00:00:00.000Z"      }    ],    "count": 3  }}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/tags/details' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "tagIds": [    "65fbdcfecc884f07e645ea8b"  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Body required

{
  "tagIds": \[    "65fbdcfecc884f07e645ea8b"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
