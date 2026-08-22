# Google Drive API — Core schemas L–U

14 schemas: LabelModification, Operation, Permission, PermissionList, ReplaceReviewer, Reply, ReplyList, Revision, RevisionList, StartPageToken, Status, TeamDrive…

## Schemas in this file

- [`LabelModification`](#labelmodification)
- [`Operation`](#operation)
- [`Permission`](#permission)
- [`PermissionList`](#permissionlist)
- [`ReplaceReviewer`](#replacereviewer)
- [`Reply`](#reply)
- [`ReplyList`](#replylist)
- [`Revision`](#revision)
- [`RevisionList`](#revisionlist)
- [`StartPageToken`](#startpagetoken)
- [`Status`](#status)
- [`TeamDrive`](#teamdrive)
- [`TeamDriveList`](#teamdrivelist)
- [`User`](#user)

## LabelModification

A modification to a label on a file. A `LabelModification` can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `labelId` | string | The ID of the label to modify. |
| `removeLabel` | boolean | If true, the label will be removed from the file. |
| `kind` | string | This is always `"drive#labelModification"`. |
| `fieldModifications` | array (LabelFieldModification) | The list of modifications to this label's fields. |


## Operation

This resource represents a long-running operation that is the result of a network API call.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `name` | string | The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. |
| `metadata` | map (string -> any) | Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. |
| `done` | boolean | If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. |
| `error` | Status | The error result of the operation in case of failure or cancellation. |
| `response` | map (string -> any) | The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should hav… |


## Permission

A permission for a file. A permission grants a user, group, domain, or the world access to a file or a folder hierarchy. For more information, see [Share files, folders, and drives](https://developers.google.com/workspace/drive/api/guides/manage-sharing). By default, permission requests only return a subset of fields. Permission `kind`, `ID`, `type`, and `role` are always returned. To retrieve specific fields, see [Return specific fields](https://developers.google.com/workspace/drive/api/guides/fields-parameter). Some resource methods (such as `permissions.update`) require a `permissionId`. Use the `permissions.list` method to retrieve the ID for a file, folder, or shared drive.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `pendingOwner` | boolean | Whether the account associated with this permission is a pending owner. Only populated for permissions of type `user` for files that aren't in a shared drive. |
| `view` | string | Indicates the view for this permission. Only populated for permissions that belong to a view. The only supported values are `published` and `metadata`: * `published`: The permission's role is `publishedReader`. * `metadata`: The item is only visible to the `metadata` view because the item has limit… |
| `inheritedPermissionsDisabled` | boolean | When `true`, only organizers, owners, and users with permissions added directly on the item can access it. |
| `expirationTime` | string (date-time) | The time at which this permission will expire (RFC 3339 date-time). Expiration times have the following restrictions: - They can only be set on user and group permissions - The time must be in the future - The time cannot be more than a year in the future |
| `teamDrivePermissionDetails` | array (object) | Output only. Deprecated: Output only. Use `permissionDetails` instead. |
| `id` | string | Output only. The ID of this permission. This is a unique identifier for the grantee, and is published in the [User resource](https://developers.google.com/workspace/drive/api/reference/rest/v3/User) as `permissionId`. IDs should be treated as opaque values. |
| `emailAddress` | string | Output only. The email address of the user or group to which this permission refers. |
| `deleted` | boolean | Output only. Whether the account associated with this permission has been deleted. This field only pertains to permissions of type `user` or `group`. |
| `permissionDetails` | array (object) | Output only. Details of whether the permissions on this item are inherited or are directly on this item. |
| `allowFileDiscovery` | boolean | Whether the permission allows the file to be discovered through search. This is only applicable for permissions of type `domain` or `anyone`. |
| `type` | string | The type of the grantee. Supported values include: * `user` * `group` * `domain` * `anyone` When creating a permission, if `type` is `user` or `group`, you must provide an `emailAddress` for the user or group. If `type` is `domain`, you must provide a `domain`. If `type` is `anyone`, no extra infor… |
| `displayName` | string | Output only. The "pretty" name of the value of the permission. The following is a list of examples for each type of permission: * `user` - User's full name, as defined for their Google Account, such as "Dana A." * `group` - Name of the Google Group, such as "The Company Administrators." * `domain`… |
| `role` | string | The role granted by this permission. Supported values include: * `owner` * `organizer` * `fileOrganizer` * `writer` * `commenter` * `reader` For more information, see [Roles and permissions](https://developers.google.com/workspace/drive/api/guides/ref-roles). |
| `domain` | string | Output only. The domain to which this permission refers. |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#permission"`. |
| `photoLink` | string | Output only. A link to the user's profile photo, if available. |


## PermissionList

A list of permissions for a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `nextPageToken` | string | The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for s… |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#permissionList"`. |
| `permissions` | array (Permission) | The list of permissions. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. |


## ReplaceReviewer

Representation of a reviewer replacement.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `removedReviewerEmail` | string | Required. The email of the reviewer to remove. |
| `addedReviewerEmail` | string | Required. The email of the reviewer to add. |


## Reply

A reply to a comment on a file. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `createdTime` | string (date-time) | The time at which the reply was created (RFC 3339 date-time). |
| `action` | string | The action the reply performed to the parent comment. The supported values are: * `resolve` * `reopen` |
| `content` | string | The plain text content of the reply. This field is used for setting the content, while `htmlContent` should be displayed. This field is required by the `create` method if no `action` value is specified. |
| `deleted` | boolean | Output only. Whether the reply has been deleted. A deleted reply has no content. |
| `htmlContent` | string | Output only. The content of the reply with HTML formatting. |
| `id` | string | Output only. The ID of the reply. |
| `assigneeEmailAddress` | string | Output only. The email address of the user assigned to this comment. If no user is assigned, the field is unset. |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#reply"`. |
| `author` | User | Output only. The author of the reply. The author's email address and permission ID won't be populated. |
| `mentionedEmailAddresses` | array (string) | Output only. A list of email addresses for users mentioned in this comment. If no users are mentioned, the list is empty. |
| `modifiedTime` | string (date-time) | The last time the reply was modified (RFC 3339 date-time). |


## ReplyList

A list of replies to a comment on a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#replyList"`. |
| `replies` | array (Reply) | The list of replies. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. |
| `nextPageToken` | string | The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours.… |


## Revision

The metadata for a revision to a file. Some resource methods (such as `revisions.update`) require a `revisionId`. Use the `revisions.list` method to retrieve the ID for a revision.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `exportLinks` | map (string -> string) | Output only. Links for exporting Docs Editors files to specific formats. |
| `md5Checksum` | string | Output only. The MD5 checksum of the revision's content. This is only applicable to files with binary content in Drive. |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#revision"`. |
| `originalFilename` | string | Output only. The original filename used to create this revision. This is only applicable to files with binary content in Drive. |
| `publishedLink` | string | Output only. A link to the published revision. This is only populated for Docs Editors files. |
| `size` | string (int64) | Output only. The size of the revision's content in bytes. This is only applicable to files with binary content in Drive. |
| `mimeType` | string | Output only. The MIME type of the revision. |
| `publishAuto` | boolean | Whether subsequent revisions will be automatically republished. This is only applicable to Docs Editors files. |
| `published` | boolean | Whether this revision is published. This is only applicable to Docs Editors files. |
| `keepForever` | boolean | Whether to keep this revision forever, even if it is no longer the head revision. If not set, the revision will be automatically purged 30 days after newer content is uploaded. This can be set on a maximum of 200 revisions for a file. This field is only applicable to files with binary content in Dr… |
| `publishedOutsideDomain` | boolean | Whether this revision is published outside the domain. This is only applicable to Docs Editors files. |
| `id` | string | Output only. The ID of the revision. |
| `lastModifyingUser` | User | Output only. The last user to modify this revision. This field is only populated when the last modification was performed by a signed-in user. |
| `modifiedTime` | string (date-time) | The last time the revision was modified (RFC 3339 date-time). |


## RevisionList

A list of revisions of a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `revisions` | array (Revision) | The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. |
| `nextPageToken` | string | The page token for the next page of revisions. This will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hou… |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#revisionList"`. |


## StartPageToken

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `startPageToken` | string | The starting page token for listing future changes. The page token doesn't expire. |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#startPageToken"`. |


## Status

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `code` | integer (int32) | The status code, which should be an enum value of google.rpc.Code. |
| `message` | string | A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. |
| `details` | array (map (string -> any)) | A list of messages that carry the error details. There is a common set of message types for APIs to use. |


## TeamDrive

Deprecated: use the drive collection instead. Next ID: 33

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `name` | string | The name of this Team Drive. |
| `id` | string | The ID of this Team Drive which is also the ID of the top level folder of this Team Drive. |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#teamDrive"`. |
| `backgroundImageLink` | string | A short-lived link to this Team Drive's background image. |
| `capabilities` | object | Capabilities the current user has on this Team Drive. |
| `backgroundImageFile` | object | The background image file for a Team Drive. |
| `restrictions` | object | A set of restrictions that apply to this Team Drive or items inside this Team Drive. |
| `themeId` | string | The ID of the theme from which the background image and color will be set. The set of possible `teamDriveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.teamdrives.create` request, a random theme is chosen from which the background image and color are set.… |
| `createdTime` | string (date-time) | The time at which the Team Drive was created (RFC 3339 date-time). |
| `orgUnitId` | string | The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. |
| `colorRgb` | string | The color of this Team Drive as an RGB hex string. It can only be set on a `drive.teamdrives.update` request that does not set `themeId`. |


## TeamDriveList

A list of Team Drives.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `nextPageToken` | string | The page token for the next page of Team Drives. This will be absent if the end of the Team Drives list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several… |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#teamDriveList"`. |
| `teamDrives` | array (TeamDrive) | The list of Team Drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. |


## User

Information about a Drive user.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `permissionId` | string | Output only. The user's ID as visible in Permission resources. |
| `me` | boolean | Output only. Whether this user is the requesting user. |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `drive#user`. |
| `photoLink` | string | Output only. A link to the user's profile photo, if available. |
| `displayName` | string | Output only. A plain text displayable name for this user. |
| `emailAddress` | string | Output only. The email address of the user. This may not be present in certain contexts if the user has not made their email address visible to the requester. |

