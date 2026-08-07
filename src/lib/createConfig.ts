import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { useWizardStore } from "@/store/wizard.store";

export function createConfig():StackForgeConfig {

        const {
    project,
    frontend,
    backend,
    features,
} = useWizardStore.getState();

return {
    project,
    frontend,
    backend,
    features,
};


} 