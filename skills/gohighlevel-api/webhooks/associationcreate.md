# `id`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#id "Direct link to id")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate
- **Summary:** This webhook response is triggered when a new association is created between objects, such as linking contacts to custom objects.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Overview[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#overview "Direct link to Overview")

This webhook response is triggered when a new association is created between objects, such as linking contacts to custom objects. Currently, only contact-to-contact , contact to custom object and custom object to custom object associations are supported. There are plans to expand support for additional associations in the future.

For example, in a real estate system, a company may want to associate potential buyers with specific properties. In this case:

*   The **first object** (buyer) would be a custom object representing the interested person.
*   The **second object** (property) would be a custom object representing the real estate listing.
*   The **association label** might be "Interested Buyer," indicating that the buyer has shown interest in the property.
*   The system could store multiple buyers per property (many-to-many relationship), allowing for flexible tracking of interest.

Schema[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#schema "Direct link to Schema")

The webhook response follows the JSON schema below:

    {  "type": "object",  "properties": {    "id": {      "type": "string"    },    "associationType": {      "type": "string"    },    "firstObjectKey": {      "type": "string"    },    "firstObjectLabel": {      "type": "string"    },    "secondObjectKey": {      "type": "string"    },    "secondObjectLabel": {      "type": "string"    },    "key": {      "type": "string"    },    "locationId": {      "type": "string"    }  }}

Field Descriptions[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#field-descriptions "Direct link to Field Descriptions")

### `id`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#id "Direct link to id")

*   Type: `string`
*   Unique identifier for the association.

### `associationType`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#associationtype "Direct link to associationtype")

*   Type: `string`
*   Specifies the type of association (e.g., `USER_DEFINED` or `SYSTEM_DEFINED`).

### `firstObjectKey`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#firstobjectkey "Direct link to firstobjectkey")

*   Type: `string`
*   Key representing the first object in the association.

### `firstObjectLabel`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#firstobjectlabel "Direct link to firstobjectlabel")

*   Type: `string`
*   Readable label for the first object.

### `secondObjectKey`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#secondobjectkey "Direct link to secondobjectkey")

*   Type: `string`
*   Key representing the second object in the association.

### `secondObjectLabel`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#secondobjectlabel "Direct link to secondobjectlabel")

*   Type: `string`
*   Readable label for the second object.

### `key`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#key "Direct link to key")

*   Type: `string`
*   Unique key assigned to the association.

### `locationId`[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#locationid "Direct link to locationid")

*   Type: `string`
*   Identifies the location associated with the created association.

Example Response[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#example-response "Direct link to Example Response")

    {  "id": "67ade73d1119d2ac7ad0c475",  "associationType": "USER_DEFINED",  "firstObjectKey": "custom_objects.real_estate_buyer",  "firstObjectLabel": "Interested Buyer",  "secondObjectKey": "custom_objects.property",  "secondObjectLabel": "Property",  "key": "buyer_property_interest",  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"}

Additional Notes[​](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#additional-notes "Direct link to Additional Notes")

*   Ensure that your webhook listener is capable of processing `POST` requests.
*   The `firstObjectKey` and `secondObjectKey` help define relationships between entities.
*   The `traceId` is useful for debugging and logging purposes.

*   [Overview](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#overview)
    
*   [Schema](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#schema)
    
*   [Field Descriptions](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#field-descriptions)
    *   [`id`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#id)
        
    *   [`associationType`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#associationtype)
        
    *   [`firstObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#firstobjectkey)
        
    *   [`firstObjectLabel`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#firstobjectlabel)
        
    *   [`secondObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#secondobjectkey)
        
    *   [`secondObjectLabel`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#secondobjectlabel)
        
    *   [`key`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#key)
        
    *   [`locationId`](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#locationid)
        
*   [Example Response](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#example-response)
    
*   [Additional Notes](https://marketplace.gohighlevel.com/docs/webhook/AssociationCreate#additional-notes)
