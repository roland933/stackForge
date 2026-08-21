import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildDevDependencies(
    config: StackForgeConfig
): Record<string, string> {

    const devDependencies: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(
            devDependencies,
            packages.react.devDependencies
        );
    }

    for (const dependency of config.frontend.dependencies) {
        const packageConfig = packages[dependency.id];

        if (!packageConfig) continue;

        Object.assign(
            devDependencies,
            packageConfig.devDependencies
        );
    }

    return devDependencies;
}