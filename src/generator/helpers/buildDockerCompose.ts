import { slugifyProjectName } from "../download";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildDockerCompose(config:StackForgeConfig) {
  const name = slugifyProjectName(config.project.name);
    return `
version: '2.2'

services:
  backend:
    build:
      context: ./backend
    container_name: ${name}
    volumes:
      - ./backend:/var/www
    depends_on:
      - db
    user: "1000:1000"
    ports:
    - "8080:8080"

  nginx:
    image: nginx:alpine
    container_name:  ${name}_nginx
    ports:
      - "8000:80"
    volumes:
      - ./backend:/var/www
      - ./nginx:/etc/nginx/conf.d
    depends_on:
      - backend

  db:
    image: mysql:8
    container_name: ${name}_mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: remedis
    ports:
      - "3306:3306"

  frontend:
    image: node:20
    container_name: ${name}_app
    working_dir: /app
    volumes:
      - ./frontend:/app
    ports:
      - "5173:5173"
    command: sh -c "npm install && npm run dev"

    
    `


}

