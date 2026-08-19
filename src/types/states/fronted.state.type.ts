import type { DependenciType } from "@/const/dependencies/DependencyType";

export type FrontendState = {
    framework: string | null;
    styling: string[];
    router: string | null;
    stateManagement: string | null;
    dependencies: DependenciType[];
};