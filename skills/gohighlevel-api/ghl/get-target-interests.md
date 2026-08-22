# Get target interests

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-target-interests
- **Summary:** Retrieve affinity and in-market audience options for Google Ads targeting. Without `limit` the response is a plain array of root interests (each with a nested children tree). When `limit` is provided (max 100) the response is a paginated `{ targetInterests, paging }` envelope — a page counts root interests; pass `pageToken` (from `paging.next`) to fetch the next batch. By default each node is returned in full; pass `projection` (comma-separated, e.g. ?projection=name,userInterestId,children) to return only the requested fields — selecting `children` prunes the whole tree recursively with the same selection, and any value outside the known field set is rejected.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-target-interests#__docusaurus_skipToContent_fallback)

Version: v3

Get target interests
====================

GET 

https://services.leadconnectorhq.com/ad-publishing/google/target-interests

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve affinity and in-market audience options for Google Ads targeting. Without `limit` the response is a plain array of root interests (each with a nested children tree). When `limit` is provided (max 100) the response is a paginated `{ targetInterests, paging }` envelope — a page counts root interests; pass `pageToken` (from `paging.next`) to fetch the next batch. By default each node is returned in full; pass `projection` (comma-separated, e.g. ?projection=name,userInterestId,children) to return only the requested fields — selecting `children` prunes the whole tree recursively with the same selection, and any value outside the known field set is rejected.

### Requirements

#### Scope(s)

`adPublishing.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-target-interests#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**type** stringrequired

**Possible values:** \[`AFFINITY`, `IN_MARKET`\]

Interest type

**Example:** `AFFINITY`

**advertisingChannelType** stringrequired

Channel type

**Example:** `SEARCH`

**limit** string

Page size for a paginated fetch (max 100). When set, the response is a { targetInterests, paging } envelope instead of a plain array. Counts root interests — each root includes its full children tree.

**Example:** `100`

**pageToken** string

Opaque cursor for the next batch, taken from the previous response paging.next

**Example:** `100`

**projection** string\[\]

**Possible values:** \[`resourceName`, `taxonomyType`, `userInterestId`, `name`, `userInterestParent`, `availabilities`, `children`\]

Fields to return on each interest node, comma-separated (e.g. ?projection=name,userInterestId,children). When set, only the requested fields are returned. Selecting `children` prunes the whole tree recursively with the same selection; `availabilities` returns the whole array. Any value outside the known field set is rejected. Omit the param entirely to receive the full node as-is.

**Example:** `["name","userInterestId","children"]`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-get-target-interests#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

A plain array of root interests (default), or a { targetInterests, paging } envelope when `limit` is provided

*   application/json

*   Schema
*   Example (auto)

**Schema**

oneOf

*   object\[\]
*   PaginatedGoogleTargetInterestsDTO

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

    curl -L 'https://services.leadconnectorhq.com/ad-publishing/google/target-interests?locationId=HChooFuiyPpVYzeJ4HMe&type=AFFINITY&advertisingChannelType=SEARCH&limit=100&pageToken=100&projection=name%2CuserInterestId%2Cchildren' \-H 'Accept: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

type — queryrequired\---AFFINITYIN_MARKET

advertisingChannelType — queryrequired

Version — headerrequired\---2021-07-28

Show optional parameters

limit — query

pageToken — query

projection — queryresourceNametaxonomyTypeuserInterestIdnameuserInterestParentavailabilitieschildren

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
