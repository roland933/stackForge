import { AppHeader } from "./AppHeader";
import { PreviewPanel } from "./PreviewPanel";

import { Toaster } from "../ui/toast";
import { ProjectSetup } from "../wizard/steps/project";

export function AppLayout() {
    return (
        <>
            <Toaster />

            <div className="flex h-screen flex-col bg-background">

                <AppHeader />

                <main className="flex flex-1 gap-6 overflow-hidden p-6">

                    <div className="min-h-0 flex-1">
                        <ProjectSetup />
                    </div>

                    <PreviewPanel />

                </main>

            </div>
        </>
    );
}