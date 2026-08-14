import { buildMain } from "@/generator/builders/main/buildMain";
import { buildPackageJson } from "@/generator/builders/packageJson";
import { buildViteConfig } from "@/generator/builders/viteConfig";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { buildIndexCss } from "../buildIndexCss";
import { loadReactTemplates } from "@/generator/templates/loadReactTemplates";

export function buildReactFiles(config: StackForgeConfig)   {

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