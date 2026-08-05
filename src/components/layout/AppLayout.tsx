import { AppHeader } from "./AppHeader";
import { PreviewPanel } from "./PreviewPanel";
import { WizardContent } from "../wizard/WizardContent";

export function AppLayout() {
    return (
        <div className="flex h-screen flex-col bg-background">

            <AppHeader />

           <main className="flex flex-1 gap-6 overflow-hidden p-6">

                    <div className="min-h-0 flex-1 overflow-y-auto">
                        <WizardContent />
                    </div>

                    <PreviewPanel />

                </main>

        </div>
    );
}