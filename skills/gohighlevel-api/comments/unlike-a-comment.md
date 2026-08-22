# Unlike a comment

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-like
- **Summary:** Remove a like from a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-like#__docusaurus_skipToContent_fallback)

Version: v3

Unlike a comment
================

DELETE 

https://services.leadconnectorhq.com/social-media-posting/comments/:platform/:id/like

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Remove a like from a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

Works for any comment level — top-level comments, replies, and replies-to-replies. **Supported platforms:** Facebook, LinkedIn, Community, TikTok, Bluesky. Instagram is not supported (passing `instagram` returns 400).

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-like#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**platform** stringrequired

**Possible values:** \[`facebook`, `linkedin`, `community`, `tiktok`, `bluesky`\]

Platform that supports liking / unliking comments (Instagram is not supported)

**Example:** `facebook`

**id** stringrequired

Highlevel comment ID — the `_id` returned by the list-comments endpoint (`POST /comments/{platform}/list`). Not the native platform comment ID. Works for any comment level: top-level comments, replies, and replies-to-replies.

**Example:** `507f1f77bcf86cd799439011`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `1234`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-like#responses "Direct link to Responses")

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

**Example:** `Deleted Like`

    {  "success": true,  "statusCode": 200,  "message": "Deleted Like"}

State conflict (not currently liked) or unsupported platform (Instagram)

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Unprocessable Entity

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

Share your feedback
-------------------

★★★★★

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/social-media-posting/comments/facebook/507f1f77bcf86cd799439011/like?locationId=1234' \-H 'Accept: application/json' \-H 'Version: v3'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

platform — pathrequired\---facebooklinkedincommunitytiktokbluesky

id — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
