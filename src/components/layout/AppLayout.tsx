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

                <main className="flex flex-1 overflow-hidden p-6">
                    <div className="mx-auto w-full  max-w-[1600px] min-h-0">
                       <ProjectSetup />
                    </div>
                </main>

          

            </div>
        </>
    );
}