# Changelog

- **URL:** https://marketplace.gohighlevel.com/docs/Changelog
- **Summary:** 2026-08-10

[Skip to main content](https://marketplace.gohighlevel.com/docs/Changelog#__docusaurus_skipToContent_fallback)

Version: v3

On this page

2026-08-10[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-10 "Direct link to 2026-08-10")

**Oauth**

### POST /oauth/location-token[​](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthlocation-token "Direct link to POST /oauth/location-token")

Backward compatible

These changes rename the response fields to snake_case (`access_token`, `expires_in`, `refresh_token`, `token_type`) to align with the **OAuth 2.0 RFC** standard. This change is **backward compatible** — the previous camelCase fields (`accessToken`, `expiresIn`, `refreshToken`, `tokenType`) continue to work, so no action is required. New integrations should use the snake_case fields.

*   ⚠️ removed the optional property `accessToken` from the response with the `200` status
*   ⚠️ removed the optional property `expiresIn` from the response with the `200` status
*   ⚠️ removed the optional property `refreshToken` from the response with the `200` status
*   ⚠️ removed the optional property `tokenType` from the response with the `200` status
*   added the optional property `access_token` to the response with the `200` status
*   added the optional property `expires_in` to the response with the `200` status
*   added the optional property `refresh_token` to the response with the `200` status
*   added the optional property `token_type` to the response with the `200` status

### POST /oauth/token[​](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthtoken "Direct link to POST /oauth/token")

Backward compatible

These changes move the request and response fields to snake_case (`client_id`, `client_secret`, `grant_type`, `redirect_uri`, `refresh_token`, `user_type`, `access_token`, `expires_in`, `token_type`) and accept the request body as `application/x-www-form-urlencoded` to align with the **OAuth 2.0 RFC** standard. This change is **backward compatible** — the previous camelCase properties (`clientId`, `clientSecret`, `grantType`, `redirectUri`, `refreshToken`, `userType`) continue to work, so no action is required. New integrations should use the snake_case fields.

*   ⚠️ added the new required request property `client_id`
*   ⚠️ added the new required request property `client_secret`
*   ⚠️ added the new required request property `grant_type`
*   ⚠️ removed the request property `clientId`
*   ⚠️ removed the request property `clientSecret`
*   ⚠️ removed the request property `grantType`
*   ⚠️ removed the request property `redirectUri`
*   ⚠️ removed the request property `refreshToken`
*   ⚠️ removed the request property `userType`
*   ⚠️ removed the optional property `accessToken` from the response with the `200` status
*   ⚠️ removed the optional property `expiresIn` from the response with the `200` status
*   ⚠️ removed the optional property `refreshToken` from the response with the `200` status
*   ⚠️ removed the optional property `tokenType` from the response with the `200` status
*   added the new optional request property `redirect_uri`
*   added the new optional request property `refresh_token`
*   added the new optional request property `user_type`
*   added the optional property `access_token` to the response with the `200` status
*   added the optional property `expires_in` to the response with the `200` status
*   added the optional property `refresh_token` to the response with the `200` status
*   added the optional property `token_type` to the response with the `200` status

2026-08-06[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-06 "Direct link to 2026-08-06")

**Saas Api**

### GET /saas/locations[​](https://marketplace.gohighlevel.com/docs/Changelog#get-saaslocations "Direct link to GET /saas/locations")

*   ⚠️ added the new required `query` request parameter `companyId`
*   the `query` request parameter `customerId` became optional
*   the `query` request parameter `subscriptionId` became optional
*   added the media type `application/json` for the response with the status `200`
*   added the non-success response with the status `400`
*   added the non-success response with the status `401`
*   added the non-success response with the status `404`
*   added the non-success response with the status `500`

2026-08-05[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-05 "Direct link to 2026-08-05")

**Ad Publishing**

### GET /ad-publishing/facebook/reporting/list[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookreportinglist "Direct link to GET /ad-publishing/facebook/reporting/list")

*   ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
*   added the new enum value `ads` to the `query` request parameter `listType`
*   added the new enum value `adsets` to the `query` request parameter `listType`
*   added the new enum value `campaigns` to the `query` request parameter `listType`
*   added the new enum value `none` to the `query` request parameter `listType`

### GET /ad-publishing/google/reporting/list[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggooglereportinglist "Direct link to GET /ad-publishing/google/reporting/list")

*   ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
*   added the new enum value `adGroups` to the `query` request parameter `listType`
*   added the new enum value `ads` to the `query` request parameter `listType`
*   added the new enum value `campaigns` to the `query` request parameter `listType`
*   added the new enum value `keywords` to the `query` request parameter `listType`

### GET /ad-publishing/linkedin/reporting/list[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinglinkedinreportinglist "Direct link to GET /ad-publishing/linkedin/reporting/list")

*   ⚠️ the `query` request parameter `listType` was restricted to a list of enum values
*   added the new enum value `ads` to the `query` request parameter `listType`
*   added the new enum value `campaignGroups` to the `query` request parameter `listType`
*   added the new enum value `campaigns` to the `query` request parameter `listType`

2026-08-03[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-03 "Direct link to 2026-08-03")

**Contacts**

### GET /contacts/lookup[​](https://marketplace.gohighlevel.com/docs/Changelog#get-contactslookup "Direct link to GET /contacts/lookup")

*   endpoint added **Ad Publishing**

### GET /ad-publishing/facebook/conversation-forms[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookconversation-forms "Direct link to GET /ad-publishing/facebook/conversation-forms")

*   ⚠️ deleted the `query` request parameter `isDraft`
*   added the new optional `query` request parameter `after`
*   added the new optional `query` request parameter `limit`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/custom-audience[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookcustom-audience "Direct link to GET /ad-publishing/facebook/custom-audience")

*   added the new optional `query` request parameter `after`
*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `projection`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/page/{pageId}/forms[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookpagepageidforms "Direct link to GET /ad-publishing/facebook/page/{pageId}/forms")

*   ⚠️ deleted the `query` request parameter `isDraft`
*   added the new optional `query` request parameter `after`
*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `projection`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/facebook/pixels[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookpixels "Direct link to GET /ad-publishing/facebook/pixels")

*   added the new optional `query` request parameter `after`
*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `projection`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/assets[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleassets "Direct link to GET /ad-publishing/google/assets")

*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `pageToken`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/audiences[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleaudiences "Direct link to GET /ad-publishing/google/audiences")

*   ⚠️ deleted the `query` request parameter `isDraft`
*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `pageToken`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/conversion-goals[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleconversion-goals "Direct link to GET /ad-publishing/google/conversion-goals")

*   ⚠️ deleted the `query` request parameter `isDraft`
*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `pageToken`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/conversions[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleconversions "Direct link to GET /ad-publishing/google/conversions")

*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `pageToken`

### GET /ad-publishing/google/segments[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggooglesegments "Direct link to GET /ad-publishing/google/segments")

*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `pageToken`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/google/target-interests[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogletarget-interests "Direct link to GET /ad-publishing/google/target-interests")

*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `pageToken`
*   added the new optional `query` request parameter `projection`
*   added the media type `application/json` for the response with the status `200`

### GET /ad-publishing/linkedin/{accountId}/forms[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinglinkedinaccountidforms "Direct link to GET /ad-publishing/linkedin/{accountId}/forms")

*   ⚠️ deleted the `query` request parameter `isDraft`
*   added the new optional `query` request parameter `limit`
*   added the new optional `query` request parameter `pageToken`
*   added the new optional `query` request parameter `projection`
*   added the media type `application/json` for the response with the status `200`

2026-07-30[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-07-30 "Direct link to 2026-07-30")

**Brand Boards**

No changes to report, but the specs are different

2026-07-28[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-07-28 "Direct link to 2026-07-28")

**Opportunities**

### GET /opportunities/{id}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-opportunitiesid "Direct link to GET /opportunities/{id}")

*   added `#/components/schemas/GetOpportunityResponseSchema` to the `opportunity` response property `allOf` list for the response status `200`
*   removed `#/components/schemas/SearchOpportunitiesResponseSchema` from the `opportunity` response property `allOf` list for the response status `200`

2026-07-07[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-07-07 "Direct link to 2026-07-07")

**Ad Publishing**

### GET /ad-publishing/facebook/pages[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookpages "Direct link to GET /ad-publishing/facebook/pages")

*   added the new optional `query` request parameter `after`
*   added the new optional `query` request parameter `limit`
*   added the media type `application/json` for the response with the status `200`

2026-06-26[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-26 "Direct link to 2026-06-26")

**Opportunities**

### POST /opportunities/pipelines[​](https://marketplace.gohighlevel.com/docs/Changelog#post-opportunitiespipelines "Direct link to POST /opportunities/pipelines")

*   endpoint added

### DELETE /opportunities/pipelines/{pipelineId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-opportunitiespipelinespipelineid "Direct link to DELETE /opportunities/pipelines/{pipelineId}")

*   endpoint added

### GET /opportunities/pipelines/{pipelineId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-opportunitiespipelinespipelineid "Direct link to GET /opportunities/pipelines/{pipelineId}")

*   endpoint added

### PUT /opportunities/pipelines/{pipelineId}[​](https://marketplace.gohighlevel.com/docs/Changelog#put-opportunitiespipelinespipelineid "Direct link to PUT /opportunities/pipelines/{pipelineId}")

*   endpoint added

2026-06-18[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-18 "Direct link to 2026-06-18")

**Ad Publishing**

### GET /ad-publishing/facebook/campaigns/{campaignId}/publishing-progress[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookcampaignscampaignidpublishing-progress "Direct link to GET /ad-publishing/facebook/campaigns/{campaignId}/publishing-progress")

**Saas**

### GET /saas/allow-attach-rebilling/{locationId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-saasallow-attach-rebillinglocationid "Direct link to GET /saas/allow-attach-rebilling/{locationId}")

*   endpoint added

2026-06-15[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-15 "Direct link to 2026-06-15")

**Users**

### POST /users/[​](https://marketplace.gohighlevel.com/docs/Changelog#post-users "Direct link to POST /users/")

*   ⚠️ added the new `pipelines.create` enum value to the `scopes` response property for the response status `201`
*   added the new `pipelines.create` enum value to the request property `scopes/items/`
*   added the new `pipelines.create` enum value to the request property `scopesAssignedToOnly/items/`

### GET /users/search[​](https://marketplace.gohighlevel.com/docs/Changelog#get-userssearch "Direct link to GET /users/search")

*   ⚠️ added the new `pipelines.create` enum value to the `users/items/scopes` response property for the response status `200`

### POST /users/search/filter-by-email[​](https://marketplace.gohighlevel.com/docs/Changelog#post-userssearchfilter-by-email "Direct link to POST /users/search/filter-by-email")

*   ⚠️ added the new `pipelines.create` enum value to the `users/items/scopes` response property for the response status `200`

### GET /users/{userId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-usersuserid "Direct link to GET /users/{userId}")

*   ⚠️ added the new `pipelines.create` enum value to the `scopes` response property for the response status `200`

### PUT /users/{userId}[​](https://marketplace.gohighlevel.com/docs/Changelog#put-usersuserid "Direct link to PUT /users/{userId}")

*   ⚠️ added the new `pipelines.create` enum value to the `scopes` response property for the response status `200`
*   added the new `pipelines.create` enum value to the request property `scopes/items/`
*   added the new `pipelines.create` enum value to the request property `scopesAssignedToOnly/items/`

2026-06-12[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-12 "Direct link to 2026-06-12")

**Ad Publishing**

### GET /ad-publishing/facebook/reporting/list[​](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookreportinglist-1 "Direct link to GET /ad-publishing/facebook/reporting/list")

*   the `query` request parameter `campaignId` became optional

2026-06-11[​](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-11 "Direct link to 2026-06-11")

**Brand Boards**

### GET /brand-boards/locations/{locationId}/brand-voices[​](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardslocationslocationidbrand-voices "Direct link to GET /brand-boards/locations/{locationId}/brand-voices")

*   endpoint added

### POST /brand-boards/locations/{locationId}/brand-voices[​](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardslocationslocationidbrand-voices "Direct link to POST /brand-boards/locations/{locationId}/brand-voices")

*   endpoint added

### DELETE /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-brand-boardslocationslocationidbrand-voicesbrandvoiceid "Direct link to DELETE /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}")

*   endpoint added

### GET /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardslocationslocationidbrand-voicesbrandvoiceid "Direct link to GET /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}")

*   endpoint added

### PATCH /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#patch-brand-boardslocationslocationidbrand-voicesbrandvoiceid "Direct link to PATCH /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}")

*   endpoint added

### POST /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}/default[​](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardslocationslocationidbrand-voicesbrandvoiceiddefault "Direct link to POST /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}/default")

*   endpoint added

### GET /brand-boards/public/v1/locations/{locationId}/voices[​](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardspublicv1locationslocationidvoices "Direct link to GET /brand-boards/public/v1/locations/{locationId}/voices")

*   api path removed with deprecation

### POST /brand-boards/public/v1/locations/{locationId}/voices[​](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardspublicv1locationslocationidvoices "Direct link to POST /brand-boards/public/v1/locations/{locationId}/voices")

*   api path removed with deprecation

### DELETE /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-brand-boardspublicv1locationslocationidvoicesbrandvoiceid "Direct link to DELETE /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}")

*   api path removed with deprecation

### GET /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardspublicv1locationslocationidvoicesbrandvoiceid "Direct link to GET /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}")

*   api path removed with deprecation

### PATCH /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#patch-brand-boardspublicv1locationslocationidvoicesbrandvoiceid "Direct link to PATCH /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}")

*   api path removed with deprecation

### POST /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}/default[​](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardspublicv1locationslocationidvoicesbrandvoiceiddefault "Direct link to POST /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}/default")

*   api path removed with deprecation

**Email Isv**

### POST /email/verify[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailverify "Direct link to POST /email/verify")

*   ⚠️ added `#/components/schemas/EmailVerifiedV3ResponseDto, #/components/schemas/LeadConnectorRecommendationDto` to the response body `oneOf` list for the response status `201`
*   removed `#/components/schemas/EmailVerifiedResponseDto` from the response body `oneOf` list for the response status `201`

Components[​](https://marketplace.gohighlevel.com/docs/Changelog#components "Direct link to Components")

*   removed the schema `EmailVerifiedResponseDto`
*   removed the schema `LeadConnectorRecomandationDto`
*   the component security scheme `Agency-Access-Only` was added
*   the component security scheme `Location-Access-Only` was added

**Emails**

### GET /emails/builder[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailsbuilder "Direct link to GET /emails/builder")

*   api path removed with deprecation

### POST /emails/builder[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailsbuilder "Direct link to POST /emails/builder")

*   api path removed with deprecation

### POST /emails/builder/data[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailsbuilderdata "Direct link to POST /emails/builder/data")

*   api path removed with deprecation

### DELETE /emails/builder/{locationId}/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailsbuilderlocationidtemplateid "Direct link to DELETE /emails/builder/{locationId}/{templateId}")

*   api path removed with deprecation

### PATCH /emails/builder/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailsbuildertemplateid "Direct link to PATCH /emails/builder/{templateId}")

*   api path removed with deprecation

### GET /emails/campaigns/bulk-actions[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailscampaignsbulk-actions "Direct link to GET /emails/campaigns/bulk-actions")

*   api path removed with deprecation

### GET /emails/campaigns/workflows[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailscampaignsworkflows "Direct link to GET /emails/campaigns/workflows")

*   api path removed with deprecation

### GET /emails/locations/{locationId}/campaigns/bulk-actions[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsbulk-actions "Direct link to GET /emails/locations/{locationId}/campaigns/bulk-actions")

*   endpoint added

### GET /emails/locations/{locationId}/campaigns/bulk-actions/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsbulk-actionscampaignid "Direct link to GET /emails/locations/{locationId}/campaigns/bulk-actions/{campaignId}")

*   endpoint added

### GET /emails/locations/{locationId}/campaigns/emails[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsemails "Direct link to GET /emails/locations/{locationId}/campaigns/emails")

*   endpoint added

### POST /emails/locations/{locationId}/campaigns/emails[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidcampaignsemails "Direct link to POST /emails/locations/{locationId}/campaigns/emails")

*   endpoint added

### DELETE /emails/locations/{locationId}/campaigns/emails/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailslocationslocationidcampaignsemailscampaignid "Direct link to DELETE /emails/locations/{locationId}/campaigns/emails/{campaignId}")

*   endpoint added

### GET /emails/locations/{locationId}/campaigns/emails/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsemailscampaignid "Direct link to GET /emails/locations/{locationId}/campaigns/emails/{campaignId}")

*   endpoint added

### PATCH /emails/locations/{locationId}/campaigns/emails/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailslocationslocationidcampaignsemailscampaignid "Direct link to PATCH /emails/locations/{locationId}/campaigns/emails/{campaignId}")

*   endpoint added

### POST /emails/locations/{locationId}/campaigns/emails/{campaignId}/schedule[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidcampaignsemailscampaignidschedule "Direct link to POST /emails/locations/{locationId}/campaigns/emails/{campaignId}/schedule")

*   endpoint added

### GET /emails/locations/{locationId}/campaigns/stats/{source}/{sourceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsstatssourcesourceid "Direct link to GET /emails/locations/{locationId}/campaigns/stats/{source}/{sourceId}")

*   endpoint added

### GET /emails/locations/{locationId}/campaigns/workflows[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsworkflows "Direct link to GET /emails/locations/{locationId}/campaigns/workflows")

*   endpoint added

### GET /emails/locations/{locationId}/campaigns/workflows/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsworkflowscampaignid "Direct link to GET /emails/locations/{locationId}/campaigns/workflows/{campaignId}")

*   endpoint added

### GET /emails/locations/{locationId}/templates[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidtemplates "Direct link to GET /emails/locations/{locationId}/templates")

*   endpoint added

### POST /emails/locations/{locationId}/templates[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidtemplates "Direct link to POST /emails/locations/{locationId}/templates")

*   endpoint added

### POST /emails/locations/{locationId}/templates/folders[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidtemplatesfolders "Direct link to POST /emails/locations/{locationId}/templates/folders")

*   endpoint added

### POST /emails/locations/{locationId}/templates/import[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidtemplatesimport "Direct link to POST /emails/locations/{locationId}/templates/import")

*   endpoint added

### DELETE /emails/locations/{locationId}/templates/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailslocationslocationidtemplatestemplateid "Direct link to DELETE /emails/locations/{locationId}/templates/{templateId}")

*   endpoint added

### GET /emails/locations/{locationId}/templates/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidtemplatestemplateid "Direct link to GET /emails/locations/{locationId}/templates/{templateId}")

*   endpoint added

### PATCH /emails/locations/{locationId}/templates/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailslocationslocationidtemplatestemplateid "Direct link to PATCH /emails/locations/{locationId}/templates/{templateId}")

*   endpoint added

### GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsbulk-actions "Direct link to GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsbulk-actionscampaignid "Direct link to GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions/{campaignId}")

*   api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/campaigns/email-campaign[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidcampaignsemail-campaign "Direct link to POST /emails/public/v2/locations/{locationId}/campaigns/email-campaign")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/emails[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsemails "Direct link to GET /emails/public/v2/locations/{locationId}/campaigns/emails")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/emails/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsemailscampaignid "Direct link to GET /emails/public/v2/locations/{locationId}/campaigns/emails/{campaignId}")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/stats/{source}/{sourceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsstatssourcesourceid "Direct link to GET /emails/public/v2/locations/{locationId}/campaigns/stats/{source}/{sourceId}")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/workflows[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsworkflows "Direct link to GET /emails/public/v2/locations/{locationId}/campaigns/workflows")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/campaigns/workflows/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsworkflowscampaignid "Direct link to GET /emails/public/v2/locations/{locationId}/campaigns/workflows/{campaignId}")

*   api path removed with deprecation

### DELETE /emails/public/v2/locations/{locationId}/campaigns/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailspublicv2locationslocationidcampaignscampaignid "Direct link to DELETE /emails/public/v2/locations/{locationId}/campaigns/{campaignId}")

*   api path removed with deprecation

### PATCH /emails/public/v2/locations/{locationId}/campaigns/{campaignId}[​](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailspublicv2locationslocationidcampaignscampaignid "Direct link to PATCH /emails/public/v2/locations/{locationId}/campaigns/{campaignId}")

*   api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/campaigns/{campaignId}/schedule[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidcampaignscampaignidschedule "Direct link to POST /emails/public/v2/locations/{locationId}/campaigns/{campaignId}/schedule")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/templates[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidtemplates "Direct link to GET /emails/public/v2/locations/{locationId}/templates")

*   api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/templates[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidtemplates "Direct link to POST /emails/public/v2/locations/{locationId}/templates")

*   api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/templates/folders[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidtemplatesfolders "Direct link to POST /emails/public/v2/locations/{locationId}/templates/folders")

*   api path removed with deprecation

### POST /emails/public/v2/locations/{locationId}/templates/import[​](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidtemplatesimport "Direct link to POST /emails/public/v2/locations/{locationId}/templates/import")

*   api path removed with deprecation

### DELETE /emails/public/v2/locations/{locationId}/templates/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailspublicv2locationslocationidtemplatestemplateid "Direct link to DELETE /emails/public/v2/locations/{locationId}/templates/{templateId}")

*   api path removed with deprecation

### GET /emails/public/v2/locations/{locationId}/templates/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidtemplatestemplateid "Direct link to GET /emails/public/v2/locations/{locationId}/templates/{templateId}")

*   api path removed with deprecation

### PATCH /emails/public/v2/locations/{locationId}/templates/{templateId}[​](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailspublicv2locationslocationidtemplatestemplateid "Direct link to PATCH /emails/public/v2/locations/{locationId}/templates/{templateId}")

*   api path removed with deprecation

### GET /emails/schedule[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailsschedule "Direct link to GET /emails/schedule")

*   api path removed with deprecation

### GET /emails/stats/location/{locationId}/{source}/{sourceId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-emailsstatslocationlocationidsourcesourceid "Direct link to GET /emails/stats/location/{locationId}/{source}/{sourceId}")

*   api path removed with deprecation

**Opportunities**

### POST /opportunities/[​](https://marketplace.gohighlevel.com/docs/Changelog#post-opportunities "Direct link to POST /opportunities/")

*   ⚠️ removed `#/components/schemas/customFieldsInputStringSchema, #/components/schemas/customFieldsInputArraySchema, #/components/schemas/customFieldsInputObjectSchema` from the `customFields/items/` request property `anyOf` list
    
*   added `#/components/schemas/customFieldsInputStringSchemaV3, #/components/schemas/customFieldsInputArraySchemaV3, #/components/schemas/customFieldsInputObjectSchemaV3` to the `customFields/items/` request property `anyOf` list
    

### GET /opportunities/search[​](https://marketplace.gohighlevel.com/docs/Changelog#get-opportunitiessearch "Direct link to GET /opportunities/search")

*   ⚠️ added the new required `query` request parameter `locationId`
    
*   ⚠️ deleted the `query` request parameter `assigned_to`
    
*   ⚠️ deleted the `query` request parameter `contact_id`
    
*   ⚠️ deleted the `query` request parameter `location_id`
    
*   ⚠️ deleted the `query` request parameter `pipeline_id`
    
*   ⚠️ deleted the `query` request parameter `pipeline_stage_id`
    
*   added the new optional `query` request parameter `assignedTo`
    
*   added the new optional `query` request parameter `contactId`
    
*   added the new optional `query` request parameter `pipelineId`
    
*   added the new optional `query` request parameter `pipelineStageId`
    

### PUT /opportunities/{id}[​](https://marketplace.gohighlevel.com/docs/Changelog#put-opportunitiesid "Direct link to PUT /opportunities/{id}")

*   ⚠️ removed `#/components/schemas/customFieldsInputStringSchema, #/components/schemas/customFieldsInputArraySchema, #/components/schemas/customFieldsInputObjectSchema` from the `customFields/items/` request property `anyOf` list
    
*   added `#/components/schemas/customFieldsInputStringSchemaV3, #/components/schemas/customFieldsInputArraySchemaV3, #/components/schemas/customFieldsInputObjectSchemaV3` to the `customFields/items/` request property `anyOf` list
    

Components[​](https://marketplace.gohighlevel.com/docs/Changelog#components-1 "Direct link to Components")

*   removed the schema `CreateDto`
*   removed the schema `UpdateOpportunityDto`
*   removed the schema `customFieldsInputArraySchema`
*   removed the schema `customFieldsInputObjectSchema`
*   removed the schema `customFieldsInputStringSchema`

**Users**

### GET /users/[​](https://marketplace.gohighlevel.com/docs/Changelog#get-users "Direct link to GET /users/")

*   api removed with deprecation

### DELETE /users/{userId}[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-usersuserid "Direct link to DELETE /users/{userId}")

*   ⚠️ added the new required `header` request parameter `Version`
*   ⚠️ removed the optional property `succeded` from the response with the `200` status
*   added the optional property `succeeded` to the response with the `200` status

Components[​](https://marketplace.gohighlevel.com/docs/Changelog#components-2 "Direct link to Components")

*   removed the schema `DeleteUserSuccessfulResponseDto`

**Contacts**

### GET /contacts/[​](https://marketplace.gohighlevel.com/docs/Changelog#get-contacts "Direct link to GET /contacts/")

*   api removed with deprecation

### POST /contacts/[​](https://marketplace.gohighlevel.com/docs/Changelog#post-contacts "Direct link to POST /contacts/")

*   ⚠️ added `#/components/schemas/DndSettingsSchemaV3` to the `dndSettings` request property `allOf` list
*   ⚠️ removed `#/components/schemas/DndSettingsSchema` from the `dndSettings` request property `allOf` list
*   added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `201`
*   removed `#/components/schemas/CreateContactSchema` from the `contact` response property `allOf` list for the response status `201`

### POST /contacts/upsert[​](https://marketplace.gohighlevel.com/docs/Changelog#post-contactsupsert "Direct link to POST /contacts/upsert")

*   ⚠️ added `#/components/schemas/DndSettingsSchemaV3` to the `dndSettings` request property `allOf` list
*   ⚠️ removed `#/components/schemas/DndSettingsSchema` from the `dndSettings` request property `allOf` list
*   added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `200`
*   removed `#/components/schemas/GetContectByIdSchema` from the `contact` response property `allOf` list for the response status `200`

### GET /contacts/{contactId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-contactscontactid "Direct link to GET /contacts/{contactId}")

*   added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `200`
*   removed `#/components/schemas/GetContectByIdSchema` from the `contact` response property `allOf` list for the response status `200`

### PUT /contacts/{contactId}[​](https://marketplace.gohighlevel.com/docs/Changelog#put-contactscontactid "Direct link to PUT /contacts/{contactId}")

*   ⚠️ added `#/components/schemas/DndSettingsSchemaV3` to the `dndSettings` request property `allOf` list
*   ⚠️ removed `#/components/schemas/DndSettingsSchema` from the `dndSettings` request property `allOf` list
*   ⚠️ removed the optional property `succeded` from the response with the `200` status
*   added `#/components/schemas/GetContactByIdSchemaV3` to the `contact` response property `allOf` list for the response status `200`
*   removed `#/components/schemas/GetContectByIdSchema` from the `contact` response property `allOf` list for the response status `200`

### DELETE /contacts/{contactId}/campaigns/remove-all[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-contactscontactidcampaignsremove-all "Direct link to DELETE /contacts/{contactId}/campaigns/remove-all")

*   endpoint added

### DELETE /contacts/{contactId}/campaigns/removeAll[​](https://marketplace.gohighlevel.com/docs/Changelog#delete-contactscontactidcampaignsremoveall "Direct link to DELETE /contacts/{contactId}/campaigns/removeAll")

*   api path removed with deprecation

Components[​](https://marketplace.gohighlevel.com/docs/Changelog#components-3 "Direct link to Components")

*   removed the schema `ContactsByIdSuccessfulResponseDto`
*   removed the schema `CreateContactDto`
*   removed the schema `CreateContactSchema`
*   removed the schema `CreateContactsSuccessfulResponseDto`
*   removed the schema `DndSettingsSchema`
*   removed the schema `GetContectByIdSchema`
*   removed the schema `UpdateContactDto`
*   removed the schema `UpdateContactsSuccessfulResponseDto`
*   removed the schema `UpsertContactDto`
*   removed the schema `UpsertContactsSuccessfulResponseDto`

**Oauth**

### GET /oauth/installed-locations[​](https://marketplace.gohighlevel.com/docs/Changelog#get-oauthinstalled-locations "Direct link to GET /oauth/installed-locations")

*   endpoint added

### GET /oauth/installedLocations[​](https://marketplace.gohighlevel.com/docs/Changelog#get-oauthinstalledlocations "Direct link to GET /oauth/installedLocations")

*   ⚠️ api path removed without deprecation

### POST /oauth/location-token[​](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthlocation-token-1 "Direct link to POST /oauth/location-token")

*   endpoint added

### POST /oauth/locationToken[​](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthlocationtoken "Direct link to POST /oauth/locationToken")

*   ⚠️ api path removed without deprecation

### POST /oauth/token[​](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthtoken-1 "Direct link to POST /oauth/token")

*   ⚠️ added the new required `header` request parameter `Version`
*   ⚠️ added the new required request property `clientId`
*   ⚠️ added the new required request property `clientSecret`
*   ⚠️ added the new required request property `grantType`
*   ⚠️ removed the request property `client_id`
*   ⚠️ removed the request property `client_secret`
*   ⚠️ removed the request property `grant_type`
*   ⚠️ removed the request property `redirect_uri`
*   ⚠️ removed the request property `refresh_token`
*   ⚠️ removed the request property `user_type`
*   ⚠️ removed the optional property `access_token` from the response with the `200` status
*   ⚠️ removed the optional property `expires_in` from the response with the `200` status
*   ⚠️ removed the optional property `refresh_token` from the response with the `200` status
*   ⚠️ removed the optional property `token_type` from the response with the `200` status
*   added the new optional request property `redirectUri`
*   added the new optional request property `refreshToken`
*   added the new optional request property `userType`
*   added the media type `application/json` to the request body
*   added the optional property `accessToken` to the response with the `200` status
*   added the optional property `expiresIn` to the response with the `200` status
*   added the optional property `refreshToken` to the response with the `200` status
*   added the optional property `tokenType` to the response with the `200` status

Components[​](https://marketplace.gohighlevel.com/docs/Changelog#components-4 "Direct link to Components")

*   removed the schema `GetAccessCodeSuccessfulResponseDto`
*   removed the schema `GetAccessCodebodyDto`

**Phone System**

### GET /phone-system/numbers/location/{locationId}[​](https://marketplace.gohighlevel.com/docs/Changelog#get-phone-systemnumberslocationlocationid "Direct link to GET /phone-system/numbers/location/{locationId}")

*   ⚠️ added the new required `header` request parameter `version`
    
*   added the new optional `query` request parameter `page`
    
*   added the new optional `query` request parameter `pageSize`
    
*   added the media type `application/json` for the response with the status `200`
    

### POST /phone-system/numbers/location/{locationId}/purchase[​](https://marketplace.gohighlevel.com/docs/Changelog#post-phone-systemnumberslocationlocationidpurchase "Direct link to POST /phone-system/numbers/location/{locationId}/purchase")

*   ⚠️ added the new required `header` request parameter `version`
    
*   added the media type `application/json` for the response with the status `201`
    

*   [2026-08-10](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-10)
    *   [POST /oauth/location-token](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthlocation-token)
        
    *   [POST /oauth/token](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthtoken)
        
*   [2026-08-06](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-06)
    *   [GET /saas/locations](https://marketplace.gohighlevel.com/docs/Changelog#get-saaslocations)
        
*   [2026-08-05](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-05)
    *   [GET /ad-publishing/facebook/reporting/list](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookreportinglist)
        
    *   [GET /ad-publishing/google/reporting/list](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggooglereportinglist)
        
    *   [GET /ad-publishing/linkedin/reporting/list](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinglinkedinreportinglist)
        
*   [2026-08-03](https://marketplace.gohighlevel.com/docs/Changelog#2026-08-03)
    *   [GET /contacts/lookup](https://marketplace.gohighlevel.com/docs/Changelog#get-contactslookup)
        
    *   [GET /ad-publishing/facebook/conversation-forms](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookconversation-forms)
        
    *   [GET /ad-publishing/facebook/custom-audience](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookcustom-audience)
        
    *   [GET /ad-publishing/facebook/page/{pageId}/forms](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookpagepageidforms)
        
    *   [GET /ad-publishing/facebook/pixels](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookpixels)
        
    *   [GET /ad-publishing/google/assets](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleassets)
        
    *   [GET /ad-publishing/google/audiences](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleaudiences)
        
    *   [GET /ad-publishing/google/conversion-goals](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleconversion-goals)
        
    *   [GET /ad-publishing/google/conversions](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogleconversions)
        
    *   [GET /ad-publishing/google/segments](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggooglesegments)
        
    *   [GET /ad-publishing/google/target-interests](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinggoogletarget-interests)
        
    *   [GET /ad-publishing/linkedin/{accountId}/forms](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishinglinkedinaccountidforms)
        
*   [2026-07-30](https://marketplace.gohighlevel.com/docs/Changelog#2026-07-30)
    
*   [2026-07-28](https://marketplace.gohighlevel.com/docs/Changelog#2026-07-28)
    *   [GET /opportunities/{id}](https://marketplace.gohighlevel.com/docs/Changelog#get-opportunitiesid)
        
*   [2026-07-07](https://marketplace.gohighlevel.com/docs/Changelog#2026-07-07)
    *   [GET /ad-publishing/facebook/pages](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookpages)
        
*   [2026-06-26](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-26)
    *   [POST /opportunities/pipelines](https://marketplace.gohighlevel.com/docs/Changelog#post-opportunitiespipelines)
        
    *   [DELETE /opportunities/pipelines/{pipelineId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-opportunitiespipelinespipelineid)
        
    *   [GET /opportunities/pipelines/{pipelineId}](https://marketplace.gohighlevel.com/docs/Changelog#get-opportunitiespipelinespipelineid)
        
    *   [PUT /opportunities/pipelines/{pipelineId}](https://marketplace.gohighlevel.com/docs/Changelog#put-opportunitiespipelinespipelineid)
        
*   [2026-06-18](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-18)
    *   [GET /ad-publishing/facebook/campaigns/{campaignId}/publishing-progress](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookcampaignscampaignidpublishing-progress)
        
    *   [GET /saas/allow-attach-rebilling/{locationId}](https://marketplace.gohighlevel.com/docs/Changelog#get-saasallow-attach-rebillinglocationid)
        
*   [2026-06-15](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-15)
    *   [POST /users/](https://marketplace.gohighlevel.com/docs/Changelog#post-users)
        
    *   [GET /users/search](https://marketplace.gohighlevel.com/docs/Changelog#get-userssearch)
        
    *   [POST /users/search/filter-by-email](https://marketplace.gohighlevel.com/docs/Changelog#post-userssearchfilter-by-email)
        
    *   [GET /users/{userId}](https://marketplace.gohighlevel.com/docs/Changelog#get-usersuserid)
        
    *   [PUT /users/{userId}](https://marketplace.gohighlevel.com/docs/Changelog#put-usersuserid)
        
*   [2026-06-12](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-12)
    *   [GET /ad-publishing/facebook/reporting/list](https://marketplace.gohighlevel.com/docs/Changelog#get-ad-publishingfacebookreportinglist-1)
        
*   [2026-06-11](https://marketplace.gohighlevel.com/docs/Changelog#2026-06-11)
    *   [GET /brand-boards/locations/{locationId}/brand-voices](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardslocationslocationidbrand-voices)
        
    *   [POST /brand-boards/locations/{locationId}/brand-voices](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardslocationslocationidbrand-voices)
        
    *   [DELETE /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-brand-boardslocationslocationidbrand-voicesbrandvoiceid)
        
    *   [GET /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardslocationslocationidbrand-voicesbrandvoiceid)
        
    *   [PATCH /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}](https://marketplace.gohighlevel.com/docs/Changelog#patch-brand-boardslocationslocationidbrand-voicesbrandvoiceid)
        
    *   [POST /brand-boards/locations/{locationId}/brand-voices/{brandVoiceId}/default](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardslocationslocationidbrand-voicesbrandvoiceiddefault)
        
    *   [GET /brand-boards/public/v1/locations/{locationId}/voices](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardspublicv1locationslocationidvoices)
        
    *   [POST /brand-boards/public/v1/locations/{locationId}/voices](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardspublicv1locationslocationidvoices)
        
    *   [DELETE /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-brand-boardspublicv1locationslocationidvoicesbrandvoiceid)
        
    *   [GET /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}](https://marketplace.gohighlevel.com/docs/Changelog#get-brand-boardspublicv1locationslocationidvoicesbrandvoiceid)
        
    *   [PATCH /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}](https://marketplace.gohighlevel.com/docs/Changelog#patch-brand-boardspublicv1locationslocationidvoicesbrandvoiceid)
        
    *   [POST /brand-boards/public/v1/locations/{locationId}/voices/{brandVoiceId}/default](https://marketplace.gohighlevel.com/docs/Changelog#post-brand-boardspublicv1locationslocationidvoicesbrandvoiceiddefault)
        
    *   [POST /email/verify](https://marketplace.gohighlevel.com/docs/Changelog#post-emailverify)
        
*   [Components](https://marketplace.gohighlevel.com/docs/Changelog#components)
    *   [GET /emails/builder](https://marketplace.gohighlevel.com/docs/Changelog#get-emailsbuilder)
        
    *   [POST /emails/builder](https://marketplace.gohighlevel.com/docs/Changelog#post-emailsbuilder)
        
    *   [POST /emails/builder/data](https://marketplace.gohighlevel.com/docs/Changelog#post-emailsbuilderdata)
        
    *   [DELETE /emails/builder/{locationId}/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailsbuilderlocationidtemplateid)
        
    *   [PATCH /emails/builder/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailsbuildertemplateid)
        
    *   [GET /emails/campaigns/bulk-actions](https://marketplace.gohighlevel.com/docs/Changelog#get-emailscampaignsbulk-actions)
        
    *   [GET /emails/campaigns/workflows](https://marketplace.gohighlevel.com/docs/Changelog#get-emailscampaignsworkflows)
        
    *   [GET /emails/locations/{locationId}/campaigns/bulk-actions](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsbulk-actions)
        
    *   [GET /emails/locations/{locationId}/campaigns/bulk-actions/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsbulk-actionscampaignid)
        
    *   [GET /emails/locations/{locationId}/campaigns/emails](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsemails)
        
    *   [POST /emails/locations/{locationId}/campaigns/emails](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidcampaignsemails)
        
    *   [DELETE /emails/locations/{locationId}/campaigns/emails/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailslocationslocationidcampaignsemailscampaignid)
        
    *   [GET /emails/locations/{locationId}/campaigns/emails/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsemailscampaignid)
        
    *   [PATCH /emails/locations/{locationId}/campaigns/emails/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailslocationslocationidcampaignsemailscampaignid)
        
    *   [POST /emails/locations/{locationId}/campaigns/emails/{campaignId}/schedule](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidcampaignsemailscampaignidschedule)
        
    *   [GET /emails/locations/{locationId}/campaigns/stats/{source}/{sourceId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsstatssourcesourceid)
        
    *   [GET /emails/locations/{locationId}/campaigns/workflows](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsworkflows)
        
    *   [GET /emails/locations/{locationId}/campaigns/workflows/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidcampaignsworkflowscampaignid)
        
    *   [GET /emails/locations/{locationId}/templates](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidtemplates)
        
    *   [POST /emails/locations/{locationId}/templates](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidtemplates)
        
    *   [POST /emails/locations/{locationId}/templates/folders](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidtemplatesfolders)
        
    *   [POST /emails/locations/{locationId}/templates/import](https://marketplace.gohighlevel.com/docs/Changelog#post-emailslocationslocationidtemplatesimport)
        
    *   [DELETE /emails/locations/{locationId}/templates/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailslocationslocationidtemplatestemplateid)
        
    *   [GET /emails/locations/{locationId}/templates/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailslocationslocationidtemplatestemplateid)
        
    *   [PATCH /emails/locations/{locationId}/templates/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailslocationslocationidtemplatestemplateid)
        
    *   [GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsbulk-actions)
        
    *   [GET /emails/public/v2/locations/{locationId}/campaigns/bulk-actions/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsbulk-actionscampaignid)
        
    *   [POST /emails/public/v2/locations/{locationId}/campaigns/email-campaign](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidcampaignsemail-campaign)
        
    *   [GET /emails/public/v2/locations/{locationId}/campaigns/emails](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsemails)
        
    *   [GET /emails/public/v2/locations/{locationId}/campaigns/emails/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsemailscampaignid)
        
    *   [GET /emails/public/v2/locations/{locationId}/campaigns/stats/{source}/{sourceId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsstatssourcesourceid)
        
    *   [GET /emails/public/v2/locations/{locationId}/campaigns/workflows](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsworkflows)
        
    *   [GET /emails/public/v2/locations/{locationId}/campaigns/workflows/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidcampaignsworkflowscampaignid)
        
    *   [DELETE /emails/public/v2/locations/{locationId}/campaigns/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailspublicv2locationslocationidcampaignscampaignid)
        
    *   [PATCH /emails/public/v2/locations/{locationId}/campaigns/{campaignId}](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailspublicv2locationslocationidcampaignscampaignid)
        
    *   [POST /emails/public/v2/locations/{locationId}/campaigns/{campaignId}/schedule](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidcampaignscampaignidschedule)
        
    *   [GET /emails/public/v2/locations/{locationId}/templates](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidtemplates)
        
    *   [POST /emails/public/v2/locations/{locationId}/templates](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidtemplates)
        
    *   [POST /emails/public/v2/locations/{locationId}/templates/folders](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidtemplatesfolders)
        
    *   [POST /emails/public/v2/locations/{locationId}/templates/import](https://marketplace.gohighlevel.com/docs/Changelog#post-emailspublicv2locationslocationidtemplatesimport)
        
    *   [DELETE /emails/public/v2/locations/{locationId}/templates/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-emailspublicv2locationslocationidtemplatestemplateid)
        
    *   [GET /emails/public/v2/locations/{locationId}/templates/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailspublicv2locationslocationidtemplatestemplateid)
        
    *   [PATCH /emails/public/v2/locations/{locationId}/templates/{templateId}](https://marketplace.gohighlevel.com/docs/Changelog#patch-emailspublicv2locationslocationidtemplatestemplateid)
        
    *   [GET /emails/schedule](https://marketplace.gohighlevel.com/docs/Changelog#get-emailsschedule)
        
    *   [GET /emails/stats/location/{locationId}/{source}/{sourceId}](https://marketplace.gohighlevel.com/docs/Changelog#get-emailsstatslocationlocationidsourcesourceid)
        
    *   [POST /opportunities/](https://marketplace.gohighlevel.com/docs/Changelog#post-opportunities)
        
    *   [GET /opportunities/search](https://marketplace.gohighlevel.com/docs/Changelog#get-opportunitiessearch)
        
    *   [PUT /opportunities/{id}](https://marketplace.gohighlevel.com/docs/Changelog#put-opportunitiesid)
        
*   [Components](https://marketplace.gohighlevel.com/docs/Changelog#components-1)
    *   [GET /users/](https://marketplace.gohighlevel.com/docs/Changelog#get-users)
        
    *   [DELETE /users/{userId}](https://marketplace.gohighlevel.com/docs/Changelog#delete-usersuserid)
        
*   [Components](https://marketplace.gohighlevel.com/docs/Changelog#components-2)
    *   [GET /contacts/](https://marketplace.gohighlevel.com/docs/Changelog#get-contacts)
        
    *   [POST /contacts/](https://marketplace.gohighlevel.com/docs/Changelog#post-contacts)
        
    *   [POST /contacts/upsert](https://marketplace.gohighlevel.com/docs/Changelog#post-contactsupsert)
        
    *   [GET /contacts/{contactId}](https://marketplace.gohighlevel.com/docs/Changelog#get-contactscontactid)
        
    *   [PUT /contacts/{contactId}](https://marketplace.gohighlevel.com/docs/Changelog#put-contactscontactid)
        
    *   [DELETE /contacts/{contactId}/campaigns/remove-all](https://marketplace.gohighlevel.com/docs/Changelog#delete-contactscontactidcampaignsremove-all)
        
    *   [DELETE /contacts/{contactId}/campaigns/removeAll](https://marketplace.gohighlevel.com/docs/Changelog#delete-contactscontactidcampaignsremoveall)
        
*   [Components](https://marketplace.gohighlevel.com/docs/Changelog#components-3)
    *   [GET /oauth/installed-locations](https://marketplace.gohighlevel.com/docs/Changelog#get-oauthinstalled-locations)
        
    *   [GET /oauth/installedLocations](https://marketplace.gohighlevel.com/docs/Changelog#get-oauthinstalledlocations)
        
    *   [POST /oauth/location-token](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthlocation-token-1)
        
    *   [POST /oauth/locationToken](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthlocationtoken)
        
    *   [POST /oauth/token](https://marketplace.gohighlevel.com/docs/Changelog#post-oauthtoken-1)
        
*   [Components](https://marketplace.gohighlevel.com/docs/Changelog#components-4)
    *   [GET /phone-system/numbers/location/{locationId}](https://marketplace.gohighlevel.com/docs/Changelog#get-phone-systemnumberslocationlocationid)
        
    *   [POST /phone-system/numbers/location/{locationId}/purchase](https://marketplace.gohighlevel.com/docs/Changelog#post-phone-systemnumberslocationlocationidpurchase)
