import { Settings2, Palette, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "../common/Card";

type StylingCardProps = {
    styling: string[];
    uiLibrary?: string;
    onConfigure: () => void;
};

export function StylingCard({
    styling,
    uiLibrary,
    onConfigure,
}: StylingCardProps) {
    return (
       <Card>

            {/* Header */}
            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-lg font-semibold">
                        Styling & UI
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Configure your styling and UI tools
                    </p>
                </div>

               <Button
                        variant="outline"
                        size="icon"
                        onClick={onConfigure}
                        className="h-11 w-11 shrink-0 rounded-xl"
                    >
                        <Settings className="!h-6 !w-6" />

                        <span className="sr-only">
                            Configure frontend
                        </span>
                    </Button>
            </div>

            {/* Main */}
            <div className="mt-6 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Palette className="h-5 w-5" />
                </div>

                <div>
                    <p className="text-xl font-semibold">
                        {styling.join(" + ")}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Styling & UI stack
                    </p>
                </div>

            </div>

            {/* Summary */}
            {uiLibrary && (
                <div className="mt-6 flex justify-between text-sm">
                    <span className="text-muted-foreground">
                        UI Library
                    </span>

                    <span className="font-medium">
                        {uiLibrary}
                    </span>
                </div>
            )}

        </Card>
    );
}