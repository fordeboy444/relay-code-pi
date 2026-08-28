# modal.file_io | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.file_io
- **Summary:** Alpha FileIO handle, used in the Sandbox filesystem API.

Copy page

modal.file_io
==============

modal.file_io.FileIO 

    class FileIO(typing.Generic)

\[Alpha\] FileIO handle, used in the Sandbox filesystem API.

Deprecated on 2026-03-09. Use the `Sandbox.filesystem` APIs instead.

The API is designed to mimic Python’s io.FileIO.

Currently this API is in Alpha and is subject to change. File I/O operations may be limited in size to 100 MiB, and the throughput of requests is restricted in the current implementation. For our recommendations on large file transfers see the Sandbox [filesystem access guide](https://modal.com/docs/guide/sandbox-files)
.

**Usage**

    import modal
    
    app = modal.App.lookup("my-app", create_if_missing=True)
    
    sb = modal.Sandbox.create(app=app)
    f = sb.open("/tmp/foo.txt", "w")
    f.write("hello")
    f.close()

    __init__(self, client, task_id)

### create 

    create(cls, path, mode, client, task_id)

Create a new FileIO handle.

### read 

    read(self, n=None)

Read n bytes from the current position, or the entire remaining file if n is None.

### readline 

    readline(self)

Read a single line from the current position.

### readlines 

    readlines(self)

Read all lines from the current position.

### write 

    write(self, data)

Write data to the current position.

Writes may not appear until the entire buffer is flushed, which can be done manually with `flush()` or automatically when the file is closed.

### flush 

    flush(self)

Flush the buffer to disk.

### seek 

    seek(self, offset, whence=0)

Move to a new position in the file.

`whence` defaults to 0 (absolute file positioning); other values are 1 (relative to the current position) and 2 (relative to the file’s end).

### ls 

    ls(cls, path, client, task_id)

List the contents of the provided directory.

### mkdir 

    mkdir(cls, path, client, task_id, parents=False)

Create a new directory.

### rm 

    rm(cls, path, client, task_id, recursive=False)

Remove a file or directory in the Sandbox.

### watch 

    watch(cls, path, client, task_id, filter=None, recursive=False, timeout=None)

### close 

    close(self)

Flush the buffer and close the file.

modal.file_io.ls 

    ls(path, client, task_id)

List the contents of the provided directory.

modal.file_io.mkdir 

    mkdir(path, client, task_id, parents=False)

Create a new directory.

modal.file_io.rm 

    rm(path, client, task_id, recursive=False)

Remove a file or directory in the Sandbox.

modal.file_io.watch 

    watch(path, client, task_id, filter=None, recursive=False, timeout=None)

Watch a file or directory for changes.

[modal.file_io](https://modal.com/docs/sdk/py/latest/modal.file_io#modalfile_io)
[FileIO](https://modal.com/docs/sdk/py/latest/modal.file_io#modalfile_iofileio)
[create](https://modal.com/docs/sdk/py/latest/modal.file_io#create)
[read](https://modal.com/docs/sdk/py/latest/modal.file_io#read)
[readline](https://modal.com/docs/sdk/py/latest/modal.file_io#readline)
[readlines](https://modal.com/docs/sdk/py/latest/modal.file_io#readlines)
[write](https://modal.com/docs/sdk/py/latest/modal.file_io#write)
[flush](https://modal.com/docs/sdk/py/latest/modal.file_io#flush)
[seek](https://modal.com/docs/sdk/py/latest/modal.file_io#seek)
[ls](https://modal.com/docs/sdk/py/latest/modal.file_io#ls)
[mkdir](https://modal.com/docs/sdk/py/latest/modal.file_io#mkdir)
[rm](https://modal.com/docs/sdk/py/latest/modal.file_io#rm)
[watch](https://modal.com/docs/sdk/py/latest/modal.file_io#watch)
[close](https://modal.com/docs/sdk/py/latest/modal.file_io#close)
[ls](https://modal.com/docs/sdk/py/latest/modal.file_io#modalfile_iols)
[mkdir](https://modal.com/docs/sdk/py/latest/modal.file_io#modalfile_iomkdir)
[rm](https://modal.com/docs/sdk/py/latest/modal.file_io#modalfile_iorm)
[watch](https://modal.com/docs/sdk/py/latest/modal.file_io#modalfile_iowatch)
