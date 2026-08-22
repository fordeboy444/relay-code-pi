# Get Company

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/companies/get-company
- **Summary:** Get Comapny

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/companies/get-company#__docusaurus_skipToContent_fallback)

Version: v3

Get Company
===========

GET 

https://services.leadconnectorhq.com/companies/:companyId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Get Comapny

### Requirements

#### Scope(s)

`companies.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Agency Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/companies/get-company#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

### Path Parameters

**companyId** stringrequired

**Example:** `ve9EPM428h8vShlRW1KT`

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/companies/get-company#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successful response

*   application/json

*   Schema
*   Example (auto)

**Schema**

**company** object

**id**string

**Example:** `seD4PfOuKoVMLkEZqohJ`

**name**string

**Example:** `Tesla inc`

**email**string

**Example:** `john@deo.com`

**logoUrl**string

**Example:** `https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873`

**phone**string

**Example:** `+1202-555-0107`

**website**string

**Example:** `https://www.tesla.com`

**domain**string

**Example:** `https://app.myawesomedomain.com`

**spareDomain**string

**Example:** `link.msgsndr.com`

**privacyPolicy**string

**Example:** `https://app.gohighlevel.com/privacy_policy`

**termsConditions**string

**Example:** `https://app.gohighlevel.com/terms-of-service`

**address**string

**Example:** `3500 Deer Creek Road`

**city**string

**Example:** `Palo Alto`

**postalCode**string

**Example:** `94304`

**country**string

**Example:** `US`

**state**string

**Example:** `CA`

**timezone**string

**Example:** `US/Central`

**relationshipNumber**string

**Example:** `x-xxx-xxx`

**subdomain**string

**Example:** `https://app.myawesomedomain.com/subdomain`

**plan**number

**Example:** `1`

**currency**string

**Example:**

**customerType**string

**Example:** `agency`

**termsOfServiceVersion**string

**Example:** `06/01/2022`

**termsOfServiceAcceptedBy**string

**Example:** `SDfdf355Dfggdee`

**twilioTrialMode**boolean

**Example:** `true`

**twilioFreeCredits**number

**Example:** `100`

**termsOfServiceAcceptedDate**string

**Example:**

**privacyPolicyVersion**string

**Example:** `06/01/2022`

**privacyPolicyAcceptedBy**string

**Example:** `SDfdf355Dfggdee`

**privacyPolicyAcceptedDate**string

**Example:**

**affiliatePolicyVersion**string

**Example:** `06/01/2022`

**affiliatePolicyAcceptedBy**string

**Example:** `SDfdf355Dfggdee`

**affiliatePolicyAcceptedDate**string

**Example:**

**isReselling**boolean

**Example:** `true`

**onboardingInfo** object

**pending**booleanrequired

**Example:** `true`

**haveWebsite**boolean

**Example:**

**websiteUrl**string

**Example:**

**industryServed**string

**Example:**

**customerCount**string

**Example:**

**tools**string\[\]

**Example:**

**location**boolean

**Example:**

**conversationDemo**boolean

**Example:**

**locationId**string

**Example:**

**snapshotId**string

**Example:**

**planId**string

Selected agency plan unique plan Id

**Example:** `plan_EOi37NLV12u68i`

**affiliateSignup**boolean

Set to true if it is from affiliate

**Example:** `true`

**hasJoinedKickoffCall**boolean

Set to true if user joined onboarding call

**Example:** `true`

**kickoffActionTaken**boolean

Set to true if user joined onboarding call

**Example:** `true`

**hasJoinedImplementationCall**boolean

Set to true if user joined implementation call

**Example:** `true`

**version**string

This helps in A/B tracking of onboarding flow

**Example:** `1`

**metaData**object

metaData for onboarding

**Example:** `true`

**upgradeEnabledForClients**boolean

Flag to set if upgrade plan is enabled

**Example:** `true`

**cancelEnabledForClients**boolean

Flag to set if cancel plan is enabled

**Example:** `true`

**autoSuspendEnabled**boolean

Flag to set if auto suspend is enabled

**Example:** `true`

**saasSettings**object

Saas Settings

**Example:** `{"agencyDashboardVisibleTo":"string","stripeConnectInitiatedBy":"string"}`

**stripeConnectId**string

**Example:**

**enableDepreciatedFeatures**boolean

**Example:** `true`

**premiumUpgraded**boolean

If you want to enable / disable Priority Support for any agency. Default value is false.

**Default value:** `false`

**Example:** `false`

**status**string

**Example:** `active-trial`

**locationCount**number

**Example:** `10`

**disableEmailService**boolean

**Example:** `false`

**referralId**string

**Example:** `john-doe-21`

**isEnterpriseAccount**boolean

**Example:** `true`

**businessNiche**string

The business niche in which the agency is operating

**Example:** `Accounting School`

**businessCategory**string

Business category

**Example:** `Automotive`

**businessAffinityGroup**string

The affinity group of the agency

**Example:** `Vehicle Dealerships`

**isSandboxAccount**boolean

**Example:** `true`

**enableNewSubAccountDefaultData**boolean

Flag to determine if new sub-accounts should use default data

**Example:** `false`

    {  "company": {    "id": "seD4PfOuKoVMLkEZqohJ",    "name": "Tesla inc",    "email": "john@deo.com",    "logoUrl": "https://firebasestorage.googleapis.com/v0/b/highlevel-staging.appspot.com/o/companyPhotos%2F5DP4iH6HLkQsiKESj6rh.gif?alt=media&token=2aec9720-59a7-46af-a187-d4a2774ee873",    "phone": "+1202-555-0107",    "website": "https://www.tesla.com",    "domain": "https://app.myawesomedomain.com",    "spareDomain": "link.msgsndr.com",    "privacyPolicy": "https://app.gohighlevel.com/privacy_policy",    "termsConditions": "https://app.gohighlevel.com/terms-of-service",    "address": "3500 Deer Creek Road",    "city": "Palo Alto",    "postalCode": "94304",    "country": "US",    "state": "CA",    "timezone": "US/Central",    "relationshipNumber": "x-xxx-xxx",    "subdomain": "https://app.myawesomedomain.com/subdomain",    "plan": 1,    "currency": "",    "customerType": "agency",    "termsOfServiceVersion": "06/01/2022",    "termsOfServiceAcceptedBy": "SDfdf355Dfggdee",    "twilioTrialMode": true,    "twilioFreeCredits": 100,    "termsOfServiceAcceptedDate": "",    "privacyPolicyVersion": "06/01/2022",    "privacyPolicyAcceptedBy": "SDfdf355Dfggdee",    "privacyPolicyAcceptedDate": "",    "affiliatePolicyVersion": "06/01/2022",    "affiliatePolicyAcceptedBy": "SDfdf355Dfggdee",    "affiliatePolicyAcceptedDate": "",    "isReselling": true,    "onboardingInfo": "",    "upgradeEnabledForClients": true,    "cancelEnabledForClients": true,    "autoSuspendEnabled": true,    "saasSettings": {      "agencyDashboardVisibleTo": "string",      "stripeConnectInitiatedBy": "string"    },    "stripeConnectId": "",    "enableDepreciatedFeatures": true,    "premiumUpgraded": false,    "status": "active-trial",    "locationCount": 10,    "disableEmailService": false,    "referralId": "john-doe-21",    "isEnterpriseAccount": true,    "businessNiche": "Accounting School",    "businessCategory": "Automotive",    "businessAffinityGroup": "Vehicle Dealerships",    "isSandboxAccount": true,    "enableNewSubAccountDefaultData": false  }}
> Common reference appendix (shared error/status catalog): see [../_shared-appendix.md](../_shared-appendix.md).
**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/companies/companies-api#authentication)
**type:** http**scopes:** `companies.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Agency (OR) Private Integration Token of Agency.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/companies/ve9EPM428h8vShlRW1KT' \-H 'Accept: application/json' \-H 'Authorization: Bearer <Authorization>'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

companyId — pathrequired

Version — headerrequired\---v3

Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
