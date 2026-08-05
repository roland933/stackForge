import { useWizardStore } from "@/store/wizard.store";

export function useBackend() {

        const backend = useWizardStore((state) => state.backend);
        const setBackend = useWizardStore((state) => state.setBackend);


        return {
            backend,
            setBackend,
        }

}