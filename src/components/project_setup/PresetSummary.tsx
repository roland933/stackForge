import { Button } from "@/components/ui/button";
import { SiReact, SiLaravel } from "react-icons/si";
import { Settings2,Plus } from "lucide-react";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { SelectedStack } from "../common/SelectedStack";
import { RenderBackendIcon } from "@/factory/RenderBackendIcon";
import { RenderFrontendIcon } from "@/factory/RenderFrontendIcon";

type Props = {
    preset: StackForgeConfig;
    onChange: () => void;
};

export function PresetSummary({ preset, onChange }: Props) {
    return (
        <div className="rounded-xl border bg-card p-5">
            <div className="flex items-start justify-between gap-4">

                <div className="space-y-4">

                    <div>
                        <h2 className="font-semibold">
                            Selected preset
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Your current project stack
                        </p>
                    </div>

                    <div className="flex items-center gap-3">

                        <div className="flex items-center gap-2">

                            <RenderFrontendIcon framework={preset.frontend.framework}  width="6" height="6" />
                            
                            <span className="font-medium text-xl">
                                 {preset.frontend.framework}
                            </span>
                        </div>

                    {preset.backend.framework && (
                        <>
                        <span >
                           <Plus className="text-muted-foreground"/>
                        </span>

                        <div className="flex items-center gap-2">

                            <RenderBackendIcon framework={preset.backend.framework}  width="6" height="6"/>
                          
                            <span className="font-medium text-xl">
                                {preset.backend.framework}
                            </span>
                        </div>
                            </>
                    )}
                  

                    </div>

                  
                     <SelectedStack />
                        
          

                </div>

                <Button
                    variant="outline"
                    onClick={onChange}
                >
                    <Settings2 className="mr-2 h-4 w-4" />
                    Change preset
                </Button>

            </div>
        </div>
    );
}