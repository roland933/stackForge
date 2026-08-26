import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function getDatabase(config:StackForgeConfig["database"]) {

    const getDatabase = () => {

        return config?.name;
    }

    const getId = () =>  {
        return config?.id;
    }

    const hasDatabase = () => {
        return !!config?.id
    }

    const getPort = () => {
        return config?.port
    }

    const getUsername = () => {
        return config?.username
    }


    return {
       getDatabase,
       hasDatabase,
       getPort,
       getUsername,
       getId
       
    }
    


}