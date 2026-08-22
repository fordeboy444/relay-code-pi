# modal.Error | Modal Docs

- **URL:** https://modal.com/docs/sdk/py/latest/modal.Error
- **Summary:** Base class for all Modal errors. See modal.exception for the specialized error classes.

Copy page

modal.Error
===========

    class Error(Exception)

Base class for all Modal errors. See [`modal.exception`](https://modal.com/docs/sdk/py/latest/modal.exception)
 for the specialized error classes.

**Usage**

    import modal
    
    try:
        ...
    except modal.Error:
        # Catch any exception raised by Modal's systems.
        print("Responding to error...")

[modal.Error](https://modal.com/docs/sdk/py/latest/modal.Error#modalerror)
