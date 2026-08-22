# lc-phone

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/phone-system/lc-phone
- **Summary:** lc-phone

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/phone-system/lc-phone#__docusaurus_skipToContent_fallback)

Version: v3

API Service for LC Phone

[📄️List number pools\
--------------------\
\
Returns number pools for the location. Requires locationId as a query parameter.](https://marketplace.gohighlevel.com/docs/ghl/phone-system/get-number-pool-list)

[📄️List available phone numbers\
-------------------------------\
\
Search Twilio inventory for purchasable phone numbers in a country for the given location.](https://marketplace.gohighlevel.com/docs/ghl/phone-system/list-available-numbers-for-a-country)

[📄️Purchase number for location\
-------------------------------\
\
Purchase number for location. With \`version: v3\`, the HTTP 201 body is the standard success envelope (\`status\`, \`data\`, \`message\`, \`statusCode\`). The v3 purchase fields live under \`data\`: \`number\`, \`locationId\`, \`id\`, and \`underLcAccount\` (renamed from under_ghl_account).](https://marketplace.gohighlevel.com/docs/ghl/phone-system/purchase-number-for-location)

[📄️List active numbers\
----------------------\
\
List active numbers. With \`version: v3\`, the HTTP 200 body is the standard success envelope (\`status\`, \`data\`, \`message\`, \`statusCode\`). The v3 list payload is under \`data\`; \`isUnderGhl\` is renamed to \`isUnderLc\` per AIP naming convention.](https://marketplace.gohighlevel.com/docs/ghl/phone-system/active-numbers)
