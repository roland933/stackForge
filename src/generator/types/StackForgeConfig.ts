import type {
    ProjectState,
    FrontendState,
    BackendState,
    FeaturesState,
    StylingState,
} from "@/types/states";


export interface StackForgeConfig {
    project: ProjectState;
    frontend: FrontendState;
    backend: BackendState;
    features: FeaturesState;
    styling: StylingState;
}