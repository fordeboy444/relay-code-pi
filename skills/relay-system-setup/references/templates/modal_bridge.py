"""Modal bridge for relay-code.

External trigger sources (Airtable "Open URL" buttons, third-party webhooks,
manual HTTP calls) hit this bridge; it dispatches an HTTP trigger to the named
Trigger.dev task. Heavy work stays in the tasks — the bridge is stateless.

Each id in ALLOWED_TASKS MUST match a task id exported from src/trigger/*.ts.
Add row-scoped tasks to TASK_REQUIRES_RECORD_ID too. relay_add_task keeps these
sets in sync — never hand-edit them.

The rest of this file (the FastAPI body, _trigger_task, health route) is owned
by the modal-agent; this template is a minimal, deployable starting point.
"""
import os
from modal import App, Image, Secret, asgi_app

# Each id MUST match a task id exported from src/trigger/*.ts. Add row-scoped
# tasks to TASK_REQUIRES_RECORD_ID too. relay_add_task syncs both sets —
# never hand-edit them.
# "health-check" is scaffolded alongside src/trigger/health-check.ts so the
# dev worker has a starter task and relay_smoke_test has a target. Replace
# it (or remove + re-add via relay_add_task) once your first real
# automation is ready.
ALLOWED_TASKS: set[str] = {"health-check"}
TASK_REQUIRES_RECORD_ID: set[str] = set()

image = Image.debian_slim(python_version="3.11").pip_install("fastapi", "httpx")

app = App("REPLACE-ME-bridge", image=image)


@app.function(secrets=[Secret.from_dotenv(__file__, filename=".env.production")])
@asgi_app()
def web():
    from fastapi import FastAPI, HTTPException, Request
    import httpx

    api = FastAPI(title="relay-code bridge")

    @api.get("/health")
    async def health():
        return {"status": "ok", "allowed_tasks": sorted(ALLOWED_TASKS)}

    @api.post("/trigger/{task_id}")
    async def trigger(task_id: str, request: Request):
        if task_id not in ALLOWED_TASKS:
            raise HTTPException(status_code=404, detail=f"task {task_id!r} not in ALLOWED_TASKS")
        payload = await request.json()
        if task_id in TASK_REQUIRES_RECORD_ID:
            record_id = payload.get("recordId")
            if not isinstance(record_id, str) or not record_id.startswith("rec"):
                raise HTTPException(
                    status_code=400,
                    detail="row-scoped task requires a recordId starting with 'rec'",
                )

        base = os.environ.get("TRIGGER_BASE_URL", "https://api.trigger.dev")
        secret = os.environ["TRIGGER_SECRET_KEY"]
        async with httpx.AsyncClient(timeout=30) as client:
            r = await client.post(
                f"{base}/api/v1/tasks/{task_id}/trigger",
                headers={
                    "Authorization": f"Bearer {secret}",
                    "Content-Type": "application/json",
                },
                json=payload,
            )
        if r.status_code >= 400:
            raise HTTPException(
                status_code=502,
                detail=f"trigger.dev {r.status_code}: {r.text[:200]}",
            )
        return {"task": task_id, "trigger": r.json()}

    return api