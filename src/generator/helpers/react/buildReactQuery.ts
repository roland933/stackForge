import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function buildReactQuery(config: StackForgeConfig) {

    const isFastApi = config.backend.framework === "fastapi";

    const endpoint = isFastApi
        ? "/health"
        : "/products";

    const queryName = isFastApi
        ? "useHealthQuery"
        : "useProductsQuery";

    const queryKey = isFastApi
        ? "health"
        : "products";

    return `
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";

export function ${queryName}() {
    return useQuery({
        queryKey: ["${queryKey}"],
        queryFn: async () => {
            const response = await api.get("${endpoint}");

            return response.data;
        },
    });
}

${
    isFastApi && config.database
        ? `
export function useDatabaseHealthQuery() {
    return useQuery({
        queryKey: ["health-db"],
        queryFn: async () => {
            const response = await api.get("/health/db");

            return response.data;
        },
    });
}
`
        : ""
}
`;
}