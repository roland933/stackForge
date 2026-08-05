import { useWizardStore } from "@/store/wizard.store";

import { ProjectSetup } from "./steps/project";
import { FrontendSetup } from "./steps/frontend";
import { BackendSetup } from "./steps/backend";
import { DeveloperToolsSetup } from "./steps/developerTools";

export function WizardContent() {

    const currentStep = useWizardStore(
        (state) => state.currentStep
    );



    switch (currentStep) {

        case 1:
            return <ProjectSetup />;

        case 2:
            return <FrontendSetup />;

        case 3:
            return <BackendSetup />;


        case 4:
            return <DeveloperToolsSetup />;

        default:
            return <ProjectSetup />;

    }
}