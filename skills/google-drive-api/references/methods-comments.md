# Google Drive API — `comments` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `comments.create` — POST `files/{fileId}/comments`
- `comments.delete` — DELETE `files/{fileId}/comments/{commentId}`
- `comments.get` — GET `files/{fileId}/comments/{commentId}`
- `comments.list` — GET `files/{fileId}/comments`
- `comments.update` — PATCH `files/{fileId}/comments/{commentId}`

## comments.create

Creates a comment on a file. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

- **HTTP:** `POST`
- **Path:** `files/{fileId}/comments`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments`
- **Request body:** `Comment`
- **Response:** `Comment`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |


## comments.delete

Deletes a comment. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments).

- **HTTP:** `DELETE`
- **Path:** `files/{fileId}/comments/{commentId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |


## comments.get

Gets a comment by ID. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/comments/{commentId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}`
- **Request body:** none
- **Response:** `Comment`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |
| `includeDeleted` | query | boolean | no | Whether to return deleted comments. Deleted comments will not include their original content. |


## comments.list

Lists a file's comments. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/comments`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments`
- **Request body:** none
- **Response:** `CommentList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `includeDeleted` | query | boolean | no | Whether to include deleted comments. Deleted comments will not include their original content. |
| `pageSize` | query | integer (int32) | no | The maximum number of comments to return per page. |
| `pageToken` | query | string | no | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |
| `startModifiedTime` | query | string | no | The minimum value of 'modifiedTime' for the result comments (RFC 3339 date-time). |


## comments.update

Updates a comment with patch semantics. For more information, see [Manage comments and replies](https://developers.google.com/workspace/drive/api/guides/manage-comments). Required: The `fields` parameter must be set. To return the exact fields you need, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter).

- **HTTP:** `PATCH`
- **Path:** `files/{fileId}/comments/{commentId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/comments/{commentId}`
- **Request body:** `Comment`
- **Response:** `Comment`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `commentId` | path | string | yes | The ID of the comment. |
| `fileId` | path | string | yes | The ID of the file. |

