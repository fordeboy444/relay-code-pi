# Google Drive API — `approvals` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `approvals.approve` — POST `files/{fileId}/approvals/{approvalId}:approve`
- `approvals.cancel` — POST `files/{fileId}/approvals/{approvalId}:cancel`
- `approvals.comment` — POST `files/{fileId}/approvals/{approvalId}:comment`
- `approvals.decline` — POST `files/{fileId}/approvals/{approvalId}:decline`
- `approvals.get` — GET `files/{fileId}/approvals/{approvalId}`
- `approvals.list` — GET `files/{fileId}/approvals`
- `approvals.reassign` — POST `files/{fileId}/approvals/{approvalId}:reassign`
- `approvals.start` — POST `files/{fileId}/approvals:start`

## approvals.approve

Approves an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `APPROVED`. If this is the last required reviewer response, this also completes the approval and sets the approval Status to `APPROVED`.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/approvals/{approvalId}:approve`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}:approve`
- **Request body:** `ApproveApprovalRequest`
- **Response:** `Approval`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | path | string | yes | Required. The ID of the approval to approve. |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is on. |


## approvals.cancel

Cancels an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Updates the approval Status to `CANCELLED`. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS`.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/approvals/{approvalId}:cancel`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}:cancel`
- **Request body:** `CancelApprovalRequest`
- **Response:** `Approval`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | path | string | yes | Required. The ID of the approval to cancel. |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is on. |


## approvals.comment

Comments on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This sends a notification to both the initiator and the reviewers. Additionally, a message is also added to the approval activity log.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/approvals/{approvalId}:comment`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}:comment`
- **Request body:** `CommentApprovalRequest`
- **Response:** `Approval`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | path | string | yes | Required. The ID of the approval to comment on. |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is on. |


## approvals.decline

Declines an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). This is used to update the ReviewerResponse of the requesting user with a Response of `DECLINED`. This also completes the approval and sets the approval Status to `DECLINED`.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/approvals/{approvalId}:decline`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}:decline`
- **Request body:** `DeclineApprovalRequest`
- **Response:** `Approval`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | path | string | yes | Required. The ID of the approval to decline. |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is on. |


## approvals.get

Gets an approval by ID. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/approvals/{approvalId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}`
- **Request body:** none
- **Response:** `Approval`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | path | string | yes | Required. The ID of the approval. |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is on. |


## approvals.list

Lists the approvals on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).

- **HTTP:** `GET`
- **Path:** `files/{fileId}/approvals`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals`
- **Request body:** none
- **Response:** `ApprovalList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is on. |
| `pageSize` | query | integer (int32) | no | The maximum number of approvals to return. When not set, at most 100 approvals are returned. |
| `pageToken` | query | string | no | The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response. |


## approvals.reassign

Reassigns the reviewers on an approval. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals). Adds or replaces reviewers in the ReviewerResponse of the approval. This can be called by any user with the `writer` permission on the file while the approval Status is `IN_PROGRESS` and the Response for the reviewer being reassigned is `NO_RESPONSE`. A user with the `reader` permission can only reassign an approval that's assigned to themselves. Removing a reviewer isn't allowed.

- **HTTP:** `POST`
- **Path:** `files/{fileId}/approvals/{approvalId}:reassign`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals/{approvalId}:reassign`
- **Request body:** `ReassignApprovalRequest`
- **Response:** `Approval`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `approvalId` | path | string | yes | Required. The ID of the approval to reassign. |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is on. |


## approvals.start

Starts an approval on a file. For more information, see [Manage approvals](https://developers.google.com/workspace/drive/api/guides/approvals).

- **HTTP:** `POST`
- **Path:** `files/{fileId}/approvals:start`
- **Full URL:** `https://www.googleapis.com/drive/v3/files/{fileId}/approvals:start`
- **Request body:** `StartApprovalRequest`
- **Response:** `Approval`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `fileId` | path | string | yes | Required. The ID of the file that the approval is created on. |

