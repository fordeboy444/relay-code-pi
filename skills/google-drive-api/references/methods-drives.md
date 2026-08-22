# Google Drive API — `drives` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `drives.create` — POST `drives`
- `drives.delete` — DELETE `drives/{driveId}`
- `drives.get` — GET `drives/{driveId}`
- `drives.hide` — POST `drives/{driveId}/hide`
- `drives.list` — GET `drives`
- `drives.unhide` — POST `drives/{driveId}/unhide`
- `drives.update` — PATCH `drives/{driveId}`

## drives.create

Creates a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

- **HTTP:** `POST`
- **Path:** `drives`
- **Full URL:** `https://www.googleapis.com/drive/v3/drives`
- **Request body:** `Drive`
- **Response:** `Drive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `requestId` | query | string | yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already… |


## drives.delete

Permanently deletes a shared drive for which the user is an `organizer`. The shared drive cannot contain any untrashed items. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

- **HTTP:** `DELETE`
- **Path:** `drives/{driveId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/drives/{driveId}`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | path | string | yes | The ID of the shared drive. |
| `allowItemDeletion` | query | boolean | no | Whether any items inside the shared drive should also be deleted. This option is only supported when `useDomainAdminAccess` is also set to `true`. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |


## drives.get

Gets a shared drive's metadata by ID. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

- **HTTP:** `GET`
- **Path:** `drives/{driveId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/drives/{driveId}`
- **Request body:** none
- **Response:** `Drive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | path | string | yes | The ID of the shared drive. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |


## drives.hide

Hides a shared drive from the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

- **HTTP:** `POST`
- **Path:** `drives/{driveId}/hide`
- **Full URL:** `https://www.googleapis.com/drive/v3/drives/{driveId}/hide`
- **Request body:** none
- **Response:** `Drive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | path | string | yes | The ID of the shared drive. |


## drives.list

Lists the user's shared drives. This method accepts the `q` parameter, which is a search query combining one or more search terms. For more information, see the [Search for shared drives](https://developers.google.com/workspace/drive/api/guides/search-shareddrives) guide.

- **HTTP:** `GET`
- **Path:** `drives`
- **Full URL:** `https://www.googleapis.com/drive/v3/drives`
- **Request body:** none
- **Response:** `DriveList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pageSize` | query | integer (int32) | no | Maximum number of shared drives to return per page. |
| `pageToken` | query | string | no | Page token for shared drives. |
| `q` | query | string | no | Query string for searching shared drives. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned. |


## drives.unhide

Restores a shared drive to the default view. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

- **HTTP:** `POST`
- **Path:** `drives/{driveId}/unhide`
- **Full URL:** `https://www.googleapis.com/drive/v3/drives/{driveId}/unhide`
- **Request body:** none
- **Response:** `Drive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | path | string | yes | The ID of the shared drive. |


## drives.update

Updates the metadata for a shared drive. For more information, see [Manage shared drives](https://developers.google.com/workspace/drive/api/guides/manage-shareddrives).

- **HTTP:** `PATCH`
- **Path:** `drives/{driveId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/drives/{driveId}`
- **Request body:** `Drive`
- **Response:** `Drive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `driveId` | path | string | yes | The ID of the shared drive. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs. |

