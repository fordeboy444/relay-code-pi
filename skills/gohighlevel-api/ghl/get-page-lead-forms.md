# Get page lead forms

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-page-lead-forms
- **Summary:** Retrieve lead gen forms for a specific Facebook page (published + drafts), sorted newest-first by `createdTime`. By default each form is returned in full (including its `questions`) as a plain array; pass `projection` (comma-separated) to return only the requested fields — any value outside the known field set is rejected. Pass `limit` (max 100) for a `{ forms, paging }` envelope; use `after` (from `paging.next`) to fetch the next batch.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-page-lead-forms#__docusaurus_skipToContent_fallback)

Version: v3

Get page lead forms
===================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/page/:pageId/forms

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve lead gen forms for a specific Facebook page (published + drafts), sorted newest-first by `createdTime`. By default each form is returned in full (including its `questions`) as a plain array; pass `projection` (comma-separated) to return only the requested fields — any value outside the known field set is rejected. Pass `limit` (max 100) for a `{ forms, paging }` envelope; use `after` (from `paging.next`) to fetch the next batch.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-page-lead-forms#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**pageId** stringrequired

Facebook page identifier

**Example:** `103456789012345`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**projection** string\[\]

**Possible values:** \[`id`, `name`, `pageId`, `status`, `isDraft`, `createdTime`, `locale`, `page`, `questions`\]

Fields to return on each lead form, comma-separated (e.g. ?projection=name,id,pageId,status,isDraft,createdTime). When set, only the requested fields are returned; any other value is rejected. Omit to receive the full form (including questions) as-is.

**Example:** `["name","id","pageId","status","isDraft","createdTime"]`

**limit** string

Page size for a paginated fetch (max 100). When set, the response is a { forms, paging } envelope instead of a plain array.

**Example:** `25`

**after** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `25`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-page-lead-forms#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

A plain array of lead forms (default), or a { forms, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object\[\]
*   PaginatedFacebookLeadFormsDTO

*   Array \[\
    \
\
**property name\***any\
\
*   \]
    

    [  {}]
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/page/103456789012345/forms?locationId=loc_abc123&projection=name%2Cid%2CpageId%2Cstatus%2CisDraft%2CcreatedTime&limit=25&after=25' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

pageId — pathrequired

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

projection — queryidnamepageIdstatusisDraftcreatedTimelocalepagequestions

limit — query

after — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
