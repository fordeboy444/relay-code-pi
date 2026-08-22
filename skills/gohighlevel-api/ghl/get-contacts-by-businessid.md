# Get Contacts By BusinessId

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id
- **Summary:** Get Contacts By BusinessId

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id#__docusaurus_skipToContent_fallback)

Version: v3

Get Contacts By BusinessId
==========================

GET 

https://services.leadconnectorhq.com/contacts/business/:businessId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Contacts By BusinessId

### Requirements

#### Scope(s)

`contacts.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**businessId** stringrequired

Business Id

**Example:** `641c094001436dbc2081e642`

### Query Parameters

**limit** string

Maximum number of records per page (up to 100, default 25)

**Example:** `10`

**locationId** stringrequired

Location Id

**Example:** `5DP4iH6HLkQsiKESj6rh`

**skip** string

Number of records to skip

**Example:** `10`

**query** string

Search query (name, email, phone)

**Example:** `John`

**startAfter** string\[\]

Cursor for pagination (comma-separated name,id pair)

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contacts-by-business-id#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**contacts** object\[\]

List of contacts associated with the business

*   Array \[\
    \
\
**id**string\
\
Unique identifier of the contact\
\
**Example:** `ocQHyuzHvysMo5N5VsXc`\
\
**locationId**string\
\
Location Id the contact belongs to\
\
**Example:** `C2QujeCh8ZnC7al2InWR`\
\
**email**string\
\
Email address of the contact\
\
**Example:** `JohnDeo@gmail.com`\
\
**timezone**string\
\
Timezone of the contact\
\
**Example:** `Asia/Calcutta`\
\
**country**string\
\
Country of the contact\
\
**Example:** `DE`\
\
**source**string\
\
Source from which the contact was created\
\
**Example:** `xyz form`\
\
**dateAdded**string\
\
Date and time the contact was added (ISO 8601)\
\
**Example:** `2020-10-29T09:31:30.255Z`\
\
**customFields** object\[\]\
\
List of custom field values for the contact\
\
*   Array \[\
    \
\
**id**string\
\
Unique identifier of the custom field\
\
**Example:** `MgobCB14YMVKuE4Ka8p1`\
\
**value**string\
\
Value of the custom field\
\
**Example:** `name`\
\
*   \]\
    \
\
**tags**string\[\]\
\
List of tags associated with the contact\
\
**Example:** `["nisi sint commodo amet","consequat"]`\
\
**businessId**string\
\
Business Id the contact is associated with\
\
**Example:** `641c094001436dbc2081e642`\
\
**attributions** object\[\]\
\
List of attribution sources for the contact\
\
*   Array \[\
    \
\
**url**stringrequired\
\
Attribution source type\
\
**Example:** `Trigger Link`\
\
**campaign**stringnullable\
\
Campaign name\
\
**Example:** `Summer Sale 2024`\
\
**utmSource**stringnullable\
\
UTM source parameter\
\
**Example:** `google`\
\
**utmMedium**stringnullable\
\
UTM medium parameter\
\
**Example:** `cpc`\
\
**utmContent**stringnullable\
\
UTM content parameter\
\
**Example:** `ad_variation_1`\
\
**referrer**stringnullable\
\
Referrer URL\
\
**Example:** `https://www.google.com`\
\
**campaignId**stringnullable\
\
Campaign Id\
\
**Example:** `641c094001436dbc2081e642`\
\
**fbclid**stringnullable\
\
Facebook click Id\
\
**Example:** `fb.1.1674748390986.1171287961`\
\
**gclid**stringnullable\
\
Google click Id\
\
**Example:** `CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB`\
\
**msclikid**stringnullable\
\
Microsoft click Id\
\
**Example:** `MS!AzEREREDJKSJD`\
\
**dclid**stringnullable\
\
DoubleClick click Id\
\
**Example:** `EAIaIQobChMIw`\
\
**fbc**stringnullable\
\
Facebook browser Id\
\
**Example:** `fb.1.1674748390986.1171287961`\
\
**fbp**stringnullable\
\
Facebook pixel Id\
\
**Example:** `fb. 1.1674748390986.1171287961`\
\
**fbEventId**stringnullable\
\
Facebook event Id\
\
**Example:** `Mozilla/5.0`\
\
**userAgent**stringnullable\
\
Browser user agent string\
\
**Example:** `Mozilla/5.0`\
\
**ip**stringnullable\
\
IP address of the visitor\
\
**Example:** `58.111.106.198`\
\
**medium**stringnullable\
\
Attribution medium (e.g. survey, funnel)\
\
**Example:** `survey`\
\
**mediumId**stringnullable\
\
Id of the attribution medium\
\
**Example:** `FglfHAn30PRwsZVyQlKp`\
\
*   \]\
    \
\
**followers**string\[\]\
\
List of user Ids following this contact\
\
**Example:** `["641c094001436dbc2081e642"]`\
\
*   \]
    

**count**number

Total number of contacts matching the query

**Example:** `10`

    {  "contacts": [    {      "id": "ocQHyuzHvysMo5N5VsXc",      "locationId": "C2QujeCh8ZnC7al2InWR",      "email": "JohnDeo@gmail.com",      "country": "DE",      "source": "xyz form",      "dateAdded": "2020-10-29T09:31:30.255Z"    }  ],  "count": 10}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/contacts/contacts-api-v-3#authentication)
**type:** http**scopes:** `contacts.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/contacts/business/641c094001436dbc2081e642?limit=10&locationId=5DP4iH6HLkQsiKESj6rh&skip=10&query=John' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

businessId — pathrequired

locationId — queryrequired

Version — headerrequired\---v3

Show optional parameters

limit — query

skip — query

query — query

startAfter — queryAdd item

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
