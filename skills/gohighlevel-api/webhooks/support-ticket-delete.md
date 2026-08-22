# Support Ticket Delete

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/SupportTicketDelete
- **Summary:** Called whenever a support ticket is deleted.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketDelete#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a support ticket is deleted.

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketDelete#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string",      "example": "SupportTicketDelete"    },    "ticketId": {      "type": "string",      "example": "66a0419a0dffa47fb5f8b22f"    },    "appId": {      "type": "string",      "example": "ve9EPM428h8vShlRW1KT"    },    "companyId": {      "type": "string",      "example": "otg8dTQqGLh3Q6iQI55w"    },    "locationId": {      "type": "string",      "example": "otg8dTQqGLh3Q6iQI55w"    },    "versionId": {      "type": "string",      "example": "66a0419a0dffa47fb5f8b22f"    }  }}

*   Note: `locationId` and `versionId` may be absent depending on the app and how the ticket was raised.

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/SupportTicketDelete#example "Direct link to Example")

    {  "type": "SupportTicketDelete",  "ticketId": "66a0419a0dffa47fb5f8b22f",  "appId": "ve9EPM428h8vShlRW1KT",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "locationId": "otg8dTQqGLh3Q6iQI55w",  "versionId": "66a0419a0dffa47fb5f8b22f"}

Share your feedback
-------------------

★★★★★
