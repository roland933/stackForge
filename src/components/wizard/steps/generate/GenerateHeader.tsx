import {

    FileJson,

    Rocket,
    Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function GenerateHeader() {
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

                <Button variant="outline" className={"cursor-pointer"}>
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