# Hidden tasks

> Source: https://trigger.dev/docs/hidden-tasks

Hidden tasks are tasks that are not exported from your trigger files but can still be executed. These tasks are only accessible to other tasks within the same file or module where they’re defined.

trigger/my-task.ts

    import { task } from "@trigger.dev/sdk";
    
    // This is a hidden task - not exported
    const internalTask = task({
      id: "internal-processing",
      run: async (payload: any, { ctx }) => {
        // Internal processing logic
      },
    });
    

Hidden tasks are useful for creating internal workflows that should only be triggered by other tasks in the same file:

trigger/my-workflow.ts

    import { task } from "@trigger.dev/sdk";
    
    // Hidden task for internal use
    const processData = task({
      id: "process-data",
      run: async (payload: { data: string }, { ctx }) => {
        // Process the data
        return { processed: payload.data.toUpperCase() };
      },
    });
    
    // Public task that uses the hidden task
    export const mainWorkflow = task({
      id: "main-workflow",
      run: async (payload: any, { ctx }) => {
        const result = await processData.trigger({ data: payload.input });
        return result;
      },
    });
    

You can also create packages of reusable tasks that can be imported and used without needing to re-export them:

trigger/my-task.ts

    import { task } from "@trigger.dev/sdk";
    import { sendToSlack } from "@repo/tasks"; // Hidden task from another package
    
    export const notificationTask = task({
      id: "send-notification",
      run: async (payload: any, { ctx }) => {
        await sendToSlack.trigger(payload);
      },
    });
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/runs/priority)
[OverviewDurable multi-turn AI chats — one Trigger.dev task per conversation, surviving refreshes, deploys, and crashes.\
\
Next](https://trigger.dev/docs/ai-chat/overview)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
