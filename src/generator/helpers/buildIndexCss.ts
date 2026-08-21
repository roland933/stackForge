import type { StackForgeConfig } from "../types/StackForgeConfig";

export function buildIndexCss(config: StackForgeConfig): string {

    let css = "";

   if (config.styling.framework === "tailwind") {
        css += '@import "tailwindcss";\n';
    }

    css += `
body {
    margin: 0;
    font-family: sans-serif;
}
`;

    return css;
}