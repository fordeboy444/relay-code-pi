# Get Blogs by Location ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blogs
- **Summary:** The 'Get Blogs by Location ID' API allows you get blogs using Location ID.Please use blogs/list.readonly

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blogs#__docusaurus_skipToContent_fallback)

Version: v3

Get Blogs by Location ID
========================

GET 

https://services.leadconnectorhq.com/blogs/site/all

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Get Blogs by Location ID" API allows you get blogs using Location ID.Please use blogs/list.readonly

### Requirements

#### Scope(s)

`blogs/list.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blogs#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**skip** numberrequired

**Example:** `0`

**limit** numberrequired

**Example:** `4`

**searchTerm** string

search for any post by name

**Example:** `ai news`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blogs#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data** object\[\]required

Object containing response data of blog

*   Array \[\
    \
\
**_id**stringrequired\
\
Unique identifier of the blog\
\
**Example:** `lMOzIQZne5m6zQ528sT6`\
\
**name**stringrequired\
\
Name of the blog\
\
**Example:** `My blog`\
\
*   \]
    

    {  "data": [    {      "_id": "lMOzIQZne5m6zQ528sT6",      "name": "My blog"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/blogs/blogs-api#authentication)
**type:** http**scopes:** `blogs/list.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/blogs/site/all?locationId=ve9EPM428h8vShlRW1KT&limit=4&searchTerm=ai%20news' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

skip — queryrequired

limit — queryrequired

Version — headerrequired\---v3

Show optional parameters

searchTerm — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
