# Schema[​](https://marketplace.gohighlevel.com/docs/webhook/AppointmentUpdate#schema "Direct link to Schema")

- **URL:** https://marketplace.gohighlevel.com/docs/webhook/AppointmentUpdate
- **Summary:** Called whenever an appointment is updated

[Skip to main content](https://marketplace.gohighlevel.com/docs/webhook/AppointmentUpdate#__docusaurus_skipToContent_fallback)

Version: v3

On this page

Called whenever an appointment is updated

#### Schema[​](https://marketplace.gohighlevel.com/docs/webhook/AppointmentUpdate#schema "Direct link to Schema")

    {  "type": "object",  "properties": {    "type": {      "type": "string"    },    "locationId": {      "type": "string"    },    "appointment": {      "type": "object",      "properties": {        "id": {          "type": "string"        },        "address": {          "type": "string"        },        "title": {          "type": "string"        },        "calendarId": {          "type": "string"        },        "contactId": {          "type": "string"        },        "groupId": {          "type": "string"        },        "appointmentStatus": {          "type": "string"        },        "assignedUserId": {          "type": "string"        },        "users": {          "type": "array"        },        "notes": {          "type": "string"        },        "source": {          "type": "string"        },        "startTime": {          "type": "string"        },        "endTime": {          "type": "string"        },        "dateAdded": {          "type": "string"        },        "dateUpdated": {          "type": "string"        }      }    }  }}

#### Example[​](https://marketplace.gohighlevel.com/docs/webhook/AppointmentUpdate#example "Direct link to Example")

    {  "type": "AppointmentCreate",  "locationId": "0007BWpSzSwfiuSl0tR2",  "appointment": {    "id": "0007BWpSzSwfiuSl0tR2",    "address": "https://example.com/meeting",    "title": "Appointment with CRM Dev team",    "calendarId": "BqTwX8QFwXzpegMve9EQ",    "contactId": "9NkT25Vor1v4aQatFsv2",    "groupId": "9NkT25Vor1v4aQatFsv2",    "appointmentStatus": "confirmed",    "assignedUserId": "YlWd2wuCAZQzh2cH1fVZ",    "users": ["YlWd2wuCAZQzh2cH1fVZ", "9NkT25Vor1v4aQatFsv2"],    "notes": "Some dummy note",    "source": "booking_widget",    "startTime": "2023-09-25T16:00:00+05:30",    "endTime": "2023-09-25T16:00:00+05:30",    "dateAdded": "2023-09-25T16:00:00+05:30",    "dateUpdated": "2023-09-25T16:00:00+05:30"  }}
