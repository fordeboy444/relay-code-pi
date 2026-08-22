# Relation Create

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/RelationCreate
- **Summary:** This webhook response is triggered when an relation between objects is created.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Overview[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#overview "Direct link to Overview")

This webhook response is triggered when an relation between objects is created.

For example, in a business management system, a company may want to establish an association between a custom object record and a contact. In this case:

*   The **second object** (contact) would represent a person associated with the custom object record.
*   The **first object** (custom object) could represent an entity such as a project or a transaction.
*   The system allows for dynamic relationships between entities, facilitating better data management.

This event is **not** emitted for the built-in company-to-contact association — see [Unsupported associations](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#unsupported-associations)
.

Schema[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#schema "Direct link to Schema")

The webhook response follows the JSON schema below:

    {  "type": "object",  "properties": {    "id": {      "type": "string"    },    "firstObjectKey": {      "type": "string"    },    "firstRecordId": {      "type": "string"    },    "secondObjectKey": {      "type": "string"    },    "secondRecordId": {      "type": "string"    },    "associationId": {      "type": "string"    },    "locationId": {      "type": "string"    }  }}

Field Descriptions[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#field-descriptions "Direct link to Field Descriptions")

### `id`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#id "Direct link to id")

*   Type: `string`
*   Unique identifier for the created association.

### `firstObjectKey`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#firstobjectkey "Direct link to firstobjectkey")

*   Type: `string`
*   Key representing the first object in the association.

### `firstRecordId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#firstrecordid "Direct link to firstrecordid")

*   Type: `string`
*   Identifier of the first object’s specific record.

### `secondObjectKey`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#secondobjectkey "Direct link to secondobjectkey")

*   Type: `string`
*   Key representing the second object in the association.

### `secondRecordId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#secondrecordid "Direct link to secondrecordid")

*   Type: `string`
*   Identifier of the second object’s specific record.

### `associationId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#associationid "Direct link to associationid")

*   Type: `string`
*   Unique identifier for the association that was created.

### `locationId`[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#locationid "Direct link to locationid")

*   Type: `string`
*   Identifies the location associated with the created association.

Example Response[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#example-response "Direct link to Example Response")

    {  "id": "67ae0d741119d218c9d0c477",  "firstObjectKey": "custom_objects.mad",  "firstRecordId": "67a349a79b28947ec1f65bb5",  "secondObjectKey": "contact",  "secondRecordId": "emqfhnG3g9D9chy9inTz",  "associationId": "669e5795add2094075906c65",  "locationId": "eHy2cOSZxMQzQ6Yyvl8P"}

Unsupported associations[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#unsupported-associations "Direct link to Unsupported associations")

**`RelationCreate` is not emitted for the built-in company-to-contact association (`BUSINESSES_CONTACTS_ASSOCIATION`).** Linking a contact to a company does not currently trigger this event.

This limitation applies to all API versions. Webhook coverage for this association is tracked as a known gap and is being evaluated for future support. This page will be updated when that changes.

Additional Notes[​](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#additional-notes "Direct link to Additional Notes")

*   The `firstObjectKey` and `secondObjectKey` define the relationship between the created entities.

Share your feedback
-------------------

★★★★★

*   [Overview](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#overview)
    
*   [Schema](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#schema)
    
*   [Field Descriptions](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#field-descriptions)
    *   [`id`](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#id)
        
    *   [`firstObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#firstobjectkey)
        
    *   [`firstRecordId`](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#firstrecordid)
        
    *   [`secondObjectKey`](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#secondobjectkey)
        
    *   [`secondRecordId`](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#secondrecordid)
        
    *   [`associationId`](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#associationid)
        
    *   [`locationId`](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#locationid)
        
*   [Example Response](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#example-response)
    
*   [Unsupported associations](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#unsupported-associations)
    
*   [Additional Notes](https://marketplace.gohighlevel.com/docs/webhook/RelationCreate#additional-notes)
