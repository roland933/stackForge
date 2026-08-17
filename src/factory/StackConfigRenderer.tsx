import { FrontendConfig, type FrontendConfigData } from "@/components/configs/FrontendConfig";
import type { StackConfigType } from "@/types/stack.config.type";



type StackConfigRendererProps = {
    type: StackConfigType;
    onChange: (config: FrontendConfigData) => void;
};

export function StackConfigRenderer({
    type,
    onChange,
}: StackConfigRendererProps) {
    switch (type) {
        case "frontend":
            return <FrontendConfig onChange={onChange} />;

        case "backend":
            return (
                <div className="text-sm text-muted-foreground">
                    Backend configuration coming soon...
                </div>
            );

        case "database":
            return (
                <div className="text-sm text-muted-foreground">
                    Database configuration coming soon...
                </div>
            );

        default:
            return null;
    }
}