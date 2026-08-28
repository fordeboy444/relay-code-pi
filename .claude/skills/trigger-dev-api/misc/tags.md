# Tags

> Source: https://trigger.dev/docs/tags

[​](https://trigger.dev/docs/tags#what-are-tags)

What are tags?
------------------------------------------------------------------

We support up to 10 tags per run. Each one must be a string between 1 and 128 characters long. We recommend prefixing your tags with their type and then an underscore or colon. For example, `user_123456` or `video:123`.

Many great APIs, like Stripe, already prefix their IDs with the type and an underscore. Like `cus_123456` for a customer.

We don’t enforce prefixes but if you use them you’ll find it easier to filter and it will be clearer what the tag represents.

[​](https://trigger.dev/docs/tags#how-to-add-tags)

How to add tags
---------------------------------------------------------------------

There are two ways to add tags to a run:

1.  When triggering the run.
2.  Inside the `run` function, using `tags.add()`.

### 

[​](https://trigger.dev/docs/tags#1-adding-tags-when-triggering-the-run)

1\. Adding tags when triggering the run

You can add tags when triggering a run using the `tags` option. All the different [trigger](https://trigger.dev/docs/triggering)
 methods support this.

trigger

batchTrigger

    const handle = await myTask.trigger(
      { message: "hello world" },
      { tags: ["user_123456", "org_abcdefg"] }
    );
    

This will create a run with the tags `user_123456` and `org_abcdefg`. They look like this in the runs table: ![How tags appear in the dashboard](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/tags-org-user.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=a1103011e76a5348c37d7ad32d38b4f1)

### 

[​](https://trigger.dev/docs/tags#2-adding-tags-inside-the-run-function)

2\. Adding tags inside the `run` function

Use the `tags.add()` function to add tags to a run from inside the `run` function. This will add the tag `product_1234567` to the run:

    import { task, tags } from "@trigger.dev/sdk";
    
    export const myTask = task({
      id: "my-task",
      run: async (payload: { message: string }, { ctx }) => {
        // Get the tags from when the run was triggered using the context
        // This is not updated if you add tags during the run
        logger.log("Tags from the run context", { tags: ctx.run.tags });
    
        // Add tags during the run (a single string or array of strings)
        await tags.add("product_1234567");
      },
    });
    

Reminder: you can only have up to 10 tags per run. If you call `tags.add()` and the total number of tags will be more than 10 we log an error and ignore the new tags. That includes tags from triggering and from inside the run function.

### 

[​](https://trigger.dev/docs/tags#propagating-tags-to-child-runs)

Propagating tags to child runs

Tags do not propagate to child runs automatically. By default runs have no tags and you have to set them explicitly. It’s easy to propagate tags if you want:

    export const myTask = task({
      id: "my-task",
      run: async (payload: Payload, { ctx }) => {
        // Pass the tags from ctx into the child run
        const { id } = await otherTask.trigger(
          { message: "triggered from myTask" },
          { tags: ctx.run.tags }
        );
      },
    });
    

[​](https://trigger.dev/docs/tags#filtering-runs-by-tags)

Filtering runs by tags
-----------------------------------------------------------------------------------

You can filter runs by tags in the dashboard and in the SDK.

### 

[​](https://trigger.dev/docs/tags#in-the-dashboard)

In the dashboard

On the Runs page open the filter menu, choose “Tags” and then start typing in the name of the tag you want to filter by. You can select it and it will restrict the results to only runs with that tag. You can add multiple tags to filter by more than one. ![Filter by tags](https://mintcdn.com/trigger/0bD0UfsjaINxS6Tw/images/tags-filtering.png?w=2500&fit=max&auto=format&n=0bD0UfsjaINxS6Tw&q=85&s=ac42f439de4fb4d28c09e68185c21f8b)

### 

[​](https://trigger.dev/docs/tags#using-runs-list)

Using `runs.list()`

You can provide filters to the `runs.list` SDK function, including an array of tags.

    import { runs } from "@trigger.dev/sdk";
    
    // Loop through all runs with the tag "user_123456" that have completed
    for await (const run of runs.list({ tag: "user_123456", status: ["COMPLETED"] })) {
      console.log(run.id, run.taskIdentifier, run.finishedAt, run.tags);
    }
    

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/runs/heartbeats)
[MetadataAttach structured data to a run and update it as the task progresses. Use metadata for progress tracking, user context, intermediate results, and more.\
\
Next](https://trigger.dev/docs/runs/metadata)

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
