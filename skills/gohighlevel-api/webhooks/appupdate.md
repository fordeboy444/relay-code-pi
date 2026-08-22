# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/AppUpdate#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/AppUpdate
- **Summary:** Called whenever an app is updated to a new version

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/AppUpdate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever an app is updated to a new version

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/AppUpdate#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "appId": {      "type": "string"    },    "companyId": {      "type": "string"    },    "locationId": {      "type": "string"    },    "userId": {      "type": "string"    },    "planId": {      "type": "string"    },    "previousVersionId": {      "type": "string"    },    "trial": {      "type": "object",      "properties": {        "onTrial": {          "type": "boolean"        },        "trialDuration": {          "type": "number"        },        "trialStartDate": {          "type": "Date"        }      }    },    "isWhitelabelCompany": {      "type": "boolean"    },    "whitelabelDetails": {      "type": "object",      "properties": {        "domain": {          "type": "string"        },        "logoUrl": {          "type": "string"        }      }    },    "companyName": {      "type": "string"    }  }}

*   Note: The `previousVersionId` contains the version ID of the previously installed version before the update.
*   Note: The User ID and Company ID may be available when a new token is generated. In case of app update via future locations, you may not get these fields.

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/AppUpdate#example "Direct link to Example")

*   For Location Level App Update if company is whitelabeled

    {  "type": "UPDATE",  "appId": "ve9EPM428h8vShlRW1KT",  "locationId": "otg8dTQqGLh3Q6iQI55w",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "userId": "otg8dTQqGLh3Q6iQI55w",  "planId": "66a0419a0dffa47fb5f8b22f",  "previousVersionId": "55b0419a0dffa47fb5f8a11e",  "trial": {    "onTrial": true,    "trialDuration": 10,    "trialStartDate": "2024-07-23T23:54:51.264Z"  },  "isWhitelabelCompany": true,  "whitelabelDetails": {    "domain": "example.com",    "logoUrl": "https://example.com/logo.png"  },  "companyName": "Example Company"}

*   For Location Level App Update if company is non whitelabeled

    {  "type": "UPDATE",  "appId": "ve9EPM428h8vShlRW1KT",  "locationId": "otg8dTQqGLh3Q6iQI55w",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "userId": "otg8dTQqGLh3Q6iQI55w",  "planId": "66a0419a0dffa47fb5f8b22f",  "previousVersionId": "55b0419a0dffa47fb5f8a11e",  "trial": {    "onTrial": true,    "trialDuration": 10,    "trialStartDate": "2024-07-23T23:54:51.264Z"  },  "isWhitelabelCompany": false,  "whitelabelDetails": {},  "companyName": "Example Company"}

*   For Agency Level App Update

    {  "type": "UPDATE",  "appId": "ve9EPM428h8vShlRW1KT",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "userId": "otg8dTQqGLh3Q6iQI55w",  "planId": "66a0419a0dffa47fb5f8b22f",  "previousVersionId": "55b0419a0dffa47fb5f8a11e",  "trial": {    "onTrial": true,    "trialDuration": 10,    "trialStartDate": "2024-07-23T23:54:51.264Z"  }}

Share your feedback
-------------------

★★★★★
