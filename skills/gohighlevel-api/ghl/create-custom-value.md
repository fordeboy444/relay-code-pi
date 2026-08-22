# Create Custom Value

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-value
- **Summary:** Create Custom Value

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-value#__docusaurus_skipToContent_fallback)

Version: v3

Create Custom Value
===================

POST 

https://services.leadconnectorhq.com/locations/:locationId/customValues

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create Custom Value

### Requirements

#### Scope(s)

`locations/customValues.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-value#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

**Example:** `Custom Field Name`

**value**stringrequired

**Example:** `Value`

    {  "name": "Custom Field Name",  "value": "Value"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/create-custom-value#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**customValue** object

**id**string

**Example:** `rWQ709Pb62syqGLceg1x`

**name**string

**Example:** `Custom Field`

**fieldKey**string

**Example:** `{{ custom_values.custom_field }}`

**value**string

**Example:** `Value`

**locationId**string

**Example:** `rWQ709Pb6dasyqGLceg1x`

    {  "customValue": {    "id": "rWQ709Pb62syqGLceg1x",    "name": "Custom Field",    "fieldKey": "{{ custom_values.custom_field }}",    "value": "Value",    "locationId": "rWQ709Pb6dasyqGLceg1x"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scopes:** `locations/customValues.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/ve9EPM428h8vShlRW1KT/customValues' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "Custom Field Name",  "value": "Value"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Body required

{
  "name": "Custom Field Name",  "value": "Value"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
