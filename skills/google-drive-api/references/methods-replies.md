# Google Drive API — `replies` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `replies.create` — POST `files/{fileId}/comments/{commentId}/replies`
- `replies.delete` — DELETE `files/{fileId}/comments/{commentId}/replies/{replyId}`
- `replies.get` — GET `files/{fileId}/comments/{commentId}/replies/{replyId}`
- `replies.list` — GET `files/{fileId}/comments/{commentId}/replies`
- `replies.update` — PATCH `files/{fileId}/comments/{commentId}/replies/{replyId}`

## replies.create

Creates a reply to a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

- **HTTP:** `POST`
- **Path:** `files/{fileId}/comments/{commentId}/replies`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies`
- **Request body:** `Reply`
- **Response:** `Reply`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |


## replies.delete

Deletes a reply. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

- **HTTP:** `DELETE`
- **Path:** `files/{fileId}/comments/{commentId}/replies/{replyId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |
| `replyId` | path | string | yes | The ID of the reply. |


## replies.get

Gets a reply by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/comments/{commentId}/replies/{replyId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}`
- **Request body:** none
- **Response:** `Reply`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |
| `replyId` | path | string | yes | The ID of the reply. |
| `includeDeleted` | query | boolean | no | Whether to return deleted replies. Deleted replies don't include their original content. |


## replies.list

Lists a comment's replies. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/comments/{commentId}/replies`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies`
- **Request body:** none
- **Response:** `ReplyList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |
| `includeDeleted` | query | boolean | no | Whether to include deleted replies. Deleted replies don't include their original content. |
| `pageSize` | query | integer (int32) | no | The maximum number of replies to return per page. |
| `pageToken` | query | string | no | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |


## replies.update

Updates a reply with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

- **HTTP:** `PATCH`
- **Path:** `files/{fileId}/comments/{commentId}/replies/{replyId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}/replies/{replyId}`
- **Request body:** `Reply`
- **Response:** `Reply`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |
| `replyId` | path | string | yes | The ID of the reply. |

