import { SiLaravel } from "react-icons/si";

import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { Card } from "../common/Card";
import { CardHeader } from "../common/CardHeader";
import { useBackend } from "../wizard/steps/backend/hooks/useBackend";

type BackendCardProps = {
    config: StackForgeConfig["backend"];
    onConfigure: () => void;
};

export function BackendCard({
    config,
    onConfigure,
}: BackendCardProps) {
   const {backend} = useBackend();
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
                 {backend?.dependencies?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                {backend.dependencies.map((dependency) => (
                    <span
                        key={dependency.id}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                    >
                        {dependency.name}
                    </span>
                ))}
            </div>

            )}

       </Card>
    );
}