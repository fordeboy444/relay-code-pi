# Update Design Kit

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/brand-boards/update-design-kit
- **Summary:** Update a design kit by ID

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/update-design-kit#__docusaurus_skipToContent_fallback)

Version: v3New

Update Design Kit
=================

PATCH 

https://services.leadconnectorhq.com/brand-boards/locations/:locationId/design-kits/:designKitId

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Update a design kit by ID

### Requirements

#### Scope(s)

`brand-boards/design-kit.write`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/update-design-kit#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Path Parameters

**locationId** stringrequired

ID of the location that owns the design kit.

**Example:** `oHJiAh0wDG3BzmzACVD6`

**designKitId** stringrequired

ID of the design kit to update.

**Example:** `507f1f77bcf86cd799439011`

*   application/json

*   Body
*   Example (auto)

### Body**required**

**name**string

Display name for the design kit.

**Example:** `My Design Kit`

**logos** object\[\]

Logos for the design kit. Sending this field replaces the existing logos. To keep an existing logo, include it with its `id`.

*   Array \[\
    \
\
**id**string\
\
Identifier of an existing logo. Include it to update the same logo; omit it to add a new one.\
\
**Example:** `6a1d1e5db5ef0dfa799ed3c9`\
\
**url**stringrequired\
\
Publicly accessible URL of the logo image.\
\
**Example:** `https://storage.googleapis.com/bucket/logos/my-logo.png`\
\
**label**stringrequired\
\
Display name for the logo.\
\
**Example:** `Primary Logo`\
\
*   \]
    

**colors** object\[\]

Colors for the design kit. Sending this field replaces the existing colors. To keep an existing color, include it with its `id`.

*   Array \[\
    \
\
**id**string\
\
Identifier of an existing color. Include it to update the same color; omit it to add a new one.\
\
**Example:** `6a1d1e5db5ef0dfa799ed3c9`\
\
**value**stringrequired\
\
Hex color value. Accepts 3, 4, 6, or 8 hex digits with an optional leading `#`. The 4- and 8-digit forms include an alpha channel (e.g. `#F00F`, `#FF5733FF`). When updating an existing color, copy the `hexa` field from a previous response to keep the alpha channel — using `hex` will drop the alpha.\
\
**Example:** `#FF5733`\
\
**label**stringrequired\
\
Display name for the color.\
\
**Example:** `Brand Orange`\
\
*   \]
    

**fonts** object\[\]

Fonts for the design kit. Sending this field replaces the existing fonts. To keep an existing font, include it with its `id`.

*   Array \[\
    \
\
**id**string\
\
Identifier of an existing font. Include it to update the same font; omit it to add a new one.\
\
**Example:** `6a1d1e5db5ef0dfa799ed3c9`\
\
**font**stringrequired\
\
Primary font family name.\
\
**Example:** `Montserrat`\
\
**fallback**stringrequired\
\
Fallback font family used when the primary is unavailable.\
\
**Example:** `sans-serif`\
\
**label**stringrequired\
\
Display name for the font.\
\
**Example:** `Heading Font`\
\
*   \]
    

    {  "name": "My Design Kit",  "logos": [    {      "id": "6a1d1e5db5ef0dfa799ed3c9",      "url": "https://storage.googleapis.com/bucket/logos/my-logo.png",      "label": "Primary Logo"    }  ],  "colors": [    {      "id": "6a1d1e5db5ef0dfa799ed3ca",      "value": "#FF5733",      "label": "Brand Orange"    }  ],  "fonts": [    {      "id": "6a1d1e5db5ef0dfa799ed3cb",      "font": "Montserrat",      "fallback": "sans-serif",      "label": "Heading Font"    }  ]}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/update-design-kit#responses "Direct link to Responses")

*   200
*   400
*   401
*   403
*   404
*   422

Success

*   application/json

*   Schema
*   Example (auto)

**Schema**

**id**stringrequired

Unique identifier of the design kit.

**Example:** `507f1f77bcf86cd799439011`

**name**stringrequired

Display name of the design kit.

**Example:** `My Design Kit`

**isDefault**booleanrequired

Whether this is the default design kit for the location.

**Example:** `false`

**createdAt**stringrequired

ISO 8601 timestamp of when the design kit was created.

**Example:** `2024-01-05T12:00:00.000Z`

**updatedAt**stringrequired

ISO 8601 timestamp of when the design kit was last updated.

**Example:** `2024-01-05T12:00:00.000Z`

**locationId**stringrequired

ID of the location that owns the design kit.

**Example:** `oHJiAh0wDG3BzmzACVD6`

**deleted**booleanrequired

Whether the design kit has been soft-deleted.

**Example:** `false`

**logos** object\[\]

Logos belonging to the design kit.

*   Array \[\
    \
\
**id**string\
\
Identifier of an existing logo. Include it to update the same logo; omit it to add a new one.\
\
**Example:** `6a1d1e5db5ef0dfa799ed3c9`\
\
**url**stringrequired\
\
Publicly accessible URL of the logo image.\
\
**Example:** `https://storage.googleapis.com/bucket/logos/my-logo.png`\
\
**label**stringrequired\
\
Display name for the logo.\
\
**Example:** `Primary Logo`\
\
*   \]
    

**colors** object\[\]

Colors belonging to the design kit.

*   Array \[\
    \
\
**id**string\
\
Unique identifier of the color.\
\
**Example:** `6a1d1e5db5ef0dfa799ed3c9`\
\
**hex**stringrequired\
\
6-digit hex representation of the color, without alpha.\
\
**Example:** `#FF5733`\
\
**hexa**stringrequired\
\
8-digit hex representation of the color, including the alpha channel.\
\
**Example:** `#FF5733FF`\
\
**rgb**stringrequired\
\
RGB representation of the color.\
\
**Example:** `rgb(255, 87, 51)`\
\
**rgba**stringrequired\
\
RGBA representation of the color, including the alpha channel.\
\
**Example:** `rgba(255, 87, 51, 1)`\
\
**label**stringrequired\
\
Display name for the color.\
\
**Example:** `Brand Orange`\
\
*   \]
    

**fonts** object\[\]

Fonts belonging to the design kit.

*   Array \[\
    \
\
**id**string\
\
Identifier of an existing font. Include it to update the same font; omit it to add a new one.\
\
**Example:** `6a1d1e5db5ef0dfa799ed3c9`\
\
**font**stringrequired\
\
Primary font family name.\
\
**Example:** `Montserrat`\
\
**fallback**stringrequired\
\
Fallback font family used when the primary is unavailable.\
\
**Example:** `sans-serif`\
\
**label**stringrequired\
\
Display name for the font.\
\
**Example:** `Heading Font`\
\
*   \]
    

**traceId**string

Trace identifier for the request, useful for debugging and support.

**Example:** `019e4ef5-a65e-4198-8cf9-8e93dca9bda4`

    {  "id": "507f1f77bcf86cd799439011",  "name": "My Design Kit",  "isDefault": false,  "createdAt": "2024-01-05T12:00:00.000Z",  "updatedAt": "2024-01-05T12:00:00.000Z",  "locationId": "oHJiAh0wDG3BzmzACVD6",  "deleted": false,  "logos": [    {      "id": "6a1d1e5db5ef0dfa799ed3c9",      "url": "https://storage.googleapis.com/bucket/logos/my-logo.png",      "label": "Primary Logo"    }  ],  "colors": [    {      "id": "6a1d1e5db5ef0dfa799ed3ca",      "hex": "#FF5733",      "hexa": "#FF5733FF",      "rgb": "rgb(255, 87, 51)",      "rgba": "rgba(255, 87, 51, 1)",      "label": "Brand Orange"    }  ],  "fonts": [    {      "id": "6a1d1e5db5ef0dfa799ed3cb",      "font": "Montserrat",      "fallback": "sans-serif",      "label": "Heading Font"    }  ],  "traceId": "019e4ef5-a65e-4198-8cf9-8e93dca9bda4"}

Bad Request

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `401`

**message**string

**Example:** `Invalid token: access token is invalid`

**error**string

**Example:** `Unauthorized`

    {  "statusCode": 401,  "message": "Invalid token: access token is invalid",  "error": "Unauthorized"}

The token does not have access to this location

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for invalid location access

**Example:** `403`

**message**string

Error message describing the location access failure

**Example:** `The token does not have access to this location`

    {  "statusCode": 403,  "message": "The token does not have access to this location"}

Not Found

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

HTTP status code for not found

**Example:** `404`

**message**string

Error message describing the not found failure

**Example:** `Not Found`

**error**string

Error type identifier

**Example:** `The requested resource was not found`

    {  "statusCode": 404,  "message": "Not Found",  "error": "The requested resource was not found"}

Unprocessable Entity

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `422`

**message**string\[\]

**Example:** `["Unprocessable Entity"]`

**error**string

**Example:** `Unprocessable Entity`

    {  "statusCode": 422,  "message": [    "Unprocessable Entity"  ],  "error": "Unprocessable Entity"}

Share your feedback
-------------------

★★★★★

#### Authorization: Authorization

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/brand-boards/brand-boards-api-v-3#authentication)
**type:** http**scopes:** `brand-boards/design-kit.write`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L -X PATCH 'https://services.leadconnectorhq.com/brand-boards/locations/oHJiAh0wDG3BzmzACVD6/design-kits/507f1f77bcf86cd799439011' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "name": "My Design Kit",  "logos": [    {      "id": "6a1d1e5db5ef0dfa799ed3c9",      "url": "https://storage.googleapis.com/bucket/logos/my-logo.png",      "label": "Primary Logo"    }  ],  "colors": [    {      "id": "6a1d1e5db5ef0dfa799ed3ca",      "value": "#FF5733",      "label": "Brand Orange"    }  ],  "fonts": [    {      "id": "6a1d1e5db5ef0dfa799ed3cb",      "font": "Montserrat",      "fallback": "sans-serif",      "label": "Heading Font"    }  ]}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — pathrequired

designKitId — pathrequired

Version — headerrequired\---v3

Body required

{
  "name": "My Design Kit",  "logos": \[    {      "id": "6a1d1e5db5ef0dfa799ed3c9",      "url": "https://storage.googleapis.com/bucket/logos/my-logo.png",      "label": "Primary Logo"    }  \],  "colors": \[    {      "id": "6a1d1e5db5ef0dfa799ed3ca",      "value": "#FF5733",      "label": "Brand Orange"    }  \],  "fonts": \[    {      "id": "6a1d1e5db5ef0dfa799ed3cb",      "font": "Montserrat",      "fallback": "sans-serif",      "label": "Heading Font"    }  \]
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
