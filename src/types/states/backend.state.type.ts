import type { DependenciType } from "@/const/dependencies/DependencyType";

export type BackendState = {
    framework: string | null;
    authentication: string | null;
    extras?: string[];
    dependencies: DependenciType[];
};