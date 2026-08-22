# Send invoice

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/invoices/send-invoice
- **Summary:** API to send invoice by invoice id

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/invoices/send-invoice#__docusaurus_skipToContent_fallback)

Version: v3

Send invoice
============

POST 

https://services.leadconnectorhq.com/invoices/:invoiceId/send

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

API to send invoice by invoice id

### Requirements

#### Scope(s)

`invoices.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token``Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/send-invoice#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**invoiceId** stringrequired

Invoice Id

**Example:** `6578278e879ad2646715ba9c`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

location Id / company Id based on altType

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

Alt Type

**Possible values:** \[`location`\]

**Example:** `location`

**userId**stringrequired

Please ensure that the UserId corresponds to an authorized personnel, either by an employee ID or agency ID, to access this location. This account will serve as the primary channel for all future communications and updates.

**Example:** `6578278e879ad2646715ba9c`

**action**stringrequired

**Possible values:** \[`sms_and_email`, `send_manually`, `email`, `sms`\]

**liveMode**booleanrequired

**sentFrom** object

sender details for invoice, valid only if invoice is not sent manually

**fromName**string

Sender name to be used while sending email notification

**Example:** `Alex`

**fromEmail**string

Email id to be used while sending email notification

**Example:** `alex@example.com`

**autoPayment** object

auto-payment configuration

**enable**booleanrequired

**type**string

**paymentMethodId**string

**customerId**string

**card** object

**brand**stringrequired

**last4**stringrequired

**usBankAccount** object

**bank_name**stringrequired

**last4**stringrequired

**sepaDirectDebit** object

**bank_code**stringrequired

**last4**stringrequired

**branch_code**stringrequired

**bacsDirectDebit** object

**sort_code**stringrequired

**last4**stringrequired

**becsDirectDebit** object

**bsb_number**stringrequired

**last4**stringrequired

**cardId**string

**provider**object

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "userId": "6578278e879ad2646715ba9c",  "action": "sms_and_email",  "liveMode": true,  "sentFrom": {    "fromName": "Alex",    "fromEmail": "alex@example.com"  },  "autoPayment": {    "enable": true,    "type": "string",    "paymentMethodId": "string",    "customerId": "string",    "card": {      "brand": "string",      "last4": "string"    },    "usBankAccount": {      "bank_name": "string",      "last4": "string"    },    "sepaDirectDebit": {      "bank_code": "string",      "last4": "string",      "branch_code": "string"    },    "bacsDirectDebit": {      "sort_code": "string",      "last4": "string"    },    "becsDirectDebit": {      "bsb_number": "string",      "last4": "string"    },    "cardId": "string",    "provider": {}  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/invoices/send-invoice#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**invoice** objectrequired

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

**smsData**objectrequired

**emailData**objectrequired

    {  "invoice": {    "_id": "6578278e879ad2646715ba9c",    "status": "draft",    "liveMode": false,    "amountPaid": 0,    "altId": "6578278e879ad2646715ba9c",    "altType": "location",    "name": "New Invoice",    "businessDetails": {      "name": "Alex",      "address": {        "addressLine1": "9931 Beechwood",        "city": "St. Houston",        "state": "TX",        "countryCode": "USA",        "postalCode": "559-6993"      },      "phoneNo": "+1-214-559-6993",      "website": "www.example.com"    },    "invoiceNumber": "19",    "currency": "USD",    "contactDetails": {      "id": "c6tZZU0rJBf30ZXx9Gli",      "phoneNo": "+1-214-559-6993",      "email": "alex@example.com",      "customFields": [],      "name": "Alex",      "address": {        "countryCode": "US"      }    },    "issueDate": "2023-01-01",    "dueDate": "2023-01-01",    "discount": {      "type": "percentage",      "value": 0    },    "invoiceItems": [      {        "taxes": [],        "_id": "c6tZZU0rJBf30ZXx9Gli",        "productId": "c6tZZU0rJBf30ZXx9Gli",        "priceId": "c6tZZU0rJBf30ZXx9Gli",        "currency": "USD",        "name": "Macbook Pro",        "qty": 1,        "amount": 999      }    ],    "total": 999,    "title": "INVOICE",    "amountDue": 999,    "createdAt": "2023-12-12T09:27:42.355Z",    "updatedAt": "2023-12-12T09:27:42.355Z",    "automaticTaxesEnabled": true,    "automaticTaxesCalculated": true,    "paymentSchedule": {}  },  "smsData": {},  "emailData": {}}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
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

    curl -L 'https://services.leadconnectorhq.com/invoices/6578278e879ad2646715ba9c/send' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "userId": "6578278e879ad2646715ba9c",  "action": "sms_and_email",  "liveMode": true,  "sentFrom": {    "fromName": "Alex",    "fromEmail": "alex@example.com"  },  "autoPayment": {    "enable": true,    "type": "string",    "paymentMethodId": "string",    "customerId": "string",    "card": {      "brand": "string",      "last4": "string"    },    "usBankAccount": {      "bank_name": "string",      "last4": "string"    },    "sepaDirectDebit": {      "bank_code": "string",      "last4": "string",      "branch_code": "string"    },    "bacsDirectDebit": {      "sort_code": "string",      "last4": "string"    },    "becsDirectDebit": {      "bsb_number": "string",      "last4": "string"    },    "cardId": "string",    "provider": {}  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessAgency-Access

Bearer Token

Parameters

invoiceId — pathrequired

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "userId": "6578278e879ad2646715ba9c",  "action": "sms_and_email",  "liveMode": true,  "sentFrom": {    "fromName": "Alex",    "fromEmail": "alex@example.com"  },  "autoPayment": {    "enable": true,    "type": "string",    "paymentMethodId": "string",    "customerId": "string",    "card": {      "brand": "string",      "last4": "string"    },    "usBankAccount": {      "bank_name": "string",      "last4": "string"    },    "sepaDirectDebit": {      "bank_code": "string",      "last4": "string",      "branch_code": "string"    },    "bacsDirectDebit": {      "sort_code": "string",      "last4": "string"    },    "becsDirectDebit": {      "bsb_number": "string",      "last4": "string"    },    "cardId": "string",    "provider": {}  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
