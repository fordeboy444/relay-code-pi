# Delete File or Folder

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/medias/delete-media-content
- **Summary:** Deletes specific file or folder from the media storage

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/delete-media-content#__docusaurus_skipToContent_fallback)

Version: v3

Delete File or Folder
=====================

DELETE 

https://services.leadconnectorhq.com/medias/:id

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Deletes specific file or folder from the media storage

### Requirements

#### Scope(s)

`medias.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/medias/delete-media-content#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**id** stringrequired

### Query Parameters

**altType** stringrequired

**Possible values:** \[`location`\]

AltType

**Example:** `location`

**altId** stringrequired

location Id

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/medias/delete-media-content#responses "Direct link to Responses")

*   200

Successful response

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/medias/media-storage-api#authentication)
**type:** http**scopes:** `medias.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/medias/:id?altType=location' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

id — pathrequired

altType — queryrequired\---location

altId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
