import { AppHeader } from "./AppHeader";
import { PreviewPanel } from "./PreviewPanel";
import { WizardContent } from "../wizard/WizardContent";
import { QuickStartDialog } from "../dialogs/QuickStartDialog";

import { useDialog } from "@/hooks/useDialog";
import { reactStarterPreset } from "@/presets/react.starter.preset";
import type { StackForgeConfig } from "@/generator/types/StackForgeConfig";
import { useWizardStore } from "@/store/wizard.store";
import { Toast, toast, Toaster } from "../ui/toast";
export function AppLayout() {
 
    const quickStart = useDialog();

    
    
    const loadPreset = (config:StackForgeConfig) => {
            
            quickStart.hideDialog();
            useWizardStore.getState().loadConfig(config);
            useWizardStore.getState().setStep(5);
            toast.add({
                title:"Loaded preset success!",
                type:"success",
                 
            })
    }
   

    return (
        <>
        <QuickStartDialog open={quickStart.open} onOpenChange={quickStart.setOpen} onContinue={() => loadPreset(reactStarterPreset)}/>
         
        
        <Toaster  />

        <div className="flex h-screen flex-col bg-background">

            <AppHeader openQuickStartDialog={quickStart.openDialog}/>

           <main className="flex flex-1 gap-6 overflow-hidden p-6">

                    <div className="min-h-0 flex-1 ">
                        <WizardContent />
                    </div>

                    <PreviewPanel />

                </main>

        </div>

       </>

    );
}