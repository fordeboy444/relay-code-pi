# Replaying

> Source: https://trigger.dev/docs/replaying

### 

[​](https://trigger.dev/docs/replaying#replaying-from-the-ui)

Replaying from the UI

*   From a run
    
*   Runs list
    

1

[](https://trigger.dev/docs/replaying#)

Click the Replay button in the top right

![Select a task, then in the bottom right\
click "Replay"](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/replay-run-action.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=baf3c7d6f105cc3208d5e9f34957ee33)

2

[](https://trigger.dev/docs/replaying#)

Confirm replay settings

You can edit the payload (if available) and choose the environment to replay the run in.![Select a task, then in the bottom right\
click "Replay"](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/replay-run-modal.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=39aa7ae272cbfb43d480db2e186ed885)

1

[](https://trigger.dev/docs/replaying#)

Click the action button on a run

![On the runs page, press the triple dot button](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/replay-runs-list.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=49aaa6bfaa1c1a3e2f7a37d0c8c0ccac)

2

[](https://trigger.dev/docs/replaying#)

Click replay

![Click replay](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/replay-runs-list-popover.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=f3a61382a15ee4515bd4cfaf35a397d2)

### 

[​](https://trigger.dev/docs/replaying#detecting-replays-in-your-task)

Detecting replays in your task

You can check if a run is a replay using the [context](https://trigger.dev/docs/context)
 object:

    export const myTask = task({
      id: "my-task",
      run: async (payload, { ctx }) => {
        if (ctx.run.isReplay) {
          // This run is a replay of a previous run
        }
      },
    });
    

### 

[​](https://trigger.dev/docs/replaying#replaying-using-the-sdk)

Replaying using the SDK

You can replay a run using the SDK:

    const replayedRun = await runs.replay(run.id);
    

When you call `trigger()` or `batchTrigger()` on a task you receive back a run handle which has an `id` property. You can use that `id` to replay the run. You can also access the run id from inside a run. You could write this to your database and then replay it later.

    export const simpleChildTask = task({
      id: "simple-child-task",
      run: async (payload, { ctx }) => {
        // the run ID (and other useful info) is in ctx
        const runId = ctx.run.id;
      },
    });
    

### 

[​](https://trigger.dev/docs/replaying#bulk-replaying)

Bulk replaying

See [Bulk actions](https://trigger.dev/docs/bulk-actions)
 for more information.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/troubleshooting-alerts)
[Bulk actionsPerform actions like replay and cancel on multiple runs at once.\
\
Next](https://trigger.dev/docs/bulk-actions)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
