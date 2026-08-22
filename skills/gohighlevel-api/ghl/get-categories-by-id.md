# Get categories by id

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-id
- **Summary:** Retrieve a specific category by its ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-id#__docusaurus_skipToContent_fallback)

Version: v3

Get categories by id
====================

GET 

https://services.leadconnectorhq.com/social-media-posting/:locationId/categories/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve a specific category by its ID

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-id#request "Direct link to request")

### Header Parameters

**Authorization** stringrequired

Access Token

**Example:** `Bearer 9c48df2694a849b6089f9d0d3513efe`

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**id** stringrequired

Category Id

**Example:** `6284c43d519161e96cc09c13`

**locationId** stringrequired

Location Id

**Example:** `6284c43d519161e96cc09c13`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-id#responses "Direct link to Responses")

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

**Example:** `Fetched Category`

**results** object

Requested Results

**category** object

Category Schema

**name**string

Category Name

**Example:** `Primary`

**primaryColor**string

Color For Category

**Example:** `#32a852`

**secondaryColor**string

Secondary Color

**Example:** `#32a852`

**locationId**string

Location ID

**Example:** `Lx1EI6YIgQYMQi0ytFXv`

**_id**string

ID

**Example:** `Lx1EI6YIgQYMQi0ytFXv`

**createdBy**string

Created By User

**Example:** `Lx1EI6YIgQYMQi0ytFXv`

**deleted**booleanrequired

Deleted Value

**Example:** `false`

**message**string

Message

**Example:** `Category not found`

**createdAt**string<date-time>

**Example:** `2023-08-02T00:00:00.000Z`

**updatedAt**string<date-time>

**Example:** `2023-08-02T00:00:00.000Z`

    {  "success": true,  "statusCode": 200,  "message": "Fetched Category",  "results": {    "category": {      "name": "Primary",      "primaryColor": "#32a852",      "secondaryColor": "#32a852",      "locationId": "Lx1EI6YIgQYMQi0ytFXv",      "_id": "Lx1EI6YIgQYMQi0ytFXv",      "createdBy": "Lx1EI6YIgQYMQi0ytFXv",      "deleted": false,      "message": "Category not found",      "createdAt": "2023-08-02T00:00:00.000Z",      "updatedAt": "2023-08-02T00:00:00.000Z"    }  }}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/6284c43d519161e96cc09c13/categories/6284c43d519161e96cc09c13' \-H 'Accept: application/json' \-H 'Authorization: Bearer 9c48df2694a849b6089f9d0d3513efe' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

locationId — pathrequired

Authorization — headerrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
