# Execute a query

> Source: https://trigger.dev/docs/management/query/execute

POST

/

api

/

v1

/

query

TypeScript

SDK - Basic query

import { query } from "@trigger.dev/sdk"; // Basic query with defaults (environment scope, json format) const result = await query.execute( "SELECT run\_id, status FROM runs LIMIT 10" ); console.log(result.results);

200

400

    {
      "format": "json",
      "results": [\
        {}\
      ]
    }

See the [Query documentation](https://trigger.dev/docs/observability/query#example-queries)
 for comprehensive examples including:

*   Failed runs analysis
*   Task success rates over time
*   Cost tracking and optimization
*   Performance metrics and percentiles

#### Authorizations

[​](https://trigger.dev/docs/management/query/execute#authorization-authorization)

Authorization

string

header

required

Use your project-specific Secret API key. Will start with `tr_dev_`, `tr_prod`, `tr_stg`, etc.

You can find your Secret API key in the API Keys section of your Trigger.dev project dashboard.

Our TypeScript SDK will default to using the value of the `TRIGGER_SECRET_KEY` environment variable if it is set. If you are using the SDK in a different environment, you can set the key using the `configure` function.

    import { configure } from "@trigger.dev/sdk";
    
    configure({ accessToken: "tr_dev_1234" });
    

#### Body

application/json

[​](https://trigger.dev/docs/management/query/execute#body-query)

query

string

required

The TRQL query to execute

Example:

`"SELECT run_id, status, triggered_at FROM runs WHERE status = 'Failed' LIMIT 10"`

[​](https://trigger.dev/docs/management/query/execute#body-scope)

scope

enum<string>

default:environment

The scope of data to query - environment (default), project, or organization

Available options:

`environment`,

`project`,

`organization`

[​](https://trigger.dev/docs/management/query/execute#body-period-one-of-0)

period

string | null

Time period shorthand (e.g., "7d", "30d", "1h"). Cannot be used with from/to.

Example:

`"7d"`

[​](https://trigger.dev/docs/management/query/execute#body-from-one-of-0)

from

string<date-time> | null

Start of time range as ISO 8601 timestamp. Must be used with 'to'.

Example:

`"2024-01-01T00:00:00Z"`

[​](https://trigger.dev/docs/management/query/execute#body-to-one-of-0)

to

string<date-time> | null

End of time range as ISO 8601 timestamp. Must be used with 'from'.

Example:

`"2024-01-31T23:59:59Z"`

[​](https://trigger.dev/docs/management/query/execute#body-format)

format

enum<string>

default:json

Response format - "json" returns structured data (default), "csv" returns CSV string

Available options:

`json`,

`csv`

#### Response

200

application/json

Query executed successfully

*   Option 1
    
*   Option 2
    

JSON format response

[​](https://trigger.dev/docs/management/query/execute#response-one-of-0-format)

format

enum<string>

Available options:

`json`

[​](https://trigger.dev/docs/management/query/execute#response-one-of-0-results)

results

object\[\]

Array of result rows

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/management/sessions/channels)
[Get query schemaGet the schema for TRQL queries, including all available tables, their columns, data types, descriptions, and allowed values.\
\
Next](https://trigger.dev/docs/management/query/schema)

⌘I

TypeScript

SDK - Basic query

import { query } from "@trigger.dev/sdk"; // Basic query with defaults (environment scope, json format) const result = await query.execute( "SELECT run\_id, status FROM runs LIMIT 10" ); console.log(result.results);

200

400

    {
      "format": "json",
      "results": [\
        {}\
      ]
    }

Assistant

Responses are generated using AI and may contain mistakes.
