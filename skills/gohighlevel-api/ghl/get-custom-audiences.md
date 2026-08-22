# Get custom audiences

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audiences
- **Summary:** Retrieve Facebook custom audiences for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100) the response is a paginated `{ customAudiences, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch. By default each item is returned in full; pass `projection` (comma-separated, dot-notation for nested fields, e.g. ?projection=id,name,dataSource.type) to return only the requested fields — any value outside the known field set is rejected.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audiences#__docusaurus_skipToContent_fallback)

Version: v3

Get custom audiences
====================

GET 

https://services.leadconnectorhq.com/ad-publishing/facebook/custom-audience

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Facebook custom audiences for a location. Without `limit` the response is a plain array. When `limit` is provided (max 100) the response is a paginated `{ customAudiences, paging }` envelope; pass `after` (from `paging.next`) to fetch the next batch. By default each item is returned in full; pass `projection` (comma-separated, dot-notation for nested fields, e.g. ?projection=id,name,dataSource.type) to return only the requested fields — any value outside the known field set is rejected.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audiences#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `loc_abc123`

**type** stringrequired

**Possible values:** \[`lookalike`, `custom`, `all`\]

Audience list type

**Example:** `custom`

**source** string

**Possible values:** \[`ad_manager`, `integration`\]

Audience data source

**Example:** `ad_manager`

**adAccountId** stringrequired

Ad account identifier

**Example:** `act_123456`

**limit** string

Page size for a paginated fetch (max 100). When set, the response is a { customAudiences, paging } envelope instead of a plain array.

**Example:** `25`

**after** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `QVFIU...`

**projection** string\[\]

**Possible values:** \[`id`, `name`, `description`, `approximateCountLowerBound`, `approximateCountUpperBound`, `subtype`, `timeCreated`, `timeUpdated`, `dataSource`, `dataSource.type`, `dataSource.subType`, `dataSource.creationParams`, `deliveryStatus`, `deliveryStatus.code`, `deliveryStatus.description`, `operationStatus`, `operationStatus.code`, `operationStatus.description`\]

Fields to return on each item, comma-separated (e.g. ?projection=id,name,dataSource.type). When set, only the requested fields are returned. Nested fields use dot-notation; naming a parent (e.g. dataSource) returns the whole nested object. Any value outside the known field set is rejected. Omit the param entirely to receive the full item as-is.

**Example:** `["id","name","dataSource.type","deliveryStatus.code"]`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audiences#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

A plain array of custom audiences (default), or a { customAudiences, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object\[\]
*   PaginatedFacebookCustomAudiencesDTO

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/facebook/custom-audience?locationId=loc_abc123&type=custom&source=ad_manager&adAccountId=act_123456&limit=25&after=QVFIU...&projection=id%2Cname%2CdataSource.type%2CdeliveryStatus.code' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

type — queryrequired\---lookalikecustomall

adAccountId — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

source — query\---ad_managerintegration

limit — query

after — query

projection — queryidnamedescriptionapproximateCountLowerBoundapproximateCountUpperBoundsubtypetimeCreatedtimeUpdateddataSourcedataSource.typedataSource.subTypedataSource.creationParamsdeliveryStatusdeliveryStatus.codedeliveryStatus.descriptionoperationStatusoperationStatus.codeoperationStatus.description

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
