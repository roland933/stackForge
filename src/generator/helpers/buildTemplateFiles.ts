import { packages } from "../registry/packages";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildTemplateFiles(
    config: StackForgeConfig
): Record<string, string> {

    const files: Record<string, string> = {};

    if (config.frontend.framework === "react") {
        Object.assign(files, packages.react.files);
    }

    if (config.frontend.router === "react-router") {
       Object.assign(files, packages.reactRouter.files);
    }

    if (config.frontend.stateManagement === "zustand") {
       Object.assign(files, packages.zustand.files);
    }

    return files;
}