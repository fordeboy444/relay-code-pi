# Webhooks payload - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/webhooks-payload
- **Summary:** *   List webhook payloads The contents of a webhook payload depend on the webhook's specification and the action performed on the base.

Object

Webhooks payload
================

Endpoints that reference this object:

*   [List webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
    

  
`any of the below objects`

The contents of a webhook payload depend on the webhook's specification and the action performed on the base. Each action can generate one or more payload depending on the tables, fields and records affected.

For example, consider a webhook subscribed to all dataTypes and changeTypes. If a user renames a table, that will generate a single payload. If another user later adds a field, that will generate a second payload. If the new field affects multiple records, such as a Formula field, then the second payload will contain both the field change and the records affected.

Since many records may be affected, this action may be split across multiple payloads. The split payloads will have the same `timestamp`, `baseTransactionNumber`, and `actionMetadata`. Processing formula fields and updates from the API or sync are examples of a few other sources that can result in multiple payloads.

Clients must not assume that at least one of the following optional fields are present, since we may add new fields to the payload in the future and we will not consider it a breaking change. The shape of objects may change without notice, but existing keys won't be changed or removed without notice.

`actionMetadata`

[`Webhooks action`](https://airtable.com/developers/web/api/model/webhooks-action)

The action responsible for the change. We may add additional sources or source metadata in the future and this will not be considered a breaking change. API consumers are expected to handle unknown sources gracefully.

`baseTransactionNumber`

`number`

A number which can be used to determine all changes within a transaction.

`payloadFormat`

`"v0"`

The payload format's version number. This is currently just v0, but it may be increased in the future for breaking payload changes.

`timestamp`

`string`

The time the action occurred.

`changedTablesById`

`optional<``object``>`

|     |     |
| --- | --- |
| `key: string` | [`Webhooks table changed`](https://airtable.com/developers/web/api/model/webhooks-table-changed) |

`createdTablesById`

`optional<``object``>`

|     |     |
| --- | --- |
| `key: string` | [`Webhooks table created`](https://airtable.com/developers/web/api/model/webhooks-table-created) |

`destroyedTableIds`

`optional<``array of strings``>`

**Error response**

If a specification becomes invalid due to a change in the base (e.g. deletion of a table or view specified in `recordChangeScope`, deletion of a field explicitly listed in `watchDataInFieldIds` or `watchSchemasOfFieldIds`), the specification generates an error payload and goes into an error state. The error payload may contain the change that invalidated the specification. It will not reactivate automatically if the specified field/view/table is reintroduced. The caller must re-create a new webhook. If any of the fields in `includeCellValuesInFieldIds` are deleted, the webhook behaves as if they were not specified (no error is generated and the webhook continues to generate data).

Note that for error responses `error` and `code` are the only fields that are typed differently from the success response.

`error`

`true`

`code`

`"INVALID_FILTERS" | "INVALID_HOOK"`

Additional error codes may be introduced, and will not be considered a breaking change.

In addition `INTERNAL_ERROR` can be returned if an internal error is encountered

`actionMetadata`

[`Webhooks action`](https://airtable.com/developers/web/api/model/webhooks-action)

The action responsible for the change. We may add additional sources or source metadata in the future and this will not be considered a breaking change. API consumers are expected to handle unknown sources gracefully.

`baseTransactionNumber`

`number`

A number which can be used to determine all changes within a transaction.

`payloadFormat`

`"v0"`

The payload format's version number. This is currently just v0, but it may be increased in the future for breaking payload changes.

`timestamp`

`string`

The time the action occurred.

`changedTablesById`

`optional<``object``>`

|     |     |
| --- | --- |
| `key: string` | [`Webhooks table changed`](https://airtable.com/developers/web/api/model/webhooks-table-changed) |

`createdTablesById`

`optional<``object``>`

|     |     |
| --- | --- |
| `key: string` | [`Webhooks table created`](https://airtable.com/developers/web/api/model/webhooks-table-created) |

`destroyedTableIds`

`optional<``array of strings``>`

!!
