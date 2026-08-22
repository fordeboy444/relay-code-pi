# Delete invoice

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice
- **Summary:** API to delete invoice by invoice id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice#__docusaurus_skipToContent_fallback)

Version: v3

Delete invoice
==============

DELETE 

https://services.leadconnectorhq.com/invoices/:invoiceId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to delete invoice by invoice id

### Requirements

#### Scope(s)

`invoices.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**invoiceId** stringrequired

Invoice Id

**Example:** `6578278e879ad2646715ba9c`

### Query Parameters

**altId** stringrequired

location Id / company Id based on altType

**Example:** `6578278e879ad2646715ba9c`

**altType** stringrequired

**Possible values:** \[`location`\]

Alt Type

**Example:** `location`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/delete-invoice#responses "Direct link to Responses")

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

Invoice Id

**Example:** `6578278e879ad2646715ba9c`

**status**stringrequired

Invoice Status

**Possible values:** \[`draft`, `sent`, `payment_processing`, `paid`, `void`, `partially_paid`\]

**Example:** `draft`

**liveMode**booleanrequired

Live Mode

**Example:** `false`

**amountPaid**numberrequired

Amount Paid

**Example:** `0`

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**name**stringrequired

Name of the invoice

**Example:** `New Invoice`

**businessDetails**objectrequired

Business Details

**Example:** `{"name":"Alex","address":{"addressLine1":"9931 Beechwood","city":"St. Houston","state":"TX","countryCode":"USA","postalCode":"559-6993"},"phoneNo":"+1-214-559-6993","website":"www.example.com"}`

**invoiceNumber**numberrequired

Invoice Number

**Example:** `19`

**currency**stringrequired

Currency

**Example:** `USD`

**contactDetails**objectrequired

Contact Details

**Example:** `{"id":"c6tZZU0rJBf30ZXx9Gli","phoneNo":"+1-214-559-6993","email":"alex@example.com","customFields":[],"name":"Alex","address":{"countryCode":"US"}}`

**issueDate**stringrequired

Issue date in YYYY-MM-DD format

**Example:** `2023-01-01`

**dueDate**stringrequired

Due date in YYYY-MM-DD format

**Example:** `2023-01-01`

**discount**object

Discount

**Example:** `{"type":"percentage","value":0}`

**invoiceItems**string\[\]required

Invoice Items

**Example:** `[{"taxes":[],"_id":"c6tZZU0rJBf30ZXx9Gli","productId":"c6tZZU0rJBf30ZXx9Gli","priceId":"c6tZZU0rJBf30ZXx9Gli","currency":"USD","name":"Macbook Pro","qty":1,"amount":999}]`

**total**numberrequired

Total Amount

**Example:** `999`

**title**stringrequired

Title

**Example:** `INVOICE`

**amountDue**numberrequired

Total Amount Due

**Example:** `999`

**createdAt**stringrequired

created at

**Example:** `2023-12-12T09:27:42.355Z`

**updatedAt**stringrequired

updated at

**Example:** `2023-12-12T09:27:42.355Z`

**automaticTaxesEnabled**boolean

Automatic taxes enabled for the Invoice

**Example:** `true`

**automaticTaxesCalculated**boolean

Is Automatic taxes calculated for the Invoice items

**Example:** `true`

**paymentSchedule**object

split invoice into payment schedule summing up to full invoice amount

    {  "_id": "6578278e879ad2646715ba9c",  "status": "draft",  "liveMode": false,  "amountPaid": 0,  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "name": "New Invoice",  "businessDetails": {    "name": "Alex",    "address": {      "addressLine1": "9931 Beechwood",      "city": "St. Houston",      "state": "TX",      "countryCode": "USA",      "postalCode": "559-6993"    },    "phoneNo": "+1-214-559-6993",    "website": "www.example.com"  },  "invoiceNumber": "19",  "currency": "USD",  "contactDetails": {    "id": "c6tZZU0rJBf30ZXx9Gli",    "phoneNo": "+1-214-559-6993",    "email": "alex@example.com",    "customFields": [],    "name": "Alex",    "address": {      "countryCode": "US"    }  },  "issueDate": "2023-01-01",  "dueDate": "2023-01-01",  "discount": {    "type": "percentage",    "value": 0  },  "invoiceItems": [    {      "taxes": [],      "_id": "c6tZZU0rJBf30ZXx9Gli",      "productId": "c6tZZU0rJBf30ZXx9Gli",      "priceId": "c6tZZU0rJBf30ZXx9Gli",      "currency": "USD",      "name": "Macbook Pro",      "qty": 1,      "amount": 999    }  ],  "total": 999,  "title": "INVOICE",  "amountDue": 999,  "createdAt": "2023-12-12T09:27:42.355Z",  "updatedAt": "2023-12-12T09:27:42.355Z",  "automaticTaxesEnabled": true,  "automaticTaxesCalculated": true,  "paymentSchedule": {}}

Bad Request

*   application/json

No schema

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Unprocessable Entity

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/invoices/invoice-api#authentication)
**type:** http**scopes:** `invoices.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/invoices/6578278e879ad2646715ba9c?altId=6578278e879ad2646715ba9c&altType=location' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

invoiceId — pathrequired

altId — queryrequired

altType — queryrequired\---location

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
