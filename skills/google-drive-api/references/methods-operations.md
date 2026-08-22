# Google Drive API — `operations` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `operations.get` — GET `operations/{name}`

## operations.get

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

- **HTTP:** `GET`
- **Path:** `operations/{name}`
- **Full URL:** `https://www.googleapis.com/drive/v3/operations/{name}`
- **Request body:** none
- **Response:** `Operation`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | string | yes | The name of the operation resource. |

