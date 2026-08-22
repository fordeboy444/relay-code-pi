# Create comment - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/create-comment
- **Summary:** post`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}/comments` Creates a comment on a record.

Comments

Create comment
==============

post`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}/comments`

Creates a comment on a record. [User mentioned](https://airtable.com/developers/web/api/model/user-mentioned)
 is supported.

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [`data.recordComments:write`](https://airtable.com/developers/web/api/scopes#data-record-comments-write) |
| User role | Base commenter |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`tableIdOrName` | `string` |
| <br>`recordId` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`parentCommentId` | `optional<``string``>`<br><br>A comment ID |
| <br>`text` | `string` |

### Response format

`id`

`string`

A comment ID

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`lastUpdatedTime`

`string | null`

A date timestamp in the ISO format, eg: `"2018-01-01T00:00:00.000Z"`, or null if this comment has not been updated since creation.

`text`

`string`

The comment text itself. Note that this can contain the user mentioned in the text. See [user mentioned](https://airtable.com/developers/web/api/model/user-mentioned)
 for more.

`parentCommentId`

`optional<``string``>`

The comment ID of the parent comment, if this comment is a threaded reply.

`mentioned`

`optional<``object``>`

|     |     |
| --- | --- |
| `key: string` | [`User mentioned`](https://airtable.com/developers/web/api/model/user-mentioned) |

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

`reactions`

`optional<``array of the below object``>`

A list of reactions on this comment. Each entry contains information about the emoji itself, along with metadata about the user who reacted.

`emoji`

`object`

|     |     |
| --- | --- |
| <br>`unicodeCharacter` | `string` |

`reactingUser`

`object`

|     |     |
| --- | --- |
| <br>`userId` | `string`<br><br>A user ID |
| <br>`email` | `string` |
| <br>`name` | `optional<``string``>` |

`author`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A user ID |
| <br>`email` | `string` |
| <br>`name` | `optional<``string``>` |

!!
