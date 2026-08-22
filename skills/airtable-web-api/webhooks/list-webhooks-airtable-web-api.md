# List webhooks - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/list-webhooks
- **Summary:** get`https://api.airtable.com/v0/bases/{baseId}/webhooks` Lists all webhooks that are registered for a base, along with their statuses. **Read level permissions are required in order to list webhooks.** | Scope | webhook:manage | An identifier for the webhook (WebhookId).

Webhooks

List webhooks
=============

get`https://api.airtable.com/v0/bases/{baseId}/webhooks`

Lists all webhooks that are registered for a base, along with their statuses.

**Read level permissions are required in order to list webhooks.**

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [webhook:manage](https://airtable.com/developers/web/api/scopes#webhook-manage) |
| User role | Base read-only |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |

### Response format

`webhooks`

`array of the below object`

`id`

`string`

An identifier for the webhook (WebhookId).

`areNotificationsEnabled`

`boolean`

Whether or not notifications are enabled for the webhook.

`cursorForNextPayload`

`number`

The cursor associated with the next payload that will be generated. This cursor will increase every time a new payload is generated for this webhook.

`isHookEnabled`

`boolean`

Whether or not the webhook is enabled. Webhooks may be turned off automatically such as when the specification becomes invalid. [See error codes](https://airtable.com/developers/web/api/model/webhooks-payload)
.

`lastSuccessfulNotificationTime`

`string | null`

An identifier for the created webhook.

`notificationUrl`

`string | null`

The url registered with the webhook. May be null if none was given.

`expirationTime`

`optional<``string``>`

The time when the webhook expires and is disabled in the ISO format. The webhook will not expire if this is null (in the case User API keys are used)

`lastNotificationResult`

``[`Webhooks notification`](https://airtable.com/developers/web/api/model/webhooks-notification)  | null``

`specification`

`object`

The specification registered with the webhook.

|     |     |
| --- | --- |
| <br>`options` | [`Webhooks specification`](https://airtable.com/developers/web/api/model/webhooks-specification) |

!!
