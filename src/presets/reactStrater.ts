export const reactStarter = {

    project: {
        packageManager: "npm",
        git: true,
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
        quality: [
            "eslint",
            "prettier",
        ],

        testing: [],

        containers: [],

        tooling: [],
    },

};