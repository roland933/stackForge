import { useEffect, useState } from "react";

import { useDialog } from "@/hooks/useDialog";
import {
  presets,
  type quicktStartTypes,
} from "../../../quick-start/quict.start.types";
import { createLocalProject } from "@/services/localAgent.service";
import { useWizardStore } from "@/store/wizard.store";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { toast } from "../../../ui/toast";
import { QuickStartDialog } from "@/components/dialogs/QuickStartDialog";
import { ConfigurationPresetDialog } from "@/components/dialogs/ConfigurationPresetDialog";
import { DownloadInstallDialog } from "@/components/dialogs/DownloadInstallDialog";
import type { InstallStatus } from "@/types/install.status.type";
import { buildFiles } from "@/generator/helpers/buildFiles";

import { slugifyProjectName } from "@/generator/download";
import { PresetSummary } from "@/components/project_setup/PresetSummary";
import { NoPresetSelected } from "@/components/project_setup/NoPresetSelect";
import { ProjectCard } from "@/components/project_setup/ProjectCard";
import { FrontendCard } from "@/components/project_setup/FrontendCard";
import { BackendCard } from "@/components/project_setup/BackendCard";
import { DatabaseCard } from "@/components/project_setup/DatabaseCard";
import { StylingCard } from "@/components/project_setup/StylingCard";
import { SetupCTA } from "@/components/project_setup/SetupCta";
import { StackConfigModal } from "@/components/dialogs/StackConfigModal";
import { useFrontend } from "../frontend/hooks/useFrontend";


export function ProjectSetup() {
  const presetDialog = useDialog();
  const configurationPresetDialog = useDialog();
  const downloadAndInstallDialog = useDialog();
  const frontendDialog = useDialog();  
  const [installStatus, setInstallStatus] = useState<InstallStatus>("confirm");
  const [backend, setBackend] = useState<boolean>(false);
  const [projectUrls, setProjectUrls] = useState({
    frontend: "",
    backend: "",
  });
  const [quickStartType, setQuickStartType] = useState<quicktStartTypes | null>(
    null,
  );

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
    console.log(config);

    toast.add({
      title: "Preset loaded successfully!",
      type: "success",
    });
  };


  const handledownloadAndInstallDialog = () => {
    downloadAndInstallDialog.setOpen(true);
    setInstallStatus("confirm");
  };

  const handleInstall = async () => {
    try {
      setInstallStatus("installing");

      const files = buildFiles(preset);

      const result = await createLocalProject(
        slugifyProjectName(preset?.project.name),
        files,
      );

      console.log("Project created:", result);

      if (result.status === "ready") {
        setProjectUrls({
          frontend: result.frontend,
          backend: result.backend,
        });

        setInstallStatus("success");
      }
    } catch (error) {
      console.error(error);
      setInstallStatus("error");
    }
  };

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

      <DownloadInstallDialog
        open={downloadAndInstallDialog.open}
        onOpenChange={() => downloadAndInstallDialog.setOpen(false)}
        status={installStatus}
        frontendUrl={projectUrls.frontend}
        backendUrl={projectUrls.backend}
        onInstall={handleInstall}
      />

      <StackConfigModal open={frontendDialog.open} type="frontend" onOpenChange={() => frontendDialog.setOpen(false)}/>

      <div className="h-full overflow-y-auto custom-scrollbar p-5">
        {!preset ? (
          <NoPresetSelected onClick={() => presetDialog.setOpen(true)} />
        ) : (
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl font-semibold">Project Setup</h1>

              <p className="text-sm text-muted-foreground">
                Configure your project before generating it.
              </p>
            </div>

            <div className="flex gap-6">
              <div className="flex-1">
               
                <PresetSummary
                  preset={preset}
                  onChange={() => presetDialog.setOpen(true)}
                />
              </div>
              <div>
               
                <ProjectCard />
              </div>
            </div>

           
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <FrontendCard
                  frontend={preset.frontend}
                  onConfigure={() => frontendDialog.setOpen(true)}
                />

                {backend && (
                  <>
                    <BackendCard config={preset.backend}  onConfigure={() => console.log("")}/>

                    <DatabaseCard config={preset.backend}/>
                  </>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <StylingCard styling={["Tailwind"]}
                                uiLibrary="shadcn/ui"
                                onConfigure={() => {}}/>


                 <SetupCTA onGenerate={handledownloadAndInstallDialog}/>  
                 
              </div>
           
               
    
          </div>
        )}
      </div>
    </>
  );
}
