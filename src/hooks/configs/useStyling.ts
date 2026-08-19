import { useWizardStore } from "@/store/wizard.store";

export function useStyling() {

        const styling = useWizardStore((state) => state.styling);
        const setStyling = useWizardStore((state) => state.setStyling);


        return {
            styling,
            setStyling,
        }

}