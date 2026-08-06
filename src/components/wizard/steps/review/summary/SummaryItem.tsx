import { Badge } from "@/components/ui/badge"



type Props = {
    label: string,
    badge: string | null,
}

export function SummaryItem({ label, badge }: Props) {
    return (
        <div>
            <p className="text-sm text-muted-foreground mb-1">
                {label}
            </p>

            {badge ? 
                <Badge >
                    {badge}
                </Badge>

            : <span>-</span>}

        </div>
    )
}