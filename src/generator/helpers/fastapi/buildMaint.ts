import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

function appendDatabaseImport() {
    return `
from sqlalchemy import text
from app.database import engine
`;
}

function appendHealthDbEndpoint() {
    return `
@app.get("/health/db")
def database_health():
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))

    return {
        "status": "ok",
        "database": "connected",
    }
`;
}

export function BuildMain(config: StackForgeConfig) {

    return `from fastapi import FastAPI
${config.backend.database ? appendDatabaseImport() : ""}

app = FastAPI()
${config.backend.database ? appendHealthDbEndpoint() : ""}
`;
}