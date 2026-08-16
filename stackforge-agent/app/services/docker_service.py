import socket
import subprocess
import time
import urllib.request
from pathlib import Path


def is_port_available(port: int) -> bool:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
        return sock.connect_ex(("127.0.0.1", port)) != 0


def find_available_port(
    start_port: int = 5173,
    max_attempts: int = 20,
) -> int:

    for port in range(start_port, start_port + max_attempts):
        if is_port_available(port):
            return port

    raise RuntimeError("No available frontend port found.")


def write_env(project_path: Path, frontend_port: int):

    env_path = project_path / ".env"

    env_path.write_text(
        f"FRONTEND_PORT={frontend_port}\n",
        encoding="utf-8",
    )


def start_project(project_path: Path, frontend_port: int):

    print(f"Starting project: {project_path}")
    print(f"Frontend port: {frontend_port}")

    result = subprocess.run(
        ["docker-compose", "up", "-d"],
        cwd=project_path,
        capture_output=True,
        text=True,
    )

    print("Docker return code:", result.returncode)
    print("Docker stdout:")
    print(result.stdout)

    print("Docker stderr:")
    print(result.stderr)

    if result.returncode != 0:
        raise RuntimeError(
            result.stderr or
            result.stdout or
            "Docker Compose failed."
        )

    print("Docker Compose command finished.")

def wait_for_service(
    url: str,
    timeout: int = 60,
    interval: float = 1,
):
    print(f"Waiting for service: {url}")

    start_time = time.time()

    while time.time() - start_time < timeout:

        try:
            print(f"Checking: {url}")

            with urllib.request.urlopen(url, timeout=2) as response:
                print(f"Response: {response.status}")

                if response.status < 500:
                    print("Service is ready!")
                    return True

        except Exception as error:
            print(f"Not ready yet: {error}")

        time.sleep(interval)

    print("Service timeout!")

    return False