import type {
    ProjectState,
    FrontendState,
    BackendState,
    FeaturesState,
} from "@/types/states";

export interface StackForgeConfig {
    project: ProjectState;
    frontend: FrontendState;
    backend: BackendState;
    features: FeaturesState;
}