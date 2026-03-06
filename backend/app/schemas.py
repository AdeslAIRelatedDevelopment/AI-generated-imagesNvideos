from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class CreateTaskRequest(BaseModel):
    type: str = Field(default="image")
    request_text: str
    n_outputs: int = Field(default=1, ge=1, le=12)


class OutputResponse(BaseModel):
    id: str
    task_id: str
    index: int
    file_path: str
    mime_type: str
    created_at: datetime


class TaskResponse(BaseModel):
    id: str
    type: str
    status: str
    request_text: str
    prompt_final: Optional[str] = None
    model_name: Optional[str] = None
    n_outputs: int
    created_at: datetime
    started_at: Optional[datetime] = None
    finished_at: Optional[datetime] = None
    error_message: Optional[str] = None
    outputs: list[OutputResponse] = []
