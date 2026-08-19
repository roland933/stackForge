import type { DependenciType } from "@/const/dependencies/DependencyType";

export type StylingState = {
    framework: string | null;
    dependencies: DependenciType[];
};