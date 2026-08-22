# Get all categories with their queue status

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-available-categories
- **Summary:** Returns categories with status: 'available' (no queue), 'in_queue' (active/paused queue), or 'draft' (queue in draft).

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-available-categories#__docusaurus_skipToContent_fallback)

Version: v3

Get all categories with their queue status

GET 

https://services.leadconnectorhq.com/social-media-posting/category/queues/available-categories

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Returns categories with status: "available" (no queue), "in_queue" (active/paused queue), or "draft" (queue in draft).

### Requirements

#### Scope(s)

`socialplanner/category.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-available-categories#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `609e126a1c4ae1001291e1b5`

**skip** string

Number of items to skip

**Example:** `0`

**limit** string

Maximum number of items to return

**Example:** `10`

**q** string

Search query

**Example:** `Marketing`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-available-categories#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Available categories fetched successfully.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

**Example:** `true`

**statusCode**numberrequired

**Example:** `200`

**results** objectrequired

**message**string

**Example:** `Available categories fetched successfully`

**categories** object\[\]

List of categories with queue status

*   Array \[\
    \
\
**deleted**boolean\
\
Indicates if deleted\
\
**Example:** `false`\
\
**_id**string\
\
Category ID\
\
**Example:** `65cb3d2f68baa617aa0c286e`\
\
**name**string\
\
Category name\
\
**Example:** `Facebook Reel`\
\
**locationId**string\
\
Location ID\
\
**Example:** `fvg1TXIiVxGcdOaL0riG`\
\
**primaryColor**string\
\
Primary color (hex)\
\
**Example:** `#004EEB`\
\
**secondaryColor**string\
\
Secondary color (hex)\
\
**Example:** `#EFF4FF`\
\
**createdBy**string\
\
Creator user ID\
\
**Example:** `SQ6d63Va2PUbWEZ9k0TD`\
\
**createdAt**string\
\
Creation timestamp\
\
**Example:** `2024-02-13T09:58:07.129Z`\
\
**updatedAt**string\
\
Last update timestamp\
\
**Example:** `2024-02-13T09:58:07.129Z`\
\
**publishedPostsCount**number\
\
Published posts count\
\
**Example:** `80`\
\
**status**string\
\
Status: available (no queue), in_queue (active/paused), or draft\
\
**Possible values:** \[`available`, `in_queue`, `draft`\]\
\
**Example:** `in_queue`\
\
**queueDetails** objectnullable\
\
Queue details (present when in_queue or draft)\
\
**queueId**string\
\
Queue ID\
\
**Example:** `67fc07c6d7657c9aee764762`\
\
**prioritizeNewContent**boolean\
\
Prioritize new content over older content\
\
**Example:** `false`\
\
**enableFuturePosts**boolean\
\
Enable posting future content\
\
**Example:** `true`\
\
*   \]
    

**meta** object

**count**string

Total count of items

**Example:** `100`

**traceId**string

    {  "success": true,  "statusCode": 200,  "results": {    "message": "Available categories fetched successfully",    "categories": [      {        "deleted": false,        "_id": "65cb3d2f68baa617aa0c286e",        "name": "Facebook Reel",        "locationId": "fvg1TXIiVxGcdOaL0riG",        "primaryColor": "#004EEB",        "secondaryColor": "#EFF4FF",        "createdBy": "SQ6d63Va2PUbWEZ9k0TD",        "createdAt": "2024-02-13T09:58:07.129Z",        "updatedAt": "2024-02-13T09:58:07.129Z",        "publishedPostsCount": 80,        "status": "in_queue",        "queueDetails": {          "queueId": "67fc07c6d7657c9aee764762",          "prioritizeNewContent": false,          "enableFuturePosts": true        }      }    ],    "meta": {      "count": "100"    }  },  "traceId": "string"}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/category/queues/available-categories?locationId=609e126a1c4ae1001291e1b5&skip=0&limit=10&q=Marketing' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

skip — query

limit — query

q — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
