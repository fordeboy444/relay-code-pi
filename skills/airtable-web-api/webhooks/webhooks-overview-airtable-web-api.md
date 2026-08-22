# Webhooks overview - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/webhooks-overview
- **Summary:** Webhooks are a user-configurable way to get programmatic notifications when data is changed in an Airtable base.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Overview

Webhooks overview
=================

Webhooks are a user-configurable way to get programmatic notifications when data is changed in an Airtable base.

Note that we don't consider adding keys to response objects a breaking change, so the shape of objects may change without notice, but existing keys won't be changed or removed without notice.

### Endpoints

Airtable's Webhooks API currently contains the following endpoints:

*   [create webhook](https://airtable.com/developers/web/api/create-a-webhook)
    
*   [delete webhook](https://airtable.com/developers/web/api/delete-a-webhook)
    
*   [list webhooks](https://airtable.com/developers/web/api/list-webhooks)
    
*   [toggle notifications](https://airtable.com/developers/web/api/enable-disable-webhook-notifications)
    
*   [list webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
    
*   [refresh webhook](https://airtable.com/developers/web/api/refresh-a-webhook)
    

### Authorization

The webhooks API uses token-based [authentication](https://airtable.com/developers/web/api/authentication)
. Users will need to send the token in the Authorization header of all requests:

We currently support using personal access tokens and OAuth access tokens during the authentication process. Worth noting, OAuth integrations can only access their own webhooks and corresponding payloads.

The scope `webhook:manage` is always required for all webhooks API endpoints. Additionally, for [create webhook](https://airtable.com/developers/web/api/create-a-webhook)
 and [list webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
, extra scopes are required based on the [dataTypes](https://airtable.com/developers/web/api/model/webhooks-specification#filters-datatypes)
 of your webhook specification. `data.records:read` is required for `tableData`, and `schema.bases:read` is required for `tableFields` and `tableMetadata`.

Finally, please perform all requests to these endpoints server-side. **Client-side requests are not allowed** because they would expose the user's API token.

### Rate limits

The webhook API is subject to the same 5 requests per second per base as the REST API. If you exceed this rate, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.

### Webhook notification delivery

When a change that matches the webhook's specification occurs, we send a notification via a POST request to the relevant webhook's notification URL containing the base ID and the webhook ID. The request body contains a short JSON object of the form:

The recipient of this request should respond with an HTTP 200 or 204 status code and an empty response body. After successful delivery, the recipient of this notification is then responsible for requesting the contents of the updates from the API (using [list webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
) in a separate HTTP request.

A hash of the body contents using the hook's MAC secret is given in the X-Airtable-Content-MAC header. The recipient can verify this value by doing the following computation (in JavaScript, for example):

Notification pings are at-least-once. That is, we guarantee that for every change, one notification will be generated, but spurious notifications (when there are no new changes) are also possible. The client is responsible for determining when this is the case; each payload includes a transaction number, which is scoped to that webhook and sequentially increases, so the client can easily use this to determine if a message has already been processed. Note that pings may also be coalesced. If multiple changes occur in rapid succession, then we may generate only a single notification for them. Multiple new payloads can still be fetched from [list webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
.

If the notification ping fails in any way (if we can't connect to the remote service; it takes more than 25 seconds to connect, send the request, and receive the response; or it returns anything other than an HTTP 200 or 204 status code), we retry the ping up to 13 times with exponential backoff time starting at 10 seconds. This results in us retrying the ping for approximately one day. If the ping still does not succeed after 13 tries, we drop the ping and disable notifications for the webhook. The client will then have to use the [toggle notifications](https://airtable.com/developers/web/api/enable-disable-webhook-notifications)
 method in the API to start receiving pings again. Disabling notifications for the hook does not disable payload generation, so the client can “catch up” again after they've fixed their endpoint.

### Webhook expiration

To help you clean up your unused webhooks, webhooks created with personal access tokens or OAuth access tokens will expire and be disabled after 7 days.

Users can extend the webhook life while the webhook is still active by calling [refresh webhook](https://airtable.com/developers/web/api/refresh-a-webhook)
 or [list webhook payloads](https://airtable.com/developers/web/api/list-webhook-payloads)
. The webhook life will be extended for 7 days from the refresh time.

After a webhook has expired and been disabled, the webhook's metadata and past payloads can be accessed for an additional 7 days.

Webhooks created with User API keys will not expire, but are restricted to usage on Enterprise plan users, and can no longer be created.

!!
