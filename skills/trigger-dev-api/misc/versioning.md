# Versioning

> Source: https://trigger.dev/docs/versioning

A version is a bundle of tasks at a certain point in time.

[​](https://trigger.dev/docs/versioning#version-identifiers)

Version identifiers
-----------------------------------------------------------------------------------

Version identifiers look like this:

*   `20240313.1` - March 13th, 2024, version 1
*   `20240313.2` - March 13th, 2024, version 2
*   `20240314.1` - March 14th, 2024, version 1

You can see there are two parts to the version identifier:

*   The date (in reverse format)
*   The version number

Versions numbers are incremented each time a new version is created for that date and environment. So it’s possible to have `20240313.1` in both the `dev` and `prod` environments.

[​](https://trigger.dev/docs/versioning#version-locking)

Version locking
---------------------------------------------------------------------------

When a task run starts it is locked to the latest version of the code (for that environment). Once locked it won’t change versions, even if you deploy new versions. This is to ensure that a task run is not affected by changes to the code. Delayed runs are locked to the version that’s active when they begin executing, not when they’re enqueued.

### 

[​](https://trigger.dev/docs/versioning#child-tasks-and-version-locking)

Child tasks and version locking

Trigger and wait functions version lock child task runs to the parent task run version. This ensures the results from child runs match what the parent task is expecting. If you don’t wait then version locking doesn’t apply.

| Trigger function | Parent task version | Child task version | isLocked |
| --- | --- | --- | --- |
| `trigger()` | `20240313.2` | Latest | No  |
| `batchTrigger()` | `20240313.2` | Latest | No  |
| `triggerAndWait()` | `20240313.2` | `20240313.2` | Yes |
| `batchTriggerAndWait()` | `20240313.2` | `20240313.2` | Yes |

[​](https://trigger.dev/docs/versioning#local-development)

Local development
-------------------------------------------------------------------------------

When running the local server (using `npx trigger.dev dev`), every relevant code change automatically creates a new version of all tasks. So a task run will continue running on the version it was locked to. We do this by spawning a new process for each task run. This ensures that the task run is not affected by changes to the code.

[​](https://trigger.dev/docs/versioning#deployment)

Deployment
-----------------------------------------------------------------

Every deployment creates a new version of all tasks for that environment.

[​](https://trigger.dev/docs/versioning#retries-and-reattempts)

Retries and reattempts
-----------------------------------------------------------------------------------------

When a task has an uncaught error it will [retry](https://trigger.dev/docs/errors-retrying)
, assuming you have not set `maxAttempts` to 0. Retries are locked to the original version of the run.

[​](https://trigger.dev/docs/versioning#replays)

Replays
-----------------------------------------------------------

A “replay” is a new run of a task that uses the same inputs but will use the latest version of the code. This is useful when you fix a bug and want to re-run a task with the same inputs. See [replaying](https://trigger.dev/docs/replaying)
 for more information.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/queue-concurrency)
[MachinesConfigure the number of vCPUs and GBs of RAM you want the task to use.\
\
Next](https://trigger.dev/docs/machines)

Ctrl+I

Assistant

Responses are generated using AI and may contain mistakes.
