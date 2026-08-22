# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/TaskDelete#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/TaskDelete
- **Summary:** Called whenever a task is deleted

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/TaskDelete#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever a task is deleted

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/TaskDelete#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "id": {      "type": "string"    },    "assignedTo": {      "type": "string"    },    "body": {      "type": "string"    },    "contactId": {      "type": "string"    },    "title": {      "type": "string"    },    "dateAdded": {      "type": "string"    },    "dueDate": {      "type": "string"    }  }}

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/TaskDelete#example "Direct link to Example")

    {  "type": "TaskDelete",  "locationId": "ve9EPM428h8vShlRW1KT",  "id": "UlRWGLSXh0ji5qbiGu4i",  "assignedTo": "63e4qiWDsFJjOYAC8phG",  "body": "Loram ipsum",  "contactId": "CWBf1PR9LvvBkcYqiXlc",  "title": "Loram ipsum",  "dateAdded": "2021-11-26T12:41:02.193Z",  "dueDate": "2021-11-26T12:41:02.193Z"}

Share your feedback
-------------------

★★★★★
