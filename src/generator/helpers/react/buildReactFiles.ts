import { buildMain } from "@/generator/builders/main/buildMain";
import { buildPackageJson } from "@/generator/builders/packageJson";
import { buildViteConfig } from "@/generator/builders/viteConfig";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { buildIndexCss } from "../buildIndexCss";
import { buildReactApi } from "./buildReactApi";
import { buildReactApp } from "../buildReactApp";
import { getFrontend } from "@/helpers/getFronted";
import { buildReactQuery } from "./buildReactQuery";


export function buildReactFiles(config: StackForgeConfig) {

    const hasBackend = !!config.backend.framework;
    const frontendRoot = hasBackend ? "frontend" : "";
    const frontend = getFrontend(config.frontend);
    const files = [];

    files.push({
        path: `${frontendRoot ? frontendRoot + "/" : ""}package.json`,
        content: buildPackageJson(config)
    });

    files.push({
        path: `${frontendRoot ? frontendRoot + "/" : ""}vite.config.ts`,
        content: buildViteConfig(config),
    });

    files.push({
        path: `${frontendRoot ? frontendRoot + "/" : ""}src/main.tsx`,
        content: buildMain(config),
    })

    files.push({
        path: `${frontendRoot ? frontendRoot + "/" : ""}src/App.tsx`,
        content: buildReactApp(config),
    })

    files.push({
        path: `${frontendRoot ? frontendRoot + "/" : ""}src/index.css`,
        content: buildIndexCss(config),

    })


    if (frontend.hasTanstackQuery()) {
        files.push({
            path: `${frontendRoot ? frontendRoot + "/" : ""}src/queries/query.ts`,
            content: buildReactQuery(config),
        });
    }

    files.push({
        path: `${frontendRoot ? frontendRoot + "/" : ""}src/api/api.ts`,
        content: buildReactApi(config),

    })


    return files;

}