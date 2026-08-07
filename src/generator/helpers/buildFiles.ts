import { buildMain } from "../builders/main/buildMain";
import { buildPackageJson } from "../builders/packageJson";
import { buildViteConfig } from "../builders/viteConfig";
import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildFiles(config: StackForgeConfig) {


    return [
        {
            path: "package.json",
            content: buildPackageJson(config),
        },

        {
            path: "vite.config.ts",
            content: buildViteConfig(config),
        },

        {
            path: "src/main.tsx",
            content: buildMain(config),
        },

    ]
}