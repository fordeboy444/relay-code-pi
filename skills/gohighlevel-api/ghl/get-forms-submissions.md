# Get Forms Submissions

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/forms/get-forms-submissions
- **Summary:** Get Forms Submissions

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/forms/get-forms-submissions#__docusaurus_skipToContent_fallback)

Version: v3

Get Forms Submissions
=====================

GET 

https://services.leadconnectorhq.com/forms/submissions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Forms Submissions

### Requirements

#### Scope(s)

`forms.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/forms/get-forms-submissions#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

**page** number

Page No. By default it will be 1

Default value:`1`

**Example:** `1`

**limit** number

Limit Per Page records count. will allow maximum up to 100 and default will be 20

Default value:`20`

**Example:** `20`

**formId** string

Filter submission by form id

**Example:** `jjusM6EOngDExnbo2DbU`

**q** string

Filter by contactId, name, email or phone no.

**Example:** `john@deo.com`

**startAt** string

Get submission by starting of this date. By default it will be same date of last month(YYYY-MM-DD).

**Example:** `2020-11-14`

**endAt** string

Get submission by ending of this date. By default it will be current date(YYYY-MM-DD).

**Example:** `2020-12-14`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/forms/get-forms-submissions#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**submissions** object\[\]

*   Array \[\
    \
\
**id**string\
\
**Example:** `38303ec7-629a-49e2-888a-cf8bf0b1f97e`\
\
**contactId**string\
\
**Example:** `DWQ45t2IPVxi9LDu1wBl`\
\
**createdAt**string\
\
**Example:** `2021-06-23T06:07:04.000Z`\
\
**formId**string\
\
**Example:** `YSWdvS4Is98wtIDGnpmI`\
\
**name**string\
\
**Example:** `test`\
\
**email**string\
\
**Example:** `test@test.com`\
\
**others** object\
\
**__submissions_other_field__**string\
\
**Example:** `john@deo.com`\
\
**__custom_field_id__**string\
\
**Example:** `20`\
\
**eventData** object\
\
**fbc**string\
\
**Example:** `fb.1.123456789.987654321`\
\
**fbp**string\
\
**Example:** `fbp.1.987654321.123456789`\
\
**page** object\
\
**url**string\
\
**Example:** `https://example.com`\
\
**title**string\
\
**Example:** `Example Page`\
\
**type**string\
\
**Example:** `page-visit`\
\
**domain**string\
\
**Example:** `example.com`\
\
**medium**string\
\
**Example:** `form`\
\
**source**string\
\
**Example:** `Direct traffic`\
\
**version**string\
\
**Example:** `v3`\
\
**adSource**string\
\
**Example:** `example-ad-source`\
\
**mediumId**string\
\
**Example:** `medium-id-123`\
\
**parentId**string\
\
**Example:** `parent-id-456`\
\
**referrer**string\
\
**Example:** `https://staging.gohighlevel.com`\
\
**fbEventId**string\
\
**Example:** `event-id-789`\
\
**timestamp**number\
\
**Example:** `1234567890`\
\
**parentName**string\
\
**Example:** `Parent Form`\
\
**fingerprint**string\
\
**Example:** `example-fingerprint`\
\
**pageVisitType**string\
\
**Example:** `form`\
\
**contactSessionIds** objectnullable\
\
**ids**string\[\]nullable\
\
**Example:** `["session1","session2"]`\
\
**fieldsOriSequance**string\[\]\
\
**Example:** `["full_name","first_name","last_name","phone","email"]`\
\
*   \]
    

**meta** object

**total**number

**Example:** `1`

**currentPage**number

**Example:** `1`

**nextPage**numbernullable

**Example:** `null`

**prevPage**numbernullable

**Example:** `null`

    {  "submissions": [    {      "id": "38303ec7-629a-49e2-888a-cf8bf0b1f97e",      "contactId": "DWQ45t2IPVxi9LDu1wBl",      "createdAt": "2021-06-23T06:07:04.000Z",      "formId": "YSWdvS4Is98wtIDGnpmI",      "name": "test",      "email": "test@test.com",      "others": {        "__submissions_other_field__": "john@deo.com",        "__custom_field_id__": "20",        "eventData": {          "fbc": "fb.1.123456789.987654321",          "fbp": "fbp.1.987654321.123456789",          "page": {            "url": "https://example.com",            "title": "Example Page"          },          "type": "page-visit",          "domain": "example.com",          "medium": "form",          "source": "Direct traffic",          "version": "v3",          "adSource": "example-ad-source",          "mediumId": "medium-id-123",          "parentId": "parent-id-456",          "referrer": "https://staging.gohighlevel.com",          "fbEventId": "event-id-789",          "timestamp": 1234567890,          "parentName": "Parent Form",          "fingerprint": "example-fingerprint",          "pageVisitType": "form",          "contactSessionIds": {            "ids": [              "session1",              "session2"            ]          }        },        "fieldsOriSequance": [          "full_name",          "first_name",          "last_name",          "phone",          "email"        ]      }    }  ],  "meta": {    "total": 1,    "currentPage": 1,    "nextPage": null,    "prevPage": null  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/forms/forms-api#authentication)
**type:** http**scopes:** `forms.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/forms/submissions?locationId=ve9EPM428h8vShlRW1KT&page=1&limit=20&formId=jjusM6EOngDExnbo2DbU&q=john%40deo.com&startAt=2020-11-14&endAt=2020-12-14' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

page — query

limit — query

formId — query

q — query

startAt — query

endAt — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
