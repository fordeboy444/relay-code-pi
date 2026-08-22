# Upsert adset

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-adset
- **Summary:** Create or update a Facebook ad set

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-adset#__docusaurus_skipToContent_fallback)

Version: v3

Upsert adset
============

PUT 

https://services.leadconnectorhq.com/ad-publishing/facebook/adsets

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a Facebook ad set

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-adset#request "Direct link to request")

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

Ad set identifier

**Example:** `adset_123`

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**name**string

Ad set name

**Example:** `Targeting Group A`

**pageId**string

Facebook page ID

**Example:** `123456789`

**instagramActorId**string

Instagram actor ID

**Example:** `ig_123`

**messagingPlatforms**string\[\]

Messaging platforms

**Possible values:** \[`WHATSAPP`, `MESSENGER`, `INSTAGRAM_DIRECT`\]

**Example:** `["WHATSAPP"]`

**whatsappNumber**string

WhatsApp phone number

**Example:** `+1234567890`

**audience** object

Targeting audience configuration including geo-locations, locales, placements, and custom audiences

**geoLocations** object\[\]required

Geographic locations to target or exclude

*   Array \[\
    \
\
**key**stringrequired\
\
Facebook location key\
\
**Example:** `US`\
\
**name**stringrequired\
\
Location display name\
\
**Example:** `United States`\
\
**type**stringrequired\
\
Geographic location type\
\
**Possible values:** \[`country`, `city`, `region`, `country_group`, `geo_market`, `large_geo_area`, `medium_geo_area`, `small_geo_area`, `subcity`, `neighborhood`, `zip`, `address`\]\
\
**Example:** `country`\
\
**selectionType**stringrequired\
\
Whether the location is included or excluded from targeting\
\
**Possible values:** \[`include`, `exclude`\]\
\
**Example:** `include`\
\
**radius**number\
\
Targeting radius around the location (for city/address types)\
\
**Example:** `25`\
\
**radiusUnit**string\
\
Unit for the targeting radius\
\
**Possible values:** \[`km`, `mi`\]\
\
**Example:** `mi`\
\
**geometry** object\
\
Geometry data for address-based targeting\
\
**location**objectrequired\
\
Geographic coordinates\
\
**Example:** `{"lat":40.7128,"lng":-74.006}`\
\
**locationType**stringrequired\
\
Geocoding result type\
\
**Example:** `APPROXIMATE`\
\
*   \]
    

**locales** object\[\]

Language locales to target

*   Array \[\
    \
\
**name**stringrequired\
\
Locale display name\
\
**Example:** `English (US)`\
\
**key**numberrequired\
\
Facebook locale key\
\
**Example:** `6`\
\
*   \]
    

**placements** object

Ad placement positions per platform (only used when placementType is "manual")

**facebook**string\[\]

Facebook placement positions

**Example:** `["feed","right_hand_column","marketplace"]`

**instagram**string\[\]

Instagram placement positions

**Example:** `["stream","story","explore"]`

**messenger**string\[\]

Messenger placement positions

**Example:** `["messenger_home"]`

**placementType**string

Placement strategy — "auto" lets Facebook choose, "manual" uses the placements config

**Possible values:** \[`auto`, `manual`\]

**Example:** `auto`

**lookalike** object\[\]

Lookalike audiences to target

*   Array \[\
    \
\
**id**stringrequired\
\
Custom audience ID\
\
**Example:** `23851234567890`\
\
**name**stringrequired\
\
Custom audience name\
\
**Example:** `Website Visitors - Last 30 Days`\
\
*   \]
    

**retargeting** object\[\]

Retargeting custom audiences to target

*   Array \[\
    \
\
**id**stringrequired\
\
Custom audience ID\
\
**Example:** `23851234567890`\
\
**name**stringrequired\
\
Custom audience name\
\
**Example:** `Website Visitors - Last 30 Days`\
\
*   \]
    

**interests** object\[\]

Interest-based targeting criteria

*   Array \[\
    \
\
**id**stringrequired\
\
Interest ID\
\
**Example:** `6003139266461`\
\
**name**stringrequired\
\
Interest name\
\
**Example:** `Fitness and wellness`\
\
**type**string\
\
Interest category type (defaults to "interests" if omitted)\
\
**Example:** `interests`\
\
*   \]
    

**ageMin**number

Minimum age for targeting

**Example:** `18`

**ageMax**number

Maximum age for targeting

**Example:** `65`

**genders**number\[\]

Gender targeting (1 = male, 2 = female)

**Example:** `[1,2]`

**budget** object

Ad set budget config

**budgetType**stringrequired

Budget type

**Possible values:** \[`DAILY`, `LIFETIME`\]

**Example:** `DAILY`

**amount**numberrequired

Budget amount

**Example:** `1000`

**scheduleStartDate**string

Schedule start date

**Example:** `2024-01-01`

**scheduleEndDate**string

Schedule end date

**Example:** `2024-01-31`

**conversionLocation**string

Conversion location

**Example:** `website`

**customEventType**string

Custom event type

**Example:** `Purchase`

**pixelId**string

Conversion pixel ID

**Example:** `px_123`

**campaignId**stringrequired

Parent campaign ID

**Example:** `camp_123`

    {  "id": "adset_123",  "locationId": "loc_abc123",  "name": "Targeting Group A",  "pageId": "123456789",  "instagramActorId": "ig_123",  "messagingPlatforms": [    "WHATSAPP"  ],  "whatsappNumber": "+1234567890",  "audience": {    "geoLocations": [      {        "key": "US",        "name": "United States",        "type": "country",        "selectionType": "include"      }    ],    "ageMin": 18,    "ageMax": 65,    "genders": [      1,      2    ]  },  "budget": {    "budgetType": "DAILY",    "amount": 1000,    "scheduleStartDate": "2024-01-01",    "scheduleEndDate": "2024-01-31"  },  "conversionLocation": "website",  "customEventType": "Purchase",  "pixelId": "px_123",  "campaignId": "camp_123"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-adset#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/facebook/adsets' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "id": "adset_123",  "locationId": "loc_abc123",  "name": "Targeting Group A",  "pageId": "123456789",  "instagramActorId": "ig_123",  "messagingPlatforms": [    "WHATSAPP"  ],  "whatsappNumber": "+1234567890",  "audience": {    "geoLocations": [      {        "key": "US",        "name": "United States",        "type": "country",        "selectionType": "include"      },      {        "key": "2421836",        "name": "New York",        "type": "city",        "selectionType": "include",        "radius": 25,        "radiusUnit": "mile"      }    ],    "locales": [      {        "name": "English (US)",        "key": 6      }    ],    "placements": {      "facebook": [        "feed",        "right_hand_column",        "marketplace"      ],      "instagram": [        "stream",        "story",        "explore"      ],      "messenger": [        "messenger_home"      ]    },    "placementType": "auto",    "lookalike": [      {        "id": "23851234567890",        "name": "Lookalike - Website Visitors"      }    ],    "retargeting": [      {        "id": "23851234567891",        "name": "Website Visitors - Last 30 Days"      }    ],    "interests": [      {        "id": "6003139266461",        "name": "Fitness and wellness",        "type": "interests"      }    ],    "ageMin": 18,    "ageMax": 65,    "genders": [      1,      2    ]  },  "budget": {    "budgetType": "DAILY",    "amount": 1000,    "scheduleStartDate": "2024-01-01",    "scheduleEndDate": "2024-01-31"  },  "conversionLocation": "website",  "customEventType": "Purchase",  "pixelId": "px_123",  "campaignId": "camp_123"}'

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
  "id": "adset_123",  "locationId": "loc_abc123",  "name": "Targeting Group A",  "pageId": "123456789",  "instagramActorId": "ig_123",  "messagingPlatforms": \[    "WHATSAPP"  \],  "whatsappNumber": "+1234567890",  "audience": {    "geoLocations": \[      {        "key": "US",        "name": "United States",        "type": "country",        "selectionType": "include"      },      {        "key": "2421836",        "name": "New York",        "type": "city",        "selectionType": "include",        "radius": 25,        "radiusUnit": "mile"      }    \],    "locales": \[      {        "name": "English (US)",        "key": 6      }    \],    "placements": {      "facebook": \[        "feed",        "right_hand_column",        "marketplace"      \],      "instagram": \[        "stream",        "story",        "explore"      \],      "messenger": \[        "messenger_home"      \]    },    "placementType": "auto",    "lookalike": \[      {        "id": "23851234567890",        "name": "Lookalike - Website Visitors"      }    \],    "retargeting": \[      {        "id": "23851234567891",        "name": "Website Visitors - Last 30 Days"      }    \],    "interests": \[      {        "id": "6003139266461",        "name": "Fitness and wellness",        "type": "interests"      }    \],    "ageMin": 18,    "ageMax": 65,    "genders": \[      1,      2    \]  },  "budget": {    "budgetType": "DAILY",    "amount": 1000,    "scheduleStartDate": "2024-01-01",    "scheduleEndDate": "2024-01-31"  },  "conversionLocation": "website",  "customEventType": "Purchase",  "pixelId": "px_123",  "campaignId": "camp_123"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
