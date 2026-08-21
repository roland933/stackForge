import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildDependencies(
    config: StackForgeConfig
): Record<string, string> {

    const dependencies: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(
            dependencies,
            packages.react.dependencies
        );
    }

    for (const dependency of config.frontend.dependencies) {
        const packageConfig = packages[dependency.id];

        if (!packageConfig) continue;

        Object.assign(
            dependencies,
            packageConfig.dependencies
        );
    }

    return dependencies;
}