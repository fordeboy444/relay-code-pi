# Google Drive API — `permissions` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `permissions.create` — POST `files/{fileId}/permissions`
- `permissions.delete` — DELETE `files/{fileId}/permissions/{permissionId}`
- `permissions.get` — GET `files/{fileId}/permissions/{permissionId}`
- `permissions.list` — GET `files/{fileId}/permissions`
- `permissions.update` — PATCH `files/{fileId}/permissions/{permissionId}`

## permissions.create

Creates a permission for a file or shared drive. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/permissions`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/permissions`
- **Request body:** `Permission`
- **Response:** `Permission`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file or shared drive. |
| `emailMessage` | query | string | no | A plain text custom message to include in the notification email. |
| `enforceExpansiveAccess` | query | boolean | no | Deprecated: All requests use the expansive access rules. |
| `enforceSingleParent` | query | boolean | no | Deprecated: See `moveToNewOwnersRoot` for details. |
| `moveToNewOwnersRoot` | query | boolean | no | This parameter only takes effect if the item isn't in a shared drive and the request is attempting to transfer the ownership of the item. If set to `true`, the item is moved to the new owner's My Drive root folder and all prior parents removed. If set to `false`, parents aren't changed. |
| `sendNotificationEmail` | query | boolean | no | Whether to send a notification email when sharing to users or groups. This defaults to `true` for users and groups, and is not allowed for other requests. It must not be disabled for ownership transfers. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `transferOwnership` | query | boolean | no | Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. For more information, see [Transfer file ownership](https://developers.google.com/workspace/drive/api/guides/transfer-file). |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more infor… |


## permissions.delete

Deletes a permission. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

- **HTTP:** `DELETE`
- **Path:** `files/{fileId}/permissions/{permissionId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file or shared drive. |
| `permissionId` | path | string | yes | The ID of the permission. |
| `enforceExpansiveAccess` | query | boolean | no | Deprecated: All requests use the expansive access rules. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more infor… |


## permissions.get

Gets a permission by ID. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/permissions/{permissionId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}`
- **Request body:** none
- **Response:** `Permission`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file. |
| `permissionId` | path | string | yes | The ID of the permission. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more infor… |


## permissions.list

Lists a file's or shared drive's permissions. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/permissions`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/permissions`
- **Request body:** none
- **Response:** `PermissionList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file or shared drive. |
| `includePermissionsForView` | query | string | no | Specifies which additional view's permissions to include in the response. Only `published` is supported. |
| `pageSize` | query | integer (int32) | no | The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned. |
| `pageToken` | query | string | no | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from the previous response. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more infor… |


## permissions.update

Updates a permission with patch semantics. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). **Warning:** Concurrent permissions operations on the same file aren't supported; only the last update is applied.

- **HTTP:** `PATCH`
- **Path:** `files/{fileId}/permissions/{permissionId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/permissions/{permissionId}`
- **Request body:** `Permission`
- **Response:** `Permission`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | The ID of the file or shared drive. |
| `permissionId` | path | string | yes | The ID of the permission. |
| `enforceExpansiveAccess` | query | boolean | no | Deprecated: All requests use the expansive access rules. |
| `removeExpiration` | query | boolean | no | Whether to remove the expiration date. |
| `supportsAllDrives` | query | boolean | no | Whether the requesting application supports both My Drives and shared drives. |
| `supportsTeamDrives` | query | boolean | no | Deprecated: Use `supportsAllDrives` instead. |
| `transferOwnership` | query | boolean | no | Whether to transfer ownership to the specified user and downgrade the current owner to a writer. This parameter is required as an acknowledgement of the side effect. For more information, see [Transfer file ownership](https://developers.google.com//workspace/drive/api/guides/transfer-file). |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator. If set to `true`, and if the following additional conditions are met, the requester is granted access: 1. The file ID parameter refers to a shared drive. 2. The requester is an administrator of the domain to which the shared drive belongs. For more infor… |

