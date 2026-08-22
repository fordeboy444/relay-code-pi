# Get Custom Field

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-field
- **Summary:** Get Custom Field

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-field#__docusaurus_skipToContent_fallback)

Version: v3

Get Custom Field
================

GET 

https://services.leadconnectorhq.com/locations/:locationId/customFields/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Custom Field

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-field#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**id** stringrequired

Custom Field Id or Field Key (e.g. "contact.first_name" or "opportunity.pipeline_id")

**Examples:**

*   id
*   field_key

Custom Field ID

**Example:** `00NhGCcN1tlO8ZHcu7Wb`

Custom Field Key

**Example:** `contact.first_name`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/get-custom-field#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**customField** object

**id**string

**Example:** `3sv6UEo51C9Bmpo1cKTq`

**name**string

**Example:** `pincode`

**fieldKey**string

**Example:** `contact.pincode`

**placeholder**string

**Example:** `Pin code`

**dataType**string

**Example:** `TEXT`

**position**number

**Example:** `0`

**picklistOptions**string\[\]

**Example:** `["first option"]`

**picklistImageOptions**string\[\]

**Example:** `[]`

**isAllowedCustomOption**boolean

**Example:** `false`

**isMultiFileAllowed**boolean

**Example:** `true`

**maxFileLimit**number

**Example:** `4`

**locationId**string

**Example:** `3sv6UEo51C9Bmpo1cKTq`

**model**string

Model of the custom field

**Possible values:** \[`contact`, `opportunity`\]

**Example:** `opportunity`

    {  "customField": {    "id": "3sv6UEo51C9Bmpo1cKTq",    "name": "pincode",    "fieldKey": "contact.pincode",    "placeholder": "Pin code",    "dataType": "TEXT",    "position": 0,    "picklistOptions": [      "first option"    ],    "picklistImageOptions": [],    "isAllowedCustomOption": false,    "isMultiFileAllowed": true,    "maxFileLimit": 4,    "locationId": "3sv6UEo51C9Bmpo1cKTq",    "model": "opportunity"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
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

    curl -L 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/customFields/00NhGCcN1tlO8ZHcu7Wb' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
