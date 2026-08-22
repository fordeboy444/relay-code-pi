# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseRichTextChange#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseRichTextChange
- **Summary:** Called whenever a knowledge base rich text asset is created, updated or deleted

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseRichTextChange#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a knowledge base **rich text** asset is created, updated or deleted

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseRichTextChange#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "knowledgeBaseId": {      "type": "string"    },    "id": {      "type": "string"    },    "assetType": {      "type": "string"    },    "status": {      "type": "string"    },    "action": {      "type": "string"    },    "deleted": {      "type": "boolean"    }  }}

*   Note: `action` indicates the change that occurred and is one of `created`, `updated` or `deleted`. For a `deleted` action, `deleted` is `true`.
*   Note: `assetType` is always `rich_text` for this event.
*   Note: `status` reflects the asset's processing state and varies by asset type.

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseRichTextChange#example "Direct link to Example")

    {  "type": "KnowledgeBaseRichTextChange",  "locationId": "ve9EPM428h8vShlRW1KT",  "knowledgeBaseId": "6578278e879ad2646715ba9c",  "id": "c6tZZU0rJBf30ZXx9Gli",  "assetType": "rich_text",  "status": "active",  "action": "created",  "deleted": false}

Share your feedback
-------------------

★★★★★
