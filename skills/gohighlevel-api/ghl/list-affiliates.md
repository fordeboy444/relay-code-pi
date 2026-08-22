# List Affiliates

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-affiliates
- **Summary:** Retrieve the list of affiliates for a location.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-affiliates#__docusaurus_skipToContent_fallback)

Version: v3

List Affiliates
===============

GET 

https://services.leadconnectorhq.com/affiliate-manager/:locationId/affiliates

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve the list of affiliates for a location.

### Requirements

#### Scope(s)

`affiliate-manager.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-affiliates#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

### Query Parameters

**query** string

**Example:** `John`

**active** string

Default value:`false`

**Example:** `true`

**campaignId** string

**Example:** `63d376de11be1d26d38f7369`

**skip** number

Default value:`0`

**Example:** `1`

**limit** number

Maximum number of records to return. Maximum allowed value is 100.

Default value:`10`

**Example:** `10`

**fromDate** string

**Example:** `2023-10-01`

**toDate** string

**Example:** `2023-10-01`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/list-affiliates#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**affiliates** object\[\]required

Affiliate list

*   Array \[\
    \
\
**_id**stringrequired\
\
Affiliate id\
\
**Example:** `63d147176c5bbc30e9e091a4`\
\
**firstName**string\
\
Affiliate first name\
\
**Example:** `John`\
\
**lastName**string\
\
Affiliate last name\
\
**Example:** `Doe`\
\
**phone**string\
\
Affiliate phone number\
\
**Example:** `+1 888 888-8888`\
\
**deleted**boolean\
\
Whether the affiliate is deleted\
\
**Example:** `false`\
\
**locationId**stringrequired\
\
Location id\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**active**boolean\
\
Whether the affiliate is active\
\
**Example:** `true`\
\
**address**string\
\
Affiliate address\
\
**Example:** `123 Main St`\
\
**avatar**string\
\
Affiliate avatar URL\
\
**Example:** `https://example.com/avatar.png`\
\
**createdAt**string\
\
Created at timestamp\
\
**Example:** `2024-06-16T00:00:00.000Z`\
\
**createdBy**object\
\
Created by audit info\
\
**facebookUrl**string\
\
Facebook URL\
\
**Example:** `https://facebook.com/johndoe`\
\
**instagramUrl**string\
\
Instagram URL\
\
**Example:** `https://instagram.com/johndoe`\
\
**linkedInUrl**string\
\
LinkedIn URL\
\
**Example:** `https://linkedin.com/in/johndoe`\
\
**twitterUrl**string\
\
Twitter URL\
\
**Example:** `https://twitter.com/johndoe`\
\
**youtubeUrl**string\
\
YouTube URL\
\
**Example:** `https://youtube.com/channel`\
\
**websiteUrl**string\
\
Website URL\
\
**Example:** `https://example.com`\
\
**contactId**string\
\
Contact id associated with the affiliate\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**campaignIds**string\[\]\
\
Campaign ids\
\
**Example:** `["650173614761b33c46d33b19"]`\
\
**vatId**string\
\
VAT ID\
\
**Example:** `VAT123`\
\
**updatedAt**string\
\
Updated at timestamp\
\
**Example:** `2024-06-16T00:00:00.000Z`\
\
**w8Form**string\
\
W8 form URL\
\
**w9Form**string\
\
W9 form URL\
\
**lastUpdatedBy**object\
\
Last updated by audit info\
\
**email**stringrequired\
\
Affiliate email\
\
**Example:** `john.doe@example.com`\
\
**revenue**number\
\
Affiliate revenue\
\
**Example:** `1250.5`\
\
**customer**number\
\
Customer count\
\
**Example:** `15`\
\
**lead**number\
\
Lead count\
\
**Example:** `5`\
\
**droppedCustomer**number\
\
Dropped customer count\
\
**Example:** `2`\
\
**clickCount**number\
\
Click count\
\
**Example:** `100`\
\
**paid**number\
\
Paid amount\
\
**Example:** `500`\
\
**currency**string\
\
Currency code\
\
**Example:** `USD`\
\
**owned**number\
\
Owned amount\
\
**Example:** `750`\
\
*   \]
    

**meta** objectrequired

Pagination metadata

**count**numberrequired

Total affiliates matching the applied filters

**Example:** `42`

    {  "affiliates": [    {      "_id": "63d147176c5bbc30e9e091a4",      "firstName": "John",      "lastName": "Doe",      "phone": "+1 888 888-8888",      "deleted": false,      "locationId": "ve9EPM428h8vShlRW1KT",      "active": true,      "address": "123 Main St",      "avatar": "https://example.com/avatar.png",      "createdAt": "2024-06-16T00:00:00.000Z",      "createdBy": {},      "facebookUrl": "https://facebook.com/johndoe",      "instagramUrl": "https://instagram.com/johndoe",      "linkedInUrl": "https://linkedin.com/in/johndoe",      "twitterUrl": "https://twitter.com/johndoe",      "youtubeUrl": "https://youtube.com/channel",      "websiteUrl": "https://example.com",      "contactId": "ve9EPM428h8vShlRW1KT",      "campaignIds": [        "650173614761b33c46d33b19"      ],      "vatId": "VAT123",      "updatedAt": "2024-06-16T00:00:00.000Z",      "w8Form": "string",      "w9Form": "string",      "lastUpdatedBy": {},      "email": "john.doe@example.com",      "revenue": 1250.5,      "customer": 15,      "lead": 5,      "droppedCustomer": 2,      "clickCount": 100,      "paid": 500,      "currency": "USD",      "owned": 750    }  ],  "meta": {    "count": 42  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/affiliate-manager/affiliate-manager-api#authentication)
**type:** http**scopes:** `affiliate-manager.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/affiliate-manager/ve9EPM428h8vShlRW1KT/affiliates?query=John&campaignId=63d376de11be1d26d38f7369&limit=10&fromDate=2023-10-01&toDate=2023-10-01' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Show optional parameters

query — query

active — query

campaignId — query

skip — query

limit — query

fromDate — query

toDate — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
