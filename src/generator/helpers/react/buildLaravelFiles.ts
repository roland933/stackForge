
import { buildPackageJson } from "@/generator/builders/packageJson";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function buildLarvelFiles(config: StackForgeConfig)   {

    return [
           
            { 
                path: "backend/package.json",
                content: buildPackageJson(config),
            },
    
           

    ]


}