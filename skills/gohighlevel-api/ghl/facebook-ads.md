# Facebook Ads

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/facebook-ads
- **Summary:** Facebook Ads

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/facebook-ads#__docusaurus_skipToContent_fallback)

Version: v3

Documentation for Ad-publishing API

[📄️Search targeting options\
---------------------------\
\
Search Facebook geo-locations and interests for ad targeting](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-search-targeting)

[📄️Publish campaign\
-------------------\
\
Publish a Facebook campaign and push it live to Facebook](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-publish-campaign)

[📄️Get conversion pixels\
------------------------\
\
Retrieve Facebook conversion pixels for a location. For the FACEBOOK channel, without \`limit\` the response is \`{ items, total }\`; when \`limit\` is provided (max 100) the response is a paginated \`{ items, paging }\` envelope — pass \`after\` (from \`paging.next\`) to fetch the next batch. By default each item is returned in full; pass \`projection\` (comma-separated) to return only the requested fields, chosen from \`createdAt\`, \`fbIsCrmPixel\`, \`fbPixelCode\`, \`fbPixelId\`, \`name\`, \`type\` (any other value is rejected).](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-pixels)

[📄️Upsert conversion pixel\
--------------------------\
\
Create or update a Facebook conversion pixel configuration](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-pixel)

[📄️Get custom audiences\
-----------------------\
\
Retrieve Facebook custom audiences for a location. Without \`limit\` the response is a plain array. When \`limit\` is provided (max 100) the response is a paginated \`{ customAudiences, paging }\` envelope; pass \`after\` (from \`paging.next\`) to fetch the next batch. By default each item is returned in full; pass \`projection\` (comma-separated, dot-notation for nested fields, e.g. ?projection=id,name,dataSource.type) to return only the requested fields — any value outside the known field set is rejected.](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audiences)

[📄️Delete custom audience\
-------------------------\
\
Delete a Facebook custom audience by ID](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-custom-audience)

[📄️Update custom audience\
-------------------------\
\
Update name or description of a Facebook custom audience](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-update-custom-audience)

[📄️Get custom audience by ID\
----------------------------\
\
Retrieve a specific Facebook custom audience by its ID](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-custom-audience-by-id)

[📄️Add custom audience member\
-----------------------------\
\
Add a member to a Facebook custom audience](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-add-custom-audience-member)

[📄️Remove custom audience member\
--------------------------------\
\
Remove a member from a Facebook custom audience](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-remove-custom-audience-member)

[📄️Batch update audience members\
--------------------------------\
\
Add or remove members in bulk from a Facebook custom audience via CSV or smart lists](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-batch-update-audience-members)

[📄️Get campaign with linked entities\
------------------------------------\
\
Retrieve a Facebook campaign with its linked adsets and ads](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign)

[📄️Get entities\
---------------\
\
Retrieve Facebook campaigns, adsets, or ads based on entity type](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-entity)

[📄️Upsert campaign\
------------------\
\
Create or update a Facebook campaign](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-campaign)

[📄️Upsert adset\
---------------\
\
Create or update a Facebook ad set](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-adset)

[📄️Upsert ad\
------------\
\
Create or update a Facebook ad](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-upsert-ad)

[📄️Pause campaign\
-----------------\
\
Pause a running Facebook campaign](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-pause-campaign)

[📄️Resume campaign\
------------------\
\
Resume a paused Facebook campaign](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-campaign)

[📄️Duplicate campaign\
---------------------\
\
Duplicate an existing Facebook campaign](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-duplicate-campaign)

[📄️Delete campaign\
------------------\
\
Delete a Facebook campaign by ID](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-campaign)

[📄️Pause ad set\
---------------\
\
Pause a running Facebook ad set](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-pause-adset)

[📄️Resume ad set\
----------------\
\
Resume a paused Facebook ad set](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-adset)

[📄️Duplicate ad set\
-------------------\
\
Duplicate an existing Facebook ad set](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-duplicate-adset)

[📄️Delete ad set\
----------------\
\
Delete a Facebook ad set by ID](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-adset)

[📄️Pause ad\
-----------\
\
Pause a running Facebook ad](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-pause-ad)

[📄️Resume ad\
------------\
\
Resume a paused Facebook ad](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-resume-ad)

[📄️Duplicate ad\
---------------\
\
Duplicate an existing Facebook ad](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-duplicate-ad)

[📄️Delete ad\
------------\
\
Delete a Facebook ad by ID](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-delete-ad)

[📄️Get campaign publishing progress\
-----------------------------------\
\
Returns Redis-backed publish progress for a campaign while it is publishing to Meta. Used by the validation funnel UI to poll step counts and completion state.](https://marketplace.gohighlevel.com/docs/ghl/ad-publishing/fb-get-campaign-publishing-progress)
