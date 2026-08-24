import { BackendConfig, type BackendConfigData } from "@/components/configs/BackendConfig";
import { DatabaseConfig, type DatabaseConfigData } from "@/components/configs/DatabesConfig";
import { FrontendConfig, type FrontendConfigData } from "@/components/configs/FrontendConfig";
import { ServerConfig, type ServerConfigData } from "@/components/configs/ServerConfig";
import { StylingConfig, type StylingConfigData } from "@/components/configs/StylingConfig";
import type { StackConfigType } from "@/types/stack.config.type";



type StackConfigRendererProps = {
    type: StackConfigType;
    onChange: (config: FrontendConfigData) => void;
    onChangeBackend: (config: BackendConfigData) => void;
    onChangeDatabase: (config:DatabaseConfigData) => void;
    onChangeStyling:(config:StylingConfigData) => void;
    onChangesServer:(config:ServerConfigData) => void;
};

export function StackConfigRenderer({
    type,
    onChange,
    onChangeBackend,
    onChangeDatabase,
    onChangeStyling,
    onChangesServer,
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
         case "styling":
            return (
                <StylingConfig onChange={onChangeStyling}/>
            );
        case "server":
            return (
                <ServerConfig onChange={onChangesServer}/>
            );           

        default:
            return null;
    }
}