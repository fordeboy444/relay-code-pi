# Upsert ad

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-ad
- **Summary:** Create or update a Facebook ad

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-ad#__docusaurus_skipToContent_fallback)

Version: v3

Upsert ad
=========

PUT 

https://services.leadconnectorhq.com/ad-publishing/facebook/ads

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a Facebook ad

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-ad#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**id**string

Ad identifier

**Example:** `ad_123`

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**name**string

Ad name

**Example:** `My Ad Creative`

**primaryText**string

Ad primary text

**Example:** `Check out our offer!`

**headline**string

Ad headline text

**Example:** `Great Deal`

**description**string

Ad description text

**Example:** `Limited time offer`

**imageUrl**string

Ad image URL

**Example:** `https://example.com/img.jpg`

**mediaType**string

Ad media type

**Possible values:** \[`SINGLE`, `CAROUSEL`\]

**Example:** `SINGLE`

**media** object\[\]

Media items (images or videos) attached to the ad creative

*   Array \[\
    \
\
**src**stringrequired\
\
Media source URL\
\
**Example:** `https://example.com/image.jpg`\
\
**thumbnailUrl**string\
\
Thumbnail URL (required when type is video)\
\
**Example:** `https://example.com/thumb.jpg`\
\
**selectedPoster**number\
\
Selected poster index (required when type is video)\
\
**Example:** `0`\
\
**type**stringrequired\
\
Media content type\
\
**Possible values:** \[`image`, `video`\]\
\
**Example:** `IMAGE`\
\
**name**string\
\
Media file name\
\
**Example:** `ad_image.jpg`\
\
**headline**string\
\
Media headline\
\
**Example:** `Great Offer`\
\
**description**string\
\
Media description\
\
**Example:** `Click to learn more`\
\
**link**string\
\
Media destination link\
\
**Example:** `https://example.com`\
\
*   \]
    

**multiAdvertiserAds**boolean

Enable multi-advertiser ads

**Example:** `false`

**campaignId**stringrequired

Parent campaign ID

**Example:** `camp_123`

**adsetId**stringrequired

Parent ad set ID

**Example:** `adset_123`

**cta**string

Call to action type

**Example:** `LEARN_MORE`

**conversationFormId**string

Conversation form ID

**Example:** `conv_123`

**destinationLink**string

Destination link URL

**Example:** `https://example.com`

**destinationFormId**string

Destination form ID

**Example:** `form_123`

    {  "id": "ad_123",  "locationId": "loc_abc123",  "name": "My Ad Creative",  "primaryText": "Check out our offer!",  "headline": "Great Deal",  "description": "Limited time offer",  "imageUrl": "https://example.com/img.jpg",  "mediaType": "SINGLE",  "media": [    {      "src": "https://example.com/image.jpg",      "thumbnailUrl": "https://example.com/thumb.jpg",      "selectedPoster": 0,      "type": "IMAGE",      "name": "ad_image.jpg"    }  ],  "multiAdvertiserAds": false,  "campaignId": "camp_123",  "adsetId": "adset_123",  "cta": "LEARN_MORE",  "conversationFormId": "conv_123",  "destinationLink": "https://example.com",  "destinationFormId": "form_123"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-ad#responses "Direct link to Responses")

*   200
*   400
*   401
*   422
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/facebook/ads' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "id": "ad_123",  "locationId": "loc_abc123",  "name": "My Ad Creative",  "primaryText": "Check out our offer!",  "headline": "Great Deal",  "description": "Limited time offer",  "imageUrl": "https://example.com/img.jpg",  "mediaType": "SINGLE",  "media": [    {      "src": "https://example.com/image.jpg",      "thumbnailUrl": "https://example.com/thumb.jpg",      "selectedPoster": 0,      "type": "IMAGE",      "name": "ad_image.jpg"    }  ],  "multiAdvertiserAds": false,  "campaignId": "camp_123",  "adsetId": "adset_123",  "cta": "LEARN_MORE",  "conversationFormId": "conv_123",  "destinationLink": "https://example.com",  "destinationFormId": "form_123"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---2021-07-28

Body required

{
  "id": "ad_123",  "locationId": "loc_abc123",  "name": "My Ad Creative",  "primaryText": "Check out our offer!",  "headline": "Great Deal",  "description": "Limited time offer",  "imageUrl": "https://example.com/img.jpg",  "mediaType": "SINGLE",  "media": \[    {      "src": "https://example.com/image.jpg",      "thumbnailUrl": "https://example.com/thumb.jpg",      "selectedPoster": 0,      "type": "IMAGE",      "name": "ad_image.jpg"    }  \],  "multiAdvertiserAds": false,  "campaignId": "camp_123",  "adsetId": "adset_123",  "cta": "LEARN_MORE",  "conversationFormId": "conv_123",  "destinationLink": "https://example.com",  "destinationFormId": "form_123"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
