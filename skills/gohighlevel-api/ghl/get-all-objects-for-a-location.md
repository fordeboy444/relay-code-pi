# Get all objects for a location

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-by-location-id
- **Summary:** Get all objects for a location. Supported Objects are contact, opportunity, business and custom objects.To understand objects and records, please have a look at the documentation here : https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-by-location-id#__docusaurus_skipToContent_fallback)

Version: v3

Get all objects for a location
==============================

GET 

https://services.leadconnectorhq.com/objects/

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get all objects for a location. Supported Objects are contact, opportunity, business and custom objects.To understand objects and records, please have a look at the documentation here : [https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0](https://doc.clickup.com/8631005/d/h/87cpx-277156/93bf0c2e23177b0)

### Requirements

#### Scope(s)

`objects/schema.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-by-location-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** stringrequired

location id

**Example:** `632c34b4c9b7da3358ac9891`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/objects/get-object-by-location-id#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**objects** object\[\]

*   Array \[\
    \
\
**id**stringrequired\
\
id of the custom / standard object schema\
\
**Example:** `661c06b4ffde146bdb469442`\
\
**standard**booleanrequired\
\
false in case of custom objects and true in case of standard objects like contacts and opportunities\
\
**Example:** `false`\
\
**key**stringrequired\
\
key that would be used to refer the custom / standard Object internally (lowercase + underscore_separated). For custom objects, 'custom_objects.' would be added as prefix by default\
\
**Example:** `custom_objects.pet`\
\
**labels** objectrequired\
\
This is what your custom / standard object will be called. These labels will be used to display your custom object on the UI\
\
**singular**stringrequired\
\
Singular name of the custom object\
\
**Example:** `Pet`\
\
**plural**stringrequired\
\
Plural name of the custom object\
\
**Example:** `Pets`\
\
**description**string\
\
Custom / Standard Object Descriptions for example , Pet Object\`s description\
\
**Example:** `These are non vaccinated pets`\
\
**locationId**stringrequired\
\
location's id\
\
**Example:** `Q9DT3OAqEXDLYuob1G32`\
\
**primaryDisplayProperty**stringrequired\
\
Primary property for the custom / standard Object. This would be used as primary data when rendering the UI. 'custom_objects.{{object_key}} or business.{{object_key}} (for company)' would be added as prefix by default for all the custom / standard objects\
\
**Example:** `custom_objects.pet.name`\
\
**dateAdded**string<date-time>required\
\
Date and time when the object was added\
\
**dateUpdated**string<date-time>required\
\
Date and time when the object was last updated\
\
**type**object\
\
Object\`s Type\
\
**Example:** `The Object type can either USER_DEFINED or SYSTEM_DEFINED`\
\
*   \]
    

    {  "objects": [    {      "id": "661c06b4ffde146bdb469442",      "standard": false,      "key": "custom_objects.pet",      "labels": {        "singular": "Pet",        "plural": "Pets"      },      "description": "These are non vaccinated pets",      "locationId": "Q9DT3OAqEXDLYuob1G32",      "primaryDisplayProperty": "custom_objects.pet.name",      "dateAdded": "2024-07-29T15:51:28.071Z",      "dateUpdated": "2024-07-29T15:51:28.071Z",      "type": "The Object type can either USER_DEFINED or SYSTEM_DEFINED"    }  ]}
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

    curl -L 'https://services.leadconnectorhq.com/objects/?locationId=632c34b4c9b7da3358ac9891' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
