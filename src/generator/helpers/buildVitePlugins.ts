import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildVitePlugins(
    config: StackForgeConfig
): Record<string, string> {

    const plugins: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(plugins, packages.react);
    }

    if (config.frontend.router === "react-router") {
       Object.assign(plugins, packages.reactRouter);
    }

    if (config.frontend.stateManagement === "zustand") {
       Object.assign(plugins, packages.zustand);
    }

    return plugins;
}