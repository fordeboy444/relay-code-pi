# Google Sheets API — Core schemas B–D

48 schemas: BandedRange, BandingProperties, BaselineValueFormat, BasicChartAxis, BasicChartDomain, BasicChartSeries, BasicChartSpec, BasicFilter, BasicSeriesDataPointStyleOverride, BigQueryDataSourceSpec, BigQueryQuerySpec, BigQueryTableSpec…

## Schemas in this file

- [`BandedRange`](#bandedrange)
- [`BandingProperties`](#bandingproperties)
- [`BaselineValueFormat`](#baselinevalueformat)
- [`BasicChartAxis`](#basicchartaxis)
- [`BasicChartDomain`](#basicchartdomain)
- [`BasicChartSeries`](#basicchartseries)
- [`BasicChartSpec`](#basicchartspec)
- [`BasicFilter`](#basicfilter)
- [`BasicSeriesDataPointStyleOverride`](#basicseriesdatapointstyleoverride)
- [`BigQueryDataSourceSpec`](#bigquerydatasourcespec)
- [`BigQueryQuerySpec`](#bigqueryqueryspec)
- [`BigQueryTableSpec`](#bigquerytablespec)
- [`BooleanCondition`](#booleancondition)
- [`BooleanRule`](#booleanrule)
- [`Border`](#border)
- [`Borders`](#borders)
- [`BubbleChartSpec`](#bubblechartspec)
- [`CancelDataSourceRefreshStatus`](#canceldatasourcerefreshstatus)
- [`CandlestickChartSpec`](#candlestickchartspec)
- [`CandlestickData`](#candlestickdata)
- [`CandlestickDomain`](#candlestickdomain)
- [`CandlestickSeries`](#candlestickseries)
- [`CellData`](#celldata)
- [`CellFormat`](#cellformat)
- [`ChartAxisViewWindowOptions`](#chartaxisviewwindowoptions)
- [`ChartCustomNumberFormatOptions`](#chartcustomnumberformatoptions)
- [`ChartData`](#chartdata)
- [`ChartDateTimeRule`](#chartdatetimerule)
- [`ChartGroupRule`](#chartgrouprule)
- [`ChartHistogramRule`](#charthistogramrule)
- [`ChartSourceRange`](#chartsourcerange)
- [`ChartSpec`](#chartspec)
- [`Chip`](#chip)
- [`ChipRun`](#chiprun)
- [`Color`](#color)
- [`ColorStyle`](#colorstyle)
- [`ConditionValue`](#conditionvalue)
- [`ConditionalFormatRule`](#conditionalformatrule)
- [`DataExecutionStatus`](#dataexecutionstatus)
- [`DataFilter`](#datafilter)
- [`DataFilterValueRange`](#datafiltervaluerange)
- [`DataLabel`](#datalabel)
- [`DataSource`](#datasource)
- [`DataSourceChartProperties`](#datasourcechartproperties)
- [`DataSourceColumn`](#datasourcecolumn)
- [`DataSourceColumnReference`](#datasourcecolumnreference)
- [`DataSourceFormula`](#datasourceformula)
- [`DataSourceObjectReference`](#datasourceobjectreference)

## BandedRange

A banded (alternating colors) range in a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range over which these properties are applied. |
| `rowProperties` | BandingProperties | Properties for row bands. These properties are applied on a row-by-row basis throughout all the rows in the range. At least one of row_properties or column_properties must be specified. |
| `columnProperties` | BandingProperties | Properties for column bands. These properties are applied on a column- by-column basis throughout all the columns in the range. At least one of row_properties or column_properties must be specified. |
| `bandedRangeId` | integer (int32) | The ID of the banded range. If unset, refer to banded_range_reference. |
| `bandedRangeReference` | string | Output only. The reference of the banded range, used to identify the ID that is not supported by the banded_range_id. |


## BandingProperties

Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `secondBandColor` | Color | The second color that is alternating. (Required) Deprecated: Use second_band_color_style. |
| `headerColor` | Color | The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the co… |
| `secondBandColorStyle` | ColorStyle | The second color that is alternating. (Required) If second_band_color is also set, this field takes precedence. |
| `footerColorStyle` | ColorStyle | The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. If footer_color is also set, this field takes precedence. |
| `headerColorStyle` | ColorStyle | The color of the first row or column. If this field is set, the first row or column is filled with this color and the colors alternate between first_band_color and second_band_color starting from the second row or column. Otherwise, the first row or column is filled with first_band_color and the co… |
| `firstBandColor` | Color | The first color that is alternating. (Required) Deprecated: Use first_band_color_style. |
| `firstBandColorStyle` | ColorStyle | The first color that is alternating. (Required) If first_band_color is also set, this field takes precedence. |
| `footerColor` | Color | The color of the last row or column. If this field is not set, the last row or column is filled with either first_band_color or second_band_color, depending on the color of the previous row or column. Deprecated: Use footer_color_style. |


## BaselineValueFormat

Formatting options for baseline value.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `position` | TextPosition | Specifies the horizontal text positioning of baseline value. This field is optional. If not specified, default positioning is used. |
| `positiveColor` | Color | Color to be used, in case baseline value represents a positive change for key value. This field is optional. Deprecated: Use positive_color_style. |
| `positiveColorStyle` | ColorStyle | Color to be used, in case baseline value represents a positive change for key value. This field is optional. If positive_color is also set, this field takes precedence. |
| `negativeColorStyle` | ColorStyle | Color to be used, in case baseline value represents a negative change for key value. This field is optional. If negative_color is also set, this field takes precedence. |
| `comparisonType` | string (enum) | The comparison type of key value with baseline value. |
| `textFormat` | TextFormat | Text formatting options for baseline value. The link field is not supported. |
| `description` | string | Description which is appended after the baseline value. This field is optional. |
| `negativeColor` | Color | Color to be used, in case baseline value represents a negative change for key value. This field is optional. Deprecated: Use negative_color_style. |

**`comparisonType` enum values:**

- `COMPARISON_TYPE_UNDEFINED` — Default value, do not use.
- `ABSOLUTE_DIFFERENCE` — Use absolute difference between key and baseline value.
- `PERCENTAGE_DIFFERENCE` — Use percentage difference between key and baseline value.


## BasicChartAxis

An axis of the chart. A chart may not have more than one axis per axis position.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `position` | string (enum) | The position of this axis. |
| `titleTextPosition` | TextPosition | The axis title text position. |
| `viewWindowOptions` | ChartAxisViewWindowOptions | The view window options for this axis. |
| `title` | string | The title of this axis. If set, this overrides any title inferred from headers of the data. |
| `format` | TextFormat | The format of the title. Only valid if the axis is not associated with the domain. The link field is not supported. |

**`position` enum values:**

- `BASIC_CHART_AXIS_POSITION_UNSPECIFIED` — Default value, do not use.
- `BOTTOM_AXIS` — The axis rendered at the bottom of a chart. For most charts, this is the standard major axis. For bar charts, this is a minor axis.
- `LEFT_AXIS` — The axis rendered at the left of a chart. For most charts, this is a minor axis. For bar charts, this is the standard major axis.
- `RIGHT_AXIS` — The axis rendered at the right of a chart. For most charts, this is a minor axis. For bar charts, this is an unusual major axis.


## BasicChartDomain

The domain of a chart. For example, if charting stock prices over time, this would be the date.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `domain` | ChartData | The data of the domain. For example, if charting stock prices over time, this is the data representing the dates. |
| `reversed` | boolean | True to reverse the order of the domain values (horizontal axis). |


## BasicChartSeries

A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported. |
| `lineStyle` | LineStyle | The line style of this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA or LINE. |
| `dataLabel` | DataLabel | Information about the data labels for this series. |
| `series` | ChartData | The data being visualized in this chart series. |
| `colorStyle` | ColorStyle | The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. If color is also set, this field takes precedence. |
| `pointStyle` | PointStyle | The style for points associated with this series. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, a default point style is used. |
| `targetAxis` | string (enum) | The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to sp… |
| `color` | Color | The color for elements (such as bars, lines, and points) associated with this series. If empty, a default color is used. Deprecated: Use color_style. |
| `styleOverrides` | array (BasicSeriesDataPointStyleOverride) | Style override settings for series data points. |

**`type` enum values:**

- `BASIC_CHART_TYPE_UNSPECIFIED` — Default value, do not use.
- `BAR` — A bar chart.
- `LINE` — A line chart.
- `AREA` — An area chart.
- `COLUMN` — A column chart.
- `SCATTER` — A scatter chart.
- `COMBO` — A combo chart.
- `STEPPED_AREA` — A stepped area chart.

**`targetAxis` enum values:**

- `BASIC_CHART_AXIS_POSITION_UNSPECIFIED` — Default value, do not use.
- `BOTTOM_AXIS` — The axis rendered at the bottom of a chart. For most charts, this is the standard major axis. For bar charts, this is a minor axis.
- `LEFT_AXIS` — The axis rendered at the left of a chart. For most charts, this is a minor axis. For bar charts, this is the standard major axis.
- `RIGHT_AXIS` — The axis rendered at the right of a chart. For most charts, this is a minor axis. For bar charts, this is an unusual major axis.


## BasicChartSpec

The specification for a basic chart. See BasicChartType for the list of charts this supports.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `series` | array (BasicChartSeries) | The data this chart is visualizing. |
| `headerCount` | integer (int32) | The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.) |
| `stackedType` | string (enum) | The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts. |
| `domains` | array (BasicChartDomain) | The domain of data this is charting. Only a single domain is supported. |
| `compareMode` | string (enum) | The behavior of tooltips and data highlighting when hovering on data and chart area. |
| `lineSmoothing` | boolean | Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts. |
| `chartType` | string (enum) | The type of the chart. |
| `interpolateNulls` | boolean | If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts. |
| `totalDataLabel` | DataLabel | Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. These data labels can only be set when chart_type is one of AREA, BAR, COLUMN, COMBO or STEPPED_AREA and stacked_type is either STACKED or PERCEN… |
| `legendPosition` | string (enum) | The position of the chart legend. |
| `axis` | array (BasicChartAxis) | The axis on the chart. |
| `threeDimensional` | boolean | True to make the chart 3D. Applies to Bar and Column charts. |

**`stackedType` enum values:**

- `BASIC_CHART_STACKED_TYPE_UNSPECIFIED` — Default value, do not use.
- `NOT_STACKED` — Series are not stacked.
- `STACKED` — Series values are stacked, each value is rendered vertically beginning from the top of the value below it.
- `PERCENT_STACKED` — Vertical stacks are stretched to reach the top of the chart, with values laid out as percentages of each other.

**`compareMode` enum values:**

- `BASIC_CHART_COMPARE_MODE_UNSPECIFIED` — Default value, do not use.
- `DATUM` — Only the focused data element is highlighted and shown in the tooltip.
- `CATEGORY` — All data elements with the same category (e.g., domain value) are highlighted and shown in the tooltip.

**`chartType` enum values:**

- `BASIC_CHART_TYPE_UNSPECIFIED` — Default value, do not use.
- `BAR` — A bar chart.
- `LINE` — A line chart.
- `AREA` — An area chart.
- `COLUMN` — A column chart.
- `SCATTER` — A scatter chart.
- `COMBO` — A combo chart.
- `STEPPED_AREA` — A stepped area chart.

**`legendPosition` enum values:**

- `BASIC_CHART_LEGEND_POSITION_UNSPECIFIED` — Default value, do not use.
- `BOTTOM_LEGEND` — The legend is rendered on the bottom of the chart.
- `LEFT_LEGEND` — The legend is rendered on the left of the chart.
- `RIGHT_LEGEND` — The legend is rendered on the right of the chart.
- `TOP_LEGEND` — The legend is rendered on the top of the chart.
- `NO_LEGEND` — No legend is rendered.


## BasicFilter

The default filter associated with a sheet. For more information, see [Manage data visibility with filters](https://developers.google.com/workspace/sheets/api/guides/filters).

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The range the filter covers. |
| `tableId` | string | The table this filter is backed by, if any. When writing, only one of range or table_id may be set. |
| `criteria` | map (string -> FilterCriteria) | The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. |
| `filterSpecs` | array (FilterSpec) | The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. |
| `sortSpecs` | array (SortSpec) | The sort order per column. Later specifications are used when values are equal in the earlier specifications. |


## BasicSeriesDataPointStyleOverride

Style override settings for a single series data point.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `index` | integer (int32) | The zero-based index of the series data point. |
| `color` | Color | Color of the series data point. If empty, the series default is used. Deprecated: Use color_style. |
| `colorStyle` | ColorStyle | Color of the series data point. If empty, the series default is used. If color is also set, this field takes precedence. |
| `pointStyle` | PointStyle | Point style of the series data point. Valid only if the chartType is AREA, LINE, or SCATTER. COMBO charts are also supported if the series chart type is AREA, LINE, or SCATTER. If empty, the series default is used. |


## BigQueryDataSourceSpec

The specification of a BigQuery data source that's connected to a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `projectId` | string | The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged. |
| `querySpec` | BigQueryQuerySpec | A BigQueryQuerySpec. |
| `tableSpec` | BigQueryTableSpec | A BigQueryTableSpec. |


## BigQueryQuerySpec

Specifies a custom BigQuery query.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `rawQuery` | string | The raw query string. |


## BigQueryTableSpec

Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) are allowed.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `tableProjectId` | string | The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed. |
| `tableId` | string | The BigQuery table id. |
| `datasetId` | string | The BigQuery dataset id. |


## BooleanCondition

A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | The type of condition. |
| `values` | array (ConditionValue) | The values of the condition. The number of supported values depends on the condition type. Some support zero values, others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values. |

**`type` enum values:**

- `CONDITION_TYPE_UNSPECIFIED` — The default value, do not use.
- `NUMBER_GREATER` — The cell's value must be greater than the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue.
- `NUMBER_GREATER_THAN_EQ` — The cell's value must be greater than or equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue.
- `NUMBER_LESS` — The cell's value must be less than the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue.
- `NUMBER_LESS_THAN_EQ` — The cell's value must be less than or equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue.
- `NUMBER_EQ` — The cell's value must be equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue for data validation, conditional formatting, and filters on non-data source objects and at least one ConditionValue for filters on data source objects.
- `NUMBER_NOT_EQ` — The cell's value must be not equal to the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue for data validation, conditional formatting, and filters on non-data source objects and at least one ConditionValue for filters on data source objects.
- `NUMBER_BETWEEN` — The cell's value must be between the two condition values. Supported by data validation, conditional formatting and filters. Requires exactly two ConditionValues.
- `NUMBER_NOT_BETWEEN` — The cell's value must not be between the two condition values. Supported by data validation, conditional formatting and filters. Requires exactly two ConditionValues.
- `TEXT_CONTAINS` — The cell's value must contain the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue.
- `TEXT_NOT_CONTAINS` — The cell's value must not contain the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue.
- `TEXT_STARTS_WITH` — The cell's value must start with the condition's value. Supported by conditional formatting and filters. Requires a single ConditionValue.
- `TEXT_ENDS_WITH` — The cell's value must end with the condition's value. Supported by conditional formatting and filters. Requires a single ConditionValue.
- `TEXT_EQ` — The cell's value must be exactly the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue for data validation, conditional formatting, and filters on non-data source objects and at least one ConditionValue for filters on data source objects.
- `TEXT_IS_EMAIL` — The cell's value must be a valid email address. Supported by data validation. Requires no ConditionValues.
- `TEXT_IS_URL` — The cell's value must be a valid URL. Supported by data validation. Requires no ConditionValues.
- `DATE_EQ` — The cell's value must be the same date as the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue for data validation, conditional formatting, and filters on non-data source objects and at least one ConditionValue for filters on data source objects.
- `DATE_BEFORE` — The cell's value must be before the date of the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue that may be a relative date.
- `DATE_AFTER` — The cell's value must be after the date of the condition's value. Supported by data validation, conditional formatting and filters. Requires a single ConditionValue that may be a relative date.
- `DATE_ON_OR_BEFORE` — The cell's value must be on or before the date of the condition's value. Supported by data validation. Requires a single ConditionValue that may be a relative date.
- `DATE_ON_OR_AFTER` — The cell's value must be on or after the date of the condition's value. Supported by data validation. Requires a single ConditionValue that may be a relative date.
- `DATE_BETWEEN` — The cell's value must be between the dates of the two condition values. Supported by data validation. Requires exactly two ConditionValues.
- `DATE_NOT_BETWEEN` — The cell's value must be outside the dates of the two condition values. Supported by data validation. Requires exactly two ConditionValues.
- `DATE_IS_VALID` — The cell's value must be a date. Supported by data validation. Requires no ConditionValues.
- `ONE_OF_RANGE` — The cell's value must be listed in the grid in condition value's range. Supported by data validation. Requires a single ConditionValue, and the value must be a valid range in A1 notation.
- `ONE_OF_LIST` — The cell's value must be in the list of condition values. Supported by data validation. Supports any number of condition values, one per item in the list. Formulas are not supported in the values.
- `BLANK` — The cell's value must be empty. Supported by conditional formatting and filters. Requires no ConditionValues.
- `NOT_BLANK` — The cell's value must not be empty. Supported by conditional formatting and filters. Requires no ConditionValues.
- `CUSTOM_FORMULA` — The condition's formula must evaluate to true. Supported by data validation, conditional formatting and filters. Not supported by data source sheet filters. Requires a single ConditionValue.
- `BOOLEAN` — The cell's value must be TRUE/FALSE or in the list of condition values. Supported by data validation. Renders as a cell checkbox. Supports zero, one or two ConditionValues. No values indicates the cell must be TRUE or FALSE, where TRUE renders as checked and FALSE renders as unchecked. One value indicates the cell will render as checked when it contains that value and unchecked when it is blank. Two values indicate that the cell will render as checked when it contains the first value and unchecked when it contains the second value. For example, ["Yes","No"] indicates that the cell will render a checked box when it has the value "Yes" and an unchecked box when it has the value "No".
- `TEXT_NOT_EQ` — The cell's value must be exactly not the condition's value. Supported by filters on data source objects. Requires at least one ConditionValue.
- `DATE_NOT_EQ` — The cell's value must be exactly not the condition's value. Supported by filters on data source objects. Requires at least one ConditionValue.
- `FILTER_EXPRESSION` — The cell's value must follow the pattern specified. Requires a single ConditionValue.


## BooleanRule

A rule that may or may not match, depending on the condition.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `format` | CellFormat | The format to apply. Conditional formatting can only apply a subset of formatting: bold, italic, strikethrough, foreground color and, background color. |
| `condition` | BooleanCondition | The condition of the rule. If the condition evaluates to true, the format is applied. |


## Border

A border along a cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `style` | string (enum) | The style of the border. |
| `width` | integer (int32) | The width of the border, in pixels. Deprecated; the width is determined by the "style" field. |
| `color` | Color | The color of the border. Deprecated: Use color_style. |
| `colorStyle` | ColorStyle | The color of the border. If color is also set, this field takes precedence. |

**`style` enum values:**

- `STYLE_UNSPECIFIED` — The style is not specified. Do not use this.
- `DOTTED` — The border is dotted.
- `DASHED` — The border is dashed.
- `SOLID` — The border is a thin solid line.
- `SOLID_MEDIUM` — The border is a medium solid line.
- `SOLID_THICK` — The border is a thick solid line.
- `NONE` — No border. Used only when updating a border in order to erase it.
- `DOUBLE` — The border is two solid lines.


## Borders

The borders of the cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `left` | Border | The left border of the cell. |
| `top` | Border | The top border of the cell. |
| `right` | Border | The right border of the cell. |
| `bottom` | Border | The bottom border of the cell. |


## BubbleChartSpec

A bubble chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `bubbleBorderColorStyle` | ColorStyle | The bubble border color. If bubble_border_color is also set, this field takes precedence. |
| `bubbleSizes` | ChartData | The data containing the bubble sizes. Bubble sizes are used to draw the bubbles at different sizes relative to each other. If specified, group_ids must also be specified. This field is optional. |
| `domain` | ChartData | The data containing the bubble x-values. These values locate the bubbles in the chart horizontally. |
| `bubbleOpacity` | number (float) | The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque. |
| `groupIds` | ChartData | The data containing the bubble group IDs. All bubbles with the same group ID are drawn in the same color. If bubble_sizes is specified then this field must also be specified but may contain blank values. This field is optional. |
| `legendPosition` | string (enum) | Where the legend of the chart should be drawn. |
| `bubbleLabels` | ChartData | The data containing the bubble labels. These do not need to be unique. |
| `bubbleBorderColor` | Color | The bubble border color. Deprecated: Use bubble_border_color_style. |
| `bubbleMaxRadiusSize` | integer (int32) | The max radius size of the bubbles, in pixels. If specified, the field must be a positive value. |
| `bubbleTextStyle` | TextFormat | The format of the text inside the bubbles. Strikethrough, underline, and link are not supported. |
| `bubbleMinRadiusSize` | integer (int32) | The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value. |
| `series` | ChartData | The data containing the bubble y-values. These values locate the bubbles in the chart vertically. |

**`legendPosition` enum values:**

- `BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED` — Default value, do not use.
- `BOTTOM_LEGEND` — The legend is rendered on the bottom of the chart.
- `LEFT_LEGEND` — The legend is rendered on the left of the chart.
- `RIGHT_LEGEND` — The legend is rendered on the right of the chart.
- `TOP_LEGEND` — The legend is rendered on the top of the chart.
- `NO_LEGEND` — No legend is rendered.
- `INSIDE_LEGEND` — The legend is rendered inside the chart area.


## CancelDataSourceRefreshStatus

The status of cancelling a single data source object refresh.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `reference` | DataSourceObjectReference | Reference to the data source object whose refresh is being cancelled. |
| `refreshCancellationStatus` | RefreshCancellationStatus | The cancellation status. |


## CandlestickChartSpec

A candlestick chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `domain` | CandlestickDomain | The domain data (horizontal axis) for the candlestick chart. String data will be treated as discrete labels, other data will be treated as continuous values. |
| `data` | array (CandlestickData) | The Candlestick chart data. Only one CandlestickData is supported. |


## CandlestickData

The Candlestick chart data, each containing the low, open, close, and high values for a series.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `closeSeries` | CandlestickSeries | The range data (vertical axis) for the close/final value for each candle. This is the top of the candle body. If greater than the open value the candle will be filled. Otherwise the candle will be hollow. |
| `highSeries` | CandlestickSeries | The range data (vertical axis) for the high/maximum value for each candle. This is the top of the candle's center line. |
| `lowSeries` | CandlestickSeries | The range data (vertical axis) for the low/minimum value for each candle. This is the bottom of the candle's center line. |
| `openSeries` | CandlestickSeries | The range data (vertical axis) for the open/initial value for each candle. This is the bottom of the candle body. If less than the close value the candle will be filled. Otherwise the candle will be hollow. |


## CandlestickDomain

The domain of a CandlestickChart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `data` | ChartData | The data of the CandlestickDomain. |
| `reversed` | boolean | True to reverse the order of the domain values (horizontal axis). |


## CandlestickSeries

The series of a CandlestickData.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `data` | ChartData | The data of the CandlestickSeries. |


## CellData

Data about a specific cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `hyperlink` | string | A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alte… |
| `dataSourceFormula` | DataSourceFormula | Output only. Information about a data source formula on the cell. The field is set if user_entered_value is a formula referencing some DATA_SOURCE sheet, e.g. `=SUM(DataSheet!Column)`. |
| `effectiveFormat` | CellFormat | The effective format being used by the cell. This includes the results of applying any conditional formatting and, if the cell contains a formula, the computed number format. If the effective format is the default format, effective format will not be written. This field is read-only. |
| `textFormatRuns` | array (TextFormatRun) | Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When… |
| `userEnteredValue` | ExtendedValue | The value the user entered in the cell. e.g., `1234`, `'Hello'`, or `=NOW()` Note: Dates, Times and DateTimes are represented as doubles in serial number format. |
| `formattedValue` | string | The formatted value of the cell. This is the value as it's shown to the user. This field is read-only. |
| `userEnteredFormat` | CellFormat | The format the user entered for the cell. When writing, the new format will be merged with the existing format. |
| `chipRuns` | array (ChipRun) | Optional. Runs of chips applied to subsections of the cell. Properties of a run start at a specific index in the text and continue until the next run. When reading, all chipped and non-chipped runs are included. Non-chipped runs will have an empty Chip. When writing, only runs with chips are includ… |
| `effectiveValue` | ExtendedValue | The effective value of the cell. For cells with formulas, this is the calculated value. For cells with literals, this is the same as the user_entered_value. This field is read-only. |
| `dataSourceTable` | DataSourceTable | A data source table anchored at this cell. The size of data source table itself is computed dynamically based on its configuration. Only the first cell of the data source table contains the data source table definition. The other cells will contain the display values of the data source table result… |
| `pivotTable` | PivotTable | A pivot table anchored at this cell. The size of pivot table itself is computed dynamically based on its data, grouping, filters, values, etc. Only the top-left cell of the pivot table contains the pivot table definition. The other cells will contain the calculated values of the results of the pivo… |
| `note` | string | Any note on the cell. |
| `dataValidation` | DataValidationRule | A data validation rule on the cell, if any. When writing, the new data validation rule will overwrite any prior rule. |


## CellFormat

The format of a cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `backgroundColor` | Color | The background color of the cell. Deprecated: Use background_color_style. |
| `hyperlinkDisplayType` | string (enum) | If one exists, how a hyperlink should be displayed in the cell. |
| `borders` | Borders | The borders of the cell. |
| `wrapStrategy` | string (enum) | The wrap strategy for the value in the cell. |
| `textFormat` | TextFormat | The format of the text in the cell (unless overridden by a format run). Setting a cell-level link here clears the cell's existing links. Setting the link field in a TextFormatRun takes precedence over the cell-level link. |
| `backgroundColorStyle` | ColorStyle | The background color of the cell. If background_color is also set, this field takes precedence. |
| `padding` | Padding | The padding of the cell. |
| `textRotation` | TextRotation | The rotation applied to text in the cell. |
| `horizontalAlignment` | string (enum) | The horizontal alignment of the value in the cell. |
| `verticalAlignment` | string (enum) | The vertical alignment of the value in the cell. |
| `textDirection` | string (enum) | The direction of the text in the cell. |
| `numberFormat` | NumberFormat | A format describing how number values should be represented to the user. |

**`hyperlinkDisplayType` enum values:**

- `HYPERLINK_DISPLAY_TYPE_UNSPECIFIED` — The default value: the hyperlink is rendered. Do not use this.
- `LINKED` — A hyperlink should be explicitly rendered.
- `PLAIN_TEXT` — A hyperlink should not be rendered.

**`wrapStrategy` enum values:**

- `WRAP_STRATEGY_UNSPECIFIED` — The default value, do not use.
- `OVERFLOW_CELL` — Lines that are longer than the cell width will be written in the next cell over, so long as that cell is empty. If the next cell over is non-empty, this behaves the same as `CLIP`. The text will never wrap to the next line unless the user manually inserts a new line. Example: | First sentence. | | Manual newline that is very long. <- Text continues into next cell | Next newline. |
- `LEGACY_WRAP` — This wrap strategy represents the old Google Sheets wrap strategy where words that are longer than a line are clipped rather than broken. This strategy is not supported on all platforms and is being phased out. Example: | Cell has a | | loooooooooo| <- Word is clipped. | word. |
- `CLIP` — Lines that are longer than the cell width will be clipped. The text will never wrap to the next line unless the user manually inserts a new line. Example: | First sentence. | | Manual newline t| <- Text is clipped | Next newline. |
- `WRAP` — Words that are longer than a line are wrapped at the character level rather than clipped. Example: | Cell has a | | loooooooooo| <- Word is broken. | ong word. |

**`horizontalAlignment` enum values:**

- `HORIZONTAL_ALIGN_UNSPECIFIED` — The horizontal alignment is not specified. Do not use this.
- `LEFT` — The text is explicitly aligned to the left of the cell.
- `CENTER` — The text is explicitly aligned to the center of the cell.
- `RIGHT` — The text is explicitly aligned to the right of the cell.

**`verticalAlignment` enum values:**

- `VERTICAL_ALIGN_UNSPECIFIED` — The vertical alignment is not specified. Do not use this.
- `TOP` — The text is explicitly aligned to the top of the cell.
- `MIDDLE` — The text is explicitly aligned to the middle of the cell.
- `BOTTOM` — The text is explicitly aligned to the bottom of the cell.

**`textDirection` enum values:**

- `TEXT_DIRECTION_UNSPECIFIED` — The text direction is not specified. Do not use this.
- `LEFT_TO_RIGHT` — The text direction of left-to-right was set by the user.
- `RIGHT_TO_LEFT` — The text direction of right-to-left was set by the user.


## ChartAxisViewWindowOptions

The options that define a "view window" for a chart (such as the visible values in an axis).

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `viewWindowMax` | number (double) | The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data. |
| `viewWindowMode` | string (enum) | The view window's mode. |
| `viewWindowMin` | number (double) | The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data. |

**`viewWindowMode` enum values:**

- `DEFAULT_VIEW_WINDOW_MODE` — The default view window mode used in the Sheets editor for this chart type. In most cases, if set, the default mode is equivalent to `PRETTY`.
- `VIEW_WINDOW_MODE_UNSUPPORTED` — Do not use. Represents that the currently set mode is not supported by the API.
- `EXPLICIT` — Follows the min and max exactly if specified. If a value is unspecified, it will fall back to the `PRETTY` value.
- `PRETTY` — Chooses a min and max that make the chart look good. Both min and max are ignored in this mode.


## ChartCustomNumberFormatOptions

Custom number formatting options for chart attributes.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `suffix` | string | Custom suffix to be appended to the chart attribute. This field is optional. |
| `prefix` | string | Custom prefix to be prepended to the chart attribute. This field is optional. |


## ChartData

The data included in a domain or series.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sourceRange` | ChartSourceRange | The source ranges of the data. |
| `groupRule` | ChartGroupRule | The rule to group the data by if the ChartData backs the domain of a data source chart. Only supported for data source charts. |
| `aggregateType` | string (enum) | The aggregation type for the series of a data source chart. Only supported for data source charts. |
| `columnReference` | DataSourceColumnReference | The reference to the data source column that the data reads from. |

**`aggregateType` enum values:**

- `CHART_AGGREGATE_TYPE_UNSPECIFIED` — Default value, do not use.
- `AVERAGE` — Average aggregate function.
- `COUNT` — Count aggregate function.
- `MAX` — Maximum aggregate function.
- `MEDIAN` — Median aggregate function.
- `MIN` — Minimum aggregate function.
- `SUM` — Sum aggregate function.


## ChartDateTimeRule

Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | The type of date-time grouping to apply. |

**`type` enum values:**

- `CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED` — The default type, do not use.
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


## ChartGroupRule

An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dateTimeRule` | ChartDateTimeRule | A ChartDateTimeRule. |
| `histogramRule` | ChartHistogramRule | A ChartHistogramRule |


## ChartHistogramRule

Allows you to organize numeric values in a source data column into buckets of constant size.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `minValue` | number (double) | The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value. |
| `maxValue` | number (double) | The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value. |
| `intervalSize` | number (double) | The size of the buckets that are created. Must be positive. |


## ChartSourceRange

Source ranges for a chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sources` | array (GridRange) | The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source ranges. If using more than one source range, then the source r… |


## ChartSpec

The specifications of a chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `hiddenDimensionStrategy` | string (enum) | Determines how the charts will use hidden rows or columns. |
| `waterfallChart` | WaterfallChartSpec | A waterfall chart specification. |
| `altText` | string | The alternative text that describes the chart. This is often used for accessibility. |
| `sortSpecs` | array (SortSpec) | The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts. |
| `pieChart` | PieChartSpec | A pie chart specification. |
| `maximized` | boolean | True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.) |
| `histogramChart` | HistogramChartSpec | A histogram chart specification. |
| `subtitleTextPosition` | TextPosition | The subtitle text position. This field is optional. |
| `subtitle` | string | The subtitle of the chart. |
| `title` | string | The title of the chart. |
| `candlestickChart` | CandlestickChartSpec | A candlestick chart specification. |
| `backgroundColorStyle` | ColorStyle | The background color of the entire chart. Not applicable to Org charts. If background_color is also set, this field takes precedence. |
| `fontName` | string | The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name. |
| `bubbleChart` | BubbleChartSpec | A bubble chart specification. |
| `treemapChart` | TreemapChartSpec | A treemap chart specification. |
| `dataSourceChartProperties` | DataSourceChartProperties | If present, the field contains data source chart specific properties. |
| `titleTextFormat` | TextFormat | The title text format. Strikethrough, underline, and link are not supported. |
| `scorecardChart` | ScorecardChartSpec | A scorecard chart specification. |
| `backgroundColor` | Color | The background color of the entire chart. Not applicable to Org charts. Deprecated: Use background_color_style. |
| `orgChart` | OrgChartSpec | An org chart specification. |
| `filterSpecs` | array (FilterSpec) | The filters applied to the source data of the chart. Only supported for data source charts. |
| `titleTextPosition` | TextPosition | The title text position. This field is optional. |
| `basicChart` | BasicChartSpec | A basic chart specification, can be one of many kinds of charts. See BasicChartType for the list of all charts this supports. |
| `subtitleTextFormat` | TextFormat | The subtitle text format. Strikethrough, underline, and link are not supported. |

**`hiddenDimensionStrategy` enum values:**

- `CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED` — Default value, do not use.
- `SKIP_HIDDEN_ROWS_AND_COLUMNS` — Charts will skip hidden rows and columns.
- `SKIP_HIDDEN_ROWS` — Charts will skip hidden rows only.
- `SKIP_HIDDEN_COLUMNS` — Charts will skip hidden columns only.
- `SHOW_ALL` — Charts will not skip any hidden rows or columns.


## Chip

The Smart Chip.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `personProperties` | PersonProperties | Properties of a linked person. |
| `richLinkProperties` | RichLinkProperties | Properties of a rich link. |


## ChipRun

The run of a chip. The chip continues until the start index of the next run.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `startIndex` | integer (int32) | Required. The zero-based character index where this run starts, in UTF-16 code units. |
| `chip` | Chip | Optional. The chip of this run. |


## Color

Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ...

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `red` | number (float) | The amount of red in the color as a value in the interval [0, 1]. |
| `green` | number (float) | The amount of green in the color as a value in the interval [0, 1]. |
| `blue` | number (float) | The amount of blue in the color as a value in the interval [0, 1]. |
| `alpha` | number (float) | The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a c… |


## ColorStyle

A color value.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `rgbColor` | Color | RGB color. The [`alpha`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#Color.FIELDS.alpha) value in the [`Color`](https://developers.google.com/workspace/sheets/api/reference/rest/v4/spreadsheets/other#color) object isn't generally supported. |
| `themeColor` | string (enum) | Theme color. |

**`themeColor` enum values:**

- `THEME_COLOR_TYPE_UNSPECIFIED` — Unspecified theme color
- `TEXT` — Represents the primary text color
- `BACKGROUND` — Represents the primary background color
- `ACCENT1` — Represents the first accent color
- `ACCENT2` — Represents the second accent color
- `ACCENT3` — Represents the third accent color
- `ACCENT4` — Represents the fourth accent color
- `ACCENT5` — Represents the fifth accent color
- `ACCENT6` — Represents the sixth accent color
- `LINK` — Represents the color to use for hyperlinks


## ConditionValue

The value of the condition.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `userEnteredValue` | string | A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an `=` or a '+'). |
| `relativeDate` | string (enum) | A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters. |

**`relativeDate` enum values:**

- `RELATIVE_DATE_UNSPECIFIED` — Default value, do not use.
- `PAST_YEAR` — The value is one year before today.
- `PAST_MONTH` — The value is one month before today.
- `PAST_WEEK` — The value is one week before today.
- `YESTERDAY` — The value is yesterday.
- `TODAY` — The value is today.
- `TOMORROW` — The value is tomorrow.


## ConditionalFormatRule

A rule describing a conditional format.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `gradientRule` | GradientRule | The formatting will vary based on the gradients in the rule. |
| `ranges` | array (GridRange) | The ranges that are formatted if the condition is true. All the ranges must be on the same grid. |
| `booleanRule` | BooleanRule | The formatting is either "on" or "off" according to the rule. |


## DataExecutionStatus

The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `errorCode` | string (enum) | The error code. |
| `lastRefreshTime` | string (google-datetime) | Gets the time the data last successfully refreshed. |
| `errorMessage` | string | The error message, which may be empty. |
| `state` | string (enum) | The state of the data execution. |

**`errorCode` enum values:**

- `DATA_EXECUTION_ERROR_CODE_UNSPECIFIED` — Default value, do not use.
- `TIMED_OUT` — The data execution timed out.
- `TOO_MANY_ROWS` — The data execution returns more rows than the limit.
- `TOO_MANY_COLUMNS` — The data execution returns more columns than the limit.
- `TOO_MANY_CELLS` — The data execution returns more cells than the limit.
- `ENGINE` — Error is received from the backend data execution engine (e.g. BigQuery). Check error_message for details.
- `PARAMETER_INVALID` — One or some of the provided data source parameters are invalid.
- `UNSUPPORTED_DATA_TYPE` — The data execution returns an unsupported data type.
- `DUPLICATE_COLUMN_NAMES` — The data execution returns duplicate column names or aliases.
- `INTERRUPTED` — The data execution is interrupted. Please refresh later.
- `CONCURRENT_QUERY` — The data execution is currently in progress, can not be refreshed until it completes.
- `OTHER` — Other errors.
- `TOO_MANY_CHARS_PER_CELL` — The data execution returns values that exceed the maximum characters allowed in a single cell.
- `DATA_NOT_FOUND` — The database referenced by the data source is not found. */
- `PERMISSION_DENIED` — The user does not have access to the database referenced by the data source.
- `MISSING_COLUMN_ALIAS` — The data execution returns columns with missing aliases.
- `OBJECT_NOT_FOUND` — The data source object does not exist.
- `OBJECT_IN_ERROR_STATE` — The data source object is currently in error state. To force refresh, set force in RefreshDataSourceRequest.
- `OBJECT_SPEC_INVALID` — The data source object specification is invalid.
- `DATA_EXECUTION_CANCELLED` — The data execution has been cancelled.

**`state` enum values:**

- `DATA_EXECUTION_STATE_UNSPECIFIED` — Default value, do not use.
- `NOT_STARTED` — The data execution has not started.
- `RUNNING` — The data execution has started and is running.
- `CANCELLING` — The data execution is currently being cancelled.
- `SUCCEEDED` — The data execution has completed successfully.
- `FAILED` — The data execution has completed with errors.


## DataFilter

Filter that describes what data should be selected or returned from a request. For more information, see [Read, write, and search metadata](https://developers.google.com/workspace/sheets/api/guides/metadata).

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `developerMetadataLookup` | DeveloperMetadataLookup | Selects data associated with the developer metadata matching the criteria described by this DeveloperMetadataLookup. |
| `gridRange` | GridRange | Selects data that matches the range described by the GridRange. |
| `a1Range` | string | Selects data that matches the specified A1 range. |


## DataFilterValueRange

A range of values whose location is specified by a DataFilter.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `majorDimension` | string (enum) | The major dimension of the values. |
| `values` | array (array (any)) | The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected. |
| `dataFilter` | DataFilter | The data filter describing the location of the values in the spreadsheet. |

**`majorDimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## DataLabel

Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `type` | string (enum) | The type of the data label. |
| `textFormat` | TextFormat | The text format used for the data label. The link field is not supported. |
| `placement` | string (enum) | The placement of the data label relative to the labeled data. |
| `customLabelData` | ChartData | Data to use for custom labels. Only used if type is set to CUSTOM. This data must be the same length as the series or other element this data label is applied to. In addition, if the series is split into multiple source ranges, this source data must come from the next column in the source data. For… |

**`type` enum values:**

- `DATA_LABEL_TYPE_UNSPECIFIED` — The data label type is not specified and will be interpreted depending on the context of the data label within the chart.
- `NONE` — The data label is not displayed.
- `DATA` — The data label is displayed using values from the series data.
- `CUSTOM` — The data label is displayed using values from a custom data source indicated by customLabelData.

**`placement` enum values:**

- `DATA_LABEL_PLACEMENT_UNSPECIFIED` — The positioning is determined automatically by the renderer.
- `CENTER` — Center within a bar or column, both horizontally and vertically.
- `LEFT` — To the left of a data point.
- `RIGHT` — To the right of a data point.
- `ABOVE` — Above a data point.
- `BELOW` — Below a data point.
- `INSIDE_END` — Inside a bar or column at the end (top if positive, bottom if negative).
- `INSIDE_BASE` — Inside a bar or column at the base.
- `OUTSIDE_END` — Outside a bar or column at the end.


## DataSource

Information about an external data source in the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `calculatedColumns` | array (DataSourceColumn) | All calculated columns in the data source. |
| `sheetId` | integer (int32) | The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated. |
| `dataSourceId` | string | The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365. |
| `spec` | DataSourceSpec | The DataSourceSpec for the data source connected with this spreadsheet. |


## DataSourceChartProperties

Properties of a data source chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSourceId` | string | ID of the data source that the chart is associated with. |
| `dataExecutionStatus` | DataExecutionStatus | Output only. The data execution status. |


## DataSourceColumn

A column in a data source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `reference` | DataSourceColumnReference | The column reference. |
| `formula` | string | The formula of the calculated column. |


## DataSourceColumnReference

An unique identifier that references a data source column.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `name` | string | The display name of the column. It should be unique within a data source. |


## DataSourceFormula

A data source formula.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSourceId` | string | The ID of the data source the formula is associated with. |
| `dataExecutionStatus` | DataExecutionStatus | Output only. The data execution status. |


## DataSourceObjectReference

Reference to a data source object.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sheetId` | string | References to a DATA_SOURCE sheet. |
| `chartId` | integer (int32) | References to a data source chart. |
| `dataSourceFormulaCell` | GridCoordinate | References to a cell containing DataSourceFormula. |
| `dataSourceTableAnchorCell` | GridCoordinate | References to a DataSourceTable anchored at the cell. |
| `dataSourcePivotTableAnchorCell` | GridCoordinate | References to a data source PivotTable anchored at the cell. |

