# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFileChange#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFileChange
- **Summary:** Called whenever a knowledge base file asset is created, updated or deleted

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFileChange#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a knowledge base **file** asset is created, updated or deleted

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFileChange#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "knowledgeBaseId": {      "type": "string"    },    "id": {      "type": "string"    },    "assetType": {      "type": "string"    },    "status": {      "type": "string"    },    "action": {      "type": "string"    },    "deleted": {      "type": "boolean"    }  }}

*   Note: `action` indicates the change that occurred and is one of `created`, `updated` or `deleted`. For a `deleted` action, `deleted` is `true`.
*   Note: `assetType` is always `file` for this event.
*   Note: `status` reflects the asset's processing state (for example `uploaded`, `trained` or `failed`) and varies by asset type.

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/KnowledgeBaseFileChange#example "Direct link to Example")

    {  "type": "KnowledgeBaseFileChange",  "locationId": "ve9EPM428h8vShlRW1KT",  "knowledgeBaseId": "6578278e879ad2646715ba9c",  "id": "c6tZZU0rJBf30ZXx9Gli",  "assetType": "file",  "status": "uploaded",  "action": "created",  "deleted": false}

Share your feedback
-------------------

★★★★★
