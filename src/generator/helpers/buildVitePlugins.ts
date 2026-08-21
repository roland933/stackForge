import type { StackForgeConfig } from "../types/StackForgeConfig";


export function buildVitePlugins(config: StackForgeConfig): string[] {
   const plugins: string[] = [];
    
     if (config.frontend.framework === "react") {
      plugins.push("react()");
       
    }

      if (config.styling.framework === "tailwind") {
        plugins.push("tailwindcss()");
       
    }

    return plugins;
}