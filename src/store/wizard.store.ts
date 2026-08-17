import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import type { ProjectState,FrontendState,FeaturesState,BackendState } from "@/types/states";
import { create } from "zustand";


type WizardStore = {
    currentStep: number;

    project: ProjectState;
    frontend: FrontendState;
    backend: BackendState;
    features: FeaturesState;
    nextStep: () => void;
    previousStep: () => void;
    setStep: (step: number) => void;

    setProject: (data: Partial<ProjectState>) => void;
    setFrontend: (data: Partial<FrontendState>) => void;
    setBackend: (data: Partial<BackendState>) => void;
    setFeatures: (data: Partial<FeaturesState>) => void;
    loadConfig:(config: StackForgeConfig) => void;

    reset: () => void;
};

const initialState = {
    currentStep: 1,
    
    project: {
        name: "",
        description: "",
        packageManager: null,
        git: false,
    },

    frontend: {
        framework: null,
        styling: [],
        router: null,
        stateManagement: null,
        dependencies: [],
    },

    backend: {
        framework: null,
        database: null,
        authentication: null,
        extras: [],
        dependencies: [],
    },

    features: {
        quality: [],
        testing: [],
        containers: [],
        tooling: [],
    },

    
};

export const useWizardStore = create<WizardStore>((set) => ({
    ...initialState,

    nextStep: () =>
        set((state) => ({
            currentStep: Math.min(state.currentStep + 1, 6),
        })),

    previousStep: () =>
        set((state) => ({
            currentStep: Math.max(state.currentStep - 1, 1),
        })),

    setStep: (step) =>
        set({
            currentStep: step,
        }),

    setProject: (data) =>
        set((state) => ({
            project: {
                ...state.project,
                ...data,
            },
        })),

    setFrontend: (data) =>
        set((state) => ({
            frontend: {
                ...state.frontend,
                ...data,
            },
        })),

    setBackend: (data) =>
        set((state) => ({
            backend: {
                ...state.backend,
                ...data,
            },
        })),

    setFeatures: (data) =>
        set((state) => ({
            features: {
                ...state.features,
                ...data,
            },
        })),

        loadConfig: (config) =>
            set({
                project: config.project,
                frontend: config.frontend,
                backend: config.backend,
                features: config.features,
                
            }),

    reset: () =>
        set(initialState),
}));