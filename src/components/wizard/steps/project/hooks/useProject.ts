import { useWizardStore } from "@/store/wizard.store";

export function useProject() {

        const project = useWizardStore((state) => state.project);
        const setProject = useWizardStore((state) => state.setProject);


        return {
            project,
            setProject,
        }

}