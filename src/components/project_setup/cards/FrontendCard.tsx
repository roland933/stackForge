
import { Card } from "../../common/Card";
import { CardHeader } from "../../common/CardHeader";
import type { FrontendState } from "@/types/states";

import { RenderFrontendIcon } from "@/factory/RenderFrontendIcon";
import { getFrontendFramework } from "@/helpers/getConfigItem";

type FrontendCardProps = {
    config: FrontendState
    onConfigure: () => void;
};

    export function FrontendCard({
    onConfigure,
    config,
}: FrontendCardProps) {

    const frameworkName = getFrontendFramework(config.framework)?.name ?? "None";
    return (
        <Card >

            <CardHeader title="Frontend" 
                         subTitle="Configure your frontend stack"
                          onConfigure={onConfigure}  
                         >
                 
            </CardHeader>

            {/* Main framework */}
            <div className="mt-6 flex items-center gap-3">
                <RenderFrontendIcon framework={config.framework}/>
              
                <div>
                    <p className="text-xl font-semibold">
                        {frameworkName}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Frontend framework
                    </p>
                </div>
            </div>

            {/* Configuration summary */}
            {config?.dependencies?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                {config.dependencies.map((dependency) => (
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