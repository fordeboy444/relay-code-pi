# Delete an item from a queue

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-queue-item
- **Summary:** Deletes an item from a specific category queue.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-queue-item#__docusaurus_skipToContent_fallback)

Version: v3

Delete an item from a queue
===========================

DELETE 

https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/items/:itemId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Deletes an item from a specific category queue.

### Requirements

#### Scope(s)

`socialplanner/category.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-queue-item#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**queueId** stringrequired

**itemId** stringrequired

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `609e126a1c4ae1001291e1b5`

**sessionId** string

Edit session ID

**Example:** `60af88475f1b2c001f5d5f4b`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-queue-item#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

The queue item has been successfully deleted.

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

A message indicating the result of the operation.

**Example:** `The queue item has been successfully deleted.`

**updatedSlots** object\[\]

Updated slot information for items affected by the operation

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
    

**totalPostsChanged**number

Number of unique posts that had their slots changed

**Example:** `5`

**traceId**string

    {  "success": true,  "statusCode": 200,  "results": {    "message": "The queue item has been successfully deleted.",    "updatedSlots": [      {        "itemId": "60af88475f1b2c001f5d5f4b",        "scheduledDateTime": "2023-10-15T10:00:00.000Z",        "isSkipped": false      }    ],    "totalPostsChanged": 5  },  "traceId": "string"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)
**type:** http**scopes:** `socialplanner/category.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/items/:itemId?locationId=609e126a1c4ae1001291e1b5&sessionId=60af88475f1b2c001f5d5f4b' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

queueId — pathrequired

itemId — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

sessionId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
