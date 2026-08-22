# Refresh a webhook - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/refresh-a-webhook
- **Summary:** post`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}/refresh` Extend the life of a webhook.

Webhooks

Refresh a webhook
=================

post`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}/refresh`

Extend the life of a webhook. The new expiration time will be 7 days after the refresh time.

Note that this endpoint only applies to active webhooks with an expiration time.

**Creator level permissions are required in order to refresh a webhook.**

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

### Response format

|     |     |
| --- | --- |
| <br>`expirationTime` | `string \| null`<br><br>The new time when the webhook will expire and be disabled in the ISO format. |

!!
