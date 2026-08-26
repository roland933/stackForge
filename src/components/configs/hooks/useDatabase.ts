import { useWizardStore } from "@/store/wizard.store";

export function useDatabase() {

        const database = useWizardStore((state) => state.database);
        const setDatabase = useWizardStore((state) => state.setDatabase);


        return {
            database,
            setDatabase,
        }

}