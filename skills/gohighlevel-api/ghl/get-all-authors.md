# Get all authors

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-blog-authors-by-location
- **Summary:** The 'Get all authors' Api return the blog authors for a given location ID. Please use 'blogs/author.readonly'

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-blog-authors-by-location#__docusaurus_skipToContent_fallback)

Version: v3

Get all authors
===============

GET 

https://services.leadconnectorhq.com/blogs/authors

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Get all authors" Api return the blog authors for a given location ID. Please use "blogs/author.readonly"

### Requirements

#### Scope(s)

`blogs/author.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-blog-authors-by-location#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

Location Id

**Example:** `ve9EPM428h8vShlRW1KT`

**limit** numberrequired

Number of authors to show in the listing

**Example:** `5`

**offset** numberrequired

Number of authors to skip in listing

**Example:** `0`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-all-blog-authors-by-location#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**authors** object\[\]required

Array of authors

*   Array \[\
    \
\
**_id**stringrequired\
\
**Example:** `lMOzIQZne5m6zQ528sT6`\
\
**name**stringrequired\
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
**Example:** `https://tryghl.blog/post/technology`\
\
*   \]
    

    {  "authors": [    {      "_id": "lMOzIQZne5m6zQ528sT6",      "name": "HighLevel",      "locationId": "lMOzIQZne5m6zQ528sT6",      "updatedAt": "2025-01-03T11:06:35.822Z",      "canonicalLink": "https://tryghl.blog/post/technology"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/blogs/blogs-api#authentication)
**type:** http**scopes:** `blogs/author.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/blogs/authors?locationId=ve9EPM428h8vShlRW1KT&limit=5' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

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
