# Compute private beta

> Source: https://trigger.dev/docs/compute-private-beta

MicroVM compute is in private beta. Use it in staging only - do not run production traffic on it yet, and expect bugs.

[​](https://trigger.dev/docs/compute-private-beta#what-it-is)

What it is
---------------------------------------------------------------------------

MicroVM compute is a new runtime for your tasks, designed for fast cold starts via boot snapshots. For most tasks the migration is transparent - the same task code runs unchanged.

[​](https://trigger.dev/docs/compute-private-beta#what%E2%80%99s-new)

What’s new
-----------------------------------------------------------------------------------

### 

[​](https://trigger.dev/docs/compute-private-beta#may-1-2026)

May 1, 2026

*   **Cold starts are faster across all machine sizes.** Every preset starts faster, including `micro` and `small-1x` - there’s no longer a cold-start penalty for picking a smaller machine.
*   **First runs after a deploy are faster on every preset.** Boot snapshot creation is significantly quicker across the board, so the cold path is consistently snappier.
*   **`large-1x` and `large-2x` no longer hard-fail.** They’re still not recommended - cold-start performance trails the smaller presets and we’re ironing out reliability issues.

[​](https://trigger.dev/docs/compute-private-beta#getting-access)

Getting access
-----------------------------------------------------------------------------------

You can’t opt in yourself. Once we’ve enabled the private beta for your org, the `us-east-1-next` region becomes available on the **Regions** page in the dashboard. If you’d like access, ping us on Slack.

[​](https://trigger.dev/docs/compute-private-beta#routing-runs-to-microvm-compute)

Routing runs to microVM compute
---------------------------------------------------------------------------------------------------------------------

MicroVM compute is exposed as a region: `us-east-1-next`. The region is tagged with a **microVM** badge on the **Regions** page.

### 

[​](https://trigger.dev/docs/compute-private-beta#per-trigger-override-recommended)

Per-trigger override (recommended)

The `region` option is part of `TriggerOptions`, accepted by most triggering functions.

    import { yourTask } from "./trigger/your-task";
    
    await yourTask.trigger(payload, { region: "us-east-1-next" });
    

This is the safest way to opt in during the beta - you control exactly which runs land on microVM compute. To gate it on an environment variable so prod isn’t affected, define one constant and reuse it at every call site:

    const defaultRegion = process.env.USE_COMPUTE_BETA === "1" ? "us-east-1-next" : undefined;
    
    await yourTask.trigger(payload, { region: defaultRegion });
    

Set `USE_COMPUTE_BETA=1` in the staging environment of the app that calls `trigger()` (typically Vercel, or wherever you deploy your app).

### 

[​](https://trigger.dev/docs/compute-private-beta#set-it-as-your-project-default)

Set it as your project default

Open the **Regions** page in the dashboard and set `us-east-1-next` as the project-wide default. This applies to **all environments in the project**, so only do this on a project that is running staging traffic only.

Switching the default region doesn’t move runs that are already in the queue - they stay in the previous region until they execute. To make a switch take effect for in-flight work, [cancel those runs](https://trigger.dev/docs/bulk-actions)
 and re-trigger them after changing the default. This applies whenever you change regions, not just when moving on or off `us-east-1-next`.

Setting `us-east-1-next` as your project default makes boot snapshot creation a required step at deploy time. Two things to expect:

*   Deploys take a bit longer (up to ~30 seconds extra) while the snapshot is built.
*   Deploys can fail if the snapshot step fails. This is by design - boot snapshot creation is what proves your deploy image can actually run on microVM compute. Retrying may succeed, but if it doesn’t please switch your default region back for a quick unblock and reach out to us on Slack.

[​](https://trigger.dev/docs/compute-private-beta#machine-sizes)

Machine sizes
---------------------------------------------------------------------------------

A few things to be aware of during the beta:

*   **`small-1x` is the default and what we’ve optimized for.** Boot snapshots are precreated for `small-1x` only - other sizes generate the snapshot lazily on first run after a deploy.
*   **`large-1x` and `large-2x` aren’t recommended yet.** They run, but cold-start times trail the smaller presets and we’re still ironing out reliability issues. Stick to other machine types for now and expect rough edges if you do try the large sizes.
*   **All sizes are capped at 1GB of disk during the beta.** The [machine size table](https://trigger.dev/docs/machines)
     lists 10GB as the target, but every preset is currently provisioned with 1GB regardless.

We’ll continue shipping fixes, performance, and reliability improvements during the beta. Compute-specific prereleases will be announced on this page as we go, and we’ll also reach out on Slack.

[​](https://trigger.dev/docs/compute-private-beta#reporting-issues)

Reporting issues
---------------------------------------------------------------------------------------

Send anything weird (errors, slow runs, restore failures, anything that surprises you) over Slack with the run ID. The more reproductions we get during the beta, the faster we harden it for public beta.

Was this page helpful?

YesNo

⌘I

Assistant

Responses are generated using AI and may contain mistakes.
