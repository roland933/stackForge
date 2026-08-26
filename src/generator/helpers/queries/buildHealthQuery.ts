import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function buildHealthQuery(config:StackForgeConfig) {
return `
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/api";

export function useHealthQuery() {
    return useQuery({
        queryKey: ["health"],
        queryFn: async () => {
            const response = await api.get("/health");

            return response.data;
        },
    });
}

`    

}