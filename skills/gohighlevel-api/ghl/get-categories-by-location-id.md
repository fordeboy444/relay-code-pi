# Get categories by location id

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-location-id
- **Summary:** Retrieve all categories for a specific location with optional search and pagination

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-location-id#__docusaurus_skipToContent_fallback)

Version: v3

Get categories by location id
=============================

GET 

https://services.leadconnectorhq.com/social-media-posting/:locationId/categories

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve all categories for a specific location with optional search and pagination

### Requirements

#### Scope(s)

`socialplanner/category.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-location-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

### Query Parameters

**searchText** string

Search text string

**Example:** `test`

**limit** string

Limit

**Example:** `10`

**skip** string

Skip

**Example:** `0`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-categories-location-id#responses "Direct link to Responses")

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

**Example:** `Fetched Categories by Location ID`

**results** object

Requested Results

**count**numberrequired

Count

**Example:** `3`

**categories** object\[\]required

Meta Data

*   Array \[\
    \
\
**name**string\
\
Category Name\
\
**Example:** `Primary`\
\
**primaryColor**string\
\
Color For Category\
\
**Example:** `#FFFFFF`\
\
**secondaryColor**string\
\
Secondary Color\
\
**Example:** `#FFFFFF`\
\
**locationId**string\
\
Location ID\
\
**Example:** `Lx1EI6YIgQYMQi0ytFXv`\
\
**_id**string\
\
ID\
\
**Example:** `Lx1EI6YIgQYMQi0ytFXv`\
\
**createdBy**string\
\
Created By User\
\
**Example:** `Lx1EI6YIgQYMQi0ytFXv`\
\
**deleted**booleanrequired\
\
Deleted Value\
\
**Example:** `false`\
\
**createdAt**string<date-time>\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
**updatedAt**string<date-time>\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
*   \]
    

    {  "success": true,  "statusCode": 200,  "message": "Fetched Categories by Location ID",  "results": {    "count": 3,    "categories": [      {        "name": "Primary",        "primaryColor": "#FFFFFF",        "secondaryColor": "#FFFFFF",        "locationId": "Lx1EI6YIgQYMQi0ytFXv",        "_id": "Lx1EI6YIgQYMQi0ytFXv",        "createdBy": "Lx1EI6YIgQYMQi0ytFXv",        "deleted": false,        "createdAt": "2023-08-02T00:00:00.000Z",        "updatedAt": "2023-08-02T00:00:00.000Z"      }    ]  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)
**type:** http**scopes:** `socialplanner/category.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/categories?searchText=test&limit=10&skip=0' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Show optional parameters

searchText — query

limit — query

skip — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
