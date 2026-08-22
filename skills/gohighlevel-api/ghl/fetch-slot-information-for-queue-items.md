# Fetch slot information for queue items

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-slots
- **Summary:** Returns paginated slot information (scheduledDateTime, isSkipped) for queue items. Pass sessionId to get slots for draft items, or omit for live items. Call this after mutations to refresh slot data.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-slots#__docusaurus_skipToContent_fallback)

Version: v3

Fetch slot information for queue items
======================================

POST 

https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/slots

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Returns paginated slot information (scheduledDateTime, isSkipped) for queue items. Pass sessionId to get slots for draft items, or omit for live items. Call this after mutations to refresh slot data.

### Requirements

#### Scope(s)

`socialplanner/category.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-slots#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**queueId** stringrequired

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

The location ID

**Example:** `abc123`

**sessionId**string

Session ID for edit mode. If not provided, calculates slots for live items.

**Example:** `507f1f77bcf86cd799439011`

**skip**number

Number of items to skip

**Default value:** `0`

**Example:** `0`

**limit**number

Number of items to return

**Default value:** `20`

**Example:** `20`

    {  "locationId": "abc123",  "sessionId": "507f1f77bcf86cd799439011",  "skip": 0,  "limit": 20}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-slots#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Slots fetched successfully.

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

**Example:** `Slots fetched successfully`

**slots** object\[\]

Slot information for items in the requested range

*   Array \[\
    \
\
**itemId**string\
\
The ID of the queue item\
\
**Example:** `60af88475f1b2c001f5d5f4b`\
\
**scheduledDateTime**string<date-time>nullable\
\
The updated scheduled date/time for this item\
\
**Example:** `2023-10-15T10:00:00.000Z`\
\
**isSkipped**boolean\
\
Indicates if this time slot is skipped\
\
**Example:** `false`\
\
*   \]
    

**total**number

Total number of items in the queue

**Example:** `100`

**skip**number

Number of items skipped

**Example:** `0`

**limit**number

Number of items returned

**Example:** `20`

**timezone**string

Timezone used for slot calculations

**Example:** `America/New_York`

**traceId**string

    {  "success": true,  "statusCode": 200,  "results": {    "message": "Slots fetched successfully",    "slots": [      {        "itemId": "60af88475f1b2c001f5d5f4b",        "scheduledDateTime": "2023-10-15T10:00:00.000Z",        "isSkipped": false      }    ],    "total": 100,    "skip": 0,    "limit": 20,    "timezone": "America/New_York"  },  "traceId": "string"}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/slots' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "abc123",  "sessionId": "507f1f77bcf86cd799439011",  "skip": 0,  "limit": 20}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

queueId — pathrequired

Version — headerrequired\---v3

Body required

{
  "locationId": "abc123",  "sessionId": "507f1f77bcf86cd799439011",  "skip": 0,  "limit": 20
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
