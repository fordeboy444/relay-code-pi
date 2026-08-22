# Webhooks notification - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/webhooks-notification
- **Summary:** Webhooks notification An object containing metadata about the most recent ping and whether or not it was successful.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Object

Webhooks notification
=====================

Endpoints that reference this object:

*   [List webhooks](https://airtable.com/developers/web/api/list-webhooks)
    

  
`any of the below objects`

An object containing metadata about the most recent ping and whether or not it was successful.

`success`

`false`

`error`

`object`

Object containing the error message.

|     |     |
| --- | --- |
| <br>`message` | `string` |

`completionTimestamp`

`string`

The time of the most recent notification.

`durationMs`

`number`

The roundtrip duration of the network call.

`retryNumber`

`number`

The number of times the notification was retried. (0 = first try)

`willBeRetried`

`boolean`

Whether or not Airtable will attempt to deliver a notification again.

|     |     |
| --- | --- |
| <br>`success` | `true` |
| <br>`completionTimestamp` | `string`<br><br>The time of the most recent notification. |
| <br>`durationMs` | `number`<br><br>The roundtrip duration of the network call. |
| <br>`retryNumber` | `number`<br><br>The number of times the notification was retried. (0 = first try) |

!!
