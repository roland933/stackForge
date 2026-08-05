import { Card } from "@/components/ui/card";
import { StepWizard } from "../../StepWizard";
import { GeneralInformation } from "./sections/GeneralInformation";
import { PackageManager } from "./sections/PackageManager";
import { GitRepository } from "./sections/GitRepository";
import { WizardFooter } from "../../WizardFooter";
import { Content } from "@/components/common/Content";
import { WizardHeader } from "../../WizardHeader";
import { SectionSeparator } from "@/components/common/SectionSeparator";

export function ProjectSetup() {
    return (
        <Card>
            <Content>

                <WizardHeader title=" Project Setup" />

                <StepWizard />

                <SectionSeparator />

                <GeneralInformation />

                <SectionSeparator />

                <PackageManager />

                <GitRepository />

            </Content>

            <WizardFooter />

        </Card>
    );
}