# Context

> Source: https://trigger.dev/docs/context

Context (`ctx`) is a way to get information about a run.

The context object does not change whilst your code is executing. This means values like `ctx.run.durationMs` will be fixed at the moment the `run()` function is called.

[​](https://trigger.dev/docs/context#context-properties)

Context properties
------------------------------------------------------------------------------

[​](https://trigger.dev/docs/context#param-task)

task

object

Hide properties

[​](https://trigger.dev/docs/context#param-export-name)

exportName

string

The exported function name of the task e.g. `myTask` if you defined it like this: `export const myTask = task(...)`.

[​](https://trigger.dev/docs/context#param-id)

id

string

The ID of the task.

[​](https://trigger.dev/docs/context#param-file-path)

filePath

string

The file path of the task.

[​](https://trigger.dev/docs/context#param-attempt)

attempt

object

Show properties

[​](https://trigger.dev/docs/context#param-id-1)

id

string

The ID of the execution attempt.

[​](https://trigger.dev/docs/context#param-number)

number

number

The attempt number.

[​](https://trigger.dev/docs/context#param-started-at)

startedAt

date

The start time of the attempt.

[​](https://trigger.dev/docs/context#param-background-worker-id)

backgroundWorkerId

string

The ID of the background worker.

[​](https://trigger.dev/docs/context#param-background-worker-task-id)

backgroundWorkerTaskId

string

The ID of the background worker task.

[​](https://trigger.dev/docs/context#param-status)

status

string

The current status of the attempt.

[​](https://trigger.dev/docs/context#param-run)

run

object

Show properties

[​](https://trigger.dev/docs/context#param-id-2)

id

string

The ID of the task run.

[​](https://trigger.dev/docs/context#param-context)

context

any

The context of the task run.

[​](https://trigger.dev/docs/context#param-tags)

tags

array

An array of [tags](https://trigger.dev/docs/tags)
 associated with the task run.

[​](https://trigger.dev/docs/context#param-is-test)

isTest

boolean

Whether this is a [test run](https://trigger.dev/docs/run-tests)
.

[​](https://trigger.dev/docs/context#param-is-replay)

isReplay

boolean

Whether this run is a [replay](https://trigger.dev/docs/replaying)
 of a previous run.

[​](https://trigger.dev/docs/context#param-created-at)

createdAt

date

The creation time of the task run.

[​](https://trigger.dev/docs/context#param-started-at-1)

startedAt

date

The start time of the task run.

[​](https://trigger.dev/docs/context#param-idempotency-key)

idempotencyKey

string

An optional [idempotency key](https://trigger.dev/docs/idempotency)
 for the task run.

[​](https://trigger.dev/docs/context#param-max-attempts)

maxAttempts

number

The [maximum number of attempts](https://trigger.dev/docs/triggering#maxattempts)
 allowed for this task run.

[​](https://trigger.dev/docs/context#param-duration-ms)

durationMs

number

The duration of the task run in milliseconds when the `run()` function is called. For live values use the [usage SDK functions](https://trigger.dev/docs/run-usage)
.

[​](https://trigger.dev/docs/context#param-cost-in-cents)

costInCents

number

The cost of the task run in cents when the `run()` function is called. For live values use the [usage SDK functions](https://trigger.dev/docs/run-usage)
.

[​](https://trigger.dev/docs/context#param-base-cost-in-cents)

baseCostInCents

number

The base cost of the task run in cents when the `run()` function is called. For live values use the [usage SDK functions](https://trigger.dev/docs/run-usage)
.

[​](https://trigger.dev/docs/context#param-version)

version

string

The [version](https://trigger.dev/docs/versioning)
 of the task run.

[​](https://trigger.dev/docs/context#param-max-duration)

maxDuration

number

The [maximum allowed duration](https://trigger.dev/docs/runs/max-duration)
 for the task run.

[​](https://trigger.dev/docs/context#param-queue)

queue

object

Show properties

[​](https://trigger.dev/docs/context#param-id-3)

id

string

The ID of the queue.

[​](https://trigger.dev/docs/context#param-name)

name

string

The name of the queue.

[​](https://trigger.dev/docs/context#param-environment)

environment

object

Show properties

[​](https://trigger.dev/docs/context#param-id-4)

id

string

The ID of the environment.

[​](https://trigger.dev/docs/context#param-slug)

slug

string

The slug of the environment.

[​](https://trigger.dev/docs/context#param-type)

type

string

The type of the environment (PRODUCTION, STAGING, DEVELOPMENT, or PREVIEW).

[​](https://trigger.dev/docs/context#param-branch-name)

branchName

string

If the environment is `PREVIEW` then this will be the branch name.

[​](https://trigger.dev/docs/context#param-git)

git

object

Show properties

[​](https://trigger.dev/docs/context#param-commit-author-name)

commitAuthorName

string

The name of the commit author.

[​](https://trigger.dev/docs/context#param-commit-message)

commitMessage

string

The message of the commit.

[​](https://trigger.dev/docs/context#param-commit-ref)

commitRef

string

The ref of the commit.

[​](https://trigger.dev/docs/context#param-commit-sha)

commitSha

string

The SHA of the commit.

[​](https://trigger.dev/docs/context#param-dirty)

dirty

boolean

Whether the commit is dirty, i.e. there are uncommitted changes.

[​](https://trigger.dev/docs/context#param-remote-url)

remoteUrl

string

The remote URL of the repository.

[​](https://trigger.dev/docs/context#param-pull-request-number)

pullRequestNumber

number

The number of the pull request.

[​](https://trigger.dev/docs/context#param-pull-request-title)

pullRequestTitle

string

The title of the pull request.

[​](https://trigger.dev/docs/context#param-pull-request-state)

pullRequestState

string

The state of the pull request (open, closed, or merged).

[​](https://trigger.dev/docs/context#param-organization)

organization

object

Show properties

[​](https://trigger.dev/docs/context#param-id-5)

id

string

The ID of the organization.

[​](https://trigger.dev/docs/context#param-slug-1)

slug

string

The slug of the organization.

[​](https://trigger.dev/docs/context#param-name-1)

name

string

The name of the organization.

[​](https://trigger.dev/docs/context#param-project)

project

object

Show properties

[​](https://trigger.dev/docs/context#param-id-6)

id

string

The ID of the project.

[​](https://trigger.dev/docs/context#param-ref)

ref

string

The reference of the project.

[​](https://trigger.dev/docs/context#param-slug-2)

slug

string

The slug of the project.

[​](https://trigger.dev/docs/context#param-name-2)

name

string

The name of the project.

[​](https://trigger.dev/docs/context#param-batch)

batch

object

Optional information about the batch, if applicable.

Show properties

[​](https://trigger.dev/docs/context#param-id-7)

id

string

The ID of the batch.

[​](https://trigger.dev/docs/context#param-machine)

machine

object

Optional information about the machine preset used for execution.

Show properties

[​](https://trigger.dev/docs/context#param-name-3)

name

string

The name of the machine preset.

[​](https://trigger.dev/docs/context#param-cpu)

cpu

number

The CPU allocation for the machine.

[​](https://trigger.dev/docs/context#param-memory)

memory

number

The memory allocation for the machine.

[​](https://trigger.dev/docs/context#param-cents-per-ms)

centsPerMs

number

The cost in cents per millisecond for this machine preset.

Was this page helpful?

YesNo

[Previous](https://trigger.dev/docs/run-usage)
[PrioritySpecify a priority when triggering a run.\
\
Next](https://trigger.dev/docs/runs/priority)

Ctrl+I

Context example

import { task } from "@trigger.dev/sdk";
    
    export const parentTask = task({
      id: "parent-task",
      run: async (payload: { message: string }, { ctx }) => {
        if (ctx.environment.type === "DEVELOPMENT") {
          return;
        }
      },
    });

Assistant

Responses are generated using AI and may contain mistakes.
