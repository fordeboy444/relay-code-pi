# Create a new category queue

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue
- **Summary:** Creates a queue in draft status for a category. Published posts are auto-added. Use update endpoint to activate.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue#__docusaurus_skipToContent_fallback)

Version: v3

Create a new category queue
===========================

POST 

https://services.leadconnectorhq.com/social-media-posting/category/queues

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Creates a queue in draft status for a category. Published posts are auto-added. Use update endpoint to activate.

### Requirements

#### Scope(s)

`socialplanner/category.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location ID

**Example:** `609e126a1c4ae1001291e1b5`

**categoryId**stringrequired

Category ID

**Example:** `60af88475f1b2c001f5d5f4b`

**timeSlots** object\[\]required

*   Array \[\
    \
\
**dayOfWeek**numberrequired\
\
Day of the week (0-6)\
\
**Example:** `0`\
\
**time**stringrequired\
\
Time in HH:mm format\
\
**Example:** `09:00`\
\
*   \]
    

**enableFuturePosts**boolean

Enable Future Posts. Defaults to false.

**Example:** `true`

**prioritizeNewContent**boolean

Prioritize New Content. Defaults to false.

**Example:** `false`

**userId**stringrequired

User id

**Example:** `w37swmmLbA02zgqKPpxITe`

    {  "locationId": "609e126a1c4ae1001291e1b5",  "categoryId": "60af88475f1b2c001f5d5f4b",  "timeSlots": [    {      "dayOfWeek": 0,      "time": "09:00"    }  ],  "enableFuturePosts": true,  "prioritizeNewContent": false,  "userId": "w37swmmLbA02zgqKPpxITe"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-queue#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Queue created successfully.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

**Example:** `true`

**statusCode**numberrequired

**Example:** `201`

**results** objectrequired

**message**string

A message indicating the result of the operation.

**Example:** `Queue created successfully`

**queue** object

The newly created queue.

**_id**string

Queue ID

**Example:** `686ebf10c78c233e45c28d66`

**locationId**string

Location ID

**Example:** `Qp26qppJgfrTZis7jsBy`

**categoryId**string

Category ID

**Example:** `683702938b19583ce320e5eb`

**timeSlots** object\[\]

Time slots for scheduling posts

*   Array \[\
    \
\
**_id**string\
\
Time slot ID\
\
**Example:** `686ebf10c78c23d665c28d67`\
\
**dayOfWeek**number\
\
Day of the week (0=Sunday, 1=Monday, ...)\
\
**Example:** `0`\
\
**time**string\
\
Time of the day (HH:mm format)\
\
**Example:** `00:00`\
\
*   \]
    

**enableFuturePosts**boolean

Enable posting future content

**Example:** `true`

**prioritizeNewContent**boolean

Prioritize new content over older content

**Example:** `true`

**status**string

Status of the queue. Always "draft" for a new queue.

**Possible values:** \[`active`, `paused`, `draft`\]

**Example:** `draft`

**startDate**string<date-time>

Start date of the queue

**Example:** `2025-07-09T19:12:16.363Z`

**skipDateTime**string<date-time>\[\]

Dates/times to skip posting. Always empty for a new queue.

**Example:** `[]`

**totalPosts**number

Total number of posts in the queue. Always 0 for a new queue.

**Example:** `0`

**lastScheduledTime**string<date-time>nullable

Timestamp of the last scheduled post. Always null for a new queue.

**Example:** `null`

**createdBy**string

ID of the user who created the queue

**Example:** `uefV3MmLHs2sjJr2KfmL`

**createdAt**string<date-time>

Creation timestamp

**Example:** `2025-07-09T19:12:16.366Z`

**updatedAt**string<date-time>

Last update timestamp

**Example:** `2025-07-09T19:12:16.366Z`

**traceId**string

    {  "success": true,  "statusCode": 201,  "results": {    "message": "Queue created successfully",    "queue": {      "_id": "686ebf10c78c233e45c28d66",      "locationId": "Qp26qppJgfrTZis7jsBy",      "categoryId": "683702938b19583ce320e5eb",      "timeSlots": [        {          "_id": "686ebf10c78c23d665c28d67",          "dayOfWeek": 0,          "time": "00:00"        }      ],      "enableFuturePosts": true,      "prioritizeNewContent": true,      "status": "draft",      "startDate": "2025-07-09T19:12:16.363Z",      "skipDateTime": [],      "totalPosts": 0,      "lastScheduledTime": null,      "createdBy": "uefV3MmLHs2sjJr2KfmL",      "createdAt": "2025-07-09T19:12:16.366Z",      "updatedAt": "2025-07-09T19:12:16.366Z"    }  },  "traceId": "string"}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/category/queues' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "609e126a1c4ae1001291e1b5",  "categoryId": "60af88475f1b2c001f5d5f4b",  "timeSlots": [    {      "dayOfWeek": 0,      "time": "09:00"    }  ],  "enableFuturePosts": true,  "prioritizeNewContent": false,  "userId": "w37swmmLbA02zgqKPpxITe"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "locationId": "609e126a1c4ae1001291e1b5",  "categoryId": "60af88475f1b2c001f5d5f4b",  "timeSlots": \[    {      "dayOfWeek": 0,      "time": "09:00"    }  \],  "enableFuturePosts": true,  "prioritizeNewContent": false,  "userId": "w37swmmLbA02zgqKPpxITe"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
