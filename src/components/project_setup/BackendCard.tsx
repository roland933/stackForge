import { Settings, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiLaravel } from "react-icons/si";

import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { Card } from "../common/Card";

type BackendCardProps = {
    config: StackForgeConfig["backend"];
    onConfigure: () => void;
};

export function BackendCard({
    config,
    onConfigure,
}: BackendCardProps) {
   
    return (
        <Card>

            {/* Header */}
            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-lg font-semibold">
                        Backend
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Configure your backend stack
                    </p>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onConfigure}
                    className="shrink-0"
                >
                    <Settings className="h-4 w-4" />

                    <span className="sr-only">
                        Configure backend
                    </span>
                </Button>

            </div>

            {/* Framework */}
            <div className="mt-6 flex items-center gap-3">

                <SiLaravel className="h-10 w-10 text-primary" />

                <div>
                    <p className="text-xl font-semibold capitalize">
                        {config.framework}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Backend framework
                    </p>
                </div>

            </div>

            {/* Configuration summary */}
            <div className="mt-6 space-y-2 text-sm">

    

                {config.authentication && (
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Authentication
                        </span>

                        <span className="font-medium capitalize">
                            {config.authentication}
                        </span>
                    </div>
                )}

            </div>

       </Card>
    );
}