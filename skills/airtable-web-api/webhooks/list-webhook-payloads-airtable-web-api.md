# List webhook payloads - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-webhook-payloads
- **Summary:** List webhook payloads get`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}/payloads` Enumerate the update messages for a client to consume.

Webhooks

List webhook payloads
=====================

get`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}/payloads`

Enumerate the update messages for a client to consume. Clients should call this after they receive a ping.

The webhook payload format can be found [here](https://airtable.com/developers/web/api/model/webhooks-payload)
 and uses [V2 cell value format](https://airtable.com/developers/web/api/field-model)
.

Calling this endpoint will also extend the life of the webhook if it is active with an expiration time. The new expiration time will be 7 days after the list payloads call.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | Scopes depend on the subscribed [dataTypes](https://airtable.com/developers/web/api/model/webhooks-specification#filters-datatypes)<br>, more details [here](https://airtable.com/developers/web/api/webhooks-overview#authorization) |
| User role | Base read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`webhookId` | `string` |

### Query parameters

|     |     |
| --- | --- |
| <br>`cursor` | `optional<``number``>`<br><br>The first time this action is called, the cursor argument may be omitted from the request and will default to 1. After that, cursors should be saved between invocations of this action. When a client receives a ping, it should use the last cursor that this action returned when polling for new payloads, no matter how old that cursor value is. The cursor argument indicates the transaction number of the payload to start listing from. |
| <br>`limit` | `optional<``number``>`<br><br>If given the limit parameter specifies the maximum number of payloads to return in the response. A maximum of 50 payloads can be returned in a single request. A single payload can contain multiple updates. |

### Response format

|     |     |
| --- | --- |
| <br>`cursor` | `number`<br><br>The cursor field in the response indicates the transaction number of the payload that would immediately follow the last payload returned in this request. Payloads are returned in transaction order, so the last payload's transaction number is (cursor-1), the second-to-last payload's transaction number is (cursor-2), and so on. Each payload is associated with an incrementing cursor number. If there are no returned payloads, then the cursor in the response will be the same as the cursor specified in the request. The number of the next payload to be generated can be retrieved from cursorForNextPayload in [list webhooks](https://airtable.com/developers/web/api/list-webhooks)<br>. Payloads are deleted from Airtable's servers after 1 week whether or not the client has seen them. The cursor value for the next payload is never reset, even if payloads are deleted. |
| <br>`mightHaveMore` | `boolean`<br><br>Indicates whether or not there are additional payloads. If mightHaveMore is true, the client should send another request immediately and pass in the cursor from this response, as there could be more payloads. If mightHaveMore is false, there are definitely no more payloads. |
| <br>`payloads` | ``array of [`Webhooks payloads`](https://airtable.com/developers/web/api/model/webhooks-payload) `` |

!!
