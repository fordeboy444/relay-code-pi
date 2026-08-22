# Date Dependency Metadata - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/date-dependency-metadata
- **Summary:** Date Dependency Metadata *   Cell value Dependency metadata for a linked record. | <br>`buffer` | `number`<br><br>Buffer time between dependent tasks, in whole days (integer).

Object

Date Dependency Metadata
========================

Models that reference this object:

*   [Cell value](https://airtable.com/developers/web/api/field-model)
    

  
`object`

Dependency metadata for a linked record.

|     |     |
| --- | --- |
| <br>`buffer` | `number`<br><br>Buffer time between dependent tasks, in whole days (integer). Positive values indicate lag, negative values indicate lead. |
| <br>`dependencyType` | `"startToStart" \| "startToFinish" \| "finishToStart" \| "finishToFinish"`<br><br>Type of dependency relationship between linked records. |

!!
