# Create Folder

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/medias/create-media-folder
- **Summary:** Creates a new folder in the media storage

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/medias/create-media-folder#__docusaurus_skipToContent_fallback)

Version: v3

Create Folder
=============

POST 

https://services.leadconnectorhq.com/medias/folder

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Creates a new folder in the media storage

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/medias/create-media-folder#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

Location Id

**Example:** `sx6wyHhbFdRXh302LLNR`

**altType**stringrequired

Type of entity (location only)

**Possible values:** \[`location`\]

**Example:** `location`

**name**stringrequired

Name of the folder to be created

**Example:** `New Folder`

**parentId**string

ID of the parent folder (optional)

**Example:** `64af50c42d567a3b4f5989e0`

    {  "altId": "sx6wyHhbFdRXh302LLNR",  "altType": "location",  "name": "New Folder",  "parentId": "64af50c42d567a3b4f5989e0"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/medias/create-media-folder#responses "Direct link to Responses")

*   200

Returns the newly created folder object

*   application/json

*   Schema
*   Example (auto)

**Schema**

**altId**stringrequired

Location identifier that owns this folder

**Example:** `sx6wyHhbFdRXh302LLNR`

**altType**stringrequired

Type of entity that owns the folder

**Possible values:** \[`location`\]

**Example:** `location`

**name**stringrequired

Name of the folder

**Example:** `New Folder`

**parentId**string

ID of the parent folder (null for root folders)

**Example:** `64af50c42d567a3b4f5989e0`

**type**stringrequired

Type of the object (always 'folder' for folders)

**Example:** `folder`

**deleted**boolean

Whether the folder has been deleted

**Example:** `false`

**pendingUpload**boolean

Whether there are pending uploads to this folder

**Example:** `false`

**category**string

Primary category of content stored in the folder

**Example:** `image`

**subCategory**string

Sub-category of content stored in the folder

**Example:** `logo`

**isPrivate**boolean

Whether the folder is private and not publicly accessible

**Example:** `false`

**relocatedFolder**boolean

Whether the folder has been moved from its original location

**Example:** `false`

**migrationCompleted**boolean

Whether the data migration process has been completed for this folder

**Example:** `true`

**appFolder**boolean

Whether this is a system-generated application folder

**Example:** `false`

**isEssential**boolean

Whether the folder is essential and should not be deleted

**Example:** `false`

**status**string

Current status of the folder

**lastUpdatedBy**string

ID of the user who last updated the folder

**Example:** `user-uuid-123`

    {  "altId": "sx6wyHhbFdRXh302LLNR",  "altType": "location",  "name": "New Folder",  "parentId": "64af50c42d567a3b4f5989e0",  "type": "folder",  "deleted": false,  "pendingUpload": false,  "category": "image",  "subCategory": "logo",  "isPrivate": false,  "relocatedFolder": false,  "migrationCompleted": true,  "appFolder": false,  "isEssential": false,  "status": "string",  "lastUpdatedBy": "user-uuid-123"}

Share your feedback
-------------------

★★★★★

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

    curl -L 'https://services.leadconnectorhq.com/medias/folder' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "sx6wyHhbFdRXh302LLNR",  "altType": "location",  "name": "New Folder",  "parentId": "64af50c42d567a3b4f5989e0"}'

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
  "altId": "sx6wyHhbFdRXh302LLNR",  "altType": "location",  "name": "New Folder",  "parentId": "64af50c42d567a3b4f5989e0"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
