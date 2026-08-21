import { Database } from "lucide-react";

import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { Card } from "../../common/Card";
import { CardHeader } from "../../common/CardHeader";

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
                <CardHeader title="Database" subTitle="Configure your database" onConfigure={onConfigure} />
          
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