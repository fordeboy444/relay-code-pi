# Delete a webhook - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-a-webhook
- **Summary:** delete`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}`

Webhooks

Delete a webhook
================

delete`https://api.airtable.com/v0/bases/{baseId}/webhooks/{webhookId}`

Deletes a webhook.

**Creator level permissions are required in order to delete a webhook.**

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

This endpoint returns an empty response on success.

!!
