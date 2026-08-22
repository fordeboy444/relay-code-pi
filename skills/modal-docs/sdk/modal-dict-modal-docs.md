# modal.Dict | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.Dict
- **Summary:** Distributed dictionary for storage in Modal apps.

Copy page

modal.Dict
==========

    class Dict(modal.object.Object)

Distributed dictionary for storage in Modal apps.

Dict contents can be essentially any object so long as they can be serialized by `cloudpickle`. This includes other Modal objects. If writing and reading in different environments (eg., writing locally and reading remotely), it’s necessary to have the library defining the data type installed, with compatible versions, on both sides. Additionally, cloudpickle serialization is not guaranteed to be deterministic, so it is generally recommended to use primitive types for keys.

**Lifetime of a Dict and its items**

An individual Dict entry will expire after 7 days of inactivity (no reads or writes). The Dict entries are written to durable storage.

Legacy Dicts (created before 2025-05-20) will still have entries expire 30 days after being last added. Additionally, contents are stored in memory on the Modal server and could be lost due to unexpected server restarts. Eventually, these Dicts will be fully sunset.

**Usage**

    from modal import Dict
    
    my_dict = Dict.from_name("my-persisted_dict", create_if_missing=True)
    
    my_dict["some key"] = "some value"
    my_dict[123] = 456
    
    assert my_dict["some key"] == "some value"
    assert my_dict[123] == 456

The `Dict` class offers a few methods for operations that are usually accomplished in Python with operators, such as `Dict.put` and `Dict.contains`. The advantage of these methods is that they can be safely called in an asynchronous context by using the `.aio` suffix on the method, whereas their operator-based analogues will always run synchronously and block the event loop.

For more examples, see the [guide](https://modal.com/docs/guide/dicts-and-queues#modal-dicts)
.

hydrate 

    hydrate(self, client=None)

Synchronize the local object with its identity on the Modal server.

It is rarely necessary to call this method explicitly, as most operations will lazily hydrate when needed. The main use case is when you need to access object metadata, such as its ID.

_Added in v0.72.39_: This method replaces the deprecated `.resolve()` method.

objects 

    objects: DictManager

Namespace with methods for managing named Dict objects.

### objects.create 

    create(self, name, *, allow_existing=False, environment_name=None, client=None)

Create a new named Dict in the workspace environment.

This does not return a local handle; use `modal.Dict.from_name` to look up the Dict after creation.

Added in v1.1.2.

**Parameters**

name str

Name for the new Dict.

allow_existing bool

If True, do nothing when a Dict with this name already exists. (Default is False)

environment_name str | None

Environment to create in; defaults to the active environment.

client _Client | None

Modal client to use; defaults to `Client.from_env()` when omitted.

**Usage**

    modal.Dict.objects.create("my-dict")

Dicts will be created in the active environment, or another one can be specified:

    modal.Dict.objects.create("my-dict", environment_name="dev")

By default, an error is raised if the Dict already exists; `allow_existing=True` makes that case a no-op:

    modal.Dict.objects.create("my-dict", allow_existing=True)

Note that this method does not return a local instance of the Dict. You can use `modal.Dict.from_name` to perform a lookup after creation.

### objects.list 

    list(self, *, max_objects=None, created_before=None, environment_name="",
        client=None)

List named Dicts in the workspace environment as hydrated handles.

Results are ordered newest to oldest. By default, all matching Dicts are returned.

Added in v1.1.2.

**Parameters**

max_objects int | None

Maximum number of Dicts to return.

created_before datetime | str | None

Only include Dicts created before this time (datetime or ISO date string).

environment_name str

Environment to list from; defaults to the active environment. (Default is "")

client _Client | None

Modal client to use; defaults to `Client.from_env()` when omitted.

**Returns**

Hydrated `Dict` objects for each named Dict in the listing.

**Usage**

    dicts = modal.Dict.objects.list()
    print([d.name for d in dicts])

Dicts will be retrieved from the active environment, or another one can be specified:

    dev_dicts = modal.Dict.objects.list(environment_name="dev")

By default, all named Dicts are returned, newest to oldest. It’s also possible to limit the number of results and to filter by creation date:

    dicts = modal.Dict.objects.list(max_objects=10, created_before="2025-01-01")

### objects.delete 

    delete(self, name, *, allow_missing=False, environment_name=None, client=None)

Delete a named Dict entirely (not a single key).

Deletion is irreversible and affects any Apps using this Dict.

Added in v1.1.2.

**Parameters**

name str

Name of the Dict to delete.

allow_missing bool

If True, do nothing when the Dict does not exist. (Default is False)

environment_name str | None

Environment to delete from; defaults to the active environment.

client _Client | None

Modal client to use; defaults to `Client.from_env()` when omitted.

**Usage**

    await modal.Dict.objects.delete("my-dict")

Dicts will be deleted from the active environment, or another one can be specified:

    await modal.Dict.objects.delete("my-dict", environment_name="dev")

name 

    name(self)

Name of the Dict object.

**Usage**

    d = modal.Dict.from_name("my-dict")
    print(d.name)

ephemeral 

    ephemeral(cls, *, client=None, environment_name=None)

Create an anonymous Dict that exists for the duration of the context manager.

**Parameters**

client _Client | None

Modal client to use; defaults to `Client.from_env()` when omitted.

environment_name str | None

Environment for the ephemeral Dict; defaults to the active environment.

**Usage**

    from modal import Dict
    
    with Dict.ephemeral() as d:
        d["foo"] = "bar"

    async with Dict.ephemeral() as d:
        await d.put.aio("foo", "bar")

from_name 

    from_name(name, *, environment_name=None, create_if_missing=False, client=None)

Reference a named Dict, optionally creating it on the server first.

Hydration is lazy: metadata is fetched from Modal the first time the handle is used.

**Parameters**

name str

Deployment name of the Dict.

environment_name str | None

Environment to resolve the name in; defaults to the active environment.

create_if_missing bool

If True, create the Dict when it does not already exist. (Default is False)

client _Client | None

Modal client to use for loading; defaults to `Client.from_env()` when omitted.

**Returns**

A `Dict` handle (possibly not yet hydrated).

**Usage**

    d = modal.Dict.from_name("my-dict", create_if_missing=True)
    d[123] = 456

from_id 

    from_id(dict_id, client=None)

Construct a Dict from an id and look up the Dict metadata.

This is a lazy method that defers hydrating the local object with metadata from Modal servers until the first time it is actually used.

The ID of a Dict object can be accessed using `.object_id`.

**Parameters**

dict_id str

Dict object ID to attach to.

client _Client | None

Modal client to use for loading; defaults to `Client.from_env()` when omitted.

**Returns**

A `Dict` handle (possibly not yet hydrated).

**Usage**

    @app.function()
    def my_worker(dict_id: str):
        d = modal.Dict.from_id(dict_id)
        d["key"] = "Hello from remote function!"
    
    with modal.Dict.ephemeral() as d:
        my_worker.remote(d.object_id)
        print(d["key"])  # "Hello from remote function!"

info 

    info(self)

Return information about the Dict object.

clear 

    clear(self)

Remove all items from the Dict.

get 

    get(self, key, default=None)

Get the value associated with a key.

Returns `default` if key does not exist.

contains 

    contains(self, key)

Return if a key is present.

len 

    len(self)

Return the length of the Dict.

Note: This is an expensive operation and will return at most 100,000.

update 

    update(self, other=None, **kwargs)

Update the Dict with additional items.

put 

    put(self, key, value, *, skip_if_exists=False)

Add a specific key-value pair to the Dict.

Returns True if the key-value pair was added and False if it wasn’t because the key already existed and `skip_if_exists` was set.

pop 

    pop(self, key, default=_NO_DEFAULT)

Remove a key from the Dict, returning the value if it exists.

If key is not found, return default if provided, otherwise raise KeyError.

keys 

    keys(self)

Return an iterator over the keys in this Dict.

Note that (unlike with Python dicts) the return value is a simple iterator, and results are unordered.

values 

    values(self)

Return an iterator over the values in this Dict.

Note that (unlike with Python dicts) the return value is a simple iterator, and results are unordered.

items 

    items(self)

Return an iterator over the (key, value) tuples in this Dict.

Note that (unlike with Python dicts) the return value is a simple iterator, and results are unordered.

[modal.Dict](https://modal.com/docs/sdk/py/latest/modal.Dict#modaldict)
[hydrate](https://modal.com/docs/sdk/py/latest/modal.Dict#hydrate)
[objects](https://modal.com/docs/sdk/py/latest/modal.Dict#objects)
[create](https://modal.com/docs/sdk/py/latest/modal.Dict#objectscreate)
[list](https://modal.com/docs/sdk/py/latest/modal.Dict#objectslist)
[delete](https://modal.com/docs/sdk/py/latest/modal.Dict#objectsdelete)
[name](https://modal.com/docs/sdk/py/latest/modal.Dict#name)
[ephemeral](https://modal.com/docs/sdk/py/latest/modal.Dict#ephemeral)
[from_name](https://modal.com/docs/sdk/py/latest/modal.Dict#from_name)
[from_id](https://modal.com/docs/sdk/py/latest/modal.Dict#from_id)
[info](https://modal.com/docs/sdk/py/latest/modal.Dict#info)
[clear](https://modal.com/docs/sdk/py/latest/modal.Dict#clear)
[get](https://modal.com/docs/sdk/py/latest/modal.Dict#get)
[contains](https://modal.com/docs/sdk/py/latest/modal.Dict#contains)
[len](https://modal.com/docs/sdk/py/latest/modal.Dict#len)
[update](https://modal.com/docs/sdk/py/latest/modal.Dict#update)
[put](https://modal.com/docs/sdk/py/latest/modal.Dict#put)
[pop](https://modal.com/docs/sdk/py/latest/modal.Dict#pop)
[keys](https://modal.com/docs/sdk/py/latest/modal.Dict#keys)
[values](https://modal.com/docs/sdk/py/latest/modal.Dict#values)
[items](https://modal.com/docs/sdk/py/latest/modal.Dict#items)
