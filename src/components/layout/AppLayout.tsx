import { AppHeader } from "./AppHeader";
import { PreviewPanel } from "./PreviewPanel";
import { WizardContent } from "../wizard/WizardContent";
import { QuickStartDialog } from "../dialogs/QuickStartDialog";

import { useDialog } from "@/hooks/useDialog";

export function AppLayout() {
 
    const quickStart = useDialog();
   

    return (
        <>
        <QuickStartDialog open={quickStart.open} onOpenChange={quickStart.setOpen}/>

        <div className="flex h-screen flex-col bg-background">

            <AppHeader openQuickStartDialog={quickStart.openDialog}/>

           <main className="flex flex-1 gap-6 overflow-hidden p-6">

                    <div className="min-h-0 flex-1 overflow-y-auto">
                        <WizardContent />
                    </div>

                    <PreviewPanel />

                </main>

        </div>

       </>

    );
}