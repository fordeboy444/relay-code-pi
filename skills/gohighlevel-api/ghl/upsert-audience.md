# Upsert audience

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-audience
- **Summary:** Create or update a Google Ads combined audience

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-audience#__docusaurus_skipToContent_fallback)

Version: v3

Upsert audience
===============

PUT 

https://services.leadconnectorhq.com/ad-publishing/google/audiences

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a Google Ads combined audience

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-audience#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**locationId**stringrequired

Location identifier

**Example:** `loc_abc123`

**resourceName**string

Audience resource name

**Example:** `customers/123/audiences/456`

**name**stringrequired

Audience name

**Example:** `My Audience`

**dimensions** object

Audience dimensions

**isAgeUnknown**boolean

Include unknown age

**Example:** `false`

**ageRanges**string\[\]

Age range filters

**Example:** `[{"minAge":25,"maxAge":34}]`

**genders**string\[\]

Gender targets

**Example:** `["MALE","FEMALE"]`

**parentalStatuses**string\[\]

Parental status targets

**Example:** `["PARENT"]`

**audienceSegments** object

Audience segment references used for targeting

**customAudiences**string\[\]

Resource names of custom audience segments

**Example:** `["customers/123/customAudiences/456"]`

**userLists**string\[\]

Resource names of user lists (remarketing lists, customer match lists, etc.)

**Example:** `["customers/123/userLists/789"]`

**userInterests**string\[\]

Resource names of user interest segments (in-market or affinity audiences)

**Example:** `["customers/123/userInterests/321"]`

**exclusionDimension** object

Exclusion dimensions

**isAgeUnknown**boolean

Include unknown age

**Example:** `false`

**ageRanges**string\[\]

Age range filters

**Example:** `[{"minAge":25,"maxAge":34}]`

**genders**string\[\]

Gender targets

**Example:** `["MALE","FEMALE"]`

**parentalStatuses**string\[\]

Parental status targets

**Example:** `["PARENT"]`

**audienceSegments** object

Audience segment references used for targeting

**customAudiences**string\[\]

Resource names of custom audience segments

**Example:** `["customers/123/customAudiences/456"]`

**userLists**string\[\]

Resource names of user lists (remarketing lists, customer match lists, etc.)

**Example:** `["customers/123/userLists/789"]`

**userInterests**string\[\]

Resource names of user interest segments (in-market or affinity audiences)

**Example:** `["customers/123/userInterests/321"]`

    {  "locationId": "loc_abc123",  "resourceName": "customers/123/audiences/456",  "name": "My Audience",  "dimensions": {    "isAgeUnknown": false,    "ageRanges": [      {        "minAge": 25,        "maxAge": 34      }    ],    "genders": [      "MALE",      "FEMALE"    ]  },  "exclusionDimension": {    "genders": [      "UNDETERMINED"    ]  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-audience#responses "Direct link to Responses")

*   200
*   400
*   401
*   422
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/ad-manager-api#authentication)
**type:** http**scopes:** `adPublishing.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/google/audiences' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "locationId": "loc_abc123",  "resourceName": "customers/123/audiences/456",  "name": "My Audience",  "dimensions": {    "isAgeUnknown": false,    "ageRanges": [      {        "minAge": 25,        "maxAge": 34      }    ],    "genders": [      "MALE",      "FEMALE"    ],    "parentalStatuses": [      "PARENT"    ],    "audienceSegments": {      "customAudiences": [        "customers/123/customAudiences/456"      ],      "userLists": [        "customers/123/userLists/789"      ],      "userInterests": [        "customers/123/userInterests/321"      ]    }  },  "exclusionDimension": {    "isAgeUnknown": false,    "ageRanges": [      {        "minAge": 25,        "maxAge": 34      }    ],    "genders": [      "MALE",      "FEMALE"    ],    "parentalStatuses": [      "PARENT"    ],    "audienceSegments": {      "customAudiences": [        "customers/123/customAudiences/456"      ],      "userLists": [        "customers/123/userLists/789"      ],      "userInterests": [        "customers/123/userInterests/321"      ]    }  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

Version — headerrequired\---2021-07-28

Body required

{
  "locationId": "loc_abc123",  "resourceName": "customers/123/audiences/456",  "name": "My Audience",  "dimensions": {    "isAgeUnknown": false,    "ageRanges": \[      {        "minAge": 25,        "maxAge": 34      }    \],    "genders": \[      "MALE",      "FEMALE"    \],    "parentalStatuses": \[      "PARENT"    \],    "audienceSegments": {      "customAudiences": \[        "customers/123/customAudiences/456"      \],      "userLists": \[        "customers/123/userLists/789"      \],      "userInterests": \[        "customers/123/userInterests/321"      \]    }  },  "exclusionDimension": {    "isAgeUnknown": false,    "ageRanges": \[      {        "minAge": 25,        "maxAge": 34      }    \],    "genders": \[      "MALE",      "FEMALE"    \],    "parentalStatuses": \[      "PARENT"    \],    "audienceSegments": {      "customAudiences": \[        "customers/123/customAudiences/456"      \],      "userLists": \[        "customers/123/userLists/789"      \],      "userInterests": \[        "customers/123/userInterests/321"      \]    }  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
