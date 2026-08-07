import type { StackForgeConfig } from "../types/StackForgeConfig";


export function buildVitePlugins(config: StackForgeConfig): string[] {
   const plugins: string[] = [];
    
     if (config.frontend.framework === "react") {
      plugins.push("react()");
       
    }

      if (config.frontend.styling.includes("tailwind")) {
        plugins.push("tailwind()");
       
    }

    return plugins;
}