import { buildVitePlugins } from "../helpers/buildVitePlugins";
import type { StackForgeConfig } from "../types/StackForgeConfig";



export function buildViteConfig(
    config: StackForgeConfig
): string {

    const plugins = buildVitePlugins(config);

    console.log(plugins)

    return `
        import { defineConfig } from "vite";
        import react from "@vitejs/plugin-react";
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
            plugins: [
                ${plugins.join(",\n")}
            ]
        });
`;
}