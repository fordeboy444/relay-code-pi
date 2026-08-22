# Google Drive API — Core schemas C–L

14 schemas: CommentList, ContentRestriction, DecryptionMetadata, DownloadRestriction, DownloadRestrictionsMetadata, Drive, DriveList, File, FileList, GeneratedIds, Label, LabelField…

## Schemas in this file

- [`CommentList`](#commentlist)
- [`ContentRestriction`](#contentrestriction)
- [`DecryptionMetadata`](#decryptionmetadata)
- [`DownloadRestriction`](#downloadrestriction)
- [`DownloadRestrictionsMetadata`](#downloadrestrictionsmetadata)
- [`Drive`](#drive)
- [`DriveList`](#drivelist)
- [`File`](#file)
- [`FileList`](#filelist)
- [`GeneratedIds`](#generatedids)
- [`Label`](#label)
- [`LabelField`](#labelfield)
- [`LabelFieldModification`](#labelfieldmodification)
- [`LabelList`](#labellist)

## CommentList

A list of comments on a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#commentList"`. |
| `nextPageToken` | string | The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours… |
| `comments` | array (Comment) | The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. |


## ContentRestriction

A restriction for accessing the content of the file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `ownerRestricted` | boolean | Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with `organizer` capabilities can modify or remove this content restriction. |
| `reason` | string | Reason for why the content of the file is restricted. This is only mutable on requests that also set `readOnly=true`. |
| `readOnly` | boolean | Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. |
| `type` | string | Output only. The type of the content restriction. Currently the only possible value is `globalContentRestriction`. |
| `restrictionTime` | string (date-time) | The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true. |
| `systemRestricted` | boolean | Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions. |
| `restrictingUser` | User | Output only. The user who set the content restriction. Only populated if `readOnly=true`. |


## DecryptionMetadata

Representation of the CSE DecryptionMetadata.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kaclsName` | string | The name of the KACLS (Key ACL Service) used to encrypt the file. |
| `keyFormat` | string | Key format for the unwrapped key. Must be `tinkAesGcmKey`. |
| `kaclsId` | string (int64) | The ID of the KACLS (Key ACL Service) used to encrypt the file. |
| `aes256GcmChunkSize` | string | Chunk size used if content was encrypted with the AES 256 GCM Cipher. Possible values are: - default - small |
| `encryptionResourceKeyHash` | string | The URL-safe Base64 encoded HMAC-SHA256 digest of the resource metadata with its DEK (Data Encryption Key); see https://developers.google.com/workspace/cse/reference |
| `wrappedKey` | string | The URL-safe Base64 encoded wrapped key used to encrypt the contents of the file. |
| `jwt` | string | The signed JSON Web Token (JWT) which can be used to authorize the requesting user with the Key ACL Service (KACLS). The JWT asserts that the requesting user has at least read permissions on the file. |


## DownloadRestriction

A restriction for copy and download of the file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `restrictedForWriters` | boolean | Whether download and copy is restricted for writers. If true, download is also restricted for readers. |
| `restrictedForReaders` | boolean | Whether download and copy is restricted for readers. |


## DownloadRestrictionsMetadata

Download restrictions applied to the file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `effectiveDownloadRestrictionWithContext` | DownloadRestriction | Output only. The effective download restriction applied to this file. This considers all restriction settings and DLP rules. |
| `itemDownloadRestriction` | DownloadRestriction | The download restriction of the file applied directly by the owner or organizer. This doesn't take into account shared drive settings or DLP rules. |


## Drive

Representation of a shared drive. Some resource methods (such as `drives.update`) require a `driveId`. Use the `drives.list` method to retrieve the ID for a shared drive.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `id` | string | Output only. The ID of this shared drive which is also the ID of the top level folder of this shared drive. |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#drive"`. |
| `backgroundImageLink` | string | Output only. A short-lived link to this shared drive's background image. |
| `name` | string | The name of this shared drive. |
| `backgroundImageFile` | object | An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on `drive.drives.update` requests that don't set `themeId`. When specified, all fields of the `backgroundImageFile` must be set. |
| `restrictions` | object | A set of restrictions that apply to this shared drive or items inside this shared drive. Note that restrictions can't be set when creating a shared drive. To add a restriction, first create a shared drive and then use `drives.update` to add restrictions. |
| `capabilities` | object | Output only. Capabilities the current user has on this shared drive. |
| `themeId` | string | The ID of the theme from which the background image and color will be set. The set of possible `driveThemes` can be retrieved from a `drive.about.get` response. When not specified on a `drive.drives.create` request, a random theme is chosen from which the background image and color are set. This is… |
| `createdTime` | string (date-time) | The time at which the shared drive was created (RFC 3339 date-time). |
| `hidden` | boolean | Whether the shared drive is hidden from default view. |
| `orgUnitId` | string | Output only. The organizational unit of this shared drive. This field is only populated on `drives.list` responses when the `useDomainAdminAccess` parameter is set to `true`. |
| `colorRgb` | string | The color of this shared drive as an RGB hex string. It can only be set on a `drive.drives.update` request that does not set `themeId`. |


## DriveList

A list of shared drives.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `nextPageToken` | string | The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. Ho… |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#driveList"`. |
| `drives` | array (Drive) | The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. |


## File

The metadata for a file. Some resource methods (such as `files.update`) require a `fileId`. Use the `files.list` method to retrieve the ID for a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `permissions` | array (Permission) | Output only. The full list of permissions for the file. This is only available if the requesting user can share the file. Not populated for items in shared drives. |
| `md5Checksum` | string | Output only. The MD5 checksum for the content of the file. This is only applicable to files with binary content in Google Drive. |
| `originalFilename` | string | The original filename of the uploaded content if available, or else the original value of the `name` field. This is only available for files with binary content in Google Drive. |
| `ownedByMe` | boolean | Output only. Whether the user owns the file. Not populated for items in shared drives. |
| `sharedWithMeTime` | string (date-time) | The time at which the file was shared with the user, if applicable (RFC 3339 date-time). |
| `size` | string (int64) | Output only. Size in bytes of blobs and Google Workspace editor files. Won't be populated for files that have no size, like shortcuts and folders. |
| `name` | string | The name of the file. This isn't necessarily unique within a folder. Note that for immutable items such as the top-level folders of shared drives, the My Drive root folder, and the Application Data folder, the name is constant. |
| `version` | string (int64) | Output only. A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the user. |
| `teamDriveId` | string | Deprecated: Output only. Use `driveId` instead. |
| `id` | string | The ID of the file. |
| `modifiedByMeTime` | string (date-time) | The last time the file was modified by the user (RFC 3339 date-time). |
| `properties` | map (string -> string) | A collection of arbitrary key-value pairs which are visible to all apps. Entries with null values are cleared in update and copy requests. |
| `linkShareMetadata` | object | Contains details about the link URLs that clients are using to refer to this item. |
| `iconLink` | string | Output only. A static, unauthenticated link to the file's icon. |
| `headRevisionId` | string | Output only. The ID of the file's head revision. This is currently only available for files with binary content in Google Drive. |
| `imageMediaMetadata` | object | Output only. Additional metadata about image media, if available. |
| `createdTime` | string (date-time) | The time at which the file was created (RFC 3339 date-time). |
| `downloadRestrictions` | DownloadRestrictionsMetadata | Download restrictions applied on the file. |
| `hasThumbnail` | boolean | Output only. Whether this file has a thumbnail. This doesn't indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field. |
| `shared` | boolean | Output only. Whether the file has been shared. Not populated for items in shared drives. |
| `videoMediaMetadata` | object | Output only. Additional metadata about video media. This may not be available immediately upon upload. |
| `explicitlyTrashed` | boolean | Output only. Whether the file has been explicitly trashed, as opposed to recursively trashed from a parent folder. |
| `inheritedPermissionsDisabled` | boolean | Whether this file has inherited permissions disabled. Inherited permissions are enabled by default. |
| `lastModifyingUser` | User | Output only. The last user to modify the file. This field is only populated when the last modification was performed by a signed-in user. |
| `shortcutDetails` | object | Information about a shortcut file. |
| `copyRequiresWriterPermission` | boolean | Whether the options to copy, print, or download this file should be disabled for readers and commenters. |
| `webViewLink` | string | Output only. A link for opening the file in a relevant Google editor or viewer in a browser. |
| `thumbnailVersion` | string (int64) | Output only. The thumbnail version for use in thumbnail cache invalidation. |
| `viewedByMe` | boolean | Output only. Whether the file has been viewed by this user. |
| `trashedTime` | string (date-time) | The time that the item was trashed (RFC 3339 date-time). Only populated for items in shared drives. |
| `resourceKey` | string | Output only. A key needed to access the item via a shared link. |
| `folderColorRgb` | string | The color for a folder or a shortcut to a folder as an RGB hex string. The supported colors are published in the `folderColorPalette` field of the [`about`](/workspace/drive/api/reference/rest/v3/about) resource. If an unsupported color is specified, the closest color in the palette is used instead. |
| `description` | string | A short description of the file. |
| `quotaBytesUsed` | string (int64) | Output only. The number of storage quota bytes used by the file. This includes the head revision as well as previous revisions with `keepForever` enabled. |
| `mimeType` | string | The MIME type of the file. Google Drive attempts to automatically detect an appropriate value from uploaded content, if no value is provided. The value cannot be changed unless a new revision is uploaded. If a file is created with a Google Doc MIME type, the uploaded content is imported, if possibl… |
| `viewersCanCopyContent` | boolean | Deprecated: Use `copyRequiresWriterPermission` instead. |
| `thumbnailLink` | string | Output only. A short-lived link to the file's thumbnail, if available. Typically lasts on the order of hours. Not intended for direct usage on web applications due to [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) policies. Consider using a proxy serv… |
| `contentHints` | object | Additional information about the content of the file. These fields are never populated in responses. |
| `fileExtension` | string | Output only. The final component of `fullFileExtension`. This is only available for files with binary content in Google Drive. |
| `appProperties` | map (string -> string) | A collection of arbitrary key-value pairs which are private to the requesting app. Entries with null values are cleared in update and copy requests. These properties can only be retrieved using an authenticated request. An authenticated request uses an access token obtained with a OAuth 2 client ID… |
| `owners` | array (User) | Output only. The owner of this file. Only certain legacy files may have more than one owner. This field isn't populated for items in shared drives. |
| `trashed` | boolean | Whether the file has been trashed, either explicitly or from a trashed parent folder. Only the owner may trash a file, but other users can still access the file in the owner's trash until it's permanently deleted. |
| `parents` | array (string) | The ID of the parent folder containing the file. A file can only have one parent folder; specifying multiple parents isn't supported. If not specified as part of a create request, the file is placed directly in the user's My Drive folder. If not specified as part of a copy request, the file inherit… |
| `labelInfo` | object | Label information on the file. |
| `permissionIds` | array (string) | Output only. List of permission IDs for users with access to this file. |
| `webContentLink` | string | Output only. A link for downloading the content of the file in a browser. This is only available for files with binary content in Google Drive. |
| `modifiedTime` | string (date-time) | he last time the file was modified by anyone (RFC 3339 date-time). Note that setting modifiedTime will also update modifiedByMeTime for the user. |
| `hasAugmentedPermissions` | boolean | Output only. Whether there are permissions directly on this file. This field is only populated for items in shared drives. |
| `writersCanShare` | boolean | Whether users with only `writer` permission can modify the file's permissions. Not populated for items in shared drives. |
| `spaces` | array (string) | Output only. The list of spaces which contain the file. The currently supported values are `drive`, `appDataFolder`, and `photos`. |
| `viewedByMeTime` | string (date-time) | The last time the file was viewed by the user (RFC 3339 date-time). |
| `trashingUser` | User | Output only. If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives. |
| `exportLinks` | map (string -> string) | Output only. Links for exporting Docs Editors files to specific formats. |
| `sha1Checksum` | string | Output only. The SHA1 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files. |
| `sha256Checksum` | string | Output only. The SHA256 checksum associated with this file, if available. This field is only populated for files with content stored in Google Drive; it's not populated for Docs Editors or shortcut files. |
| `capabilities` | object | Output only. Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take. For more information, see [Understand file capabilities](https://developers.google.com/workspace/drive/api/guides/manage-sharing#capabilities). |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#file"`. |
| `sharingUser` | User | Output only. The user who shared the file with the requesting user, if applicable. |
| `fullFileExtension` | string | Output only. The full file extension extracted from the `name` field. May contain multiple concatenated extensions, such as "tar.gz". This is only available for files with binary content in Google Drive. This is automatically updated when the `name` field changes, however it's not cleared if the ne… |
| `clientEncryptionDetails` | ClientEncryptionDetails | Client Side Encryption related details. Contains details about the encryption state of the file and details regarding the encryption mechanism that clients need to use when decrypting the contents of this item. This will only be present on files and not on folders or shortcuts. |
| `contentRestrictions` | array (ContentRestriction) | Restrictions for accessing the content of the file. Only populated if such a restriction exists. |
| `isAppAuthorized` | boolean | Output only. Whether the file was created or opened by the requesting app. |
| `driveId` | string | Output only. ID of the shared drive the file resides in. Only populated for items in shared drives. |
| `modifiedByMe` | boolean | Output only. Whether the file has been modified by this user. |
| `starred` | boolean | Whether the user has starred the file. |


## FileList

A list of files.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `files` | array (File) | The list of files. If `nextPageToken` is populated, then this list may be incomplete and an additional page of results should be fetched. |
| `nextPageToken` | string | The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. Howe… |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#fileList"`. |
| `incompleteSearch` | boolean | Whether the search process was incomplete. If true, then some search results might be missing, since all documents were not searched. This can occur when searching multiple drives with the `allDrives` corpora, but all corpora couldn't be searched. When this happens, it's suggested that clients narr… |


## GeneratedIds

A list of generated file IDs which can be provided in create requests.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `space` | string | The type of file that can be created with these IDs. |
| `kind` | string | Identifies what kind of resource this is. Value: the fixed string `"drive#generatedIds"`. |
| `ids` | array (string) | The IDs generated for the requesting user in the specified space. |


## Label

Representation of label and label fields.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `fields` | map (string -> LabelField) | A map of the fields on the label, keyed by the field's ID. |
| `revisionId` | string | The revision ID of the label. |
| `kind` | string | This is always drive#label |
| `id` | string | The ID of the label. |


## LabelField

Representation of field, which is a typed key-value pair.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `valueType` | string | The field type. While new values may be supported in the future, the following are currently allowed: * `dateString` * `integer` * `selection` * `text` * `user` |
| `integer` | array (string (int64)) | Only present if `valueType` is `integer`. |
| `dateString` | array (string (date)) | Only present if valueType is dateString. RFC 3339 formatted date: YYYY-MM-DD. |
| `selection` | array (string) | Only present if `valueType` is `selection` |
| `user` | array (User) | Only present if `valueType` is `user`. |
| `id` | string | The identifier of this label field. |
| `text` | array (string) | Only present if `valueType` is `text`. |
| `kind` | string | This is always drive#labelField. |


## LabelFieldModification

A modification to a label's field.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `setSelectionValues` | array (string) | Replaces a `selection` field with these new values. |
| `unsetValues` | boolean | Unsets the values for this field. |
| `kind` | string | This is always `"drive#labelFieldModification"`. |
| `setUserValues` | array (string) | Replaces a `user` field with these new values. The values must be a valid email addresses. |
| `fieldId` | string | The ID of the field to be modified. |
| `setDateValues` | array (string (date)) | Replaces the value of a dateString Field with these new values. The string must be in the RFC 3339 full-date format: YYYY-MM-DD. |
| `setTextValues` | array (string) | Sets the value of a `text` field. |
| `setIntegerValues` | array (string (int64)) | Replaces the value of an `integer` field with these new values. |


## LabelList

A list of labels applied to a file.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `labels` | array (Label) | The list of labels. |
| `nextPageToken` | string | The page token for the next page of labels. This field will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. How… |
| `kind` | string | This is always `"drive#labelList"`. |

