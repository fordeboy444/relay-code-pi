# Upsert Google campaign

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-campaign
- **Summary:** Create or update a full Google Ads campaign structure

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-campaign#__docusaurus_skipToContent_fallback)

Version: v3

Upsert Google campaign
======================

PUT 

https://services.leadconnectorhq.com/ad-publishing/google/ads

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a full Google Ads campaign structure

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-campaign#request "Direct link to request")

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

Campaign identifier

**Example:** `camp_abc123`

**name**stringrequired

Campaign name

**Example:** `My Campaign`

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**advertisingChannelType**stringrequired

Advertising channel

**Possible values:** \[`SEARCH`, `DISCOVERY`, `DISPLAY`, `HOTEL`, `LOCAL`, `MULTI_CHANNEL`, `PERFORMANCE_MAX`, `DEMAND_GEN`\]

**Example:** `SEARCH`

**advertisingChannelSubType**string

Channel sub type

**Possible values:** \[`DEMAND_GEN`\]

**Example:** `DEMAND_GEN`

**goalType**string

Goal type

**Possible values:** \[`WEBSITE_TRAFFIC`, `LEAD`\]

**Example:** `WEBSITE_TRAFFIC`

**budget** object

Campaign budget

**budgetType**string

Budget type

**Possible values:** \[`DAILY`, `LIFETIME`\]

**Example:** `DAILY`

**amount**number

Budget amount in micros

**Example:** `5000`

**scheduleStartDate**string

Schedule start date

**Example:** `2024-01-01`

**scheduleEndDate**string

Schedule end date

**Example:** `2024-12-31`

**audience** object

Campaign audience targeting

**geoLocations** object\[\]

Geo-location targeting

*   Array \[\
    \
\
**key**string\
\
Geo target constant resource name\
\
**Example:** `geoTargetConstants/2840`\
\
**id**string\
\
Location identifier (place_id)\
\
**Example:** `ChIJOwg_06VPwokRYv534QaPC8g`\
\
**name**string\
\
Location display name\
\
**Example:** `New York`\
\
**countryName**string\
\
Country name\
\
**Example:** `United States`\
\
**type**string\
\
Location type (city, region, country, address, etc.)\
\
**Example:** `city`\
\
**radius**number\
\
Radius for proximity targeting\
\
**Example:** `25`\
\
**radiusUnit**string\
\
Radius unit\
\
**Possible values:** \[`km`, `mi`\]\
\
**Example:** `mi`\
\
**selectionType**string\
\
Include or exclude this location\
\
**Possible values:** \[`include`, `exclude`\]\
\
**Example:** `include`\
\
**resourceName**string\
\
Google Ads resource name\
\
**Example:** `customers/123/geoTargetConstants/2840`\
\
**placeId**string\
\
Google place ID\
\
**Example:** `ChIJOwg_06VPwokRYv534QaPC8g`\
\
**formattedAddress**string\
\
Full formatted address string\
\
**Example:** `New York, NY, USA`\
\
**geometry** object\
\
Geometry data from Google Geocoding API\
\
**location** object\
\
Location coordinates\
\
**lat**number\
\
Latitude\
\
**Example:** `40.7128`\
\
**lng**number\
\
Longitude\
\
**Example:** `-74.006`\
\
**locationType**string\
\
Location type (e.g. APPROXIMATE)\
\
**Example:** `APPROXIMATE`\
\
**viewport** object\
\
Viewport bounding box\
\
**northeast** object\
\
Northeast corner of the viewport\
\
**lat**number\
\
Latitude\
\
**Example:** `40.7128`\
\
**lng**number\
\
Longitude\
\
**Example:** `-74.006`\
\
**southwest** object\
\
Southwest corner of the viewport\
\
**lat**number\
\
Latitude\
\
**Example:** `40.7128`\
\
**lng**number\
\
Longitude\
\
**Example:** `-74.006`\
\
**addressComponents** object\[\]\
\
Address components from Google Geocoding API\
\
*   Array \[\
    \
\
**longName**string\
\
Full name of the address component\
\
**Example:** `New York`\
\
**shortName**string\
\
Abbreviated name of the address component\
\
**Example:** `NY`\
\
**types**string\[\]\
\
Address component types\
\
**Example:** `["locality","political"]`\
\
*   \]\
    \
\
*   \]
    

**locales** object\[\]

Language/locale targeting

*   Array \[\
    \
\
**name**string\
\
Language display name\
\
**Example:** `English`\
\
**key**string\
\
Language key\
\
**Example:** `1000`\
\
**id**string\
\
Language identifier\
\
**Example:** `1000`\
\
**resourceName**string\
\
Language resource name\
\
**Example:** `languageConstants/1000`\
\
*   \]
    

**gender** object\[\]

Gender targeting

*   Array \[\
    \
\
**enum**stringrequired\
\
Demographic enum value\
\
**Example:** `MALE`\
\
**negative**booleanrequired\
\
Whether this is a negative target\
\
**Example:** `false`\
\
*   \]
    

**ageRange** object\[\]

Age range targeting

*   Array \[\
    \
\
**enum**stringrequired\
\
Demographic enum value\
\
**Example:** `MALE`\
\
**negative**booleanrequired\
\
Whether this is a negative target\
\
**Example:** `false`\
\
*   \]
    

**segments** object\[\]

Audience segment targeting

*   Array \[\
    \
\
**type**stringrequired\
\
Segment type\
\
**Example:** `USER_LIST`\
\
**id**stringrequired\
\
Segment identifier\
\
**Example:** `customers/123/userLists/456`\
\
*   \]
    

**targetInterests** object

Interest-based targeting

**affinity**string\[\]

Affinity audience IDs

**Example:** `["customers/123/userInterests/789"]`

**inMarket**string\[\]

In-market audience IDs

**Example:** `["customers/123/userInterests/321"]`

**networkSettings** object

Network settings

**targetSearchNetwork**booleanrequired

Target Google Search Network

**Example:** `true`

**targetContentNetwork**booleanrequired

Target Google Display Network

**Example:** `false`

**biddingStrategy** object

Bidding strategy config

**type**string

Bidding strategy type

**Example:** `MAXIMIZE_CONVERSIONS`

**value**number

Bid value in micros

**Example:** `1000000`

**assets** object

Campaign assets

**calls**string\[\]

Call extension asset resource names

**Example:** `["customers/123/assets/456"]`

**sitelinks**string\[\]

Sitelink asset resource names

**Example:** `["customers/123/assets/789"]`

**leadForm**string

Lead form asset resource name

**Example:** `customers/123/assets/321`

**images** object\[\]

Image assets

*   Array \[\
    \
\
**url**stringrequired\
\
Image URL\
\
**Example:** `https://example.com/logo.png`\
\
**resourceName**string\
\
Google Ads resource name\
\
**Example:** `customers/123/assets/456`\
\
**name**string\
\
Asset name\
\
**Example:** `Logo`\
\
**error**string\
\
Error message if asset upload failed\
\
**Example:** `Image too large`\
\
*   \]
    

**businessLogo** object

Business logo asset

**url**stringrequired

Image URL

**Example:** `https://example.com/logo.png`

**resourceName**string

Google Ads resource name

**Example:** `customers/123/assets/456`

**name**string

Asset name

**Example:** `Logo`

**error**string

Error message if asset upload failed

**Example:** `Image too large`

**isEuPoliticalAds**boolean

EU political ads flag

**Example:** `false`

**adGroups** object\[\]

Campaign ad groups

*   Array \[\
    \
\
**id**string\
\
Ad group identifier\
\
**Example:** `ag_abc123`\
\
**adGroupId**string\
\
Google ad group identifier\
\
**Example:** `customers/123/adGroups/456`\
\
**name**string\
\
Ad group name\
\
**Example:** `Ad Group 1`\
\
**adCampaignId**string\
\
Ad campaign identifier\
\
**Example:** `camp_abc123`\
\
**adContent** object\[\]\
\
Ad content items\
\
*   Array \[\
    \
\
**id**string\
\
Ad identifier\
\
**Example:** `ad_abc123`\
\
**name**string\
\
Ad name\
\
**Example:** `Summer Sale Ad`\
\
**mediaType**string\
\
Media type\
\
**Possible values:** \[`IMAGE`, `VIDEO`, `CAROUSEL`\]\
\
**Example:** `IMAGE`\
\
**headlines**string\[\]\
\
Ad headlines\
\
**Example:** `["Buy Now","Best Deals"]`\
\
**longHeadlines**string\[\]\
\
Long headlines\
\
**Example:** `["Discover Great Deals Today"]`\
\
**descriptions**string\[\]\
\
Ad descriptions\
\
**Example:** `["Great products"]`\
\
**finalUrl**string\
\
Final URL\
\
**Example:** `https://example.com`\
\
**path1**string\
\
Display path 1\
\
**Example:** `products`\
\
**path2**string\
\
Display path 2\
\
**Example:** `deals`\
\
**isDeleted**boolean\
\
Whether the ad is soft-deleted\
\
**Example:** `false`\
\
**adError**string\
\
Ad-level error message from Google\
\
**Example:** `Landing page URL is invalid`\
\
**publishingStatus**string\
\
Ad publishing status\
\
**Possible values:** \[`DRAFT`, `SCHEDULED`, `PUBLISHED`, `PUBLISHING`, `FAILED`, `IN_REVIEW`, `PAUSED`, `ARCHIVED`, `WITH_ISSUES`, `REJECTED`\]\
\
**Example:** `PUBLISHED`\
\
**adId**string\
\
Internal ad identifier\
\
**Example:** `ad_internal_abc`\
\
**adCampaignId**string\
\
Ad campaign identifier\
\
**Example:** `camp_abc123`\
\
**adGroupId**string\
\
Ad group identifier\
\
**Example:** `ag_abc123`\
\
**googleAdId**string\
\
Google Ads ad resource ID\
\
**Example:** `customers/123/ads/456`\
\
**media** object\[\]\
\
Ad media items\
\
*   Array \[\
    \
\
**type**string\
\
Media type\
\
**Possible values:** \[`IMAGE`\]\
\
**Example:** `IMAGE`\
\
**src**string\
\
Media source URL\
\
**Example:** `https://example.com/image.jpg`\
\
**isLogo**boolean\
\
Is logo flag\
\
**Example:** `false`\
\
**error**string\
\
Error message if media failed\
\
**Example:** `Invalid format`\
\
**url**string\
\
Public URL of the media\
\
**Example:** `https://example.com/image.jpg`\
\
**imageType**string\
\
Image type classification\
\
**Example:** `SQUARE`\
\
*   \]\
    \
\
**callToActionLabel**string\
\
Call to action label\
\
**Possible values:** \[`AUTOMATED`, `LEARN_MORE`, `GET_QUOTE`, `APPLY_NOW`, `SIGN_UP`, `CONTACT_US`, `SUBSCRIBE`, `DOWNLOAD`, `BOOK_NOW`, `SHOP_NOW`, `BUY_NOW`, `DONATE_NOW`, `ORDER_NOW`, `PLAY_NOW`, `SEE_MORE`\]\
\
**Example:** `LEARN_MORE`\
\
**businessName**string\
\
Business name\
\
**Example:** `Acme Corp`\
\
**youtubeVideoLinks** object\[\]\
\
YouTube video links\
\
*   Array \[\
    \
\
**youtubeVideoId**stringrequired\
\
YouTube video ID\
\
**Example:** `dQw4w9WgXcQ`\
\
*   \]\
    \
\
**carouselCards** object\[\]\
\
Carousel cards\
\
*   Array \[\
    \
\
**headline**string\
\
Card headline\
\
**Example:** `Shop Now`\
\
**finalUrl**string\
\
Card final URL\
\
**Example:** `https://example.com`\
\
**callToActionLabel**string\
\
Call to action label\
\
**Example:** `LEARN_MORE`\
\
**media** object\[\]\
\
Card media items\
\
*   Array \[\
    \
\
**type**string\
\
Media type\
\
**Possible values:** \[`IMAGE`\]\
\
**Example:** `IMAGE`\
\
**src**string\
\
Media source URL\
\
**Example:** `https://example.com/image.jpg`\
\
**isLogo**boolean\
\
Is logo flag\
\
**Example:** `false`\
\
**error**string\
\
Error message if media failed\
\
**Example:** `Invalid format`\
\
**url**string\
\
Public URL of the media\
\
**Example:** `https://example.com/image.jpg`\
\
**imageType**string\
\
Image type classification\
\
**Example:** `SQUARE`\
\
*   \]\
    \
\
*   \]\
    \
\
**placements**string\[\]\
\
Channel placements\
\
**Possible values:** \[`GMAIL`, `YOUTUBE_IN_STREAM`, `YOUTUBE_SHORTS`, `YOUTUBE_IN_FEED`, `DISCOVER`, `DISPLAY`\]\
\
**Example:** `["YOUTUBE_IN_STREAM"]`\
\
**customChannels**boolean\
\
Custom channels flag\
\
**Example:** `false`\
\
*   \]\
    \
\
**keywords** object\
\
Keyword targeting\
\
**positives** object\[\]\
\
Positive keywords\
\
*   Array \[\
    \
\
**keyword**stringrequired\
\
Keyword text\
\
**Example:** `digital marketing`\
\
**matchType**stringrequired\
\
Match type (BROAD, PHRASE, EXACT)\
\
**Example:** `BROAD`\
\
*   \]\
    \
\
**negatives** object\[\]\
\
Negative keywords\
\
*   Array \[\
    \
\
**keyword**stringrequired\
\
Keyword text\
\
**Example:** `digital marketing`\
\
**matchType**stringrequired\
\
Match type (BROAD, PHRASE, EXACT)\
\
**Example:** `BROAD`\
\
*   \]\
    \
\
**publishingStatus**string\
\
Ad group publishing status\
\
**Possible values:** \[`DRAFT`, `SCHEDULED`, `PUBLISHED`, `PUBLISHING`, `FAILED`, `IN_REVIEW`, `PAUSED`, `ARCHIVED`, `WITH_ISSUES`, `REJECTED`\]\
\
**Example:** `PUBLISHED`\
\
**adGroupError**string\
\
Ad group-level error from Google\
\
**Example:** `Keyword policy violation`\
\
**googleAdGroupId**string\
\
Google Ads ad group resource ID\
\
**Example:** `customers/123/adGroups/456`\
\
**customChannels**boolean\
\
Custom channels flag\
\
**Example:** `false`\
\
**selectedChannels**string\[\]\
\
Selected channel placements\
\
**Possible values:** \[`GMAIL`, `YOUTUBE_IN_STREAM`, `YOUTUBE_SHORTS`, `YOUTUBE_IN_FEED`, `DISCOVER`, `DISPLAY`\]\
\
**Example:** `["YOUTUBE_IN_STREAM"]`\
\
**googleAudienceId**string\
\
Google audience resource ID\
\
**Example:** `customers/123/audiences/789`\
\
**audience** object\
\
Ad group audience targeting\
\
**geoLocations** object\[\]\
\
Geo-location targeting\
\
*   Array \[\
    \
\
**key**string\
\
Geo target constant resource name\
\
**Example:** `geoTargetConstants/2840`\
\
**id**string\
\
Location identifier (place_id)\
\
**Example:** `ChIJOwg_06VPwokRYv534QaPC8g`\
\
**name**string\
\
Location display name\
\
**Example:** `New York`\
\
**countryName**string\
\
Country name\
\
**Example:** `United States`\
\
**type**string\
\
Location type (city, region, country, address, etc.)\
\
**Example:** `city`\
\
**radius**number\
\
Radius for proximity targeting\
\
**Example:** `25`\
\
**radiusUnit**string\
\
Radius unit\
\
**Possible values:** \[`km`, `mi`\]\
\
**Example:** `mi`\
\
**selectionType**string\
\
Include or exclude this location\
\
**Possible values:** \[`include`, `exclude`\]\
\
**Example:** `include`\
\
**resourceName**string\
\
Google Ads resource name\
\
**Example:** `customers/123/geoTargetConstants/2840`\
\
**placeId**string\
\
Google place ID\
\
**Example:** `ChIJOwg_06VPwokRYv534QaPC8g`\
\
**formattedAddress**string\
\
Full formatted address string\
\
**Example:** `New York, NY, USA`\
\
**geometry** object\
\
Geometry data from Google Geocoding API\
\
**location** object\
\
Location coordinates\
\
**lat**number\
\
Latitude\
\
**Example:** `40.7128`\
\
**lng**number\
\
Longitude\
\
**Example:** `-74.006`\
\
**locationType**string\
\
Location type (e.g. APPROXIMATE)\
\
**Example:** `APPROXIMATE`\
\
**viewport** object\
\
Viewport bounding box\
\
**northeast** object\
\
Northeast corner of the viewport\
\
**lat**number\
\
Latitude\
\
**Example:** `40.7128`\
\
**lng**number\
\
Longitude\
\
**Example:** `-74.006`\
\
**southwest** object\
\
Southwest corner of the viewport\
\
**lat**number\
\
Latitude\
\
**Example:** `40.7128`\
\
**lng**number\
\
Longitude\
\
**Example:** `-74.006`\
\
**addressComponents** object\[\]\
\
Address components from Google Geocoding API\
\
*   Array \[\
    \
\
**longName**string\
\
Full name of the address component\
\
**Example:** `New York`\
\
**shortName**string\
\
Abbreviated name of the address component\
\
**Example:** `NY`\
\
**types**string\[\]\
\
Address component types\
\
**Example:** `["locality","political"]`\
\
*   \]\
    \
\
*   \]\
    \
\
**locales** object\[\]\
\
Language/locale targeting\
\
*   Array \[\
    \
\
**name**string\
\
Language display name\
\
**Example:** `English`\
\
**key**string\
\
Language key\
\
**Example:** `1000`\
\
**id**string\
\
Language identifier\
\
**Example:** `1000`\
\
**resourceName**string\
\
Language resource name\
\
**Example:** `languageConstants/1000`\
\
*   \]\
    \
\
*   \]
    

**campaignGoal** object

Campaign goal config

**type**stringrequired

Campaign goal type

**Possible values:** \[`CONVERSIONS`, `CLICK`, `YOUTUBE_ENGAGEMENT`\]

**Example:** `CLICK`

**value**string

Goal value (e.g. conversion action resource name)

**Example:** `customers/123/conversionActions/456`

**isCustomConversionGoal**boolean

Whether this is a custom conversion goal

**Example:** `false`

**adSchedule** object\[\]

Ad schedule rules

*   Array \[\
    \
\
**dayOfWeek**stringrequired\
\
Day of week\
\
**Possible values:** \[`FRIDAY`, `MONDAY`, `SATURDAY`, `SUNDAY`, `THURSDAY`, `TUESDAY`, `UNKNOWN`, `UNSPECIFIED`, `WEDNESDAY`, `ALL_DAYS`, `MONDAY_TO_FRIDAY`, `SATURDAY_AND_SUNDAY`\]\
\
**Example:** `MONDAY`\
\
**from**stringrequired\
\
Start time (HH:MM)\
\
**Example:** `09:00`\
\
**to**stringrequired\
\
End time (HH:MM)\
\
**Example:** `17:00`\
\
*   \]
    

**publishingStatus**string

Publishing status

**Possible values:** \[`DRAFT`, `SCHEDULED`, `PUBLISHED`, `PUBLISHING`, `FAILED`, `IN_REVIEW`, `PAUSED`, `ARCHIVED`, `WITH_ISSUES`, `REJECTED`\]

**Example:** `PUBLISHED`

**googleAdAccountId**string

Google Ad account identifier

**Example:** `123-456-7890`

**unpublishedChanges**boolean

Whether the campaign has unpublished changes

**Example:** `false`

**maximumCpc**number

Maximum CPC bid in micros

**Example:** `2000000`

**googleCampaignId**string

Google Ads campaign resource ID

**Example:** `customers/123/campaigns/456`

**source**string

Traffic source

**Example:** `WEBSITE`

**advancedOptions**object

Advanced options

**Example:** `{"source":"WEBSITE","postId":"post_abc123"}`

**customValueMappings**object

User-provided overrides for custom_values merge tags used in ad copy

**Example:** `{"{{ custom_values.pet_name }}":"Fluffy"}`

    {  "id": "camp_abc123",  "name": "My Campaign",  "locationId": "loc_abc123",  "advertisingChannelType": "SEARCH",  "advertisingChannelSubType": "DEMAND_GEN",  "goalType": "WEBSITE_TRAFFIC",  "budget": {    "budgetType": "DAILY",    "amount": 5000,    "scheduleStartDate": "2024-01-01"  },  "audience": {    "geoLocations": [      {        "key": "geoTargetConstants/2840",        "name": "United States"      }    ]  },  "networkSettings": {    "targetSearchNetwork": true,    "targetContentNetwork": false  },  "biddingStrategy": {    "type": "MAXIMIZE_CONVERSIONS",    "value": 1000000  },  "assets": {    "calls": [],    "sitelinks": [],    "images": []  },  "isEuPoliticalAds": false,  "adGroups": [    {      "id": "ag_1",      "name": "Ad Group 1",      "adContent": []    }  ],  "campaignGoal": {    "type": "WEBSITE_TRAFFIC",    "isCustomConversionGoal": false  },  "adSchedule": [    {      "dayOfWeek": "MONDAY",      "from": "09:00",      "to": "17:00"    }  ],  "publishingStatus": "PUBLISHED",  "googleAdAccountId": "123-456-7890",  "unpublishedChanges": false,  "maximumCpc": 2000000,  "googleCampaignId": "customers/123/campaigns/456",  "source": "WEBSITE",  "advancedOptions": {    "source": "WEBSITE",    "postId": "post_abc123"  },  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-campaign#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/google/ads' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "id": "camp_abc123",  "name": "My Campaign",  "locationId": "loc_abc123",  "advertisingChannelType": "SEARCH",  "advertisingChannelSubType": "DEMAND_GEN",  "goalType": "WEBSITE_TRAFFIC",  "budget": {    "budgetType": "DAILY",    "amount": 5000,    "scheduleStartDate": "2024-01-01",    "scheduleEndDate": "2024-12-31"  },  "audience": {    "geoLocations": [      {        "key": "geoTargetConstants/2840",        "name": "United States",        "type": "country"      }    ],    "locales": [      {        "name": "English",        "key": "1000"      }    ],    "gender": [      {        "enum": "MALE",        "negative": false      }    ],    "ageRange": [      {        "enum": "AGE_RANGE_25_34",        "negative": false      }    ],    "segments": [      {        "type": "USER_LIST",        "id": "customers/123/userLists/456"      }    ],    "targetInterests": {      "affinity": [        "customers/123/userInterests/789"      ],      "inMarket": [        "customers/123/userInterests/321"      ]    }  },  "networkSettings": {    "targetSearchNetwork": true,    "targetContentNetwork": false  },  "biddingStrategy": {    "type": "MAXIMIZE_CONVERSIONS",    "value": 1000000  },  "assets": {    "calls": [      "customers/123/assets/456"    ],    "sitelinks": [      "customers/123/assets/789"    ],    "leadForm": "customers/123/assets/321",    "images": [      {        "url": "https://example.com/logo.png",        "name": "Logo"      }    ],    "businessLogo": {      "url": "https://example.com/logo.png",      "resourceName": "customers/123/assets/456",      "name": "Logo",      "error": "Image too large"    }  },  "isEuPoliticalAds": false,  "adGroups": [    {      "id": "ag_1",      "name": "Ad Group 1",      "adContent": []    }  ],  "campaignGoal": {    "type": "CLICK",    "value": "customers/123/conversionActions/456",    "isCustomConversionGoal": false  },  "adSchedule": [    {      "dayOfWeek": "MONDAY",      "from": "09:00",      "to": "17:00"    }  ],  "publishingStatus": "PUBLISHED",  "googleAdAccountId": "123-456-7890",  "unpublishedChanges": false,  "maximumCpc": 2000000,  "googleCampaignId": "customers/123/campaigns/456",  "source": "WEBSITE",  "advancedOptions": {    "source": "WEBSITE",    "postId": "post_abc123"  },  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }}'

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
  "id": "camp_abc123",  "name": "My Campaign",  "locationId": "loc_abc123",  "advertisingChannelType": "SEARCH",  "advertisingChannelSubType": "DEMAND_GEN",  "goalType": "WEBSITE_TRAFFIC",  "budget": {    "budgetType": "DAILY",    "amount": 5000,    "scheduleStartDate": "2024-01-01",    "scheduleEndDate": "2024-12-31"  },  "audience": {    "geoLocations": \[      {        "key": "geoTargetConstants/2840",        "name": "United States",        "type": "country"      }    \],    "locales": \[      {        "name": "English",        "key": "1000"      }    \],    "gender": \[      {        "enum": "MALE",        "negative": false      }    \],    "ageRange": \[      {        "enum": "AGE_RANGE_25_34",        "negative": false      }    \],    "segments": \[      {        "type": "USER_LIST",        "id": "customers/123/userLists/456"      }    \],    "targetInterests": {      "affinity": \[        "customers/123/userInterests/789"      \],      "inMarket": \[        "customers/123/userInterests/321"      \]    }  },  "networkSettings": {    "targetSearchNetwork": true,    "targetContentNetwork": false  },  "biddingStrategy": {    "type": "MAXIMIZE_CONVERSIONS",    "value": 1000000  },  "assets": {    "calls": \[      "customers/123/assets/456"    \],    "sitelinks": \[      "customers/123/assets/789"    \],    "leadForm": "customers/123/assets/321",    "images": \[      {        "url": "https://example.com/logo.png",        "name": "Logo"      }    \],    "businessLogo": {      "url": "https://example.com/logo.png",      "resourceName": "customers/123/assets/456",      "name": "Logo",      "error": "Image too large"    }  },  "isEuPoliticalAds": false,  "adGroups": \[    {      "id": "ag_1",      "name": "Ad Group 1",      "adContent": \[\]    }  \],  "campaignGoal": {    "type": "CLICK",    "value": "customers/123/conversionActions/456",    "isCustomConversionGoal": false  },  "adSchedule": \[    {      "dayOfWeek": "MONDAY",      "from": "09:00",      "to": "17:00"    }  \],  "publishingStatus": "PUBLISHED",  "googleAdAccountId": "123-456-7890",  "unpublishedChanges": false,  "maximumCpc": 2000000,  "googleCampaignId": "customers/123/campaigns/456",  "source": "WEBSITE",  "advancedOptions": {    "source": "WEBSITE",    "postId": "post_abc123"  },  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
