# Enable/disable webhook notifications - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/enable-disable-webhook-notifications
- **Summary:** Enable/disable webhook notifications post`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}/enableNotifications` Enables or disables notification pings for a webhook.

Webhooks

Enable/disable webhook notifications
====================================

post`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}/enableNotifications`

Enables or disables notification pings for a webhook. See [notification delivery](https://airtable.com/developers/web/api/webhooks-overview#webhook-notification-delivery)
.

**Creator level permissions are required in order to enable or disable webhook notification pings.**

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`webhook:manage`](https://airtable.com/developers/web/api/scopes#webhook-manage) |
| User role | Base creator |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`webhookId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`enable` | `boolean` |

### Response format

This endpoint returns an empty response on success.

!!
