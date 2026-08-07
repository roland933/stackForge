import { buildDependencies } from "../helpers/buildDependencies";
import { buildDevDependencies } from "../helpers/buildDevDependencies";
import { buildScripts } from "../helpers/buildScripts";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildPackageJson(
    config: StackForgeConfig
): string {

    const dependencies = buildDependencies(config);
    const devDependencies = buildDevDependencies(config);
    const scripts = buildScripts(config)

    return JSON.stringify({
        name: config.project.name || "my-project",
        private: true,
        version: "0.0.0",
        dependencies,
        devDependencies,
        scripts

    }, null, 2);

}