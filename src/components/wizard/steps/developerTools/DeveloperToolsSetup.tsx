import { Card } from "@/components/ui/card";
import { WizardFooter } from "../../WizardFooter";

import { WizardHeader } from "../../WizardHeader";
import { Content } from "@/components/common/Content";
import { SectionSeparator } from "@/components/common/SectionSeparator";

import { Testing, Quality, Containers, Tools } from "./sections";


export function DeveloperToolsSetup() {
    return (
        <Card>
             <WizardHeader title="Developer Tools Setup" />
            <Content>

            
                <Quality />

                <SectionSeparator />

                <Testing />

                <SectionSeparator />

                <Containers />

                <SectionSeparator />


                <Tools />


            </Content>
            <WizardFooter />

        </Card>
    )
}