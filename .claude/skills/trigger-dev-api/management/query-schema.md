# Get query schema

> Source: https://trigger.dev/docs/management/query/schema

GET

/

api

/

v1

/

query

/

schema

cURL

cURL

    curl "https://api.trigger.dev/api/v1/query/schema" \
      -H "Authorization: Bearer tr_dev_1234"

200

    {
      "tables": [\
        {\
          "name": "<string>",\
          "description": "<string>",\
          "timeColumn": "<string>",\
          "columns": [\
            {\
              "name": "<string>",\
              "type": "<string>",\
              "description": "<string>",\
              "example": "<string>",\
              "allowedValues": [\
                "<string>"\
              ],\
              "coreColumn": true\
            }\
          ]\
        }\
      ]
    }

#### Authorizations

[​](https://trigger.dev/docs/management/query/schema#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Response

200

application/json

Schema retrieved successfully

[​](https://trigger.dev/docs/management/query/schema#response-tables)

tables

object\[\]

Show child attributes

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/query/execute)
[List dashboardsList available built-in dashboards with their widgets. Each dashboard contains pre-built TRQL queries for common metrics like run success rates, costs, and LLM usage.\
\
Next](https://trigger.dev/docs/management/query/dashboards)

⌘I

cURL

cURL

    curl "https://api.trigger.dev/api/v1/query/schema" \
      -H "Authorization: Bearer tr_dev_1234"

200

    {
      "tables": [\
        {\
          "name": "<string>",\
          "description": "<string>",\
          "timeColumn": "<string>",\
          "columns": [\
            {\
              "name": "<string>",\
              "type": "<string>",\
              "description": "<string>",\
              "example": "<string>",\
              "allowedValues": [\
                "<string>"\
              ],\
              "coreColumn": true\
            }\
          ]\
        }\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
