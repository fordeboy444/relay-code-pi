# List active numbers

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/phone-system/active-numbers
- **Summary:** List active numbers. With `version: v3`, the HTTP 200 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 list payload is under `data`; `isUnderGhl` is renamed to `isUnderLc` per AIP naming convention.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/phone-system/active-numbers#__docusaurus_skipToContent_fallback)

Version: v3New

List active numbers
===================

GET 

https://services.leadconnectorhq.com/phone-system/numbers/location/:locationId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

List active numbers. With `version: v3`, the HTTP 200 body is the standard success envelope (`status`, `data`, `message`, `statusCode`). The v3 list payload is under `data`; `isUnderGhl` is renamed to `isUnderLc` per AIP naming convention.

### Requirements

#### Scope(s)

`phonenumbers.read`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/active-numbers#request "Direct link to request")

### Header Parameters

**version** stringrequired

**Possible values:** \[`v3`\]

Send `v3` to use the v3 response contract (AIP). This is the supported version value for these endpoints.

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location ID as string

**Example:** `tDtDnQdgm2LXpyiqYvZ6`

### Query Parameters

**pageSize** number

**Possible values:** `>= 1` and `<= 1000`

How many resources to return in each list page. The default is 50, and the maximum is 1000.

**Example:** `50`

**page** number

**Possible values:** `>= 0`

The page index. The default is 0.

**Example:** `0`

**searchFilter** string

Number search Filter

**Example:** `+91`

**skipNumberPool** boolean

When true, exclude numbers assigned to number pools from the list.

Default value:`true`

**Example:** `true`

**includeRcsSenderIds** boolean

Include RCS Sender IDs

**Example:** `true`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/phone-system/active-numbers#responses "Direct link to Responses")

*   200

Success envelope; v3 list details are in `data` (including `isUnderLc` instead of legacy `isUnderGhl`).

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**stringrequired

Outcome indicator from the shared success helper.

**Possible values:** \[`success`\]

**Example:** `success`

**data** objectrequired

V3 list payload: numbers, pagination fields, isUnderLc (renamed from isUnderGhl), etc.

**numbers** object\[\]required

Active numbers available for the location

*   Array \[\
    \
\
**phoneNumber**stringrequired\
\
Phone number in E.164 format\
\
**Example:** `+17745678902`\
\
**friendlyName**string\
\
Human-friendly label for the number\
\
**Example:** `Main line`\
\
**sid**string\
\
Provider number identifier\
\
**Example:** `PNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`\
\
**countryCode**string\
\
ISO country code for the number\
\
**Example:** `US`\
\
**capabilities** object\
\
Phone number capabilities\
\
**voice**boolean\
\
Whether the number supports voice calls\
\
**Example:** `true`\
\
**sms**boolean\
\
Whether the number supports SMS\
\
**Example:** `true`\
\
**mms**boolean\
\
Whether the number supports MMS\
\
**Example:** `true`\
\
**fax**boolean\
\
Whether the number supports fax\
\
**Example:** `false`\
\
**type**string\
\
Phone number type\
\
**Example:** `local`\
\
**isDefaultNumber**boolean\
\
Whether this is the default outbound number\
\
**Example:** `true`\
\
**linkedUser**stringnullable\
\
Linked user ID if the number is assigned\
\
**Example:** `user-123`\
\
**linkedRingAllUsers**string\[\]\
\
Ring-all user IDs linked to the number\
\
**Example:** `["user-123","user-456"]`\
\
**inboundCallService** object\
\
Inbound call service metadata\
\
**property name\***any\
\
Inbound call service metadata\
\
**Example:** `{"type":"ivr","value":"flow-123"}`\
\
**forwardingNumber**string\
\
Forwarding number in E.164 format\
\
**Example:** `+17745678903`\
\
**isGroupConversationEnabled**boolean\
\
Whether group conversations are enabled\
\
**Example:** `true`\
\
**addressSid**string\
\
Address SID used for regulated number purchases\
\
**Example:** `ADXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`\
\
**bundleSid**string\
\
Bundle SID used for regulated number purchases\
\
**Example:** `BUXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`\
\
**dateAdded**object\
\
Date the number was added\
\
**Example:** `2024-01-01T00:00:00.000Z`\
\
**dateUpdated**object\
\
Date the number was last updated\
\
**Example:** `2024-01-01T00:00:00.000Z`\
\
**dateCreated**object\
\
Legacy created-at field returned by some providers\
\
**Example:** `2024-01-01T00:00:00.000Z`\
\
**origin**string\
\
Provider origin for the number\
\
**Example:** `twilio`\
\
*   \]
    

**isUnderLc**boolean

Whether the account is managed under LC. Renamed from isUnderGhl.

**Example:** `true`

**pageSize**number

The page size requested

**Example:** `50`

**page**number

The zero-based page index requested

**Example:** `0`

**accountStatus**string

Twilio account status for the location

**Example:** `active`

**rcsSenderIds** object\[\]

Optional RCS sender IDs returned with the number list

*   Array \[\
    \
\
**number**stringrequired\
\
RCS sender ID\
\
**Example:** `rcs-sender-id`\
\
**numberType**stringrequired\
\
Entry type\
\
**Example:** `rcsSenderId`\
\
**friendlyName**string\
\
Human-friendly label for the sender ID\
\
**Example:** `Brand Sender`\
\
**rcsMeta** object\
\
RCS sender metadata\
\
**property name\***any\
\
RCS sender metadata\
\
**Example:** `{"brandId":"brand-123"}`\
\
*   \]
    

**total**number

Total number of active numbers when available

**Example:** `2`

**message**stringrequired

Human-readable success message.

**Example:** `OK`

**statusCode**numberrequired

HTTP status echoed in the response body.

**Example:** `200`

    {  "status": "success",  "data": {    "numbers": [      {        "phoneNumber": "+17745678902",        "friendlyName": "Main line",        "countryCode": "US"      }    ],    "isUnderLc": true,    "pageSize": 50,    "page": 0,    "accountStatus": "active",    "total": 1  },  "message": "OK",  "statusCode": 200}

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

    curl -L 'https://services.leadconnectorhq.com/phone-system/numbers/location/tDtDnQdgm2LXpyiqYvZ6?pageSize=50&searchFilter=+91&skipNumberPool=true&includeRcsSenderIds=true' \-H 'Accept: application/json' \-H 'version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

version — headerrequired\---v3

Show optional parameters

pageSize — query

page — query

searchFilter — query

skipNumberPool — query\---truefalse

includeRcsSenderIds — query\---truefalse

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
