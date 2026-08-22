# Google Drive API — `apps` methods

All URIs are relative to `https://www.googleapis.com/drive/v3/`.

## Methods in this file

- `apps.get` — GET `apps/{appId}`
- `apps.list` — GET `apps`

## apps.get

Gets a specific app. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).

- **HTTP:** `GET`
- **Path:** `apps/{appId}`
- **Full URL:** `https://www.googleapis.com/drive/v3/apps/{appId}`
- **Request body:** none
- **Response:** `App`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `appId` | path | string | yes | The ID of the app. |


## apps.list

Lists a user's installed apps. For more information, see [Return user info](https://developers.google.com/workspace/drive/api/guides/user-info).

- **HTTP:** `GET`
- **Path:** `apps`
- **Full URL:** `https://www.googleapis.com/drive/v3/apps`
- **Request body:** none
- **Response:** `AppList`

### Parameters

| Name | Location | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `appFilterExtensions` | query | string | no | A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given file extensions are included in the response. If `appFilterMimeTypes` are provided as well, the result is a union of the two resulting app lists. |
| `appFilterMimeTypes` | query | string | no | A comma-separated list of file extensions to limit returned results. All results within the given app query scope which can open any of the given MIME types will be included in the response. If `appFilterExtensions` are provided as well, the result is a union of the two resulting app lists. |
| `languageCode` | query | string | no | A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/). |

