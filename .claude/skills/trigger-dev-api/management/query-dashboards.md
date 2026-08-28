# List dashboards

> Source: https://trigger.dev/docs/management/query/dashboards

GET

/

api

/

v1

/

query

/

dashboards

cURL

cURL

    curl "https://api.trigger.dev/api/v1/query/dashboards" \
      -H "Authorization: Bearer tr_dev_1234"

200

    {
      "dashboards": [\
        {\
          "key": "<string>",\
          "title": "<string>",\
          "widgets": [\
            {\
              "id": "<string>",\
              "title": "<string>",\
              "query": "<string>"\
            }\
          ]\
        }\
      ]
    }

#### Authorizations

[​](https://trigger.dev/docs/management/query/dashboards#authorization-authorization)

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

Dashboards listed successfully

[​](https://trigger.dev/docs/management/query/dashboards#response-dashboards)

dashboards

object\[\]

Show child attributes

Was this page helpful?

YesNo

[Previous\
\
Get query schemaGet the schema for TRQL queries, including all available tables, their columns, data types, descriptions, and allowed values.](https://trigger.dev/docs/management/query/schema)

⌘I

cURL

cURL

    curl "https://api.trigger.dev/api/v1/query/dashboards" \
      -H "Authorization: Bearer tr_dev_1234"

200

    {
      "dashboards": [\
        {\
          "key": "<string>",\
          "title": "<string>",\
          "widgets": [\
            {\
              "id": "<string>",\
              "title": "<string>",\
              "query": "<string>"\
            }\
          ]\
        }\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
