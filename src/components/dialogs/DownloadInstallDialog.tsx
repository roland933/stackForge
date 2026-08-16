import {
    Check,
    CircleAlert,
    Download,
    Loader2,
    Rocket,
    X,
} from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { InstallStatus } from "@/types/install.status.type";



type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    status: InstallStatus;
    onInstall: () => void;
    onRetry?: () => void;
    frontendUrl?: string;
    backendUrl?: string;
};

const steps = [
    {
        id: "generating",
        label: "Generate project files",
    },
    {
        id: "installing",
        label: "Install dependencies",
    },
    {
        id: "starting",
        label: "Start services",
    },
] as const;

export function DownloadInstallDialog({
    open,
    onOpenChange,
    status,
    onInstall,
    onRetry,
    frontendUrl = "http://localhost:5173",
    backendUrl = "http://localhost:8000",
}: Props) {

    const isProcessing = [
        "generating",
        "installing",
        "starting",
    ].includes(status);

    const getStepState = (
        step: typeof steps[number]["id"]
    ) => {
        if (status === "success") {
            return "complete";
        }

        if (status === "error") {
            return "error";
        }

        if (status === step) {
            return "active";
        }

        const currentIndex = steps.findIndex(
            (item) => item.id === status
        );

        const stepIndex = steps.findIndex(
            (item) => item.id === step
        );

        if (currentIndex > stepIndex) {
            return "complete";
        }

        return "pending";
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">

                {/* CONFIRM */}
                {status === "confirm" && (
                    <>
                        <DialogHeader className="items-center text-center">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Rocket className="h-7 w-7" />
                            </div>

                            <DialogTitle className="mt-3 text-2xl">
                                Install & Run Project
                            </DialogTitle>

                            <DialogDescription className="max-w-md">
                                Stack Forge will create the project locally,
                                install the required dependencies and start
                                the configured services.
                            </DialogDescription>

                        </DialogHeader>

                        <Separator />

                        <div className="space-y-3">

                            {steps.map((step) => (
                                <div
                                    key={step.id}
                                    className="flex items-center gap-3 rounded-xl border bg-muted/20 p-3"
                                >
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <Check className="h-4 w-4" />
                                    </div>

                                    <span className="text-sm font-medium">
                                        {step.label}
                                    </span>
                                </div>
                            ))}

                        </div>

                        <DialogFooter className="mt-2">
                            <Button
                                variant="outline"
                                onClick={() => onOpenChange(false)}
                            >
                                Cancel
                            </Button>

                            <Button onClick={onInstall}>
                                <Download className="h-4 w-4" />
                                Install & Run
                            </Button>
                        </DialogFooter>
                    </>
                )}

                {/* PROCESSING */}
                {isProcessing && (
                    <>
                        <DialogHeader className="items-center text-center">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <Loader2 className="h-7 w-7 animate-spin" />
                            </div>

                            <DialogTitle className="mt-3 text-2xl">
                                {status === "generating" &&
                                    "Generating project..."}

                                {status === "installing" &&
                                    "Installing dependencies..."}

                                {status === "starting" &&
                                    "Starting services..."}
                            </DialogTitle>

                            <DialogDescription>
                                Please wait while Stack Forge prepares
                                your project.
                            </DialogDescription>

                        </DialogHeader>

                        <Separator />

                        <div className="space-y-3">

                            {steps.map((step) => {
                                const state = getStepState(step.id);

                                return (
                                    <div
                                        key={step.id}
                                        className={cn(
                                            "flex items-center gap-3 rounded-xl border p-3",
                                            state === "active" &&
                                                "border-primary bg-primary/5",
                                            state === "complete" &&
                                                "bg-muted/20"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "flex h-8 w-8 items-center justify-center rounded-full",
                                                state === "active" &&
                                                    "bg-primary text-primary-foreground",
                                                state === "complete" &&
                                                    "bg-primary/10 text-primary",
                                                state === "pending" &&
                                                    "bg-muted text-muted-foreground"
                                            )}
                                        >
                                            {state === "active" ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : state === "complete" ? (
                                                <Check className="h-4 w-4" />
                                            ) : (
                                                <span className="text-xs">
                                                    {steps.indexOf(step) + 1}
                                                </span>
                                            )}
                                        </div>

                                        <span
                                            className={cn(
                                                "text-sm font-medium",
                                                state === "pending" &&
                                                    "text-muted-foreground"
                                            )}
                                        >
                                            {step.label}
                                        </span>
                                    </div>
                                );
                            })}

                        </div>
                    </>
                )}

                {/* SUCCESS */}
                {status === "success" && (
                    <>
                        <DialogHeader className="items-center text-center">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                                <Check className="h-7 w-7" />
                            </div>

                            <DialogTitle className="mt-3 text-2xl">
                                Project Ready
                            </DialogTitle>

                            <DialogDescription>
                                Your project has been installed and is
                                ready to use.
                            </DialogDescription>

                        </DialogHeader>

                        <Separator />

                        <div className="space-y-3">

                            <div className="rounded-xl border p-4">
                                <p className="text-sm font-medium">
                                    Frontend
                                </p>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {frontendUrl}
                                </p>

                                <Button
                                    className="mt-3 w-full"
                                    variant="outline"
                                    onClick={() =>
                                        window.open(
                                            frontendUrl,
                                            "_blank"
                                        )
                                    }
                                >
                                    Open Frontend
                                </Button>
                            </div>

                            <div className="rounded-xl border p-4">
                                <p className="text-sm font-medium">
                                    Backend
                                </p>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    {backendUrl}
                                </p>

                                <Button
                                    className="mt-3 w-full"
                                    variant="outline"
                                    onClick={() =>
                                        window.open(
                                            backendUrl,
                                            "_blank"
                                        )
                                    }
                                >
                                    Open Backend
                                </Button>
                            </div>

                        </div>

                        <DialogFooter>
                            <Button
                                onClick={() => onOpenChange(false)}
                            >
                                Close
                            </Button>
                        </DialogFooter>
                    </>
                )}

                {/* ERROR */}
                {status === "error" && (
                    <>
                        <DialogHeader className="items-center text-center">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                                <CircleAlert className="h-7 w-7" />
                            </div>

                            <DialogTitle className="mt-3 text-2xl">
                                Installation Failed
                            </DialogTitle>

                            <DialogDescription>
                                Something went wrong while installing
                                or starting your project.
                            </DialogDescription>

                        </DialogHeader>

                        <Separator />

                        <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm text-muted-foreground">
                            Check the project configuration and try again.
                        </div>

                        <DialogFooter>
                            <Button
                                variant="outline"
                                onClick={() => onOpenChange(false)}
                            >
                                Close
                            </Button>

                            {onRetry && (
                                <Button onClick={onRetry}>
                                    Try Again
                                </Button>
                            )}
                        </DialogFooter>
                    </>
                )}

            </DialogContent>
        </Dialog>
    );
}