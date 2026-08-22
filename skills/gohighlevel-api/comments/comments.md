# Comments

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/comments
- **Summary:** Comments

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/comments#__docusaurus_skipToContent_fallback)

Version: v3

Documentation for Social Media Posting API

[📄️Create a comment or reply\
----------------------------\
\
Create a top-level comment on a post (\`isParentThread: true\`, \`parentId\` = postId) or a reply to an existing comment (\`isParentThread: false\`, \`parentId\` = commentId). Per-platform content max length: Facebook 8000, Instagram 2200, Linkedin 3000, Community 8000, Tiktok 150, Bluesky 300, Youtube 10000, Threads 500.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-comment)

[📄️Like a comment\
-----------------\
\
Like a comment by its \*\*Highlevel\*\* comment ID (the \`_id\` returned by the list-comments endpoint — not the native platform ID).](https://marketplace.gohighlevel.com/docs/ghl/social-planner/create-like)

[📄️Unlike a comment\
-------------------\
\
Remove a like from a comment by its \*\*Highlevel\*\* comment ID (the \`_id\` returned by the list-comments endpoint — not the native platform ID).](https://marketplace.gohighlevel.com/docs/ghl/social-planner/delete-like)

[📄️List comments for a post or thread\
-------------------------------------\
\
Paginated list of comments scoped to a post (\`parentId\` = postId) or a comment thread (\`parentId\` = commentId). Use \`skip\`/\`limit\` for pagination, \`sortBy\` for ordering, \`originIds\` to filter by connected account, and \`search\` for keyword search.](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-comment-list)
