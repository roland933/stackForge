import { BackendConfig, type BackendConfigData } from "@/components/configs/BackendConfig";
import { FrontendConfig, type FrontendConfigData } from "@/components/configs/FrontendConfig";
import type { StackConfigType } from "@/types/stack.config.type";



type StackConfigRendererProps = {
    type: StackConfigType;
    onChange: (config: FrontendConfigData) => void;
    onChangeBackend: (config: BackendConfigData) => void;
};

export function StackConfigRenderer({
    type,
    onChange,
    onChangeBackend,
}: StackConfigRendererProps) {
    switch (type) {
        case "frontend":
            return <FrontendConfig onChange={onChange} />;

        case "backend":
            return <BackendConfig onChange={onChangeBackend} />
            
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