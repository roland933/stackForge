from fastapi import FastAPI

from app.routes.projects import router as projects_router

app = FastAPI(
    title="StackForge Local Agent",
    version="0.1.0",
)

app.include_router(projects_router)


@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "stackforge-agent",
    }