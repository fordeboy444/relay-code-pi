# Fetch calendar view for an edit session

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-edit-session-calendar
- **Summary:** Retrieves a calendar preview of scheduled posts based on draft items within an edit session. This shows how posts would be scheduled if changes were saved.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-edit-session-calendar#__docusaurus_skipToContent_fallback)

Version: v3

Fetch calendar view for an edit session
=======================================

POST 

https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/calendar

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieves a calendar preview of scheduled posts based on draft items within an edit session. This shows how posts would be scheduled if changes were saved.

### Requirements

#### Scope(s)

`socialplanner/category.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-edit-session-calendar#request "Direct link to request")

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

Location ID

**Example:** `609e126a1c4ae1001291e1b5`

**sessionId**stringrequired

Edit session ID

**Example:** `60af88475f1b2c001f5d5f4b`

**startDate**stringrequired

Start Date in ISO format

**Example:** `2023-10-01T00:00:00.000Z`

**endDate**stringrequired

End Date in ISO format

**Example:** `2023-10-31T23:59:59.999Z`

**accountIds**string\[\]

Filter by Account IDs. If not provided or empty, returns all posts.

**Example:** `["aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"]`

    {  "locationId": "609e126a1c4ae1001291e1b5",  "sessionId": "60af88475f1b2c001f5d5f4b",  "startDate": "2023-10-01T00:00:00.000Z",  "endDate": "2023-10-31T23:59:59.999Z",  "accountIds": [    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/fetch-edit-session-calendar#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Edit session calendar fetched successfully.

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

**Example:** `Edit session calendar fetched successfully`

**scheduledPosts** object\[\]

*   Array \[\
    \
\
**scheduledDateTime**string<date-time>\
\
The date and time the post is scheduled to be published\
\
**Example:** `2023-10-15T10:00:00.000Z`\
\
**post** object\
\
The formatted post data.\
\
**_id**string\
\
MongoDB document ID of the post\
\
**Example:** `61bb16833b3f2791f9715be2`\
\
**source**string\
\
source must be one of the following values: composer, recurring, csv\
\
**Possible values:** \[`composer`, `csv`, `recurring`, `review`, `rss`\]\
\
**Example:** `composer`\
\
**locationId**stringrequired\
\
Location Id\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**platform**string\
\
platform must be one of the following values: google, facebook, instagram, linkedin, twitter, tiktok\
\
**Example:** `google`\
\
**thumbnail**string\
\
Post-level cover image (thumbnail) URL.\
\
For posts that contain a video, this is the resolved cover image used for the first video in `media[]`. It is set automatically from the `thumbnail` provided on the first video media item at create/edit time, or auto-generated from the video when one is not supplied. Per-item thumbnails inside `media[]` are not retained on the response — the primary cover image lives on this field.\
\
**Example:** `https://storage.googleapis.com/your-bucket/media/video-thumbnail.jpeg`\
\
**displayDate**string<date-time>\
\
Display date for the post\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
**createdAt**string<date-time>\
\
Date when the post was created\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
**updatedAt**string<date-time>\
\
Date when the post was last updated\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
**accountId**string\
\
Account Id\
\
**Example:** `w37swmmLbA02zgqKPpxITe`\
\
**error**stringrequired\
\
Error\
\
**Example:** `Failed due to auth token`\
\
**postId**string\
\
Platform-specific post identifier\
\
**Example:** `323534534435`\
\
**publishedAt**string\
\
Date when the post was published\
\
**Example:** `2021-06-22T05:32:49.463Z`\
\
**accountIds**string\[\]\
\
Account Ids\
\
**Example:** `["aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"]`\
\
**summary**string\
\
Content text of the post\
\
**Example:** `Sample Summary`\
\
**media** object\[\]\
\
Post Media Data The limitations of media as per the platforms is provided through the reference link in API description\
\
*   Array \[\
    \
\
**url**stringrequired\
\
Public URL of the media file. Must be a valid, accessible HTTPS URL.\
\
**Example:** `https://storage.googleapis.com/your-bucket/media/image.jpg`\
\
**caption**string\
\
Alt text or caption for the media. Used for accessibility and SEO.\
\
**Example:** `Team meeting discussing Q4 marketing strategy`\
\
**originalUrl**string\
\
Original media URL before any processing (watermarking/optimization). Set automatically by the system.\
\
**Example:** `https://storage.googleapis.com/test/test/media/original.jpeg`\
\
**watermarkedUrl**string\
\
URL of the media after watermarking. Set automatically when watermark is applied.\
\
**Example:** `https://storage.googleapis.com/test/test/media/watermarked.jpeg`\
\
**type**stringrequired\
\
MIME type of the media file. See Platform Limitations Guide for platform-specific format support.\
\
**Possible values:** \[`image/jpeg`, `image/jpg`, `image/png`, `image/gif`, `video/mp4`, `video/mov`, `video/webm`\]\
\
**Example:** `image/jpeg`\
\
**thumbnail**string\
\
Cover image URL for a video media item.\
\
**Scope**\
\
*   Applies to the **first video** in `media[]`. Values supplied on subsequent video items are ignored.\
*   Has no effect on image-only media items.\
\
**Response behavior**\
\
*   After the post is published, the resolved cover image is surfaced on the post-level `thumbnail` field of the response and is no longer echoed back inside `media[]`. This represents the post's primary cover image and the cover used for the first video.\
\
**Limitations**\
\
*   Per-item thumbnails for multi-video posts are not supported. Each destination network exposes a single cover image per post for the leading video; this matches the behavior of the underlying social platform APIs.\
\
**Format**\
\
*   Provide a publicly accessible JPEG or PNG URL. Animated formats and video URLs are not accepted.\
*   Recommended: an image matching the orientation of your video and ≤ 2 MB.\
\
**Example:** `https://storage.googleapis.com/test/test/media/test.jpeg`\
\
**id**string\
\
Unique identifier for the media item. Used for tracking and referencing.\
\
**Example:** `media_abc123xyz`\
\
**optimizedUrl**string\
\
URL of the optimized/compressed media. Set automatically when media optimization is enabled.\
\
**Enable Optimization:** Set `mediaOptimization: true` in the post request.\
\
**Example:** `https://storage.googleapis.com/your-bucket/media/optimized-image.jpg`\
\
**optimizedType**string\
\
MIME type of the optimized media. May differ from original if format conversion occurred.\
\
**Example:** `image/jpeg`\
\
**isModified**boolean\
\
Flag indicating if the media was modified (watermarked, optimized, or processed).\
\
**Example:** `true`\
\
**altText**string\
\
Alt text for accessibility. Supported on Instagram, Threads, Pinterest, Bluesky, and LinkedIn image posts (ignored for video and other platforms). Auto-truncated per platform: Pinterest 500, Instagram/Threads 1000, Bluesky 2000, LinkedIn 4086 chars.\
\
**Possible values:** `<= 4086 characters`\
\
**Example:** `A sunset over the ocean with silhouetted palm trees`\
\
*   \]\
    \
\
**status**object\
\
Status must be one of the following values: in_progress, draft, failed, published, scheduled, in_review, notification_sent, deleted\
\
**Example:** `published`\
\
**createdBy**string\
\
User ID who created the post\
\
**Example:** `Lx1EI6YIgQYMQi0ytFXv`\
\
**type**objectrequired\
\
Post Type must be one of the following values: - post, story, reel\
\
**Example:** `post`\
\
**tags**string\[\]\
\
Tag Ids\
\
**Example:** `["aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"]`\
\
**ogTagsDetails** object\
\
Og Tags Meta Data\
\
**metaImage**string\
\
Preview image URL for the shared link.\
\
**Best Practices:**\
\
*   Use high-quality images (1200x630px recommended)\
*   Ensure the image is publicly accessible\
\
**Auto-fetch:** Use the Get Metatags API to fetch OG data from a URL.\
\
**Example:** `https://yoursite.com/images/og-image.jpg`\
\
**metaLink**string\
\
URL of the webpage being shared. This is the destination when users click the link preview.\
\
**Example:** `https://yoursite.com/blog/amazing-article`\
\
**ogTitle**string\
\
Custom title for the link preview. Overrides the page's og:title meta tag.\
\
**Tip:** Keep titles concise (50-60 characters) for best display across platforms.\
\
**Example:** `How to Double Your Social Media Engagement`\
\
**ogDescription**string\
\
Custom description for the link preview. Overrides the page's og:description meta tag.\
\
**Tip:** Keep descriptions under 155 characters for optimal display.\
\
**Example:** `Learn proven strategies to boost your social media engagement and grow your audience.`\
\
**postApprovalDetails** object\
\
Post Approval Details\
\
**approver**string\
\
User ID of the designated approver.\
\
**Note:** The approver will receive a notification when a post is submitted for review.\
\
**Example:** `iVrVJ2uoXNF0wzcBzgl5`\
\
**requesterNote**string\
\
Note from the post creator to the approver explaining the post or requesting specific feedback.\
\
**Example:** `Please review the messaging for our Q4 campaign launch. Let me know if the CTA needs adjustment.`\
\
**approverNote**string\
\
Note from the approver to the post creator with feedback or approval comments.\
\
**Example:** `Approved! Great content. Consider adding more hashtags for visibility.`\
\
**approvalStatus**string\
\
Current approval status of the post.\
\
**Available Values:**\
\
*   `pending` - Awaiting approver review\
*   `approved` - Approved and ready for publishing\
*   `rejected` - Rejected by approver (needs revision)\
*   `not_required` - No approval workflow needed\
\
**Possible values:** \[`pending`, `approved`, `rejected`, `not_required`\]\
\
**Example:** `pending`\
\
**approverUser** object\
\
Approver User Details\
\
**id**stringrequired\
\
User Id\
\
**Example:** `6284c43d519161e96cc09c13`\
\
**title**stringrequired\
\
Title\
\
**Example:** `Mr`\
\
**firstName**stringrequired\
\
First name\
\
**Example:** `Harry`\
\
**lastName**stringrequired\
\
Last name\
\
**Example:** `Spencer`\
\
**profilePhoto**stringrequired\
\
Profile photo\
\
**Example:** `https://storage.googleapis.com/user/kCrjKGHZQ2/profile/1dca8c-61c9-404d-a459-751fbcb.jpeg`\
\
**phone**stringrequired\
\
Phone number\
\
**Example:** `901111119`\
\
**email**stringrequired\
\
Email Id\
\
**Example:** `abc@xyc.com`\
\
**tiktokPostDetails** object\
\
Tiktok Post Details\
\
**privacyLevel**stringrequired\
\
Privacy level controlling who can view the video.\
\
**Available Values:**\
\
*   `PUBLIC_TO_EVERYONE` - Anyone can view (default)\
*   `MUTUAL_FOLLOW_FRIENDS` - Only mutual followers can view\
*   `SELF_ONLY` - Only you can view (private)\
\
**Note:** If set to `SELF_ONLY`, `videoDisclosure` must be `false`.\
\
**Possible values:** \[`PUBLIC_TO_EVERYONE`, `MUTUAL_FOLLOW_FRIENDS`, `SELF_ONLY`\]\
\
**Example:** `PUBLIC_TO_EVERYONE`\
\
**promoteOtherBrand**boolean\
\
Indicates if the video promotes a third-party brand or product.\
\
**Required:** Must be `true` if `videoDisclosure` is enabled and you're promoting another brand.\
\
**Example:** `false`\
\
**enableComment**boolean\
\
Allow users to comment on the video. Default is determined by account settings.\
\
**Example:** `true`\
\
**enableDuet**boolean\
\
Allow users to create Duet videos with your content.\
\
**Duet:** Side-by-side video featuring your content and the creator's reaction/addition.\
\
**Example:** `true`\
\
**enableStitch**boolean\
\
Allow users to create Stitch videos with your content.\
\
**Stitch:** Clips up to 5 seconds of your video that creators can use in their own videos.\
\
**Example:** `true`\
\
**videoDisclosure**boolean\
\
Enable branded content disclosure. Required when video is promotional content.\
\
**Validations:**\
\
*   Cannot be `true` if `privacyLevel` is `SELF_ONLY`\
*   If enabled, at least one of `promoteYourBrand` or `promoteOtherBrand` must be `true`\
\
**Example:** `false`\
\
**promoteYourBrand**boolean\
\
Indicates if the video promotes your own brand or product.\
\
**Required:** Must be `true` if `videoDisclosure` is enabled and you're promoting your own brand.\
\
**Example:** `false`\
\
**gmbPostDetails** object\
\
GMB Post Details\
\
**gmbEventType**stringrequired\
\
Google My Business post type.\
\
**Available Types:**\
\
*   `STANDARD` - Regular update post (What's New)\
*   `EVENT` - Event announcement with dates and title\
*   `OFFER` - Promotional offer with coupon and redemption details\
\
**Required fields by type:**\
\
*   STANDARD: None additional\
*   EVENT: `title`, `startDate`, `endDate`\
*   OFFER: `offerTitle`, `startDate`, `endDate`, `termsConditions`, `couponCode`, `redeemOnlineUrl`\
\
**Possible values:** \[`STANDARD`, `EVENT`, `OFFER`\]\
\
**Example:** `STANDARD`\
\
**title**string\
\
Event title. Required when `gmbEventType` is `EVENT`.\
\
**Max length:** 58 characters\
\
**Example:** `Summer Sale Event 2024`\
\
**offerTitle**string\
\
Offer title. Required when `gmbEventType` is `OFFER`.\
\
**Example:** `50% Off All Products`\
\
**startDate** object\
\
Start date and time for EVENT or OFFER posts.\
\
**Required:** When `gmbEventType` is `EVENT` or `OFFER`.\
\
**Structure:**\
\
*   `startDate`: { year, month, day }\
*   `startTime`: { hours, minutes, seconds }\
\
**startDate** object\
\
Start Date\
\
**year**numberrequired\
\
Year component of the date\
\
**Example:** `2022`\
\
**month**numberrequired\
\
Month component of the date (1-12)\
\
**Example:** `1`\
\
**day**numberrequired\
\
Day component of the date (1-31)\
\
**Example:** `1`\
\
**startTime** object\
\
Start Time\
\
**hours**numberrequired\
\
Hour component of the time (0-23)\
\
**Example:** `23`\
\
**minutes**numberrequired\
\
Minute component of the time (0-59)\
\
**Example:** `56`\
\
**seconds**numberrequired\
\
Second component of the time (0-59)\
\
**Example:** `34`\
\
**endDate** object\
\
End date and time for EVENT or OFFER posts.\
\
**Required:** When `gmbEventType` is `EVENT` or `OFFER`. **Validation:** Must be after `startDate`.\
\
**Structure:**\
\
*   `endDate`: { year, month, day }\
*   `endTime`: { hours, minutes, seconds }\
\
**endDate** object\
\
End Date\
\
**year**numberrequired\
\
Year component of the date\
\
**Example:** `2022`\
\
**month**numberrequired\
\
Month component of the date (1-12)\
\
**Example:** `1`\
\
**day**numberrequired\
\
Day component of the date (1-31)\
\
**Example:** `1`\
\
**endTime** object\
\
End Time\
\
**hours**numberrequired\
\
Hour component of the time (0-23)\
\
**Example:** `23`\
\
**minutes**numberrequired\
\
Minute component of the time (0-59)\
\
**Example:** `56`\
\
**seconds**numberrequired\
\
Second component of the time (0-59)\
\
**Example:** `34`\
\
**termsConditions**string\
\
URL to terms and conditions page. Required for OFFER posts.\
\
**Example:** `https://yoursite.com/terms-and-conditions`\
\
**url**string\
\
Call-to-action URL. Required when `actionType` is set (except `none` and `call`).\
\
**Required for:** STANDARD and EVENT posts with actionType other than `none` or `call`.\
\
**Example:** `https://yoursite.com/book-now`\
\
**couponCode**string\
\
Promotional coupon code. Required for OFFER posts.\
\
**Example:** `SAVE50`\
\
**redeemOnlineUrl**string\
\
URL where customers can redeem the offer online. Required for OFFER posts.\
\
**Example:** `https://yoursite.com/redeem-offer`\
\
**actionType**string\
\
Call-to-action button type for the post.\
\
**Available Actions:**\
\
*   `none` - No action button\
*   `order` - Order online\
*   `book` - Book appointment\
*   `shop` - Shop now\
*   `learn_more` - Learn more\
*   `call` - Call now (no URL required)\
*   `sign_up` - Sign up\
\
**Note:** All actions except `none` and `call` require a `url`.\
\
**Possible values:** \[`none`, `order`, `book`, `shop`, `learn_more`, `call`, `sign_up`\]\
\
**Example:** `book`\
\
**blueskyPostDetails** object\
\
Bluesky Post Details\
\
**shortenedLinks**string\[\]\
\
Shortened links for the post (auto-generated).\
\
**replyTo**string\
\
Bluesky AT Protocol URI of a post to reply to.\
\
**Format:** `at://did:plc:{user-id}/app.bsky.feed.post/{post-id}`\
\
**Use Case:** Create a reply thread to an existing Bluesky post.\
\
**Example:** `at://did:plc:abc123def456/app.bsky.feed.post/xyz789`\
\
**quotePost**string\
\
Bluesky AT Protocol URI of a post to quote.\
\
**Format:** `at://did:plc:{user-id}/app.bsky.feed.post/{post-id}`\
\
**Use Case:** Quote-post another user's post with your commentary.\
\
**Example:** `at://did:plc:abc123def456/app.bsky.feed.post/xyz789`\
\
**language**string\
\
ISO 639-1 language code for the post content.\
\
**Examples:** `en` (English), `es` (Spanish), `fr` (French), `de` (German)\
\
**Example:** `en`\
\
**externalLink**string\
\
External URL to embed as a link card in the post.\
\
**Example:** `https://yoursite.com/article`\
\
**externalLinkTitle**string\
\
Title for the external link card. Displayed prominently in the embed.\
\
**Example:** `10 Tips for Better Social Media Marketing`\
\
**externalLinkDescription**string\
\
Description for the external link card. Brief summary displayed below the title.\
\
**Example:** `Learn how to improve your social media presence with these proven strategies.`\
\
**user** object\
\
User\
\
**id**stringrequired\
\
User Id\
\
**Example:** `6284c43d519161e96cc09c13`\
\
**title**stringrequired\
\
Title\
\
**Example:** `Mr`\
\
**firstName**stringrequired\
\
First name\
\
**Example:** `Harry`\
\
**lastName**stringrequired\
\
Last name\
\
**Example:** `Spencer`\
\
**profilePhoto**stringrequired\
\
Profile photo\
\
**Example:** `https://storage.googleapis.com/user/kCrjKGHZQ2/profile/1dca8c-61c9-404d-a459-751fbcb.jpeg`\
\
**phone**stringrequired\
\
Phone number\
\
**Example:** `901111119`\
\
**email**stringrequired\
\
Email Id\
\
**Example:** `abc@xyc.com`\
\
**linkedinPostDetails** object\
\
Linkedin Post Details\
\
**pdfTitle**stringrequired\
\
Title for the PDF document carousel. Displayed as the document name on LinkedIn.\
\
**Max length:** 100 characters\
\
**Tip:** Use a descriptive title that explains the document content.\
\
**Example:** `Q4 Marketing Strategy Presentation`\
\
**postAsPdf**booleanrequired\
\
Post images as a PDF document carousel.\
\
**Limits:**\
\
*   Max 300 pages/images\
*   Max PDF size: 100 MB\
\
**Example:** `true`\
\
**poll** object\
\
Publish a LinkedIn poll post.\
\
**Required fields when `poll` is supplied:**\
\
*   `question` (max 140 characters)\
*   `options`: 2 to 4 entries, each `text` ≤ 30 characters; option texts must be unique\
*   `settings.duration`: one of `ONE_DAY`, `THREE_DAYS`, `SEVEN_DAYS`, `FOURTEEN_DAYS`\
\
**LinkedIn restrictions:**\
\
*   Polls cannot be edited after publishing.\
*   A poll post cannot include `media` or a meta-link preview.\
\
**question**stringrequired\
\
Question for the poll. Max length: 140 characters.\
\
**Possible values:** `<= 140 characters`\
\
**Example:** `What is your favorite color?`\
\
**options** object\[\]required\
\
Poll options. Minimum 2, maximum 4. Each option text max 30 characters. Option texts must be unique.\
\
**Possible values:** `>= 2`, `<= 4`\
\
*   Array \[\
    \
\
**text**stringrequired\
\
Text describing the option. Max length: 30 characters.\
\
**Possible values:** `<= 30 characters`\
\
**Example:** `Red`\
\
*   \]\
    \
\
**settings** objectrequired\
\
Poll settings (duration).\
\
**duration**stringrequired\
\
Duration the poll stays open for votes.\
\
**Possible values:** \[`ONE_DAY`, `THREE_DAYS`, `SEVEN_DAYS`, `FOURTEEN_DAYS`\]\
\
**Example:** `SEVEN_DAYS`\
\
**pinterestPostDetails** object\
\
Pinterest Post Details\
\
**title**string\
\
Pin title displayed on Pinterest.\
\
**Max length:** 100 characters\
\
**Best Practices:**\
\
*   Include relevant keywords\
*   Be descriptive and engaging\
\
**Example:** `10 Easy Home Decor Ideas for 2024`\
\
**link**string\
\
Destination URL for the pin. Users clicking the pin will be directed to this URL.\
\
**Max length:** 2048 characters\
\
**Best Practices:**\
\
*   Use direct links to relevant content\
*   Track with UTM parameters for analytics\
\
**Example:** `https://yoursite.com/blog/home-decor-ideas`\
\
**boardIds** objectdeprecated\
\
**DEPRECATED — use `pinterestBoards` instead.** Will be removed on July 31, 2026.\
\
Legacy mapping of Pinterest account OAuth IDs to a single board ID: `{ accountOAuthId: "boardId" }`\
\
For multi-board posting, use `pinterestBoards`.\
\
**property name\***string\
\
**pinterestBoards** object\[\]\
\
Per-account Pinterest board selection. Each entry binds one connected Pinterest account to a list of boards on that account. Each board produces an independent child post tracked separately for success/failure. Capped at 25 boards per account.\
\
When supplied, this field takes precedence over the deprecated `boardIds` field.\
\
*   Array \[\
    \
\
**accountId**stringrequired\
\
Connected Pinterest account ID. Must match one of the accounts referenced in the post's `userIds`.\
\
**Example:** `6887d6de1d8175813d50dab8`\
\
**boards**string\[\]required\
\
Pinterest board IDs to publish to on this account. Each board produces an independent child post. Capped at 25 boards per account.\
\
**Possible values:** `>= 1`, `<= 25`\
\
**Example:** `["987654321098765432","234567890123456789"]`\
\
*   \]\
    \
\
**shortenedLinks**string\[\]\
\
Shortened links for the post (auto-generated).\
\
**facebookPostDetails** object\
\
Facebook Post Details\
\
**type**stringrequired\
\
Facebook post format type.\
\
**Available Types:**\
\
*   `post` - Standard feed post (images, videos, text)\
*   `story` - 24-hour temporary story\
*   `reel` - Short-form vertical video\
\
**Restrictions:**\
\
*   Reels: Require exactly 1 video, not supported on Groups\
*   Stories: Captions not supported\
\
**Possible values:** \[`post`, `story`, `reel`\]\
\
**Example:** `post`\
\
**textFormatPresetId**string\
\
Facebook background preset ID for text-only feed posts. **Facebook `post` only** — not `story` or `reel`. Ignored when media is attached; `metaLink` is omitted on publish.\
\
**Validations** — request returns `400` if violated:\
\
*   Must be a valid preset ID from the [Facebook text background preset reference](https://help.leadconnectorhq.com/support/solutions/articles/155000008005-facebook-text-background-posts-preset-reference)\
    . Empty strings, whitespace-only values, and `null` are rejected.\
*   When set, `summary` must be 130 characters or fewer.\
\
**Example:** `303063890126415`\
\
**instagramPostDetails** object\
\
Instagram Post Details\
\
**type**stringrequired\
\
Instagram post format type.\
\
**Available Types:**\
\
*   `post` - Standard feed post (images, videos, carousels)\
*   `story` - 24-hour temporary story\
*   `reel` - Short-form vertical video (up to 90 seconds)\
\
**Restrictions:**\
\
*   Media is REQUIRED for all Instagram posts\
*   Reels: Require exactly 1 video\
*   Stories: Captions not supported, JPEG only for images\
\
**Possible values:** \[`post`, `story`, `reel`\]\
\
**Example:** `post`\
\
**collaborators**object\
\
Object mapping account IDs to arrays of associated usernames for collaboration. Only allowed for type "post" and "reels"\
\
**Example:** `{"accountId1":["username1","username2"],"accountId2":["username3","username4"]}`\
\
**showOnFeed**boolean\
\
Show Reel on profile grid/feed.\
\
**✅ Applies to:** Reels only\
\
*   `true` - Reel appears on your profile grid\
*   `false` - Reel only appears in Reels tab\
\
**Example:** `true`\
\
**publishViaPushNotification**boolean\
\
Send Instagram Story via Push Notification instead of direct posting. Only applicable for Story type.\
\
**Example:** `true`\
\
**publisherNote**string\
\
Note to the publisher for manual posting guidance. Only used when publishViaPushNotification is true.\
\
**Example:** `When publishing, add swipe up link to the landing page so that we can direct them to the sales page`\
\
**youtubePostDetails** object\
\
Youtube Post Details\
\
**title**string\
\
Video title displayed on YouTube.\
\
**Max length:** 100 characters\
\
**Best Practices:**\
\
*   Include relevant keywords\
*   Be descriptive but concise\
*   Avoid clickbait\
\
**Example:** `How to Build a Successful Marketing Strategy in 2024`\
\
**privacyLevel**string\
\
Video visibility/privacy setting.\
\
**Available Values:**\
\
*   `public` - Anyone can search and view\
*   `unlisted` - Only people with the link can view\
*   `private` - Only you can view\
\
**Possible values:** \[`private`, `public`, `unlisted`\]\
\
**Example:** `public`\
\
**type**stringrequired\
\
YouTube video format type.\
\
**Available Types:**\
\
*   `video` - Standard YouTube video (landscape, any duration)\
*   `short` - YouTube Shorts (vertical, up to 60 seconds)\
\
**Required field.**\
\
**Possible values:** \[`video`, `short`\]\
\
**Example:** `video`\
\
**mediaOptimization**boolean\
\
Pass this parameter to optimize the image media\
\
**Example:** `true`\
\
**insights** object\
\
Aggregated engagement metrics for the published post. Populated asynchronously by the insights sync workers for supported platforms (Facebook, Instagram, LinkedIn, YouTube). Absent on posts that have not been synced yet or on platforms where insights are not supported.\
\
**like**number\
\
Total number of likes (or platform-equivalent reactions) on the post.\
\
**Example:** `12`\
\
**share**number\
\
Total number of shares/reposts of the post.\
\
**Example:** `3`\
\
**comment**number\
\
Total number of comments on the post.\
\
**Example:** `5`\
\
**previewLink**stringnullable\
\
Direct link to view the published post on the native platform. Populated once the post is published on a platform that returns a permalink; `null` for posts that are not yet published (draft, scheduled, failed) or on platforms that do not return a link.\
\
**Example:** `https://www.facebook.com/12345/posts/67890`\
\
**queueItemId**string\
\
The unique identifier of the queue item.\
\
**Example:** `60af88475f1b2c001f5d5f4b`\
\
**queueId**string\
\
The ID of the queue this post belongs to\
\
**Example:** `60af88475f1b2c001f5d5f4a`\
\
**order**number\
\
The order of the item in the queue.\
\
**Example:** `1000`\
\
**variations** object\[\]\
\
A list of content variations for the post.\
\
*   Array \[\
    \
\
**_id**string\
\
The ID of the variation.\
\
**Example:** `60af88475f1b2c001f5d5f4c`\
\
**content**string\
\
The text content of the variation.\
\
**Example:** `Check out our latest blog post! #marketing #socialmedia`\
\
**mentions**object\[\]\
\
Platform-specific mentions within the content (e.g., @username references).\
\
**Example:** `[{"platform":"instagram","username":"example_user","offset":10,"length":12}]`\
\
**ogTags** object\
\
Open Graph tags for link previews.\
\
**metaLink**object\
\
The canonical URL of the content.\
\
**Example:** `https://example.com`\
\
**metaImage**object\
\
URL of the content's primary image.\
\
**Example:** `https://example.com/image.png`\
\
**ogTitle**object\
\
The title of the content.\
\
**Example:** `Example Title`\
\
*   \]\
    \
\
**primaryImage**string\
\
The primary image URL for the post.\
\
**Example:** `https://example.com/images/post-image.png`\
\
**errors**string\[\]\
\
List of errors associated with the queue item. Possible values: INVALID_USER_ID, PIXABAY_MEDIA.\
\
**Example:** `["INVALID_USER_ID","PIXABAY_MEDIA"]`\
\
**category** objectnullable\
\
The category associated with this post\
\
**_id**string\
\
Category ID\
\
**Example:** `6756f381be2553245b08d30c`\
\
**name**string\
\
Name of the category\
\
**Example:** `Category Name`\
\
**primaryColor**string\
\
Primary color of the category\
\
**Example:** `#FFFFFF`\
\
**secondaryColor**string\
\
Secondary color of the category\
\
**Example:** `#000000`\
\
**deleted**boolean\
\
Indicates if the category is deleted\
\
**Example:** `false`\
\
**locationId**string\
\
Location ID\
\
**Example:** `fvg1TXIiVxGcdOaL0riG`\
\
**createdBy**string\
\
ID of the user who created the category\
\
**Example:** `SQ6d63Va2PUbWEZ9k0TD`\
\
**createdAt**string\
\
Creation timestamp\
\
**Example:** `2024-12-09T13:41:21.385Z`\
\
**updatedAt**string\
\
Last update timestamp\
\
**Example:** `2024-12-09T13:41:21.385Z`\
\
**currentVariation**number\
\
The index of the current variation being used for this post\
\
**Example:** `0`\
\
**timezone**string\
\
The timezone in which the post is scheduled\
\
**Example:** `America/New_York`\
\
**isDraft**boolean\
\
Indicates this is a draft item from an edit session\
\
**Example:** `true`\
\
**originalItemId**stringnullable\
\
Original queue item ID if this draft was created from an existing item\
\
**Example:** `60af88475f1b2c001f5d5f4b`\
\
*   \]
    

**total**number

Total number of scheduled posts returned

**timezone**string

The timezone used for scheduling, e.g., "Asia/Calcutta"

**traceId**string

    {  "success": true,  "statusCode": 201,  "results": {    "message": "Edit session calendar fetched successfully",    "scheduledPosts": [      {        "scheduledDateTime": "2023-10-15T10:00:00.000Z",        "post": {          "_id": "61bb16833b3f2791f9715be2",          "source": "composer",          "locationId": "ve9EPM428h8vShlRW1KT",          "platform": "google",          "thumbnail": "https://storage.googleapis.com/your-bucket/media/video-thumbnail.jpeg",          "displayDate": "2023-08-02T00:00:00.000Z",          "createdAt": "2023-08-02T00:00:00.000Z",          "updatedAt": "2023-08-02T00:00:00.000Z",          "accountId": "w37swmmLbA02zgqKPpxITe",          "error": "Failed due to auth token",          "postId": "323534534435",          "publishedAt": "2021-06-22T05:32:49.463Z",          "accountIds": [            "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"          ],          "summary": "Sample Summary",          "media": [            {              "url": "https://example.com/image.jpg",              "type": "image/jpeg",              "caption": "Sample caption",              "altText": "A sunset over the ocean with silhouetted palm trees"            }          ],          "status": "published",          "createdBy": "Lx1EI6YIgQYMQi0ytFXv",          "type": "post",          "tags": [            "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"          ],          "ogTagsDetails": {            "metaImage": "https://example.com/image.jpg",            "metaLink": "https://www.yahoo.com/",            "ogTitle": "Page Title",            "ogDescription": "Page Description"          },          "postApprovalDetails": {            "approver": "iVrVJ2uoXNF0wzcBzgl5",            "approvalStatus": "approved"          },          "tiktokPostDetails": {            "privacyLevel": "PUBLIC_TO_EVERYONE",            "enableComment": true          },          "gmbPostDetails": {            "gmbEventType": "STANDARD",            "actionType": "BOOK"          },          "blueskyPostDetails": {            "shortenedLinks": [              "string"            ],            "replyTo": "at://did:plc:abc123def456/app.bsky.feed.post/xyz789",            "quotePost": "at://did:plc:abc123def456/app.bsky.feed.post/xyz789",            "language": "en",            "externalLink": "https://yoursite.com/article",            "externalLinkTitle": "10 Tips for Better Social Media Marketing",            "externalLinkDescription": "Learn how to improve your social media presence with these proven strategies."          },          "user": {            "id": "6284c43d519161e96cc09c13",            "firstName": "Harry",            "lastName": "Spencer",            "email": "abc@xyc.com"          },          "linkedinPostDetails": {            "pdfTitle": "Q4 Marketing Strategy Presentation",            "postAsPdf": true,            "poll": {              "question": "What is your favorite color?",              "options": [                {                  "text": "Red"                }              ],              "settings": {                "duration": "SEVEN_DAYS"              }            }          },          "pinterestPostDetails": {            "title": "10 Easy Home Decor Ideas for 2024",            "link": "https://yoursite.com/blog/home-decor-ideas",            "pinterestBoards": [              {                "accountId": "6887d6de1d8175813d50dab8",                "boards": [                  "987654321098765432",                  "234567890123456789"                ]              },              {                "accountId": "682c7d1710a2fe3d805a3513",                "boards": [                  "111222333444555666"                ]              }            ],            "shortenedLinks": [              "string"            ]          },          "facebookPostDetails": {            "type": "post",            "textFormatPresetId": "303063890126415"          },          "instagramPostDetails": {            "type": "post",            "collaborators": {              "accountId1": [                "username1",                "username2"              ],              "accountId2": [                "username3",                "username4"              ]            },            "showOnFeed": true,            "publishViaPushNotification": true,            "publisherNote": "When publishing, add swipe up link to the landing page so that we can direct them to the sales page"          },          "youtubePostDetails": {            "title": "How to Build a Successful Marketing Strategy in 2024",            "privacyLevel": "public",            "type": "video"          },          "mediaOptimization": true,          "insights": {            "like": 12,            "share": 3,            "comment": 5          },          "previewLink": "https://www.facebook.com/12345/posts/67890"        },        "queueItemId": "60af88475f1b2c001f5d5f4b",        "queueId": "60af88475f1b2c001f5d5f4a",        "order": 1000,        "variations": [          {            "_id": "60af88475f1b2c001f5d5f4c",            "content": "Check out our latest blog post! #marketing #socialmedia",            "mentions": [              {                "platform": "instagram",                "username": "example_user",                "offset": 10,                "length": 12              }            ],            "ogTags": {              "metaLink": "https://example.com",              "metaImage": "https://example.com/image.png",              "ogTitle": "Example Title"            }          }        ],        "primaryImage": "https://example.com/images/post-image.png",        "errors": [          "INVALID_USER_ID",          "PIXABAY_MEDIA"        ],        "category": {          "_id": "6756f381be2553245b08d30c",          "name": "Category Name",          "primaryColor": "#FFFFFF",          "secondaryColor": "#000000",          "deleted": false,          "locationId": "fvg1TXIiVxGcdOaL0riG",          "createdBy": "SQ6d63Va2PUbWEZ9k0TD",          "createdAt": "2024-12-09T13:41:21.385Z",          "updatedAt": "2024-12-09T13:41:21.385Z"        },        "currentVariation": 0,        "timezone": "America/New_York",        "isDraft": true,        "originalItemId": "60af88475f1b2c001f5d5f4b"      }    ],    "total": 0,    "timezone": "string"  },  "traceId": "string"}
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/category/queues/:queueId/edit/calendar' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "609e126a1c4ae1001291e1b5",  "sessionId": "60af88475f1b2c001f5d5f4b",  "startDate": "2023-10-01T00:00:00.000Z",  "endDate": "2023-10-31T23:59:59.999Z",  "accountIds": [    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"  ]}'

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
  "locationId": "609e126a1c4ae1001291e1b5",  "sessionId": "60af88475f1b2c001f5d5f4b",  "startDate": "2023-10-01T00:00:00.000Z",  "endDate": "2023-10-31T23:59:59.999Z",  "accountIds": \[    "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
