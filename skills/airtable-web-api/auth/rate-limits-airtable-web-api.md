# Rate limits - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/rate-limits
- **Summary:** The API is limited to 5 requests per second per base.

Guide

Rate Limits
===========

The API is limited to 5 requests per second per base.

Additionally, there is a limit of 50 requests per second for all traffic using personal access tokens from a given user or [service account](https://support.airtable.com/docs/service-accounts-overview)
.

If you exceed these rates, you will receive a 429 status code and will need to wait 30 seconds before subsequent requests will succeed.

Airtable may change the enforced API rate limits or enforce additional types of limits in our sole discretion, including tiered based on pricing plan. Upon receiving a 429 status code, API integrations should back-off and wait before retrying the API request.

The [official JavaScript client](https://github.com/Airtable/airtable.js)
 has built-in back-off and retry logic.

If you anticipate a higher read volume, we recommend using a caching proxy.

!!
