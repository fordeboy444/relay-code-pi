# Get Social Media Statistics

- **URL:** https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-statistics
- **Summary:** Retrieve analytics data for multiple social media accounts. Supports custom date ranges for both the current period and a comparison period. If no date ranges are provided, defaults to the last 7 days (excluding today) with comparison to the previous 7 days.

[Skip to main content](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-statistics#__docusaurus_skipToContent_fallback)

Version: v3

Get Social Media Statistics
===========================

POST 

https://services.leadconnectorhq.com/social-media-posting/statistics

Copy for LLMView as MarkdownOpen in ClaudeOpen in ChatGPTOpen in Cursor

Retrieve analytics data for multiple social media accounts. Supports custom date ranges for both the current period and a comparison period. If no date ranges are provided, defaults to the last 7 days (excluding today) with comparison to the previous 7 days.

### Requirements

#### Scope(s)

`socialplanner/statistics.readonly`

#### Auth Method(s)

`OAuth Access Token``Private Integration Token`

#### Token Type(s)

`Sub-Account Token`

Request[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-statistics#request "Direct link to request")

### Header Parameters

**Version** stringrequired

**Possible values:** \[`v3`\]

API Version

**Example:** `v3`

### Query Parameters

**locationId** stringrequired

Location ID

**Example:** `w37swmmLbA02zgqKPpxITe2`

*   application/json

*   Body
*   default-behavior
*   custom-range-with-comparison
*   custom-range-without-comparison

### Body**required**

**profileIds**string\[\]required

Array of connected social media account IDs to fetch analytics for. This can be found as 'profileId' in /accounts api.

**Possible values:** `>= 1`, `<= 100`

**Example:** `["67a5a9aa776c837de4aa5b12"]`

**platforms**string\[\]

Array of social media platforms to filter analytics by. If not provided, all platforms will be included. NOTE: Linkedin (PAGE only) and Tiktok (BUSINESS only) are supported.

**Possible values:** \[`facebook`, `instagram`, `linkedin`, `google`, `pinterest`, `youtube`, `tiktok`\]

**Example:** `["facebook","instagram"]`

**currentRange** object

Custom date range for the current analytics period. If omitted, defaults to the last 7 days (excluding today) with automatic comparison to the previous 7 days.

**startDate**string<date-time>required

Start date in ISO 8601 format.

**Example:** `2025-03-01T00:00:00.000Z`

**endDate**string<date-time>required

End date in ISO 8601 format. Must be after startDate.

**Example:** `2025-03-31T23:59:59.999Z`

**prevRange** object

Comparison date range. Can only be provided when currentRange is also present. If omitted while currentRange is present, no comparison data is returned.

**startDate**string<date-time>required

Start date in ISO 8601 format.

**Example:** `2025-02-01T00:00:00.000Z`

**endDate**string<date-time>required

End date in ISO 8601 format. Must be after startDate.

**Example:** `2025-02-28T23:59:59.999Z`

Default behavior (backward compatible, no date ranges)

    {  "profileIds": [    "67a5a9aa776c837de4aa5b12"  ],  "platforms": [    "facebook",    "instagram"  ]}

Custom date range with comparison

    {  "profileIds": [    "67a5a9aa776c837de4aa5b12"  ],  "platforms": [    "facebook",    "instagram"  ],  "currentRange": {    "startDate": "2025-03-01T00:00:00.000Z",    "endDate": "2025-03-31T23:59:59.999Z"  },  "prevRange": {    "startDate": "2025-02-01T00:00:00.000Z",    "endDate": "2025-02-28T23:59:59.999Z"  }}

Custom date range without comparison

    {  "profileIds": [    "67a5a9aa776c837de4aa5b12"  ],  "platforms": [    "facebook",    "instagram"  ],  "currentRange": {    "startDate": "2025-03-01T00:00:00.000Z",    "endDate": "2025-03-31T23:59:59.999Z"  }}

Responses[​](https://marketplace.gohighlevel.com/docs/ghl/social-planner/get-statistics#responses "Direct link to Responses")

*   200
*   400
*   401
*   422

Successfully retrieved analytics data

*   application/json

*   Schema
*   Example (auto)

**Schema**

**results** object

Analytics data grouped by metrics and platforms

**dayRange**string\[\]

Array of day names for the analytics period

**Example:** `["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]`

**totals** object

Aggregated metrics totals

**posts**number

Total number of posts published

**Example:** `0`

**likes**number

Total number of likes received

**Example:** `0`

**followers**number

Total number of followers across all platforms

**Example:** `0`

**impressions**number

Total number of impressions across all posts

**Example:** `0`

**comments**number

Total number of comments received

**Example:** `0`

**postPerformance** object

Post performance metrics over time

**posts**object

Number of posts published per day, organized by platform

**Example:** `{"google":[0,0,0,0,0,0,0],"instagram":[2,1,3,0,1,2,4],"facebook":[1,0,2,1,0,1,1],"linkedin":[0,0,1,0,0,0,1],"youtube":[0,0,0,1,0,0,0]}`

**impressions**number\[\]

Daily impressions over the analytics period

**Example:** `[0,0,0,0,0,0,0]`

**likes**number\[\]

Daily likes over the analytics period

**Example:** `[0,0,0,0,0,0,0]`

**comments**number\[\]

Daily comments over the analytics period

**Example:** `[0,0,0,0,0,0,0]`

**breakdowns** object

Detailed breakdowns by metric and platform

**posts** object

Post count breakdown by platform

**total**number

Total number of posts across all platforms

**Example:** `356`

**totalChange**number

Percentage change in total posts compared to previous period

**Example:** `-39.35`

**platforms** object

Platform-specific post counts with change percentages

**property name\*** object

**value**number

Number of posts for this platform

**Example:** `46`

**change**number

Percentage change compared to previous period

**Example:** `-71.95`

**impressions** object

Impressions breakdown by platform

**total**number

Total impressions across all platforms

**Example:** `944`

**totalChange**number

Percentage change in total impressions compared to previous period

**Example:** `-49.68`

**platforms** object

Platform-specific impression counts with change percentages

**property name\*** object

**value**number

Number of impressions for this platform

**Example:** `239`

**change**number

Percentage change compared to previous period

**Example:** `83.85`

**reach** object

Reach breakdown by platform

**total**number

Total reach across all platforms

**Example:** `354`

**totalChange**number

Percentage change in total reach compared to previous period

**Example:** `98.88`

**platforms** object

Platform-specific reach counts with change percentages

**property name\*** object

**value**number

Reach count for this platform

**Example:** `233`

**change**number

Percentage change compared to previous period

**Example:** `128.43`

**engagement** object

Engagement metrics breakdown by platform

**property name\*** object

**likes**number

Number of likes received on this platform

**Example:** `0`

**comments**number

Number of comments received on this platform

**Example:** `11`

**shares**number

Number of shares on this platform

**Example:** `0`

**change**number

Percentage change in engagement compared to previous period

**Example:** `-66.67`

**platformTotals** object

Platform-wise totals with time series data

**impressions** object

Daily impression counts by platform

**property name\*** object

**total**number

Total impressions for this platform

**Example:** `239`

**series**number\[\]

Daily impression counts over the analytics period

**Example:** `[22,6,4,69,138,0,0]`

**followers** object

Daily follower counts by platform

**property name\*** object

**total**number

Total followers for this platform

**Example:** `0`

**series**number\[\]

Daily follower counts over the analytics period

**Example:** `[0,0,0,0,0,0,0]`

**likes** object

Daily like counts by platform

**property name\*** object

**total**number

Total likes for this platform

**Example:** `1`

**series**number\[\]

Daily like counts over the analytics period

**Example:** `[0,0,0,1,0,0,0]`

**demographics** object

Demographic data breakdown

**gender** object

Gender distribution of audience

**totals** object

Total counts and percentages by gender

**male** object

Male audience statistics

**total**number

Total number of male audience members

**Example:** `0`

**percentage**number

Percentage of male audience

**Example:** `0`

**female** object

Female audience statistics

**total**number

Total number of female audience members

**Example:** `0`

**percentage**number

Percentage of female audience

**Example:** `0`

**unknown** object

Unknown gender audience statistics

**total**number

Total number of audience members with unknown gender

**Example:** `0`

**percentage**number

Percentage of audience with unknown gender

**Example:** `0`

**age** object

Age distribution of audience

**totals** object

Total counts by age group

**13-17**number

Number of audience members aged 13-17

**Example:** `0`

**18-24**number

Number of audience members aged 18-24

**Example:** `0`

**25-34**number

Number of audience members aged 25-34

**Example:** `0`

**35-44**number

Number of audience members aged 35-44

**Example:** `0`

**45-54**number

Number of audience members aged 45-54

**Example:** `0`

**55-64**number

Number of audience members aged 55-64

**Example:** `0`

**65+**number

Number of audience members aged 65 and above

**Example:** `0`

**message**string

Success message indicating the analytics were built successfully

**Example:** `Analytics Built Successfully`

**traceId**string

Unique identifier for tracking this request

**Example:** `42fc8dd8-d55b-475f-944f-9efb90d77564`

    {  "results": {    "dayRange": [      "Mon",      "Tue",      "Wed",      "Thu",      "Fri",      "Sat",      "Sun"    ],    "totals": {      "posts": 0,      "likes": 0,      "followers": 0,      "impressions": 0,      "comments": 0    },    "postPerformance": {      "posts": {        "google": [          0,          0,          0,          0,          0,          0,          0        ]      },      "impressions": [        0,        0,        0,        0,        0,        0,        0      ],      "likes": [        0,        0,        0,        0,        0,        0,        0      ],      "comments": [        0,        0,        0,        0,        0,        0,        0      ]    },    "breakdowns": {      "posts": {        "total": 0,        "totalChange": 0,        "platforms": {          "google": {            "value": 0,            "change": 0          }        }      },      "impressions": {        "total": 0,        "totalChange": 0,        "platforms": {          "google": {            "value": 0,            "change": 0          }        }      },      "reach": {        "total": 0,        "totalChange": 0,        "platforms": {          "google": {            "value": 0,            "change": 0          }        }      },      "engagement": {        "google": {          "likes": 0,          "comments": 0,          "shares": 0,          "change": 0        }      }    },    "platformTotals": {      "impressions": {        "google": {          "total": 0,          "series": [            0,            0,            0,            0,            0,            0,            0          ]        }      },      "followers": {        "google": {          "total": 0,          "series": [            0,            0,            0,            0,            0,            0,            0          ]        }      },      "likes": {        "google": {          "total": 0,          "series": [            0,            0,            0,            0,            0,            0,            0          ]        }      }    },    "demographics": {      "gender": {        "totals": {          "male": {            "total": 0,            "percentage": 0          },          "female": {            "total": 0,            "percentage": 0          },          "unknown": {            "total": 0,            "percentage": 0          }        }      },      "age": {        "totals": {          "13-17": 0,          "18-24": 0,          "25-34": 0,          "35-44": 0,          "45-54": 0,          "55-64": 0,          "65+": 0        }      }    }  },  "message": "Analytics Built Successfully",  "traceId": "42fc8dd8-d55b-475f-944f-9efb90d77564"}

Bad Request - Occurs when: more than 100 accounts are requested, invalid date formats are provided, startDate is after endDate, prevRange is provided without currentRange, or invalid platform values are specified.

*   application/json

*   Schema
*   Example (auto)

**Schema**

**statusCode**number

**Example:** `400`

**message**string

**Example:** `Bad Request`

    {  "statusCode": 400,  "message": "Bad Request"}

Unauthorized - Invalid or missing authentication credentials

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

Unprocessable Entity - Invalid request body format

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

**name:** [Authorization](https://marketplace.gohighlevel.com/docs/ghl/social-planner/social-media-posting-api#authentication)
**type:** http**scopes:** `socialplanner/statistics.readonly`**scheme:** bearer**bearerFormat:** JWT**in:** header**description:** Use the Access Token generated with user type as Sub-Account (OR) Private Integration Token of Sub-Account.

*   curl
*   nodejs
*   python
*   php
*   java
*   go
*   ruby
*   powershell

*   CURL

    curl -L 'https://services.leadconnectorhq.com/social-media-posting/statistics?locationId=w37swmmLbA02zgqKPpxITe2' \-H 'Content-Type: application/json' \-H 'Accept: application/json' \-H 'Version: v3' \-H 'Authorization: Bearer <Authorization>' \-d '{  "profileIds": [    "67a5a9aa776c837de4aa5b12"  ],  "platforms": [    "facebook",    "instagram"  ],  "currentRange": {    "startDate": "2025-03-01T00:00:00.000Z",    "endDate": "2025-03-31T23:59:59.999Z"  },  "prevRange": {    "startDate": "2025-02-01T00:00:00.000Z",    "endDate": "2025-02-28T23:59:59.999Z"  }}'

RequestCollapse all

Base URL

Edit

https://services.leadconnectorhq.com

Auth

Bearer Token

Parameters

locationId — queryrequired

Version — headerrequired\---v3

Body required

*   Example (from schema)
*   default-behavior
*   custom-range-with-comparison
*   custom-range-without-comparison

{
  "profileIds": \[    "67a5a9aa776c837de4aa5b12"  \],  "platforms": \[    "facebook",    "instagram"  \],  "currentRange": {    "startDate": "2025-03-01T00:00:00.000Z",    "endDate": "2025-03-31T23:59:59.999Z"  },  "prevRange": {    "startDate": "2025-02-01T00:00:00.000Z",    "endDate": "2025-02-28T23:59:59.999Z"  }
}
Send API Request

ResponseClear

Click the `Send API Request` button above and see the response here!
