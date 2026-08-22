# Like a comment

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-like
- **Summary:** /social-media-posting/comments/:platform/:id/like Like a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-like#__docusaurus_skipToContent_fallback)

Version: v3

Like a comment
==============

POST 

/social-media-posting/comments/:platform/:id/like

Like a comment by its **Highlevel** comment ID (the `_id` returned by the list-comments endpoint — not the native platform ID).

Works for any comment level — top-level comments, replies, and replies-to-replies. **Supported platforms:** Facebook, LinkedIn, Community, TikTok, Bluesky. Instagram is not supported (passing `instagram` returns 400).

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-like#request "Direct link to request")

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-like#responses "Direct link to Responses")

*   201
*   400
*   401
*   422

Successful response

State conflict (already liked) or unsupported platform (Instagram)

Unauthorized

Unprocessable Entity
