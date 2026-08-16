import { Settings, Settings2 } from "lucide-react";
import { SiReact } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card } from "../common/Card";
import { CardHeader } from "../common/CardHeader";

type FrontendCardProps = {
    framework: string;
    router?: string;
    stateManagement?: string;
    onConfigure: () => void;
};

export function FrontendCard({
    framework,
    router,
    stateManagement,
    onConfigure,
}: FrontendCardProps) {
    return (
        <Card >

            <CardHeader title="Frontend" subTitle=" Configure your frontend stack">
                  <Button
                        variant="ghost"
                        size="icon"
                        onClick={onConfigure}
                        className="shrink-0"
                    >
                        <Settings className="h-4 w-4" />
                        <span className="sr-only">
                            Configure frontend
                        </span>
                    </Button>
            </CardHeader>

            {/* Main framework */}
            <div className="mt-6 flex items-center gap-3">
                <SiReact className="h-10 w-10 text-primary" />

                <div>
                    <p className="text-xl font-semibold">
                        {framework}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Frontend framework
                    </p>
                </div>
            </div>

            {/* Configuration summary */}
            <div className="mt-6 space-y-2 text-sm">
                {router && (
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Router
                        </span>

                        <span className="font-medium">
                            {router}
                        </span>
                    </div>
                )}

                {stateManagement && (
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            State Management
                        </span>

                        <span className="font-medium">
                            {stateManagement}
                        </span>
                    </div>
                )}
            </div>

            {/* Footer */}
            <div className="mt-4 flex justify-end">
              
            </div>
       </Card>
    );
}