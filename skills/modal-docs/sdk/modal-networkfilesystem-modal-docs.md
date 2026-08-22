# modal.NetworkFileSystem | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem
- **Summary:** A shared, writable file system accessible by one or more Modal functions.

Copy page

modal.NetworkFileSystem
=======================

    class NetworkFileSystem(modal.object.Object)

A shared, writable file system accessible by one or more Modal functions.

By attaching this file system as a mount to one or more functions, they can share and persist data with each other.

**Note: `NetworkFileSystem` has been deprecated and will be removed.**

**Usage**

    import modal
    
    nfs = modal.NetworkFileSystem.from_name("my-nfs", create_if_missing=True)
    app = modal.App()
    
    @app.function(network_file_systems={"/root/foo": nfs})
    def f():
        pass
    
    @app.function(network_file_systems={"/root/goo": nfs})
    def g():
        pass

Also see the CLI methods for accessing network file systems:

    modal nfs --help

A `NetworkFileSystem` can also be useful for some local scripting scenarios, e.g.:

    nfs = modal.NetworkFileSystem.from_name("my-network-file-system")
    for chunk in nfs.read_file("my_db_dump.csv"):
        ...

hydrate 

    hydrate(self, client=None)

Synchronize the local object with its identity on the Modal server.

It is rarely necessary to call this method explicitly, as most operations will lazily hydrate when needed. The main use case is when you need to access object metadata, such as its ID.

_Added in v0.72.39_: This method replaces the deprecated `.resolve()` method.

from_name 

    from_name(name, *, environment_name=None, create_if_missing=False, client=None)

Reference a NetworkFileSystem by name, optionally creating it on the server first.

Hydration is lazy: metadata is fetched from Modal the first time the handle is used.

**Parameters**

name str

Deployment name of the network file system.

environment_name str | None

Environment to resolve the name in; defaults to the active environment.

create_if_missing bool

If True, create the object when it does not already exist. (Default is False)

client _Client | None

Modal client to use for loading; defaults to `Client.from_env()` when omitted.

**Returns**

A `NetworkFileSystem` handle (possibly not yet hydrated).

**Usage**

    nfs = NetworkFileSystem.from_name("my-nfs", create_if_missing=True)
    
    @app.function(network_file_systems={"/data": nfs})
    def f():
        pass

ephemeral 

    ephemeral(cls, client=None, environment_name=None)

Create an anonymous NetworkFileSystem that exists for the duration of the context manager.

**Parameters**

client _Client | None

Modal client to use; defaults to `Client.from_env()` when omitted.

environment_name str | None

Environment for the ephemeral object; defaults to the active environment.

**Usage**

    with modal.NetworkFileSystem.ephemeral() as nfs:
        assert nfs.listdir("/") == []

    async with modal.NetworkFileSystem.ephemeral() as nfs:
        assert await nfs.listdir("/") == []

delete 

    delete(name, client=None, environment_name=None)

write_file 

    write_file(self, remote_path, fp, progress_cb=None)

Write from a file object to a path on the network file system, atomically.

Will create any needed parent directories automatically.

If remote_path ends with `/` it’s assumed to be a directory and the file will be uploaded with its current name to that directory.

read_file 

    read_file(self, path)

Read a file from the network file system

iterdir 

    iterdir(self, path)

Iterate over all files in a directory in the network file system.

*   Passing a directory path lists all files in the directory (names are relative to the directory)
*   Passing a file path returns a list containing only that file’s listing description
*   Passing a glob path (including at least one \* or \*\* sequence) returns all files matching that glob path (using absolute paths)

add_local_file 

    add_local_file(self, local_path, remote_path=None, progress_cb=None)

add_local_dir 

    add_local_dir(self, local_path, remote_path=None, progress_cb=None)

listdir 

    listdir(self, path)

List all files in a directory in the network file system.

*   Passing a directory path lists all files in the directory (names are relative to the directory)
*   Passing a file path returns a list containing only that file’s listing description
*   Passing a glob path (including at least one \* or \*\* sequence) returns all files matching that glob path (using absolute paths)

remove_file 

    remove_file(self, path, recursive=False)

Remove a file in a network file system.

[modal.NetworkFileSystem](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#modalnetworkfilesystem)
[hydrate](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#hydrate)
[from_name](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#from_name)
[ephemeral](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#ephemeral)
[delete](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#delete)
[write_file](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#write_file)
[read_file](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#read_file)
[iterdir](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#iterdir)
[add_local_file](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#add_local_file)
[add_local_dir](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#add_local_dir)
[listdir](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#listdir)
[remove_file](https://modal.com/docs/sdk/py/latest/modal.NetworkFileSystem#remove_file)
