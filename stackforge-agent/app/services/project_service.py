from pathlib import Path

PROJECT_ROOT = Path.home() / "StackForge" / "projects"


def create_project(name: str, files: list[dict]) -> Path:
    project_path = PROJECT_ROOT / name

    project_path.mkdir(parents=True, exist_ok=True)

    for file in files:
        file_path = project_path / file["path"]

        # Biztonsági ellenőrzés
        resolved_path = file_path.resolve()

        if not resolved_path.is_relative_to(project_path.resolve()):
            raise ValueError("Invalid file path")

        resolved_path.parent.mkdir(parents=True, exist_ok=True)
        resolved_path.write_text(
            file["content"],
            encoding="utf-8",
        )

    return project_path