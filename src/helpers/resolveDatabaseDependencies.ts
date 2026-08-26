import { databaseDependencies } from "@/const/databases";

export function resolveDatabaseDependencies(
    databaseId: string | null
): string[] {
    if (!databaseId) {
        return [];
    }

    return databaseDependencies[databaseId]
        ? [...databaseDependencies[databaseId]]
        : [];
}