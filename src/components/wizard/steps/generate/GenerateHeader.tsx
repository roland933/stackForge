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

export function GenerateHeader() {
      const porjectGenerate = async () => {
        const project = generate(createConfig())
    
        try {
        await downloadProject(project);
        }catch(e) {
          alert("An error occurred while downloading the file.")
        }
        
        
      }

    return (
        <div className="rounded-2xl border bg-muted/20 p-10 text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Rocket className="h-8 w-8" />
            </div>

            <h2 className="mt-6 text-3xl font-bold">
                Ready to Generate
            </h2>

            <p className="mt-2 text-muted-foreground mb-5">
                Everything is ready. Export your configuration or generate your project.
            </p>


            <div className="flex gap-2 justify-center">

                  <Button  className={"cursor-pointer"} onClick={ porjectGenerate}>

                    <Rocket className="mr-1 h-5 w-5" />

                    Generate Project

                    </Button>

                <Button variant="outline" className={"cursor-pointer"} onClick={exportFile}>
                    <FileJson className="mr-2 h-4 w-4" />
                    Export JSON
                </Button>

                <Button variant="outline" className={"cursor-pointer"}>
                    <Upload className="mr-2 h-4 w-4" />
                    Import JSON
                </Button>

            </div>

        </div>
    )
}