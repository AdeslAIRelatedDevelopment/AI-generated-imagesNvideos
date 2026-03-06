import random
import time
from pathlib import Path

from PIL import Image, ImageDraw
from sqlmodel import Session, select

from .celery_app import celery_app
from .config import settings
from .db import engine
from .models import Output, Task, utcnow


def _make_fake_png(path: Path, label: str) -> None:
    image = Image.new("RGB", (512, 512), color=(random.randint(20, 235), random.randint(20, 235), random.randint(20, 235)))
    draw = ImageDraw.Draw(image)
    draw.text((20, 20), label, fill=(255, 255, 255))
    image.save(path, format="PNG")


@celery_app.task(name="mock_generate_task")
def mock_generate_task(task_id: str):
    with Session(engine) as session:
        task = session.get(Task, task_id)
        if not task:
            return
        task.status = "running"
        task.started_at = utcnow()
        session.add(task)
        session.commit()

    try:
        time.sleep(random.uniform(3, 5))
        with Session(engine) as session:
            task = session.get(Task, task_id)
            if not task:
                return
            out_dir = settings.data_dir / "outputs" / task_id
            out_dir.mkdir(parents=True, exist_ok=True)

            for i in range(task.n_outputs):
                output_path = out_dir / f"output_{i+1}.png"
                _make_fake_png(output_path, f"task={task_id}\nidx={i+1}")
                output = Output(task_id=task_id, index=i + 1, file_path=str(output_path), mime_type="image/png")
                session.add(output)

            task.status = "done"
            task.finished_at = utcnow()
            session.add(task)
            session.commit()
    except Exception as exc:  # noqa: BLE001
        with Session(engine) as session:
            task = session.exec(select(Task).where(Task.id == task_id)).one_or_none()
            if task:
                task.status = "failed"
                task.error_message = str(exc)
                task.finished_at = utcnow()
                session.add(task)
                session.commit()
        raise
