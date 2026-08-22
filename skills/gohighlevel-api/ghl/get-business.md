# Get Business

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/businesses/get-business
- **Summary:** Get Business

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/businesses/get-business#__docusaurus_skipToContent_fallback)

Version: v3

Get Business
============

GET 

https://services.leadconnectorhq.com/businesses/:businessId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Business

### Requirements

#### Scope(s)

`businesses.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/businesses/get-business#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**businessId** stringrequired

**Example:** `5DP4iH6HLkQsiKESj6rh`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/businesses/get-business#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**business** objectrequired

Business Response

**id**stringrequired

Business Id

**Example:** `63771dcac1116f0e21de8e12`

**name**stringrequired

Business Name

**Example:** `Microsoft`

**phone**string

phone number

**email**string

email

**Example:** `abc@microsoft.com`

**website**string

website

**Example:** `microsoft.com`

**address**string

address

**city**string

city

**description**string

description

**state**string

state

**postalCode**string

postal code

**country**string

country

**Example:** `united states`

**updatedBy**object

updated By

**locationId**stringrequired

locaitonId

**createdBy**object

Created By

**createdAt**string<date-time>

Creation Time

**updatedAt**string<date-time>

Last updation time

    {  "business": {    "id": "63771dcac1116f0e21de8e12",    "name": "Microsoft",    "phone": "string",    "email": "abc@microsoft.com",    "website": "microsoft.com",    "address": "string",    "city": "string",    "description": "string",    "state": "string",    "postalCode": "string",    "country": "united states",    "updatedBy": {},    "locationId": "string",    "createdBy": {},    "createdAt": "2024-07-29T15:51:28.071Z",    "updatedAt": "2024-07-29T15:51:28.071Z"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/businesses/business-api#authentication)
**type:** http**scopes:** `businesses.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/businesses/5DP4iH6HLkQsiKESj6rh' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

businessId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
