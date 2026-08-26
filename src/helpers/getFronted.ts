import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function getFrontend(config:StackForgeConfig["frontend"]) {

    const getFramework = () => {

        return config.framework;
    }

    const getDependencies = () => {

        return config.dependencies;

    }

    const hasTanstackQuery = () => {
     
     return config.dependencies.filter(d => d.id === "tanstack-query").length > 0;   

    }


    return {
        getDependencies,
        getFramework,
        hasTanstackQuery
    }
    


}