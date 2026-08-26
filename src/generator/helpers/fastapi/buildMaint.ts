import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

function appendCorsMiddleware() {
    return `
from fastapi.middleware.cors import CORSMiddleware
`;
}

function appendCorsConfig() {
    return `
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
`;
}

function appendDatabaseImport() {
    return `
from sqlalchemy import text
from app.database import engine
`;
}

function appendHealthEndpoint() {
    return `
@app.get("/health")
def health():
    return {
        "status": "ok",
        "service": "FastAPI",
    }
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
    const hasDatabase = !!config.database;

    return `from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
${hasDatabase ? appendDatabaseImport() : ""}

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5174"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

${appendHealthEndpoint()}
${hasDatabase ? appendHealthDbEndpoint() : ""}
`;
}