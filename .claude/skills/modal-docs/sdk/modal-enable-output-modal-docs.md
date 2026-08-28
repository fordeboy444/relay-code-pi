# modal.enable_output | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.enable_output
- **Summary:** Context manager that enable output when using the Python SDK.

Copy page

modal.enable_output
====================

    enable_output()

Context manager that enable output when using the Python SDK.

This will print to stdout and stderr things such as

1.  Logs from running functions
2.  Status of creating objects
3.  Map progress

**Usage**

    app = modal.App()
    with modal.enable_output():
        with app.run():
            ...

[modal.enable_output](https://modal.com/docs/sdk/py/latest/modal.enable_output#modalenable_output)
