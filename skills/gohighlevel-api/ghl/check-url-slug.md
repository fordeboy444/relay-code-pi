# Check url slug

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists
- **Summary:** The 'Check url slug' API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists#__docusaurus_skipToContent_fallback)

Version: v3

Check url slug
==============

GET 

https://services.leadconnectorhq.com/blogs/posts/url-slug-exists

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Check url slug" API allows check the blog slug validation which is needed before publishing any blog post. Please use blogs/check-slug.readonly. you can find the POST ID from the post edit url.

### Requirements

#### Scope(s)

`blogs/check-slug.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**urlSlug** stringrequired

**locationId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**postId** string

**Example:** `66f429b8afdce84227a4610d`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/blogs/check-url-slug-exists#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**exists**booleanrequired

Indicates whether the url slug exists or not

    {  "exists": true}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/blogs/blogs-api#authentication)
**type:** http**scopes:** `blogs/check-slug.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/blogs/posts/url-slug-exists?locationId=ve9EPM428h8vShlRW1KT&postId=66f429b8afdce84227a4610d' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

urlSlug — queryrequired

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

postId — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
