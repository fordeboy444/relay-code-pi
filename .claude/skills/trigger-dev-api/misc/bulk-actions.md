# Bulk actions

> Source: https://trigger.dev/docs/bulk-actions

Bulk actions allow you to perform replaying and canceling on multiple runs at once. This is especially useful when you need to retry a batch of failed runs with a new version of your code, or when you need to cancel multiple in-progress runs.

[​](https://trigger.dev/docs/bulk-actions#how-to-create-a-new-bulk-action)

How to create a new bulk action
-------------------------------------------------------------------------------------------------------------

Open the bulk action panel from the top right of the runs page ![Access bulk actions](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/bulk-action-open-panel.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=a27ba4f0c162eedea68d4aa30fea586d) Filter the runs table to show the runs you want to bulk action Alternatively, you can select individual runs Choose the runs you want to bulk action Name your bulk action (optional) Choose the action you want to perform, replay or cancel Click the “Replay” or “Cancel” button and confirm in the dialog ![Access bulk actions](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/bulk-action-create.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=6803e8104f4d87f836cf33c62b62a8d1) You’ll now view the bulk action processing from the bulk action page You can replay or view the runs from this page ![Access bulk actions](https://mintcdn.com/trigger/uys6iMwf9B_ojh8r/images/bulk-action-page.png?w=2500&fit=max&auto=format&n=uys6iMwf9B_ojh8r&q=85&s=0efccaacafe8c9b650ff5beee3f8b82e)

You can only cancel runs that are in states that allow cancellation (like QUEUED or EXECUTING). Runs that are already completed, failed, or in other final states by the time the bulk action process gets to them, cannot be canceled.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/replaying)
[Common problemsSome common problems you might experience and their solutions\
\
Next](https://trigger.dev/docs/troubleshooting)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
