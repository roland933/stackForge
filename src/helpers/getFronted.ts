import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function getFrontend(config:StackForgeConfig["frontend"]) {

    const getFramework = () => {

        return config.framework;
    }

    const getDependencies = () => {

        return config.dependencies;

    }

    const hasTanstackQuery = () => {
        return config.dependencies.some(
            (d) => d.id === "tanstack-query"
        );
    };

    const hasAxios = () => {
        return config.dependencies.some(
            (d) => d.id === "axios"
        );
    };

    const hasZustand = () => {
        return config.dependencies.some(d => d.id === "zustand");

    }  
        
    

    return {
        getDependencies,
        getFramework,
        hasTanstackQuery,
        hasAxios,
        hasZustand
    }
    


}