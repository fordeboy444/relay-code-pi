# Upsert assets

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-assets
- **Summary:** Create or update Google Ads creative assets

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-assets#__docusaurus_skipToContent_fallback)

Version: v3

Upsert assets
=============

POST 

https://services.leadconnectorhq.com/ad-publishing/google/assets

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update Google Ads creative assets

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-assets#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**type**stringrequired

Asset type to create or update

**Possible values:** \[`CALL`, `SITELINK`, `LEAD_FORM`\]

**Example:** `CALL`

**payload** objectrequired

Asset payload — shape depends on the type field: CallAssetPayload (CALL), SitelinkAssetPayload (SITELINK), or LeadFormAssetPayload (LEAD_FORM)

oneOf

*   CallAssetPayloadDTO
*   SitelinkAssetPayloadDTO
*   LeadFormAssetPayloadDTO

**phoneNumber**stringrequired

Phone number for call ads

**Example:** `+14155551234`

**countryCode**stringrequired

Two-letter ISO country code

**Example:** `US`

**callConversionAction**string

Call conversion action resource name

**Example:** `customers/123/conversionActions/456`

**adScheduleTargets** object\[\]

Ad schedule targets restricting when the call asset is shown

*   Array \[\
    \
\
**startMinute**stringrequired\
\
Minute mark the schedule starts at\
\
**Possible values:** \[`ZERO`, `FIFTEEN`, `THIRTY`, `FORTY_FIVE`\]\
\
**Example:** `ZERO`\
\
**endMinute**stringrequired\
\
Minute mark the schedule ends at\
\
**Possible values:** \[`ZERO`, `FIFTEEN`, `THIRTY`, `FORTY_FIVE`\]\
\
**Example:** `ZERO`\
\
**dayOfWeek**stringrequired\
\
Day of the week for this schedule\
\
**Possible values:** \[`MONDAY`, `TUESDAY`, `WEDNESDAY`, `THURSDAY`, `FRIDAY`, `SATURDAY`, `SUNDAY`\]\
\
**Example:** `MONDAY`\
\
**startHour**numberrequired\
\
Start hour in 24h format (0-23)\
\
**Example:** `9`\
\
**endHour**numberrequired\
\
End hour in 24h format (0-23)\
\
**Example:** `17`\
\
*   \]
    

**resourceName**string

Google Ads resource name for an existing call asset

**Example:** `customers/123/assets/456`

    {  "locationId": "loc_abc123",  "type": "CALL",  "payload": {    "phoneNumber": "+14155551234",    "countryCode": "US"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-assets#responses "Direct link to Responses")

*   201
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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/assets' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "loc_abc123",  "type": "CALL",  "payload": {    "phoneNumber": "+14155551234",    "countryCode": "US",    "callConversionAction": "customers/123/conversionActions/456",    "adScheduleTargets": [      {        "startMinute": "ZERO",        "endMinute": "ZERO",        "dayOfWeek": "MONDAY",        "startHour": 9,        "endHour": 17      }    ],    "resourceName": "customers/123/assets/456"  }}'

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
  "locationId": "loc_abc123",  "type": "CALL",  "payload": {    "phoneNumber": "+14155551234",    "countryCode": "US",    "callConversionAction": "customers/123/conversionActions/456",    "adScheduleTargets": \[      {        "startMinute": "ZERO",        "endMinute": "ZERO",        "dayOfWeek": "MONDAY",        "startHour": 9,        "endHour": 17      }    \],    "resourceName": "customers/123/assets/456"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
