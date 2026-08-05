import {
    Card,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import { StepWizard } from "../../StepWizard";
import { WizardFooter } from "../../WizardFooter";
import { WizardHeader } from "../../WizardHeader";
import { Content } from "@/components/common/Content";
import { ProjectSummary } from "./sections/ProjectSummary";
import { FrontendSummary } from "./sections/FrontendSummary";
import { SummarySection } from "./sections/SummarySection";
import { BackendSummary } from "./sections/BackendSummary";
import { FeaturesSection } from "./sections/FeaturesSection";

export function ReviewSetup() {
    return (
        <Card >
            <Content>

                <WizardHeader title="Review Configuration" subtitle="Review your project configuration before generating." />

                <StepWizard />

                <Separator />



                <SummarySection >

                    <ProjectSummary />

                </SummarySection>


                <SummarySection >

                    <FrontendSummary />

                </SummarySection>



                <SummarySection >

                    <BackendSummary />

                </SummarySection>


                <SummarySection >

                    <FeaturesSection />

                </SummarySection>

            </Content>

            <WizardFooter />

        </Card>
    );
}