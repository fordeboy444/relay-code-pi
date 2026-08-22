# Delete comment - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/delete-comment
- **Summary:** delete`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}/comments/{rowCommentId}` Deletes a comment from a record.

Comments

Delete comment
==============

delete`https://api.airtable.com/v0/{baseId}/{tableIdOrName}/{recordId}/comments/{rowCommentId}`

Deletes a comment from a record. Non-admin API users can only delete comments they have created. Enterprise Admins can delete any comment from a record.

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
| <br>`rowCommentId` | `string` |

### Response format

|     |     |
| --- | --- |
| <br>`id` | `string`<br><br>A comment ID |
| <br>`deleted` | `boolean` |

!!
