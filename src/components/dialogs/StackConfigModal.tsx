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
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import type { FrontendConfigData } from "../configs/FrontendConfig";
import { useState } from "react";
import { useFrontend } from "../wizard/steps/frontend/hooks/useFrontend";





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
    const {setFrontend} = useFrontend();
    const handleSave = () => {
        if (!config) return;

        setFrontend({
            framework: config.framework,
            dependencies: config.dependencies,
        });

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
                    <StackConfigRenderer type={type} onChange={setConfig} />
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => onOpenChange(false)}
                    >
                        Cancel
                    </Button>

                    <Button onClick={ handleSave}>
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}