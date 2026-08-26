import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function buildHealthDbQuery(config:StackForgeConfig) {
return `
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";

export function useHealthQuery() {
    return useQuery({
        queryKey: ["healthDb"],
        queryFn: async () => {
            const response = await api.get("/health/db");

            return response.data;
        },
    });
}

`    

}