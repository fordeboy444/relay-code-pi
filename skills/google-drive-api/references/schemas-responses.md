# Google Drive API — Response schemas

4 schemas: GenerateCseTokenResponse, ListAccessProposalsResponse, ModifyLabelsResponse, ReviewerResponse

## Schemas in this file

- [`GenerateCseTokenResponse`](#generatecsetokenresponse)
- [`ListAccessProposalsResponse`](#listaccessproposalsresponse)
- [`ModifyLabelsResponse`](#modifylabelsresponse)
- [`ReviewerResponse`](#reviewerresponse)

## GenerateCseTokenResponse

JWT and associated metadata used to generate CSE files.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `kind` | string | Output only. Identifies what kind of resource this is. Value: the fixed string `"drive#generateCseTokenResponse"`. |
| `currentKaclsId` | string (int64) | The current Key ACL Service (KACLS) ID associated with the JWT. |
| `fileId` | string | The fileId for which the JWT was generated. |
| `currentKaclsName` | string | Name of the KACLs that the returned KACLs ID points to. |
| `jwt` | string | The signed JSON Web Token (JWT) for the file. |


## ListAccessProposalsResponse

The response to an access proposal list request.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `nextPageToken` | string | The continuation token for the next page of results. This will be absent if the end of the results list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. |
| `accessProposals` | array (AccessProposal) | The list of access proposals. This field is only populated in Drive API v3. |


## ModifyLabelsResponse

Response to a `ModifyLabels` request. This contains only those labels which were added or updated by the request.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `modifiedLabels` | array (Label) | The list of labels which were added or updated by the request. |
| `kind` | string | This is always `"drive#modifyLabelsResponse"`. |


## ReviewerResponse

A response on an approval made by a specific reviewer.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `reviewer` | User | The user that's responsible for this response. |
| `response` | string (enum) | A reviewer’s response for the approval. |
| `kind` | string | This is always drive#reviewerResponse. |

**`response` enum values:**

- `RESPONSE_UNSPECIFIED` — The response was set to an unrecognized value.
- `NO_RESPONSE` — The reviewer hasn't responded.
- `APPROVED` — The reviewer has approved the item.
- `DECLINED` — The reviewer has declined the item.

