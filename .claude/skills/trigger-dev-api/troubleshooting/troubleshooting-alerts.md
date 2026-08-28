# Alerts

> Source: https://trigger.dev/docs/troubleshooting-alerts

We support receiving alerts for the following events:

*   Run fails
*   Deployment fails
*   Deployment succeeds

[​](https://trigger.dev/docs/troubleshooting-alerts#how-to-setup-alerts)

How to setup alerts
-----------------------------------------------------------------------------------------------

1

[](https://trigger.dev/docs/troubleshooting-alerts#)

Create a new alert

Click on “Alerts” in the left hand side menu, then click on “New alert” to open the new alert modal.![Email alerts](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/troubleshooting-alerts-blank.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=6a45670b1c9e59da3cf3bfa6264af742)

2

[](https://trigger.dev/docs/troubleshooting-alerts#)

Choose your alert method

Choose to be notified by email, Slack notification or webhook whenever:

*   a run fails
*   a deployment fails
*   a deployment succeeds ![Email alerts](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/troubleshooting-alerts-modal.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=f6289e4f7dde170ab8b5ad4dab7b3fd0)

3

[](https://trigger.dev/docs/troubleshooting-alerts#)

Delete or disable alerts

Click on the triple dot menu on the right side of the table row and select “Disable” or “Delete”.![Disable and delete alerts](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/troubleshooting-alerts-disable-delete.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=ee5bf9572279a5a571b6cc33fc2d2a59)

[​](https://trigger.dev/docs/troubleshooting-alerts#alert-webhooks)

Alert webhooks
-------------------------------------------------------------------------------------

For the alert webhooks you can use the SDK to parse them. Here is an example of how to parse the webhook payload in Remix:

    import { ActionFunctionArgs, json } from "@remix-run/server-runtime";
    import { webhooks, WebhookError } from "@trigger.dev/sdk";
    
    export async function action({ request }: ActionFunctionArgs) {
      // Make sure this is a POST request
      if (request.method !== "POST") {
        return json({ error: "Method not allowed" }, { status: 405 });
      }
    
      try {
        // Construct and verify the webhook event
        // This secret can be found on your Alerts page when you create a webhook alert
        const event = await webhooks.constructEvent(request, process.env.ALERT_WEBHOOK_SECRET!);
    
        // Process the event based on its type
        switch (event.type) {
          case "alert.run.failed": {
            console.log("[Webhook Internal Test] Run failed alert webhook received", { event });
            break;
          }
          case "alert.deployment.success": {
            console.log("[Webhook Internal Test] Deployment success alert webhook received", { event });
            break;
          }
          case "alert.deployment.failed": {
            console.log("[Webhook Internal Test] Deployment failed alert webhook received", { event });
            break;
          }
          default: {
            console.log("[Webhook Internal Test] Unhandled webhook type", { event });
          }
        }
    
        // Return a success response
        return json({ received: true }, { status: 200 });
      } catch (err) {
        // Handle webhook errors
        if (err instanceof WebhookError) {
          console.error("Webhook error:", { message: err.message });
          return json({ error: err.message }, { status: 400 });
        }
    
        if (err instanceof Error) {
          console.error("Error processing webhook:", { message: err.message });
          return json({ error: err.message }, { status: 400 });
        }
    
        // Handle other errors
        console.error("Error processing webhook:", { err });
        return json({ error: "Internal server error" }, { status: 500 });
      }
    }
    

### 

[​](https://trigger.dev/docs/troubleshooting-alerts#common-properties)

Common properties

When you create a webhook alert, you’ll receive different payloads depending on the type of alert. All webhooks share some common properties:

[​](https://trigger.dev/docs/troubleshooting-alerts#param-id)

id

string

A unique identifier for this webhook event

[​](https://trigger.dev/docs/troubleshooting-alerts#param-created)

created

datetime

When this webhook event was created

[​](https://trigger.dev/docs/troubleshooting-alerts#param-webhook-version)

webhookVersion

string

The version of the webhook payload format

[​](https://trigger.dev/docs/troubleshooting-alerts#param-type)

type

string

The type of alert webhook. One of: `alert.run.failed`, `alert.deployment.success`, or `alert.deployment.failed`

### 

[​](https://trigger.dev/docs/troubleshooting-alerts#run-failed-alert)

Run Failed Alert

This webhook is sent when a run fails. The payload is available on the `object` property:

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-task-id)

object.task.id

string

Unique identifier for the task

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-task-file-path)

object.task.filePath

string

File path where the task is defined

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-task-export-name)

object.task.exportName

string

Name of the exported task function

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-task-version)

object.task.version

string

Version of the task

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-task-sdk-version)

object.task.sdkVersion

string

Version of the SDK used

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-task-cli-version)

object.task.cliVersion

string

Version of the CLI used

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-id)

object.run.id

string

Unique identifier for the run

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-number)

object.run.number

number

Run number

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-status)

object.run.status

string

Current status of the run

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-created-at)

object.run.createdAt

datetime

When the run was created

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-started-at)

object.run.startedAt

datetime

When the run started executing

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-completed-at)

object.run.completedAt

datetime

When the run finished executing

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-is-test)

object.run.isTest

boolean

Whether this is a test run

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-idempotency-key)

object.run.idempotencyKey

string

Idempotency key for the run

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-tags)

object.run.tags

string\[\]

Associated tags

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-error)

object.run.error

object

Error information

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-is-out-of-memory-error)

object.run.isOutOfMemoryError

boolean

Whether the run was an out-of-memory error

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-machine)

object.run.machine

string

Machine preset used for the run

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-run-dashboard-url)

object.run.dashboardUrl

string

URL to view the run in the dashboard

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-id)

object.environment.id

string

Environment ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-type)

object.environment.type

string

Environment type (STAGING or PRODUCTION)

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-slug)

object.environment.slug

string

Environment slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-id)

object.organization.id

string

Organization ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-slug)

object.organization.slug

string

Organization slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-name)

object.organization.name

string

Organization name

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-id)

object.project.id

string

Project ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-ref)

object.project.ref

string

Project reference

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-slug)

object.project.slug

string

Project slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-name)

object.project.name

string

Project name

### 

[​](https://trigger.dev/docs/troubleshooting-alerts#deployment-success-alert)

Deployment Success Alert

This webhook is sent when a deployment succeeds. The payload is available on the `object` property:

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-id)

object.deployment.id

string

Deployment ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-status)

object.deployment.status

string

Deployment status

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-version)

object.deployment.version

string

Deployment version

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-short-code)

object.deployment.shortCode

string

Short code identifier

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-deployed-at)

object.deployment.deployedAt

datetime

When the deployment completed

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-tasks)

object.tasks

array

Array of deployed tasks with properties: id, filePath, exportName, and triggerSource

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-id-1)

object.environment.id

string

Environment ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-type-1)

object.environment.type

string

Environment type (STAGING or PRODUCTION)

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-slug-1)

object.environment.slug

string

Environment slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-id-1)

object.organization.id

string

Organization ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-slug-1)

object.organization.slug

string

Organization slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-name-1)

object.organization.name

string

Organization name

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-id-1)

object.project.id

string

Project ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-ref-1)

object.project.ref

string

Project reference

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-slug-1)

object.project.slug

string

Project slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-name-1)

object.project.name

string

Project name

### 

[​](https://trigger.dev/docs/troubleshooting-alerts#deployment-failed-alert)

Deployment Failed Alert

This webhook is sent when a deployment fails. The payload is available on the `object` property:

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-id-1)

object.deployment.id

string

Deployment ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-status-1)

object.deployment.status

string

Deployment status

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-version-1)

object.deployment.version

string

Deployment version

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-short-code-1)

object.deployment.shortCode

string

Short code identifier

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-deployment-failed-at)

object.deployment.failedAt

datetime

When the deployment failed

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-error-name)

object.error.name

string

Error name

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-error-message)

object.error.message

string

Error message

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-error-stack)

object.error.stack

string

Error stack trace (optional)

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-error-stderr)

object.error.stderr

string

Standard error output (optional)

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-id-2)

object.environment.id

string

Environment ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-type-2)

object.environment.type

string

Environment type (STAGING or PRODUCTION)

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-environment-slug-2)

object.environment.slug

string

Environment slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-id-2)

object.organization.id

string

Organization ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-slug-2)

object.organization.slug

string

Organization slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-organization-name-2)

object.organization.name

string

Organization name

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-id-2)

object.project.id

string

Project ID

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-ref-2)

object.project.ref

string

Project reference

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-slug-2)

object.project.slug

string

Project slug

[​](https://trigger.dev/docs/troubleshooting-alerts#param-object-project-name-2)

object.project.name

string

Project name

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/run-tests)
[ReplayingA replay is a copy of a run with the same payload but against the latest version in that environment. This is useful if something went wrong and you want to try again with the latest version of your code.\
\
Next](https://trigger.dev/docs/replaying)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
