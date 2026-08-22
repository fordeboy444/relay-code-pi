"""Fixture: the ALLOWED_TASKS / TASK_REQUIRES_RECORD_ID region of modal_bridge.py."""
import os
from modal import App, Image, Secret, asgi_app

# Each id MUST match a task id exported from src/trigger/*.ts. Add row-scoped
# tasks to TASK_REQUIRES_RECORD_ID too.
ALLOWED_TASKS: set[str] = set()
TASK_REQUIRES_RECORD_ID: set[str] = set()


app = App("REPLACE-ME-bridge", image=image)