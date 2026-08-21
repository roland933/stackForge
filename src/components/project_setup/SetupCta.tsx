import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

type SetupCTAProps = {
    onGenerate: () => void;
};

export function SetupCTA({ onGenerate }: SetupCTAProps) {
    return (
        <div className="flex flex-col items-center text-center p-5 bg-card/30 rounded-xl border">

            <h2 className="text-3xl font-semibold tracking-tight">
                Ready to build?
            </h2>

            <p className="mt-2 text-lg text-muted-foreground">
                Your project is configured and ready to generate.
            </p>

            <Button
                size="lg"
                onClick={onGenerate}
                className="mt-6 h-12 px-10 text-base font-semibold hover:cursor-pointer"
            >
                <Rocket className="mr-2 h-5 w-5" />
                Generate & Install
            </Button>

        </div>
    );
}