# Modal Vibe: A scalable AI coding platform | Modal Docs

- **URL:** https://modal.com/docs/examples/modal-vibe
- **Summary:** The Modal Vibe repo demonstrates how you can build a scalable AI coding platform on Modal.

Copy page

Modal Vibe: A scalable AI coding platform

 

The [Modal Vibe repo](https://github.com/modal-labs/modal-vibe)
 demonstrates how you can build a scalable AI coding platform on Modal.

Users of the application can prompt an LLM to create sandboxed applications that service React through a UI.

Each application lives on a [Modal Sandbox](https://modal.com/docs/guide/sandboxes)
 and contains a webserver accessible through [Modal Tunnels](https://modal.com/docs/guide/tunnels)
.

For a high-level overview of Modal Vibe, including performance numbers and why they matter, see [the accompanying blog post](https://modal.com/blog/modal-vibe)
. For details on the implementation, read on.

How it’s structured 

![Architecture diagram for Modal Vibe](https://modal-cdn.com/modal-vibe/architecture.png)

*   `main.py` is the entrypoint that runs the FastAPI controller that serves the web app and manages the sandbox apps.
*   `core` contains the logic for `SandboxApp` model and LLM logic.
*   `sandbox` contains a small HTTP server that gets put inside every Sandbox that’s created, as well as some sandbox lifecycle management code.
*   `web` contains the Modal Vibe website that users see and interact with, as well as the api server that manages Sandboxes.

How to run 

First, set up the local environment:

    python3 -m venv venv && source venv/bin/activate && pip install -r requirements.dev.txt

Copy

### Deploy 

To deploy to Modal, copy `.env.example` to a file called `.env` and add your `ANTHROPIC_API_KEY`. Also, create a [Modal Secret](https://modal.com/docs/guide/secrets)
 called `anthropic-secret` so our applications can access it.

Then, deploy the application with Modal:

    modal deploy -m main

Copy

### Local Development 

Run a load test:

    modal run main.py::create_app_loadtest_function --num-apps 10

Copy

Delete a sandbox:

    modal run main.py::delete_sandbox_admin_function --app-id <APP_ID>

Copy

Run an example sandbox HTTP server:

    python -m sandbox.server

Copy

[Modal Vibe: A scalable AI coding platform](https://modal.com/docs/examples/modal-vibe#modal-vibe-a-scalable-ai-coding-platform)
[How it’s structured](https://modal.com/docs/examples/modal-vibe#how-its-structured)
[How to run](https://modal.com/docs/examples/modal-vibe#how-to-run)
[Deploy](https://modal.com/docs/examples/modal-vibe#deploy)
[Local Development](https://modal.com/docs/examples/modal-vibe#local-development)
