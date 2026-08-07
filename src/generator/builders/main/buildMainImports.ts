import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function buildMainImports(config:StackForgeConfig) {

   return [
        'import ReactDOM from "react-dom/client";',
        'import { BrowserRouter } from "react-router-dom";'
    ]
}