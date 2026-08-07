import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildDevDependencies(
    config: StackForgeConfig
): Record<string, string> {

    const devDependencies: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(devDependencies, packages.react.devDependencies);
    }

    if (config.frontend.router === "react-router") {
       Object.assign(devDependencies, packages.reactRouter.devDependencies);
    }

    if (config.frontend.stateManagement === "zustand") {
       Object.assign(devDependencies, packages.zustand.devDependencies);
    }

    return devDependencies;
}