# Delete Pipeline

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-pipeline
- **Summary:** Permanently deletes a pipeline and all opportunities within it. This action is irreversible — all opportunities across every stage of this pipeline will be removed. Ensure you have migrated or exported any opportunities before calling this endpoint.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-pipeline#__docusaurus_skipToContent_fallback)

Version: v3

Delete Pipeline
===============

DELETE 

https://services.leadconnectorhq.com/opportunities/pipelines/:pipelineId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Permanently deletes a pipeline and all opportunities within it. This action is irreversible — all opportunities across every stage of this pipeline will be removed. Ensure you have migrated or exported any opportunities before calling this endpoint.

### Requirements

#### Scope(s)

`pipelines.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-pipeline#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**pipelineId** stringrequired

The unique identifier of the pipeline

**Example:** `aWdODOBVOlH1RUFKWQke`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/opportunities/delete-pipeline#responses "Direct link to Responses")

*   200
*   400
*   401

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**success**boolean

Whether the pipeline was successfully deleted

**Example:** `true`

**message**string

Error message if the deletion failed

**Example:** `something went wrong`

    {  "success": true,  "message": "something went wrong"}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/opportunities/opportunities-api-v-3#authentication)
**type:** http**scopes:** `pipelines.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X DELETE 'https://services.leadconnectorhq.com/opportunities/pipelines/aWdODOBVOlH1RUFKWQke' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

pipelineId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
