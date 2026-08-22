# Upsert segment

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-segment
- **Summary:** Create or update a Google Ads audience segment

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-segment#__docusaurus_skipToContent_fallback)

Version: v3

Upsert segment
==============

PUT 

https://services.leadconnectorhq.com/ad-publishing/google/segments

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Create or update a Google Ads audience segment

### Requirements

#### Scope(s)

`adPublishing.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-segment#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`2021-07-28`\]

API Version

**Example:** `2021-07-28`

### Query Parameters

**locationId** stringrequired

Location identifier

**Example:** `HChooFuiyPpVYzeJ4HMe`

**type** stringrequired

**Possible values:** \[`CUSTOM_SEGMENTS`, `WEBSITE_VISITOR`, `CUSTOMER_MATCH`, `LOOKALIKE`\]

Segment type

**Example:** `CUSTOM_SEGMENTS`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**stringrequired

Segment name

**Example:** `My Segment`

**description**string

Segment description

**Example:** `Target audience segment`

**members** object\[\]

Segment members — keywords, URLs, or apps that define the custom segment

*   Array \[\
    \
\
**memberType**stringrequired\
\
Member type\
\
**Possible values:** \[`KEYWORD`, `URL`, `APP`\]\
\
**Example:** `KEYWORD`\
\
**keyword**string\
\
Keyword value\
\
**Example:** `marketing`\
\
**url**string\
\
URL value\
\
**Example:** `https://example.com`\
\
**app**string\
\
App identifier\
\
**Example:** `com.example.app`\
\
*   \]
    

**status**string

Segment status

**Example:** `ENABLED`

**type**string

Segment type

**Example:** `CUSTOM_SEGMENTS`

**id**string

Segment identifier

**Example:** `seg_123`

**membershipStatus**string

Membership status

**Example:** `OPEN`

**ruleBasedUserList** object

Rule-based user list config

**prepopulationStatus**string

Prepopulation status

**Possible values:** \[`REQUESTED`\]

**Example:** `REQUESTED`

**flexibleRuleUserList** objectrequired

Flexible rule user list configuration

**inclusiveRuleOperator**string

Operator for combining inclusive operands

**Example:** `AND`

**inclusiveOperands** object\[\]required

Inclusive rule operands

*   Array \[\
    \
\
**lookbackWindowDays**numberrequired\
\
Lookback window in days\
\
**Example:** `30`\
\
**rule** objectrequired\
\
Rule definition\
\
**ruleItemGroups** object\[\]required\
\
List of rule item groups\
\
*   Array \[\
    \
\
**ruleItems** object\[\]required\
\
List of rule items\
\
*   Array \[\
    \
\
**name**stringrequired\
\
Rule item name\
\
**Possible values:** \[`url__`, `referrer__`\]\
\
**Example:** `url__`\
\
**stringRuleItem** objectrequired\
\
String rule item condition\
\
**operator**stringrequired\
\
Rule operator\
\
**Example:** `CONTAINS`\
\
**value**stringrequired\
\
Rule value\
\
**Example:** `/products`\
\
*   \]\
    \
\
*   \]\
    \
\
*   \]
    

**exclusiveOperands** object\[\]required

Exclusive rule operands

*   Array \[\
    \
\
**lookbackWindowDays**numberrequired\
\
Lookback window in days\
\
**Example:** `30`\
\
**rule** objectrequired\
\
Rule definition\
\
**ruleItemGroups** object\[\]required\
\
List of rule item groups\
\
*   Array \[\
    \
\
**ruleItems** object\[\]required\
\
List of rule items\
\
*   Array \[\
    \
\
**name**stringrequired\
\
Rule item name\
\
**Possible values:** \[`url__`, `referrer__`\]\
\
**Example:** `url__`\
\
**stringRuleItem** objectrequired\
\
String rule item condition\
\
**operator**stringrequired\
\
Rule operator\
\
**Example:** `CONTAINS`\
\
**value**stringrequired\
\
Rule value\
\
**Example:** `/products`\
\
*   \]\
    \
\
*   \]\
    \
\
*   \]
    

**membershipLifeSpan**number

Membership life span

**Example:** `30`

**seedUserListIds**string\[\]

Seed user list IDs

**Example:** `["list_1"]`

**countryCodes**string\[\]

Country codes

**Example:** `["US","CA"]`

**expansionLevel**string

Expansion level

**Possible values:** \[`BALANCED`, `BROAD`, `NARROW`\]

**Example:** `BALANCED`

    {  "name": "My Segment",  "description": "Target audience segment",  "members": [    {      "memberType": "KEYWORD",      "keyword": "digital marketing"    },    {      "memberType": "URL",      "url": "https://example.com"    },    {      "memberType": "APP",      "app": "com.example.app"    }  ],  "status": "ENABLED",  "type": "CUSTOM_SEGMENTS",  "id": "seg_123",  "membershipStatus": "OPEN",  "ruleBasedUserList": {    "prepopulationStatus": "REQUESTED",    "flexibleRuleUserList": {      "inclusiveOperands": [],      "exclusiveOperands": []    }  },  "membershipLifeSpan": 30,  "seedUserListIds": [    "list_1"  ],  "countryCodes": [    "US",    "CA"  ],  "expansionLevel": "BALANCED"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/google-upsert-segment#responses "Direct link to Responses")

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

    curl -L -X PUT 'https://services.leadconnectorhq.com/ad-publishing/google/segments?locationId=HChooFuiyPpVYzeJ4HMe&type=CUSTOM_SEGMENTS' \-H 'Content-Type: application/json' \-H 'Version: 2021-07-28' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "My Segment",  "description": "Target audience segment",  "members": [    {      "memberType": "KEYWORD",      "keyword": "digital marketing"    },    {      "memberType": "URL",      "url": "https://example.com"    },    {      "memberType": "APP",      "app": "com.example.app"    }  ],  "status": "ENABLED",  "type": "CUSTOM_SEGMENTS",  "id": "seg_123",  "membershipStatus": "OPEN",  "ruleBasedUserList": {    "prepopulationStatus": "REQUESTED",    "flexibleRuleUserList": {      "inclusiveRuleOperator": "AND",      "inclusiveOperands": [        {          "lookbackWindowDays": 30,          "rule": {            "ruleItemGroups": []          }        }      ],      "exclusiveOperands": []    }  },  "membershipLifeSpan": 30,  "seedUserListIds": [    "list_1"  ],  "countryCodes": [    "US",    "CA"  ],  "expansionLevel": "BALANCED"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

type — queryrequired\---CUSTOM_SEGMENTSWEBSITE_VISITORCUSTOMER_MATCHLOOKALIKE

Version — headerrequired\---2021-07-28

Body required

{
  "name": "My Segment",  "description": "Target audience segment",  "members": \[    {      "memberType": "KEYWORD",      "keyword": "digital marketing"    },    {      "memberType": "URL",      "url": "https://example.com"    },    {      "memberType": "APP",      "app": "com.example.app"    }  \],  "status": "ENABLED",  "type": "CUSTOM_SEGMENTS",  "id": "seg_123",  "membershipStatus": "OPEN",  "ruleBasedUserList": {    "prepopulationStatus": "REQUESTED",    "flexibleRuleUserList": {      "inclusiveRuleOperator": "AND",      "inclusiveOperands": \[        {          "lookbackWindowDays": 30,          "rule": {            "ruleItemGroups": \[\]          }        }      \],      "exclusiveOperands": \[\]    }  },  "membershipLifeSpan": 30,  "seedUserListIds": \[    "list_1"  \],  "countryCodes": \[    "US",    "CA"  \],  "expansionLevel": "BALANCED"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
