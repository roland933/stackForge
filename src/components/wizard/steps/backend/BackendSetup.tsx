import { Card } from "@/components/ui/card";

import { WizardFooter } from "../../WizardFooter";

import { WizardHeader } from "../../WizardHeader";
import { Content } from "@/components/common/Content";
import { SectionSeparator } from "@/components/common/SectionSeparator";
import { Intro, Framework, Database, Authentication, Extras } from "./sections";


export function BackendSetup() {
    return (
        <Card>

            <WizardHeader title="Backend Setup"   />

            <Content>

                

                <Intro />

               

                <Framework />

                <SectionSeparator />

                <Database />

                <SectionSeparator />

                <Authentication />

                 <SectionSeparator />


            </Content>
            <WizardFooter />

        </Card>
    )
}