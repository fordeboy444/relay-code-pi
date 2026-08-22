# Google Drive API — Core schemas A–C

14 schemas: About, AccessProposal, AccessProposalRoleAndView, AddReviewer, App, AppIcons, AppList, Approval, ApprovalList, Change, ChangeList, Channel…

## Schemas in this file

- [`About`](#about)
- [`AccessProposal`](#accessproposal)
- [`AccessProposalRoleAndView`](#accessproposalroleandview)
- [`AddReviewer`](#addreviewer)
- [`App`](#app)
- [`AppIcons`](#appicons)
- [`AppList`](#applist)
- [`Approval`](#approval)
- [`ApprovalList`](#approvallist)
- [`Change`](#change)
- [`ChangeList`](#changelist)
- [`Channel`](#channel)
- [`ClientEncryptionDetails`](#clientencryptiondetails)
- [`Comment`](#comment)

## About

Information about the user, the user's Drive, and system capabilities.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#about"`. |
| `maxUploadSize` | string (int64) | The maximum upload size in bytes. |
| `exportFormats` | map (string -> array (string)) | A map of source MIME type to possible targets for all supported exports. |
| `user` | User | The authenticated user. |
| `storageQuota` | object | The user's storage quota limits and usage. For users that are part of an organization with pooled storage, information about the limit and usage across all services is for the organization, rather than the individual user. All fields are measured in bytes. |
| `folderColorPalette` | array (string) | The currently supported folder colors as RGB hex strings. |
| `maxImportSizes` | map (string -> string (int64)) | A map of maximum import sizes by MIME type, in bytes. |
| `canCreateTeamDrives` | boolean | Deprecated: Use `canCreateDrives` instead. |
| `teamDriveThemes` | array (object) | Deprecated: Use `driveThemes` instead. |
| `importFormats` | map (string -> array (string)) | A map of source MIME type to possible targets for all supported imports. |
| `canCreateDrives` | boolean | Whether the user can create shared drives. |
| `driveThemes` | array (object) | A list of themes that are supported for shared drives. |
| `appInstalled` | boolean | Whether the user has installed the requesting app. |


## AccessProposal

Manage outstanding access proposals on a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `createTime` | string (google-datetime) | The creation time. |
| `proposalId` | string | The ID of the access proposal. |
| `fileId` | string | The file ID that the proposal for access is on. |
| `requesterEmailAddress` | string | The email address of the requesting user. |
| `recipientEmailAddress` | string | The email address of the user that will receive permissions, if accepted. |
| `requestMessage` | string | The message that the requester added to the proposal. |
| `rolesAndViews` | array (AccessProposalRoleAndView) | A wrapper for the role and view of an access proposal. For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles). |


## AccessProposalRoleAndView

A wrapper for the role and view of an access proposal. For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles).

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `role` | string | The role that was proposed by the requester. The supported values are: * `writer` * `commenter` * `reader` |
| `view` | string | Indicates the view for this access proposal. Only populated for proposals that belong to a view. Only `published` is supported. |


## AddReviewer

Representation of a reviewer addition.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `addedReviewerEmail` | string | Required. The email of the reviewer to add. |


## App

The `apps` resource provides a list of apps that a user has installed, with information about each app's supported MIME types, file extensions, and other details. Some resource methods (such as `apps.get`) require an `appId`. Use the `apps.list` method to retrieve the ID for an installed application.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `createUrl` | string | The URL to create a file with this app. |
| `shortDescription` | string | A short description of the app. |
| `name` | string | The name of the app. |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string "drive#app". |
| `objectType` | string | The type of object this app creates such as a Chart. If empty, the app name should be used instead. |
| `createInFolderTemplate` | string | The template URL to create a file with this app in a given folder. The template contains the {folderId} to be replaced by the folder ID house the new file. |
| `supportsOfflineCreate` | boolean | Whether this app supports creating files when offline. |
| `icons` | array (AppIcons) | The various icons for the app. |
| `supportsCreate` | boolean | Whether this app supports creating objects. |
| `hasDriveWideScope` | boolean | Whether the app has Drive-wide scope. An app with Drive-wide scope can access all files in the user's Drive. |
| `supportsMultiOpen` | boolean | Whether this app supports opening more than one file. |
| `secondaryMimeTypes` | array (string) | The list of secondary MIME types. |
| `supportsImport` | boolean | Whether this app supports importing from Google Docs. |
| `useByDefault` | boolean | Whether the app is selected as the default handler for the types it supports. |
| `authorized` | boolean | Whether the app is authorized to access data on the user's Drive. |
| `primaryFileExtensions` | array (string) | The list of primary file extensions. |
| `installed` | boolean | Whether the app is installed. |
| `id` | string | The ID of the app. |
| `primaryMimeTypes` | array (string) | The list of primary MIME types. |
| `longDescription` | string | A long description of the app. |
| `openUrlTemplate` | string | The template URL for opening files with this app. The template contains {ids} or {exportIds} to be replaced by the actual file IDs. For more information, see Open Files for the full documentation. |
| `productId` | string | The ID of the product listing for this app. |
| `productUrl` | string | A link to the product listing for this app. |
| `secondaryFileExtensions` | array (string) | The list of secondary file extensions. |


## AppIcons

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `size` | integer (int32) | Size of the icon. Represented as the maximum of the width and height. |
| `iconUrl` | string | URL for the icon. |
| `category` | string | Category of the icon. Allowed values are: * `application` - The icon for the application. * `document` - The icon for a file associated with the app. * `documentShared` - The icon for a shared file associated with the app. |


## AppList

A list of third-party applications which the user has installed or given access to Google Drive.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string "drive#appList". |
| `defaultAppIds` | array (string) | The list of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest). |
| `items` | array (App) | The list of apps. |
| `selfLink` | string | A link back to this list. |


## Approval

Metadata for an approval. An approval is a review or approve process for a Drive item.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `modifyTime` | string (google-datetime) | Output only. The most recent time the approval was modified. |
| `dueTime` | string (google-datetime) | The time that the approval is due. |
| `status` | string (enum) | Output only. The status of the approval at the time this resource was requested. |
| `approvalId` | string | The approval ID. |
| `initiator` | User | The user that requested the approval. |
| `completeTime` | string (google-datetime) | Output only. The time the approval was completed. |
| `reviewerResponses` | array (ReviewerResponse) | The responses made on the approval by reviewers. |
| `kind` | string | This is always drive#approval. |
| `createTime` | string (google-datetime) | Output only. The time the approval was created. |
| `targetFileId` | string | Target file id of the approval. |

**`status` enum values:**

- `STATUS_UNSPECIFIED` — The approval status has not been set or was set to an invalid value.
- `IN_PROGRESS` — The approval process has started and not finished.
- `APPROVED` — The approval process is finished and the target was approved.
- `CANCELLED` — The approval process was cancelled before it finished.
- `DECLINED` — The approval process is finished and the target was declined.


## ApprovalList

The response of an approvals list request.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | This is always drive#approvalList |
| `nextPageToken` | string | The page token for the next page of approvals. This is absent if the end of the approvals list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. |
| `items` | array (Approval) | The list of approvals. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. |


## Change

A change to a file or shared drive.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `file` | File | The updated state of the file. Present if the type is file and the file has not been removed from this list of changes. |
| `changeType` | string | The type of the change. Possible values are `file` and `drive`. |
| `time` | string (date-time) | The time of this change (RFC 3339 date-time). |
| `type` | string | Deprecated: Use `changeType` instead. |
| `teamDrive` | TeamDrive | Deprecated: Use `drive` instead. |
| `driveId` | string | The ID of the shared drive associated with this change. |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#change"`. |
| `removed` | boolean | Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access. |
| `drive` | Drive | The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted. |
| `fileId` | string | The ID of the file which has changed. |
| `teamDriveId` | string | Deprecated: Use `driveId` instead. |


## ChangeList

A list of changes for a user.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#changeList"`. |
| `nextPageToken` | string | The page token for the next page of changes. This will be absent if the end of the changes list has been reached. The page token doesn't expire. |
| `newStartPageToken` | string | The starting page token for future changes. This will be present only if the end of the current changes list has been reached. The page token doesn't expire. |
| `changes` | array (Change) | The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. |


## Channel

A notification channel used to watch for resource changes.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`. |
| `id` | string | A UUID or similar unique string that identifies this channel. |
| `payload` | boolean | A Boolean value to indicate whether payload is wanted. Optional. |
| `token` | string | An arbitrary string delivered to the target address with each notification delivered over this channel. Optional. |
| `expiration` | string (int64) | Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional. |
| `resourceUri` | string | A version-specific identifier for the watched resource. |
| `type` | string | The type of delivery mechanism used for this channel. Valid values are "web_hook" or "webhook". |
| `resourceId` | string | An opaque ID that identifies the resource being watched on this channel. Stable across different API versions. |
| `address` | string | The address where notifications are delivered for this channel. |
| `params` | map (string -> string) | Additional parameters controlling delivery channel behavior. Optional. |


## ClientEncryptionDetails

Details about the client-side encryption applied to the file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `encryptionState` | string | The encryption state of the file. The values expected here are: - encrypted - unencrypted |
| `decryptionMetadata` | DecryptionMetadata | The metadata used for client-side operations. |


## Comment

A comment on a file. Some resource methods (such as `comments.update`) require a `commentId`. Use the `comments.list` method to retrieve the ID for a comment in a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `quotedFileContent` | object | The file content to which the comment refers, typically within the anchor region. For a text file, for example, this would be the text at the location of the comment. |
| `createdTime` | string (date-time) | The time at which the comment was created (RFC 3339 date-time). |
| `deleted` | boolean | Output only. Whether the comment has been deleted. A deleted comment has no content. |
| `anchor` | string | A region of the document represented as a JSON string. For details on defining anchor properties, refer to [Manage comments and replies](https://developers.google.com/workspace/drive/api/v3/manage-comments). |
| `content` | string | The plain text content of the comment. This field is used for setting the content, while `htmlContent` should be displayed. |
| `resolved` | boolean | Output only. Whether the comment has been resolved by one of its replies. |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#comment"`. |
| `author` | User | Output only. The author of the comment. The author's email address and permission ID will not be populated. |
| `mentionedEmailAddresses` | array (string) | Output only. A list of email addresses for users mentioned in this comment. If no users are mentioned, the list is empty. |
| `id` | string | Output only. The ID of the comment. |
| `assigneeEmailAddress` | string | Output only. The email address of the user assigned to this comment. If no user is assigned, the field is unset. |
| `htmlContent` | string | Output only. The content of the comment with HTML formatting. |
| `modifiedTime` | string (date-time) | The last time the comment or any of its replies was modified (RFC 3339 date-time). |
| `replies` | array (Reply) | Output only. The full list of replies to the comment in chronological order. |

