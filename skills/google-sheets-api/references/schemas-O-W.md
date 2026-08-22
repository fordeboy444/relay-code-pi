# Google Sheets API — Core schemas O–W

48 schemas: OrgChartSpec, OverlayPosition, Padding, PersonProperties, PieChartSpec, PivotFilterCriteria, PivotFilterSpec, PivotGroup, PivotGroupLimit, PivotGroupRule, PivotGroupSortValueBucket, PivotGroupValueMetadata…

## Schemas in this file

- [`OrgChartSpec`](#orgchartspec)
- [`OverlayPosition`](#overlayposition)
- [`Padding`](#padding)
- [`PersonProperties`](#personproperties)
- [`PieChartSpec`](#piechartspec)
- [`PivotFilterCriteria`](#pivotfiltercriteria)
- [`PivotFilterSpec`](#pivotfilterspec)
- [`PivotGroup`](#pivotgroup)
- [`PivotGroupLimit`](#pivotgrouplimit)
- [`PivotGroupRule`](#pivotgrouprule)
- [`PivotGroupSortValueBucket`](#pivotgroupsortvaluebucket)
- [`PivotGroupValueMetadata`](#pivotgroupvaluemetadata)
- [`PivotTable`](#pivottable)
- [`PivotValue`](#pivotvalue)
- [`PointStyle`](#pointstyle)
- [`ProtectedRange`](#protectedrange)
- [`RefreshCancellationStatus`](#refreshcancellationstatus)
- [`RefreshDataSourceObjectExecutionStatus`](#refreshdatasourceobjectexecutionstatus)
- [`RichLinkProperties`](#richlinkproperties)
- [`RowData`](#rowdata)
- [`ScorecardChartSpec`](#scorecardchartspec)
- [`Sheet`](#sheet)
- [`SheetProperties`](#sheetproperties)
- [`Slicer`](#slicer)
- [`SlicerSpec`](#slicerspec)
- [`SortSpec`](#sortspec)
- [`SourceAndDestination`](#sourceanddestination)
- [`Spreadsheet`](#spreadsheet)
- [`SpreadsheetProperties`](#spreadsheetproperties)
- [`SpreadsheetTheme`](#spreadsheettheme)
- [`Table`](#table)
- [`TableColumnDataValidationRule`](#tablecolumndatavalidationrule)
- [`TableColumnProperties`](#tablecolumnproperties)
- [`TableRowsProperties`](#tablerowsproperties)
- [`TextFormat`](#textformat)
- [`TextFormatRun`](#textformatrun)
- [`TextPosition`](#textposition)
- [`TextRotation`](#textrotation)
- [`ThemeColorPair`](#themecolorpair)
- [`TimeOfDay`](#timeofday)
- [`TreemapChartColorScale`](#treemapchartcolorscale)
- [`TreemapChartSpec`](#treemapchartspec)
- [`ValueRange`](#valuerange)
- [`WaterfallChartColumnStyle`](#waterfallchartcolumnstyle)
- [`WaterfallChartCustomSubtotal`](#waterfallchartcustomsubtotal)
- [`WaterfallChartDomain`](#waterfallchartdomain)
- [`WaterfallChartSeries`](#waterfallchartseries)
- [`WaterfallChartSpec`](#waterfallchartspec)

## OrgChartSpec

An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales".

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `tooltips` | ChartData | The data containing the tooltip for the corresponding node. A blank value results in no tooltip being displayed for the node. This field is optional. |
| `nodeColor` | Color | The color of the org chart nodes. Deprecated: Use node_color_style. |
| `selectedNodeColor` | Color | The color of the selected org chart nodes. Deprecated: Use selected_node_color_style. |
| `parentLabels` | ChartData | The data containing the label of the parent for the corresponding node. A blank value indicates that the node has no parent and is a top-level node. This field is optional. |
| `nodeSize` | string (enum) | The size of the org chart nodes. |
| `labels` | ChartData | The data containing the labels for all the nodes in the chart. Labels must be unique. |
| `nodeColorStyle` | ColorStyle | The color of the org chart nodes. If node_color is also set, this field takes precedence. |
| `selectedNodeColorStyle` | ColorStyle | The color of the selected org chart nodes. If selected_node_color is also set, this field takes precedence. |

**`nodeSize` enum values:**

- `ORG_CHART_LABEL_SIZE_UNSPECIFIED` — Default value, do not use.
- `SMALL` — The small org chart node size.
- `MEDIUM` — The medium org chart node size.
- `LARGE` — The large org chart node size.


## OverlayPosition

The location an object is overlaid on top of a grid.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `heightPixels` | integer (int32) | The height of the object, in pixels. Defaults to 371. |
| `offsetXPixels` | integer (int32) | The horizontal offset, in pixels, that the object is offset from the anchor cell. |
| `offsetYPixels` | integer (int32) | The vertical offset, in pixels, that the object is offset from the anchor cell. |
| `widthPixels` | integer (int32) | The width of the object, in pixels. Defaults to 600. |
| `anchorCell` | GridCoordinate | The cell the object is anchored to. |


## Padding

The amount of padding around the cell, in pixels. When updating padding, every field must be specified.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `top` | integer (int32) | The top padding of the cell. |
| `right` | integer (int32) | The right padding of the cell. |
| `left` | integer (int32) | The left padding of the cell. |
| `bottom` | integer (int32) | The bottom padding of the cell. |


## PersonProperties

Properties specific to a linked person.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `email` | string | Required. The email address linked to this person. This field is always present. |
| `displayFormat` | string (enum) | Optional. The display format of the person chip. If not set, the default display format is used. |

**`displayFormat` enum values:**

- `DISPLAY_FORMAT_UNSPECIFIED` — Default value, do not use.
- `DEFAULT` — Default display format.
- `LAST_NAME_COMMA_FIRST_NAME` — Last name, first name display format.
- `EMAIL` — Email display format.


## PieChartSpec

A pie chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `series` | ChartData | The data that covers the one and only series of the pie chart. |
| `legendPosition` | string (enum) | Where the legend of the pie chart should be drawn. |
| `threeDimensional` | boolean | True if the pie is three dimensional. |
| `domain` | ChartData | The data that covers the domain of the pie chart. |
| `pieHole` | number (double) | The size of the hole in the pie chart. |

**`legendPosition` enum values:**

- `PIE_CHART_LEGEND_POSITION_UNSPECIFIED` — Default value, do not use.
- `BOTTOM_LEGEND` — The legend is rendered on the bottom of the chart.
- `LEFT_LEGEND` — The legend is rendered on the left of the chart.
- `RIGHT_LEGEND` — The legend is rendered on the right of the chart.
- `TOP_LEGEND` — The legend is rendered on the top of the chart.
- `NO_LEGEND` — No legend is rendered.
- `LABELED_LEGEND` — Each pie slice has a label attached to it.


## PivotFilterCriteria

Criteria for showing/hiding rows in a pivot table.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `condition` | BooleanCondition | A condition that must be true for values to be shown. (`visibleValues` does not override this -- even if a value is listed there, it is still hidden if it does not meet the condition.) Condition values that refer to ranges in A1-notation are evaluated relative to the pivot table sheet. References a… |
| `visibleByDefault` | boolean | Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown. |
| `visibleValues` | array (string) | Values that should be included. Values not listed here are excluded. |


## PivotFilterSpec

The pivot table filter criteria associated with a specific source column offset.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filterCriteria` | PivotFilterCriteria | The criteria for the column. |
| `columnOffsetIndex` | integer (int32) | The zero-based column offset of the source range. |
| `dataSourceColumnReference` | DataSourceColumnReference | The reference to the data source column. |


## PivotGroup

A single grouping (either row or column) in a pivot table.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sourceColumnOffset` | integer (int32) | The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`. |
| `sortOrder` | string (enum) | The order the values in this group should be sorted. |
| `valueMetadata` | array (PivotGroupValueMetadata) | Metadata about values in the grouping. |
| `repeatHeadings` | boolean | True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 M… |
| `groupRule` | PivotGroupRule | The group rule to apply to this row/column group. |
| `dataSourceColumnReference` | DataSourceColumnReference | The reference to the data source column this grouping is based on. |
| `groupLimit` | PivotGroupLimit | The count limit on rows or columns to apply to this pivot group. |
| `valueBucket` | PivotGroupSortValueBucket | The bucket of the opposite pivot group to sort by. If not specified, sorting is alphabetical by this group's values. |
| `showTotals` | boolean | True if the pivot table should include the totals for this grouping. |
| `label` | string | The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have head… |

**`sortOrder` enum values:**

- `SORT_ORDER_UNSPECIFIED` — Default value, do not use this.
- `ASCENDING` — Sort ascending.
- `DESCENDING` — Sort descending.


## PivotGroupLimit

The count limit on rows or columns in the pivot group.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `applyOrder` | integer (int32) | The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field s… |
| `countLimit` | integer (int32) | The count limit. |


## PivotGroupRule

An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `manualRule` | ManualRule | A ManualRule. |
| `dateTimeRule` | DateTimeRule | A DateTimeRule. |
| `histogramRule` | HistogramRule | A HistogramRule. |


## PivotGroupSortValueBucket

Information about which values in a pivot group should be used for sorting.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `buckets` | array (ExtendedValue) | Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group & two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second… |
| `valuesIndex` | integer (int32) | The offset in the PivotTable.values list which the values in this grouping should be sorted by. |


## PivotGroupValueMetadata

Metadata about a value in a pivot grouping.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `collapsed` | boolean | True if the data corresponding to the value is collapsed. |
| `value` | ExtendedValue | The calculated value the metadata corresponds to. (Note that formulaValue is not valid, because the values will be calculated.) |


## PivotTable

A pivot table.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `criteria` | map (string -> PivotFilterCriteria) | An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a k… |
| `filterSpecs` | array (PivotFilterSpec) | The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. |
| `valueLayout` | string (enum) | Whether values should be listed horizontally (as columns) or vertically (as rows). |
| `dataExecutionStatus` | DataExecutionStatus | Output only. The data execution status for data source pivot tables. |
| `dataSourceId` | string | The ID of the data source the pivot table is reading data from. |
| `source` | GridRange | The range the pivot table is reading data from. |
| `rows` | array (PivotGroup) | Each row grouping in the pivot table. |
| `values` | array (PivotValue) | A list of values to include in the pivot table. |
| `columns` | array (PivotGroup) | Each column grouping in the pivot table. |

**`valueLayout` enum values:**

- `HORIZONTAL` — Values are laid out horizontally (as columns).
- `VERTICAL` — Values are laid out vertically (as rows).


## PivotValue

The definition of how a value in a pivot table should be calculated.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sourceColumnOffset` | integer (int32) | The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`. |
| `name` | string | A name to use for the value. |
| `dataSourceColumnReference` | DataSourceColumnReference | The reference to the data source column that this value reads from. |
| `summarizeFunction` | string (enum) | A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported. |
| `formula` | string | A custom formula to calculate the value. The formula must start with an `=` character. |
| `calculatedDisplayType` | string (enum) | If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this… |

**`summarizeFunction` enum values:**

- `PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED` — The default, do not use.
- `SUM` — Corresponds to the `SUM` function.
- `COUNTA` — Corresponds to the `COUNTA` function.
- `COUNT` — Corresponds to the `COUNT` function.
- `COUNTUNIQUE` — Corresponds to the `COUNTUNIQUE` function.
- `AVERAGE` — Corresponds to the `AVERAGE` function.
- `MAX` — Corresponds to the `MAX` function.
- `MIN` — Corresponds to the `MIN` function.
- `MEDIAN` — Corresponds to the `MEDIAN` function.
- `PRODUCT` — Corresponds to the `PRODUCT` function.
- `STDEV` — Corresponds to the `STDEV` function.
- `STDEVP` — Corresponds to the `STDEVP` function.
- `VAR` — Corresponds to the `VAR` function.
- `VARP` — Corresponds to the `VARP` function.
- `CUSTOM` — Indicates the formula should be used as-is. Only valid if PivotValue.formula was set.
- `NONE` — Indicates that the value is already summarized, and the summarization function is not explicitly specified. Used for Looker data source pivot tables where the value is already summarized.

**`calculatedDisplayType` enum values:**

- `PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED` — Default value, do not use.
- `PERCENT_OF_ROW_TOTAL` — Shows the pivot values as percentage of the row total values.
- `PERCENT_OF_COLUMN_TOTAL` — Shows the pivot values as percentage of the column total values.
- `PERCENT_OF_GRAND_TOTAL` — Shows the pivot values as percentage of the grand total values.


## PointStyle

The style of a point on the chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `shape` | string (enum) | The point shape. If empty or unspecified, a default shape is used. |
| `size` | number (double) | The point size. If empty, a default size is used. |

**`shape` enum values:**

- `POINT_SHAPE_UNSPECIFIED` — Default value.
- `CIRCLE` — A circle shape.
- `DIAMOND` — A diamond shape.
- `HEXAGON` — A hexagon shape.
- `PENTAGON` — A pentagon shape.
- `SQUARE` — A square shape.
- `STAR` — A star shape.
- `TRIANGLE` — A triangle shape.
- `X_MARK` — An x-mark shape.


## ProtectedRange

A protected range.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `requestingUserCanEdit` | boolean | True if the user who requested this protected range can edit the protected area. This field is read-only. |
| `protectedRangeId` | integer (int32) | The ID of the protected range. This field is read-only. |
| `description` | string | The description of this protected range. |
| `tableId` | string | The table this protected range is backed by, if any. When writing, only one of range or named_range_id or table_id may be set. |
| `namedRangeId` | string | The named range this protected range is backed by, if any. When writing, only one of range or named_range_id or table_id may be set. |
| `range` | GridRange | The range that is being protected. The range may be fully unbounded, in which case this is considered a protected sheet. When writing, only one of range or named_range_id or table_id may be set. |
| `unprotectedRanges` | array (GridRange) | The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets. |
| `editors` | Editors | The users and groups with edit access to the protected range. This field is only visible to users with edit access to the protected range and the document. Editors are not supported with warning_only protection. |
| `warningOnly` | boolean | True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors are ignored. Additionally,… |


## RefreshCancellationStatus

The status of a refresh cancellation. You can send a cancel request to explicitly cancel one or multiple data source object refreshes.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `state` | string (enum) | The state of a call to cancel a refresh in Sheets. |
| `errorCode` | string (enum) | The error code. |

**`state` enum values:**

- `REFRESH_CANCELLATION_STATE_UNSPECIFIED` — Default value, do not use.
- `CANCEL_SUCCEEDED` — The API call to Sheets to cancel a refresh has succeeded. This does not mean that the cancel happened successfully, but that the call has been made successfully.
- `CANCEL_FAILED` — The API call to Sheets to cancel a refresh has failed.

**`errorCode` enum values:**

- `REFRESH_CANCELLATION_ERROR_CODE_UNSPECIFIED` — Default value, do not use.
- `EXECUTION_NOT_FOUND` — Execution to be cancelled not found in the query engine or in Sheets.
- `CANCEL_PERMISSION_DENIED` — The user does not have permission to cancel the query.
- `QUERY_EXECUTION_COMPLETED` — The query execution has already completed and thus could not be cancelled.
- `CONCURRENT_CANCELLATION` — There is already another cancellation in process.
- `CANCEL_OTHER_ERROR` — All other errors.


## RefreshDataSourceObjectExecutionStatus

The execution status of refreshing one data source object.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `reference` | DataSourceObjectReference | Reference to a data source object being refreshed. |
| `dataExecutionStatus` | DataExecutionStatus | The data execution status. |


## RichLinkProperties

Properties of a link to a Google resource (such as a file in Drive, a YouTube video, a Maps address, or a Calendar event). Only Drive files can be written as chips. All other rich link types are read only. URIs cannot exceed 2000 bytes when writing. NOTE: Writing Drive file chips requires at least one of the `drive.file`, `drive.readonly`, or `drive` OAuth scopes.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `uri` | string | Required. The URI to the link. This is always present. |
| `mimeType` | string | Output only. The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the link, if there's one (for example, when it's a file in Drive). |


## RowData

Data about each cell in a row.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `values` | array (CellData) | The values in the row, one per column. |


## ScorecardChartSpec

A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `baselineValueFormat` | BaselineValueFormat | Formatting options for baseline value. This field is needed only if baseline_value_data is specified. |
| `keyValueData` | ChartData | The data for scorecard key value. |
| `scaleFactor` | number (double) | Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional. |
| `baselineValueData` | ChartData | The data for scorecard baseline value. This field is optional. |
| `numberFormatSource` | string (enum) | The number format source used in the scorecard chart. This field is optional. |
| `customFormatOptions` | ChartCustomNumberFormatOptions | Custom formatting options for numeric key/baseline values in scorecard chart. This field is used only when number_format_source is set to CUSTOM. This field is optional. |
| `aggregateType` | string (enum) | The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional. |
| `keyValueFormat` | KeyValueFormat | Formatting options for key value. |

**`numberFormatSource` enum values:**

- `CHART_NUMBER_FORMAT_SOURCE_UNDEFINED` — Default value, do not use.
- `FROM_DATA` — Inherit number formatting from data.
- `CUSTOM` — Apply custom formatting as specified by ChartCustomNumberFormatOptions.

**`aggregateType` enum values:**

- `CHART_AGGREGATE_TYPE_UNSPECIFIED` — Default value, do not use.
- `AVERAGE` — Average aggregate function.
- `COUNT` — Count aggregate function.
- `MAX` — Maximum aggregate function.
- `MEDIAN` — Median aggregate function.
- `MIN` — Minimum aggregate function.
- `SUM` — Sum aggregate function.


## Sheet

A sheet in a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `columnGroups` | array (DimensionGroup) | All column groups on this sheet, ordered by increasing range start index, then by group depth. |
| `rowGroups` | array (DimensionGroup) | All row groups on this sheet, ordered by increasing range start index, then by group depth. |
| `charts` | array (EmbeddedChart) | The specifications of every chart on this sheet. |
| `merges` | array (GridRange) | The ranges that are merged together. |
| `tables` | array (Table) | The tables on this sheet. |
| `bandedRanges` | array (BandedRange) | The banded (alternating colors) ranges on this sheet. |
| `properties` | SheetProperties | The properties of the sheet. |
| `filterViews` | array (FilterView) | The filter views in this sheet. |
| `slicers` | array (Slicer) | The slicers on this sheet. |
| `data` | array (GridData) | Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData… |
| `protectedRanges` | array (ProtectedRange) | The protected ranges in this sheet. |
| `developerMetadata` | array (DeveloperMetadata) | The developer metadata associated with a sheet. |
| `basicFilter` | BasicFilter | The filter on this sheet, if any. |
| `conditionalFormats` | array (ConditionalFormatRule) | The conditional format rules in this sheet. |


## SheetProperties

Properties of a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataSourceSheetProperties` | DataSourceSheetProperties | Output only. If present, the field contains DATA_SOURCE sheet specific properties. |
| `tabColorStyle` | ColorStyle | The color of the tab in the UI. If tab_color is also set, this field takes precedence. |
| `sheetType` | string (enum) | The type of sheet. Defaults to GRID. This field cannot be changed once set. |
| `title` | string | The name of the sheet. |
| `sheetId` | integer (int32) | The ID of the sheet. Must be non-negative. This field cannot be changed once set. |
| `tabColor` | Color | The color of the tab in the UI. Deprecated: Use tab_color_style. |
| `index` | integer (int32) | The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if the… |
| `rightToLeft` | boolean | True if the sheet is an RTL sheet instead of an LTR sheet. |
| `gridProperties` | GridProperties | Additional properties of the sheet if this sheet is a grid. (If the sheet is an object sheet, containing a chart or image, then this field will be absent.) When writing it is an error to set any grid properties on non-grid sheets. If this sheet is a DATA_SOURCE sheet, this field is output only but… |
| `hidden` | boolean | True if the sheet is hidden in the UI, false if it's visible. |

**`sheetType` enum values:**

- `SHEET_TYPE_UNSPECIFIED` — Default value, do not use.
- `GRID` — The sheet is a grid.
- `OBJECT` — The sheet has no grid and instead has an object like a chart or image.
- `DATA_SOURCE` — The sheet connects with an external DataSource and shows the preview of data.


## Slicer

A slicer in a sheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `slicerId` | integer (int32) | The ID of the slicer. |
| `position` | EmbeddedObjectPosition | The position of the slicer. Note that slicer can be positioned only on existing sheet. Also, width and height of slicer can be automatically adjusted to keep it within permitted limits. |
| `spec` | SlicerSpec | The specification of the slicer. |


## SlicerSpec

The specifications of a slicer.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `filterCriteria` | FilterCriteria | The filtering criteria of the slicer. |
| `applyToPivotTables` | boolean | True if the filter should apply to pivot tables. If not set, default to `True`. |
| `horizontalAlignment` | string (enum) | The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT` |
| `title` | string | The title of the slicer. |
| `dataRange` | GridRange | The data range of the slicer. |
| `backgroundColorStyle` | ColorStyle | The background color of the slicer. If background_color is also set, this field takes precedence. |
| `textFormat` | TextFormat | The text format of title in the slicer. The link field is not supported. |
| `columnIndex` | integer (int32) | The zero-based column index in the data table on which the filter is applied to. |
| `backgroundColor` | Color | The background color of the slicer. Deprecated: Use background_color_style. |

**`horizontalAlignment` enum values:**

- `HORIZONTAL_ALIGN_UNSPECIFIED` — The horizontal alignment is not specified. Do not use this.
- `LEFT` — The text is explicitly aligned to the left of the cell.
- `CENTER` — The text is explicitly aligned to the center of the cell.
- `RIGHT` — The text is explicitly aligned to the right of the cell.


## SortSpec

A sort order associated with a specific column or row.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `sortOrder` | string (enum) | The order data should be sorted. |
| `foregroundColor` | Color | The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color. Deprecated: Use foreground_color_style. |
| `foregroundColorStyle` | ColorStyle | The foreground color to sort by; cells with this foreground color are sorted to the top. Mutually exclusive with background_color, and must be an RGB-type color. If foreground_color is also set, this field takes precedence. |
| `dimensionIndex` | integer (int32) | The dimension the sort should be applied to. |
| `backgroundColor` | Color | The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color. Deprecated: Use background_color_style. |
| `backgroundColorStyle` | ColorStyle | The background fill color to sort by; cells with this fill color are sorted to the top. Mutually exclusive with foreground_color, and must be an RGB-type color. If background_color is also set, this field takes precedence. |
| `dataSourceColumnReference` | DataSourceColumnReference | Reference to a data source column. |

**`sortOrder` enum values:**

- `SORT_ORDER_UNSPECIFIED` — Default value, do not use this.
- `ASCENDING` — Sort ascending.
- `DESCENDING` — Sort descending.


## SourceAndDestination

A combination of a source range and how to extend that source.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dimension` | string (enum) | The dimension that data should be filled into. |
| `source` | GridRange | The location of the data to use as the source of the autofill. |
| `fillLength` | integer (int32) | The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source. |

**`dimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## Spreadsheet

Resource that represents a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spreadsheetId` | string | The ID of the spreadsheet. This field is read-only. |
| `developerMetadata` | array (DeveloperMetadata) | The developer metadata associated with a spreadsheet. |
| `sheets` | array (Sheet) | The sheets that are part of a spreadsheet. |
| `dataSources` | array (DataSource) | A list of external data sources connected with the spreadsheet. |
| `namedRanges` | array (NamedRange) | The named ranges defined in a spreadsheet. |
| `spreadsheetUrl` | string | The url of the spreadsheet. This field is read-only. |
| `dataSourceSchedules` | array (DataSourceRefreshSchedule) | Output only. A list of data source refresh schedules. |
| `properties` | SpreadsheetProperties | Overall properties of a spreadsheet. |


## SpreadsheetProperties

Properties of a spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `spreadsheetTheme` | SpreadsheetTheme | Theme applied to the spreadsheet. |
| `autoRecalc` | string (enum) | The amount of time to wait before volatile functions are recalculated. |
| `importFunctionsExternalUrlAccessAllowed` | boolean | Whether to allow external URL access for image and import functions. Read only when true. When false, you can set to true. This value will be bypassed and always return true if the admin has enabled the [allowlisting feature](https://support.google.com/a?p=url_allowlist). |
| `title` | string | The title of the spreadsheet. |
| `timeZone` | string | The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`. |
| `iterativeCalculationSettings` | IterativeCalculationSettings | Determines whether and how circular references are resolved with iterative calculation. Absence of this field means that circular references result in calculation errors. |
| `defaultFormat` | CellFormat | The default format of all cells in the spreadsheet. CellData.effectiveFormat will not be set if the cell's format is equal to this default format. This field is read-only. |
| `locale` | string | The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/lan… |

**`autoRecalc` enum values:**

- `RECALCULATION_INTERVAL_UNSPECIFIED` — Default value. This value must not be used.
- `ON_CHANGE` — Volatile functions are updated on every change.
- `MINUTE` — Volatile functions are updated on every change and every minute.
- `HOUR` — Volatile functions are updated on every change and hourly.


## SpreadsheetTheme

Represents spreadsheet theme

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `primaryFontFamily` | string | Name of the primary font family. |
| `themeColors` | array (ThemeColorPair) | The spreadsheet theme color pairs. To update you must provide all theme color pairs. |


## Table

A table.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `range` | GridRange | The table range. |
| `tableId` | string | The id of the table. |
| `name` | string | The table name. This is unique to all tables in the same spreadsheet. |
| `columnProperties` | array (TableColumnProperties) | The table column properties. |
| `rowsProperties` | TableRowsProperties | The table rows properties. |


## TableColumnDataValidationRule

A data validation rule for a column in a table.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `condition` | BooleanCondition | The condition that data in the cell must match. Valid only if the [BooleanCondition.type] is ONE_OF_LIST. |


## TableColumnProperties

The table column.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `columnName` | string | The column name. |
| `dataValidationRule` | TableColumnDataValidationRule | The column data validation rule. Only set for dropdown column type. |
| `columnIndex` | integer (int32) | The 0-based column index. This index is relative to its position in the table and is not necessarily the same as the column index in the sheet. |
| `columnType` | string (enum) | The column type. |

**`columnType` enum values:**

- `COLUMN_TYPE_UNSPECIFIED` — An unspecified column type.
- `DOUBLE` — The number column type.
- `CURRENCY` — The currency column type.
- `PERCENT` — The percent column type.
- `DATE` — The date column type.
- `TIME` — The time column type.
- `DATE_TIME` — The date and time column type.
- `TEXT` — The text column type.
- `BOOLEAN` — The boolean column type.
- `DROPDOWN` — The dropdown column type.
- `FILES_CHIP` — The files chip column type
- `PEOPLE_CHIP` — The people chip column type
- `FINANCE_CHIP` — The finance chip column type
- `PLACE_CHIP` — The place chip column type
- `RATINGS_CHIP` — The ratings chip column type


## TableRowsProperties

The table row properties.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `headerColorStyle` | ColorStyle | The color of the header row. If this field is set, the header row is filled with the specified color. Otherwise, the header row is filled with a default color. |
| `secondBandColorStyle` | ColorStyle | The second color that is alternating. If this field is set, the second banded row is filled with the specified color. Otherwise, the second banded row is filled with a default color. |
| `firstBandColorStyle` | ColorStyle | The first color that is alternating. If this field is set, the first banded row is filled with the specified color. Otherwise, the first banded row is filled with a default color. |
| `footerColorStyle` | ColorStyle | The color of the last row. If this field is not set a footer is not added, the last row is filled with either first_band_color_style or second_band_color_style, depending on the color of the previous row. If updating an existing table without a footer to have a footer, the range will be expanded by… |


## TextFormat

The format of a run of text in a cell. Absent values indicate that the field isn't specified.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `underline` | boolean | True if the text is underlined. |
| `foregroundColor` | Color | The foreground color of the text. Deprecated: Use foreground_color_style. |
| `italic` | boolean | True if the text is italicized. |
| `link` | Link | The link destination of the text, if any. Setting the link field in a TextFormatRun will clear the cell's existing links or a cell-level link set in the same request. When a link is set, the text foreground color will be set to the default link color and the text will be underlined. If these fields… |
| `fontFamily` | string | The font family. |
| `foregroundColorStyle` | ColorStyle | The foreground color of the text. If foreground_color is also set, this field takes precedence. |
| `fontSize` | integer (int32) | The size of the font. |
| `bold` | boolean | True if the text is bold. |
| `strikethrough` | boolean | True if the text has a strikethrough. |


## TextFormatRun

A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `startIndex` | integer (int32) | The zero-based character index where this run starts, in UTF-16 code units. |
| `format` | TextFormat | The format of this run. Absent values inherit the cell's format. |


## TextPosition

Position settings for text.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `horizontalAlignment` | string (enum) | Horizontal alignment setting for the piece of text. |

**`horizontalAlignment` enum values:**

- `HORIZONTAL_ALIGN_UNSPECIFIED` — The horizontal alignment is not specified. Do not use this.
- `LEFT` — The text is explicitly aligned to the left of the cell.
- `CENTER` — The text is explicitly aligned to the center of the cell.
- `RIGHT` — The text is explicitly aligned to the right of the cell.


## TextRotation

The rotation applied to text in a cell.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `angle` | integer (int32) | The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL th… |
| `vertical` | boolean | If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l | |


## ThemeColorPair

A pair mapping a spreadsheet theme color type to the concrete color it represents.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `colorType` | string (enum) | The type of the spreadsheet theme color. |
| `color` | ColorStyle | The concrete color corresponding to the theme color type. |

**`colorType` enum values:**

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


## TimeOfDay

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `minutes` | integer (int32) | Minutes of an hour. Must be greater than or equal to 0 and less than or equal to 59. |
| `nanos` | integer (int32) | Fractions of seconds, in nanoseconds. Must be greater than or equal to 0 and less than or equal to 999,999,999. |
| `hours` | integer (int32) | Hours of a day in 24 hour format. Must be greater than or equal to 0 and typically must be less than or equal to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. |
| `seconds` | integer (int32) | Seconds of a minute. Must be greater than or equal to 0 and typically must be less than or equal to 59. An API may allow the value 60 if it allows leap-seconds. |


## TreemapChartColorScale

A color scale for a treemap chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `midValueColorStyle` | ColorStyle | The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. If mid_value_color is also set, this field takes precedence. |
| `maxValueColor` | Color | The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. Deprecated: Use max_value_color_style. |
| `maxValueColorStyle` | ColorStyle | The background color for cells with a color value greater than or equal to maxValue. Defaults to #109618 if not specified. If max_value_color is also set, this field takes precedence. |
| `noDataColor` | Color | The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. Deprecated: Use no_data_color_style. |
| `minValueColorStyle` | ColorStyle | The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. If min_value_color is also set, this field takes precedence. |
| `minValueColor` | Color | The background color for cells with a color value less than or equal to minValue. Defaults to #dc3912 if not specified. Deprecated: Use min_value_color_style. |
| `midValueColor` | Color | The background color for cells with a color value at the midpoint between minValue and maxValue. Defaults to #efe6dc if not specified. Deprecated: Use mid_value_color_style. |
| `noDataColorStyle` | ColorStyle | The background color for cells that have no color data associated with them. Defaults to #000000 if not specified. If no_data_color is also set, this field takes precedence. |


## TreemapChartSpec

A Treemap chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `maxValue` | number (double) | The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified. |
| `colorScale` | TreemapChartColorScale | The color scale for data cells in the treemap chart. Data cells are assigned colors based on their color values. These color values come from color_data, or from size_data if color_data is not specified. Cells with color values less than or equal to min_value will have minValueColor as their backgr… |
| `sizeData` | ChartData | The data that determines the size of each treemap data cell. This data is expected to be numeric. The cells corresponding to non-numeric or missing data will not be rendered. If color_data is not specified, this data is used to determine data cell background colors as well. |
| `hintedLevels` | integer (int32) | The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified. |
| `hideTooltips` | boolean | True to hide tooltips. |
| `headerColorStyle` | ColorStyle | The background color for header cells. If header_color is also set, this field takes precedence. |
| `colorData` | ChartData | The data that determines the background color of each treemap data cell. This field is optional. If not specified, size_data is used to determine background colors. If specified, the data is expected to be numeric. color_scale will determine how the values in this data map to data cell background c… |
| `headerColor` | Color | The background color for header cells. Deprecated: Use header_color_style. |
| `parentLabels` | ChartData | The data the contains the treemap cells' parent labels. |
| `levels` | integer (int32) | The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified. |
| `minValue` | number (double) | The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified. |
| `labels` | ChartData | The data that contains the treemap cell labels. |
| `textFormat` | TextFormat | The text format for all labels on the chart. The link field is not supported. |


## ValueRange

Data within a range of the spreadsheet.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `majorDimension` | string (enum) | The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDim… |
| `values` | array (array (any)) | The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty trailing rows and columns will not be included. For input, su… |
| `range` | string | The range the values cover, in [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range t… |

**`majorDimension` enum values:**

- `DIMENSION_UNSPECIFIED` — The default value, do not use.
- `ROWS` — Operates on the rows of a sheet.
- `COLUMNS` — Operates on the columns of a sheet.


## WaterfallChartColumnStyle

Styles for a waterfall chart column.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `label` | string | The label of the column's legend. |
| `color` | Color | The color of the column. Deprecated: Use color_style. |
| `colorStyle` | ColorStyle | The color of the column. If color is also set, this field takes precedence. |


## WaterfallChartCustomSubtotal

A custom subtotal column for a waterfall chart series.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `dataIsSubtotal` | boolean | True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point. |
| `label` | string | A label for the subtotal column. |
| `subtotalIndex` | integer (int32) | The zero-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices… |


## WaterfallChartDomain

The domain of a waterfall chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `data` | ChartData | The data of the WaterfallChartDomain. |
| `reversed` | boolean | True to reverse the order of the domain values (horizontal axis). |


## WaterfallChartSeries

A single series of data for a waterfall chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `data` | ChartData | The data being visualized in this series. |
| `customSubtotals` | array (WaterfallChartCustomSubtotal) | Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point. |
| `subtotalColumnsStyle` | WaterfallChartColumnStyle | Styles for all subtotal columns in this series. |
| `hideTrailingSubtotal` | boolean | True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series. |
| `negativeColumnsStyle` | WaterfallChartColumnStyle | Styles for all columns in this series with negative values. |
| `positiveColumnsStyle` | WaterfallChartColumnStyle | Styles for all columns in this series with positive values. |
| `dataLabel` | DataLabel | Information about the data labels for this series. |


## WaterfallChartSpec

A waterfall chart.

**Type:** `object`

**Properties:**

| Property | Type | Description |
| --- | --- | --- |
| `domain` | WaterfallChartDomain | The domain data (horizontal axis) for the waterfall chart. |
| `hideConnectorLines` | boolean | True to hide connector lines between columns. |
| `totalDataLabel` | DataLabel | Controls whether to display additional data labels on stacked charts which sum the total value of all stacked values at each value along the domain axis. stacked_type must be STACKED and neither CUSTOM nor placement can be set on the total_data_label. |
| `firstValueIsTotal` | boolean | True to interpret the first value as a total. |
| `series` | array (WaterfallChartSeries) | The data this waterfall chart is visualizing. |
| `stackedType` | string (enum) | The stacked type. |
| `connectorLineStyle` | LineStyle | The line style for the connector lines. |

**`stackedType` enum values:**

- `WATERFALL_STACKED_TYPE_UNSPECIFIED` — Default value, do not use.
- `STACKED` — Values corresponding to the same domain (horizontal axis) value will be stacked vertically.
- `SEQUENTIAL` — Series will spread out along the horizontal axis.

