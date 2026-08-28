# Priority

> Source: https://trigger.dev/docs/runs/priority

You can set a priority when you trigger a run. This allows you to prioritize some of your runs over others, so they are started sooner. This is very useful when:

*   You have critical work that needs to start more quickly (and you have long queues).
*   You want runs for your premium users to take priority over free users.

The value for priority is a time offset in seconds that determines the order of dequeuing. ![Priority runs](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/priority-runs.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=c1003b28761e476969bb0b226e589ec9) If you specify a priority of `10` the run will dequeue before runs that were triggered with no priority 8 seconds ago, like in this example:

    // no priority = 0
    await myTask.trigger({ foo: "bar" });
    
    //... imagine 8s pass by
    
    // this run will start before the run above that was triggered 8s ago (with no priority)
    await myTask.trigger({ foo: "bar" }, { priority: 10 });
    

If you passed a value of `3600` the run would dequeue before runs that were triggered an hour ago (with no priority).

Setting a high priority will not allow you to beat runs from other organizations. It will only affect the order of your own runs.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/context)
[Hidden tasksCreate tasks that are not exported from your trigger files but can still be executed.\
\
Next](https://trigger.dev/docs/hidden-tasks)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.

![Priority runs](https://mintcdn.com/trigger/5SxX7bFjJKRsidSL/images/priority-runs.png?w=2500&fit=max&auto=format&n=5SxX7bFjJKRsidSL&q=85&s=c1003b28761e476969bb0b226e589ec9)
