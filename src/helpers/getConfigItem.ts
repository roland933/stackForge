import { Databases } from "@/const/databases";
import { BackendFrameworks, FrontendFrameworks } from "@/const/frameworks/frameworks";


export function getBackendFramework(id: string | null) {
    return BackendFrameworks.find(
        (framework) => framework.id === id
    );
}

export function getFrontendFramework(id: string | null) {
    return FrontendFrameworks.find(
        (framework) => framework.id === id
    );
}

export function getDatabase(id: string | null) {
    return Databases.find(
        (database) => database.id === id
    );
}