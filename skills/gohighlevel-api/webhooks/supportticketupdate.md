# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketUpdate#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/SupportTicketUpdate
- **Summary:** Called whenever a support ticket is updated — for example when its status changes, a reply is added to the conversation, or its details are edited.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketUpdate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a support ticket is updated — for example when its status changes, a reply is added to the conversation, or its details are edited.

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketUpdate#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string",      "example": "SupportTicketUpdate"    },    "ticketId": {      "type": "string",      "example": "66a0419a0dffa47fb5f8b22f"    },    "appId": {      "type": "string",      "example": "ve9EPM428h8vShlRW1KT"    },    "companyId": {      "type": "string",      "example": "otg8dTQqGLh3Q6iQI55w"    },    "locationId": {      "type": "string",      "example": "otg8dTQqGLh3Q6iQI55w"    },    "versionId": {      "type": "string",      "example": "66a0419a0dffa47fb5f8b22f"    }  }}

*   Note: `locationId` and `versionId` may be absent depending on the app and how the ticket was raised.

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketUpdate#example "Direct link to Example")

    {  "type": "SupportTicketUpdate",  "ticketId": "66a0419a0dffa47fb5f8b22f",  "appId": "ve9EPM428h8vShlRW1KT",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "locationId": "otg8dTQqGLh3Q6iQI55w",  "versionId": "66a0419a0dffa47fb5f8b22f"}
