import { useWizardStore } from "@/store/wizard.store";

export function useFrontend() {

        const frontend = useWizardStore((state) => state.frontend);
        const setFrontend = useWizardStore((state) => state.setFrontend);


        return {
            frontend,
            setFrontend,
        }

}