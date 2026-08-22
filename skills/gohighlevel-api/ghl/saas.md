# SaaS

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/saas-api/saa-s
- **Summary:** SaaS

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/saas-api/saa-s#__docusaurus_skipToContent_fallback)

Version: v3

API Service for SaaS

[📄️Get Agency Plans\
-------------------\
\
Fetch all agency subscription plans for a given company ID](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-agency-plans)

[📄️Allow Attach Rebilling\
-------------------------\
\
Marks a SaaS sub-account as awaiting rebilling attach and optionally stores the rebilling configuration that should be applied when the rebilling config is created. Sets payment_pending on the sub-account. Only allowed when the sub-account is in setup_pending state.](https://marketplace.gohighlevel.com/docs/ghl/saas-api/allow-attach-rebilling)

[📄️Disable SaaS for locations\
-----------------------------\
\
Disable SaaS for locations for given locationIds](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-disable-saas)

[📄️Bulk Enable SaaS\
-------------------\
\
Enable SaaS mode for multiple locations with support for both SaaS v1 and v2](https://marketplace.gohighlevel.com/docs/ghl/saas-api/bulk-enable-saas)

[📄️Get Location Wallet Balance\
------------------------------\
\
Fetch the wallet balance for a specific location. Returns a resource object with balance details.](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-wallet-balance)

[📄️Update Location Wallet Balance\
---------------------------------\
\
Update the wallet balance or complimentary credit settings for a specific location. Supports partial updates via updateMask field (AIP-134 compliant).](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-location-wallet-balance)

[📄️List agency wallet transactions\
----------------------------------\
\
Fetch paginated wallet transactions for an agency (company). Supports skip/limit pagination, date-range and charge-type filters, timezone normalization, and additional non-indexed filters in the request body.](https://marketplace.gohighlevel.com/docs/ghl/saas-api/list-agency-wallet-transactions)

[📄️Enable SaaS for Sub-Account (Formerly Location)\
--------------------------------------------------\
\
<div>](https://marketplace.gohighlevel.com/docs/ghl/saas-api/enable-saas-location)

[📄️Get Location Subscription Details\
------------------------------------\
\
Fetch subscription details for a specific location from location metadata](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-location-subscription)

[📄️Get locations by stripeId with companyId\
-------------------------------------------\
\
Get locations by stripeCustomerId or stripeSubscriptionId with companyId](https://marketplace.gohighlevel.com/docs/ghl/saas-api/locations)

[📄️List location wallet transactions\
------------------------------------\
\
Fetch paginated wallet transactions for a sub-account (location). Supports skip/limit pagination, date-range and charge-type filters, timezone normalization, and additional non-indexed filters in the request body.](https://marketplace.gohighlevel.com/docs/ghl/saas-api/list-location-wallet-transactions)

[📄️Pause location\
-----------------\
\
Pause Sub account for given locationId](https://marketplace.gohighlevel.com/docs/ghl/saas-api/pause-location)

[📄️Remove attached config\
-------------------------\
\
Clears attached SaaS plan (attachPlanId/attachPriceId) and/or attached rebilling config from a sub-account in setup_pending, and sets suspendedInfo.payment_pending to false.](https://marketplace.gohighlevel.com/docs/ghl/saas-api/remove-attached-config)

[📄️Get SaaS Locations\
---------------------\
\
Fetch all SaaS-activated locations for a company with pagination](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-locations)

[📄️Get SaaS Plan\
----------------\
\
Fetch a specific SaaS plan by plan ID](https://marketplace.gohighlevel.com/docs/ghl/saas-api/get-saas-plan)

[📄️Update Rebilling\
-------------------\
\
Bulk update rebilling for given locationIds](https://marketplace.gohighlevel.com/docs/ghl/saas-api/update-rebilling)

[📄️Update SaaS subscription\
---------------------------\
\
Update SaaS subscription for given locationId and customerId](https://marketplace.gohighlevel.com/docs/ghl/saas-api/generate-payment-link)
