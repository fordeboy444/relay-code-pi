# Create Business

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/businesses/create-business
- **Summary:** Create Business

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/businesses/create-business#__docusaurus_skipToContent_fallback)

Version: v3

Create Business
===============

POST 

https://services.leadconnectorhq.com/businesses/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create Business

### Requirements

#### Scope(s)

`businesses.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/businesses/create-business#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

**Example:** `Microsoft`

**locationId**stringrequired

**Example:** `5DP4iH6HLkQsiKESj6rh`

**phone**string

**Example:** `+18832327657`

**email**string

**Example:** `john@deo.com`

**website**string

**Example:** `www.xyz.com`

**address**string

**Example:** `street adress`

**city**string

**Example:** `new york`

**postalCode**string

**Example:** `12312312`

**state**string

**Example:** `new york`

**country**string

**Example:** `us`

**description**string

**Example:** `business description`

    {  "name": "Microsoft",  "locationId": "5DP4iH6HLkQsiKESj6rh",  "phone": "+18832327657",  "email": "john@deo.com",  "website": "www.xyz.com",  "address": "street adress",  "city": "new york",  "postalCode": "12312312",  "state": "new york",  "country": "us",  "description": "business description"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/businesses/create-business#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Success Value

**Example:** `true`

**buiseness** objectrequired

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

    {  "success": true,  "buiseness": {    "id": "63771dcac1116f0e21de8e12",    "name": "Microsoft",    "phone": "string",    "email": "abc@microsoft.com",    "website": "microsoft.com",    "address": "string",    "city": "string",    "description": "string",    "state": "string",    "postalCode": "string",    "country": "united states",    "updatedBy": {},    "locationId": "string",    "createdBy": {},    "createdAt": "2024-07-29T15:51:28.071Z",    "updatedAt": "2024-07-29T15:51:28.071Z"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/businesses/business-api#authentication)
**type:** http**scopes:** `businesses.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/businesses/' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "name": "Microsoft",  "locationId": "5DP4iH6HLkQsiKESj6rh",  "phone": "+18832327657",  "email": "john@deo.com",  "website": "www.xyz.com",  "address": "street adress",  "city": "new york",  "postalCode": "12312312",  "state": "new york",  "country": "us",  "description": "business description"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "name": "Microsoft",  "locationId": "5DP4iH6HLkQsiKESj6rh",  "phone": "+18832327657",  "email": "john@deo.com",  "website": "www.xyz.com",  "address": "street adress",  "city": "new york",  "postalCode": "12312312",  "state": "new york",  "country": "us",  "description": "business description"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
