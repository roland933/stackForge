import { Settings, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiLaravel } from "react-icons/si";

import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { Card } from "../common/Card";
import { CardHeader } from "../common/CardHeader";

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
            <CardHeader title="Backend" subTitle="Configure your backend stack" onConfigure={onConfigure} />
     

    
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