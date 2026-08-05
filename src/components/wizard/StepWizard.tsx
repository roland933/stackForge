import { steps } from "@/data/steps";
import { cn } from "@/lib/utils";
import { useWizardStore } from "@/store/wizard.store";
import { Check } from "lucide-react";
export function StepWizard() {
    const currentStep = useWizardStore(state => state.currentStep);

    return (
        <div className="mb-10">

            <div className="flex items-start">

                {steps.map((step, index) => {

                   const isActive = step.id === currentStep;
                    const isCompleted = step.id < currentStep;
                    const isLast = index === steps.length - 1;

                    return (
                        <div
                            key={step.id}
                            className="flex flex-1 items-start"
                        >

                            <div className="flex flex-col items-center">

                               <div
                                className={cn(
                                    "flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-all",

                                    isActive &&
                                        "border-primary bg-primary text-primary-foreground",

                                    isCompleted &&
                                        "border-primary bg-primary text-primary-foreground",

                                    !isActive &&
                                        !isCompleted &&
                                        "border-border bg-background text-muted-foreground"
                                )}
                            >
                                {isCompleted ? (
                                    <Check className="h-5 w-5" />
                                ) : (
                                    step.id
                                )}
                            </div>

                            </div>

                            <div className="ml-3 mt-1">

                                <p
                                   className={cn(
                                            "font-medium transition-colors",
                                            (isActive || isCompleted) && "text-primary"
                                        )}
                                >
                                    {step.title}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>

                            </div>

                            {!isLast && (
                                <div
                                    className={cn(
                                        "mx-5 mt-5 h-px flex-1",

                                        isCompleted
                                            ? "bg-primary"
                                            : "bg-border"
                                    )}
                                />
                            )}

                        </div>
                    );

                })}

            </div>

        </div>
    );
}