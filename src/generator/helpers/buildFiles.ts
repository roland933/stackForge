import { buildMain } from "../builders/main/buildMain";
import { buildPackageJson } from "../builders/packageJson";
import { buildViteConfig } from "../builders/viteConfig";
import { loadReactTemplates } from "../templates/loadReactTemplates";
import type { StackForgeConfig } from "../types/StackForgeConfig";
import { buildIndexCss } from "./buildIndexCss";

export function buildFiles(config: StackForgeConfig) {


    return [
        ...loadReactTemplates(),
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

        {
            path: "src/index.css",
            content: buildIndexCss(config),
        }

    ]
}