# Lookup Contact By Email Or Phone

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/contacts/lookup-contact
- **Summary:** Lookup Contact By Email Or Phone Look up contacts matching an exact `email` or `phone`, scoped to a location, up to `limit` contacts (max 20) per page.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/contacts/lookup-contact#__docusaurus_skipToContent_fallback)

Version: v3New

Lookup Contact By Email Or Phone
================================

GET 

/contacts/lookup
----------------

Look up contacts matching an exact `email` or `phone`, scoped to a location, up to `limit` contacts (max 20) per page. Also matches against a contact's additional emails and additional phone numbers. Exactly one of `email` or `phone` must be provided. Paginate with `nextCursor`. Returns an empty `contacts` array if no contact matches. OAuth channel only.

Request[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/lookup-contact#request "Direct link to request")

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/contacts/lookup-contact#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

Bad Request

Unauthorized

Unprocessable Entity
