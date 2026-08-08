import { useEffect, useState } from "react";
import {
    Check,
    Download,
    Loader2,
    Rocket,
    X,
} from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type GenerateStatus = "confirm" | "generating" | "success";

type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    projectName: string;
    technologies: string[];
    onGenerate: () => Promise<void>;
    onDownload: () => void;
};

export function GenerateProjectDialog({
    open,
    onOpenChange,
    projectName,
    technologies,
    onGenerate,
    onDownload,
}: Props) {

    const [status, setStatus] = useState<GenerateStatus>("confirm");

    const handleGenerate = async () => {
        setStatus("generating");

        try {
            await onGenerate();

            setStatus("success");
        } catch (error) {
            console.error(error);

            setStatus("confirm");
        }
    };

    const handleClose = () => {
        if (status === "generating") {
            return;
        }

        setStatus("confirm");
        onOpenChange(false);
    };


useEffect(() => {
    if (open) {
        setStatus("confirm");
    }
}, [open]);

    return (
        <Dialog
            open={open}
            onOpenChange={(value) => {
                if (status !== "generating") {
                    onOpenChange(value);
                }
            }}
        >
            <DialogContent className="overflow-hidden text-white sm:max-w-lg">

                {/* CONFIRM */}

                {status === "confirm" && (
                    <>
                        <DialogHeader className="items-center text-center">

                            <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 ring-1 ring-violet-500/20">
                                <Rocket className="h-7 w-7 text-violet-400" />
                            </div>

                            <DialogTitle className="text-2xl">
                                Ready to Generate
                            </DialogTitle>

                            <DialogDescription className="text-secondary-foreground">
                                Your project configuration is ready.
                                Generate and download your project when you're ready.
                            </DialogDescription>

                        </DialogHeader>


                        {/* Project */}

                        <div className="mt-4 rounded-xl border  bg-muted/20 p-4">

                            <p className="text-xs font-medium uppercase tracking-wider text-muted-500">
                                Project
                            </p>

                            <p className="mt-1 font-medium">
                                {projectName}
                            </p>

                        </div>


                        {/* Technologies */}

                        <div className="rounded-xl border  bg-muted/20 p-4">

                            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-secondary-foreground">
                                Selected Stack
                            </p>

                            <div className="flex flex-wrap gap-2">

                                {technologies.map((technology) => (
                                    <Badge
                                        key={technology}
                                       
                                        
                                       
                                    >
                                        {technology}
                                    </Badge>
                                ))}

                            </div>

                        </div>


                        {/* Actions */}

                        <div className="mt-2 flex justify-end gap-3">

                            <Button
                                variant="ghost"
                                onClick={handleClose}
                                className="text-slate-400 hover:bg-slate-800 hover:text-white"
                            >
                                Cancel
                            </Button>

                            <Button
                                onClick={handleGenerate}
                                className="bg-violet-600 hover:bg-violet-500 text-violet-100 hover:cursor-pointer"
                            >
                               
                                Generate & Download
                            </Button>

                        </div>
                    </>
                )}


                {/* GENERATING */}

                {status === "generating" && (
                    <div className="flex flex-col items-center py-8 text-center">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/15 ring-1 ring-violet-500/20">

                            <Loader2 className="h-8 w-8 animate-spin text-violet-400" />

                        </div>

                        <h2 className="mt-6 text-2xl font-semibold">
                            Generating project...
                        </h2>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
                            Stack Forge is building your project.
                            Please wait a moment.
                        </p>

                    </div>
                )}


                {/* SUCCESS */}

                {status === "success" && (
                    <div className="flex flex-col items-center py-8 text-center">

                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/20">

                            <Check className="h-8 w-8 text-emerald-400" />

                        </div>

                        <h2 className="mt-6 text-2xl font-semibold">
                            Generation successful!
                        </h2>

                        <p className="mt-2 max-w-sm text-sm leading-6 text-secondary-foreground">
                            Your project has been generated successfully
                            and is ready to download.
                        </p>


                        <div className="mt-7 flex gap-3">

                            <Button
                                variant="ghost"
                                onClick={handleClose}
                                className=" hover:bg-muted/20 hover:text-white hover:cursor-pointer"
                            >
                                Close
                            </Button>

                            <Button
                                onClick={onDownload}
                                className="bg-emerald-600 hover:bg-emerald-500 hover:cursor-pointer"
                            >
                                
                                Download Project
                                <Download className="mr-1 h-4 w-4" />
                            </Button>

                        </div>

                    </div>
                )}

            </DialogContent>
        </Dialog>
    );
}