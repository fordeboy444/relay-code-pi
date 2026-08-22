# Webhooks table created - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/webhooks-table-created
- **Summary:** Webhooks table created

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Object

Webhooks table created
======================

Models that reference this object:

*   [Change events data](https://airtable.com/developers/web/api/model/change-events-data)
    
*   [Webhooks payload](https://airtable.com/developers/web/api/model/webhooks-payload)
    

  
`object`

`fieldsById`

`optional<``object``>`

The below object is keyed with a string

|     |     |
| --- | --- |
| <br>`type` | [`Field Type`](https://airtable.com/developers/web/api/model/field-type) |
| <br>`name` | `string` |

`recordsById`

`optional<``object``>`

The below object is keyed with a string

|     |     |
| --- | --- |
| <br>`createdTime` | `string`<br><br>A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z" |
| <br>`cellValuesByFieldId` | [`Cell value V2 by fieldId`](https://airtable.com/developers/web/api/field-model) |

`metadata`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`description` | `string \| null` |
| <br>`name` | `string` |

!!
