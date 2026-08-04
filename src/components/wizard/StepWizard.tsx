import { steps } from "@/data/steps";
import { cn } from "@/lib/utils";

export function StepWizard() {
    const currentStep = 1;

    return (
        <div className="mb-10">

            <div className="flex items-start">

                {steps.map((step, index) => {

                    const active = step.id === currentStep;
                    const last = index === steps.length - 1;

                    return (
                        <div
                            key={step.id}
                            className="flex flex-1 items-start"
                        >

                            <div className="flex flex-col items-center">

                                <div
                                    className={cn(
                                        "flex h-10 w-10 items-center justify-center rounded-full border text-xl font-bold transition-all",
                                        active
                                            ? "border-primary bg-primary text-primary-foreground"
                                            : "border-border bg-background"
                                    )}
                                >
                                    {step.id}
                                </div>

                            </div>

                            <div className="ml-3 mt-1">

                                <p
                                    className={cn(
                                        "font-medium text-xl",
                                        active && "text-primary"
                                    )}
                                >
                                    {step.title}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>

                            </div>

                            {!last && (
                                <div className="mx-5 mt-5 h-px flex-1 bg-border" />
                            )}

                        </div>
                    );

                })}

            </div>

        </div>
    );
}