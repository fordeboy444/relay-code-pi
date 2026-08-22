# Google Sheets API — Core schemas D–N

48 schemas: DataSourceObjectReferences, DataSourceParameter, DataSourceRefreshDailySchedule, DataSourceRefreshMonthlySchedule, DataSourceRefreshSchedule, DataSourceRefreshWeeklySchedule, DataSourceSheetDimensionRange, DataSourceSheetProperties, DataSourceSpec, DataSourceTable, DataValidationRule, DateTimeRule…

## Schemas in this file

- [`DataSourceObjectReferences`](#datasourceobjectreferences)
- [`DataSourceParameter`](#datasourceparameter)
- [`DataSourceRefreshDailySchedule`](#datasourcerefreshdailyschedule)
- [`DataSourceRefreshMonthlySchedule`](#datasourcerefreshmonthlyschedule)
- [`DataSourceRefreshSchedule`](#datasourcerefreshschedule)
- [`DataSourceRefreshWeeklySchedule`](#datasourcerefreshweeklyschedule)
- [`DataSourceSheetDimensionRange`](#datasourcesheetdimensionrange)
- [`DataSourceSheetProperties`](#datasourcesheetproperties)
- [`DataSourceSpec`](#datasourcespec)
- [`DataSourceTable`](#datasourcetable)
- [`DataValidationRule`](#datavalidationrule)
- [`DateTimeRule`](#datetimerule)
- [`DeveloperMetadata`](#developermetadata)
- [`DeveloperMetadataLocation`](#developermetadatalocation)
- [`DeveloperMetadataLookup`](#developermetadatalookup)
- [`DimensionGroup`](#dimensiongroup)
- [`DimensionProperties`](#dimensionproperties)
- [`DimensionRange`](#dimensionrange)
- [`Editors`](#editors)
- [`EmbeddedChart`](#embeddedchart)
- [`EmbeddedObjectBorder`](#embeddedobjectborder)
- [`EmbeddedObjectPosition`](#embeddedobjectposition)
- [`ErrorValue`](#errorvalue)
- [`ExtendedValue`](#extendedvalue)
- [`FilterCriteria`](#filtercriteria)
- [`FilterSpec`](#filterspec)
- [`FilterView`](#filterview)
- [`GradientRule`](#gradientrule)
- [`GridCoordinate`](#gridcoordinate)
- [`GridData`](#griddata)
- [`GridProperties`](#gridproperties)
- [`GridRange`](#gridrange)
- [`HistogramChartSpec`](#histogramchartspec)
- [`HistogramRule`](#histogramrule)
- [`HistogramSeries`](#histogramseries)
- [`InterpolationPoint`](#interpolationpoint)
- [`Interval`](#interval)
- [`IterativeCalculationSettings`](#iterativecalculationsettings)
- [`KeyValueFormat`](#keyvalueformat)
- [`LineStyle`](#linestyle)
- [`Link`](#link)
- [`LookerDataSourceSpec`](#lookerdatasourcespec)
- [`ManualRule`](#manualrule)
- [`ManualRuleGroup`](#manualrulegroup)
- [`MatchedDeveloperMetadata`](#matcheddevelopermetadata)
- [`MatchedValueRange`](#matchedvaluerange)
- [`NamedRange`](#namedrange)
- [`NumberFormat`](#numberformat)

## DataSourceObjectReferences

A list of references to data source objects.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `references` | array (DataSourceObjectReference) | The references. |


## DataSourceParameter

A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | A range that contains the value of the parameter. Its size must be 1x1. |
| `namedRangeId` | string | ID of a NamedRange. Its size must be 1x1. |
| `name` | string | Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers). |


## DataSourceRefreshDailySchedule

A schedule for data to refresh every day in a given time interval.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `startTime` | TimeOfDay | The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. |


## DataSourceRefreshMonthlySchedule

A monthly schedule for data to refresh on specific days in the month in a given time interval.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `daysOfMonth` | array (integer (int32)) | Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At least one day must be specified. |
| `startTime` | TimeOfDay | The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. |


## DataSourceRefreshSchedule

Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8 AM , the refresh will take place between 8 AM and 12 PM every day.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dailySchedule` | DataSourceRefreshDailySchedule | Daily refresh schedule. |
| `nextRun` | Interval | Output only. The time interval of the next run. |
| `enabled` | boolean | True if the refresh schedule is enabled, or false otherwise. |
| `weeklySchedule` | DataSourceRefreshWeeklySchedule | Weekly refresh schedule. |
| `monthlySchedule` | DataSourceRefreshMonthlySchedule | Monthly refresh schedule. |
| `refreshScope` | string (enum) | The scope of the refresh. Must be ALL_DATA_SOURCES. |

**`refreshScope` enum values:**

- `DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED` — Default value, do not use.
- `ALL_DATA_SOURCES` — Refreshes all data sources and their associated data source objects in the spreadsheet.


## DataSourceRefreshWeeklySchedule

A weekly schedule for data to refresh on specific days in a given time interval.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `startTime` | TimeOfDay | The start time of a time interval in which a data source refresh is scheduled. Only `hours` part is used. The time interval size defaults to that in the Sheets editor. |
| `daysOfWeek` | array (string (enum)) | Days of the week to refresh. At least one day must be specified. |


## DataSourceSheetDimensionRange

A range along a single dimension on a DATA_SOURCE sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sheetId` | integer (int32) | The ID of the data source sheet the range is on. |
| `columnReferences` | array (DataSourceColumnReference) | The columns on the data source sheet. |


## DataSourceSheetProperties

Additional properties of a DATA_SOURCE sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSourceId` | string | ID of the DataSource the sheet is connected to. |
| `columns` | array (DataSourceColumn) | The columns displayed on the sheet, corresponding to the values in RowData. |
| `dataExecutionStatus` | DataExecutionStatus | The data execution status. |


## DataSourceSpec

This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `looker` | LookerDataSourceSpec | A LookerDatasourceSpec. |
| `bigQuery` | BigQueryDataSourceSpec | A BigQueryDataSourceSpec. |
| `parameters` | array (DataSourceParameter) | The parameters of the data source, used when querying the data source. |


## DataSourceTable

A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataExecutionStatus` | DataExecutionStatus | Output only. The data execution status. |
| `filterSpecs` | array (FilterSpec) | Filter specifications in the data source table. |
| `columns` | array (DataSourceColumnReference) | Columns selected for the data source table. The column_selection_type must be SELECTED. |
| `sortSpecs` | array (SortSpec) | Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order. |
| `dataSourceId` | string | The ID of the data source the data source table is associated with. |
| `columnSelectionType` | string (enum) | The type to select columns for the data source table. Defaults to SELECTED. |
| `rowLimit` | integer (int32) | The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit. |

**`columnSelectionType` enum values:**

- `DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED` — The default column selection type, do not use.
- `SELECTED` — Select columns specified by columns field.
- `SYNC_ALL` — Sync all current and future columns in the data source. If set, the data source table fetches all the columns in the data source at the time of refresh.


## DataValidationRule

A data validation rule.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `showCustomUi` | boolean | True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown. |
| `strict` | boolean | True if invalid data should be rejected. |
| `condition` | BooleanCondition | The condition that data in the cell must match. |
| `inputMessage` | string | A message to show the user when adding data to the cell. |


## DateTimeRule

Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | The type of date-time grouping to apply. |

**`type` enum values:**

- `DATE_TIME_RULE_TYPE_UNSPECIFIED` — The default type, do not use.
- `SECOND` — Group dates by second, from 0 to 59.
- `MINUTE` — Group dates by minute, from 0 to 59.
- `HOUR` — Group dates by hour using a 24-hour system, from 0 to 23.
- `HOUR_MINUTE` — Group dates by hour and minute using a 24-hour system, for example 19:45.
- `HOUR_MINUTE_AMPM` — Group dates by hour and minute using a 12-hour system, for example 7:45 PM. The AM/PM designation is translated based on the spreadsheet locale.
- `DAY_OF_WEEK` — Group dates by day of week, for example Sunday. The days of the week will be translated based on the spreadsheet locale.
- `DAY_OF_YEAR` — Group dates by day of year, from 1 to 366. Note that dates after Feb. 29 fall in different buckets in leap years than in non-leap years.
- `DAY_OF_MONTH` — Group dates by day of month, from 1 to 31.
- `DAY_MONTH` — Group dates by day and month, for example 22-Nov. The month is translated based on the spreadsheet locale.
- `MONTH` — Group dates by month, for example Nov. The month is translated based on the spreadsheet locale.
- `QUARTER` — Group dates by quarter, for example Q1 (which represents Jan-Mar).
- `YEAR` — Group dates by year, for example 2008.
- `YEAR_MONTH` — Group dates by year and month, for example 2008-Nov. The month is translated based on the spreadsheet locale.
- `YEAR_QUARTER` — Group dates by year and quarter, for example 2008 Q4.
- `YEAR_MONTH_DAY` — Group dates by year, month, and day, for example 2008-11-22.


## DeveloperMetadata

Developer metadata associated with a location or object in a spreadsheet. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata). Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and it will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata is still associated with the row it was first associated with (what is now row 6). If the associated object is deleted then its metadata is deleted too.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `metadataId` | integer (int32) | The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive. |
| `metadataKey` | string | The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified. |
| `metadataValue` | string | Data associated with the metadata's key. |
| `location` | DeveloperMetadataLocation | The location where the metadata is associated. |
| `visibility` | string (enum) | The metadata visibility. Developer metadata must always have visibility specified. |

**`visibility` enum values:**

- `DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED` — Default value.
- `DOCUMENT` — Document-visible metadata is accessible from any developer project with access to the document.
- `PROJECT` — Project-visible metadata is only visible to and accessible by the developer project that created the metadata.


## DeveloperMetadataLocation

A location where metadata may be associated in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `locationType` | string (enum) | The type of location this object represents. This field is read-only. |
| `dimensionRange` | DimensionRange | Represents the row or column when metadata is associated with a dimension. The specified DimensionRange must represent a single row or column. It cannot be unbounded or span multiple rows or columns. |
| `spreadsheet` | boolean | True when metadata is associated with an entire spreadsheet. |
| `sheetId` | integer (int32) | The ID of the sheet when metadata is associated with an entire sheet. |

**`locationType` enum values:**

- `DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED` — Default value.
- `ROW` — Developer metadata associated on an entire row dimension.
- `COLUMN` — Developer metadata associated on an entire column dimension.
- `SHEET` — Developer metadata associated on an entire sheet.
- `SPREADSHEET` — Developer metadata associated on the entire spreadsheet.


## DeveloperMetadataLookup

Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that match the intersection of all the specified fields; any field or combination of fields may be specified.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `locationType` | string (enum) | Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered.… |
| `locationMatchingStrategy` | string (enum) | Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecifi… |
| `metadataLocation` | DeveloperMetadataLocation | Limits the selected developer metadata to those entries associated with the specified location. This field either matches exact locations or all intersecting locations according the specified locationMatchingStrategy. |
| `visibility` | string (enum) | Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visible to the requesting project is considered. |
| `metadataId` | integer (int32) | Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id. |
| `metadataKey` | string | Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key. |
| `metadataValue` | string | Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value. |

**`locationType` enum values:**

- `DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED` — Default value.
- `ROW` — Developer metadata associated on an entire row dimension.
- `COLUMN` — Developer metadata associated on an entire column dimension.
- `SHEET` — Developer metadata associated on an entire sheet.
- `SPREADSHEET` — Developer metadata associated on the entire spreadsheet.

**`locationMatchingStrategy` enum values:**

- `DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED` — Default value. This value must not be used.
- `EXACT_LOCATION` — Indicates that a specified location should be matched exactly. For example, if row three were specified as a location this matching strategy would only match developer metadata also associated on row three. Metadata associated on other locations would not be considered.
- `INTERSECTING_LOCATION` — Indicates that a specified location should match that exact location as well as any intersecting locations. For example, if row three were specified as a location this matching strategy would match developer metadata associated on row three as well as metadata associated on locations that intersect row three. If, for instance, there was developer metadata associated on column B, this matching strategy would also match that location because column B intersects row three.

**`visibility` enum values:**

- `DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED` — Default value.
- `DOCUMENT` — Document-visible metadata is accessible from any developer project with access to the document.
- `PROJECT` — Project-visible metadata is only visible to and accessible by the developer project that created the metadata.


## DimensionGroup

A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | DimensionRange | The range over which this group exists. |
| `depth` | integer (int32) | The depth of the group, representing how many groups have a range that wholly contains the range of this group. |
| `collapsed` | boolean | This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property.… |


## DimensionProperties

Properties about a dimension.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `pixelSize` | integer (int32) | The height (if a row) or width (if a column) of the dimension in pixels. |
| `developerMetadata` | array (DeveloperMetadata) | The developer metadata associated with a single row or column. |
| `dataSourceColumnReference` | DataSourceColumnReference | Output only. If set, this is a column in a data source sheet. |
| `hiddenByFilter` | boolean | True if this dimension is being filtered. This field is read-only. |
| `hiddenByUser` | boolean | True if this dimension is explicitly hidden. |


## DimensionRange

A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sheetId` | integer (int32) | The sheet this span is on. |
| `startIndex` | integer (int32) | The start (inclusive) of the span, or not set if unbounded. |
| `endIndex` | integer (int32) | The end (exclusive) of the span, or not set if unbounded. |
| `dimension` | string (enum) | The dimension of the span. |

**`dimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## Editors

The editors of a protected range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `users` | array (string) | The email addresses of users with edit access to the protected range. |
| `domainUsersCanEdit` | boolean | True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain. |
| `groups` | array (string) | The email addresses of groups with edit access to the protected range. |


## EmbeddedChart

A chart embedded in a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `chartId` | integer (int32) | The ID of the chart. |
| `border` | EmbeddedObjectBorder | The border of the chart. |
| `position` | EmbeddedObjectPosition | The position of the chart. |
| `spec` | ChartSpec | The specification of the chart. |


## EmbeddedObjectBorder

A border along an embedded object.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `color` | Color | The color of the border. Deprecated: Use color_style. |
| `colorStyle` | ColorStyle | The color of the border. If color is also set, this field takes precedence. |


## EmbeddedObjectPosition

The position of an embedded object such as a chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sheetId` | integer (int32) | The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative. |
| `overlayPosition` | OverlayPosition | The position at which the object is overlaid on top of a grid. |
| `newSheet` | boolean | If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing. |


## ErrorValue

An error in a cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | The type of error. |
| `message` | string | A message with more information about the error (in the spreadsheet's locale). |

**`type` enum values:**

- `ERROR_TYPE_UNSPECIFIED` — The default error type, do not use this.
- `ERROR` — Corresponds to the `#ERROR!` error.
- `NULL_VALUE` — Corresponds to the `#NULL!` error.
- `DIVIDE_BY_ZERO` — Corresponds to the `#DIV/0` error.
- `VALUE` — Corresponds to the `#VALUE!` error.
- `REF` — Corresponds to the `#REF!` error.
- `NAME` — Corresponds to the `#NAME?` error.
- `NUM` — Corresponds to the `#NUM!` error.
- `N_A` — Corresponds to the `#N/A` error.
- `LOADING` — Corresponds to the `Loading...` state.


## ExtendedValue

The kinds of value that a cell in a spreadsheet can have.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `boolValue` | boolean | Represents a boolean value. |
| `errorValue` | ErrorValue | Represents an error. This field is read-only. |
| `numberValue` | number (double) | Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format. |
| `formulaValue` | string | Represents a formula. |
| `stringValue` | string | Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`. |


## FilterCriteria

Criteria for showing or hiding rows in a filter or filter view.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `visibleBackgroundColorStyle` | ColorStyle | The background fill color to filter by; only cells with this fill color are shown. This field is mutually exclusive with visible_foreground_color, and must be set to an RGB-type color. If visible_background_color is also set, this field takes precedence. |
| `visibleForegroundColorStyle` | ColorStyle | The foreground color to filter by; only cells with this foreground color are shown. This field is mutually exclusive with visible_background_color, and must be set to an RGB-type color. If visible_foreground_color is also set, this field takes precedence. |
| `hiddenValues` | array (string) | Values that should be hidden. |
| `visibleBackgroundColor` | Color | The background fill color to filter by; only cells with this fill color are shown. Mutually exclusive with visible_foreground_color. Deprecated: Use visible_background_color_style. |
| `condition` | BooleanCondition | A condition that must be `true` for values to be shown. (This does not override hidden_values -- if a value is listed there, it will still be hidden.) |
| `visibleForegroundColor` | Color | The foreground color to filter by; only cells with this foreground color are shown. Mutually exclusive with visible_background_color. Deprecated: Use visible_foreground_color_style. |


## FilterSpec

The filter criteria associated with a specific column.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `columnIndex` | integer (int32) | The zero-based column index. |
| `dataSourceColumnReference` | DataSourceColumnReference | Reference to a data source column. |
| `filterCriteria` | FilterCriteria | The criteria for the column. |


## FilterView

A filter view. For more information, see [Manage data visibility with filters](https://developers.google.com/workspace/sheets/api/guides/filters).

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `title` | string | The name of the filter view. |
| `sortSpecs` | array (SortSpec) | The sort order per column. Later specifications are used when values are equal in the earlier specifications. |
| `namedRangeId` | string | The named range this filter view is backed by, if any. When writing, only one of range, named_range_id, or table_id may be set. |
| `tableId` | string | The table this filter view is backed by, if any. When writing, only one of range, named_range_id, or table_id may be set. |
| `criteria` | map (string -> FilterCriteria) | The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. |
| `filterSpecs` | array (FilterSpec) | The filter criteria for showing or hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. |
| `filterViewId` | integer (int32) | The ID of the filter view. |
| `range` | GridRange | The range this filter view covers. When writing, only one of range, named_range_id, or table_id may be set. |


## GradientRule

A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `minpoint` | InterpolationPoint | The starting interpolation point. |
| `maxpoint` | InterpolationPoint | The final interpolation point. |
| `midpoint` | InterpolationPoint | An optional midway interpolation point. |


## GridCoordinate

A coordinate in a sheet. All indexes are zero-based.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `columnIndex` | integer (int32) | The column index of the coordinate. |
| `rowIndex` | integer (int32) | The row index of the coordinate. |
| `sheetId` | integer (int32) | The sheet this coordinate is on. |


## GridData

Data in the grid, as well as metadata about the dimensions.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `startRow` | integer (int32) | The first row this GridData refers to, zero-based. |
| `startColumn` | integer (int32) | The first column this GridData refers to, zero-based. |
| `rowData` | array (RowData) | The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column. |
| `columnMetadata` | array (DimensionProperties) | Metadata about the requested columns in the grid, starting with the column in start_column. |
| `rowMetadata` | array (DimensionProperties) | Metadata about the requested rows in the grid, starting with the row in start_row. |


## GridProperties

Properties of a grid.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `hideGridlines` | boolean | True if the grid isn't showing gridlines in the UI. |
| `frozenColumnCount` | integer (int32) | The number of columns that are frozen in the grid. |
| `rowGroupControlAfter` | boolean | True if the row grouping control toggle is shown after the group. |
| `frozenRowCount` | integer (int32) | The number of rows that are frozen in the grid. |
| `rowCount` | integer (int32) | The number of rows in the grid. |
| `columnCount` | integer (int32) | The number of columns in the grid. |
| `columnGroupControlAfter` | boolean | True if the column grouping control toggle is shown after the group. |


## GridRange

A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `endRowIndex` | integer (int32) | The end row (exclusive) of the range, or not set if unbounded. |
| `endColumnIndex` | integer (int32) | The end column (exclusive) of the range, or not set if unbounded. |
| `startColumnIndex` | integer (int32) | The start column (inclusive) of the range, or not set if unbounded. |
| `sheetId` | integer (int32) | The sheet this range is on. |
| `startRowIndex` | integer (int32) | The start row (inclusive) of the range, or not set if unbounded. |


## HistogramChartSpec

A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `bucketSize` | number (double) | By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional. |
| `series` | array (HistogramSeries) | The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series. |
| `showItemDividers` | boolean | Whether horizontal divider lines should be displayed between items in each column. |
| `legendPosition` | string (enum) | The position of the chart legend. |
| `outlierPercentile` | number (double) | The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added… |

**`legendPosition` enum values:**

- `HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED` — Default value, do not use.
- `BOTTOM_LEGEND` — The legend is rendered on the bottom of the chart.
- `LEFT_LEGEND` — The legend is rendered on the left of the chart.
- `RIGHT_LEGEND` — The legend is rendered on the right of the chart.
- `TOP_LEGEND` — The legend is rendered on the top of the chart.
- `NO_LEGEND` — No legend is rendered.
- `INSIDE_LEGEND` — The legend is rendered inside the chart area.


## HistogramRule

Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `start` | number (double) | The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional. |
| `interval` | number (double) | The size of the buckets that are created. Must be positive. |
| `end` | number (double) | The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional. |


## HistogramSeries

A histogram series containing the series color and data.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `barColor` | Color | The color of the column representing this series in each bucket. This field is optional. Deprecated: Use bar_color_style. |
| `barColorStyle` | ColorStyle | The color of the column representing this series in each bucket. This field is optional. If bar_color is also set, this field takes precedence. |
| `data` | ChartData | The data for this histogram series. |


## InterpolationPoint

A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | How the value should be interpreted. |
| `color` | Color | The color this interpolation point should use. Deprecated: Use color_style. |
| `colorStyle` | ColorStyle | The color this interpolation point should use. If color is also set, this field takes precedence. |
| `value` | string | The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX. |

**`type` enum values:**

- `INTERPOLATION_POINT_TYPE_UNSPECIFIED` — The default value, do not use.
- `MIN` — The interpolation point uses the minimum value in the cells over the range of the conditional format.
- `MAX` — The interpolation point uses the maximum value in the cells over the range of the conditional format.
- `NUMBER` — The interpolation point uses exactly the value in InterpolationPoint.value.
- `PERCENT` — The interpolation point is the given percentage over all the cells in the range of the conditional format. This is equivalent to `NUMBER` if the value was: `=(MAX(FLATTEN(range)) * (value / 100)) + (MIN(FLATTEN(range)) * (1 - (value / 100)))` (where errors in the range are ignored when flattening).
- `PERCENTILE` — The interpolation point is the given percentile over all the cells in the range of the conditional format. This is equivalent to `NUMBER` if the value was: `=PERCENTILE(FLATTEN(range), value / 100)` (where errors in the range are ignored when flattening).


## Interval

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `startTime` | string (google-datetime) | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `endTime` | string (google-datetime) | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |


## IterativeCalculationSettings

Settings to control how circular dependencies are resolved with iterative calculation.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `maxIterations` | integer (int32) | When iterative calculation is enabled, the maximum number of calculation rounds to perform. |
| `convergenceThreshold` | number (double) | When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop. |


## KeyValueFormat

Formatting options for key value.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `textFormat` | TextFormat | Text formatting options for key value. The link field is not supported. |
| `position` | TextPosition | Specifies the horizontal text positioning of key value. This field is optional. If not specified, default positioning is used. |


## LineStyle

Properties that describe the style of a line.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `width` | integer (int32) | The thickness of the line, in px. |
| `type` | string (enum) | The dash type of the line. |

**`type` enum values:**

- `LINE_DASH_TYPE_UNSPECIFIED` — Default value, do not use.
- `INVISIBLE` — No dash type, which is equivalent to a non-visible line.
- `CUSTOM` — A custom dash for a line. Modifying the exact custom dash style is currently unsupported.
- `SOLID` — A solid line.
- `DOTTED` — A dotted line.
- `MEDIUM_DASHED` — A dashed line where the dashes have "medium" length.
- `MEDIUM_DASHED_DOTTED` — A line that alternates between a "medium" dash and a dot.
- `LONG_DASHED` — A dashed line where the dashes have "long" length.
- `LONG_DASHED_DOTTED` — A line that alternates between a "long" dash and a dot.


## Link

An external or local reference.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `uri` | string | The link identifier. |


## LookerDataSourceSpec

The specification of a Looker data source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `model` | string | Name of a Looker model. |
| `explore` | string | Name of a Looker model explore. |
| `instanceUri` | string | A Looker instance URL. |


## ManualRule

Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `groups` | array (ManualRuleGroup) | The list of group names and the corresponding items from the source data that map to each group name. |


## ManualRuleGroup

A group name and a list of items from the source data that should be placed in the group with this name.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `groupName` | ExtendedValue | The group name, which must be a string. Each group in a given ManualRule must have a unique group name. |
| `items` | array (ExtendedValue) | The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own. |


## MatchedDeveloperMetadata

A developer metadata entry and the data filters specified in the original request that matched it.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataFilters` | array (DataFilter) | All filters matching the returned developer metadata. |
| `developerMetadata` | DeveloperMetadata | The developer metadata matching the specified filters. |


## MatchedValueRange

A value range that was matched by one or more data filers.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `valueRange` | ValueRange | The values matched by the DataFilter. |
| `dataFilters` | array (DataFilter) | The DataFilters from the request that matched the range of values. |


## NamedRange

A named range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range this represents. |
| `namedRangeId` | string | The ID of the named range. |
| `name` | string | The name of the named range. |


## NumberFormat

The number format of a cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | The type of the number format. When writing, this field must be set. |
| `pattern` | string | Pattern string used for formatting. If not set, a default pattern based on the spreadsheet's locale will be used if necessary for the given type. See the [Date and Number Formats guide](https://developers.google.com/workspace/sheets/api/guides/formats) for more information about the supported patte… |

**`type` enum values:**

- `NUMBER_FORMAT_TYPE_UNSPECIFIED` — The number format is not specified and is based on the contents of the cell. Do not explicitly use this.
- `TEXT` — Text formatting, e.g `1000.12`
- `NUMBER` — Number formatting, e.g, `1,000.12`
- `PERCENT` — Percent formatting, e.g `10.12%`
- `CURRENCY` — Currency formatting, e.g `$1,000.12`
- `DATE` — Date formatting, e.g `9/26/2008`
- `TIME` — Time formatting, e.g `3:59:00 PM`
- `DATE_TIME` — Date+Time formatting, e.g `9/26/08 15:59:00`
- `SCIENTIFIC` — Scientific number formatting, e.g `1.01E+03`

