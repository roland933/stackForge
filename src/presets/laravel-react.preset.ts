import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";


export const laravelReactPreset: StackForgeConfig = {

      project: {
        name: "My Project",
        description: "",
        git: false,
        packageManager: "npm",
    },

    frontend: {
        framework: "react",
        styling: ["tailwind","shadcn"],
        router: "react-router",
        stateManagement: "zustand",
        dependencies: ["react-router", "zustand"],
    },

    backend: {
        framework: "laravel",
        database: "MySQL",
        authentication: null,
        dependencies: ["sanctum"],
    },

    features: {
        quality: ["ESLint", "Prettier"],
        testing: [],
        containers: [],
        tooling: [],
    },
}