# Google Drive API — `teamdrives` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `teamdrives.create` — POST `teamdrives`
- `teamdrives.delete` — DELETE `teamdrives/{teamDriveId}`
- `teamdrives.get` — GET `teamdrives/{teamDriveId}`
- `teamdrives.list` — GET `teamdrives`
- `teamdrives.update` — PATCH `teamdrives/{teamDriveId}`

## teamdrives.create

Deprecated: Use `drives.create` instead.

- **HTTP:** `POST`
- **Path:** `teamdrives`
- **Full URL:** `https://www.googleapis.com/drive/v3/teamdrives`
- **Request body:** `TeamDrive`
- **Response:** `TeamDrive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `requestId` | query | string | yes | Required. An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exist… |


## teamdrives.delete

Deprecated: Use `drives.delete` instead.

- **HTTP:** `DELETE`
- **Path:** `teamdrives/{teamDriveId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/teamdrives/{teamDriveId}`
- **Request body:** none
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `teamDriveId` | path | string | yes | The ID of the Team Drive |


## teamdrives.get

Deprecated: Use `drives.get` instead.

- **HTTP:** `GET`
- **Path:** `teamdrives/{teamDriveId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/teamdrives/{teamDriveId}`
- **Request body:** none
- **Response:** `TeamDrive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `teamDriveId` | path | string | yes | The ID of the Team Drive |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. |


## teamdrives.list

Deprecated: Use `drives.list` instead.

- **HTTP:** `GET`
- **Path:** `teamdrives`
- **Full URL:** `https://www.googleapis.com/drive/v3/teamdrives`
- **Request body:** none
- **Response:** `TeamDriveList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pageSize` | query | integer (int32) | no | Maximum number of Team Drives to return. |
| `pageToken` | query | string | no | Page token for Team Drives. |
| `q` | query | string | no | Query string for searching Team Drives. |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned. |


## teamdrives.update

Deprecated: Use `drives.update` instead.

- **HTTP:** `PATCH`
- **Path:** `teamdrives/{teamDriveId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/teamdrives/{teamDriveId}`
- **Request body:** `TeamDrive`
- **Response:** `TeamDrive`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `teamDriveId` | path | string | yes | The ID of the Team Drive |
| `useDomainAdminAccess` | query | boolean | no | Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs. |

