# Get CSV Post

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-csv-post
- **Summary:** Get details of a specific CSV import including its posts

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-csv-post#__docusaurus_skipToContent_fallback)

Version: v3

Get CSV Post
============

GET 

https://services.leadconnectorhq.com/social-media-posting/:locationId/csv/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get details of a specific CSV import including its posts

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-csv-post#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**id** stringrequired

CSV Id

**Example:** `65f92e55cc884f0d0845e447`

### Query Parameters

**skip** string

Number of records to skip

**Example:** `0`

**limit** string

Maximum number of records to return

**Example:** `10`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-csv-post#responses "Direct link to Responses")

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

**Example:** `Fetched CSV Post`

**results** object

Requested Results

**csv** object

CSV Data

**id**string

CSV Id

**Example:** `ve9EPM428h8vShlRW1KT`

**locationId**string

Location Id

**Example:** `iVrVJ2uoXNF0wzcBzgl5`

**fileName**string

File Name

**Example:** `sample.csv`

**accountIds**string\[\]

Account Ids

**Example:** `["aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"]`

**file**string

File path

**Example:** `omaDY3RbWtTP511e/social-import/d23d68c2-82c0-1db6e2.csv`

**status**string

CSV import status

**Possible values:** \[`pending`, `in_progress`, `completed`, `failed`, `in_review`, `importing`, `deleted`\]

**Example:** `completed`

**count**number

Posts count

**Example:** `5`

**createdBy**string

Created By Id

**Example:** `SDsdfdf45Dgs4w3ssss`

**traceId**string

Trace Id

**Example:** `FSeSDsdfdf45Dgs4w3ssss`

**originId**string

Origin Id

**Example:** `FSeSDsdfdf45Dgs4w3ssss`

**approver**string

Approver Id

**Example:** `FSeSDsdfdf45Dgs4w3ssss`

**createdAt**string<date-time>

Date Created

**Example:** `2023-08-02T00:00:00.000Z`

**csvFileType**string

CSV file type

**Possible values:** \[`basic`, `advance`\]

**Example:** `basic`

**mediaOptimization**boolean

Media optimization flag

**Example:** `true`

**applyWatermark**boolean

Apply watermark flag

**Example:** `false`

**channel**string

Channel

**Example:** `oauth`

**updatedAt**string<date-time>

Date Updated

**Example:** `2023-08-02T00:00:00.000Z`

**count**number

Total count of posts in CSV

**Example:** `6`

**posts** object\[\]

CSV Posts

*   Array \[\
    \
\
**accountIds**string\[\]\
\
Account Ids\
\
**Example:** `["aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"]`\
\
**link** object\
\
OG Tag\
\
**url**string\
\
Tag url\
\
**Example:** `https://knowledge.wharton.upenn.edu/article/impact-of-social-media/`\
\
**ogDescription**string\
\
Tag description\
\
**Example:** `Social media as we know it has barely`\
\
**ogImage** object\
\
OG Image data\
\
**url**string\
\
Image url\
\
**Example:** `https://knowledge.wharton.upenn.edu/wp-content/uploads/2019/07/072619_socialmedia_phonelikes-600x440.jpg`\
\
**width**number\
\
Image width\
\
**Example:** `400`\
\
**height**number\
\
Image height\
\
**Example:** `400`\
\
**type**string\
\
Image Type\
\
**Example:** `image/jpg`\
\
**ogTitle**string\
\
Tag Title\
\
**Example:** `The Impact of Social Media: Is it Irreplaceable?`\
\
**ogUrl**string\
\
Tag Url\
\
**Example:** `https://knowledge.wharton.upenn.edu/article/impact-of-social-media/`\
\
**ogSiteName**string\
\
Site Name\
\
**Example:** `Knowledge at Wharton`\
\
**error**string\
\
Og Tag Error\
\
**Example:** `InvalidLink`\
\
**medias** object\[\]\
\
Post Media List\
\
*   Array \[\
    \
\
**url**string\
\
Media Url\
\
**Example:** `https://storage.googleapis.com/crm-test/omaDY3RbWtTP511e808O/media/38e53059-b92706571605.png`\
\
**type**string\
\
Media Type\
\
**Example:** `image/webp`\
\
**size**number\
\
Media Size\
\
**Example:** `18362`\
\
**width**number\
\
Media Width\
\
**Example:** `500`\
\
**height**number\
\
Media Height\
\
**Example:** `500`\
\
**aspectRatio**number\
\
Media Aspect Ratio\
\
**Example:** `1.5`\
\
**duration**number\
\
Media Aspect Ratio\
\
**Example:** `60`\
\
**format**string\
\
Media format\
\
**Example:** `jpg`\
\
**videoCodecName**string\
\
Video Codec\
\
**Example:** `h264`\
\
**frameRate**number\
\
Video Frame Rate\
\
**Example:** `21`\
\
**audioCodecName**string\
\
Audio Codec\
\
**Example:** `aac`\
\
**audioChannels**number\
\
Audio Channel\
\
**Example:** `1`\
\
**displayAspectRatio**string\
\
Display Aspect Ratio\
\
**Example:** `250 : 167`\
\
**frames**string\[\]\
\
List of frames\
\
**Example:** `["https://storage.googleapis.com/crm-test/frame1.jpg","https://storage.googleapis.com/crm-test/frame2.jpg"]`\
\
**selectedPoster**number\
\
Selected Poster\
\
**Example:** `0`\
\
**error**string\
\
Error\
\
**Example:** `Image is larger than 10MB`\
\
**instagramError**string\
\
Instagram media error. It can be one of the following errors: imageSize, imageType, videoType, videoDuration, videoSize, videoAspectRatio, videoWidthHeight, audioCodec, audioCodecChannels, videoCodec, videoFrameRate\
\
**Example:** `imageSize`\
\
**gmbError**string\
\
GMB media error. It can be one of the following errors: imageSize, imageDimension, imageType\
\
**Example:** `imageDimension`\
\
**facebookError**string\
\
Facebook media error. It can be one of the following errors: imageSize, imageType, videoDuration, videoSize\
\
**Example:** `videoDuration`\
\
**linkedinError**string\
\
LinkedIn media error. It can be one of the following errors: imageSize, imageType, videoType, videoDuration, videoSize\
\
**Example:** `imageType`\
\
**twitterError**string\
\
Twitter media error. It can be one of the following errors: imageSize, videoType, videoDuration, videoSize\
\
**Example:** `videoSize`\
\
**tiktokError**string\
\
Tiktok media error. It can be one of the following errors: videoType, videoDuration, videoSize, videoWidthHeight, videoCodec, videoFrameRate\
\
**Example:** `videoFrameRate`\
\
**tiktokBusinessError**string\
\
Tikok Business media error. It can be one of the following errors: videoType, videoDuration, videoSize, videoWidthHeight, videoCodec, videoFrameRate\
\
**Example:** `videoType`\
\
**invalidError**string\
\
Media error. It can be one of the following values: imageSize, imageWidth\
\
**Example:** `imageSize`\
\
*   \]\
    \
\
**scheduleDate**string\
\
Schedule date for the post in ISO format\
\
**Example:** `2022-11-23T05:53:00.000Z`\
\
**summary**string\
\
Post content/summary\
\
**Example:** `First post`\
\
**followUpComment**string\
\
Follow-up comment to be posted immediately after the main post is published.\
\
**Supported Platforms:** Facebook, Instagram, LinkedIn, YouTube\
\
**NOT Supported:** TikTok, Google My Business (GMB), Pinterest\
\
**Use Case:** Great for adding hashtags, additional context, or engagement prompts without cluttering the main post.\
\
*   Follow-up comment is automatically trimmed to platform limits\
\
**Reference:** [Platform Limitations Guide](https://help.leadconnectorhq.com/support/solutions/articles/48001240003-social-planner-image-video-content-and-api-limitations)\
\
**Example:** `What do you think? Let us know in the comments!`\
\
**type**string\
\
Post type - post, story, or reel\
\
**Example:** `post`\
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
**errorMessage**string\
\
Error Description\
\
**Example:** `Invalid media format`\
\
**csvFileType**string\
\
CSV file type\
\
**Possible values:** \[`basic`, `advance`\]\
\
**Example:** `basic`\
\
**mediaOptimization**boolean\
\
Media optimization flag\
\
**Example:** `true`\
\
**applyWatermark**boolean\
\
Apply watermark flag\
\
**Example:** `false`\
\
**status**string\
\
Post status\
\
**Possible values:** \[`pending`, `accepted`, `rejected`, `deleted`\]\
\
**Example:** `pending`\
\
**updatedAt**string<date-time>\
\
Date Updated\
\
**Example:** `2023-08-02T00:00:00.000Z`\
\
*   \]
    

    {  "success": true,  "statusCode": 200,  "message": "Fetched CSV Post",  "results": {    "csv": {      "id": "ve9EPM428h8vShlRW1KT",      "locationId": "iVrVJ2uoXNF0wzcBzgl5",      "fileName": "sample.csv",      "status": "completed",      "count": 5    },    "count": 6,    "posts": [      {        "accountIds": [          "aF3KhyL8JIuBwzK3m7Ly_iVrVJ2uoXNF0wzcBzgl5_12554616564525983496"        ],        "summary": "First post",        "type": "post"      }    ]  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
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

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/ve9EPM428h8vShlRW1KT/csv/65f92e55cc884f0d0845e447?skip=0&limit=10' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

id — pathrequired

Version — headerrequired\---v3

Show optional parameters

skip — query

limit — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
