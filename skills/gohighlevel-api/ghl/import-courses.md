# Import Courses

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/courses/import-courses
- **Summary:** Import Courses through public channels

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/courses/import-courses#__docusaurus_skipToContent_fallback)

Version: v3

Import Courses
==============

POST 

https://services.leadconnectorhq.com/courses/courses-exporter/public/import

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Import Courses through public channels

### Requirements

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/courses/import-courses#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

**userId**string

**products** object\[\]required

*   Array \[\
    \
\
**title**stringrequired\
\
**description**stringrequired\
\
**imageUrl**string\
\
**categories** object\[\]required\
\
*   Array \[\
    \
\
**title**stringrequired\
\
**visibility**visibilityrequired\
\
**Possible values:** \[`published`, `draft`\]\
\
**thumbnailUrl**string\
\
**posts** object\[\]\
\
*   Array \[\
    \
\
**title**stringrequired\
\
**visibility**visibilityrequired\
\
**Possible values:** \[`published`, `draft`\]\
\
**thumbnailUrl**string\
\
**contentType**contentTyperequired\
\
**Possible values:** \[`video`, `assignment`, `quiz`\]\
\
**description**stringrequired\
\
**bucketVideoUrl**string\
\
**postMaterials** object\[\]\
\
*   Array \[\
    \
\
**title**stringrequired\
\
**type**typerequired\
\
**Possible values:** \[`pdf`, `image`, `docx`, `pptx`, `xlsx`, `html`, `dotx`, `epub`, `webp`, `gdoc`, `mp3`, `doc`, `txt`, `zip`, `ppt`, `key`, `htm`, `xls`, `odp`, `odt`, `rtf`, `m4a`, `ods`, `mp4`, `ai`, `avi`, `mov`, `wmv`, `mkv`, `wav`, `flac`, `ogg`, `png`, `jpeg`, `jpg`, `gif`, `bmp`, `tiff`, `svg`, `odg`, `sxw`, `sxc`, `sxi`, `rar`, `7z`, `json`, `xml`, `csv`, `md`, `obj`, `stl`, `woff`, `ttf`\]\
\
**url**stringrequired\
\
*   \]\
    \
\
*   \]\
    \
\
**subCategories** object\[\]\
\
*   Array \[\
    \
\
**title**stringrequired\
\
**visibility**visibilityrequired\
\
**Possible values:** \[`published`, `draft`\]\
\
**thumbnailUrl**string\
\
**posts** object\[\]\
\
*   Array \[\
    \
\
**title**stringrequired\
\
**visibility**visibilityrequired\
\
**Possible values:** \[`published`, `draft`\]\
\
**thumbnailUrl**string\
\
**contentType**contentTyperequired\
\
**Possible values:** \[`video`, `assignment`, `quiz`\]\
\
**description**stringrequired\
\
**bucketVideoUrl**string\
\
**postMaterials** object\[\]\
\
*   Array \[\
    \
\
**title**stringrequired\
\
**type**typerequired\
\
**Possible values:** \[`pdf`, `image`, `docx`, `pptx`, `xlsx`, `html`, `dotx`, `epub`, `webp`, `gdoc`, `mp3`, `doc`, `txt`, `zip`, `ppt`, `key`, `htm`, `xls`, `odp`, `odt`, `rtf`, `m4a`, `ods`, `mp4`, `ai`, `avi`, `mov`, `wmv`, `mkv`, `wav`, `flac`, `ogg`, `png`, `jpeg`, `jpg`, `gif`, `bmp`, `tiff`, `svg`, `odg`, `sxw`, `sxc`, `sxi`, `rar`, `7z`, `json`, `xml`, `csv`, `md`, `obj`, `stl`, `woff`, `ttf`\]\
\
**url**stringrequired\
\
*   \]\
    \
\
*   \]\
    \
\
*   \]\
    \
\
*   \]\
    \
\
**instructorDetails** object\
\
**name**stringrequired\
\
**description**stringrequired\
\
*   \]
    

    {  "locationId": "string",  "userId": "string",  "products": [    {      "title": "string",      "description": "string",      "imageUrl": "string",      "categories": [        {          "title": "string",          "visibility": "published",          "thumbnailUrl": "string",          "posts": [            {              "title": "string",              "visibility": "published",              "thumbnailUrl": "string",              "contentType": "video",              "description": "string",              "bucketVideoUrl": "string",              "postMaterials": [                {                  "title": "string",                  "type": "pdf",                  "url": "string"                }              ]            }          ],          "subCategories": [            {              "title": "string",              "visibility": "published",              "thumbnailUrl": "string",              "posts": [                {                  "title": "string",                  "visibility": "published",                  "thumbnailUrl": "string",                  "contentType": "video",                  "description": "string",                  "bucketVideoUrl": "string",                  "postMaterials": [                    {                      "title": "string",                      "type": "pdf",                      "url": "string"                    }                  ]                }              ]            }          ]        }      ],      "instructorDetails": {        "name": "string",        "description": "string"      }    }  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/courses/import-courses#responses "Direct link to Responses")

*   201

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/courses/memberships-api#authentication)
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

    curl -L 'https://services.leadconnectorhq.com/courses/courses-exporter/public/import' \-H 'Content-Type: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "string",  "userId": "string",  "products": [    {      "title": "string",      "description": "string",      "imageUrl": "string",      "categories": [        {          "title": "string",          "visibility": "published",          "thumbnailUrl": "string",          "posts": [            {              "title": "string",              "visibility": "published",              "thumbnailUrl": "string",              "contentType": "video",              "description": "string",              "bucketVideoUrl": "string",              "postMaterials": [                {                  "title": "string",                  "type": "pdf",                  "url": "string"                }              ]            }          ],          "subCategories": [            {              "title": "string",              "visibility": "published",              "thumbnailUrl": "string",              "posts": [                {                  "title": "string",                  "visibility": "published",                  "thumbnailUrl": "string",                  "contentType": "video",                  "description": "string",                  "bucketVideoUrl": "string",                  "postMaterials": [                    {                      "title": "string",                      "type": "pdf",                      "url": "string"                    }                  ]                }              ]            }          ]        }      ],      "instructorDetails": {        "name": "string",        "description": "string"      }    }  ]}'

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
  "locationId": "string",  "userId": "string",  "products": \[    {      "title": "string",      "description": "string",      "imageUrl": "string",      "categories": \[        {          "title": "string",          "visibility": "published",          "thumbnailUrl": "string",          "posts": \[            {              "title": "string",              "visibility": "published",              "thumbnailUrl": "string",              "contentType": "video",              "description": "string",              "bucketVideoUrl": "string",              "postMaterials": \[                {                  "title": "string",                  "type": "pdf",                  "url": "string"                }              \]            }          \],          "subCategories": \[            {              "title": "string",              "visibility": "published",              "thumbnailUrl": "string",              "posts": \[                {                  "title": "string",                  "visibility": "published",                  "thumbnailUrl": "string",                  "contentType": "video",                  "description": "string",                  "bucketVideoUrl": "string",                  "postMaterials": \[                    {                      "title": "string",                      "type": "pdf",                      "url": "string"                    }                  \]                }              \]            }          \]        }      \],      "instructorDetails": {        "name": "string",        "description": "string"      }    }  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
