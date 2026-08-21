import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildDockerCompose(config:StackForgeConfig) {
  
    return `
version: '2.2'

services:
  backend:
    build:
      context: ./backend
    volumes:
      - ./backend:/var/www
    depends_on:
      - db
    user: "1000:1000"
    ports:
    - "8080:8080"

  nginx:
    image: nginx:alpine
    ports:
      - "8000:80"
    volumes:
      - ./backend:/var/www
      - ./nginx:/etc/nginx/conf.d
    depends_on:
      - backend

  db:
    image: mysql:8
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: db
    ports:
      - "3306:3306"

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

