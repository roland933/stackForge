
import { SiReact } from "react-icons/si";
import { Card } from "../common/Card";
import { CardHeader } from "../common/CardHeader";
import type { FrontendState } from "@/types/states";
import { useFrontend } from "../wizard/steps/frontend/hooks/useFrontend";

type FrontendCardProps = {
    frontend: FrontendState
    onConfigure: () => void;
};

    export function FrontendCard({
    onConfigure,
}: FrontendCardProps) {

    const {frontend} = useFrontend();

    return (
        <Card >

            <CardHeader title="Frontend" 
                         subTitle="Configure your frontend stack"
                          onConfigure={onConfigure}  
                         >
                 
            </CardHeader>

            {/* Main framework */}
            <div className="mt-6 flex items-center gap-3">
                <SiReact className="h-10 w-10 text-primary" />

                <div>
                    <p className="text-xl font-semibold">
                        {frontend.framework}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Frontend framework
                    </p>
                </div>
            </div>

            {/* Configuration summary */}
            {frontend?.dependencies?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                {frontend.dependencies.map((dependency) => (
                    <span
                        key={dependency}
                        className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium"
                    >
                        {dependency}
                    </span>
                ))}
            </div>

            )}
        

         
       </Card>
    );
}