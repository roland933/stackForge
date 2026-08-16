import { Settings, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";

import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { Card } from "../common/Card";

type DatabaseCardProps = {
    config: StackForgeConfig["backend"];
    onConfigure: () => void;
};

export function DatabaseCard({
    config,
    onConfigure,
}: DatabaseCardProps) {
    return (
        <Card>

            {/* Header */}
            <div className="flex items-start justify-between">

                <div>
                    <h2 className="text-lg font-semibold">
                        Database
                    </h2>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Configure your database
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
                        Configure database
                    </span>
                </Button>

            </div>

            {/* Database */}
            <div className="mt-6 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Database className="h-5 w-5" />
                </div>

                <div>
                    <p className="text-xl font-semibold capitalize">
                        {config.database ?? "None"}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Database engine
                    </p>
                </div>

            </div>

            {/* Configuration summary */}
            {config.database && (
                <div className="mt-6 space-y-2 text-sm">

                    <div className="flex justify-between">
                        <span className="text-muted-foreground">
                            Database
                        </span>

                        <span className="font-medium">
                            {config.database}
                        </span>
                    </div>

                </div>
            )}

       </Card>
    );
}