# Webhooks table changed - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/webhooks-table-changed
- **Summary:** Webhooks table changed *   Change events data *   Webhooks payload The presence of each **created\***, **destroyed\***, **changed\*** field is determined by the specification filters and the actual change itself.

Object

Webhooks table changed
======================

Models that reference this object:

*   [Change events data](https://airtable.com/developers/web/api/model/change-events-data)
    
*   [Webhooks payload](https://airtable.com/developers/web/api/model/webhooks-payload)
    

  
`object`

The presence of each **created\***, **destroyed\***, **changed\*** field is determined by the specification filters and the actual change itself.

Previous and unchanged values are only a part of the payload if the [specification](https://airtable.com/developers/web/api/model/webhooks-specification)
 contains them in the includes object.

`changedViewsById`

`optional<``object``>`

This is only included when `recordChangeScope` is a view id.

The below object is keyed with a string

|     |     |
| --- | --- |
| <br>`changedRecordsById` | `optional<`[`Webhooks changed record`](https://airtable.com/developers/web/api/model/webhooks-changed-record)<br>`>`<br><br>Changed events are generated when a record in a view changes. |
| <br>`createdRecordsById` | `optional<`[`Webhooks created record`](https://airtable.com/developers/web/api/model/webhooks-created-record)<br>`>`<br><br>Create events when a record is added or made visible to a view. |
| <br>`destroyedRecordIds` | `optional<``array of strings``>`<br><br>Destroyed events are generated when a record is deleted or removed from a view. |

`changedFieldsById`

`optional<``object``>`

The below object is keyed with a string

`current`

`object`

|     |     |
| --- | --- |
| <br>`type` | `optional<`[`Field Type`](https://airtable.com/developers/web/api/model/field-type)<br>`>` |
| <br>`name` | `optional<``string``>` |

`previous`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`type` | `optional<`[`Field Type`](https://airtable.com/developers/web/api/model/field-type)<br>`>` |
| <br>`name` | `optional<``string``>` |

`changedRecordsById`

`optional<`[`Webhooks changed record`](https://airtable.com/developers/web/api/model/webhooks-changed-record)
`>`

`createdFieldsById`

`optional<``object``>`

The below object is keyed with a string

|     |     |
| --- | --- |
| <br>`type` | [`Field Type`](https://airtable.com/developers/web/api/model/field-type) |
| <br>`name` | `string` |

`createdRecordsById`

`optional<`[`Webhooks created record`](https://airtable.com/developers/web/api/model/webhooks-created-record)
`>`

`changedMetadata`

`optional<``object``>`

`current`

`object`

|     |     |
| --- | --- |
| <br>`description` | `optional<``string \| null``>` |
| <br>`name` | `optional<``string``>` |

`previous`

`object`

|     |     |
| --- | --- |
| <br>`description` | `optional<``string \| null``>` |
| <br>`name` | `optional<``string``>` |

`destroyedFieldIds`

`optional<``array of strings``>`

`destroyedRecordIds`

`optional<``array of strings``>`

!!
