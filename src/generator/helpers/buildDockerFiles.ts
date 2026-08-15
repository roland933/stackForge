import { buildDocker } from "../builders/buildDocker";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildDockerFiles(config: StackForgeConfig) {

    return [
        {

            path: "backend/Dockerfile",
            content: buildDocker(config),

        }
    ]

}