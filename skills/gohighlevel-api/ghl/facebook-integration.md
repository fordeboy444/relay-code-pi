# Facebook Integration

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/facebook-integration
- **Summary:** Facebook Integration

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/facebook-integration#__docusaurus_skipToContent_fallback)

Version: v3

Documentation for Ad-publishing API

[📄️Get current Facebook user\
----------------------------\
\
Retrieve the authenticated Facebook user profile for a location](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-current-user)

[📄️Get Facebook pages\
---------------------\
\
Retrieve Facebook pages for the connected account. Without \`limit\` the response is an array of pages (this array response will soon be deprecated — migrate to the paginated form). When \`limit\` is provided the response is a paginated \`{ pages, paging }\` envelope; pass \`after\` (from \`paging.next\`) to fetch the next batch.](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pages)

[📄️Get Instagram accounts for page\
----------------------------------\
\
Retrieve Instagram accounts linked to a specific Facebook page](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-instagram-accounts)

[📄️Get page lead forms\
----------------------\
\
Retrieve lead gen forms for a specific Facebook page (published + drafts), sorted newest-first by \`createdTime\`. By default each form is returned in full (including its \`questions\`) as a plain array; pass \`projection\` (comma-separated) to return only the requested fields — any value outside the known field set is rejected. Pass \`limit\` (max 100) for a \`{ forms, paging }\` envelope; use \`after\` (from \`paging.next\`) to fetch the next batch.](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-page-lead-forms)

[📄️Create page lead form\
------------------------\
\
Create a new lead gen form on a Facebook page](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-page-lead-form)

[📄️Get ad accounts\
------------------\
\
Retrieve Facebook ad accounts available for the connected user](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-accounts)

[📄️Get ad account details\
-------------------------\
\
Retrieve details of a specific Facebook ad account](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-ad-account)

[📄️Delete ad account\
--------------------\
\
Remove a Facebook ad account connection from a location](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-ad-account)

[📄️Get conversation forms\
-------------------------\
\
Retrieve Facebook conversation lead forms for a location. Without \`limit\` the response is a plain array. When \`limit\` is provided (max 100) the response is a paginated \`{ conversationForms, paging }\` envelope; pass \`after\` (from \`paging.next\`) to fetch the next batch.](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-conversation-forms)

[📄️Create conversation form\
---------------------------\
\
Create a new Facebook conversation lead form](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-conversation-form)

[📄️Create Facebook integration\
------------------------------\
\
Create a Facebook ad integration for a location with page and ad account](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-create-integration)

[📄️Get Facebook integration\
---------------------------\
\
Retrieve the Facebook ad integration details for a location](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-integration)

[📄️Delete Facebook integration\
------------------------------\
\
Remove the Facebook ad integration from a location](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-integration)

[📄️Delete page connection\
-------------------------\
\
Remove a Facebook page connection from a location](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-page)

[📄️Set default page\
-------------------\
\
Set the default Facebook page for a location](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-set-default-page)

[📄️Get lead form by ID\
----------------------\
\
Retrieve a specific Facebook lead form by its ID](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-lead-form)
