# Search Users

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/users/search-users
- **Summary:** Search Users

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/users/search-users#__docusaurus_skipToContent_fallback)

Version: v3

Search Users
============

GET 

https://services.leadconnectorhq.com/users/search

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Search Users

### Requirements

#### Scope(s)

`users.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token``Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/users/search-users#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**companyId** stringrequired

Company ID in which the search needs to be performed

**Example:** `5DP41231LkQsiKESj6rh`

**query** string

The search term for the user is matched based on the user full name, email or phone

**Example:** `John`

**skip** string

No of results to be skipped before returning the result

Default value:`0`

**Example:** `1`

**limit** string

No of results to be limited before returning the result

Default value:`25`

**Example:** `10`

**locationId** string

Location ID in which the search needs to be performed

**Example:** `5DP41231LkQsiKESj6rh`

**type** string

Type of the users to be filtered in the search

**Example:** `agency`

**role** string

Role of the users to be filtered in the search

**Example:** `admin`

**ids** string

List of User IDs to be filtered in the search

**Example:** `5DP4iH6HLkQsiKESj6rh,5DP4iH6HLkQsiKESj34h`

**sort** string

The field on which sort is applied in which the results need to be sorted. Default is based on the first and last name

**Example:** `dateAdded`

**sortDirection** string

The direction in which the results need to be sorted

**Example:** `asc`

**enabled2waySync** boolean

Filter users by whether 2-way sync is enabled

**Example:** `true`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/users/search-users#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**users** object\[\]

List of users matching the search criteria

*   Array \[\
    \
\
**id**string\
\
Unique identifier of the user\
\
**Example:** `0IHuJvc2ofPAAA8GzTRi`\
\
**name**string\
\
Full name of the user\
\
**Example:** `John Deo`\
\
**firstName**string\
\
First name of the user\
\
**Example:** `John`\
\
**lastName**string\
\
Last name of the user\
\
**Example:** `Deo`\
\
**email**string\
\
Email address of the user\
\
**Example:** `john@deo.com`\
\
**phone**string\
\
Phone number of the user\
\
**Example:** `+1 808-868-8888`\
\
**extension**string\
\
Phone extension of the user\
\
**Example:**\
\
**permissions** object\
\
User permissions controlling access to various features\
\
**campaignsEnabled**boolean\
\
Whether campaigns are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**campaignsReadOnly**boolean\
\
Whether campaigns are in read-only mode for this user\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**contactsEnabled**boolean\
\
Whether contacts are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**workflowsEnabled**boolean\
\
Whether workflows are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**workflowsReadOnly**boolean\
\
Whether workflows are in read-only mode for this user\
\
**Default value:** `false`\
\
**Example:** `true`\
\
**triggersEnabled**boolean\
\
Whether triggers are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**funnelsEnabled**boolean\
\
Whether funnels are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**websitesEnabled**boolean\
\
Whether websites are enabled for this user\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**opportunitiesEnabled**boolean\
\
Whether opportunities are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**dashboardStatsEnabled**boolean\
\
Whether dashboard statistics are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**bulkRequestsEnabled**boolean\
\
Whether bulk requests are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**appointmentsEnabled**boolean\
\
Whether appointments are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**reviewsEnabled**boolean\
\
Whether reviews are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**onlineListingsEnabled**boolean\
\
Whether online listings are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**phoneCallEnabled**boolean\
\
Whether phone calls are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**conversationsEnabled**boolean\
\
Whether conversations are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**assignedDataOnly**boolean\
\
Whether the user can only access data assigned to them\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**adwordsReportingEnabled**boolean\
\
Whether AdWords reporting is enabled for this user\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**membershipEnabled**boolean\
\
Whether membership features are enabled for this user\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**facebookAdsReportingEnabled**boolean\
\
Whether Facebook Ads reporting is enabled for this user\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**attributionsReportingEnabled**boolean\
\
Whether attributions reporting is enabled for this user\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**settingsEnabled**boolean\
\
Whether settings are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**tagsEnabled**boolean\
\
Whether tags are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**leadValueEnabled**boolean\
\
Whether lead value features are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**marketingEnabled**boolean\
\
Whether marketing features are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**agentReportingEnabled**boolean\
\
Whether agent reporting is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**botService**boolean\
\
Whether the bot service is enabled for this user\
\
**Default value:** `false`\
\
**Example:** `false`\
\
**socialPlanner**boolean\
\
Whether the social planner is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**bloggingEnabled**boolean\
\
Whether blogging is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**invoiceEnabled**boolean\
\
Whether invoices are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**affiliateManagerEnabled**boolean\
\
Whether the affiliate manager is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**contentAiEnabled**boolean\
\
Whether Content AI is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**refundsEnabled**boolean\
\
Whether refunds are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**recordPaymentEnabled**boolean\
\
Whether recording payments is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**cancelSubscriptionEnabled**boolean\
\
Whether cancelling subscriptions is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**paymentsEnabled**boolean\
\
Whether payments are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**communitiesEnabled**boolean\
\
Whether communities are enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**exportPaymentsEnabled**boolean\
\
Whether exporting payments is enabled for this user\
\
**Default value:** `true`\
\
**Example:** `true`\
\
**scopes**string\
\
List of OAuth scopes granted to this user\
\
**Possible values:** \[`campaigns.readonly`, `campaigns.write`, `calendars.readonly`, `calendars/events.write`, `calendars/groups.write`, `calendars.write`, `contacts.write`, `contacts/bulkActions.write`, `workflows.readonly`, `workflows.write`, `triggers.write`, `funnels.write`, `forms.write`, `surveys.write`, `quizzes.write`, `websites.write`, `medias.write`, `medias.readonly`, `opportunities.write`, `opportunities/leadValue.readonly`, `opportunities/bulkActions.write`, `pipelines.create`, `reporting/phone.readonly`, `reporting/adwords.readonly`, `reporting/facebookAds.readonly`, `reporting/attributions.readonly`, `prospecting/auditReport.write`, `reporting/reports.readonly`, `reporting/agent.readonly`, `reporting/reports.write`, `reporting/stats.export`, `payments.write`, `payments/records.write`, `payments/orders.readonly`, `payments/orders.export`, `payments/orders.import`, `payments/orders.collectPayment`, `payments/subscriptions.readonly`, `payments/subscriptions.write`, `payments/subscriptions.update`, `payments/subscriptions.export`, `payments/subscriptions.pauseResumeCancel`, `payments/subscriptions.sharePaymentMethod`, `payments/transactions.readonly`, `payments/transactions.export`, `payments/transactions.import`, `payments/transactions.refund`, `payments/transactions.viewReceipts`, `payments/taxesSettings.readonly`, `payments/settings.readonly`, `payments/taxesSettings.updateInclusiveExclusive`, `payments/taxesSettings.manageRates`, `payments/taxesSettings.configureAutomatic`, `products.readonly`, `products.write`, `products.delete`, `products.duplicate`, `products.bulkActions`, `payments/settings.write`, `payments/settings.configureReceipt`, `payments/settings.configureSubscription`, `invoices.write`, `invoices.readonly`, `invoices/schedule.readonly`, `invoices/schedule.write`, `invoices/template.readonly`, `invoices/template.write`, `reputation/review.write`, `reputation/listing.write`, `reputation/reviewsAIAgents.write`, `reputation/gbp.write`, `conversations.write`, `conversations.readonly`, `conversations/message.readonly`, `conversations/message.write`, `contentAI.write`, `ai-studio.readonly`, `ai-studio.write`, `dashboard/stats.readonly`, `locations/tags.write`, `locations/tags.readonly`, `marketing.write`, `eliza.write`, `settings.write`, `socialplanner/post.write`, `socialplanner/account.readonly`, `socialplanner/account.write`, `socialplanner/category.readonly`, `socialplanner/category.write`, `socialplanner/csv.readonly`, `socialplanner/csv.write`, `socialplanner/group.write`, `socialplanner/hashtag.readonly`, `socialplanner/hashtag.write`, `socialplanner/oauth.readonly`, `socialplanner/oauth.write`, `socialplanner/post.readonly`, `socialplanner/recurring.readonly`, `socialplanner/recurring.write`, `socialplanner/review.readonly`, `socialplanner/review.write`, `socialplanner/rss.readonly`, `socialplanner/rss.write`, `socialplanner/search.readonly`, `socialplanner/setting.readonly`, `socialplanner/setting.write`, `socialplanner/stat.readonly`, `socialplanner/tag.readonly`, `socialplanner/tag.write`, `socialplanner/filters.readonly`, `socialplanner/medias.readonly`, `socialplanner/medias.write`, `socialplanner/watermarks.readonly`, `socialplanner/watermarks.write`, `socialplanner/metatag.readonly`, `socialplanner/facebook.readonly`, `socialplanner/linkedin.readonly`, `socialplanner/twitter.readonly`, `socialplanner/notification.readonly`, `socialplanner/notification.write`, `socialplanner/snapshot.readonly`, `socialplanner/snapshot.write`, `marketing/affiliate.write`, `blogs.write`, `membership.write`, `communities.write`, `gokollab.write`, `certificates.write`, `certificates.readonly`, `adPublishing.write`, `adPublishing.readonly`, `prospecting.write`, `prospecting.readonly`, `prospecting/reports.readonly`, `private-integration-location.readonly`, `private-integration-location.write`, `private-integration-company.readonly`, `private-integration-company.write`, `native-integrations.readonly`, `native-integrations.write`, `wordpress.write`, `wordpress.read`, `custom-menu-link.write`, `qrcodes.write`, `users/team-management.write`, `users/team-management.readonly`, `loginas.write`, `users-sso-login-management.write`, `users-sso-login-management.readonly`, `sso-config.write`, `snapshots/api.readonly`, `snapshots/api.create`, `snapshots/api.edit`, `snapshots/api.push`, `snapshots/api.refresh`, `snapshots/api.share`, `snapshots/api.delete`, `internaltools.location-transfer.write`, `internaltools.location-transfer.readonly`, `affiliateportal.write`, `affiliateportal.readonly`, `companies.write`, `internaltools.billing.write`, `internaltools.billing.readonly`, `internaltools.billing-common.readonly`, `internaltools.billing-common.write`, `voice-ai-agents.write`, `voice-ai-agents.readonly`, `voice-ai-common.readonly`, `voice-ai-common.write`, `voice-ai-agent-goals.readonly`, `voice-ai-agent-goals.write`, `voice-ai-dashboard.readonly`, `agency/launchpad.write`, `agency/launchpad.readonly`, `launchpad/location.write`, `launchpad/location.readonly`, `text-ai-agents.write`, `text-ai-agent-goals.readonly`, `text-ai-agent-goals.write`, `text-ai-agent-training.write`, `text-ai-agents-dashboard.readonly`, `locations.create`, `locations.delete`, `askai.write`, `copilot.readonly`, `locations.export.list`, `locations.features-limits.manage`, `locations.pause-resume`, `locations.agency-subaccounts.manage`, `locations.billing.manage`, `locations.details.manage`, `audit-logs.readonly`, `audit-logs.export`\]\
\
**Example:** `["contacts.write","campaigns.readonly"]`\
\
**roles** object\
\
Role and access configuration for the user\
\
**type**string\
\
User account type (account for sub-account users, agency for agency-level users)\
\
**Example:** `account`\
\
**role**string\
\
User role within the account (admin or user)\
\
**Example:** `admin`\
\
**locationIds**string\[\]\
\
List of location IDs the user has access to\
\
**Example:** `["ve9EPM428h8vShlRW1KT"]`\
\
**restrictSubAccount**boolean\
\
Whether the user is restricted to specific sub-accounts only\
\
**Example:** `true`\
\
**deleted**boolean\
\
Whether the user has been deleted\
\
**Example:** `false`\
\
**lcPhone**object\
\
LC Phone Inbound Phone Numbers\
\
**Example:** `{"locationId":"+1234556677"}`\
\
**platformLanguage**string\
\
Platform language preference for the user\
\
**Possible values:** \[`en_US`, `es`, `fr_CA`, `fr_FR`, `nl`, `de`, `pt_PT`, `pt_BR`, `it`, `sv`, `da`, `fi`, `no`\]\
\
**Example:** `en_US`\
\
*   \]
    

**count**number

Total number of users matching the search criteria

**Example:** `1231`

    {  "users": [    {      "id": "0IHuJvc2ofPAAA8GzTRi",      "firstName": "John",      "lastName": "Deo",      "email": "john@deo.com"    }  ],  "count": 1231}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/users/users-api-v-3#authentication)
**type:** http**scopes:** `users.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/users/search?companyId=5DP41231LkQsiKESj6rh&query=John&skip=0&limit=25&locationId=5DP41231LkQsiKESj6rh&type=agency&role=admin&ids=5DP4iH6HLkQsiKESj6rh%2C5DP4iH6HLkQsiKESj34h&sort=dateAdded&sortDirection=asc&enabled2waySync=true' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Security SchemeAgency-AccessLocation-Access

Bearer Token

Parameters

companyId — queryrequired

Version — headerrequired\---v3

Show optional parameters

query — query

skip — query

limit — query

locationId — query

type — query

role — query

ids — query

sort — query

sortDirection — query

enabled2waySync — query\---truefalse

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
