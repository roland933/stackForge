import { useWizardStore } from "@/store/wizard.store";

export function useServer() {

        const server = useWizardStore((state) => state.server);
        const setServer = useWizardStore((state) => state.setServer);


        return {
            server,
            setServer,
        }

}