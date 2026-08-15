import { buildMain } from "@/generator/builders/main/buildMain";
import { buildPackageJson } from "@/generator/builders/packageJson";
import { buildViteConfig } from "@/generator/builders/viteConfig";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { buildIndexCss } from "../buildIndexCss";

export function buildReactFiles(config: StackForgeConfig)   {

      const hasBackend = !!config.backend.framework;
      const frontendRoot = hasBackend ? "frontend" : "";

    return  [       {
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
        ]


}