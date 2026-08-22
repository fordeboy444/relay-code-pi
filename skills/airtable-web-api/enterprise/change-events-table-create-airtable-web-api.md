# Change events table create - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/change-events-table-create
- **Summary:** Change events table create *   Change events data Table creation data that is unique to change events.

### Your browser version is not supported. Try our [desktop apps](https://www.airtable.com/downloads)
!

Alternatively, use the latest version of [Chrome](https://www.google.com/intl/en/chrome/browser/)
, [Firefox](http://www.mozilla.org/en-US/)
, Safari, or Edge instead.

Object

Change events table create
==========================

Models that reference this object:

*   [Change events data](https://airtable.com/developers/web/api/model/change-events-data)
    

  
`object`

Table creation data that is unique to change events. Generally combined with [webhooks table created](https://airtable.com/developers/web/api/model/webhooks-table-created)
.

`recordsMetadataById`

`optional<``object``>`

The below object is keyed with a string

`commentsById`

`optional<``object``>`

The below object is keyed with a string

`text`

`string`

The comment text itself. Note that this can contain the user mentioned in the text. See [user mentioned](https://airtable.com/developers/web/api/model/user-mentioned)
 for more.

`attachments`

`optional<``array of the below object``>`

A list of attachments on this comment. Each attachment includes a URL that expires 2 hours after being returned from the API.

`id`

`string`

Unique attachment id

`type`

`optional<``string``>`

Content type, e.g. "image/jpeg"

`filename`

`string`

Filename, e.g. "foo.jpg"

`url`

`string`

url, e.g. "[https://v5.airtableusercontent.com/foo](https://v5.airtableusercontent.com/foo)
".

URLs returned will expire 2 hours after being returned from our API. If you want to persist the attachments, we recommend downloading them instead of saving the URL. See [our support article](https://support.airtable.com/docs/airtable-attachment-url-behavior)
 for more information.

`height`

`optional<``number``>`

Height, in pixels (these may be available if the attachment is an image)

`size`

`optional<``number``>`

File size, in bytes

`width`

`optional<``number``>`

Width, in pixels (these may be available if the attachment is an image)

`thumbnails`

`optional<``object``>`

These small, large, and full thumbnails may be available if attachment is an image or document

`full`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`url` | `string`<br><br>These may be available if the attachment is an image or document. See notes under `url` about the lifetime of these URLs. |
| <br>`height` | `optional<``number``>` |
| <br>`width` | `optional<``number``>` |

`large`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`url` | `string`<br><br>These may be available if the attachment is an image or document. See notes under `url` about the lifetime of these URLs. |
| <br>`height` | `optional<``number``>` |
| <br>`width` | `optional<``number``>` |

`small`

`optional<``object``>`

|     |     |
| --- | --- |
| <br>`url` | `string`<br><br>These may be available if the attachment is an image or document. See notes under `url` about the lifetime of these URLs. |
| <br>`height` | `optional<``number``>` |
| <br>`width` | `optional<``number``>` |

!!
