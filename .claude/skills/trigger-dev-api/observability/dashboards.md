# Dashboards

> Source: https://trigger.dev/docs/observability/dashboards

[​](https://trigger.dev/docs/observability/dashboards#overview)

Overview
---------------------------------------------------------------------------

In the Trigger.dev dashboard we have built-in dashboards and you can create your own. Dashboards are powered by [TRQL queries](https://trigger.dev/docs/observability/query)
 with widgets that can be displayed as charts, tables, or single values. They automatically refresh to show the latest data.

### 

[​](https://trigger.dev/docs/observability/dashboards#available-metrics-data)

Available metrics data

Trigger.dev automatically collects process metrics (CPU, memory) and Node.js runtime metrics (event loop, heap) for all deployed tasks — no configuration needed. Requires SDK version **4.4.1 or later**. You can also create custom metrics using the `otel.metrics` API from the SDK. All of this data is available in the `metrics` table for use in dashboard widgets. See [Logging, tracing & metrics](https://trigger.dev/docs/logging#metrics)
 for the full list of automatic metrics and how to create custom ones, or the [Query page](https://trigger.dev/docs/observability/query#metrics-table-columns)
 for the `metrics` table schema. ![The built-in Metrics dashboard](https://mintcdn.com/trigger/68rLR7qrtVP2353r/images/metrics-built-in.png?w=2500&fit=max&auto=format&n=68rLR7qrtVP2353r&q=85&s=7a5de31a93bc097b6ff1eac368ff6ad6)

### 

[​](https://trigger.dev/docs/observability/dashboards#visualization-types)

Visualization types

*   **Line chart** - Show trends over time
*   **Bar chart** - Compare values across categories
*   **Area chart** - Display cumulative trends
*   **Table** - Show detailed data in rows
*   **Single value** - Display a single metric (count, sum, average, etc.)

You can also add Titles to your dashboard.

[​](https://trigger.dev/docs/observability/dashboards#filtering-and-time-ranges)

Filtering and time ranges
-------------------------------------------------------------------------------------------------------------

All widgets on a dashboard use the time range filter applied to the dashboard. You can also filter the data by:

*   Scope: Environment, Project, Organization
*   Tasks
*   Queues

[​](https://trigger.dev/docs/observability/dashboards#creating-custom-dashboards)

Creating custom dashboards
---------------------------------------------------------------------------------------------------------------

1.  In the sidebar click the + icon next to “Dashboards”.
2.  Name your custom dashboard.
3.  From the top-right you can “Add chart” or “Add title”.
4.  For charts you write [TRQL queries](https://trigger.dev/docs/observability/query)
     and choose a visualization type.
5.  You can resize and reposition widgets on your dashboards.

[​](https://trigger.dev/docs/observability/dashboards#performance-considerations)

Performance considerations
---------------------------------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/observability/dashboards#optimize-queries-for-metrics)

Optimize queries for metrics

1.  **Use time bucketing** - `timeBucket()` automatically groups by appropriate intervals
2.  **Limit result size** - Add `LIMIT` clauses, especially for table widgets
3.  **Use approximate functions** - `uniq()` instead of `uniqExact()` for faster approximate counts

[​](https://trigger.dev/docs/observability/dashboards#exporting-metric-data)

Exporting metric data
-----------------------------------------------------------------------------------------------------

Export data from any metric widget:

1.  Click the widget menu (three dots)
2.  Select “Copy JSON” or “Copy CSV”

[​](https://trigger.dev/docs/observability/dashboards#best-practices)

Best practices
---------------------------------------------------------------------------------------

1.  **Start simple** - Begin with basic metrics and iterate based on insights
2.  **Use meaningful names** - Give widgets clear, descriptive titles
3.  **Group related metrics** - Organize dashboards by theme (performance, costs, errors)
4.  **Test queries first** - Use the Query page to develop and test before adding to dashboards

[​](https://trigger.dev/docs/observability/dashboards#troubleshooting)

Troubleshooting
-----------------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/observability/dashboards#widget-shows-%E2%80%9Cno-data%E2%80%9D)

Widget shows “No data”

*   Check that your query returns results in the Query page
*   Verify time filters include the period with data
*   Ensure task/queue filters match existing runs

### 

[​](https://trigger.dev/docs/observability/dashboards#widget-is-slow-to-load)

Widget is slow to load

*   Add time range filters to your query
*   Use `LIMIT` clauses
*   Simplify aggregations
*   Check query execution time in Query page

### 

[​](https://trigger.dev/docs/observability/dashboards#chart-displays-incorrectly)

Chart displays incorrectly

*   Verify column names match visualization config
*   Check data types (numbers for charts, dates for time series)
*   Ensure `timeBucket()` is used for time-series charts
*   Review that series columns exist in query results

[​](https://trigger.dev/docs/observability/dashboards#limits)

Limits
-----------------------------------------------------------------------

Dashboards are powered by Query so have [the same limits](https://trigger.dev/docs/observability/query#limits)
 as Query. There is a separate concurrency limits for metric widgets.

| Limit | Details |
| --- | --- |
| Concurrent widget queries | 30 per project |

See [Limits](https://trigger.dev/docs/limits)
 for details.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/observability/query)
[Run testsYou can use the dashboard to run a test of your tasks.\
\
Next](https://trigger.dev/docs/run-tests)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
