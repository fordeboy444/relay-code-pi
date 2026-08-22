# List comments for a post or thread

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-comment-list
- **Summary:** Paginated list of comments scoped to a post (`parentId` = postId) or a comment thread (`parentId` = commentId). Use `skip`/`limit` for pagination, `sortBy` for ordering, `originIds` to filter by connected account, and `search` for keyword search.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-comment-list#__docusaurus_skipToContent_fallback)

Version: v3

List comments for a post or thread
==================================

POST 

https://services.leadconnectorhq.com/social-media-posting/comments/:platform/list

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Paginated list of comments scoped to a post (`parentId` = postId) or a comment thread (`parentId` = commentId). Use `skip`/`limit` for pagination, `sortBy` for ordering, `originIds` to filter by connected account, and `search` for keyword search.

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-comment-list#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**platform** stringrequired

**Possible values:** \[`facebook`, `instagram`, `linkedin`, `community`, `tiktok`, `bluesky`, `youtube`, `threads`\]

Supported Comments Platforms

**Example:** `facebook`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `1234`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**fromDate**string

Start of the published-date window (ISO 8601). If provided, `toDate` is also required, and `fromDate` must be ≤ `toDate`. Omit both to disable date filtering.

**Example:** `2026-05-22T05:32:49.463Z`

**toDate**string

End of the published-date window (ISO 8601). If provided, `fromDate` is also required.

**Example:** `2026-05-29T05:32:49.463Z`

**originIds**string\[\]required

Origin IDs of connected accounts to filter by

**Example:** `["1234","5678","9101"]`

**sortBy**string

Sort by top comments or latest comments

**Possible values:** \[`top`, `latest`\]

**Default value:** `latest`

**Example:** `top`

**search**string

Search

**Example:** `1234`

**skip**number

Pagination offset — number of comments to skip (zero-based). Must be ≥ 0.

**Possible values:** `>= 0`

**Default value:** `0`

**Example:** `0`

**limit**number

Pagination page size — number of comments to return. Must be between 1 and 100.

**Possible values:** `>= 1` and `<= 100`

**Default value:** `10`

**Example:** `10`

**parentId**string

Parent ID — pass the Highlevel post ID (for replies under a specific post) or the Highlevel comment ID (for replies under a specific comment). Omit to list all top-level comments for the location filtered by `originIds`. Must be a valid 24-character Highlevel ID, not the native platform ID.

**Example:** `6975b186f3442844ec07665b`

    {  "fromDate": "2026-05-22T05:32:49.463Z",  "toDate": "2026-05-29T05:32:49.463Z",  "originIds": [    "1234",    "5678",    "9101"  ],  "sortBy": "top",  "search": "1234",  "skip": 0,  "limit": 10,  "parentId": "6975b186f3442844ec07665b"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-comment-list#responses "Direct link to Responses")

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

**Example:** `Fetched Comments`

**results** objectrequired

Comments and pagination metadata

**comments** object\[\]required

List of comments

*   Array \[\
    \
\
**_id**stringrequired\
\
Highlevel comment ID\
\
**Example:** `507f1f77bcf86cd799439011`\
\
**platform**stringrequired\
\
Platform the comment was posted on\
\
**Example:** `facebook`\
\
**platformCommentId**string\
\
Native platform comment ID\
\
**Example:** `122129390871181019_974705035458625`\
\
**platformParentId**string\
\
Native platform parent ID (the post or comment this is a reply to)\
\
**Example:** `956033194258752_122129390871181019`\
\
**platformPostId**string\
\
Native platform post ID\
\
**Example:** `122129390871181019`\
\
**postId**stringrequired\
\
Highlevel post ID\
\
**Example:** `6a169db95c78177a5c24ef7c`\
\
**originId**stringrequired\
\
Connected account / page ID on the native platform\
\
**Example:** `956033194258752`\
\
**isParentThread**boolean\
\
True if this comment is a top-level comment on the post; false if it is a reply to another comment\
\
**Example:** `true`\
\
**isPost**booleanrequired\
\
True if this record represents the root post (not a comment)\
\
**Example:** `false`\
\
**content**string\
\
Comment content. May be empty or missing for attachment-only comments.\
\
**Example:** `Nice post!`\
\
**attachments** object\[\]\
\
Attachments on the comment\
\
*   Array \[\
    \
\
**type**string\
\
Attachment MIME type or platform-specific type\
\
**Example:** `image/jpeg`\
\
**url**string\
\
Attachment URL\
\
**Example:** `https://example.com/image.jpg`\
\
**thumbnail**string\
\
Thumbnail URL\
\
**Example:** `https://example.com/thumb.jpg`\
\
**videoUrl**string\
\
Video URL (when attachment is a video)\
\
**Example:** `https://example.com/video.mp4`\
\
*   \]\
    \
\
**author** object\
\
Author of the comment. May be partial or missing for some sync paths.\
\
**id**string\
\
Platform author ID\
\
**Example:** `123456789`\
\
**name**string\
\
Author display name\
\
**Example:** `John Doe`\
\
**profilePic**string\
\
Author profile picture URL\
\
**Example:** `https://example.com/avatar.jpg`\
\
**level**number\
\
Comment depth (0 = post, 1 = comment, 2 = reply)\
\
**Example:** `1`\
\
**likeCount**numberrequired\
\
Number of likes on the comment\
\
**Example:** `0`\
\
**reactionCount**numberrequired\
\
Number of reactions on the comment\
\
**Example:** `0`\
\
**replyCount**numberrequired\
\
Number of replies to the comment\
\
**Example:** `0`\
\
**shareCount**numberrequired\
\
Number of shares of the comment\
\
**Example:** `0`\
\
**repostCount**numberrequired\
\
Number of reposts of the comment (platform-specific)\
\
**Example:** `0`\
\
**quoteCount**numberrequired\
\
Number of quote posts (platform-specific)\
\
**Example:** `0`\
\
**previewLink**string\
\
Direct link to view the comment on the native platform\
\
**Example:** `https://www.facebook.com/.../posts/...`\
\
**isRead**booleanrequired\
\
Whether the comment has been read\
\
**Example:** `false`\
\
**isDeleted**booleanrequired\
\
Whether the comment was deleted\
\
**Example:** `false`\
\
**isEdited**booleanrequired\
\
Whether the comment was edited\
\
**Example:** `false`\
\
**publishedAt**string<date-time>\
\
Time the comment was published on the native platform. May be missing for legacy or webhook-synced records.\
\
**Example:** `2026-04-01T10:00:00.000Z`\
\
**createdAt**string<date-time>\
\
Time the comment record was created in Highlevel\
\
**Example:** `2026-04-01T10:00:00.000Z`\
\
**updatedAt**string<date-time>\
\
Time the comment record was last updated in Highlevel\
\
**Example:** `2026-04-01T10:00:00.000Z`\
\
*   \]
    

**meta** objectrequired

Pagination metadata

**total**numberrequired

Total comments matching the query

**Example:** `42`

**totalUnread**number

Total unread comments matching the query

**Example:** `7`

**skip**numberrequired

Pagination skip

**Example:** `0`

**limit**numberrequired

Pagination limit

**Example:** `10`

**hasMore**booleanrequired

True if more pages exist beyond this batch

**Example:** `true`

    {  "success": true,  "statusCode": 201,  "message": "Fetched Comments",  "results": {    "comments": [      {        "_id": "507f1f77bcf86cd799439011",        "platform": "facebook",        "platformCommentId": "122129390871181019_974705035458625",        "platformParentId": "956033194258752_122129390871181019",        "platformPostId": "122129390871181019",        "postId": "6a169db95c78177a5c24ef7c",        "originId": "956033194258752",        "isParentThread": true,        "isPost": false,        "content": "Nice post!",        "attachments": [          {            "type": "image/jpeg",            "url": "https://example.com/image.jpg",            "thumbnail": "https://example.com/thumb.jpg",            "videoUrl": "https://example.com/video.mp4"          }        ],        "author": {          "id": "123456789",          "name": "John Doe",          "profilePic": "https://example.com/avatar.jpg"        },        "level": 1,        "likeCount": 0,        "reactionCount": 0,        "replyCount": 0,        "shareCount": 0,        "repostCount": 0,        "quoteCount": 0,        "previewLink": "https://www.facebook.com/.../posts/...",        "isRead": false,        "isDeleted": false,        "isEdited": false,        "publishedAt": "2026-04-01T10:00:00.000Z",        "createdAt": "2026-04-01T10:00:00.000Z",        "updatedAt": "2026-04-01T10:00:00.000Z"      }    ],    "meta": {      "total": 42,      "totalUnread": 7,      "skip": 0,      "limit": 10,      "hasMore": true    }  }}

Bad Request

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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/comments/facebook/list?locationId=1234' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-d '{  "fromDate": "2026-05-22T05:32:49.463Z",  "toDate": "2026-05-29T05:32:49.463Z",  "originIds": [    "1234",    "5678",    "9101"  ],  "sortBy": "top",  "search": "1234",  "skip": 0,  "limit": 10,  "parentId": "6975b186f3442844ec07665b"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Parameters

platform — pathrequired\---facebookinstagramlinkedincommunitytiktokblueskyyoutubethreads

locationId — queryrequired

Version — headerrequired\---v3

Body required

{
  "fromDate": "2026-05-22T05:32:49.463Z",  "toDate": "2026-05-29T05:32:49.463Z",  "originIds": \[    "1234",    "5678",    "9101"  \],  "sortBy": "top",  "search": "1234",  "skip": 0,  "limit": 10,  "parentId": "6975b186f3442844ec07665b"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
