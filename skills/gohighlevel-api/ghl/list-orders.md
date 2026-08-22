# List Orders

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/list-orders
- **Summary:** The 'List Orders' API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/list-orders#__docusaurus_skipToContent_fallback)

Version: v3

List Orders
===========

GET 

https://services.leadconnectorhq.com/payments/orders

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "List Orders" API allows to retrieve a paginated list of orders. Customize your results by filtering orders based on name, alt type, order status, payment mode, date range, type of source, contact, funnel products or paginate through the list using the provided query parameters. This endpoint provides a straightforward way to explore and retrieve order information.

### Requirements

#### Scope(s)

`payments/orders.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-orders#request "Direct link to request")

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

**status** string

Order status.

**Example:** `completed`

**paymentStatus** string

**Possible values:** \[`paid`, `unpaid`, `refunded`, `partially_paid`\]

Payment Status of the Order

**Example:** `unpaid`

**paymentMode** string

Mode of payment.

**Example:** `live`

**startAt** string

Starting interval of orders.

**Example:** `2024-02-01`

**endAt** string

Closing interval of orders.

**Example:** `2024-02-13`

**search** string

The name of the order for searching.

**Example:** `Awesome order`

**contactId** string

Contact id for filtering of orders.

**Example:** `XPLSw2SVagl12LMDeTmQ`

**funnelProductIds** string

Funnel product ids separated by comma.

**Example:** `61dd0c7dc077f712a5f787ff,61d6afc9d39ac5e35965c017`

**sourceId** string

Source id

**Example:** `61dd0c7dc077f712a5f787ff`

**limit** number

The maximum number of items to be included in a single page of results

Default value:`10`

**Example:** `20`

**offset** number

The starting index of the page, indicating the position from which the results should be retrieved.

Default value:`0`

**Example:** `0`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/list-orders#responses "Direct link to Responses")

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

An array of orders

*   Array \[\
    \
\
**_id**stringrequired\
\
The unique identifier for the order.\
\
**Example:** `653f5e0cde5a1314e62a837c`\
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
Contact id corresponding to the order.\
\
**Example:** `XPLSw2SVagl12LMDeTmQ`\
\
**contactName**string\
\
Contact name corresponding to the order.\
\
**Example:** `James Bond`\
\
**contactEmail**string\
\
Contact email corresponding to the order.\
\
**Example:** `james.bond@gohighlevel.com`\
\
**currency**string\
\
Currency in which order was created.\
\
**Example:** `USD`\
\
**amount**number\
\
Order value.\
\
**Example:** `100`\
\
**subtotal**number\
\
Order sub-total value.\
\
**Example:** `100`\
\
**discount**number\
\
Discount value on order.\
\
**Example:** `10`\
\
**status**stringrequired\
\
The status of the order (e.g., completed).\
\
**Example:** `completed`\
\
**liveMode**boolean\
\
Order is in live / test mode.\
\
**Example:** `false`\
\
**totalProducts**number\
\
Total products in an order.\
\
**Example:** `5`\
\
**sourceType**stringrequired\
\
Source type of order (eg: funnel).\
\
**Example:** `funnel`\
\
**sourceName**string\
\
Source name for the order.\
\
**Example:** `onestep`\
\
**sourceId**string\
\
Source id for the order.\
\
**Example:** `kDj7BHej9Zyyq3QakJmz`\
\
**sourceMeta**object\
\
Meta content for the source of order.\
\
**Example:** `{ domain: "app.gohighlevel.com", pageId: "rBVhyYhMsbxbO8ZqOcei", pageUrl: "/v2/preview/rBVhyYhMsbxbO8ZqOcei", stepId: "5a772f62-3fbc-418b-af1b-be8929dd64c2"}`\
\
**couponCode**string\
\
Coupon code for the order.\
\
**Example:** `100PER`\
\
**createdAt**string<date-time>required\
\
The creation timestamp of the order.\
\
**Example:** `2023-11-20T10:23:36.515Z`\
\
**updatedAt**string<date-time>required\
\
The last update timestamp of the order.\
\
**Example:** `2024-01-23T09:57:04.846Z`\
\
**sourceSubType**string\
\
Source sub-type for the order.\
\
**Example:** `one_step_order_form`\
\
**fulfillmentStatus**string\
\
Fulfillment status of the order.\
\
**Example:** `unfulfilled`\
\
**onetimeProducts**number\
\
Total one time products in an order.\
\
**Example:** `1`\
\
**recurringProducts**number\
\
Total recurring time products in an order.\
\
**Example:** `1`\
\
**createdBy**string\
\
User ID who created the order.\
\
**Example:** `user123`\
\
*   \]
    

**totalCount**numberrequired

total orders count

    {  "data": [    {      "_id": "653f5e0cde5a1314e62a837c",      "altId": "3SwdhCu3svxI8AKsPJt6",      "altType": "location",      "contactId": "XPLSw2SVagl12LMDeTmQ",      "contactName": "James Bond",      "contactEmail": "james.bond@gohighlevel.com",      "currency": "USD",      "amount": "100",      "subtotal": "100",      "discount": "10",      "status": "completed",      "liveMode": "false",      "totalProducts": "5",      "sourceType": "funnel",      "sourceName": "onestep",      "sourceId": "kDj7BHej9Zyyq3QakJmz",      "sourceMeta": "{ domain: \"app.gohighlevel.com\", pageId:  \"rBVhyYhMsbxbO8ZqOcei\", pageUrl:  \"/v2/preview/rBVhyYhMsbxbO8ZqOcei\", stepId:   \"5a772f62-3fbc-418b-af1b-be8929dd64c2\"}",      "couponCode": "100PER",      "createdAt": "2023-11-20T10:23:36.515Z",      "updatedAt": "2024-01-23T09:57:04.846Z",      "sourceSubType": "one_step_order_form",      "fulfillmentStatus": "unfulfilled",      "onetimeProducts": "1",      "recurringProducts": "1",      "createdBy": "user123"    }  ],  "totalCount": 0}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
**type:** http**scopes:** `payments/orders.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/payments/orders?locationId=3SwdhCu3svxI8AKsPJt6&altId=3SwdhCu3svxI8AKsPJt6&status=completed&paymentStatus=unpaid&paymentMode=live&startAt=2024-02-01&endAt=2024-02-13&search=Awesome%20order&contactId=XPLSw2SVagl12LMDeTmQ&funnelProductIds=61dd0c7dc077f712a5f787ff%2C61d6afc9d39ac5e35965c017&sourceId=61dd0c7dc077f712a5f787ff&limit=10' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

altId — queryrequired

Version — headerrequired\---v3

Show optional parameters

locationId — query

status — query

paymentStatus — query\---paidunpaidrefundedpartially_paid

paymentMode — query

startAt — query

endAt — query

search — query

contactId — query

funnelProductIds — query

sourceId — query

limit — query

offset — query

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
