# Create a comment or reply

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-comment
- **Summary:** Create a top-level comment on a post (`isParentThread: true`, `parentId` = postId) or a reply to an existing comment (`isParentThread: false`, `parentId` = commentId). Per-platform content max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-comment#__docusaurus_skipToContent_fallback)

Version: v3

Create a comment or reply
=========================

POST 

https://services.leadconnectorhq.com/social-media-posting/comments/:platform

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create a top-level comment on a post (`isParentThread: true`, `parentId` = postId) or a reply to an existing comment (`isParentThread: false`, `parentId` = commentId). Per-platform content max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.

**Optional-field platform support:**

*   `attachments` — supported on **Facebook only**. Ignored on Instagram, LinkedIn, TikTok, Bluesky, Community (Community processes the field but external URLs are not rendered due to its bucket restriction).
*   `mentions` — supported on **Facebook**, **LinkedIn**, and **Community** only. Ignored on Instagram, TikTok, Bluesky.
*   `notifyAllGroupMembers` — supported on **Community** only. When `true`, all group members get a push/in-app notification (equivalent to an `@everyone` broadcast). Independent of the `mentions` array and of `@everyone` text in `content`. Default `false`.

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-comment#request "Direct link to request")

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

**parentId**stringrequired

For top-level comments (`isParentThread: true`): pass the post ID returned by the posts API. For replies (`isParentThread: false`): pass the parent comment ID returned by the list-comments API. In both cases this must be a valid 24-character Highlevel ID — not the native platform ID.

**Example:** `6975b186f3442844ec07665b`

**isParentThread**booleanrequired

Set `true` to create a top-level comment on a post (parentId = post ID). Set `false` to create a reply to an existing comment (parentId = comment ID).

**Example:** `true`

**content**stringrequired

Content of the comment. Per-platform max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.

**Example:** `This is a comment`

**attachments** object\[\]

Attachments for the comment (max 1 image). **Supported on:** Facebook only. **Not supported on:** Instagram, LinkedIn, TikTok, Bluesky, Community — the field is accepted by the API but the attachment will not appear on the comment. (Community processes the field server-side, but external URLs are not rendered due to its bucket restriction.)

*   Array \[\
    \
\
**url**stringrequired\
\
URL of the attachment\
\
**Example:** `https://example.com/image.jpg`\
\
**type**stringrequired\
\
Type of the attachment\
\
**Possible values:** \[`image`\]\
\
**Example:** `image`\
\
*   \]
    

**mentions** object\[\]

Mentions for the comment. **Supported on:** Facebook, LinkedIn, Community. **Ignored on:** Instagram, TikTok, Bluesky — the field is accepted but mentions are not rendered on these platforms.

*   Array \[\
    \
\
**name**stringrequired\
\
Mention name\
\
**Example:** `Test`\
\
**id**stringrequired\
\
Mention ID\
\
**Example:** `102694781978972`\
\
**offset**numberrequired\
\
Mention offset\
\
**Example:** `106`\
\
**length**numberrequired\
\
Mention length\
\
**Example:** `106`\
\
**slug**string\
\
Mention slug for community profile link\
\
**Example:** `mohammed-marvan-8bRf3H`\
\
*   \]
    

**notifyAllGroupMembers**boolean

When `true`, all members of the Community group receive a push/in-app notification about this comment — equivalent to an `@everyone` broadcast.

**Supported on:** Community only. Ignored on all other platforms (the field is accepted but no notification is sent).

**Independent of the `mentions` array** — you do not need to add an `@everyone` entry to `mentions` for this to take effect. Conversely, putting the literal text `@everyone` in `content` does **not** by itself trigger notifications; only this flag does.

Defaults to `false` (no broadcast notification). Use `true` only when the comment is genuinely intended for every member of the group — overuse may cause members to mute the group.

**Example:** `false`

    {  "parentId": "6975b186f3442844ec07665b",  "isParentThread": true,  "content": "This is a comment",  "attachments": [    {      "url": "https://example.com/image.jpg",      "type": "image"    }  ],  "mentions": [    {      "name": "Test",      "id": "102694781978972",      "offset": "106",      "length": "106",      "slug": "mohammed-marvan-8bRf3H"    }  ],  "notifyAllGroupMembers": false}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-comment#responses "Direct link to Responses")

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

**Example:** `Created Comment`

**results** objectrequired

The created comment

**_id**stringrequired

Highlevel comment ID

**Example:** `507f1f77bcf86cd799439011`

**platform**stringrequired

Platform the comment was posted on

**Example:** `facebook`

**platformCommentId**string

Native platform comment ID

**Example:** `122129390871181019_974705035458625`

**platformParentId**string

Native platform parent ID (the post or comment this is a reply to)

**Example:** `956033194258752_122129390871181019`

**platformPostId**string

Native platform post ID

**Example:** `122129390871181019`

**postId**stringrequired

Highlevel post ID

**Example:** `6a169db95c78177a5c24ef7c`

**originId**stringrequired

Connected account / page ID on the native platform

**Example:** `956033194258752`

**isParentThread**boolean

True if this comment is a top-level comment on the post; false if it is a reply to another comment

**Example:** `true`

**isPost**booleanrequired

True if this record represents the root post (not a comment)

**Example:** `false`

**content**string

Comment content. May be empty or missing for attachment-only comments.

**Example:** `Nice post!`

**attachments** object\[\]

Attachments on the comment

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
*   \]
    

**author** object

Author of the comment. May be partial or missing for some sync paths.

**id**string

Platform author ID

**Example:** `123456789`

**name**string

Author display name

**Example:** `John Doe`

**profilePic**string

Author profile picture URL

**Example:** `https://example.com/avatar.jpg`

**level**number

Comment depth (0 = post, 1 = comment, 2 = reply)

**Example:** `1`

**likeCount**numberrequired

Number of likes on the comment

**Example:** `0`

**reactionCount**numberrequired

Number of reactions on the comment

**Example:** `0`

**replyCount**numberrequired

Number of replies to the comment

**Example:** `0`

**shareCount**numberrequired

Number of shares of the comment

**Example:** `0`

**repostCount**numberrequired

Number of reposts of the comment (platform-specific)

**Example:** `0`

**quoteCount**numberrequired

Number of quote posts (platform-specific)

**Example:** `0`

**previewLink**string

Direct link to view the comment on the native platform

**Example:** `https://www.facebook.com/.../posts/...`

**isRead**booleanrequired

Whether the comment has been read

**Example:** `false`

**isDeleted**booleanrequired

Whether the comment was deleted

**Example:** `false`

**isEdited**booleanrequired

Whether the comment was edited

**Example:** `false`

**publishedAt**string<date-time>

Time the comment was published on the native platform. May be missing for legacy or webhook-synced records.

**Example:** `2026-04-01T10:00:00.000Z`

**createdAt**string<date-time>

Time the comment record was created in Highlevel

**Example:** `2026-04-01T10:00:00.000Z`

**updatedAt**string<date-time>

Time the comment record was last updated in Highlevel

**Example:** `2026-04-01T10:00:00.000Z`

    {  "success": true,  "statusCode": 201,  "message": "Created Comment",  "results": {    "_id": "507f1f77bcf86cd799439011",    "platform": "facebook",    "platformCommentId": "122129390871181019_974705035458625",    "platformParentId": "956033194258752_122129390871181019",    "platformPostId": "122129390871181019",    "postId": "6a169db95c78177a5c24ef7c",    "originId": "956033194258752",    "isParentThread": true,    "isPost": false,    "content": "Nice post!",    "attachments": [      {        "type": "image/jpeg",        "url": "https://example.com/image.jpg",        "thumbnail": "https://example.com/thumb.jpg",        "videoUrl": "https://example.com/video.mp4"      }    ],    "author": {      "id": "123456789",      "name": "John Doe",      "profilePic": "https://example.com/avatar.jpg"    },    "level": 1,    "likeCount": 0,    "reactionCount": 0,    "replyCount": 0,    "shareCount": 0,    "repostCount": 0,    "quoteCount": 0,    "previewLink": "https://www.facebook.com/.../posts/...",    "isRead": false,    "isDeleted": false,    "isEdited": false,    "publishedAt": "2026-04-01T10:00:00.000Z",    "createdAt": "2026-04-01T10:00:00.000Z",    "updatedAt": "2026-04-01T10:00:00.000Z"  }}

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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/comments/facebook?locationId=1234' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-d '{  "parentId": "6975b186f3442844ec07665b",  "isParentThread": true,  "content": "This is a comment",  "attachments": [    {      "url": "https://example.com/image.jpg",      "type": "image"    }  ],  "mentions": [    {      "name": "Test",      "id": "102694781978972",      "offset": "106",      "length": "106",      "slug": "mohammed-marvan-8bRf3H"    }  ],  "notifyAllGroupMembers": false}'

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
  "parentId": "6975b186f3442844ec07665b",  "isParentThread": true,  "content": "This is a comment",  "attachments": \[    {      "url": "https://example.com/image.jpg",      "type": "image"    }  \],  "mentions": \[    {      "name": "Test",      "id": "102694781978972",      "offset": "106",      "length": "106",      "slug": "mohammed-marvan-8bRf3H"    }  \],  "notifyAllGroupMembers": false
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
