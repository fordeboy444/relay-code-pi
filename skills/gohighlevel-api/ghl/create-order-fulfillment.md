# Create order fulfillment

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/payments/create-order-fulfillment
- **Summary:** The 'Order Fulfillment' API facilitates the process of fulfilling an order.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/payments/create-order-fulfillment#__docusaurus_skipToContent_fallback)

Version: v3

Create order fulfillment
========================

POST 

https://services.leadconnectorhq.com/payments/orders/:orderId/fulfillments

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

The "Order Fulfillment" API facilitates the process of fulfilling an order.

### Requirements

#### Scope(s)

`payments/orders.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/payments/create-order-fulfillment#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**orderId** stringrequired

ID of the order that needs to be returned

**Example:** `653f5e0cde5a1314e62a837c`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**trackings** object\[\]required

Fulfillment tracking information

*   Array \[\
    \
\
**trackingNumber**string\
\
Tracking number provided by the shipping carrier\
\
**Example:** `40012345678`\
\
**shippingCarrier**string\
\
Shipping carrier name\
\
**Example:** `FedEx`\
\
**trackingUrl**string\
\
Tracking URL\
\
**Example:** `https://www.fedex.com/wtrk/track/?trknbr=40012345678`\
\
*   \]
    

**items** object\[\]required

Fulfilled items

*   Array \[\
    \
\
**priceId**stringrequired\
\
The id of product price\
\
**Example:** `6578278e879ad2646715ba9c`\
\
**qty**numberrequired\
\
The no of quantity of the item\
\
**Example:** `1`\
\
*   \]
    

**notifyCustomer**booleanrequired

Need to send a notification to customer

**Example:** `true`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "trackings": [    {      "trackingNumber": "40012345678",      "shippingCarrier": "FedEx",      "trackingUrl": "https://www.fedex.com/wtrk/track/?trknbr=40012345678"    }  ],  "items": [    {      "priceId": "6578278e879ad2646715ba9c",      "qty": 1    }  ],  "notifyCustomer": true}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/payments/create-order-fulfillment#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**status**booleanrequired

Status of api action

**Example:** `true`

**data** objectrequired

fulfillment data

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**trackings** object\[\]required

Fulfillment tracking information

*   Array \[\
    \
\
**trackingNumber**string\
\
Tracking number provided by the shipping carrier\
\
**Example:** `40012345678`\
\
**shippingCarrier**string\
\
Shipping carrier name\
\
**Example:** `FedEx`\
\
**trackingUrl**string\
\
Tracking URL\
\
**Example:** `https://www.fedex.com/wtrk/track/?trknbr=40012345678`\
\
*   \]
    

**_id**stringrequired

The unique identifier for the fulfillment item.

**Example:** `655b33a82209e60b6adb87a5`

**items** object\[\]required

Fulfilled items

*   Array \[\
    \
\
**_id**stringrequired\
\
The id of product price\
\
**Example:** `6578278e879ad2646715ba9c`\
\
**name**stringrequired\
\
Name\
\
**Example:** `Iphone 15 pro`\
\
**product** objectrequired\
\
Product details\
\
**_id**stringrequired\
\
The unique identifier for the product.\
\
**Example:** `655b33a82209e60b6adb87a5`\
\
**description**string\
\
product description\
\
**Example:** `This is a really awesome product`\
\
**variants** object\[\]\
\
An array of variants for the product.\
\
*   Array \[\
    \
\
**id**stringrequired\
\
A unique identifier for the variant.\
\
**Example:** `38s63qmxfr4`\
\
**name**stringrequired\
\
The name of the variant.\
\
**Example:** `Size`\
\
**options** object\[\]required\
\
An array of options for the variant.\
\
*   Array \[\
    \
\
**id**stringrequired\
\
The unique identifier for the option.\
\
**Example:** `h4z7u0im2q8`\
\
**name**stringrequired\
\
The name of the option.\
\
**Example:** `XL`\
\
*   \]\
    \
\
*   \]\
    \
\
**locationId**stringrequired\
\
The unique identifier for the location.\
\
**Example:** `3SwdhCsvxI8Au3KsPJt6`\
\
**name**stringrequired\
\
The name of the product.\
\
**Example:** `Awesome Product`\
\
**productType**stringrequired\
\
The type of the product (e.g., PHYSICAL).\
\
**Example:** `PHYSICAL`\
\
**availableInStore**boolean\
\
Indicates whether the product is available in-store.\
\
**Example:** `true`\
\
**createdAt**string<date-time>required\
\
The creation timestamp of the product.\
\
**Example:** `2023-11-20T10:23:36.515Z`\
\
**updatedAt**string<date-time>required\
\
The last update timestamp of the product.\
\
**Example:** `2024-01-23T09:57:04.846Z`\
\
**statementDescriptor**string\
\
The statement descriptor for the product.\
\
**Example:** `abcde`\
\
**image**string\
\
The URL for the product image.\
\
**Example:** `https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png`\
\
**collectionIds**string\[\]\
\
An array of category Ids for the product\
\
**Example:** `["65d71377c326ea78e1c47df5","65d71377c326ea78e1c47d34"]`\
\
**isTaxesEnabled**boolean\
\
The field indicates whether taxes are enabled for the product or not.\
\
**Default value:** `false`\
\
**Example:** `true`\
\
**taxes**string\[\]\
\
An array of ids of Taxes attached to the Product. If the expand query includes tax, the taxes will be of type `ProductTaxDto`. Please refer to the `ProductTaxDto` for additional details.\
\
**Example:** `["654492a4e6bef380114de15a"]`\
\
**automaticTaxCategoryId**string\
\
Tax category ID for Automatic taxes calculation.\
\
**Example:** `65d71377c326ea78e1c47df5`\
\
**label** object\
\
The Product label details\
\
**title**stringrequired\
\
The content for the product label.\
\
**Example:** `Featured`\
\
**startDate**string\
\
Start date in YYYY-MM-DDTHH:mm:ssZ format\
\
**Example:** `2024-06-26T05:43:35.000Z`\
\
**endDate**string\
\
Start date in YYYY-MM-DDTHH:mm:ssZ format\
\
**Example:** `2024-06-30T05:43:39.000Z`\
\
**slug**string\
\
The slug of the product by which the product will be navigated\
\
**Example:** `washing-machine`\
\
**price** objectrequired\
\
Price details\
\
**_id**stringrequired\
\
The unique identifier for the price.\
\
**Example:** `655b33aa2209e60b6adb87a7`\
\
**membershipOffers** object\[\]\
\
An array of membership offers associated with the price.\
\
*   Array \[\
    \
\
**label**stringrequired\
\
Membership offer label\
\
**Example:** `top_50`\
\
**value**stringrequired\
\
Membership offer label\
\
**Example:** `50`\
\
**_id**stringrequired\
\
The unique identifier for the membership offer.\
\
**Example:** `655b33aa2209e60b6adb87a7`\
\
*   \]\
    \
\
**variantOptionIds**string\[\]\
\
An array of variant option IDs associated with the price.\
\
**Example:** `["h4z7u0im2q8","h3nst2ltsnn"]`\
\
**locationId**string\
\
The unique identifier for the location.\
\
**Example:** `3SwdhCsvxI8Au3KsPJt6`\
\
**product**string\
\
The unique identifier for the associated product.\
\
**Example:** `655b33a82209e60b6adb87a5`\
\
**userId**string\
\
The unique identifier for the user.\
\
**Example:** `6YAtzfzpmHAdj0e8GkKp`\
\
**name**stringrequired\
\
The name of the price.\
\
**Example:** `Red / S`\
\
**type**stringrequired\
\
The type of the price (e.g., one_time).\
\
**Possible values:** \[`one_time`, `recurring`\]\
\
**Example:** `one_time`\
\
**currency**stringrequired\
\
The currency code for the price.\
\
**Example:** `INR`\
\
**amount**numberrequired\
\
The amount of the price.\
\
**Example:** `199999`\
\
**recurring** object\
\
The recurring details of the price (if type is recurring).\
\
**interval**stringrequired\
\
The interval at which the recurring event occurs.\
\
**Possible values:** \[`day`, `month`, `week`, `year`\]\
\
**Example:** `day`\
\
**intervalCount**numberrequired\
\
The number of intervals between each occurrence of the event.\
\
**Example:** `1`\
\
**createdAt**string<date-time>\
\
The creation timestamp of the price.\
\
**Example:** `2023-11-20T10:23:38.645Z`\
\
**updatedAt**string<date-time>\
\
The last update timestamp of the price.\
\
**Example:** `2024-01-23T09:57:04.852Z`\
\
**compareAtPrice**number\
\
The compare-at price for comparison purposes.\
\
**Example:** `2000000`\
\
**trackInventory**boolean\
\
Indicates whether inventory tracking is enabled.\
\
**Example:** `null`\
\
**availableQuantity**number\
\
Available inventory stock quantity\
\
**Example:** `5`\
\
**allowOutOfStockPurchases**boolean\
\
Continue selling when out of stock\
\
**Example:** `true`\
\
**qty**numberrequired\
\
The no of quantity of the current fulfilled item\
\
**Example:** `1`\
\
*   \]
    

**createdAt**stringrequired

created at

**Example:** `2023-12-12T09:27:42.355Z`

**updatedAt**stringrequired

updated at

**Example:** `2023-12-12T09:27:42.355Z`

    {  "status": true,  "data": {    "altId": "6578278e879ad2646715ba9c",    "altType": "location",    "trackings": [      {        "trackingNumber": "40012345678",        "shippingCarrier": "FedEx",        "trackingUrl": "https://www.fedex.com/wtrk/track/?trknbr=40012345678"      }    ],    "_id": "655b33a82209e60b6adb87a5",    "items": [      {        "_id": "6578278e879ad2646715ba9c",        "name": "Iphone 15 pro",        "product": {          "_id": "655b33a82209e60b6adb87a5",          "description": "This is a really awesome product",          "variants": [            {              "id": "38s63qmxfr4",              "name": "Size",              "options": [                {                  "id": "h4z7u0im2q8",                  "name": "XL"                }              ]            }          ],          "locationId": "3SwdhCsvxI8Au3KsPJt6",          "name": "Awesome Product",          "productType": "PHYSICAL",          "availableInStore": true,          "createdAt": "2023-11-20T10:23:36.515Z",          "updatedAt": "2024-01-23T09:57:04.846Z",          "statementDescriptor": "abcde",          "image": "https://storage.googleapis.com/ghl-test/3SwdhCsvxI8Au3KsPJt6/media/65af8d5df88bdb4b1022ee90.png",          "collectionIds": [            "65d71377c326ea78e1c47df5",            "65d71377c326ea78e1c47d34"          ],          "isTaxesEnabled": true,          "taxes": [            "654492a4e6bef380114de15a"          ],          "automaticTaxCategoryId": "65d71377c326ea78e1c47df5",          "label": {            "title": "Featured",            "startDate": "2024-06-26T05:43:35.000Z",            "endDate": "2024-06-30T05:43:39.000Z"          },          "slug": "washing-machine"        },        "price": {          "_id": "655b33aa2209e60b6adb87a7",          "membershipOffers": [            {              "label": "top_50",              "value": "50",              "_id": "655b33aa2209e60b6adb87a7"            }          ],          "variantOptionIds": [            "h4z7u0im2q8",            "h3nst2ltsnn"          ],          "locationId": "3SwdhCsvxI8Au3KsPJt6",          "product": "655b33a82209e60b6adb87a5",          "userId": "6YAtzfzpmHAdj0e8GkKp",          "name": "Red / S",          "type": "one_time",          "currency": "INR",          "amount": 199999,          "recurring": {            "interval": "day",            "intervalCount": 1          },          "createdAt": "2023-11-20T10:23:38.645Z",          "updatedAt": "2024-01-23T09:57:04.852Z",          "compareAtPrice": 2000000,          "trackInventory": null,          "availableQuantity": 5,          "allowOutOfStockPurchases": true        },        "qty": 1      }    ],    "createdAt": "2023-12-12T09:27:42.355Z",    "updatedAt": "2023-12-12T09:27:42.355Z"  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/payments/payments-api#authentication)
**type:** http**scopes:** `payments/orders.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/payments/orders/653f5e0cde5a1314e62a837c/fulfillments' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \-d '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "trackings": [    {      "trackingNumber": "40012345678",      "shippingCarrier": "FedEx",      "trackingUrl": "https://www.fedex.com/wtrk/track/?trknbr=40012345678"    }  ],  "items": [    {      "priceId": "6578278e879ad2646715ba9c",      "qty": 1    }  ],  "notifyCustomer": true}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

orderId — pathrequired

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "trackings": \[    {      "trackingNumber": "40012345678",      "shippingCarrier": "FedEx",      "trackingUrl": "https://www.fedex.com/wtrk/track/?trknbr=40012345678"    }  \],  "items": \[    {      "priceId": "6578278e879ad2646715ba9c",      "qty": 1    }  \],  "notifyCustomer": true
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
