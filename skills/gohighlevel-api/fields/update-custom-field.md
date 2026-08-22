# Update Custom Field

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/update-custom-field
- **Summary:** Update Custom Field

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/update-custom-field#__docusaurus_skipToContent_fallback)

Version: v3

Update Custom Field
===================

PUT 

https://services.leadconnectorhq.com/locations/:locationId/customFields/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update Custom Field

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/update-custom-field#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**id** stringrequired

Custom Field Id

**Example:** `00NhGCcN1tlO8ZHcu7Wb`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

**Example:** `Custom Field`

**placeholder**string

**Example:** `Placeholder Text`

**acceptedFormat**string\[\]

**Example:** `[".pdf",".docx",".jpeg"]`

**isMultipleFile**boolean

**Example:** `false`

**maxNumberOfFiles**number

**Example:** `2`

**textBoxListOptions** object\[\]

*   Array \[\
    \
anyOf\
\
*   textBoxListOptionsSchema\
*   textBoxListOptionsSchema\
\
**label**string\
\
**Example:** `First`\
\
**prefillValue**string\
\
**Example:**\
\
*   \]
    

**position**number

**Default value:** `0`

**Example:** `0`

**model**string

Model of the custom field you want to update

**Possible values:** \[`contact`, `opportunity`\]

**Example:** `opportunity`

    {  "name": "Custom Field",  "placeholder": "Placeholder Text",  "acceptedFormat": [    ".pdf",    ".docx",    ".jpeg"  ],  "isMultipleFile": false,  "maxNumberOfFiles": 2,  "textBoxListOptions": [    {      "label": "First",      "prefillValue": ""    },    {      "label": "First",      "prefillValue": ""    }  ],  "position": 0,  "model": "opportunity"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/update-custom-field#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/customFields/00NhGCcN1tlO8ZHcu7Wb' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "Custom Field",  "placeholder": "Placeholder Text",  "acceptedFormat": [    ".pdf",    ".docx",    ".jpeg"  ],  "isMultipleFile": false,  "maxNumberOfFiles": 2,  "textBoxListOptions": [    {      "label": "First",      "prefillValue": ""    }  ],  "position": 0,  "model": "opportunity"}'

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

Body required

{
  "name": "Custom Field",  "placeholder": "Placeholder Text",  "acceptedFormat": \[    ".pdf",    ".docx",    ".jpeg"  \],  "isMultipleFile": false,  "maxNumberOfFiles": 2,  "textBoxListOptions": \[    {      "label": "First",      "prefillValue": ""    }  \],  "position": 0,  "model": "opportunity"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
