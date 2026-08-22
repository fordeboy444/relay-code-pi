# `id`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#id "Direct link to id")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/RelationDelete
- **Summary:** This webhook response is triggered when an existing relation between objects is deleted.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Overview[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#overview "Direct link to Overview")

This webhook response is triggered when an existing relation between objects is deleted.

For example, in a business management system, a company may want to remove an relation between a custom object record and a contact. In this case:

*   The **first object** (custom object record) could represent an entity such as a project or a transaction.
*   The **second object** (contact) would represent a person associated with the custom object.

This event is **not** emitted for the built-in company-to-contact association — see [Unsupported associations](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#unsupported-associations)
.

Schema[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#schema "Direct link to Schema")

The webhook response follows the JSON schema below:

    {  "type": "object",  "properties": {    "id": {      "type": "string"    },    "firstObjectKey": {      "type": "string"    },    "firstRecordId": {      "type": "string"    },    "secondObjectKey": {      "type": "string"    },    "secondRecordId": {      "type": "string"    },    "associationId": {      "type": "string"    },    "locationId": {      "type": "string"    },  }}

Field Descriptions[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#field-descriptions "Direct link to Field Descriptions")

### `id`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#id "Direct link to id")

*   Type: `string`
*   Unique identifier for the deleted association.

### `firstObjectKey`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#firstobjectkey "Direct link to firstobjectkey")

*   Type: `string`
*   Key representing the first object in the association.

### `firstRecordId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#firstrecordid "Direct link to firstrecordid")

*   Type: `string`
*   Identifier of the first object’s specific record.

### `secondObjectKey`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#secondobjectkey "Direct link to secondobjectkey")

*   Type: `string`
*   Key representing the second object in the association.

### `secondRecordId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#secondrecordid "Direct link to secondrecordid")

*   Type: `string`
*   Identifier of the second object’s specific record.

### `associationId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#associationid "Direct link to associationid")

*   Type: `string`
*   Unique identifier for the association that was deleted.

### `locationId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#locationid "Direct link to locationid")

*   Type: `string`
*   Identifies the location associated with the deleted association.

Example Response[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#example-response "Direct link to Example Response")

    {  "id": "67ae0d741119d218c9d0c477",  "firstObjectKey": "custom_objects.mad",  "firstRecordId": "67a349a79b28947ec1f65bb5",  "secondObjectKey": "contact",  "secondRecordId": "emqfhnG3g9D9chy9inTz",  "associationId": "669e5795add2094075906c65",  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"}

Unsupported associations[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#unsupported-associations "Direct link to Unsupported associations")

**`RelationDelete` is not emitted for the built-in company-to-contact association (`BUSINESSES_CONTACTS_ASSOCIATION`).** Removing a contact from a company does not currently trigger this event.

This limitation applies to all API versions. Webhook coverage for this association is tracked as a known gap and is being evaluated for future support. This page will be updated when that changes.

Additional Notes[​](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#additional-notes "Direct link to Additional Notes")

*   The `firstObjectKey` and `secondObjectKey` define the relationship between the deleted entities.

*   [Overview](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#overview)
    
*   [Schema](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#schema)
    
*   [Field Descriptions](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#field-descriptions)
    *   [`id`](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#id)
        
    *   [`firstObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#firstobjectkey)
        
    *   [`firstRecordId`](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#firstrecordid)
        
    *   [`secondObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#secondobjectkey)
        
    *   [`secondRecordId`](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#secondrecordid)
        
    *   [`associationId`](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#associationid)
        
    *   [`locationId`](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#locationid)
        
*   [Example Response](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#example-response)
    
*   [Unsupported associations](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#unsupported-associations)
    
*   [Additional Notes](https://marketplace.gohighlevel.com/docs/webhook/RelationDelete#additional-notes)
