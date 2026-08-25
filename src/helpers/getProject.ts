import { slugifyProjectName } from "@/generator/download";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function getProject(config:StackForgeConfig["project"]) {

    const getSlug = () => {

        return slugifyProjectName(config.name);
    }

    const getName = () => {

        return config.name;

    }


    return {
        getName,
        getSlug
    }
    


}