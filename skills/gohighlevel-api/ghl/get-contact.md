# Get Contact

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact
- **Summary:** Retrieves a contact by its unique identifier.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact#__docusaurus_skipToContent_fallback)

Version: v3New

Get Contact
===========

GET 

https://services.leadconnectorhq.com/contacts/:contactId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieves a contact by its unique identifier.

### Requirements

#### Scope(s)

`contacts.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**contactId** stringrequired

Unique identifier of the contact

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/get-contact#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**contact** object

Contact details

**id**string

Unique identifier of the contact

**Example:** `seD4PfOuKoVMLkEZqohJ`

**name**string

Full name of the contact

**Example:** `rubika deo`

**locationId**string

Location Id the contact belongs to

**Example:** `ve9EPM428h8vShlRW1KT`

**firstName**string

First name of the contact

**Example:** `rubika`

**lastName**string

Last name of the contact

**Example:** `Deo`

**email**string

Email address of the contact

**Example:** `rubika@deos.com`

**emailLowerCase**string

Lowercase version of the contact email

**Example:** `rubika@deos.com`

**timezone**string

Timezone of the contact

**Example:** `Asia/Calcutta`

**companyName**string

Company name of the contact

**Example:** `DGS VolMAX`

**phone**string

Phone number of the contact

**Example:** `+18832327657`

**dnd**boolean

Whether Do Not Disturb is enabled for the contact

**Example:** `true`

**type**string

Contact type classification

**Example:** `lead`

**source**string

Source from which the contact was created

**Example:** `public api`

**assignedTo**string

User Id the contact is assigned to

**Example:** `ve9EPM428h8vShlRW1KT`

**address1**string

Street address of the contact

**Example:** `3535 1st St N`

**city**string

City of the contact

**Example:** `Birmingham`

**state**string

State of the contact

**Example:** `AL`

**country**string

Country of the contact

**Example:** `US`

**postalCode**string

Postal code of the contact

**Example:** `35061`

**website**string

Website URL of the contact

**Example:** `https://www.tesla.com`

**tags**string\[\]

List of tags associated with the contact

**Example:** `["nisi sint commodo amet","consequat"]`

**dateOfBirth**string

Date of birth of the contact (YYYY-MM-DD)

**Example:** `1990-09-25`

**dateAdded**string

Date and time the contact was added (ISO 8601)

**Example:** `2021-07-02T05:18:26.704Z`

**dateUpdated**string

Date and time the contact was last updated (ISO 8601)

**Example:** `2021-07-02T05:18:26.704Z`

**attachments**string

List of attachment URLs associated with the contact

**Example:** `[]`

**ssn**string

Social Security Number (if applicable)

**Example:** `123-45-6789`

**keyword**string

Search keyword associated with the contact

**Example:** `test`

**firstNameLowerCase**string

Lowercase version of the contact first name

**Example:** `rubika`

**fullNameLowerCase**string

Lowercase version of the contact full name

**Example:** `rubika deo`

**lastNameLowerCase**string

Lowercase version of the contact last name

**Example:** `deo`

**lastActivity**string

Date and time of last activity on this contact (ISO 8601)

**Example:** `2021-07-16T11:39:30.564Z`

**customFields** object\[\]

List of custom field values for the contact

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
*   \]
    

**businessId**string

Business Id the contact is associated with

**Example:** `641c094001436dbc2081e642`

**attributionSource** object

First-touch attribution source details for the contact

**url**stringrequired

Attribution source type

**Example:** `Trigger Link`

**campaign**stringnullable

Campaign name

**Example:** `Summer Sale 2024`

**utmSource**stringnullable

UTM source parameter

**Example:** `google`

**utmMedium**stringnullable

UTM medium parameter

**Example:** `cpc`

**utmContent**stringnullable

UTM content parameter

**Example:** `ad_variation_1`

**referrer**stringnullable

Referrer URL

**Example:** `https://www.google.com`

**campaignId**stringnullable

Campaign Id

**Example:** `641c094001436dbc2081e642`

**fbclid**stringnullable

Facebook click Id

**Example:** `fb.1.1674748390986.1171287961`

**gclid**stringnullable

Google click Id

**Example:** `CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB`

**msclikid**stringnullable

Microsoft click Id

**Example:** `MS!AzEREREDJKSJD`

**dclid**stringnullable

DoubleClick click Id

**Example:** `EAIaIQobChMIw`

**fbc**stringnullable

Facebook browser Id

**Example:** `fb.1.1674748390986.1171287961`

**fbp**stringnullable

Facebook pixel Id

**Example:** `fb. 1.1674748390986.1171287961`

**fbEventId**stringnullable

Facebook event Id

**Example:** `Mozilla/5.0`

**userAgent**stringnullable

Browser user agent string

**Example:** `Mozilla/5.0`

**ip**stringnullable

IP address of the visitor

**Example:** `58.111.106.198`

**medium**stringnullable

Attribution medium (e.g. survey, funnel)

**Example:** `survey`

**mediumId**stringnullable

Id of the attribution medium

**Example:** `FglfHAn30PRwsZVyQlKp`

**lastAttributionSource** object

Last-touch attribution source details for the contact

**url**stringrequired

Attribution source type

**Example:** `Trigger Link`

**campaign**stringnullable

Campaign name

**Example:** `Summer Sale 2024`

**utmSource**stringnullable

UTM source parameter

**Example:** `google`

**utmMedium**stringnullable

UTM medium parameter

**Example:** `cpc`

**utmContent**stringnullable

UTM content parameter

**Example:** `ad_variation_1`

**referrer**stringnullable

Referrer URL

**Example:** `https://www.google.com`

**campaignId**stringnullable

Campaign Id

**Example:** `641c094001436dbc2081e642`

**fbclid**stringnullable

Facebook click Id

**Example:** `fb.1.1674748390986.1171287961`

**gclid**stringnullable

Google click Id

**Example:** `CjOKCQjwnNyUBhCZARISAI9AYIFtNnIcWcYGIOQINz_ZoFI5SSLRRugSoPZoiEu27IZBY£1-MAIWmEaAo2VEALW_WCB`

**msclikid**stringnullable

Microsoft click Id

**Example:** `MS!AzEREREDJKSJD`

**dclid**stringnullable

DoubleClick click Id

**Example:** `EAIaIQobChMIw`

**fbc**stringnullable

Facebook browser Id

**Example:** `fb.1.1674748390986.1171287961`

**fbp**stringnullable

Facebook pixel Id

**Example:** `fb. 1.1674748390986.1171287961`

**fbEventId**stringnullable

Facebook event Id

**Example:** `Mozilla/5.0`

**userAgent**stringnullable

Browser user agent string

**Example:** `Mozilla/5.0`

**ip**stringnullable

IP address of the visitor

**Example:** `58.111.106.198`

**medium**stringnullable

Attribution medium (e.g. survey, funnel)

**Example:** `survey`

**mediumId**stringnullable

Id of the attribution medium

**Example:** `FglfHAn30PRwsZVyQlKp`

**visitorId**string

visitorId is the Unique ID assigned to each Live chat visitor.

**Example:** `ve9EPM428h8vShlRW1KT`

**dndSettings** object

Per-channel DND settings for the contact

**call** object

DND settings for phone calls

**status**stringrequired

Do Not Disturb status for this channel

**Possible values:** \[`active`, `inactive`, `permanent`\]

**Example:** `active`

**message**string

Custom message associated with the DND setting

**Example:** `Do not contact via this channel`

**code**string

DND code or reason

**Example:** `OPTED_OUT`

**email** object

DND settings for email

**status**stringrequired

Do Not Disturb status for this channel

**Possible values:** \[`active`, `inactive`, `permanent`\]

**Example:** `active`

**message**string

Custom message associated with the DND setting

**Example:** `Do not contact via this channel`

**code**string

DND code or reason

**Example:** `OPTED_OUT`

**sms** object

DND settings for SMS

**status**stringrequired

Do Not Disturb status for this channel

**Possible values:** \[`active`, `inactive`, `permanent`\]

**Example:** `active`

**message**string

Custom message associated with the DND setting

**Example:** `Do not contact via this channel`

**code**string

DND code or reason

**Example:** `OPTED_OUT`

**whatsApp** object

DND settings for WhatsApp

**status**stringrequired

Do Not Disturb status for this channel

**Possible values:** \[`active`, `inactive`, `permanent`\]

**Example:** `active`

**message**string

Custom message associated with the DND setting

**Example:** `Do not contact via this channel`

**code**string

DND code or reason

**Example:** `OPTED_OUT`

**gmb** object

DND settings for Google My Business

**status**stringrequired

Do Not Disturb status for this channel

**Possible values:** \[`active`, `inactive`, `permanent`\]

**Example:** `active`

**message**string

Custom message associated with the DND setting

**Example:** `Do not contact via this channel`

**code**string

DND code or reason

**Example:** `OPTED_OUT`

**fb** object

DND settings for Facebook

**status**stringrequired

Do Not Disturb status for this channel

**Possible values:** \[`active`, `inactive`, `permanent`\]

**Example:** `active`

**message**string

Custom message associated with the DND setting

**Example:** `Do not contact via this channel`

**code**string

DND code or reason

**Example:** `OPTED_OUT`

    {  "contact": {    "id": "seD4PfOuKoVMLkEZqohJ",    "name": "rubika deo",    "firstName": "rubika",    "lastName": "Deo",    "email": "rubika@deos.com",    "phone": "+18832327657",    "locationId": "ve9EPM428h8vShlRW1KT"  }}
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

    curl -L 'https://services.leadconnectorhq.com/contacts/ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

contactId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
