# Google Drive API — `changes` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `changes.getStartPageToken` — GET `changes/startPageToken`
- `changes.list` — GET `changes`
- `changes.watch` — POST `changes/watch`

## changes.getStartPageToken

Gets the starting pageToken for listing future changes. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

- **HTTP:** `GET`
- **Path:** `changes/startPageToken`
- **Full URL:** `https://www.googleapis.com/drive/v3/changes/startPageToken`
- **Request body:** none
- **Response:** `StartPageToken`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | query | string | no | The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `teamDriveId` | query | string | no | Deprecated: Use `driveId` instead. |


## changes.list

Lists the changes for a user or shared drive. For more information, see [Retrieve changes](https://developers.google.com/workspace/drive/api/guides/manage-changes).

- **HTTP:** `GET`
- **Path:** `changes`
- **Full URL:** `https://www.googleapis.com/drive/v3/changes`
- **Request body:** none
- **Response:** `ChangeList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | query | string | no | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |
| `includeCorpusRemovals` | query | boolean | no | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `includeItemsFromAllDrives` | query | boolean | no | Whether both My Drive and shared drive items should be included in results. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `includeRemoved` | query | boolean | no | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `includeTeamDriveItems` | query | boolean | no | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `pageSize` | query | integer (int32) | no | The maximum number of changes to return per page. |
| `pageToken` | query | string | yes | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. |
| `restrictToMyDrive` | query | boolean | no | Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. |
| `spaces` | query | string | no | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `teamDriveId` | query | string | no | Deprecated: Use `driveId` instead. |


## changes.watch

Subscribes to changes for a user. For more information, see [Notifications for resource changes](https://developers.google.com/workspace/drive/api/guides/push).

- **HTTP:** `POST`
- **Path:** `changes/watch`
- **Full URL:** `https://www.googleapis.com/drive/v3/changes/watch`
- **Request body:** `Channel`
- **Response:** `Channel`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | query | string | no | The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier. |
| `includeCorpusRemovals` | query | boolean | no | Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file. |
| `includeItemsFromAllDrives` | query | boolean | no | Whether both My Drive and shared drive items should be included in results. |
| `includeLabels` | query | string | no | A comma-separated list of IDs of labels to include in the `labelInfo` part of the response. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only 'published' is supported. |
| `includeRemoved` | query | boolean | no | Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access. |
| `includeTeamDriveItems` | query | boolean | no | Deprecated: Use `includeItemsFromAllDrives` instead. |
| `pageSize` | query | integer (int32) | no | The maximum number of changes to return per page. |
| `pageToken` | query | string | yes | The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method. |
| `restrictToMyDrive` | query | boolean | no | Whether to restrict the results to changes inside the My Drive hierarchy. This omits changes to files such as those in the Application Data folder or shared files which have not been added to My Drive. |
| `spaces` | query | string | no | A comma-separated list of spaces to query within the corpora. Supported values are 'drive' and 'appDataFolder'. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `teamDriveId` | query | string | no | Deprecated: Use `driveId` instead. |

