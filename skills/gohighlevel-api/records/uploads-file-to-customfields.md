# Uploads File to customFields

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields
- **Summary:** Uploads File to customFields

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields#__docusaurus_skipToContent_fallback)

Version: v3

Uploads File to customFields
============================

POST 

https://services.leadconnectorhq.com/locations/:locationId/customFields/upload

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Uploads File to customFields

### Requirements

#### Scope(s)

`locations/customFields.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**locationId** stringrequired

*   multipart/form-data

*   Body
*   Example (auto)

### Body**required**

**id**string

Id(Contact Id/Opportunity Id/Custom Field Id)

**Example:** `aWdODOBVOlH1RUFKWQke`

**maxFiles**string

Max number of files

**Example:** `15`

    {  "id": "aWdODOBVOlH1RUFKWQke",  "maxFiles": "15"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/locations/upload-file-custom-fields#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**uploadedFiles**object

Uploaded files

**Example:** `{"FileName.csv":"https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"}`

**meta**string\[\]

Meta data of uploaded files

**Example:** `[{"fieldname":"FileName.csv","originalname":"FileName.csv","encoding":"7bit","mimetype":"text/csv","size":2061,"url":"https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"}]`

    {  "uploadedFiles": {    "FileName.csv": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"  },  "meta": [    {      "fieldname": "FileName.csv",      "originalname": "FileName.csv",      "encoding": "7bit",      "mimetype": "text/csv",      "size": 2061,      "url": "https://highlevel-private-staging.storage.googleapis.com/location/Ar4JQgIyuzRsVuwD9RSK/custom-Field/UpZLmohmKEQYn0ymqplY/56e0d7fc-085c-4a07-9e1d-6d8fdac7e710.csv"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/locations/sub-account-formerly-location-api#authentication)
**type:** http**scopes:** `locations/customFields.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/locations/:locationId/customFields/upload' \-H 'Content-Type: multipart/form-data' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-F 'id="aWdODOBVOlH1RUFKWQke"' \-F 'maxFiles="15"'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

Version — headerrequired\---v3

Body required

*   Example (from schema)

id

maxFiles

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
