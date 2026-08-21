
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";

import { CardHeader } from "../../common/CardHeader";
import { useStyling } from "@/hooks/configs/useStyling";
import { Card } from "../../common/Card";
import { SiTailwindcss } from "@icons-pack/react-simple-icons";

type StylingCardProps = {
    config: StackForgeConfig["styling"];
    onConfigure: () => void;
};

export function StylingCard({
    config,
    onConfigure,
}: StylingCardProps) {
   const {styling} = useStyling();
    return (
        <Card >

            {/* Header */}
            <CardHeader title="Styling & UI" subTitle="Configure your styling and UI tools" onConfigure={onConfigure} />
    
            {/* Framework */}
            <div className="mt-6 flex items-center gap-3">

                <SiTailwindcss className="h-10 w-10 text-primary" />

                <div>
                    <p className="text-xl font-semibold capitalize">
                        {config.framework}
                    </p>

                    <p className="text-sm text-muted-foreground">
                        Backend framework
                    </p>
                </div>

            </div>

            {/* styling summary */}
                 {styling?.dependencies?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                {styling.dependencies.map((dependency) => (
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