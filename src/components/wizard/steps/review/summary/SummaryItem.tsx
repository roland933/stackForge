import { Badge } from "@/components/ui/badge"



type Props = {
    label: string,
    badge: string | null,
}

export function SummaryItem({ label, badge }: Props) {
    return (
        <div>
            <p className="text-sm text-muted-foreground">
                {label}
            </p>

            {badge && (
                <Badge >
                    {badge}
                </Badge>

            )}

        </div>
    )
}