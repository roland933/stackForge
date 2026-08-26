import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

export function buildReactApi(config:StackForgeConfig) {

    const baseURL = config.database ? "http://localhost:8000" : ""

    return `
import axios from "axios";

export const api = axios.create({
    baseURL: "${baseURL}",
});
    
    `

}