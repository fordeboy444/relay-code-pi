# Get an template

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-template
- **Summary:** API to get an template by template id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-template#__docusaurus_skipToContent_fallback)

Version: v3

Get an template
===============

GET 

https://services.leadconnectorhq.com/invoices/template/:templateId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to get an template by template id

### Requirements

#### Scope(s)

`invoices/template.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-template#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**templateId** stringrequired

Template Id

**Example:** `6578278e879ad2646715ba9c`

### Query Parameters

**altId** stringrequired

location Id / company Id based on altType

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

Alt Type

**Example:** `location`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/get-invoice-template#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**_id**stringrequired

Template Id

**Example:** `6578278e879ad2646715ba9c`

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**name**stringrequired

Name of the Template

**Example:** `New Template`

**businessDetails** objectrequired

Business Details

**logoUrl**string

Business Logo URL

**Example:** `https://example.com/logo.png`

**name**string

Business Name

**Example:** `ABC Corp.`

**phoneNo**string

Business Phone Number

**Example:** `+1-214-559-6993`

**address** object

Business Address

**addressLine1**string

Address Line 1

**Example:** `9931 Beechwood`

**addressLine2**string

Address Line 2

**Example:** `Beechwood`

**city**string

City

**Example:** `St. Houston`

**state**string

State

**Example:** `TX`

**countryCode**string

Country Code

**Example:** `US`

**postalCode**string

Postal Code

**Example:** `559-6993`

**website**string

Business Website Link

**Example:** `wwww.example.com`

**customValues**string\[\]

Custom Values

**currency**stringrequired

Currency

**Example:** `USD`

**discount** object

Discount

**value**number

Discount Value

**Default value:** `0`

**Example:** `10`

**type**stringrequired

Discount type

**Possible values:** \[`percentage`, `fixed`\]

**Default value:** `percentage`

**Example:** `percentage`

**validOnProductIds**string\[\]

Product Ids on which discount is applicable

**Example:** `[ '6579751d56f60276e5bd4154' ]`

**items**string\[\]required

Invoice Items

**Example:** `[{"taxes":[],"_id":"c6tZZU0rJBf30ZXx9Gli","productId":"c6tZZU0rJBf30ZXx9Gli","priceId":"c6tZZU0rJBf30ZXx9Gli","currency":"USD","name":"Macbook Pro","qty":1,"amount":999}]`

**invoiceNumberPrefix**string

prefix for invoice number

**Example:** `INV-`

**total**numberrequired

Total Amount

**Example:** `999`

**createdAt**stringrequired

created at

**Example:** `2023-12-12T09:27:42.355Z`

**updatedAt**stringrequired

updated at

**Example:** `2023-12-12T09:27:42.355Z`

    {  "_id": "6578278e879ad2646715ba9c",  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "name": "New Template",  "businessDetails": {    "name": "Alex",    "address": {      "addressLine1": "9931 Beechwood",      "city": "St. Houston",      "state": "TX",      "countryCode": "USA",      "postalCode": "559-6993"    },    "phoneNo": "+1-214-559-6993",    "website": "www.example.com"  },  "currency": "USD",  "discount": {    "type": "percentage",    "value": 0  },  "items": [    {      "taxes": [],      "_id": "c6tZZU0rJBf30ZXx9Gli",      "productId": "c6tZZU0rJBf30ZXx9Gli",      "priceId": "c6tZZU0rJBf30ZXx9Gli",      "currency": "USD",      "name": "Macbook Pro",      "qty": 1,      "amount": 999    }  ],  "invoiceNumberPrefix": "INV-",  "total": 999,  "createdAt": "2023-12-12T09:27:42.355Z",  "updatedAt": "2023-12-12T09:27:42.355Z"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice-api#authentication)
**type:** http**scopes:** `invoices/template.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/invoices/template/6578278e879ad2646715ba9c?altId=6578278e879ad2646715ba9c&altType=location' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

templateId — pathrequired

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
