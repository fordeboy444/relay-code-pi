# ConversationUpdate

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/ConversationUpdate
- **Summary:** Called whenever a live chat conversation is merged into another conversation due to contact identification (e.g. a visitor provides their email or phone number matching an existing contact).

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/ConversationUpdate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a live chat conversation is merged into another conversation due to contact identification (e.g. a visitor provides their email or phone number matching an existing contact).

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/ConversationUpdate#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "companyId": {      "type": "string"    },    "newConversationId": {      "type": "string"    },    "oldConversationId": {      "type": "string"    },    "contactId": {      "type": "string"    }  }}

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/ConversationUpdate#example "Direct link to Example")

    {  "type": "ConversationUpdate",  "locationId": "ADVlSQnPsdq3hinusd6C3",  "companyId": "5DP4iH6HLkQsiKESj6rh",  "newConversationId": "MzKIpg0rEIH2ZUGKf6BS",  "oldConversationId": "zsYhPBOUsEHtrK508Wm9",  "contactId": "xQRHBmMkNjMVJKHFPdgM"}

Share your feedback
-------------------

★★★★★
