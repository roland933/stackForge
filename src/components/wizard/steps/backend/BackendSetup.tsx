import { Card } from "@/components/ui/card";
import { StepWizard } from "../../StepWizard";
import { WizardFooter } from "../../WizardFooter";

import { WizardHeader } from "../../WizardHeader";
import { Content } from "@/components/common/Content";
import { SectionSeparator } from "@/components/common/SectionSeparator";
import { Intro, Framework, Database, Authentication, Extras } from "./sections";


export function BackendSetup() {
    return (
        <Card>
            <Content>

                <WizardHeader title="Backend Setup"   />


                <StepWizard />

                <SectionSeparator />

                <Intro />

               

                <Framework />

                <SectionSeparator />

                <Database />

                <SectionSeparator />

                <Authentication />

                 <SectionSeparator />

                 <Extras />



            </Content>
            <WizardFooter />

        </Card>
    )
}