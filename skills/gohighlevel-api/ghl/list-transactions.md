# List Transactions

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/list-transactions
- **Summary:** The 'List Transactions' API allows to retrieve a paginated list of transactions. Customize your results by filtering transactions based on name, alt type, transaction status, payment mode, date range, type of source, contact, subscription id, entity id or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve transaction information.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/list-transactions#__docusaurus_skipToContent_fallback)

Version: v3

List Transactions
=================

GET 

https://services.leadconnectorhq.com/payments/transactions

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "List Transactions" API allows to retrieve a paginated list of transactions. Customize your results by filtering transactions based on name, alt type, transaction status, payment mode, date range, type of source, contact, subscription id, entity id or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve transaction information.

### Requirements

#### Scope(s)

`payments/transactions.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-transactions#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Query Parameters

**locationId** string

LocationId is the id of the sub-account.

**Example:** `3SwdhCu3svxI8AKsPJt6`

**altId** stringrequired

AltId is the unique identifier e.g: location id.

**Example:** `3SwdhCu3svxI8AKsPJt6`

**altType** stringrequired

AltType is the type of identifier.

**Example:** `location`

**paymentMode** string

Mode of payment.

**Example:** `live`

**startAt** string

Starting interval of transactions.

**Example:** `2024-02-01`

**endAt** string

Closing interval of transactions.

**Example:** `2024-02-13`

**entitySourceType** string

Source of the transactions.

**Example:** `funnel`

**entitySourceSubType** string

Source sub-type of the transactions.

**Example:** `two_step_order_form`

**search** string

The name of the transaction for searching.

**Example:** `Awesome transaction`

**subscriptionId** string

Subscription id for filtering of transactions.

**Example:** `sub_1KGcXDCScnf89tZoVkoEMCEL`

**entityId** string

Entity id for filtering of transactions.

**Example:** `61dd0fe9c077f73e67f78803`

**contactId** string

Contact id for filtering of transactions.

**Example:** `XPLSw2SVagl12LMDeTmQ`

**limit** number

The maximum number of items to be included in a single page of results

Default value:`10`

**Example:** `20`

**offset** number

The starting index of the page, indicating the position from which the results should be retrieved.

Default value:`0`

**Example:** `0`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-transactions#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**data** object\[\]required

An array of transactions

*   Array \[\
    \
\
**_id**stringrequired\
\
The unique identifier for the transaction.\
\
**Example:** `61dd0feac077f72010f78804`\
\
**altId**stringrequired\
\
AltId is the unique identifier eg: location id.\
\
**Example:** `3SwdhCu3svxI8AKsPJt6`\
\
**altType**stringrequired\
\
AltType is the type of identifier.\
\
**Example:** `location`\
\
**contactId**string\
\
Contact id corresponding to the transaction.\
\
**Example:** `XPLSw2SVagl12LMDeTmQ`\
\
**mergedFromContactId**string\
\
ID of the contact that was merged from.\
\
**Example:** `XPLSw2SVagl12LMDeTmQ`\
\
**contactName**string\
\
Contact name corresponding to the transaction.\
\
**Example:** `James Bond`\
\
**contactEmail**string\
\
Contact email corresponding to the transaction.\
\
**Example:** `james.bond@gohighlevel.com`\
\
**currency**string\
\
Currency in which transaction occurred.\
\
**Example:** `USD`\
\
**amount**number\
\
Transaction value.\
\
**Example:** `100`\
\
**status**objectrequired\
\
The status of the transaction (e.g., succeeded).\
\
**Example:** `succeeded`\
\
**liveMode**boolean\
\
Transaction is in live / test mode.\
\
**Example:** `false`\
\
**entityType**string\
\
Entity type of transaction (eg: order).\
\
**Example:** `order`\
\
**entityId**string\
\
Entity id for the transaction. e.g: order id\
\
**Example:** `61dd0fe9c077f73e67f78803`\
\
**entitySourceType**stringrequired\
\
Entity source type of transaction (eg: funnel).\
\
**Example:** `funnel`\
\
**entitySourceSubType**string\
\
Entity source sub-type of the transactions.\
\
**Example:** `two_step_order_form`\
\
**entitySourceName**string\
\
Entity source name for the transaction.\
\
**Example:** `new funnel`\
\
**entitySourceId**string\
\
Entity source id for the transaction.\
\
**Example:** `BDBMEghdIUaqMPEsK349`\
\
**entitySourceMeta**object\
\
Meta content for the entity source of transaction.\
\
**Example:** `{ domain: "app.gohighlevel.com", pageId: "rBVhyYhMsbxbO8ZqOcei", pageUrl: "/v2/preview/rBVhyYhMsbxbO8ZqOcei", stepId: "5a772f62-3fbc-418b-af1b-be8929dd64c2"}`\
\
**subscriptionId**string\
\
Subscription id for transaction.\
\
**Example:** `sub_1KGcXDCScnf89tZoVkoEMCEL`\
\
**chargeId**string\
\
Charge id for transaction.\
\
**Example:** `in_1KGcXDCScnf89tZohCsmImwE`\
\
**chargeSnapshot**object\
\
Charge snapshot of transaction.\
\
**Example:** `{ id: "in_1KGcXDCScnf89tZohCsmImwE", object: "invoice", account_country: "US", account_name: "GHL-Testing" }`\
\
**paymentProviderType**string\
\
Payment provider for transaction.\
\
**Example:** `stripe`\
\
**paymentProviderConnectedAccount**string\
\
Payment provider account id for transaction.\
\
**Example:** `612ca676b484b241fef9d962`\
\
**ipAddress**string\
\
Ip address from where transaction was initiated.\
\
**Example:** `107.178.194.224`\
\
**createdAt**string<date-time>required\
\
The creation timestamp of the transaction.\
\
**Example:** `2023-11-20T10:23:36.515Z`\
\
**updatedAt**string<date-time>required\
\
The update timestamp of the transaction.\
\
**Example:** `2023-11-20T10:23:36.515Z`\
\
**amountRefunded**number\
\
Transaction amount refunded.\
\
**Example:** `10`\
\
**paymentMethod**object\
\
Transaction payment method details.\
\
**Example:** `{ card: { "brand": "discover", "last4": "0012" } }`\
\
**fulfilledAt**string<date-time>required\
\
The charged timestamp of the transaction.\
\
**Example:** `2023-11-20T10:27:36.515Z`\
\
**createdBy**string\
\
User ID who created the transaction.\
\
**Example:** `user123`\
\
*   \]
    

**totalCount**numberrequired

total transactions count

    {  "data": [    {      "_id": "61dd0feac077f72010f78804",      "altId": "3SwdhCu3svxI8AKsPJt6",      "altType": "location",      "contactId": "XPLSw2SVagl12LMDeTmQ",      "mergedFromContactId": "XPLSw2SVagl12LMDeTmQ",      "contactName": "James Bond",      "contactEmail": "james.bond@gohighlevel.com",      "currency": "USD",      "amount": "100",      "status": "succeeded",      "liveMode": "false",      "entityType": "order",      "entityId": "61dd0fe9c077f73e67f78803",      "entitySourceType": "funnel",      "entitySourceSubType": "two_step_order_form",      "entitySourceName": "new funnel",      "entitySourceId": "BDBMEghdIUaqMPEsK349",      "entitySourceMeta": "{ domain: \"app.gohighlevel.com\", pageId:  \"rBVhyYhMsbxbO8ZqOcei\", pageUrl:  \"/v2/preview/rBVhyYhMsbxbO8ZqOcei\", stepId:   \"5a772f62-3fbc-418b-af1b-be8929dd64c2\"}",      "subscriptionId": "sub_1KGcXDCScnf89tZoVkoEMCEL",      "chargeId": "in_1KGcXDCScnf89tZohCsmImwE",      "chargeSnapshot": "{ id: \"in_1KGcXDCScnf89tZohCsmImwE\", object: \"invoice\", account_country: \"US\",  account_name:  \"GHL-Testing\" }",      "paymentProviderType": "stripe",      "paymentProviderConnectedAccount": "612ca676b484b241fef9d962",      "ipAddress": "107.178.194.224",      "createdAt": "2023-11-20T10:23:36.515Z",      "updatedAt": "2023-11-20T10:23:36.515Z",      "amountRefunded": "10",      "paymentMethod": "{ card: { \"brand\": \"discover\", \"last4\": \"0012\" } }",      "fulfilledAt": "2023-11-20T10:27:36.515Z",      "createdBy": "user123"    }  ],  "totalCount": 0}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
**type:** http**scopes:** `payments/transactions.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/payments/transactions?locationId=3SwdhCu3svxI8AKsPJt6&altId=3SwdhCu3svxI8AKsPJt6&altType=location&paymentMode=live&startAt=2024-02-01&endAt=2024-02-13&entitySourceType=funnel&entitySourceSubType=two_step_order_form&search=Awesome%20transaction&subscriptionId=sub_1KGcXDCScnf89tZoVkoEMCEL&entityId=61dd0fe9c077f73e67f78803&contactId=XPLSw2SVagl12LMDeTmQ&limit=10' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

altId — queryrequired

altType — queryrequired

Version — headerrequired\---v3

Show optional parameters

locationId — query

paymentMode — query

startAt — query

endAt — query

entitySourceType — query

entitySourceSubType — query

search — query

subscriptionId — query

entityId — query

contactId — query

limit — query

offset — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
