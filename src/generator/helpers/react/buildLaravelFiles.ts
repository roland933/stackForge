
import { buildPackageJson } from "@/generator/builders/packageJson";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { loadReactLaravelTemplates } from "@/generator/templates/loadReactLaravelTemplates";

export function buildLarvelFiles(config: StackForgeConfig)   {

    return [
            ...loadReactLaravelTemplates(),
            { 
                path: "backend/package.json",
                content: buildPackageJson(config),
            },
    
           

    ]


}