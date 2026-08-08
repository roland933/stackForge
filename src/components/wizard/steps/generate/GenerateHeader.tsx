import {

    FileJson,

    Rocket,
    Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { exportFile } from "@/generator/export";
import { generate } from "@/generator/generate";
import { downloadProject } from "@/generator/download";
import { createConfig } from "@/lib/createConfig";
import { GenerateProjectDialog } from "@/components/dialogs/GenerateProjectDialog";
import { useDialog } from "@/hooks/useDialog";
import { useState } from "react";
import type { GeneratedProject } from "@/generator/types/GeneratedProject";
import { buildSummary } from "@/lib/buildSummary";

export function GenerateHeader() {
        const dialog = useDialog();
        const [generatedProject, setGeneratedProject] = useState<GeneratedProject | null>(null);
        const config = createConfig();
        const summary =  buildSummary();
        const stacks = summary.frontend.concat(summary.backend).concat(summary.features)
        
   

        const projectGenerate = async () => {
                try {
                    const project = generate(config);

                    setGeneratedProject(project);
                } catch (e) {
                    alert("An error occurred while generating the project.");
                }
            };

      

    return (
        <>
       <GenerateProjectDialog
            projectName={config.project.name}
            technologies={stacks}
            open={dialog.open}
            onOpenChange={dialog.setOpen}
            onGenerate={projectGenerate}
            onDownload={async () => {
                if (generatedProject) {
                    await downloadProject(generatedProject);
                    dialog.hideDialog();
                }
            }}
        />

        <div className="rounded-2xl border border-primary/10 bg-primary/[0.02] p-10 text-center">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 ring-1 ring-violet-500/20">
                    <Rocket className="h-6 w-6 animate-pulse text-violet-400 transition-transform duration-300 hover:-translate-y-1" />
                </div>
            <h2 className="mt-6 text-3xl font-bold">
                Ready to Generate
            </h2>

            <p className="mt-2 text-muted-foreground mb-5">
                Everything is ready. Export your configuration or generate your project.
            </p>


            <div className="flex gap-2 justify-center">

                  <Button  className={"cursor-pointer bg-violet-600 hover:bg-violet-500 text-violet-100"} onClick={dialog.openDialog}>


                    Generate Project

                    </Button>

                <Button variant="outline" className={"cursor-pointer"} onClick={exportFile}>
                    <FileJson className="h-4 w-4" />
                   
                </Button>

                <Button variant="outline" className={"cursor-pointer"}>
                    <Upload className="h-4 w-4" />
                    
                </Button>

            </div>

        </div>

    </>
    )
}