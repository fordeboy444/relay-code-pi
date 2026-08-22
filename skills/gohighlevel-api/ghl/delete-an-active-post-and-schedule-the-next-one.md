# Delete an active post and schedule the next one

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-current-active-post-and-schedule-next
- **Summary:** Deletes a post that is currently scheduled and automatically triggers the scheduling of the next available post in the queue.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-current-active-post-and-schedule-next#__docusaurus_skipToContent_fallback)

Version: v3

Delete an active post and schedule the next one

DELETE 

https://services.leadconnectorhq.com/social-media-posting/category/queues/:postId/active-post

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Deletes a post that is currently scheduled and automatically triggers the scheduling of the next available post in the queue.

### Requirements

#### Scope(s)

`socialplanner/category.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-current-active-post-and-schedule-next#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**postId** stringrequired

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `609e126a1c4ae1001291e1b5`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-current-active-post-and-schedule-next#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successfully deleted the active post and scheduled the next one.

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

**Example:** `Current post deleted and next post scheduled successfully`

**traceId**string

    {  "success": true,  "statusCode": 200,  "results": {    "message": "Current post deleted and next post scheduled successfully"  },  "traceId": "string"}
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

    curl -L -X DELETE 'https://services.leadconnectorhq.com/social-media-posting/category/queues/:postId/active-post?locationId=609e126a1c4ae1001291e1b5' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

postId — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
