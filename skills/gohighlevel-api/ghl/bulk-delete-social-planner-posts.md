# Bulk Delete Social Planner Posts

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/bulk-delete-social-planner-posts
- **Summary:** Deletes multiple posts based on the provided list of post IDs.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/bulk-delete-social-planner-posts#__docusaurus_skipToContent_fallback)

Version: v3

Bulk Delete Social Planner Posts
================================

POST 

https://services.leadconnectorhq.com/social-media-posting/:locationId/posts/bulk-delete

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Deletes multiple posts based on the provided list of post IDs. This operation is useful for clearing up large numbers of posts efficiently.

Note:

1.The maximum number of posts that can be deleted in a single request is '50'.

2.However, It will only get deleted in CRM database but still it is recommended to be cautious of this operation.

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/bulk-delete-social-planner-posts#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**postIds**string\[\]

Requested Results

**Example:** `["662791ee3f216822d7da0c8c"]`

    {  "postIds": [    "662791ee3f216822d7da0c8c"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/bulk-delete-social-planner-posts#responses "Direct link to Responses")

*   201
*   400
*   401
*   404
*   422
*   500

Posts deleted successfully

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

**Example:** `Posts Deleted Successfully`

**results**required

Message and deleted count

**Example:** `{ message: "Posts deleted successfully", deletedCount: 10 }`

    {  "success": true,  "statusCode": 201,  "message": "Posts Deleted Successfully",  "results": "{ message: \"Posts deleted successfully\", deletedCount: 10 }"}

Cannot delete more than 50 posts at a time.

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

No posts found with the given IDs.

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

An error occurred while trying to delete the posts. Please try again later.

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/:locationId/posts/bulk-delete' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "postIds": [    "662791ee3f216822d7da0c8c"  ]}'

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
  "postIds": \[    "662791ee3f216822d7da0c8c"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
