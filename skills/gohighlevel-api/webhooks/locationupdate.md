# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate
- **Summary:** Called whenever a location is updated.

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a location is updated.

> Available to Agency Level Apps for all sub-accounts or to specific sub-accounts.

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "id": {      "type": "string"    },    "name": {      "type": "string"    },    "email": {      "type": "string"    },    "stripeProductId": {      "type": "string"    },    "companyId": {      "type": "string"    }  }}

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/LocationUpdate#example "Direct link to Example")

    {  "type": "LocationUpdate",  "id": "ve9EPM428h8vShlRW1KT",  "companyId": "otg8dTQqGLh3Q6iQI55w",  "name": "Loram ipsum",  "email": "mailer@example.com",  "stripeProductId": "prod_xyz123abc"}

Share your feedback
-------------------

★★★★★
