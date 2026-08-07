export const packages = {

    react: {
        dependencies: {
            react: "^19.1.1",
            "react-dom": "^19.1.1",
        },
        devDependencies: {},
        scripts:{},
        files: [
            "vite.config.ts",
            "src/main.tsx",
            "src/App.tsx",
        ]
    },

    reactRouter: {
        dependencies: {
            "react-router-dom": "^7.8.0",
        },
        devDependencies: {},
        scripts:{},
        files: []
    },

    zustand: {
        dependencies: {
            zustand: "^5.0.8",
        },
        devDependencies: {},
        scripts:{},
         files: []
    },

    tailwind: {
         dependencies: {
            tailwind: "",
        },
        devDependencies: {},
        files: [
            "src/index.css",
        ]
    }

};