import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildDependencies(
    config: StackForgeConfig
): Record<string, string> {

    const dependencies: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(dependencies, packages.react);
    }

    if (config.frontend.router === "react-router") {
       Object.assign(dependencies, packages.reactRouter);
    }

    if (config.frontend.stateManagement === "zustand") {
       Object.assign(dependencies, packages.zustand);
    }

    return dependencies;
}