# migrate-connection

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection
- **Summary:** Migrate external authentication connection /marketplace/external-auth/migration Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection#__docusaurus_skipToContent_fallback)

Version: v3

Migrate external authentication connection

POST 

/marketplace/external-auth/migration
------------------------------------

Migrates an external authentication connection credentials (basic or oauth2) for a specific app and location. This endpoint validates the app configuration, stores credentials safely in CRM's native encrypted storage. With this the lifecycle of the token is managed by CRM.

Request[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection#request "Direct link to request")

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/marketplace/migrate-connection#responses "Direct link to Responses")

*   201
*   400
*   401
*   404
*   500

Connection migrated successfully

Bad request - invalid input or auth type mismatch

Unauthorized - invalid or missing token

App not found

Internal server error
