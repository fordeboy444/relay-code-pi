# Google Drive API — `revisions` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `revisions.delete` — DELETE `files/{fileId}/revisions/{revisionId}`
- `revisions.get` — GET `files/{fileId}/revisions/{revisionId}`
- `revisions.list` — GET `files/{fileId}/revisions`
- `revisions.update` — PATCH `files/{fileId}/revisions/{revisionId}`

## revisions.delete

Permanently deletes a file version. You can only delete revisions for files with binary content in Google Drive, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted. For more information, see [Manage file revisions](https://developers.google.com/drive/api/guides/manage-revisions).

- **HTTP:** `DELETE`
- **Path:** `files/{fileId}/revisions/{revisionId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `revisionId` | path | string | yes | The ID of the revision. |


## revisions.get

Gets a revision's metadata or content by ID. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/revisions/{revisionId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}`
- **Request body:** none
- **Response:** `Revision`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `revisionId` | path | string | yes | The ID of the revision. |
| `acknowledgeAbuse` | query | boolean | no | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |


## revisions.list

Lists a file's revisions. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions). **Important:** The list of revisions returned by this method might be incomplete for files with a large revision history, including frequently edited Google Docs, Sheets, and Slides. Older revisions might be omitted from the response, meaning the first revision returned may not be the oldest existing revision. The revision history visible in the Workspace editor user interface might be more complete than the list returned by the API.

- **HTTP:** `GET`
- **Path:** `files/{fileId}/revisions`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/revisions`
- **Request body:** none
- **Response:** `RevisionList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `pageSize` | query | integer (int32) | no | The maximum number of revisions to return per page. |
| `pageToken` | query | string | no | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response. |


## revisions.update

Updates a revision with patch semantics. For more information, see [Manage file revisions](https://developers.google.com/workspace/drive/api/guides/manage-revisions).

- **HTTP:** `PATCH`
- **Path:** `files/{fileId}/revisions/{revisionId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/revisions/{revisionId}`
- **Request body:** `Revision`
- **Response:** `Revision`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `revisionId` | path | string | yes | The ID of the revision. |

