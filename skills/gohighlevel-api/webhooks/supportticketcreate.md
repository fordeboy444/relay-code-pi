# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketCreate#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/SupportTicketCreate
- **Summary:** Called whenever a new support ticket is created for an app.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketCreate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a new support ticket is created for an app.

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketCreate#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string",      "example": "SupportTicketCreate"    },    "ticketId": {      "type": "string",      "example": "66a0419a0dffa47fb5f8b22f"    },    "appId": {      "type": "string",      "example": "ve9EPM428h8vShlRW1KT"    },    "companyId": {      "type": "string",      "example": "otg8dTQqGLh3Q6iQI55w"    },    "locationId": {      "type": "string",      "example": "otg8dTQqGLh3Q6iQI55w"    },    "versionId": {      "type": "string",      "example": "66a0419a0dffa47fb5f8b22f"    }  }}

*   Note: `locationId` and `versionId` may be absent depending on the app and how the ticket was raised.

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketCreate#example "Direct link to Example")

    {  "type": "SupportTicketCreate",  "ticketId": "66a0419a0dffa47fb5f8b22f",  "appId": "ve9EPM428h8vShlRW1KT",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "locationId": "otg8dTQqGLh3Q6iQI55w",  "versionId": "66a0419a0dffa47fb5f8b22f"}
