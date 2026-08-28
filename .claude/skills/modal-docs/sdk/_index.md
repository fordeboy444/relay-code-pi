# Sdk

Decorator for registering a WSGI app with a Modal function. Synchronize the local object with its identity on the Modal server. Decorator that registers an HTTP web server inside the container.

## Pages in this folder

| Page | Local file | Summary |
| --- | --- | --- |
| modal.wsgi_app \| Modal Docs | [modal-wsgi-app-modal-docs.md](modal-wsgi-app-modal-docs.md) | Decorator for registering a WSGI app with a Modal function. |
| modal.Workspace \| Modal Docs | [modal-workspace-modal-docs.md](modal-workspace-modal-docs.md) | Synchronize the local object with its identity on the Modal server. |
| modal.web_server \| Modal Docs | [modal-web-server-modal-docs.md](modal-web-server-modal-docs.md) | Decorator that registers an HTTP web server inside the container. |
| modal.Volume \| Modal Docs | [modal-volume-modal-docs.md](modal-volume-modal-docs.md) | A writeable volume that can be used to share files between one or more Modal functions. |
| modal.Tunnel \| Modal Docs | [modal-tunnel-modal-docs.md](modal-tunnel-modal-docs.md) | A port forwarded from within a running Modal container. Created by modal.forward(). |
| modal.Server \| Modal Docs | [modal-server-modal-docs.md](modal-server-modal-docs.md) | Server runs an HTTP server started in an @modal.enter method. |
| modal.Secret \| Modal Docs | [modal-secret-modal-docs.md](modal-secret-modal-docs.md) | Secrets provide a dictionary of environment variables for images. |
| modal.SandboxSnapshot \| Modal Docs | [modal-sandboxsnapshot-modal-docs.md](modal-sandboxsnapshot-modal-docs.md) | Sandbox memory snapshots are in early preview. |
| modal.Sandbox \| Modal Docs | [modal-sandbox-modal-docs.md](modal-sandbox-modal-docs.md) | A Sandbox object lets you interact with a running sandbox. This API is similar to Python’s asyncio.subprocess.Process. |
| modal.Retries \| Modal Docs | [modal-retries-modal-docs.md](modal-retries-modal-docs.md) | Adds a retry policy to a Modal function. |
| modal.Queue \| Modal Docs | [modal-queue-modal-docs.md](modal-queue-modal-docs.md) | Distributed, FIFO queue for data flow in Modal apps. |
| modal.Proxy \| Modal Docs | [modal-proxy-modal-docs.md](modal-proxy-modal-docs.md) | Proxy objects give your Modal containers a static outbound IP address. |
| modal.Probe \| Modal Docs | [modal-probe-modal-docs.md](modal-probe-modal-docs.md) | Probe configuration for the Sandbox Readiness Probe. |
| modal.Period \| Modal Docs | [modal-period-modal-docs.md](modal-period-modal-docs.md) | Create a schedule that runs every given time interval. |
| modal.parameter \| Modal Docs | [modal-parameter-modal-docs.md](modal-parameter-modal-docs.md) | Used to specify options for modal.cls parameters, similar to dataclass.field for dataclasses |
| modal.NetworkFileSystem \| Modal Docs | [modal-networkfilesystem-modal-docs.md](modal-networkfilesystem-modal-docs.md) | A shared, writable file system accessible by one or more Modal functions. |
| modal.method \| Modal Docs | [modal-method-modal-docs.md](modal-method-modal-docs.md) | Decorator for methods that should be transformed into a Modal Function registered against this class’s App. |
| modal.is_local \| Modal Docs | [modal-is-local-modal-docs.md](modal-is-local-modal-docs.md) | Indicate the execution context of the current process. |
| modal.io_streams \| Modal Docs | [modal-io-streams-modal-docs.md](modal-io-streams-modal-docs.md) | Retrieve logs from a stream (stdout or stderr). |
| modal.interact \| Modal Docs | [modal-interact-modal-docs.md](modal-interact-modal-docs.md) | Enable interactivity with user input inside a Modal container. |
| modal.Image \| Modal Docs | [modal-image-modal-docs.md](modal-image-modal-docs.md) | Base class for container images to run functions in. |
| modal.FunctionCall \| Modal Docs | [modal-functioncall-modal-docs.md](modal-functioncall-modal-docs.md) | A reference to an executed function call. |
| modal.Function \| Modal Docs | [modal-function-modal-docs.md](modal-function-modal-docs.md) | Functions are the basic units of serverless execution on Modal. |
| modal.forward \| Modal Docs | [modal-forward-modal-docs.md](modal-forward-modal-docs.md) | Expose a port publicly from inside a running Modal container, with TLS. |
| modal.FilePatternMatcher \| Modal Docs | [modal-filepatternmatcher-modal-docs.md](modal-filepatternmatcher-modal-docs.md) | Allows matching file Path objects against a list of patterns. |
| modal.file_io \| Modal Docs | [modal-file-io-modal-docs.md](modal-file-io-modal-docs.md) | Alpha FileIO handle, used in the Sandbox filesystem API. |
| modal.fastapi_endpoint \| Modal Docs | [modal-fastapi-endpoint-modal-docs.md](modal-fastapi-endpoint-modal-docs.md) | Create a Web Function that can be addressed via HTTP at a public URL. |
| modal.exit \| Modal Docs | [modal-exit-modal-docs.md](modal-exit-modal-docs.md) | Decorator for methods which should be executed when a container is about to exit. |
| modal.exception \| Modal Docs | [modal-exception-modal-docs.md](modal-exception-modal-docs.md) | Modal-specific exception types. |
| modal.Error \| Modal Docs | [modal-error-modal-docs.md](modal-error-modal-docs.md) | Base class for all Modal errors. See modal.exception for the specialized error classes. |
| modal.Environment \| Modal Docs | [modal-environment-modal-docs.md](modal-environment-modal-docs.md) | Synchronize the local object with its identity on the Modal server. |
| modal.enter \| Modal Docs | [modal-enter-modal-docs.md](modal-enter-modal-docs.md) | Decorator for methods which should be executed when a new container is started. |
| modal.enable_output \| Modal Docs | [modal-enable-output-modal-docs.md](modal-enable-output-modal-docs.md) | Context manager that enable output when using the Python SDK. |
| modal.Dict \| Modal Docs | [modal-dict-modal-docs.md](modal-dict-modal-docs.md) | Distributed dictionary for storage in Modal apps. |
| modal.current_input_id \| Modal Docs | [modal-current-input-id-modal-docs.md](modal-current-input-id-modal-docs.md) | Returns the input ID for the current input. |
| modal.current_function_call_id \| Modal Docs | [modal-current-function-call-id-modal-docs.md](modal-current-function-call-id-modal-docs.md) | Returns the function call ID for the current input. |
| modal.Cron \| Modal Docs | [modal-cron-modal-docs.md](modal-cron-modal-docs.md) | Cron jobs are a type of schedule, specified using the Unix cron tab syntax. |
| modal.container_process \| Modal Docs | [modal-container-process-modal-docs.md](modal-container-process-modal-docs.md) | Represents a running process in a container. |
| modal.config \| Modal Docs | [modal-config-modal-docs.md](modal-config-modal-docs.md) | Modal intentionally keeps configurability to a minimum. |
| modal.concurrent \| Modal Docs | [modal-concurrent-modal-docs.md](modal-concurrent-modal-docs.md) | Decorator that allows individual containers to handle multiple inputs concurrently. |
| modal.Cls \| Modal Docs | [modal-cls-modal-docs.md](modal-cls-modal-docs.md) | Cls adds method pooling and lifecycle hook behavior to modal.Function. |
| modal.CloudBucketMount \| Modal Docs | [modal-cloudbucketmount-modal-docs.md](modal-cloudbucketmount-modal-docs.md) | Mounts a cloud bucket to your container. Currently supports AWS S3 buckets. |
| modal.Client \| Modal Docs | [modal-client-modal-docs.md](modal-client-modal-docs.md) | Check if the client is closed. |
| modal.call_graph \| Modal Docs | [modal-call-graph-modal-docs.md](modal-call-graph-modal-docs.md) | Simple data structure storing information about a function input. |
| modal.billing \| Modal Docs | [modal-billing-modal-docs.md](modal-billing-modal-docs.md) | BillingReportItem(object_id: str, description: str, environment_name: str, interval_start: datetime.datetime, cost: decimal.Decimal, cost_by_resource: dictstr, decimal.Decimal, tags: dictstr, str) |
| modal.batched \| Modal Docs | [modal-batched-modal-docs.md](modal-batched-modal-docs.md) | Decorator for functions or class methods that should be batched. |
| modal.asgi_app \| Modal Docs | [modal-asgi-app-modal-docs.md](modal-asgi-app-modal-docs.md) | Decorator for registering an ASGI app as a Web Function. |
| modal.App \| Modal Docs | [modal-app-modal-docs.md](modal-app-modal-docs.md) | A Modal App is a group of functions and classes that are deployed together. |
| Changelog \| Modal Docs | [changelog-modal-docs.md](changelog-modal-docs.md) | This changelog documents user-facing updates (features, enhancements, fixes, and deprecations) to the modal client library. |
| API Reference \| Modal Docs | [api-reference-modal-docs.md](api-reference-modal-docs.md) | Complete API reference for the Modal Python package. Documentation for App, Function, Image, Volume, and all Modal primitives. |
