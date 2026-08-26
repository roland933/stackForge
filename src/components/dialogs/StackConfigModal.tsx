import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StackConfigRenderer } from "@/factory/StackConfigRenderer";
import type { StackConfigType } from "@/types/stack.config.type";
import type { FrontendConfigData } from "../configs/FrontendConfig";
import { useState } from "react";
import { useFrontend } from "../wizard/steps/frontend/hooks/useFrontend";
import type { BackendConfigData } from "../configs/BackendConfig";
import { useBackend } from "../wizard/steps/backend/hooks/useBackend";
import type { DatabaseConfigData } from "../configs/DatabesConfig";
import type { StylingConfigData } from "../configs/StylingConfig";
import { useStyling } from "@/hooks/configs/useStyling";
import { useServer } from "../configs/hooks/useServer";
import type { ServerConfigData } from "../configs/ServerConfig";
import { useDatabase } from "../configs/hooks/useDatabase";


interface StackConfigModalProps {
    type: StackConfigType;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function StackConfigModal({
    type,
    open,
    onOpenChange,
}: StackConfigModalProps) {
    const title = {
        frontend: "Configure Frontend",
        backend: "Configure Backend",
        database: "Configure Database",
        styling: "Configure Styling",
        server:  "Configure Server"
    }[type];

    const description = {
        frontend: "Configure your frontend framework and dependencies.",
        backend: "Configure your backend framework and dependencies.",
        database: "Configure your database.",
        styling: "Confgiure your styling",
        server: "Confgiure your server"
    }[type];

    const [config, setConfig] = useState<FrontendConfigData | null>(null);
    const [backendConfig, setBackendConfig] = useState<BackendConfigData | null>(null);
    const [databaseConfig, setDatabaseConfig] = useState<DatabaseConfigData | null>(null); 
    const [stylingConfig, setStylingConfig] = useState<StylingConfigData | null>(null); 
    const [serverConfig, setServerConfig] = useState<ServerConfigData | null>(null); 
   

    const { setFrontend } = useFrontend();
    const { setBackend } = useBackend();
    const { setDatabase } = useDatabase();
    const { setStyling} = useStyling();
    const {setServer} = useServer();
   

    const handleSave = () => {
        if (type === "frontend" && config) {
            setFrontend({
                framework: config.framework,
                dependencies: config.dependencies,
            });
        }
       
        if (type === "backend" && backendConfig) {
            setBackend({
                framework: backendConfig.framework,
                dependencies: backendConfig.dependencies,
            });
        }

          if (type === "database" && databaseConfig) {
           
             setDatabase({
                    id: databaseConfig.id,
                    port: databaseConfig.port,
                    username: databaseConfig.username,
                });
        }

         if (type === "styling" && stylingConfig) {
           
            setStyling({
                framework: stylingConfig.framework,
                dependencies:stylingConfig.dependencies
                
            });
        }

          if (type === "server" && serverConfig) {
           
            setServer({
                server: serverConfig.server,
            });
        }

        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle className={"text-lg"}>{title}</DialogTitle>

                    <DialogDescription className={"text-base"}>
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <div className="py-4">
                    <StackConfigRenderer type={type} 
                                         onChange={setConfig} 
                                        onChangeBackend={setBackendConfig} 
                                        onChangeDatabase={setDatabaseConfig}
                                        onChangeStyling={setStylingConfig}
                                        onChangesServer={setServerConfig}
                                        />
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button onClick={handleSave}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}