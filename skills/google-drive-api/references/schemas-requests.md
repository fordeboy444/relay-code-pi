# Google Drive API — Request schemas

8 schemas: ApproveApprovalRequest, CancelApprovalRequest, CommentApprovalRequest, DeclineApprovalRequest, ModifyLabelsRequest, ReassignApprovalRequest, ResolveAccessProposalRequest, StartApprovalRequest

## Schemas in this file

- [`ApproveApprovalRequest`](#approveapprovalrequest)
- [`CancelApprovalRequest`](#cancelapprovalrequest)
- [`CommentApprovalRequest`](#commentapprovalrequest)
- [`DeclineApprovalRequest`](#declineapprovalrequest)
- [`ModifyLabelsRequest`](#modifylabelsrequest)
- [`ReassignApprovalRequest`](#reassignapprovalrequest)
- [`ResolveAccessProposalRequest`](#resolveaccessproposalrequest)
- [`StartApprovalRequest`](#startapprovalrequest)

## ApproveApprovalRequest

Request for approving an approval as a reviewer.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `message` | string | Optional. A message to accompany the reviewer response on the approval. This message is included in notifications for the action and in the approval activity log. |


## CancelApprovalRequest

Request for cancelling an approval as an initiator.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `message` | string | Optional. A message to accompany the cancellation of the approval. This message is included in notifications for the action and in the approval activity log. |


## CommentApprovalRequest

Request for commenting on an approval.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `message` | string | Required. A message to comment on the approval. This message is included in notifications for the action and in the approval activity log. |


## DeclineApprovalRequest

Request for declining an approval as a reviewer.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `message` | string | Optional. A message to accompany the reviewer response on the approval. This message is included in notifications for the action and in the approval activity log. |


## ModifyLabelsRequest

A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail atomically.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `labelModifications` | array (LabelModification) | The list of modifications to apply to the labels on the file. |
| `kind` | string | This is always `"drive#modifyLabelsRequest"`. |


## ReassignApprovalRequest

Request for reassigning an approval. Reviewers can be added or replaced, but not removed.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `replaceReviewers` | array (ReplaceReviewer) | Optional. The list of reviewer replacements. |
| `message` | string | Optional. A message to send to the new reviewers. This message is included in notifications for the action and in the approval activity log. |
| `addReviewers` | array (AddReviewer) | Optional. The list of reviewers to add. |


## ResolveAccessProposalRequest

Request message for resolving an AccessProposal on a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `role` | array (string) | Optional. The roles that the approver has allowed, if any. For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles). Note: This field is required for the `ACCEPT` action. |
| `sendNotification` | boolean | Optional. Whether to send an email to the requester when the access proposal is denied or accepted. |
| `view` | string | Optional. Indicates the view for this access proposal. This should only be set when the proposal belongs to a view. Only `published` is supported. |
| `action` | string (enum) | Required. The action to take on the access proposal. |

**`action` enum values:**

- `ACTION_UNSPECIFIED` — Unspecified action
- `ACCEPT` — The user accepts the access proposal. Note: If this action is used, the `role` field must have at least one value.
- `DENY` — The user denies the access proposal.


## StartApprovalRequest

Allows creating an approval on a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dueTime` | string (google-datetime) | Optional. The time that the approval is due. |
| `reviewerEmails` | array (string) | Required. The emails of the users who are set to review the approval. |
| `lockFile` | boolean | Optional. Whether to lock the file when starting the approval. |
| `message` | string | Optional. A message to send to reviewers when notifying them of the approval request. |

