# Get all categories

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-categories-by-location
- **Summary:** The 'Get all categories' Api return the blog categoies for a given location ID. Please use 'blogs/category.readonly'

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-categories-by-location#__docusaurus_skipToContent_fallback)

Version: v3

Get all categories
==================

GET 

https://services.leadconnectorhq.com/blogs/categories

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Get all categories" Api return the blog categoies for a given location ID. Please use "blogs/category.readonly"

### Requirements

#### Scope(s)

`blogs/category.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-categories-by-location#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**limit** numberrequired

Number of categories to show in the listing

**offset** numberrequired

Number of categories to skip in listing

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-categories-by-location#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**categories** object\[\]required

Array of categories

*   Array \[\
    \
\
**_id**stringrequired\
\
**Example:** `lMOzIQZne5m6zQ528sT6`\
\
**label**string\
\
**Example:** `HighLevel`\
\
**locationId**stringrequired\
\
**Example:** `lMOzIQZne5m6zQ528sT6`\
\
**updatedAt**stringrequired\
\
**Example:** `2025-01-03T11:06:35.822Z`\
\
**canonicalLink**stringrequired\
\
**Example:** `https://tryghl.blog/doc/category/agency-growth`\
\
**urlSlug**stringrequired\
\
**Example:** `agency-growth`\
\
*   \]
    

    {  "categories": [    {      "_id": "lMOzIQZne5m6zQ528sT6",      "label": "HighLevel",      "locationId": "lMOzIQZne5m6zQ528sT6",      "updatedAt": "2025-01-03T11:06:35.822Z",      "canonicalLink": "https://tryghl.blog/doc/category/agency-growth",      "urlSlug": "agency-growth"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/blogs/blogs-api#authentication)
**type:** http**scopes:** `blogs/category.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/blogs/categories?locationId=ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

limit — queryrequired

offset — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
