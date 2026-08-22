# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFaqChange#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFaqChange
- **Summary:** Called whenever a knowledge base FAQ asset is created, updated or deleted

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFaqChange#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a knowledge base **FAQ** asset is created, updated or deleted

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFaqChange#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "knowledgeBaseId": {      "type": "string"    },    "id": {      "type": "string"    },    "assetType": {      "type": "string"    },    "status": {      "type": "string"    },    "action": {      "type": "string"    },    "deleted": {      "type": "boolean"    }  }}

*   Note: `action` indicates the change that occurred and is one of `created`, `updated` or `deleted`. For a `deleted` action, `deleted` is `true`.
*   Note: `assetType` is always `faq` for this event.
*   Note: `status` reflects the asset's processing state and varies by asset type.

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFaqChange#example "Direct link to Example")

    {  "type": "KnowledgeBaseFaqChange",  "locationId": "ve9EPM428h8vShlRW1KT",  "knowledgeBaseId": "6578278e879ad2646715ba9c",  "id": "c6tZZU0rJBf30ZXx9Gli",  "assetType": "faq",  "status": "active",  "action": "updated",  "deleted": false}

Share your feedback
-------------------

★★★★★
