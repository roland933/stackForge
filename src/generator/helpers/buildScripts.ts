import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildScripts(
    config: StackForgeConfig
): Record<string, string> {

    const scripts: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(scripts, packages.react.scripts);
    }

    if (config.frontend.router === "react-router") {
       Object.assign(scripts, packages.reactRouter.scripts);
    }

    if (config.frontend.stateManagement === "zustand") {
       Object.assign(scripts, packages.zustand.scripts);
    }

    return scripts;
}