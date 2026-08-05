import { Badge } from "@/components/ui/badge"



type Props = {
    label: string,
    badges: [] | null,
}

export function SummaryItems({ label, badges }: Props) {
    return (
        <div>
            <p className="text-sm text-muted-foreground mb-2">
                {label}
            </p>

            <div className="flex gap-2">
                {badges?.map((item) => (
                    <Badge key={item}>{item}</Badge>
                ))}
            </div>

        </div>
    )
}