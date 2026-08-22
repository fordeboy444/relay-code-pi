# Update Product Reviews

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/products/update-product-review
- **Summary:** Update status, reply, etc of a particular review

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-review#__docusaurus_skipToContent_fallback)

Version: v3

Update Product Reviews
======================

PUT 

https://services.leadconnectorhq.com/products/reviews/:reviewId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update status, reply, etc of a particular review

### Requirements

#### Scope(s)

`products.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-review#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**reviewId** stringrequired

Review Id

**Example:** `6578278e879ad2646715ba9c`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**altId**stringrequired

Location Id or Agency Id

**Example:** `6578278e879ad2646715ba9c`

**altType**stringrequired

**Possible values:** \[`location`\]

**productId**stringrequired

Product Id

**Example:** `6578278e879ad2646715ba9c`

**status**stringrequired

Status of the review

**Example:** `approved`

**reply** object\[\]

Reply of the review

*   Array \[\
    \
\
**headline**stringrequired\
\
Headline of the Review\
\
**Possible values:** `<= 200 characters`\
\
**Example:** `Amazing product with great quality`\
\
**comment**stringrequired\
\
Detailed Review of the product\
\
**Possible values:** `<= 5000 characters`\
\
**Example:** `This product exceeded my expectations in terms of quality and performance. Highly recommended!`\
\
**user** objectrequired\
\
User who is giving the review/reply\
\
**name**stringrequired\
\
Name of the customer\
\
**Possible values:** `non-empty` and `<= 100 characters`\
\
**Example:** `John Doe`\
\
**email**stringrequired\
\
Email of the customer\
\
**Example:** `example@example.com`\
\
**phone**string\
\
Phone no of the customer\
\
**Example:** `+1-555-555-5555`\
\
**isCustomer**boolean\
\
Is the person an admin or customer\
\
**Example:** `true`\
\
*   \]
    

**rating**number

Rating of the product

**Example:** `4.5`

**headline**string

Headline of the Review

**Example:** `Amazing product with great quality`

**detail**string

Detailed Review of the product

**Example:** `The product is for sure a must and recommended buy`

    {  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "productId": "6578278e879ad2646715ba9c",  "status": "approved",  "reply": [    {      "headline": "Amazing product with great quality",      "comment": "This product exceeded my expectations in terms of quality and performance. Highly recommended!",      "user": {        "name": "John Doe",        "email": "example@example.com",        "phone": "+1-555-555-5555",        "isCustomer": true      }    }  ],  "rating": "4.5",  "headline": "Amazing product with great quality",  "detail": "The product is for sure a must and recommended buy"}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/products/update-product-review#responses "Direct link to Responses")

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

**message**string

Success message

**Example:** `Successfully created`

    {  "status": true,  "message": "Successfully created"}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/products/products-api#authentication)
**type:** http**scopes:** `products.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PUT 'https://services.leadconnectorhq.com/products/reviews/6578278e879ad2646715ba9c' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "productId": "6578278e879ad2646715ba9c",  "status": "approved",  "reply": [    {      "headline": "Amazing product with great quality",      "comment": "This product exceeded my expectations in terms of quality and performance. Highly recommended!",      "user": {        "name": "John Doe",        "email": "example@example.com",        "phone": "+1-555-555-5555",        "isCustomer": true      }    }  ],  "rating": "4.5",  "headline": "Amazing product with great quality",  "detail": "The product is for sure a must and recommended buy"}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

reviewId — pathrequired

Version — headerrequired\---v3

Body required

{
  "altId": "6578278e879ad2646715ba9c",  "altType": "location",  "productId": "6578278e879ad2646715ba9c",  "status": "approved",  "reply": \[    {      "headline": "Amazing product with great quality",      "comment": "This product exceeded my expectations in terms of quality and performance. Highly recommended!",      "user": {        "name": "John Doe",        "email": "example@example.com",        "phone": "+1-555-555-5555",        "isCustomer": true      }    }  \],  "rating": "4.5",  "headline": "Amazing product with great quality",  "detail": "The product is for sure a must and recommended buy"
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
