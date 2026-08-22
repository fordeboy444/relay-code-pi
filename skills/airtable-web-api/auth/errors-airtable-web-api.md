# Errors - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/errors
- **Summary:** The Airtable Web API follows HTTP status code semantics. 2xx codes signify success, 4xx mostly represent user error, 5xx generally correspond to a server error.

Guide

Errors
======

The Airtable Web API follows HTTP status code semantics.

2xx codes signify success, 4xx mostly represent user error, 5xx generally correspond to a server error. The error messages will return a JSON-encoded body that contains **error** and **message** fields. Those will provide specific error condition and human-readable message to identify what caused the error.

Success code

### 
`200 OK`

Request completed successfully.

**Receiving a 200 OK response with an empty base array (Enterprise)**

If you receive a `200 OK` response but the base array is empty, this typically indicates that an Enterprise-level setting is restricting API access.

To resolve this, check the **Integrations and Development** settings at both the Enterprise and org unit levels. The most common cause is the **Block API access to organization-owned apps & workspaces** setting, which restricts third-party access to the API.

User error codes

These errors generally indicate a problem on the client side. If you are getting one of these, check your code and the request details.

### 
`400 Bad Request`

The request encoding is invalid; the request can't be parsed as a valid JSON.

### 
`401 Unauthorized`

Accessing a protected resource without authorization or with invalid credentials.

### 
`403 Forbidden`

Accessing a protected resource with API credentials that don't have access to that resource.

See [below](https://airtable.com/developers/web/api/errors#anchor-403)
 for examples and suggested debugging steps.

### 
`404 Not Found`

Route or resource is not found. This error is returned when the request hits an undefined route, or if the resource doesn't exist (e.g. has been deleted).

### 
`413 Request Entity Too Large`

The request exceeded the maximum allowed payload size. You shouldn't encounter this under normal use.

### 
`422 Invalid Request`

The request data is invalid. This includes most of the base-specific validations. You will receive a detailed error message and code pointing to the exact issue.

### 
`429 Too Many Requests`

The API is limited to 5 requests per second per base. You will receive a 429 status code and a message "Rate limit exceeded. Please try again later" and will need to wait 30 seconds before subsequent requests will succeed. To learn more about rate limits, please visit our [Rate Limits](https://airtable.com/developers/web/api/rate-limits)
 guide.

Server error codes

These errors generally represent an error on our side. In the event of a 5xx error code, detailed information about the error will be automatically recorded, and Airtable's developers will be notified.

### 
`500 Internal Server Error`

The server encountered an unexpected condition.

### 
`502 Bad Gateway`

Airtable's servers are restarting or an unexpected outage is in progress. You should generally not receive this error, and requests are safe to retry.

### 
`503 Service Unavailable`

The server could not process your request in time. The server could be temporarily unavailable, or it could have timed out processing your request. You should retry the request with backoffs.

Example error responses

### 
`404`

The path is not valid.

### 
`403`

You don't have the right permission for the resource, or the resource was not found.

Check that both you and the token have access to the resource. For example, to access a base using a personal access token, your user must be a collaborator _and_ the token must also have access to the base. See [this guide](https://airtable.com/developers/web/api/authentication#scopes-and-resources-access)
 for more details.

You don't have permission to create records in the given table. This is returned both when creating records directly, and when creating linked records while updating cell values.

Check whether the table or any fields you are setting values for have [editing permissions](https://support.airtable.com/docs/using-field-and-table-editing-permissions)
 limited.

You don't have permission to update cell values in the given field. Check whether the field has [editing permissions](https://support.airtable.com/docs/using-field-and-table-editing-permissions)
 limited.

You don't have the right permission for the action.

### 
`422`

The path is correct, however the body is either not understood or not permitted.

### 
`429`

The request has been rate limited.

### 
`503`

The server is temporarily unavailable and the request should be retried. The `Retry-After` header may be provided.

!!
