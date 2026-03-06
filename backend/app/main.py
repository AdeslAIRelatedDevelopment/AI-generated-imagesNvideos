from fastapi import FastAPI

from .config import settings
from .db import init_db
from .routes import router

app = FastAPI(title="AI generated images/videos mock platform")


@app.on_event("startup")
def startup_event() -> None:
    for folder in ["uploads", "outputs", "zips", "logs", "db"]:
        (settings.data_dir / folder).mkdir(parents=True, exist_ok=True)
    init_db()


app.include_router(router)
