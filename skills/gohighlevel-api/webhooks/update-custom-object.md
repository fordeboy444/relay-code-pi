# Update Custom Object

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate
- **Summary:** The **Update Custom Object** is triggered whenever a custom object is Updated.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Overview[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#overview "Direct link to Overview")

The **Update Custom Object** is triggered whenever a custom object is Updated. This webhook allows systems to listen for new custom objects and take appropriate actions based on the event.

Schema[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#schema "Direct link to Schema")

The webhook payload follows the JSON schema below:

    {  "type": "object",  "properties": {    "labels": {      "type": "object",      "required": true    },    "description": {      "type": "string"    },    "searchableProperties": {      "type": "array"    },    "primaryDisplayProperty": {      "type": "string",      "required": true    },    "key": {      "type": "string",      "required": true    },    "locationId": {      "type": "string",      "required": true    },    "createdBy": {      "type": "object"    },    "updatedBy": {      "type": "object"    },    "timestamp": {      "type": "string",      "format": "date-time"    },    "objectType": {      "type": "string",      "enum": ["USER_DEFINED"],      "default": "USER_DEFINED"    }  }}

Field Descriptions[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#field-descriptions "Direct link to Field Descriptions")

### `labels`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#labels "Direct link to labels")

An object that defines the human-readable names associated with the custom object.

*   **`singular`**: The name of the object in singular form (e.g., `"pet"`).
*   **`plural`**: The name of the object in plural form (e.g., `"pets"`).

### `description`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#description "Direct link to description")

*   Type: `string`
*   A brief explanation of the custom object.

### `searchableProperties`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#searchableproperties "Direct link to searchableproperties")

*   Type: `array`
*   List of properties that are indexed for search.

### `primaryDisplayProperty`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#primarydisplayproperty "Direct link to primarydisplayproperty")

*   Type: `string`
*   Required: ✅
*   The key property used to display the custom object.

### `key`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#key "Direct link to key")

*   Type: `string`
*   Required: ✅
*   Unique identifier for the custom object type.

### `locationId`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#locationid "Direct link to locationid")

*   Type: `string`
*   Required: ✅
*   Identifies the location associated with the custom object.

### `createdBy`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#createdby "Direct link to createdby")

*   Type: `object`
*   Metadata about the user who created the object.

### `updatedBy`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#updatedby "Direct link to updatedby")

*   Type: `object`
*   Metadata about the user who last updated the object.

### `timestamp`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#timestamp "Direct link to timestamp")

*   Type: `string`
*   Format: `date-time`
*   The date and time when the object was created.

### `objectType`[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#objecttype "Direct link to objecttype")

*   Type: `string`
*   Default: `"USER_DEFINED"`
*   Specifies the type of object, currently supports only `USER_DEFINED`.

Example Payload[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#example-payload "Direct link to Example Payload")

    {  "id": "6798a1a18fc746e0eba2ccfe",  "labels": {    "singular": "pet",    "plural": "pets"  },  "description": "Pet's Description",  "searchableProperties": [    "custom_objects.pets.pet_name"  ],  "primaryDisplayProperty": "custom_objects.pets.pet_name",  "key": "custom_objects.pets",  "locationId": "eHy2cOSZxMQzQ6Yyvl8P",  "updatedAt": "2025-01-28T09:21:37.311Z",  "createdAt": "2025-01-28T09:21:37.311Z",  "objectType": "USER_DEFINED",  "timestamp": "2025-02-10T08:26:05.961Z"}

Additional Notes[​](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#additional-notes "Direct link to Additional Notes")

*   Ensure your webhook listener is set up to handle `POST` requests.
*   The payload format may change in future versions; check for updates regularly.
*   The `key` field should be unique within a given `locationId`.

Share your feedback
-------------------

★★★★★

*   [Overview](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#overview)
    
*   [Schema](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#schema)
    
*   [Field Descriptions](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#field-descriptions)
    *   [`labels`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#labels)
        
    *   [`description`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#description)
        
    *   [`searchableProperties`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#searchableproperties)
        
    *   [`primaryDisplayProperty`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#primarydisplayproperty)
        
    *   [`key`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#key)
        
    *   [`locationId`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#locationid)
        
    *   [`createdBy`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#createdby)
        
    *   [`updatedBy`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#updatedby)
        
    *   [`timestamp`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#timestamp)
        
    *   [`objectType`](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#objecttype)
        
*   [Example Payload](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#example-payload)
    
*   [Additional Notes](https://marketplace.gohighlevel.com/docs/webhook/ObjectSchemaUpdate#additional-notes)
