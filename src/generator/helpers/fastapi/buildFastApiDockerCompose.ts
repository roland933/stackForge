import { getProject } from "@/helpers/getProject";
import type { StackForgeConfig } from "../../types/StackForgeConfig";

function appendDatabase(config: StackForgeConfig) {
   
    return `
  database:
    image: postgres:16
    environment:
      POSTGRES_DB: ${getProject(config["project"]).getSlug()}
      POSTGRES_USER: ${config.database?.username}
      POSTGRES_PASSWORD: postgres
    ports:
      - "${config.database.port}:5432"
  pgadmin:
    image: dpage/pgadmin4
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@stackforge.dev
      PGADMIN_DEFAULT_PASSWORD: admin
    ports:
      - "5050:80"
`;
}

export function buildFastApiDockerCompose(config: StackForgeConfig) {
    return `
version: '2.2'

services:

  backend:
    build:
      context: ./backend
    volumes:
      - ./backend:/app
    user: "1000:1000"
    ports:
      - "8000:8000"
    command: uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload

  frontend:
    image: node:20
    working_dir: /app
    volumes:
      - ./frontend:/app
    ports:
      - "\${FRONTEND_PORT}:5173"
    command: sh -c "npm install && npm run dev -- --host 0.0.0.0"
${config.database ? appendDatabase(config) : ""}
`;
}