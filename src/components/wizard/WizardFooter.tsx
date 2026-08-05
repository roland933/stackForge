
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useWizardStore } from "@/store/wizard.store";

export function WizardFooter() {
    const currentStep = useWizardStore((state) => state.currentStep);
    const nextStep = useWizardStore((state) => state.nextStep);
    const previousStep = useWizardStore((state) => state.previousStep);

    return (
        <CardFooter className="justify-end gap-3 border-t bg-muted/20 px-8 py-6">

            <Button
                variant="outline"
                disabled={currentStep === 1}
                onClick={previousStep}
            >
                <ArrowLeft className="mr-2 h-4 w-4" />

                Previous
            </Button>

            <Button
                disabled={currentStep === 6}
                onClick={nextStep}
            >
                Next

                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

        </CardFooter>
    )
}