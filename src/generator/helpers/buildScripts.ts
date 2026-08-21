import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildScripts(
    config: StackForgeConfig
): Record<string, string> {

    const scripts: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(
            scripts,
            packages.react.scripts
        );
    }

    for (const dependency of config.frontend.dependencies) {
        const packageConfig = packages[dependency.id];

        if (!packageConfig) continue;

        Object.assign(
            scripts,
            packageConfig.scripts
        );
    }

    return scripts;
}