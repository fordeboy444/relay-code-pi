# Get Object Schema by key / id

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-schema-by-key
- **Summary:** Retrieve Object Schema by key or ID. This will return the schema of the custom object, including all its fields and properties. Supported objects include contact, opportunity, business and custom objects.To understand objects and records, please have a look the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-schema-by-key#__docusaurus_skipToContent_fallback)

Version: v3

Get Object Schema by key / id
=============================

GET 

https://services.leadconnectorhq.com/objects/:key

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve Object Schema by key or ID. This will return the schema of the custom object, including all its fields and properties. Supported objects include contact, opportunity, business and custom objects.To understand objects and records, please have a look the documentation here : [https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

### Requirements

#### Scope(s)

`objects/schema.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-schema-by-key#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**key** stringrequired

key of the custom or standard object. For custom objects, the key must include the prefix “custom_objects.”. This key can be found on the Object Details page under Settings in the UI.

**Example:** `custom_objects.pet`

### Query Parameters

**locationId** stringrequired

location id of the sub account

**Example:** `632c34b4c9b7da3358ac9891`

**fetchProperties** string

Fetch Properties , Fetches all the standard / custom fields of the object when set to true

**Example:** `true`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-schema-by-key#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**object** object

**id**stringrequired

id of the custom / standard object schema

**Example:** `661c06b4ffde146bdb469442`

**standard**booleanrequired

false in case of custom objects and true in case of standard objects like contacts and opportunities

**Example:** `false`

**key**stringrequired

key that would be used to refer the custom / standard Object internally (lowercase + underscore_separated). For custom objects, 'custom_objects.' would be added as prefix by default

**Example:** `custom_objects.pet`

**labels** objectrequired

This is what your custom / standard object will be called. These labels will be used to display your custom object on the UI

**singular**stringrequired

Singular name of the custom object

**Example:** `Pet`

**plural**stringrequired

Plural name of the custom object

**Example:** `Pets`

**description**string

Custom / Standard Object Descriptions for example , Pet Object\`s description

**Example:** `These are non vaccinated pets`

**locationId**stringrequired

location's id

**Example:** `Q9DT3OAqEXDLYuob1G32`

**primaryDisplayProperty**stringrequired

Primary property for the custom / standard Object. This would be used as primary data when rendering the UI. 'custom_objects.{{object_key}} or business.{{object_key}} (for company)' would be added as prefix by default for all the custom / standard objects

**Example:** `custom_objects.pet.name`

**dateAdded**string<date-time>required

Date and time when the object was added

**dateUpdated**string<date-time>required

Date and time when the object was last updated

**type**object

Object\`s Type

**Example:** `The Object type can either USER_DEFINED or SYSTEM_DEFINED`

**cache**booleanrequired

Is the response served from cache

**Example:** `true`

**fields** object\[\]

*   Array \[\
    \
\
**locationId**stringrequired\
\
Location Id\
\
**Example:** `ve9EPM428h8vShlRW1KT`\
\
**name**string\
\
Field name\
\
**Example:** `Name`\
\
**description**string\
\
Description of the field\
\
**placeholder**string\
\
Placeholder text for the field\
\
**showInForms**booleanrequired\
\
Whether the field should be shown in forms\
\
**options** object\[\]\
\
Options for the field (Optional, valid only for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST type)\
\
*   Array \[\
    \
\
**key**stringrequired\
\
Key of the option (Included in Create and Response, excluded in Update)\
\
**label**stringrequired\
\
Value of the option\
\
**url**string\
\
URL associated with the option (Optional, valid only for RADIO type)\
\
*   \]\
    \
\
**acceptedFormats**string\
\
Allowed file formats for uploads. Options include: .pdf, .docx, .doc, .jpg, .jpeg, .png, .gif, .csv, .xlsx, .xls, all\
\
**Possible values:** \[`.pdf`, `.docx`, `.doc`, `.jpg`, `.jpeg`, `.png`, `.gif`, `.csv`, `.xlsx`, `.xls`, `all`\]\
\
**id**stringrequired\
\
Unique identifier of the object\
\
**objectKey**stringrequired\
\
The key for your custom / standard object. This key uniquely identifies the custom object. Example: "custom_object.pet" for a custom object related to pets.\
\
**Example:** `custom_object.pet`\
\
**dataType**stringrequired\
\
Type of field that you are trying to create\
\
**Possible values:** \[`TEXT`, `LARGE_TEXT`, `NUMERICAL`, `PHONE`, `MONETORY`, `CHECKBOX`, `SINGLE_OPTIONS`, `MULTIPLE_OPTIONS`, `DATE`, `TEXTBOX_LIST`, `FILE_UPLOAD`, `RADIO`\]\
\
**parentId**stringrequired\
\
ID of the parent folder\
\
**Example:** `3v34PM428h8vShlRW1KT`\
\
**fieldKey**stringrequired\
\
Field key. For Custom Object it's formatted as "custom_object.{objectKey}.{fieldKey}". "custom_object" is a fixed prefix, "{objectKey}" is your custom object's identifier, and "{fieldName}" is the unique field name within that object. Example: "custom_object.pet.name" for a "name" field in a "pet" custom object.\
\
**Example:** `custom_object.pet.name`\
\
**allowCustomOption**boolean\
\
Determines if users can add a custom option value different from the predefined options in records for RADIO type fields. A custom value added in one record does not automatically become an option and will not appear as an option for other records.\
\
**Example:** `true`\
\
**maxFileLimit**number\
\
Maximum file limit for uploads\
\
**Example:** `2`\
\
**dateAdded**string<date-time>required\
\
Date and time when the object was added\
\
**dateUpdated**string<date-time>required\
\
Date and time when the object was last updated\
\
*   \]
    

    {  "object": {    "id": "661c06b4ffde146bdb469442",    "standard": false,    "key": "custom_objects.pet",    "labels": {      "singular": "Pet",      "plural": "Pets"    },    "description": "These are non vaccinated pets",    "locationId": "Q9DT3OAqEXDLYuob1G32",    "primaryDisplayProperty": "custom_objects.pet.name",    "dateAdded": "2024-07-29T15:51:28.071Z",    "dateUpdated": "2024-07-29T15:51:28.071Z",    "type": "The Object type can either USER_DEFINED or SYSTEM_DEFINED"  },  "cache": true,  "fields": [    {      "locationId": "ve9EPM428h8vShlRW1KT",      "name": "Name",      "description": "string",      "placeholder": "string",      "showInForms": true,      "options": [        {          "key": "string",          "label": "string",          "url": "string"        }      ],      "acceptedFormats": ".pdf",      "id": "string",      "objectKey": "custom_object.pet",      "dataType": "TEXT",      "parentId": "3v34PM428h8vShlRW1KT",      "fieldKey": "custom_object.pet.name",      "allowCustomOption": true,      "maxFileLimit": 2,      "dateAdded": "2024-07-29T15:51:28.071Z",      "dateUpdated": "2024-07-29T15:51:28.071Z"    }  ]}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/objects/custom-objects-api#authentication)
**type:** http**scopes:** `objects/schema.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/objects/custom_objects.pet?locationId=632c34b4c9b7da3358ac9891&fetchProperties=true' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

key — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

fetchProperties — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
