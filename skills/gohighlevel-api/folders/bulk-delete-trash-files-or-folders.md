# Bulk Delete / Trash Files or Folders

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects
- **Summary:** Soft-deletes or trashes multiple files and folders in a single request

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects#__docusaurus_skipToContent_fallback)

Version: v3

Bulk Delete / Trash Files or Folders
====================================

PUT 

https://services.leadconnectorhq.com/medias/delete-files

Soft-deletes or trashes multiple files and folders in a single request

Request[​](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**filesToBeDeleted** object\[\]required

Array of file objects to be deleted or trashed

*   Array \[\
    \
\
**_id**stringrequired\
\
Unique identifier of the file or folder to be deleted\
\
**Example:** `686f630df0d3166d68fbcec2`\
\
*   \]
    

**altType**stringrequired

Type of entity that owns the files

**Possible values:** \[`location`\]

**Example:** `location`

**altId**stringrequired

Location identifier

**Example:** `sx6wyHhbFdRXh302LLNR`

**status**stringrequired

Status to set for the files (deleted or trashed)

**Possible values:** \[`deleted`, `trashed`\]

**Example:** `deleted`

    {  "filesToBeDeleted": [    {      "_id": "686f630df0d3166d68fbcec2"    }  ],  "altType": "location",  "altId": "sx6wyHhbFdRXh302LLNR",  "status": "deleted"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/medias/bulk-delete-media-objects#responses "Direct link to Responses")

*   200

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

    [  {    "deleted": true,    "id": "686f630df0d3166d68fbcec2"  }]

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/medias/media-storage-api#authentication)
**type:** http**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/medias/delete-files' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "filesToBeDeleted": [    {      "_id": "686f630df0d3166d68fbcec2"    }  ],  "altType": "location",  "altId": "sx6wyHhbFdRXh302LLNR",  "status": "deleted"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "filesToBeDeleted": \[    {      "_id": "686f630df0d3166d68fbcec2"    }  \],  "altType": "location",  "altId": "sx6wyHhbFdRXh302LLNR",  "status": "deleted"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
