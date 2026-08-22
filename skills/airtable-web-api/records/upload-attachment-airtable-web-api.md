# Upload attachment - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/upload-attachment
- **Summary:** post`https://content.airtable.com/v0/{baseId}/{recordId}/{attachmentFieldIdOrName}/uploadAttachment` Upload an attachment up to 5 MB to an attachment cell via the file bytes directly.

Records

Upload attachment
=================

post`https://content.airtable.com/v0/{baseId}/{recordId}/{attachmentFieldIdOrName}/uploadAttachment`

Upload an attachment up to 5 MB to an attachment cell via the file bytes directly.

To upload attachments above this size that are accessible by a public URL, they can be added using [https://airtable.com/developers/web/api/field-model#multipleattachment](https://airtable.com/developers/web/api/field-model#multipleattachment)

### Requirements

|     |     |
| --- | --- |
| Authentication | [Personal access token](https://airtable.com/developers/web/api/authentication#types-of-token)<br>, [OAuth integration](https://airtable.com/developers/web/api/authentication#types-of-token) |
| Scope | [data.records:write](https://airtable.com/developers/web/api/scopes#data-records-write) |
| User role | Base editor |
| Billing plans | All plans |

### Path parameters

|     |     |
| --- | --- |
| <br>`baseId` | `string` |
| <br>`recordId` | `string` |
| <br>`attachmentFieldIdOrName` | `string` |

### Request body

|     |     |
| --- | --- |
| <br>`contentType` | `string`<br><br>Content type, e.g. "image/jpeg" |
| <br>`file` | `string`<br><br>The base64 encoded string of the file to be uploaded. |
| <br>`filename` | `string`<br><br>Filename, e.g. "foo.jpg" |

### Response format

`id`

`string`

Record ID

`createdTime`

`string`

A date timestamp in the ISO format, eg:"2018-01-01T00:00:00.000Z"

`fields`

`object`

Cell values are keyed by field ID.

See [Cell Values](https://airtable.com/developers/web/api/field-model)
 for more information on cell value response types.

|     |     |
| --- | --- |
| `key: string` | [`Cell value`](https://airtable.com/developers/web/api/field-model) |

!!
