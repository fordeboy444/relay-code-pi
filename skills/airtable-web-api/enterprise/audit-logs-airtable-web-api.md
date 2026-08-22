# Audit Logs - Airtable Web API

- **URL:** https://airtable.com/developers/web/api/audit-logs-overview
- **Summary:** Monitor audit log events within your organization.

Overview

Audit Log
=========

Monitor audit log events within your organization.

The Audit Log Events API allows you to view and monitor real-time audit log events within your organization. This provides the ability for admins to review actions performed by members of your organization, including details such as the type of the action, who performed the action, and when the action was performed. The retention period for audit log events is **180 days** from the time the action took place. Use cases may include:

*   Exporting events into a security information and event management system (SIEM) or other tool
*   Proactively identifying any suspicious activity or misuse of organization resources
*   General monitoring and insight about events occurring within an organization

A full list of supported audit log event types can be found here: [Audit Log Event Types](https://airtable.com/developers/web/api/audit-log-event-types)
.  
Example audit log events include:

*   Adding/removing collaborators
*   Creating/deleting/moving bases
*   Creating/deleting/modifying share links
*   Uploading/downloading attachments

**Note:** The audit log event types supported by this API are a subset of all possible Airtable actions and more audit log events will be added over time.  
  
Not seeing an action that you would like to track? Please let your account team know.

The Audit Log Events API does **_not_** reflect changes to contents of cell values. If there is a need to monitor data being placed into cell values of Airtable bases, you may consider using our Data Loss Prevention solution through the [Change Events API](https://airtable.com/developers/web/api/change-events)
.

!!
