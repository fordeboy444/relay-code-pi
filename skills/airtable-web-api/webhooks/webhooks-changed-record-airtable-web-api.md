# Webhooks changed record - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/webhooks-changed-record
- **Summary:** Webhooks changed record

Object

Webhooks changed record
=======================

Models that reference this object:

*   [Webhooks table changed](https://airtable.com/developers/web/api/model/webhooks-table-changed)
    

  
`object`

One or multiple records being **changed** and reported upon via webhooks.

The below object is keyed with a string

`current`

`object`

|     |     |
| --- | --- |
| <br>`cellValuesByFieldId` | [`Cell value V2 or null by fieldId`](https://airtable.com/developers/web/api/field-model) |

`previous`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`cellValuesByFieldId` | [`Cell value V2 or null by fieldId`](https://airtable.com/developers/web/api/field-model) |

`unchanged`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`cellValuesByFieldId` | [`Cell value V2 or null by fieldId`](https://airtable.com/developers/web/api/field-model) |

!!
