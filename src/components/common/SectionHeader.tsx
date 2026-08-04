import type { ReactNode } from "react";

type SectionHeaderProps = {
    title: string;
    description: string;
    icon: ReactNode;
};

export function SectionHeader({
    title,
    description,
    icon,
}: SectionHeaderProps) {
    return (
        <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                {icon}
            </div>

            <div>

                <h2 className="text-xl font-semibold">
                    {title}
                </h2>

                <p className="text-sm text-muted-foreground">
                    {description}
                </p>

            </div>

        </div>
    );
}