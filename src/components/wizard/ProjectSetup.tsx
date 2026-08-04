import { Card, CardContent } from "@/components/ui/card";
import { StepWizard } from "./StepWizard";
import { Separator } from "@/components/ui/separator";
import { GeneralInformation } from "./sections/GeneralInformation";
import { PackageManager } from "./sections/PackageManager";
import { GitRepository } from "./sections/GitRepository";
import { WizardFooter } from "./WizardFooter";

export function ProjectSetup() {
    return (
        <Card className="">
            <CardContent className="space-y-10 p-8">

                <h1 className="text-4xl font-bold">
                    Project Setup
                </h1>

                <p className="text-muted-foreground">
                    Let's build something amazing.
                </p>

                <StepWizard />

                <Separator className="my-8" />

                <GeneralInformation />

                <Separator className="my-8" />

                  <div className="grid grid-cols-2 gap-4">

                    <PackageManager />
                    <GitRepository />
                </div>


            </CardContent>
            <WizardFooter />

        </Card>
    );
}