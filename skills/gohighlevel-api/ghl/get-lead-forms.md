# Get lead forms

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-lead-forms
- **Summary:** Retrieve LinkedIn lead gen forms for an ad account. By default each form is returned in full as a plain array; pass `projection` (comma-separated, dot-notation for nested fields) to return only the requested fields — any value outside the known field set is rejected. When `limit` is provided (max 100) the response is a paginated `{ leadForms, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-lead-forms#__docusaurus_skipToContent_fallback)

Version: v3

Get lead forms
==============

GET 

https://services.leadconnectorhq.com/ad-publishing/linkedin/:accountId/forms

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve LinkedIn lead gen forms for an ad account. By default each form is returned in full as a plain array; pass `projection` (comma-separated, dot-notation for nested fields) to return only the requested fields — any value outside the known field set is rejected. When `limit` is provided (max 100) the response is a paginated `{ leadForms, paging }` envelope; pass `pageToken` (from `paging.next`) to fetch the next batch.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-lead-forms#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Path Parameters

**accountId** stringrequired

Account identifier

**Example:** `12345678`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**projection** string\[\]

**Possible values:** \[`id`, `name`, `state`, `created`, `lastModified`, `versionId`, `creationLocale`, `owner`, `reviewInfo`, `reviewInfo.reviewStatus`, `reviewInfo.rejectionReasons`, `content`, `content.headline`, `content.questions`, `content.legalInfo`, `hiddenFields`\]

Fields to return on each lead form, comma-separated (e.g. ?projection=id,name,state,created,reviewInfo.reviewStatus). When set, only the requested fields are returned; any value outside the known field set is rejected. Nested fields use dot-notation (naming a parent like `reviewInfo` returns the whole object). Omit to receive the full form (including content.questions) as-is.

**Example:** `["id","name","state","created","reviewInfo.reviewStatus"]`

**limit** string

Page size for a paginated fetch (max 100). When set, the response is a { leadForms, paging } envelope instead of a plain array.

**Example:** `100`

**pageToken** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `100`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/li-get-lead-forms#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

A plain array of lead forms (default), or a { leadForms, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object\[\]
*   PaginatedLinkedInLeadFormsDTO

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/linkedin/12345678/forms?locationId=loc_abc123&projection=id%2Cname%2Cstate%2Ccreated%2CreviewInfo.reviewStatus&limit=100&pageToken=100' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

accountId — pathrequired

locationId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

projection — queryidnamestatecreatedlastModifiedversionIdcreationLocaleownerreviewInforeviewInfo.reviewStatusreviewInfo.rejectionReasonscontentcontent.headlinecontent.questionscontent.legalInfohiddenFields

limit — query

pageToken — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
