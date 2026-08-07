
import { buildFiles } from "./helpers/buildFiles";
import type { GeneratedProject } from "./types/GeneratedProject";
import type { StackForgeConfig } from "./types/StackForgeConfig";

export function generate(
    config: StackForgeConfig
): GeneratedProject {

    return {

        projectName: config.project.name,

        packageManager:
            config.project.packageManager ?? "npm",



        files: buildFiles(config),

    };

}