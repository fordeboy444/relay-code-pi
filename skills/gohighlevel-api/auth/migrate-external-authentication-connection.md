# Migrate external authentication connection

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection
- **Summary:** Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location. This endpoint validates the app configuration, stores credentials safely in CRM's native encrypted storage. With this the lifecycle of the token is managed by CRM.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection#__docusaurus_skipToContent_fallback)

Version: v3

Migrate external authentication connection

POST 

https://services.leadconnectorhq.com/marketplace/external-auth/migration

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location. This endpoint validates the app configuration, stores credentials safely in CRM's native encrypted storage. With this the lifecycle of the token is managed by CRM.

### Requirements

#### Scope(s)

`marketplace-external-auth-migration.write`

#### Auth Method(s)

`OAuth Access Token`

#### Token Type(s)

`Sub-Account Token``Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**type**stringrequired

Type of authentication - basic or oauth2

**Possible values:** \[`oauth2`, `basic`\]

**Example:** `oauth2`

**locationId**stringrequired

Location ID

**Example:** `location_12345`

**appId**stringrequired

App ID

**Example:** `507f1f77bcf86cd799439011`

**appVersionId**stringrequired

App Version ID

**Example:** `507f1f77bcf86cd799439012`

**accountId**stringrequired

Connection identifier

**Example:** `my-connection-identifier`

**apiKey**string

API Key (supported when type is basic)

**Example:** `sk_test_1234567890`

**basicCredentials**object

Basic auth credentials as key/value pairs (supported when type is basic). Keys are validated against the app version externalAuthConfig.fields.

**Example:** `{"email":"user@example.com","password":"p@ssw0rd"}`

**accessToken**string

Access token (required when type is oauth2)

**Example:** `ya29.a0AfH6SMBx...`

**refreshToken**string

Refresh token (required when type is oauth2)

**Example:** `1//0gHq5F...`

**expiryIn**number

Access token expiry time in milliseconds (optional for oauth2)

**Example:** `3600000`

**expiryAt**number

Timestamp for access token expiry (optional for oauth2)

**Example:** `1735689600000`

**scopes**string\[\]

OAuth2 scopes (optional for oauth2)

**Example:** `["contacts.readonly","contacts.write"]`

**displayName**string

Display name for the connection (optional, defaults to accountId)

**Example:** `My Connection Display Name`

**isDefault**boolean

Whether this is the default connection for the location (optional, defaults to false)

**Example:** `false`

    {  "type": "oauth2",  "locationId": "location_12345",  "appId": "507f1f77bcf86cd799439011",  "appVersionId": "507f1f77bcf86cd799439012",  "accountId": "my-connection-identifier",  "apiKey": "sk_test_1234567890",  "basicCredentials": {    "email": "user@example.com",    "password": "p@ssw0rd"  },  "accessToken": "ya29.a0AfH6SMBx...",  "refreshToken": "1//0gHq5F...",  "expiryIn": 3600000,  "expiryAt": 1735689600000,  "scopes": [    "contacts.readonly",    "contacts.write"  ],  "displayName": "My Connection Display Name",  "isDefault": false}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection#responses "Direct link to Responses")

*   201
*   400
*   401
*   404
*   500

Connection migrated successfully

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**booleanrequired

Indicates if the migration was successful

**Example:** `true`

**identifier**stringrequired

Unique identifier for the migrated connection

**Example:** `migration_12345`

**message**string

Message describing the result

**Example:** `Connection migrated successfully`

    {  "success": true,  "identifier": "migration_12345",  "message": "Connection migrated successfully"}

Bad request - invalid input or auth type mismatch

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized - invalid or missing token

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

App not found

Internal server error

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code

**Example:** `500`

**message**string

Error message describing the internal server error

**Example:** `Internal Server Error`

    {  "statusCode": 500,  "message": "Internal Server Error"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/marketplace/developer-marketplace-api#authentication)
**type:** http**scopes:** `marketplace-external-auth-migration.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/marketplace/external-auth/migration' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \--data-raw '{  "type": "oauth2",  "locationId": "location_12345",  "appId": "507f1f77bcf86cd799439011",  "appVersionId": "507f1f77bcf86cd799439012",  "accountId": "my-connection-identifier",  "apiKey": "sk_test_1234567890",  "basicCredentials": {    "email": "user@example.com",    "password": "p@ssw0rd"  },  "accessToken": "ya29.a0AfH6SMBx...",  "refreshToken": "1//0gHq5F...",  "expiryIn": 3600000,  "expiryAt": 1735689600000,  "scopes": [    "contacts.readonly",    "contacts.write"  ],  "displayName": "My Connection Display Name",  "isDefault": false}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeLocation-AccessLocation-Access-Only

Bearer Token

Parameters

Version — headerrequired\---v3

Body required

{
  "type": "oauth2",  "locationId": "location_12345",  "appId": "507f1f77bcf86cd799439011",  "appVersionId": "507f1f77bcf86cd799439012",  "accountId": "my-connection-identifier",  "apiKey": "sk_test_1234567890",  "basicCredentials": {    "email": "user@example.com",    "password": "p@ssw0rd"  },  "accessToken": "ya29.a0AfH6SMBx...",  "refreshToken": "1//0gHq5F...",  "expiryIn": 3600000,  "expiryAt": 1735689600000,  "scopes": \[    "contacts.readonly",    "contacts.write"  \],  "displayName": "My Connection Display Name",  "isDefault": false
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
