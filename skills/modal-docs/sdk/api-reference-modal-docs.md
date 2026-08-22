# API Reference | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest
- **Summary:** Complete API reference for the Modal Python package. Documentation for App, Function, Image, Volume, and all Modal primitives.

Copy page

API Reference
=============

This is the API reference for the [`modal`](https://pypi.org/project/modal/)
 Python package, which allows you to run distributed applications on Modal.

The reference provides low-level descriptions of various programmatic functionality. If you’re just getting started with Modal, we would instead recommend looking at the [guide](https://modal.com/docs/guide)
 first or getting started with one of our [examples](https://modal.com/docs/examples)
.

Application construction 

|     |     |
| --- | --- |
| [`App`](https://modal.com/docs/sdk/py/latest/modal.App) | The main unit of deployment for code on Modal |
| [`App.function`](https://modal.com/docs/sdk/py/latest/modal.App#function) | Decorator for registering a function with an App |
| [`App.cls`](https://modal.com/docs/sdk/py/latest/modal.App#cls) | Decorator for registering a class with an App |
| [`App.server`](https://modal.com/docs/sdk/py/latest/modal.App#server) | Decorator for registering a server with an App |

Serverless execution 

|     |     |
| --- | --- |
| [`Function`](https://modal.com/docs/sdk/py/latest/modal.Function) | A serverless function backed by an autoscaling container pool |
| [`Cls`](https://modal.com/docs/sdk/py/latest/modal.Cls) | A serverless class supporting parametrization and lifecycle hooks |
| [`Server`](https://modal.com/docs/sdk/py/latest/modal.Server) | A serverless HTTP application with low-latency request routing |

Extended Function configuration 

### Class parametrization 

|     |     |
| --- | --- |
| [`parameter`](https://modal.com/docs/sdk/py/latest/modal.parameter) | Used to define class parameters, akin to a Dataclass field |

### Lifecycle hooks 

|     |     |
| --- | --- |
| [`enter`](https://modal.com/docs/sdk/py/latest/modal.enter) | Decorator for a method that will be executed during container startup |
| [`exit`](https://modal.com/docs/sdk/py/latest/modal.exit) | Decorator for a method that will be executed during container shutdown |
| [`method`](https://modal.com/docs/sdk/py/latest/modal.method) | Decorator for exposing a method as an invokable function |

### Web integrations 

|     |     |
| --- | --- |
| [`fastapi_endpoint`](https://modal.com/docs/sdk/py/latest/modal.fastapi_endpoint) | Decorator for exposing a simple FastAPI-based endpoint |
| [`asgi_app`](https://modal.com/docs/sdk/py/latest/modal.asgi_app) | Decorator for functions that construct an ASGI web application |
| [`wsgi_app`](https://modal.com/docs/sdk/py/latest/modal.wsgi_app) | Decorator for functions that construct a WSGI web application |
| [`web_server`](https://modal.com/docs/sdk/py/latest/modal.web_server) | Decorator for functions that construct an HTTP web server |

### Function semantics 

|     |     |
| --- | --- |
| [`batched`](https://modal.com/docs/sdk/py/latest/modal.batched) | Decorator that enables [dynamic input batching](https://modal.com/docs/guide/dynamic-batching) |
| [`concurrent`](https://modal.com/docs/sdk/py/latest/modal.concurrent) | Decorator that enables [input concurrency](https://modal.com/docs/guide/concurrent-inputs) |

### Scheduling 

|     |     |
| --- | --- |
| [`Cron`](https://modal.com/docs/sdk/py/latest/modal.Cron) | A schedule that runs based on cron syntax |
| [`Period`](https://modal.com/docs/sdk/py/latest/modal.Period) | A schedule that runs at a fixed interval |

### Exception handling 

|     |     |
| --- | --- |
| [`Retries`](https://modal.com/docs/sdk/py/latest/modal.Retries) | Function retry policy for input failures |

Sandboxed execution 

|     |     |
| --- | --- |
| [`Sandbox`](https://modal.com/docs/sdk/py/latest/modal.Sandbox) | An interface for restricted code execution |
| [`ContainerProcess`](https://modal.com/docs/sdk/py/latest/modal.container_process#modalcontainer_processcontainerprocess) | An object representing a sandboxed process |
| [`FileIO`](https://modal.com/docs/sdk/py/latest/modal.file_io#modalfile_iofileio) | A handle for a file in the Sandbox filesystem |

Container configuration 

|     |     |
| --- | --- |
| [`Image`](https://modal.com/docs/sdk/py/latest/modal.Image) | An API for specifying container images |
| [`Secret`](https://modal.com/docs/sdk/py/latest/modal.Secret) | A pointer to secrets that will be exposed as environment variables |

Data primitives 

### Persistent storage 

|     |     |
| --- | --- |
| [`Volume`](https://modal.com/docs/sdk/py/latest/modal.Volume) | Distributed storage supporting highly performant parallel reads |
| [`CloudBucketMount`](https://modal.com/docs/sdk/py/latest/modal.CloudBucketMount) | Storage backed by a third-party cloud bucket (S3, etc.) |

### In-memory storage 

|     |     |
| --- | --- |
| [`Dict`](https://modal.com/docs/sdk/py/latest/modal.Dict) | A distributed key-value store |
| [`Queue`](https://modal.com/docs/sdk/py/latest/modal.Queue) | A distributed FIFO queue |

Account configuration 

|     |     |
| --- | --- |
| [`Workspace`](https://modal.com/docs/sdk/py/latest/modal.Workspace) | Workspace-level configuration and observability |
| [`Environment`](https://modal.com/docs/sdk/py/latest/modal.Environment) | Manage workspace subdivisions |

Networking 

|     |     |
| --- | --- |
| [`Proxy`](https://modal.com/docs/sdk/py/latest/modal.Proxy) | An object that provides a static outbound IP address for containers |
| [`forward`](https://modal.com/docs/sdk/py/latest/modal.forward) | A context manager for publicly exposing a port from a container |

[API Reference](https://modal.com/docs/sdk/py/latest#api-reference)
[Application construction](https://modal.com/docs/sdk/py/latest#application-construction)
[Serverless execution](https://modal.com/docs/sdk/py/latest#serverless-execution)
[Extended Function configuration](https://modal.com/docs/sdk/py/latest#extended-function-configuration)
[Class parametrization](https://modal.com/docs/sdk/py/latest#class-parametrization)
[Lifecycle hooks](https://modal.com/docs/sdk/py/latest#lifecycle-hooks)
[Web integrations](https://modal.com/docs/sdk/py/latest#web-integrations)
[Function semantics](https://modal.com/docs/sdk/py/latest#function-semantics)
[Scheduling](https://modal.com/docs/sdk/py/latest#scheduling)
[Exception handling](https://modal.com/docs/sdk/py/latest#exception-handling)
[Sandboxed execution](https://modal.com/docs/sdk/py/latest#sandboxed-execution)
[Container configuration](https://modal.com/docs/sdk/py/latest#container-configuration)
[Data primitives](https://modal.com/docs/sdk/py/latest#data-primitives)
[Persistent storage](https://modal.com/docs/sdk/py/latest#persistent-storage)
[In-memory storage](https://modal.com/docs/sdk/py/latest#in-memory-storage)
[Account configuration](https://modal.com/docs/sdk/py/latest#account-configuration)
[Networking](https://modal.com/docs/sdk/py/latest#networking)
