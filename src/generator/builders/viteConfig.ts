import { buildViteImports } from "../helpers/buildViteImports";
import { buildVitePlugins } from "../helpers/buildVitePlugins";
import type { StackForgeConfig } from "../types/StackForgeConfig";



export function buildViteConfig(
    config: StackForgeConfig
): string {

    const plugins = buildVitePlugins(config);
    const imports = buildViteImports(config)

    return `
            import { defineConfig } from "vite";
            ${imports.join("\n")}

            export default defineConfig({
                plugins: [
                    ${plugins.join(",\n")}
                ]
            });
    `;
}