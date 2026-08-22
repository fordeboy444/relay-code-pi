# modal.container_process | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.container_process
- **Summary:** Represents a running process in a container.

Copy page

modal.container_process
========================

modal.container_process.ContainerProcess 

    class ContainerProcess(typing.Generic)

Represents a running process in a container.

Container processes communicate via direct communication with the Modal worker where the container is running.

    __init__(self, process_id, task_id, client, command_router_client,
        stdout=StreamType.PIPE, stderr=StreamType.PIPE, exec_deadline=None,
        text=True, by_line=False)

### stdout 

    stdout(self)

StreamReader for the container process’s stdout stream.

### stderr 

    stderr(self)

StreamReader for the container process’s stderr stream.

### stdin 

    stdin(self)

StreamWriter for the container process’s stdin stream.

### returncode 

    returncode(self)

### poll 

    poll(self)

Check if the container process has finished running.

Returns `None` if the process is still running, else returns the exit code.

### wait 

    wait(self)

Wait for the container process to finish running. Returns the exit code.

[modal.container_process](https://modal.com/docs/sdk/py/latest/modal.container_process#modalcontainer_process)
[ContainerProcess](https://modal.com/docs/sdk/py/latest/modal.container_process#modalcontainer_processcontainerprocess)
[stdout](https://modal.com/docs/sdk/py/latest/modal.container_process#stdout)
[stderr](https://modal.com/docs/sdk/py/latest/modal.container_process#stderr)
[stdin](https://modal.com/docs/sdk/py/latest/modal.container_process#stdin)
[returncode](https://modal.com/docs/sdk/py/latest/modal.container_process#returncode)
[poll](https://modal.com/docs/sdk/py/latest/modal.container_process#poll)
[wait](https://modal.com/docs/sdk/py/latest/modal.container_process#wait)
