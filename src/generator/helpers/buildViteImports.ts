import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildViteImports(
    config: StackForgeConfig
): string[] {

    const imports: string[] = [];

    if (config.frontend.framework === "react") {
        imports.push(
            'import react from "@vitejs/plugin-react";'
        );
    }

    if (config.styling.framework === "tailwind") {
        imports.push(
            'import tailwindcss from "@tailwindcss/vite";'
        );
    }

    return imports;
}