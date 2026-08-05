import { Card } from "@/components/ui/card";
import { StepWizard } from "../../StepWizard";
import { WizardFooter } from "../../WizardFooter";
import { Framework } from "./sections/Framework";
import { Styling } from "./sections/Styling";
import { Routing } from "./sections/Routing";
import { StateManagment } from "./sections/StateManagment";
import { WizardHeader } from "../../WizardHeader";
import { Content } from "@/components/common/Content";
import { SectionSeparator } from "@/components/common/SectionSeparator";


export function FrontendSetup() {
    return (
        <Card>
            <Content>

                <WizardHeader title="Frontend Setup" />


                <StepWizard />

                <SectionSeparator />

                <Framework />

                <SectionSeparator />


                <Styling />

                <SectionSeparator />


                <Routing />


                <SectionSeparator />


                <StateManagment />


            </Content>
            <WizardFooter />

        </Card>
    )
}