import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export function Intro() {

    return (


        <Alert className="bg-background/20 p-4">
            
            <Info className="h-4 w-4" />

            <AlertTitle className="mb-2">
                Optional
            </AlertTitle>

            <AlertDescription>

                A backend is optional.
                Skip this step if your project doesn't require a server.

            </AlertDescription>

        </Alert>
    )
}