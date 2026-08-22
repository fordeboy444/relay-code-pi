# Create a webhook - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-a-webhook
- **Summary:** post`https://api.airtable.com/v0/bases/{baseId}/webhooks` Creates a new webhook in the specified base.

Webhooks

Create a webhook
================

post`https://api.airtable.com/v0/bases/{baseId}/webhooks`

Creates a new webhook in the specified base. Payloads may be generated and the notification URL (if given) will get a ping shortly after this completes.

The number of webhooks per base is limited to 10. A single OAuth integration can create up to 2 webhooks per base.

Each webhook created with OAuth or personal access token will expire and be disabled after 7 days. The webhook life can be extended while it is still active by calling [refresh webhook](https://airtable.com/developers/web/api/refresh-a-webhook)
 or [list webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
. After a webhook has expired and been disabled, the webhook's metadata and past payloads can be accessed for an additional 7 days.

**Creator level permissions are required in order to register a webhook.**

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | Scopes depend on the subscribed [dataTypes](https://airtable.com/developers/web/api/model/webhooks-specification#filters-datatypes)<br>, more details [here](https://airtable.com/developers/web/api/webhooks-overview#authorization) |
| User role | Base creator |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |

### Request body

`notificationUrl`

`optional<``string``>`

An optional url that can receive notification pings. [See notification delivery](https://airtable.com/developers/web/api/webhooks-overview#webhook-notification-delivery)
.

`specification`

`object`

A JSON object that describe the types of changes the webhook is interested in.

|     |     |
| --- | --- |
| <br>`options` | [`Webhooks specification`](https://airtable.com/developers/web/api/model/webhooks-specification) |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>An identifier for the webhook (WebhookId). |
| <br>`macSecretBase64` | `string`<br><br>A MAC secret. The client should store this value to authenticate webhook pings. There is no way to retrieve this value after the initial creation of the webhook. |
| <br>`expirationTime` | `optional<``string``>`<br><br>The time when the webhook expires and is disabled in the ISO format. The webhook will not expire if this is null (in the case User API keys are used) |

!!
