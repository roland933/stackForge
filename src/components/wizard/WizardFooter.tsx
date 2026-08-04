
import type { WizardFooterProps } from "@/types/wiztad.footer.types";
import { Button } from "../ui/button";
import { CardFooter } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

export function WizardFooter({showNext,showPrevious}:WizardFooterProps) {
    return(
        <CardFooter className="justify-end gap-3 border-t bg-muted/20 px-8 py-6">

                <Button
                    variant="outline"
                >
                     <ArrowLeft className="mr-1 h-4 w-4"/>
                    Previous
                </Button>

                <Button>
                    Next
                     <ArrowRight className="mr-1 h-4 w-4"/>
                </Button>

        </CardFooter>
    )
}