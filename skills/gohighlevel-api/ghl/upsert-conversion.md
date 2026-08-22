# Upsert conversion

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-conversion
- **Summary:** Create or update a Google Ads conversion action

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-conversion#__docusaurus_skipToContent_fallback)

Version: v3

Upsert conversion
=================

PUT 

https://services.leadconnectorhq.com/ad-publishing/google/conversions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a Google Ads conversion action

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-conversion#request "Direct link to request")

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

**conversionId**string

Conversion identifier

**Example:** `conv_456`

**name**stringrequired

Conversion name

**Example:** `Purchase Conversion`

**type**stringrequired

Conversion type

**Possible values:** \[`UPLOAD_CLICKS`, `UPLOAD_CALLS`, `WEBPAGE`, `LEAD_FORM_SUBMIT`\]

**Example:** `WEBPAGE`

**category**stringrequired

Conversion category

**Example:** `PURCHASE`

**valueSettings** objectrequired

Value settings that control how monetary value is attributed to conversions

**defaultValue**numberrequired

Default monetary value assigned to each conversion

**Example:** `10`

**defaultCurrencyCode**stringrequired

ISO 4217 currency code for the default value

**Example:** `USD`

**alwaysUseDefaultValue**booleanrequired

When true, always uses the default value even if a transaction-specific value is provided

**Example:** `false`

**countingType**stringrequired

How conversions are counted per interaction

**Possible values:** \[`ONE_PER_CLICK`, `MANY_PER_CLICK`\]

**Example:** `ONE_PER_CLICK`

**attributionModel**stringrequired

Attribution model used to credit conversions

**Possible values:** \[`GOOGLE_SEARCH_ATTRIBUTION_DATA_DRIVEN`, `GOOGLE_ADS_LAST_CLICK`\]

**Example:** `GOOGLE_ADS_LAST_CLICK`

**clickThroughWindow**numberrequired

Click-through conversion window in days

**Example:** `30`

    {  "locationId": "loc_abc123",  "conversionId": "conv_456",  "name": "Purchase Conversion",  "type": "WEBPAGE",  "category": "PURCHASE",  "valueSettings": {    "defaultValue": "10.00",    "defaultCurrencyCode": "USD",    "alwaysUseDefaultValue": false  },  "countingType": "ONE_PER_CLICK",  "attributionModel": "GOOGLE_ADS_LAST_CLICK",  "clickThroughWindow": 30}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-conversion#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/google/conversions' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "loc_abc123",  "conversionId": "conv_456",  "name": "Purchase Conversion",  "type": "WEBPAGE",  "category": "PURCHASE",  "valueSettings": {    "defaultValue": 10,    "defaultCurrencyCode": "USD",    "alwaysUseDefaultValue": false  },  "countingType": "ONE_PER_CLICK",  "attributionModel": "GOOGLE_ADS_LAST_CLICK",  "clickThroughWindow": 30}'

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
  "locationId": "loc_abc123",  "conversionId": "conv_456",  "name": "Purchase Conversion",  "type": "WEBPAGE",  "category": "PURCHASE",  "valueSettings": {    "defaultValue": 10,    "defaultCurrencyCode": "USD",    "alwaysUseDefaultValue": false  },  "countingType": "ONE_PER_CLICK",  "attributionModel": "GOOGLE_ADS_LAST_CLICK",  "clickThroughWindow": 30
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
