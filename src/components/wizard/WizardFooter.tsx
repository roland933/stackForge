
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
        <CardFooter className="justify-end gap-3 border-t bg-muted/20 px-8 py-3">

            <Button
                variant="outline"
                className={"cursor-pointer"}
                disabled={currentStep === 1}
                onClick={previousStep}
            >
                <ArrowLeft className="h-4 w-4" />

                
            </Button>

            <Button
              className={"cursor-pointer"}
                disabled={currentStep === 5}
                onClick={nextStep}
            >
               

                <ArrowRight className=" h-4 w-4" />
            </Button>

        </CardFooter>
    )
}