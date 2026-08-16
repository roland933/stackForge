from pydantic import BaseModel, Field


class ProjectFile(BaseModel):
    path: str = Field(min_length=1)
    content: str


class CreateProjectRequest(BaseModel):
    name: str = Field(min_length=1)
    files: list[ProjectFile]