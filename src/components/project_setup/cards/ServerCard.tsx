import { Server } from "lucide-react";

import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { Card } from "../../common/Card";
import { CardHeader } from "../../common/CardHeader";

type SeverCardProps = {
    config: StackForgeConfig["server"];
    onConfigure: () => void;
};

export function ServerCard({
    config,
    onConfigure,
}: SeverCardProps) {
    return (
        <Card>
            <CardHeader title="Server" subTitle="Configure your server" onConfigure={onConfigure} />
          
            
            <div className="mt-6 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Server className="h-5 w-5" />
                </div>

                <div>
                    <p className="text-xl font-semibold capitalize">
                        {config.server ?? "None"}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Server engine
                    </p>
                </div>

            </div>
       </Card>
    );
}