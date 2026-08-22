# Upsert ad campaign group

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-upsert-campaign-group
- **Summary:** Create or update a LinkedIn ad campaign group with campaigns and ads

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-upsert-campaign-group#__docusaurus_skipToContent_fallback)

Version: v3

Upsert ad campaign group
========================

PUT 

https://services.leadconnectorhq.com/ad-publishing/linkedin/ads

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a LinkedIn ad campaign group with campaigns and ads

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-upsert-campaign-group#request "Direct link to request")

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

Internal ID

**Example:** `cg_abc123`

**locationId**stringrequired

Location ID

**Example:** `loc_abc123`

**budget** object

Campaign group budget

**budgetType**string

LinkedIn campaign budget type

**Possible values:** \[`DAILY`, `LIFETIME`\]

**Example:** `DAILY`

**amount**number

Budget amount (currency minor units)

**Example:** `10000`

**scheduleStartDate**string

Schedule start date (ISO 8601)

**Example:** `2025-01-01`

**scheduleEndDate**string

Schedule end date (ISO 8601)

**Example:** `2025-12-31`

**adCampaigns** object\[\]

Child ad campaigns

*   Array \[\
    \
\
**id**string\
\
Internal campaign identifier\
\
**Example:** `camp_abc123`\
\
**locale** object\
\
Campaign locale\
\
**country**stringrequired\
\
Country code\
\
**Example:** `US`\
\
**language**stringrequired\
\
Language code\
\
**Example:** `en`\
\
**name**string\
\
Campaign name\
\
**Example:** `Q1 Lead Gen Campaign`\
\
**publishingStatus**string\
\
Publishing status\
\
**Possible values:** \[`DRAFT`, `SCHEDULED`, `PUBLISHED`, `PUBLISHING`, `FAILED`, `IN_REVIEW`, `PAUSED`, `ARCHIVED`, `WITH_ISSUES`, `REJECTED`\]\
\
**Example:** `PUBLISHED`\
\
**mediaType**string\
\
Creative media type for the campaign\
\
**Possible values:** \[`STANDARD_UPDATE`, `SINGLE_VIDEO`, `CAROUSEL`\]\
\
**Example:** `STANDARD_UPDATE`\
\
**audience** object\
\
Campaign audience targeting\
\
**geoLocations** object\[\]\
\
Geographic location targets\
\
*   Array \[\
    \
\
**name**stringrequired\
\
Location display name\
\
**Example:** `India`\
\
**urn**stringrequired\
\
Location URN\
\
**Example:** `urn:li:geo:12321321`\
\
**facetUrn**stringrequired\
\
Facet URN\
\
**Example:** `urn:li:adTargetingFacet:locations`\
\
**selectionType**stringrequired\
\
Selection type\
\
**Possible values:** \[`include`, `exclude`\]\
\
**Example:** `include`\
\
*   \]\
    \
\
**targetAudience** object\
\
Target audience attribute selections\
\
**include**object\[\]\[\]\
\
Included targeting attributes (groups of ANDed attributes, ORed together)\
\
**Example:** `[[{"urn":"urn:li:geo:103644278","name":"United States","categoryName":"Location","facet":"urn:li:adTargetingFacet:locations"}]]`\
\
**exclude**object\[\]\[\]\
\
Excluded targeting attributes\
\
**Example:** `[]`\
\
**unitCost** object\
\
Bid unit cost\
\
**amount**numberrequired\
\
Bid amount in currency minor units\
\
**Example:** `500`\
\
**campaignType**string\
\
LinkedIn campaign type\
\
**Example:** `SPONSORED_UPDATES`\
\
**adCampaignGroupId**string\
\
Parent campaign group identifier\
\
**Example:** `cg_abc123`\
\
**adCampaignId**string\
\
LinkedIn campaign resource ID\
\
**Example:** `123456789`\
\
**ads** object\[\]\
\
Ads in the campaign\
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
**introductoryText**string\
\
Introductory ad copy shown above the creative\
\
**Example:** `Check out our summer sale!`\
\
**destinationUrl**string\
\
Click-through destination URL\
\
**Example:** `https://example.com`\
\
**callToActionLabel**string\
\
Call to action label\
\
**Example:** `LEARN_MORE`\
\
**destinationFormId**string\
\
Destination lead-gen form ID\
\
**Example:** `form_abc123`\
\
**contentReferenceString**string\
\
Content reference URN for boosted posts\
\
**Example:** `urn:li:share:123`\
\
**media** object\[\]\
\
Ad creative media\
\
*   Array \[\
    \
\
**type**string\
\
Media type\
\
**Possible values:** \[`video`, `image`\]\
\
**Example:** `image`\
\
**src**string\
\
Media source URL\
\
**Example:** `https://example.com/image.jpg`\
\
**frames**string\[\]\
\
Video frame URLs\
\
**Example:** `["https://example.com/frame1.jpg"]`\
\
**selectedPoster**number\
\
Selected poster frame index\
\
**Example:** `0`\
\
**thumbnailUrl**string\
\
Thumbnail URL\
\
**Example:** `https://example.com/thumb.jpg`\
\
**name**string\
\
Media name\
\
**Example:** `ad_image.jpg`\
\
**headline**string\
\
Media headline\
\
**Example:** `Get started today`\
\
**destinationUrl**string\
\
Click-through destination URL\
\
**Example:** `https://example.com`\
\
**fileSizeBytes**number\
\
File size in bytes\
\
**Example:** `102400`\
\
*   \]\
    \
\
**adCampaignId**string\
\
Parent ad campaign identifier\
\
**Example:** `camp_abc123`\
\
**adId**string\
\
LinkedIn ad resource ID\
\
**Example:** `12345678`\
\
**headline**string\
\
Ad headline\
\
**Example:** `Your next career move starts here`\
\
**publishingStatus**string\
\
Ad publishing status\
\
**Possible values:** \[`DRAFT`, `SCHEDULED`, `PUBLISHED`, `PUBLISHING`, `FAILED`, `IN_REVIEW`, `PAUSED`, `ARCHIVED`, `WITH_ISSUES`, `REJECTED`\]\
\
**Example:** `PUBLISHED`\
\
**adCampaignGroupId**string\
\
Parent campaign group identifier\
\
**Example:** `cg_abc123`\
\
**description**string\
\
Ad description\
\
**Example:** `Join thousands who already made the switch`\
\
**meta**object\
\
Additional ad metadata\
\
**Example:** `{"tone":"professional"}`\
\
**linkedInError**string\
\
LinkedIn API error message\
\
**Example:** `Ad rejected by policy`\
\
*   \]\
    \
\
**linkedInError**string\
\
LinkedIn API error message\
\
**Example:** `Bid below minimum`\
\
**meta**object\
\
Additional campaign metadata\
\
**Example:** `{}`\
\
*   \]
    

**adBudgetOptimization**string

Ad budget optimization mode

**Possible values:** \[`MAXIMUM_DELIVERY`, `COST_CAP`\]

**Example:** `MAXIMUM_DELIVERY`

**objectiveType**string

Campaign group objective

**Possible values:** \[`LEAD_GENERATION`, `WEBSITE_VISIT`\]

**Example:** `LEAD_GENERATION`

**name**string

Campaign group name

**Example:** `Q1 Lead Gen`

**adCampaignGroupId**string

LinkedIn campaign group resource ID

**Example:** `123456789`

**publishingStatus**string

Publishing status

**Possible values:** \[`DRAFT`, `SCHEDULED`, `PUBLISHED`, `PUBLISHING`, `FAILED`, `IN_REVIEW`, `PAUSED`, `ARCHIVED`, `WITH_ISSUES`, `REJECTED`\]

**Example:** `PUBLISHED`

**linkedInAdAccountId**string

LinkedIn ad account identifier

**Example:** `12345678`

**unpublishedChanges**boolean

Whether the campaign group has unpublished changes

**Example:** `false`

**meta**object

Additional metadata

**Example:** `{}`

**linkedInError**string

LinkedIn API error message

**Example:** `Budget below minimum`

**customValueMappings**object

User-provided overrides for custom_values merge tags used in ad copy

**Example:** `{"{{ custom_values.pet_name }}":"Fluffy"}`

    {  "id": "cg_abc123",  "locationId": "loc_abc123",  "budget": {    "budgetType": "DAILY",    "amount": 10000  },  "adCampaigns": [    {      "name": "Campaign 1",      "publishingStatus": "PUBLISHED"    }  ],  "adBudgetOptimization": "MAXIMUM_DELIVERY",  "objectiveType": "LEAD_GENERATION",  "name": "Q1 Lead Gen",  "adCampaignGroupId": "123456789",  "publishingStatus": "PUBLISHED",  "linkedInAdAccountId": "12345678",  "unpublishedChanges": false,  "meta": {},  "linkedInError": "Budget below minimum",  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-upsert-campaign-group#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/linkedin/ads' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "id": "cg_abc123",  "locationId": "loc_abc123",  "budget": {    "budgetType": "DAILY",    "amount": 10000,    "scheduleStartDate": "2025-01-01",    "scheduleEndDate": "2025-12-31"  },  "adCampaigns": [    {      "name": "Campaign 1",      "publishingStatus": "PUBLISHED"    }  ],  "adBudgetOptimization": "MAXIMUM_DELIVERY",  "objectiveType": "LEAD_GENERATION",  "name": "Q1 Lead Gen",  "adCampaignGroupId": "123456789",  "publishingStatus": "PUBLISHED",  "linkedInAdAccountId": "12345678",  "unpublishedChanges": false,  "meta": {},  "linkedInError": "Budget below minimum",  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }}'

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
  "id": "cg_abc123",  "locationId": "loc_abc123",  "budget": {    "budgetType": "DAILY",    "amount": 10000,    "scheduleStartDate": "2025-01-01",    "scheduleEndDate": "2025-12-31"  },  "adCampaigns": \[    {      "name": "Campaign 1",      "publishingStatus": "PUBLISHED"    }  \],  "adBudgetOptimization": "MAXIMUM_DELIVERY",  "objectiveType": "LEAD_GENERATION",  "name": "Q1 Lead Gen",  "adCampaignGroupId": "123456789",  "publishingStatus": "PUBLISHED",  "linkedInAdAccountId": "12345678",  "unpublishedChanges": false,  "meta": {},  "linkedInError": "Budget below minimum",  "customValueMappings": {    "{{ custom_values.pet_name }}": "Fluffy"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
