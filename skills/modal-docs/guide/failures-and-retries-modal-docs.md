# Failures and retries | Modal Docs

- **URL:** https://modal.com/docs/guide/retries
- **Summary:** Failure is part of life. Sometimes you just have to retry. This guide page documents how to do this on Modal.

Copy page

Failures and retries
====================

Failure is part of life. Sometimes you just have to retry. This guide page documents how to do this on Modal.

For reference documentation on the `modal.Retries` object, see [this page](https://modal.com/docs/sdk/py/latest/modal.Retries)
.

Automatically recover from flakes with `retries` 

You can configure Modal to automatically retry Function failures if you set the `retries` option when declaring your Function:

    @app.function(retries=3)
    def my_flaky_function():
        pass

The basic configuration shown provides a fixed 1s delay between retry attempts. For fine-grained control over retry delays, including exponential backoff configuration, use [`modal.Retries`](https://modal.com/docs/sdk/py/latest/modal.Retries)
.

Handle failures in `Function.map` 

By default, failures are propagated back to the caller. To treat exceptions like successful results and aggregate them in the results list instead, pass in [`return_exceptions=True`](https://modal.com/docs/guide/scale#exceptions)
.

When used with [`Function.map()`](https://modal.com/docs/guide/scale#parallel-execution-of-inputs)
, each input is retried independently.

Container crashes 

If a `modal.Function` container crashes (either on start-up, e.g. while handling imports in global scope, or during execution, e.g. an out-of-memory error), Modal will reschedule the container and any work it was currently assigned.

For [ephemeral Apps](https://modal.com/docs/guide/apps#ephemeral-apps)
, container crashes will be retried until a failure rate is exceeded, after which all pending inputs will be failed and the exception will be propagated to the caller.

For [deployed Apps](https://modal.com/docs/guide/apps#deployed-apps)
, container crashes will be retried indefinitely, so as to not disrupt service. Modal will instead apply a crash-loop backoff and the rate of new container creation for the Function will be slowed down. Crash-looping containers are displayed in the [App dashboard](https://modal.com/apps)
.

[Failures and retries](https://modal.com/docs/guide/retries#failures-and-retries)
[Automatically recover from flakes with retries](https://modal.com/docs/guide/retries#automatically-recover-from-flakes-with-retries)
[Handle failures in Function.map](https://modal.com/docs/guide/retries#handle-failures-in-functionmap)
[Container crashes](https://modal.com/docs/guide/retries#container-crashes)
