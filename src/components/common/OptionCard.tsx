import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { OptionCardProps } from "@/types/option.card.types";

export function OptionCard({
    title,
    description,
    icon: Icon,
    selected = false,
    disabled = false,
    onClick,
}: OptionCardProps) {
    return (
        <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "group relative flex gap-2 w-full   rounded-2xl border bg-card p-4 text-left transition-all duration-200",

                "hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:cursor-pointer",

                selected &&
                    "border-primary bg-primary/5 ring-1 ring-primary",

                disabled &&
                    "cursor-not-allowed opacity-50 hover:translate-y-0 hover:shadow-none"
            )}
        >
            {selected && (
                <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-4 w-4" />
                </div>
            )}

            <div
                className={cn(
                    "mb-5 flex h-10 w-10 items-center justify-center rounded-xl transition-colors",

                    selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                )}
            >
              
                        {Icon}
                    
            </div>
              
            <div> 
            <h3 className="text-lg font-semibold">
                {title}
            </h3>

            {description && (
                <p className=" text-sm text-muted-foreground">
                    {description}
                </p>
            )}
            </div> 
        </button>
    );
}