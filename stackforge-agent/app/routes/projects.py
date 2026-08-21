from fastapi import APIRouter, HTTPException

from app.schemas.project import CreateProjectRequest
from app.services.project_service import create_project
from app.services.docker_service import (
    find_available_port,
    start_project,
    write_env,
    start_frontend,
    wait_for_service,
    install_dependencies,
)
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

        frontend_port = find_available_port()
        write_env(
            project_path,
            frontend_port,
        )

        if request.has_backend:
            start_project(project_path, frontend_port)
        else:
            install_dependencies(project_path)
            start_frontend(project_path, frontend_port)

        frontend_ready = wait_for_service(
            f"http://127.0.0.1:{frontend_port}",
            timeout=300
        )

        if not frontend_ready:
            raise HTTPException(
            status_code=500,
            detail="Frontend failed to start within 5 minutes.",
             )


    except ValueError as error:
        raise HTTPException(
            status_code=400,
            detail=str(error),
        )

    except RuntimeError as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        )

    response = {
            "status": "ready",
            "project": request.name,
            "path": str(project_path),
            "frontend": f"http://localhost:{frontend_port}",
        }

    if request.has_backend:
            response["backend"] = "http://localhost:8000"

    return response


