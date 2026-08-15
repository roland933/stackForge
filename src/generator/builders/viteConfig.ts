import { buildViteImports } from "../helpers/buildViteImports";
import { buildVitePlugins } from "../helpers/buildVitePlugins";
import type { StackForgeConfig } from "../types/StackForgeConfig";



export function buildViteConfig(
    config: StackForgeConfig
): string {

    const plugins = buildVitePlugins(config);
    const imports = buildViteImports(config)

    const hasBackend = !!config.backend.framework;

    const appendServer =   hasBackend ?  `server: {
                    host: true,
                    port: 5173,
                    strictPort: true,
                }` :'';

    return `
import { defineConfig } from "vite";
${imports.join("\n")}

export default defineConfig({
      plugins: [
                    ${plugins.join(",\n")}
        ],
        ${appendServer}
                        
    });
    `;
}