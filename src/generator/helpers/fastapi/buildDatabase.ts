import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { getProject } from "@/helpers/getProject";

export function BuildDatabase(config: StackForgeConfig) {
    const project = getProject(config.project);

    return `from sqlalchemy import create_engine

DATABASE_URL = "postgresql+psycopg://postgres:postgres@database:5432/${project.getSlug()}"

engine = create_engine(DATABASE_URL)
`;
}