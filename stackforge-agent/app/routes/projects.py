from fastapi import APIRouter, HTTPException

from app.schemas.project import CreateProjectRequest
from app.services.project_service import create_project

router = APIRouter(
    prefix="/projects",
    tags=["projects"],
)


@router.post("")
def create_project_endpoint(request: CreateProjectRequest):

    try:
        project_path = create_project(
            request.name,
            [file.model_dump() for file in request.files],
        )

    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )

    return {
        "status": "created",
        "project": request.name,
        "path": str(project_path),
    }