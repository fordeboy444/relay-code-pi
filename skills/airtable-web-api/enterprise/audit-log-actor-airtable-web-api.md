# Audit log actor - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/model/audit-log-actor
- **Summary:** *   Audit log events

Object

Audit log actor
===============

Endpoints that reference this object:

*   [Audit log events](https://airtable.com/developers/web/api/audit-log-events)
    

  
`any of the below objects`

`type`

`"user"`

`user`

`object`

|     |     |
| --- | --- |
| <br>`id` | `string` |
| <br>`email` | `string` |
| <br>`name` | `optional<``string``>` |

|     |     |
| --- | --- |
| <br>`type` | `"formSubmission"` |
| <br>`viewId` | `string` |

|     |     |
| --- | --- |
| <br>`type` | `"automation"` |
| <br>`automationId` | `string` |

|     |     |
| --- | --- |
| <br>`type` | `"system"` |

|     |     |
| --- | --- |
| <br>`type` | `"sync"` |

|     |     |
| --- | --- |
| <br>`type` | `"anonymousUser"` |

|     |     |
| --- | --- |
| <br>`type` | `"unknown"` |

!!
