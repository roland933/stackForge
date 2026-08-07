import { buildVitePlugins } from "../helpers/buildVitePlugins";
import type { StackForgeConfig } from "../types/StackForgeConfig";



export function buildViteConfig(
    config: StackForgeConfig
): string {

    const plugins = buildVitePlugins(config);

    return `
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [
        ${plugins.join(",\n")}
    ]
});
`;
}