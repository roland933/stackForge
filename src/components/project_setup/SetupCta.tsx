import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

type SetupCTAProps = {
    onGenerate: () => void;
};

export function SetupCTA({ onGenerate }: SetupCTAProps) {
    return (
        <div className="mt-10 flex flex-col items-center text-center">

            <h2 className="text-3xl font-semibold tracking-tight">
                Ready to build?
            </h2>

            <p className="mt-2 text-lg text-muted-foreground">
                Your project is configured and ready to generate.
            </p>

            <Button
                size="lg"
                onClick={onGenerate}
                className="mt-6 h-12 px-10 text-base font-semibold"
            >
                <Rocket className="mr-2 h-5 w-5" />
                Generate & Install
            </Button>

        </div>
    );
}