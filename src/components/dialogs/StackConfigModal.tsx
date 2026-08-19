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
    }[type];

    const description = {
        frontend: "Configure your frontend framework and dependencies.",
        backend: "Configure your backend framework and dependencies.",
        database: "Configure your database.",
    }[type];

    const [config, setConfig] = useState<FrontendConfigData | null>(null);
    const [backendConfig, setBackendConfig] = useState<BackendConfigData | null>(null);
    const [databaseConfig, setDatabaseConfig] = useState<DatabaseConfigData | null>(null); 
    const { setFrontend } = useFrontend();
    const { setBackend } = useBackend();

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
            console.log(4444,databaseConfig)
            setBackend({
                database: databaseConfig.database,
                
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
                    <StackConfigRenderer type={type} onChange={setConfig} onChangeBackend={setBackendConfig} onChangeDatabase={setDatabaseConfig} />
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