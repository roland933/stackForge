import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildFastApiDockerCompose(config:StackForgeConfig) {
  
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

  frontend:
    image: node:20
    working_dir: /app
    volumes:
      - ./frontend:/app
    ports:
      - "\${FRONTEND_PORT}:5173"
    command: sh -c "npm install && npm run dev -- --host 0.0.0.0"
    `


}

