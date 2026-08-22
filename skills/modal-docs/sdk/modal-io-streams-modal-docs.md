# modal.io_streams | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.io_streams
- **Summary:** Retrieve logs from a stream (stdout or stderr).

Copy page

modal.io_streams
=================

modal.io_streams.StreamReader 

    class StreamReader(typing.Generic)

Retrieve logs from a stream (`stdout` or `stderr`).

As an asynchronous iterable, the object supports the `for` and `async for` statements. Just loop over the object to read in chunks.

### file_descriptor 

    file_descriptor(self)

Possible values are `1` for stdout and `2` for stderr.

### read 

    read(self)

Fetch the entire contents of the stream until EOF.

modal.io_streams.StreamWriter 

    class StreamWriter(object)

Provides an interface to buffer and write logs to a sandbox or container process stream (`stdin`).

### write 

    write(self, data)

Write data to the stream but does not send it immediately.

This is non-blocking and queues the data to an internal buffer. Must be used along with the `drain()` method, which flushes the buffer.

**Usage**

    proc = sandbox.exec(
        "bash",
        "-c",
        "while read line; do echo $line; done",
    )
    proc.stdin.write(b"foo\n")
    proc.stdin.write(b"bar\n")
    proc.stdin.write_eof()
    proc.stdin.drain()

### write_eof 

    write_eof(self)

Close the write end of the stream after the buffered data is drained.

If the process was blocked on input, it will become unblocked after `write_eof()`. This method needs to be used along with the `drain()` method, which flushes the EOF to the process.

### drain 

    drain(self)

Flush the write buffer and send data to the running process.

This is a flow control method that blocks until data is sent. It returns when it is appropriate to continue writing data to the stream.

**Usage**

    writer.write(data)
    writer.drain()

Async usage:

    writer.write(data)  # not a blocking operation
    await writer.drain.aio()

[modal.io_streams](https://modal.com/docs/sdk/py/latest/modal.io_streams#modalio_streams)
[StreamReader](https://modal.com/docs/sdk/py/latest/modal.io_streams#modalio_streamsstreamreader)
[file_descriptor](https://modal.com/docs/sdk/py/latest/modal.io_streams#file_descriptor)
[read](https://modal.com/docs/sdk/py/latest/modal.io_streams#read)
[StreamWriter](https://modal.com/docs/sdk/py/latest/modal.io_streams#modalio_streamsstreamwriter)
[write](https://modal.com/docs/sdk/py/latest/modal.io_streams#write)
[write_eof](https://modal.com/docs/sdk/py/latest/modal.io_streams#write_eof)
[drain](https://modal.com/docs/sdk/py/latest/modal.io_streams#drain)
