import { useWizardStore } from "@/store/wizard.store";

export function buildSummary() {

    const {
        project,
        frontend,
        backend,
        features,
    } = useWizardStore.getState();



    return {

        frontend: [
            frontend.framework,
            ...frontend.styling,
            frontend.router,
            frontend.stateManagement,
        ].filter(Boolean),

        backend: [
            backend.framework,
            backend.database,
            backend.authentication,
        ].filter(Boolean),

        features: [
            ...features.quality,
            ...features.testing,
            ...features.containers,
            ...features.tooling,
        ],
        
     

    };
}