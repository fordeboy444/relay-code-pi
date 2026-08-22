# Google Drive API — `files` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `files.copy` — POST `files/{fileId}/copy`
- `files.create` — POST `files`
- `files.delete` — DELETE `files/{fileId}`
- `files.download` — POST `files/{fileId}/download`
- `files.emptyTrash` — DELETE `files/trash`
- `files.export` — GET `files/{fileId}/export`
- `files.generateCseToken` — GET `files/generateCseToken`
- `files.generateIds` — GET `files/generateIds`
- `files.get` — GET `files/{fileId}`
- `files.list` — GET `files`
- `files.listLabels` — GET `files/{fileId}/listLabels`
- `files.modifyLabels` — POST `files/{fileId}/modifyLabels`
- `files.update` — PATCH `files/{fileId}`
- `files.watch` — POST `files/{fileId}/watch`

## files.copy

Creates a copy of a file and applies any requested updates with patch semantics. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).

- **HTTP:** `POST`
- **Path:** `files/{fileId}/copy`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/copy`
- **Request body:** `File`
- **Response:** `File`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `enforceSingleParent` | query | boolean | no | Deprecated: Copying files into multiple folders is no longer supported. Use shortcuts instead. |
| `ignoreDefaultVisibility` | query | boolean | no | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `keepRevisionForever` | query | boolean | no | Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `ocrLanguage` | query | string | no | A language hint for OCR processing during image import (ISO 639-1 code). |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |


## files.create

Creates a file. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file). This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads). Apps creating shortcuts with the `create` method must specify the MIME type `application/vnd.google-apps.shortcut`. Apps should specify a file extension in the `name` property when inserting files with the API. For example, an operation to insert a JPEG file should specify something like `"name": "cat.jpg"` in the metadata. Subsequent `GET` requests include the read-only `fileExtension` property populated with the extension originally specified in the `name` property. When a Google Drive user requests to download a file, or when the file is downloaded through the sync client, Drive builds a full filename (with extension) based on the name. In cases where the extension is missing, Drive attempts to determine the extension based on the file's MIME type.

- **HTTP:** `POST`
- **Path:** `files`
- **Full URL:** `https://www.googleapis.com/drive/v3/files`
- **Request body:** `File`
- **Response:** `File`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `enforceSingleParent` | query | boolean | no | Deprecated: Creating files in multiple folders is no longer supported. |
| `ignoreDefaultVisibility` | query | boolean | no | Whether to ignore the domain's default visibility settings for the created file. Domain administrators can choose to make all uploaded files visible to the domain by default; this parameter bypasses that behavior for the request. Permissions are still inherited from parent folders. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `keepRevisionForever` | query | boolean | no | Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `ocrLanguage` | query | string | no | A language hint for OCR processing during image import (ISO 639-1 code). |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `useContentAsIndexableText` | query | boolean | no | Whether to use the uploaded content as indexable text. |


## files.delete

Permanently deletes a file owned by the user without moving it to the trash. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete). If the file belongs to a shared drive, the user must be an `organizer` on the parent folder. If the target is a folder, all descendants owned by the user are also deleted.

- **HTTP:** `DELETE`
- **Path:** `files/{fileId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `enforceSingleParent` | query | boolean | no | Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |


## files.download

Downloads the content of a file. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Operations are valid for 24 hours from the time of creation.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/download`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/download`
- **Request body:** none
- **Response:** `Operation`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | Required. The ID of the file to download. |
| `mimeType` | query | string | no | Optional. The MIME type the file should be downloaded as. This field can only be set when downloading Google Workspace documents. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats). If not set, a Google Workspac… |
| `revisionId` | query | string | no | Optional. The revision ID of the file to download. This field can only be set when downloading blob files, Google Docs, and Google Sheets. Returns `INVALID_ARGUMENT` if downloading a specific revision on the file is unsupported. |


## files.emptyTrash

Permanently deletes all of the user's trashed files. For more information, see [Trash or delete files and folders](https://developers.google.com/workspace/drive/api/guides/delete).

- **HTTP:** `DELETE`
- **Path:** `files/trash`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/trash`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | query | string | no | If set, empties the trash of the provided shared drive. |
| `enforceSingleParent` | query | boolean | no | Deprecated: If an item isn't in a shared drive and its last parent is deleted but the item itself isn't, the item will be placed under its owner's root. |


## files.export

Exports a Google Workspace document to the requested MIME type and returns exported byte content. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads). Note that the exported content is limited to 10 MB.

- **HTTP:** `GET`
- **Path:** `files/{fileId}/export`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/export`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `mimeType` | query | string | yes | Required. The MIME type of the format requested for this export. For a list of supported MIME types, see [Export MIME types for Google Workspace documents](/workspace/drive/api/guides/ref-export-formats). |


## files.generateCseToken

Generates a CSE token which can be used to create or update CSE files.

- **HTTP:** `GET`
- **Path:** `files/generateCseToken`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/generateCseToken`
- **Request body:** none
- **Response:** `GenerateCseTokenResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | query | string | no | The ID of the file for which the JWT should be generated. If not provided, an id will be generated. |
| `parent` | query | string | no | The ID of the expected parent of the file. Used when generating a JWT for a new CSE file. If specified, the parent will be fetched, and if the parent is a shared drive item, the shared drive's policy will be used to determine the KACLS that should be used. It is invalid to specify both file_id and… |


## files.generateIds

Generates a set of file IDs which can be provided in create or copy requests. For more information, see [Create and manage files](https://developers.google.com/workspace/drive/api/guides/create-file).

- **HTTP:** `GET`
- **Path:** `files/generateIds`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/generateIds`
- **Request body:** none
- **Response:** `GeneratedIds`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `count` | query | integer (int32) | no | The number of IDs to return. |
| `space` | query | string | no | The space in which the IDs can be used to create files. Supported values are `drive` and `appDataFolder`. (Default: `drive`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). |
| `type` | query | string | no | The type of items which the IDs can be used for. Supported values are `files` and `shortcuts`. Note that `shortcuts` are only supported in the `drive` `space`. (Default: `files`.) For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file… |


## files.get

Gets a file's metadata or content by ID. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). If you provide the URL parameter `alt=media`, then the response includes the file contents in the response body. Downloading content with `alt=media` only works if the file is stored in Drive. To download Google Docs, Sheets, and Slides use [`files.export`](https://developers.google.com/workspace/drive/api/reference/rest/v3/files/export) instead. For more information, see [Download and export files](https://developers.google.com/workspace/drive/api/guides/manage-downloads).

- **HTTP:** `GET`
- **Path:** `files/{fileId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}`
- **Request body:** none
- **Response:** `File`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `acknowledgeAbuse` | query | boolean | no | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |


## files.list

Lists the user's files. For more information, see [Search for files and folders](https://developers.google.com/workspace/drive/api/guides/search-files). This method accepts the `q` parameter, which is a search query combining one or more search terms. This method returns *all* files by default, including trashed files. If you don't want trashed files to appear in the list, use the `trashed=false` query parameter to remove trashed files from the results.

- **HTTP:** `GET`
- **Path:** `files`
- **Full URL:** `https://www.googleapis.com/drive/v3/files`
- **Request body:** none
- **Response:** `FileList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `corpora` | query | string | no | Specifies a collection of items (files or documents) to which the query applies. Supported items include: * `user` * `domain` * `drive` * `allDrives` Prefer `user` or `drive` to `allDrives` for efficiency. By default, corpora is set to `user`. However, this can change depending on the filter set th… |
| `corpus` | query | string (enum) | no | Deprecated: The source of files to list. Use `corpora` instead. |
| `driveId` | query | string | no | ID of the shared drive to search. |
| `includeItemsFromAllDrives` | query | boolean | no | Whether both My Drive and shared drive items should be included in results. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `includeTeamDriveItems` | query | boolean | no | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `orderBy` | query | string | no | A comma-separated list of sort keys. Valid keys are: * `createdTime`: When the file was created. Avoid using this key for queries on large item collections as it might result in timeouts or other issues. For time-related sorting on large item collections, use `modifiedTime desc` instead. * `folder`… |
| `pageSize` | query | integer (int32) | no | The maximum number of files to return per page. Pages may be partial or empty even before reaching the end of the file list. If unspecified, at most 100 files are returned for shared drives, and the entire list of files for non-shared drives. The maximum value is 100; values above 100 are changed t… |
| `pageToken` | query | string | no | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |
| `q` | query | string | no | A query for filtering the file results. For supported syntax, see [Search for files and folders](/workspace/drive/api/guides/search-files). |
| `spaces` | query | string | no | A comma-separated list of spaces to query within the corpora. Supported values are `drive` and `appDataFolder`. For more information, see [File organization](https://developers.google.com/workspace/drive/api/guides/about-files#file-organization). |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `teamDriveId` | query | string | no | Deprecated: Use `driveId` instead. |

**`corpus` enum values:**

- `domain` — Files shared to the user's domain.
- `user` — Files owned by or shared to the user.


## files.listLabels

Lists the labels on a file. For more information, see [List labels on a file](https://developers.google.com/workspace/drive/api/guides/list-labels).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/listLabels`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/listLabels`
- **Request body:** none
- **Response:** `LabelList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID for the file. |
| `maxResults` | query | integer (int32) | no | The maximum number of labels to return per page. When not set, defaults to 100. |
| `pageToken` | query | string | no | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |


## files.modifyLabels

Modifies the set of labels applied to a file. For more information, see [Set a label field on a file](https://developers.google.com/workspace/drive/api/guides/set-label). Returns a list of the labels that were added or modified.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/modifyLabels`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/modifyLabels`
- **Request body:** `ModifyLabelsRequest`
- **Response:** `ModifyLabelsResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file to which the labels belong. |


## files.update

Updates a file's metadata, content, or both. When calling this method, only populate fields in the request that you want to modify. When updating fields, some fields might be changed automatically, such as `modifiedDate`. This method supports patch semantics. This method supports an */upload* URI and accepts uploaded media with the following characteristics: - *Maximum file size:* 5,120 GB - *Accepted Media MIME types:* `*/*` (Specify a valid MIME type, rather than the literal `*/*` value. The literal `*/*` is only used to indicate that any valid MIME type can be uploaded. For more information, see [Google Workspace and Google Drive supported MIME types](https://developers.google.com/workspace/drive/api/guides/mime-types).) For more information on uploading files, see [Upload file data](https://developers.google.com/workspace/drive/api/guides/manage-uploads).

- **HTTP:** `PATCH`
- **Path:** `files/{fileId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}`
- **Request body:** `File`
- **Response:** `File`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `addParents` | query | string | no | A comma-separated list of parent IDs to add. |
| `enforceSingleParent` | query | boolean | no | Deprecated: Adding files to multiple folders is no longer supported. Use shortcuts instead. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `keepRevisionForever` | query | boolean | no | Whether to set the `keepForever` field in the new head revision. This is only applicable to files with binary content in Google Drive. Only 200 revisions for the file can be kept forever. If the limit is reached, try deleting pinned revisions. |
| `ocrLanguage` | query | string | no | A language hint for OCR processing during image import (ISO 639-1 code). |
| `removeParents` | query | string | no | A comma-separated list of parent IDs to remove. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `useContentAsIndexableText` | query | boolean | no | Whether to use the uploaded content as indexable text. |


## files.watch

Subscribes to changes to a file. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

- **HTTP:** `POST`
- **Path:** `files/{fileId}/watch`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/watch`
- **Request body:** `Channel`
- **Response:** `Channel`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `acknowledgeAbuse` | query | boolean | no | Whether the user is acknowledging the risk of downloading known malware or other abusive files. This is only applicable when the `alt` parameter is set to `media` and the user is the owner of the file or an organizer of the shared drive in which the file resides. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |

