# Get Blog posts by Blog ID

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blog-post
- **Summary:** The 'Get Blog posts by Blog ID' API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blog-post#__docusaurus_skipToContent_fallback)

Version: v3

Get Blog posts by Blog ID
=========================

GET 

https://services.leadconnectorhq.com/blogs/posts/all

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Get Blog posts by Blog ID" API allows you get blog posts for any given blog site using blog ID.Please use blogs/posts.readonly

### Requirements

#### Scope(s)

`blogs/posts.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blog-post#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**blogId** stringrequired

**Example:** `66f429b8afdce84227a4610d`

**limit** numberrequired

**Example:** `4`

**offset** numberrequired

**Example:** `0`

**searchTerm** string

search for any post by name

**Example:** `ai news`

**status** string

**Possible values:** \[`ALL`, `PUBLISHED`, `SCHEDULED`, `ARCHIVED`, `DRAFT`\]

**Example:** `PUBLISHED`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/get-blog-post#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**blogs** object\[\]required

Object containing response data of blog posts

*   Array \[\
    \
\
**categories**string\[\]required\
\
Array of category IDs associated with the blog post\
\
**Example:** `["659ecabc4a37969a2b7cc370","6683abde331c041f32c07aee"]`\
\
**tags**string\[\]\
\
Array of tags associated with the blog post\
\
**Example:** `["Apple","Banana"]`\
\
**archived**booleanrequired\
\
Indicates whether the blog post is archived\
\
**Example:** `false`\
\
**_id**stringrequired\
\
Unique identifier of the blog post\
\
**Example:** `66c381b38be80858b9af62b6`\
\
**title**stringrequired\
\
Title of the blog post\
\
**Example:** `Banana is good source of energy`\
\
**description**stringrequired\
\
Description of the blog post\
\
**Example:** `Description`\
\
**imageUrl**stringrequired\
\
URL of the image associated with the blog post\
\
**Example:** `https://storage.googleapis.com/ghl-test/fACm0Ojm5oC70G3DcFmE/media/66b5aa3b1745b2713a8d033f.jpeg`\
\
**status**stringrequired\
\
Publication status of the blog post\
\
**Example:** `PUBLISHED`\
\
**imageAltText**stringrequired\
\
Alternative text for the blog post image\
\
**Example:** `alt`\
\
**urlSlug**stringrequired\
\
URL slug for the blog post\
\
**Example:** `banana-good-energy`\
\
**canonicalLink**string\
\
Canonical link of the blog post\
\
**Example:** `https://blog.chatgpts.agency/post/test-8384`\
\
**author**string\
\
Identifier of the author of the blog post\
\
**Example:** `659ec9634a3796e4e47cc360`\
\
**publishedAt**stringrequired\
\
Timestamp when the blog post was published\
\
**Example:** `2024-08-19T17:14:57.000Z`\
\
**updatedAt**stringrequired\
\
Timestamp when the blog post was last updated\
\
**Example:** `2024-08-19T17:32:36.182Z`\
\
*   \]
    

    {  "blogs": [    {      "categories": [        "659ecabc4a37969a2b7cc370",        "6683abde331c041f32c07aee"      ],      "tags": [        "Apple",        "Banana"      ],      "archived": false,      "_id": "66c381b38be80858b9af62b6",      "title": "Banana is good source of energy",      "description": "Description",      "imageUrl": "https://storage.googleapis.com/ghl-test/fACm0Ojm5oC70G3DcFmE/media/66b5aa3b1745b2713a8d033f.jpeg",      "status": "PUBLISHED",      "imageAltText": "alt",      "urlSlug": "banana-good-energy",      "canonicalLink": "https://blog.chatgpts.agency/post/test-8384",      "author": "659ec9634a3796e4e47cc360",      "publishedAt": "2024-08-19T17:14:57.000Z",      "updatedAt": "2024-08-19T17:32:36.182Z"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/blogs/blogs-api#authentication)
**type:** http**scopes:** `blogs/posts.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/blogs/posts/all?locationId=ve9EPM428h8vShlRW1KT&blogId=66f429b8afdce84227a4610d&limit=4&searchTerm=ai%20news&status=PUBLISHED' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

blogId — queryrequired

limit — queryrequired

offset — queryrequired

Version — headerrequired\---v3

Show optional parameters

searchTerm — query

status — query\---ALLPUBLISHEDSCHEDULEDARCHIVEDDRAFT

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
