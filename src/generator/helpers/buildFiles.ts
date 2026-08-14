import { buildMain } from "../builders/main/buildMain";
import { buildPackageJson } from "../builders/packageJson";
import { buildViteConfig } from "../builders/viteConfig";
import { loadLaravelTemplates } from "../templates/loadLaravelTemplates";
import { loadReactTemplates } from "../templates/loadReactTemplates";
import type { StackForgeConfig } from "../types/StackForgeConfig";
import { buildDockerCompose } from "./buildDockerCompose";
import { buildIndexCss } from "./buildIndexCss";
export function buildFiles(config: StackForgeConfig) {

    const hasBackend = !!config.backend.framework;
    const frontendRoot = hasBackend ? "frontend" : "";

    const files = [
        ...loadReactTemplates(),

        {
            path: `${frontendRoot ? frontendRoot + "/" : ""}package.json`,
            content: buildPackageJson(config),
        },

        {
            path: `${frontendRoot ? frontendRoot + "/" : ""}vite.config.ts`,
            content: buildViteConfig(config),
        },

        {
            path: `${frontendRoot ? frontendRoot + "/" : ""}src/main.tsx`,
            content: buildMain(config),
        },

        {
            path: `${frontendRoot ? frontendRoot + "/" : ""}src/index.css`,
            content: buildIndexCss(config),
        },
    ];

    if (config.backend.framework === "laravel") {
        files.push(
            ...loadLaravelTemplates()
        );

        files.push(
            {
                path: "docker-compose.yml",
                content: buildDockerCompose(config),
            }
        );
    }

    return files;
}