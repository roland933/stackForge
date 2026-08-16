import { useEffect, useState } from "react";

import { useDialog } from "@/hooks/useDialog";
import { presets, type quicktStartTypes } from "../../../quick-start/quict.start.types";

import { useWizardStore } from "@/store/wizard.store";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { toast } from "../../../ui/toast";
import { QuickStartDialog } from "@/components/dialogs/QuickStartDialog";
import { SetupCard } from "@/components/common/SetupCard";
import { Button } from "@/components/ui/button";
import { ConfigurationPresetDialog } from "@/components/dialogs/ConfigurationPresetDialog";
import { DownloadInstallDialog } from "@/components/dialogs/DownloadInstallDialog";
import type { InstallStatus } from "@/types/install.status.type";

export function ProjectSetup() {
    const presetDialog = useDialog();
    const configurationPresetDialog = useDialog();
    const downloadAndInstallDialog = useDialog();

    const [installStatus, setInstallStatus] = useState<InstallStatus>("confirm");
    const [backend,setBackend] = useState<boolean>(false)
    const [draftConfig, setDraftConfig] = useState<StackForgeConfig>();
    const [quickStartType, setQuickStartType] =
        useState<quicktStartTypes>("react");

    const [preset, setPreset] = useState<StackForgeConfig | null>(null);

    const handlePresetType = (type: quicktStartTypes) => {
        setQuickStartType(type);
        setPreset(presets[type]);
    };

    const loadPreset = (config: StackForgeConfig) => {
        useWizardStore.getState().loadConfig(config);

        setPreset(config);
        setBackend(!!config.backend.framework);
        presetDialog.hideDialog();

        toast.add({
            title: "Preset loaded successfully!",
            type: "success",
        });
    };

    

    const handleOpenConfigurationPresetDialog  = () => {
      
         setDraftConfig(presets[quickStartType]);
         configurationPresetDialog.setOpen(true);
    
    }

    const handledownloadAndInstallDialog = () => {
        downloadAndInstallDialog.setOpen(true);
        setInstallStatus("confirm");
    }


    return (
        <>
            <QuickStartDialog
                open={presetDialog.open}
                onOpenChange={presetDialog.setOpen}
                onContinue={() => {
                    loadPreset(presets[quickStartType]);
                }}
                presetType={quickStartType}
                setQuickStartType={handlePresetType}
            />

            <ConfigurationPresetDialog 
                open={configurationPresetDialog.open}
                onOpenChange={configurationPresetDialog.setOpen}
            />

            <DownloadInstallDialog open={downloadAndInstallDialog.open} 
                                   onOpenChange={() => downloadAndInstallDialog.setOpen(false)}
                                   status={installStatus}
                                   onInstall={() => setInstallStatus("generating")}
                                   
                                   />

            <div className="h-full overflow-y-auto">
                {!preset ? (
                    <div className="flex h-full items-center justify-center">
                        <div className="flex max-w-md flex-col items-center gap-5 text-center">

                            <div className="rounded-2xl border bg-muted/20 p-5">
                                {/* ide később ikon */}
                                <span className="text-3xl">⚙️</span>
                            </div>

                            <div className="space-y-2">
                                <h1 className="text-2xl font-semibold">
                                    No preset selected
                                </h1>

                                <p className="text-sm text-muted-foreground">
                                    Choose a preset to quickly configure your
                                    project. You can customize it afterwards.
                                </p>
                            </div>

                            <button
                                onClick={presetDialog.openDialog}
                                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                            >
                                Choose a preset
                            </button>

                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">

                        <div>
                            <h1 className="text-2xl font-semibold">
                                Project Setup
                            </h1>

                            <p className="text-sm text-muted-foreground">
                                Configure your project before generating it.
                            </p>
                        </div>

                        {/* IDE JÖNNEK MAJD A CONFIG KÁRTYÁK */}

                        <div className="rounded-xl border bg-muted/20 p-5">
                            <h2 className="font-medium">
                                Selected preset
                            </h2>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Your preset has been loaded and can now be
                                customized.
                            </p>
                        </div>



                        <div className="grid gap-4">

                            <SetupCard
                                title="Project"
                                description={preset.project.name}
                            />

                          <SetupCard
                                    title="Frontend"
                                    description="React"
                                    items={[
                                        "TypeScript",
                                        "Vite",
                                        "Tailwind",
                                        "shadcn",
                                        "React Router",
                                        "Zustand",
                                    ]}
                                    onEdit={() => console.log("edit frontend")}
                                />
                        {backend && (

                              <SetupCard
                                title="Backend"
                                description="Laravel"
                                items={[
                                    "PHP",
                                    "MySQL",
                                    "Docker",
                                ]}
                                onEdit={() => console.log("edit backend")}
                                 />


                         )}
                          
                           

                            <SetupCard
                                title="Features"
                                description={
                                    preset.features.quality.join(" · ")
                                }
                            />

                        </div>


                         <div className="flex justify-center gap-4">
                                <Button  variant={"outline"} onClick={handleOpenConfigurationPresetDialog}>Configuration Preset</Button>

                                <Button  onClick={handledownloadAndInstallDialog} 
                                         onChange={() =>  downloadAndInstallDialog.setOpen(false)}>
                                            Download and Install
                                </Button>


                                <Button  >Download Zip</Button>


                         </div>

                    </div>
                )}
            </div>
        </>
    );
}