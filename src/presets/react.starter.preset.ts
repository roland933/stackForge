import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";


export const reactStarterPreset: StackForgeConfig = {

      project: {
        name: "My Project",
        description: "",
        git: true,
        packageManager: "npm",
    },

    frontend: {
        framework: "react",
        styling: ["tailwind","shadcn"],
        router: "react-router",
        stateManagement: "zustand",
    },

    backend: {
        framework: null,
        database: null,
        authentication: null,
    },

    features: {
        quality: ["ESLint", "Prettier"],
        testing: [],
        containers: [],
        tooling: [],
    },
}