# List available phone numbers

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/phone-system/list-available-numbers-for-a-country
- **Summary:** Search Twilio inventory for purchasable phone numbers in a country for the given location.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/phone-system/list-available-numbers-for-a-country#__docusaurus_skipToContent_fallback)

Version: v3

List available phone numbers
============================

GET 

https://services.leadconnectorhq.com/phone-system/numbers/location/:locationId/available

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Search Twilio inventory for purchasable phone numbers in a country for the given location.

### Requirements

#### Scope(s)

`phonenumbers.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/list-available-numbers-for-a-country#request "Direct link to request")

### Path Parameters

**locationId** stringrequired

Location ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

### Query Parameters

**firstPart** stringrequired

firstPart is the beginning of the phone number

**Example:** `830`

**lastPart** stringrequired

lastPart is the ending of the phone number

**Example:** `825`

**anywhere** stringrequired

anywhere are the numbers required anywhere in phone number

**Example:** `825`

**numberTypes** string\[\]required

comma separated types of phone number required

**Example:** `tollFree,mobile,local`

**smsEnabled** booleanrequired

requested phone numbers should have sms functionality

**Example:** `true`

**mmsEnabled** booleanrequired

requested phone numbers should have mms functionality

**Example:** `true`

**voiceEnabled** booleanrequired

requested phone numbers should have voice functionality

**Example:** `true`

**countryCode** stringrequired

country for which the phone numbers are being requested

**Example:** `US`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/list-available-numbers-for-a-country#responses "Direct link to Responses")

*   200

Available phone numbers matching the search criteria.

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/phone-system/lc-phone-api-v-3#authentication)
**type:** http**scopes:** `phonenumbers.read`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/phone-system/numbers/location/tDtDnQdgm2LXpyiqYvZ6/available?firstPart=830&lastPart=825&anywhere=825&smsEnabled=true&mmsEnabled=true&voiceEnabled=true&countryCode=US' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

firstPart — queryrequired

lastPart — queryrequired

anywhere — queryrequired

numberTypes — queryrequiredAdd item

smsEnabled — queryrequired\---truefalse

mmsEnabled — queryrequired\---truefalse

voiceEnabled — queryrequired\---truefalse

countryCode — queryrequired

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
