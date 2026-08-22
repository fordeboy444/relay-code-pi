# Google Drive API — `accessproposals` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `accessproposals.get` — GET `files/{fileId}/accessproposals/{proposalId}`
- `accessproposals.list` — GET `files/{fileId}/accessproposals`
- `accessproposals.resolve` — POST `files/{fileId}/accessproposals/{proposalId}:resolve`

## accessproposals.get

Retrieves an access proposal by ID. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/accessproposals/{proposalId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/accessproposals/{proposalId}`
- **Request body:** none
- **Response:** `AccessProposal`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | Required. The ID of the item the request is on. |
| `proposalId` | path | string | yes | Required. The ID of the access proposal to resolve. |


## accessproposals.list

List the access proposals on a file. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access). Note: Only approvers are able to list access proposals on a file. If the user isn't an approver, a 403 error is returned.

- **HTTP:** `GET`
- **Path:** `files/{fileId}/accessproposals`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/accessproposals`
- **Request body:** none
- **Response:** `ListAccessProposalsResponse`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | Required. The ID of the item the request is on. |
| `pageSize` | query | integer (int32) | no | Optional. The number of results per page. |
| `pageToken` | query | string | no | Optional. The continuation token on the list of access requests. |


## accessproposals.resolve

Approves or denies an access proposal. For more information, see [Manage pending access proposals](https://developers.google.com/workspace/drive/api/guides/pending-access).

- **HTTP:** `POST`
- **Path:** `files/{fileId}/accessproposals/{proposalId}:resolve`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/accessproposals/{proposalId}:resolve`
- **Request body:** `ResolveAccessProposalRequest`
- **Response:** none

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | Required. The ID of the item the request is on. |
| `proposalId` | path | string | yes | Required. The ID of the access proposal to resolve. |

