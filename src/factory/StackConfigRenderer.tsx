import { BackendConfig, type BackendConfigData } from "@/components/configs/BackendConfig";
import { DatabaseConfig, type DatabaseConfigData } from "@/components/configs/DatabesConfig";
import { FrontendConfig, type FrontendConfigData } from "@/components/configs/FrontendConfig";
import type { StackConfigType } from "@/types/stack.config.type";



type StackConfigRendererProps = {
    type: StackConfigType;
    onChange: (config: FrontendConfigData) => void;
    onChangeBackend: (config: BackendConfigData) => void;
    onChangeDatabase: (config:DatabaseConfigData) => void;
};

export function StackConfigRenderer({
    type,
    onChange,
    onChangeBackend,
    onChangeDatabase,
}: StackConfigRendererProps) {
    switch (type) {
        case "frontend":
            return <FrontendConfig onChange={onChange} />;

        case "backend":
            return <BackendConfig onChange={onChangeBackend} />
            
        case "database":
            return (
                <DatabaseConfig onChange={onChangeDatabase}/>
            );

        default:
            return null;
    }
}