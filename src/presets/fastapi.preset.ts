import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";


export const fastapiPreset: StackForgeConfig = {

    project: {
        name: "My Project",
        description: "",
        git: false,
        packageManager: "",
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
        framework: "fastapi",
        database: "postgresql",
        authentication: null,
        dependencies: [],
    },

    features: {
        quality: ["ESLint", "Prettier"],
        testing: [],
        containers: [],
        tooling: [],
    },
}