import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type SetupCardProps = {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    items?: string[];
    onEdit?: () => void;
};

export function SetupCard({
    title,
    description,
    icon,
    items = [],
    onEdit,
}: SetupCardProps) {
    return (
        <div className="rounded-2xl border bg-card p-5 transition-colors hover:border-primary/30">

            <div className="flex items-start gap-4">

                {icon && (
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {icon}
                    </div>
                )}

                <div className="min-w-0 flex-1">

                    <div className="flex items-center justify-between gap-4">

                        <div>
                            <h3 className="text-base font-semibold">
                                {title}
                            </h3>

                            {description && (
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {description}
                                </p>
                            )}
                        </div>

                        {onEdit && (
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={onEdit}
                            >
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit
                            </Button>
                        )}

                    </div>

                    {items.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {items.map((item) => (
                                <Badge
                                    key={item}
                                    variant="secondary"
                                >
                                    {item}
                                </Badge>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}