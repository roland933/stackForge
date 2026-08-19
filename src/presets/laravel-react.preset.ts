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
        styling: ["tailwind", "shadcn"],
        router: "react-router",
        stateManagement: "zustand",
        dependencies: [
            {
                id: "react-router",
                name: "React Router",
            },
            {
                id: "zustand",
                name: "Zustand",
            },
            {
                id: "tanstack-query",
                name: "TanStack Query",
            },
            {
                id: "axios",
                name: "Axios",
            },
        ],
    },

    styling: {
        framework: "tailwind",
        dependencies: [{
            id: "shadcn",
            name: "shadcn"
        }]
    },

    backend: {
        framework: "laravel",
        database: "MySQL",
        authentication: null,
        dependencies: [
            {
                id: "sanctum",
                name: "Laravel Sanctum",
            },
         
        ],
    },

    features: {
        quality: ["ESLint", "Prettier"],
        testing: [],
        containers: [],
        tooling: [],
    },
}