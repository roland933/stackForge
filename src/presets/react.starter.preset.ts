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
        framework:"tailwind",
        dependencies:[]
    },

    backend: {
        framework: null,
        database: null,
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