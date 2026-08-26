import type {
    ProjectState,
    FrontendState,
    BackendState,
    FeaturesState,
    StylingState,
    DatabaseState
} from "@/types/states";

import type { ServerState } from "@/types/states/server.state.type";


export interface StackForgeConfig {
    project: ProjectState;
    frontend: FrontendState;
    backend: BackendState;
    features: FeaturesState;
    styling: StylingState;
    server?: ServerState;
    database?:DatabaseState;
}