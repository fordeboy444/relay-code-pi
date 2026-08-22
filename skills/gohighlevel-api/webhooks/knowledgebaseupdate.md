# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseUpdate#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseUpdate
- **Summary:** Called whenever a knowledge base name/description is updated

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseUpdate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a knowledge base name/description is updated

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseUpdate#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "id": {      "type": "string"    },    "name": {      "type": "string"    },    "description": {      "type": "string"    },    "deleted": {      "type": "boolean"    }  }}

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseUpdate#example "Direct link to Example")

    {  "type": "KnowledgeBaseUpdate",  "locationId": "ve9EPM428h8vShlRW1KT",  "id": "6578278e879ad2646715ba9c",  "name": "Support Knowledge Base",  "description": "Updated FAQs and docs for customer support",  "deleted": false}
