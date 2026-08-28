# modal run | Modal Docs

- **URL:** https://modal.com/docs/cli/latest/run
- **Summary:** Run a Modal function or local entrypoint.

Copy page

`modal run`
===========

Run a Modal function or local entrypoint.

`FUNC_REF` should be of the format `{file or module}::{function name}`. Alternatively, you can refer to the function via the app:

`{file or module}::{app variable name}.{function name}`

Examples:

To run the hello_world function (or local entrypoint) in my_app.py:

    modal run my_app.py::hello_world

If your module only has a single app and your app has a single local entrypoint (or single function), you can omit the app and function parts:

    modal run my_app.py

Instead of pointing to a file, you can also use the Python module path, which by default will ensure that your remote functions will use the same module names as they do locally.

    modal run -m my_project.my_app

**Usage**:

    modal run [OPTIONS] FUNC_REF

**Options**:

*   `-n, --name TEXT`: Name for this run of the App.
*   `-w, --write-result TEXT`: Write return value (which must be str or bytes) to this local path.
*   `-q, --quiet`: Don’t show Modal progress indicators.
*   `-d, --detach`: Don’t stop the app if the local process dies or disconnects.
*   `-i, --interactive`: Run the app in interactive mode.
*   `-e, --env TEXT`: Environment to interact with. If unspecified, defers to `MODAL_ENVIRONMENT`, your active local profile, or your workspace default, in that order.
*   `-m`: Interpret argument as a Python module path instead of a file/script path
*   `--timestamps`: Show timestamps for each log line.
*   `--help`: Show this message and exit.

[modal run](https://modal.com/docs/cli/latest/run#modal-run)
