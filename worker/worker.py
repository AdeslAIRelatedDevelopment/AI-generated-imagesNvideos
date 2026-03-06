from backend.app.celery_app import celery_app
from backend.app import tasks  # noqa: F401

__all__ = ["celery_app"]
