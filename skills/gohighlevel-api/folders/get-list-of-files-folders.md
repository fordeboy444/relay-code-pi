# Get List of Files/ Folders

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/medias/fetch-media-content
- **Summary:** Fetches list of files and folders from the media storage

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/fetch-media-content#__docusaurus_skipToContent_fallback)

Version: v3

Get List of Files/ Folders
==========================

GET 

https://services.leadconnectorhq.com/medias/files

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Fetches list of files and folders from the media storage

### Requirements

#### Scope(s)

`medias.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/medias/fetch-media-content#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**offset** string

Number of files to skip in listing

**Example:** `5`

**limit** string

Number of files to show in the listing

**Example:** `10`

**sortBy** stringrequired

Field to sorting the file listing by

**Example:** `createdAt`

**sortOrder** stringrequired

Direction in which file needs to be sorted

**Example:** `asc`

**type** stringrequired

Type

**Example:** `file`

**query** string

Query text

**Example:** `Test file`

**altType** stringrequired

**Possible values:** \[`location`\]

AltType

**Example:** `location`

**altId** stringrequired

location Id

**parentId** string

parent id or folder id

**fetchAll** string

Fetch all files or folders

**Example:** `false`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/medias/fetch-media-content#responses "Direct link to Responses")

*   200

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**files**string\[\]required

Array of File Objects

**Example:** `{"altId":"locationId","altType":"location","name":"file name","parentId":"parent folder id","url":"file url","path":"file path"}`

    {  "files": {    "altId": "locationId",    "altType": "location",    "name": "file name",    "parentId": "parent folder id",    "url": "file url",    "path": "file path"  }}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/medias/media-storage-api#authentication)
**type:** http**scopes:** `medias.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/medias/files?offset=5&limit=10&sortBy=createdAt&sortOrder=asc&type=file&query=Test%20file&altType=location&fetchAll=false' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

sortBy — queryrequired

sortOrder — queryrequired

type — queryrequired

altType — queryrequired\---location

altId — queryrequired

Version — headerrequired\---v3

Show optional parameters

offset — query

limit — query

query — query

parentId — query

fetchAll — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
