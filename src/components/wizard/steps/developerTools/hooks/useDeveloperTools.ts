import { useWizardStore } from "@/store/wizard.store";

export function useDeveloperTools() {

        const developerTools = useWizardStore((state) => state.features);
        const setdeveloperTools = useWizardStore((state) => state.setFeatures);


        return {
            developerTools,
            setdeveloperTools,
        }

}